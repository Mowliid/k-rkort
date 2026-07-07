"""
Skapa svenska Piper-ljudfiler för hemsidan.

Steg:
1. Installera Piper på Windows och ladda ner en svensk .onnx-röst.
   Exempel filnamn:
   sv_SE-nst-medium.onnx
   sv_SE-nst-medium.onnx.json

2. Lägg piper.exe och röstfilerna i valfri mapp.

3. Kör från projektmappen:
   python tools/generate_sv_audio_piper.py --piper "C:\piper\piper.exe" --model "C:\piper\sv_SE-nst-medium.onnx"

Då skapas WAV-filer i audio/sv:
001001_sv.wav
001002_sv.wav
...

Vill du ha MP3:
Installera ffmpeg och kör med --mp3.
"""

from pathlib import Path
import argparse
import json
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
DATA_JS = ROOT / "data.js"
OUT_DIR = ROOT / "audio" / "sv"

def load_data():
    text = DATA_JS.read_text(encoding="utf-8")
    m = re.search(r"window\.(?:SV_DATA|QURAN_DATA)\s*=\s*(\{.*\});?\s*$", text, re.S)
    if not m:
        raise RuntimeError("Kunde inte läsa data.js")
    return json.loads(m.group(1))

def clean_text(text: str) -> str:
    text = re.sub(r"\([^)]*\)", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

def run(cmd, input_text=None):
    subprocess.run(cmd, input=input_text, text=True, check=True)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--piper", required=True, help="Sökväg till piper.exe")
    ap.add_argument("--model", required=True, help="Sökväg till svensk .onnx-röst")
    ap.add_argument("--mp3", action="store_true", help="Konvertera WAV till MP3 med ffmpeg")
    ap.add_argument("--limit", type=int, default=0, help="Testa bara första N verserna")
    args = ap.parse_args()

    data = load_data()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    count = 0
    for sura, verses in data["verses"].items():
        for v in verses:
            s = int(v["sura"])
            n = int(v["verse"])
            text = clean_text(v.get("swedish", ""))
            if not text:
                continue

            wav = OUT_DIR / f"{s:03d}{n:03d}_sv.wav"
            mp3 = OUT_DIR / f"{s:03d}{n:03d}_sv.mp3"

            if args.mp3 and mp3.exists():
                continue
            if not args.mp3 and wav.exists():
                continue

            print(f"Skapar {s}:{n} ...")
            run([args.piper, "--model", args.model, "--output_file", str(wav)], input_text=text)

            if args.mp3:
                run(["ffmpeg", "-y", "-i", str(wav), "-codec:a", "libmp3lame", "-qscale:a", "4", str(mp3)])
                wav.unlink(missing_ok=True)

            count += 1
            if args.limit and count >= args.limit:
                print("Klar test-limit.")
                return

    print("Klar. Skapade", count, "ljudfiler.")

if __name__ == "__main__":
    main()
