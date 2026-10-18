$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$url = 'file:///e:/WEBSITE%20CREAT%20for%20MY%20BUSSINESS/Resume(CV)%20&%20Cover%20letter/test_error.html'
$proc = Start-Process -FilePath $edge -ArgumentList "--headless=new", "--disable-gpu", "--dump-dom", "`"$url`"" -NoNewWindow -PassThru -RedirectStandardOutput "dom_out.html"
$proc.WaitForExit(10000)
Get-Content "dom_out.html" -Raw
