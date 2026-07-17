@echo off
cd /d "%~dp0"
where code >nul 2>nul
if errorlevel 1 (
  echo Visual Studio Code kunde inte hittas automatiskt.
  echo Oppna Visual Studio Code och valj Arkiv - Oppna mapp.
  echo Valj denna mapp: %~dp0
  pause
  exit /b 1
)
code "KoranApp.code-workspace"
