@echo off
chcp 65001 >nul
title Skapa MP3 for lasskarm
echo Skapar surah-audio\001.mp3 till 114.mp3
echo Varje fil: arabisk vers - svensk rost - nasta vers.
python skapa_surah_ljudfiler.py
pause
