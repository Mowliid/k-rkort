@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js saknas.
  echo Installera Node.js eller oppna mappen i Visual Studio Code och anvand Live Server.
  pause
  exit /b 1
)
start "" cmd /c "ping 127.0.0.1 -n 3 >nul & start http://localhost:3000"
node server.js
