import os, sys, asyncio, subprocess, urllib.request, tempfile
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Installerar edge-tts...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts"])
    import edge_tts

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "surah-audio"
TMP = ROOT / "_audio_tmp"
OUT.mkdir(exist_ok=True)
TMP.mkdir(exist_ok=True)

# Read data.js through a tiny Node helper because it is JavaScript.
NODE_HELPER = TMP / "read-data.js"
NODE_HELPER.write_text("""
const fs=require('fs'),vm=require('vm');
const c={window:{}}; vm.createContext(c);
vm.runInContext(fs.readFileSync(process.argv[2],'utf8'),c);
console.log(JSON.stringify(c.window.SV_DATA));
""", encoding="utf-8")
raw = subprocess.check_output(["node", str(NODE_HELPER), str(ROOT/"data.js")], text=True)
import json
DATA=json.loads(raw)

VOICE="sv-SE-SofieNeural"

def p3(n): return str(n).zfill(3)

async def make_sv(text, path):
    await edge_tts.Communicate(text, VOICE, rate="-15%").save(str(path))

def download_ar(s, v, path):
    url=f"https://everyayah.com/data/Abdullah_Al-Matrood_128kbps/{p3(s)}{p3(v)}.mp3"
    urllib.request.urlretrieve(url, path)

async def build_surah(s):
    out=OUT/f"{p3(s)}.mp3"
    verses=DATA["verses"].get(str(s), [])
    parts=[]
    print(f"\nSura {s}: {len(verses)} verser")
    for i, verse in enumerate(verses, 1):
        ar=TMP/f"{p3(s)}_{p3(i)}_ar.mp3"
        sv=TMP/f"{p3(s)}_{p3(i)}_sv.mp3"
        if not ar.exists(): download_ar(s, i, ar)
        if not sv.exists(): await make_sv(verse["swedish"], sv)
        parts += [ar, sv]
        print(f"  {i}/{len(verses)}", end="\r")
    concat=TMP/f"concat_{p3(s)}.txt"
    concat.write_text("\n".join("file '"+str(p.resolve()).replace("'","'\\''")+"'" for p in parts), encoding="utf-8")
    subprocess.check_call(["ffmpeg","-y","-f","concat","-safe","0","-i",str(concat),"-c:a","libmp3lame","-b:a","128k",str(out)])
    print(f"\nKlar: {out.name}")

async def main():
    print("Skapar EN MP3 per sura: arabisk vers -> svensk AI-röst -> nästa vers.")
    start=int(input("Från sura [1]: ") or "1")
    end=int(input("Till sura [114]: ") or "114")
    for s in range(start,end+1):
        await build_surah(s)
    print("\nALLT KLART. Ladda upp mappen surah-audio tillsammans med hemsidan.")

asyncio.run(main())
