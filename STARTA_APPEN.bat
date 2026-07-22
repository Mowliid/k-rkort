@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js saknas.
  echo Installera Node.js fran https://nodejs.org/ och forsok igen.
  pause
  exit /b 1
)
echo Startar Quran-appen...
echo.
echo VIKTIGT FOR MOBIL:
echo 1. Datorn och mobilen ska vara anslutna till samma Wi-Fi.
echo 2. Tillat Node.js pa privata natverk om Windows-brandvaggen fragar.
echo 3. Det svarta fonstret visar adressen som du ska skriva i mobilen.
echo.
start "" cmd /c "ping 127.0.0.1 -n 3 >nul & start http://localhost:3000"
node server.js
pause
