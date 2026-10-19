$lines = Get-Content -Encoding UTF8 'app.js'
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i].Contains('\"')) {
        Write-Host ("Line " + ($i + 1) + ": " + $lines[$i])
    }
}
