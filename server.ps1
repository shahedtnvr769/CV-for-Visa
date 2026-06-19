$port = 8000

$baseDir = "e:\WEBSITE CREAT for MY BUSSINESS\Resume(CV) & Cover letter"
$imgDest = "$baseDir\pictur and video logo\bangladesh_cv_template.png"

# ── Find Bangladesh CV template image in brain folder ──
function Find-BdImage {
    $brainBase = "$env:USERPROFILE\.gemini\antigravity-ide\brain"
    if (-not (Test-Path $brainBase)) { return $null }
    
    # Try the generated preview image first
    $found = Get-ChildItem -Path $brainBase -Recurse -Filter "bangladesh_cv_template_preview_*.png" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($found) { return $found.FullName }
    
    # Try the original user-uploaded image
    $found = Get-ChildItem -Path $brainBase -Recurse -Filter "media_*_1781869297230.png" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($found) { return $found.FullName }
    
    # Try any PNG in tempmediaStorage
    $found = Get-ChildItem -Path $brainBase -Recurse -Filter "*.png" -ErrorAction SilentlyContinue | Where-Object { $_.DirectoryName -like "*tempmediaStorage*" } | Select-Object -First 1
    if ($found) { return $found.FullName }
    
    return $null
}

# ── Auto-copy Bangladesh CV template image at startup ──
if (-not (Test-Path $imgDest)) {
    $srcPath = Find-BdImage
    if ($srcPath) {
        try {
            Copy-Item -Path $srcPath -Destination $imgDest -Force -ErrorAction Stop
            Write-Host "✅ Bangladesh CV image copied: $srcPath"
        } catch {
            Write-Host "⚠️  Could not copy Bangladesh CV image: $_"
        }
    } else {
        Write-Host "ℹ️  Bangladesh CV image not found - proxy endpoint will serve on demand."
    }
} else {
    Write-Host "✅ Bangladesh CV template image already present."
}

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $port)
try {
    $listener.Start()
    Write-Host "TCP Web Server started on http://localhost:$port/"
} catch {
    Write-Host "Error starting TCP listener: $_"
    exit
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        
        # Non-blocking wait for data (max 200ms)
        $waitMs = 0
        while (-not $stream.DataAvailable -and $waitMs -lt 200) {
            [System.Threading.Thread]::Sleep(10)
            $waitMs += 10
        }
        
        if (-not $stream.DataAvailable) {
            $stream.Close()
            $client.Close()
            continue
        }
        
        # Read request header
        $buffer = New-Object byte[] 4096
        $read = $stream.Read($buffer, 0, $buffer.Length)
        if ($read -eq 0) { $client.Close(); continue }
        
        $requestText = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $read)
        $lines = $requestText -split "`r`n"
        if ($lines.Length -eq 0 -or [string]::IsNullOrEmpty($lines[0])) { $client.Close(); continue }
        
        $parts = $lines[0] -split " "
        if ($parts.Length -lt 2) { $client.Close(); continue }
        
        $urlPath = $parts[1]
        if ($urlPath.Contains("?")) { $urlPath = $urlPath.Substring(0, $urlPath.IndexOf("?")) }
        if ($urlPath -eq "/") { $urlPath = "/index.html" }

        # ── Special API endpoint: /api/bd-preview ──
        # Serves the Bangladesh CV image directly from the brain folder
        if ($urlPath -eq "/api/bd-preview") {
            $bytes = $null
            
            # First check if it's already been copied to the project folder
            if (Test-Path $imgDest) {
                $bytes = [System.IO.File]::ReadAllBytes($imgDest)
            } else {
                # Read directly from brain folder
                $srcPath = Find-BdImage
                if ($srcPath -and (Test-Path $srcPath)) {
                    $bytes = [System.IO.File]::ReadAllBytes($srcPath)
                    # Also save to project folder for future requests
                    try { Copy-Item -Path $srcPath -Destination $imgDest -Force -ErrorAction SilentlyContinue } catch {}
                }
            }
            
            if ($bytes) {
                $headers = "HTTP/1.1 200 OK`r`n" +
                           "Content-Type: image/png`r`n" +
                           "Content-Length: $($bytes.Length)`r`n" +
                           "Cache-Control: public, max-age=86400`r`n" +
                           "Access-Control-Allow-Origin: *`r`n" +
                           "Connection: close`r`n`r`n"
                $headersBytes = [System.Text.Encoding]::UTF8.GetBytes($headers)
                $stream.Write($headersBytes, 0, $headersBytes.Length)
                $stream.Write($bytes, 0, $bytes.Length)
            } else {
                $body = "Image not found"
                $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
                $headers = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($bodyBytes.Length)`r`nConnection: close`r`n`r`n"
                $headersBytes = [System.Text.Encoding]::UTF8.GetBytes($headers)
                $stream.Write($headersBytes, 0, $headersBytes.Length)
                $stream.Write($bodyBytes, 0, $bodyBytes.Length)
            }
            $stream.Close()
            $client.Close()
            continue
        }
        
        # ── Normal file serving ──
        $urlPath = $urlPath.Replace("/", "\").TrimStart("\")
        $filePath = [System.IO.Path]::Combine($baseDir, $urlPath)
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $contentType = "application/octet-stream"
            if ($filePath -like "*.html") { $contentType = "text/html; charset=utf-8" }
            elseif ($filePath -like "*.css") { $contentType = "text/css; charset=utf-8" }
            elseif ($filePath -like "*.js") { $contentType = "application/javascript; charset=utf-8" }
            elseif ($filePath -like "*.png") { $contentType = "image/png" }
            elseif ($filePath -like "*.jpg" -or $filePath -like "*.jpeg") { $contentType = "image/jpeg" }
            elseif ($filePath -like "*.svg") { $contentType = "image/svg+xml" }
            
            $headers = "HTTP/1.1 200 OK`r`n" +
                       "Content-Type: $contentType`r`n" +
                       "Content-Length: $($bytes.Length)`r`n" +
                       "Connection: close`r`n" +
                       "Access-Control-Allow-Origin: *`r`n`r`n"
            $headersBytes = [System.Text.Encoding]::UTF8.GetBytes($headers)
            $stream.Write($headersBytes, 0, $headersBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            $body = "404 Not Found"
            $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
            $headers = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($bodyBytes.Length)`r`nConnection: close`r`n`r`n"
            $headersBytes = [System.Text.Encoding]::UTF8.GetBytes($headers)
            $stream.Write($headersBytes, 0, $headersBytes.Length)
            $stream.Write($bodyBytes, 0, $bodyBytes.Length)
        }
        
        $stream.Close()
        $client.Close()
    } catch {
        if ($null -ne $client) { $client.Close() }
    }
}
