@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js saknas. Oppna i stallet mappen i Visual Studio Code och anvand Live Server.
  pause
  exit /b 1
)
start "" http://localhost:3000
node server.js
