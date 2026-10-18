$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$url = 'file:///e:/WEBSITE%20CREAT%20for%20MY%20BUSSINESS/Resume(CV)%20&%20Cover%20letter/index.html'
$proc = Start-Process -FilePath $edge -ArgumentList "--headless", "--disable-gpu", "--enable-logging=stderr", "--v=1", "`"$url`"" -NoNewWindow -PassThru -RedirectStandardError 'edge_err.log' -RedirectStandardOutput 'edge_out.log'
Start-Sleep -Seconds 4
if (!$proc.HasExited) { Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue }
Get-Content 'edge_err.log' -ErrorAction SilentlyContinue | Select-String -Pattern "CONSOLE"
