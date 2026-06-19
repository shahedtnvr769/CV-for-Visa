@echo off
echo ================================================
echo  Connecting project to GitHub...
echo ================================================
echo.

:: Navigate to E drive and project folder
E:
cd "E:\WEBSITE CREAT for MY BUSSINESS\Resume(CV) & Cover letter"

echo Current directory:
cd
echo.

:: Create README.md if not exists
if not exist README.md (
    echo # CV-for-Visa > README.md
    echo Created README.md
)

:: Initialize git if not already done
git init

:: Stage all files
git add .

:: Commit
git commit -m "first commit"

:: Rename branch to main
git branch -M main

:: Set remote (remove first if exists)
git remote remove origin 2>nul
git remote add origin https://github.com/shahedtnvr769/CV-for-Visa.git

:: Push to GitHub
echo.
echo Pushing to GitHub...
echo (A browser login window may appear - please authorize GitHub)
echo.
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ================================================
    echo  SUCCESS! Files pushed to GitHub!
    echo  URL: https://github.com/shahedtnvr769/CV-for-Visa
    echo ================================================
) else (
    echo ================================================
    echo  ERROR: Push failed.
    echo  Make sure you are logged in to GitHub.
    echo  Try: git config --global credential.helper manager
    echo ================================================
)

echo.
pause
