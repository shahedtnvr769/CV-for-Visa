$script = Get-Content 'app.js' -Raw
$b = 0; $p = 0; $k = 0;
$inStr = $false; $strCh = ''; $esc = $false; $inComm = $false
for ($i = 0; $i -lt $script.Length; $i++) {
    $c = $script[$i]
    if ($inComm) {
        if ($c -eq '*' -and $i+1 -lt $script.Length -and $script[$i+1] -eq '/') { $inComm = $false; $i++ }
        continue
    }
    if ($inStr) {
        if ($esc) { $esc = $false; continue }
        if ($c -eq '\') { $esc = $true; continue }
        if ($c -eq $strCh) { $inStr = $false; continue }
        continue
    }
    if ($c -eq '/' -and $i+1 -lt $script.Length -and $script[$i+1] -eq '/') {
        while ($i -lt $script.Length -and $script[$i] -ne "`n") { $i++ }
        continue
    }
    if ($c -eq '/' -and $i+1 -lt $script.Length -and $script[$i+1] -eq '*') { $inComm = $true; $i++; continue }
    if ($c -eq '"' -or $c -eq "'" -or $c -eq '`') { $inStr = $true; $strCh = $c; continue }

    if ($c -eq '{') { $b++ }
    elseif ($c -eq '}') {
        $b--
        if ($b -lt 0) {
            $line = ($script.Substring(0, $i) -split '\r?\n').Length
            Write-Host "Extra closing brace at char $i, line $line"
            $start = [Math]::Max(0, $i - 100)
            Write-Host "Context:"
            Write-Host $script.Substring($start, 200)
            break
        }
    }
}
