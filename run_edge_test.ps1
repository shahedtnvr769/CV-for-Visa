$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$url = 'file:///e:/WEBSITE%20CREAT%20for%20MY%20BUSSINESS/Resume(CV)%20&%20Cover%20letter/test_error.html'
$p = Start-Process -FilePath $edge -ArgumentList '--headless=new', '--disable-gpu', '--virtual-time-budget=4000', '--dump-dom', "`"$url`"" -NoNewWindow -PassThru -RedirectStandardOutput 'test_dom.txt' -RedirectStandardError 'test_err.txt'
$p.WaitForExit(8000)
if (!$p.HasExited) { Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue }
Get-Content 'test_dom.txt' -ErrorAction SilentlyContinue
Get-Content 'test_err.txt' -ErrorAction SilentlyContinue | Select-String -Pattern "error|exception|JSERROR"
