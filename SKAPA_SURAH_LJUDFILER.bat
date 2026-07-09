@echo off
chcp 65001 >nul
echo Skapar en ljudfil per sura...
where node >nul 2>nul || (echo Node.js saknas. Installera Node.js och forsok igen.&pause&exit /b 1)
where ffmpeg >nul 2>nul || (echo FFmpeg saknas. Installera FFmpeg och forsok igen.&pause&exit /b 1)
python skapa_surah_ljudfiler.py
pause
