import os, sys, asyncio, subprocess, urllib.request, json, shutil
from pathlib import Path

ROOT=Path(__file__).resolve().parent
OUT=ROOT/"surah-audio"; TMP=ROOT/"_surah_audio_tmp"
OUT.mkdir(exist_ok=True); TMP.mkdir(exist_ok=True)

def check(cmd, name):
    if shutil.which(cmd) is None:
        print(f"{name} saknas. Installera {name} först.")
        sys.exit(1)

check("node","Node.js")
check("ffmpeg","FFmpeg")

try:
    import edge_tts
except ImportError:
    print("Installerar edge-tts...")
    subprocess.check_call([sys.executable,"-m","pip","install","edge-tts"])
    import edge_tts

helper=TMP/"read_data.js"
helper.write_text("const fs=require('fs'),vm=require('vm');const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync(process.argv[2],'utf8'),c);console.log(JSON.stringify(c.window.SV_DATA));",encoding="utf-8")
DATA=json.loads(subprocess.check_output(["node",str(helper),str(ROOT/"data.js")],text=True))
VOICE="sv-SE-SofieNeural"
def p3(n): return str(n).zfill(3)

def dl_ar(s,v,path):
    for folder in ["Abdullah_Al-Matrood_128kbps","Abdullah_Al-Matrood_64kbps"]:
        try:
            urllib.request.urlretrieve(f"https://everyayah.com/data/{folder}/{p3(s)}{p3(v)}.mp3", path)
            if path.exists() and path.stat().st_size>1000: return
        except Exception: pass
    raise RuntimeError(f"Kunde inte ladda arabisk ljudfil {s}:{v}")

async def mk_sv(text,path):
    clean=" ".join(str(text).replace("(T)","").split())
    await edge_tts.Communicate(clean,VOICE,rate="-15%").save(str(path))

async def build(s):
    verses=DATA["verses"].get(str(s),[])
    final=OUT/f"{p3(s)}.mp3"
    if final.exists() and final.stat().st_size>10000:
        print(f"Sura {s} finns redan."); return
    parts=[]
    print(f"Skapar sura {s}, {len(verses)} verser")
    for i,v in enumerate(verses,1):
        ar=TMP/f"{p3(s)}_{p3(i)}_ar.mp3"; sv=TMP/f"{p3(s)}_{p3(i)}_sv.mp3"
        if not ar.exists() or ar.stat().st_size<1000: dl_ar(s,i,ar)
        if not sv.exists() or sv.stat().st_size<1000: await mk_sv(v["swedish"],sv)
        parts += [ar,sv]
        print(f"  {i}/{len(verses)}", end="\r")
    concat=TMP/f"concat_{p3(s)}.txt"
    concat.write_text("\n".join("file '"+str(p.resolve()).replace("'","'\\''")+"'" for p in parts),encoding="utf-8")
    subprocess.check_call(["ffmpeg","-y","-f","concat","-safe","0","-i",str(concat),"-c:a","libmp3lame","-b:a","128k",str(final)])
    print(f"\nKlar: {final}")

async def main():
    print("Skapar riktig MP3 per sura: arabisk vers -> svensk röst -> nästa vers.")
    a=int(input("Från sura [1]: ") or "1")
    b=int(input("Till sura [114]: ") or "114")
    for s in range(a,b+1): await build(s)
    print("KLART. Ladda upp mappen surah-audio till GitHub Pages.")

asyncio.run(main())
