$lines = Get-Content -Encoding UTF8 'app.js'
for ($i = 2798; $i -le 2805; $i++) {
    $line = $lines[$i - 1]
    Write-Host ("Line {0}: len={1} | {2}" -f $i, $line.Length, $line)
    $chars = $line.ToCharArray()
    $hex = ($chars | ForEach-Object { [int]$_ }) -join ' '
    Write-Host ("Char codes: " + $hex)
}
