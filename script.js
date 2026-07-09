const DATA = window.SV_DATA;
let currentSurah = DATA.surahs[0];
let currentVerses = [];
let currentIndex = 0;
let playing = false;
let voices = [];
let selectedSwedishVoice = null;
let swedishRate = 0.80;
let mobileSpeechUnlocked = false;
let lastSpeechError = "";
const audio = document.getElementById("ayahAudio");
let wakeLock = null;
let keepScreenAwake = localStorage.getItem("quranKeepScreenAwake") !== "0";

async function requestWakeLock(){
  if(!keepScreenAwake || !("wakeLock" in navigator)) return false;
  try{
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => { wakeLock = null; });
    const btn = document.getElementById("wakeLockBtn");
    if(btn) btn.textContent = "Skärmen hålls vaken";
    return true;
  }catch(e){
    console.warn("Wake Lock fungerar inte på denna mobil", e);
    return false;
  }
}

async function releaseWakeLock(){
  try{ if(wakeLock) await wakeLock.release(); }catch(e){}
  wakeLock = null;
  const btn = document.getElementById("wakeLockBtn");
  if(btn) btn.textContent = keepScreenAwake ? "Håll skärmen vaken" : "Skärm-vaken av";
}

function setupMediaSession(title="Koranen", artist="Abdullah Matrood"){
  if(!("mediaSession" in navigator)) return;
  try{
    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      album: "Koranen offline"
    });
    navigator.mediaSession.setActionHandler("play", () => { if(audio.paused) audio.play().catch(()=>{}); });
    navigator.mediaSession.setActionHandler("pause", () => { stop(); });
    navigator.mediaSession.setActionHandler("stop", () => { stop(); });
    navigator.mediaSession.setActionHandler("nexttrack", () => { if(currentIndex + 1 < currentVerses.length) startPlaybackFromUserClick(currentIndex + 1); });
    navigator.mediaSession.setActionHandler("previoustrack", () => { if(currentIndex > 0) startPlaybackFromUserClick(currentIndex - 1); });
  }catch(e){}
}

document.addEventListener("visibilitychange", () => {
  // Om mobilen låser skärmen släpper vissa webbläsare wake lock. Försök ta tillbaka den när sidan syns igen.
  if(document.visibilityState === "visible" && playing) requestWakeLock();
});

const $ = (id) => document.getElementById(id);

const AR_CACHE = {};
const audioFolders = [
  "Abdullah_Al-Matrood_128kbps",
  "Abdullah_Al-Matrood_64kbps",
  "Abdullah_Al_Matrood_128kbps",
  "Abdullah_Matroud_128kbps",
  "Matroud_128kbps"
];

function pad3(n){ return String(n).padStart(3,"0"); }
function audioUrls(s,v){
  const file = `${pad3(s)}${pad3(v)}.mp3`;
  return audioFolders.map(f => `https://everyayah.com/data/${f}/${file}`);
}

// BAKGRUND/LÅSSKÄRM:
// Mobilen kan fortsätta spela vanliga MP3-filer när skärmen låses.
// Men iPhone/Android stoppar ofta Web Speech / speechSynthesis när skärmen låses.
// Därför stödjer appen svenska MP3-filer om du lägger dem här:
// sv-audio/001001.mp3 = svensk uppläsning för Sura 1 vers 1
// sv-audio/002255.mp3 = svensk uppläsning för Sura 2 vers 255
function swedishMp3Urls(s,v){
  const file = `${pad3(s)}${pad3(v)}.mp3`;
  return [`sv-audio/${file}`];
}
const OFFLINE_DB_NAME = "quran-audio-offline-v1";
const OFFLINE_STORE = "ayahAudio";
const OFFLINE_AUDIO_CACHE = "quran-audio-cache-v2";

// Mobil-fix: service worker + Cache API.
// Vanlig fetch som blob kan blockeras av CORS på mobil, men Cache API kan spara
// ljudförfrågningar så <audio> kan spela dem offline senare.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.warn("Service worker kunde inte registreras", err);
    });
  });
}

async function saveAudioUrlToCache(url){
  if (!("caches" in window)) return false;
  try {
    const cache = await caches.open(OFFLINE_AUDIO_CACHE);
    const req = new Request(url, { mode: "no-cors" });
    const res = await fetch(req);
    // no-cors ger ofta opaque response. Den är OK att cacha och spela via <audio>.
    if (res && (res.ok || res.type === "opaque")) {
      await cache.put(req, res.clone());
      return true;
    }
  } catch(e) {
    console.warn("Cache-sparning misslyckades", url, e);
  }
  return false;
}

async function isAudioUrlCached(url){
  if (!("caches" in window)) return false;
  try {
    const cache = await caches.open(OFFLINE_AUDIO_CACHE);
    let hit = await cache.match(new Request(url, { mode: "no-cors" }));
    if(!hit) hit = await cache.match(url);
    return !!hit;
  } catch(e) { return false; }
}

async function cacheAyahAudioUrls(sura, verse){
  // Först försök blob/IndexedDB. Om CORS stoppar, använd Cache API.
  try {
    const blob = await fetchAndCacheAyahAudio(sura, verse);
    if (blob) return true;
  } catch(e) {}

  for (const url of audioUrls(sura, verse)) {
    const ok = await saveAudioUrlToCache(url);
    if (ok) return true;
  }
  return false;
}

async function hasAyahOffline(sura, verse){
  const key = `${pad3(sura)}${pad3(verse)}`;
  try {
    const cachedBlob = await getAudioBlob(key);
    if (cachedBlob) return true;
  } catch(e) {}
  for (const url of audioUrls(sura, verse)) {
    if (await isAudioUrlCached(url)) return true;
  }
  return false;
}

function openOfflineDb(){
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(OFFLINE_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if(!db.objectStoreNames.contains(OFFLINE_STORE)) db.createObjectStore(OFFLINE_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getAudioBlob(key){
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(OFFLINE_STORE, "readonly");
    const req = tx.objectStore(OFFLINE_STORE).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function saveAudioBlob(key, blob){
  const db = await openOfflineDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(OFFLINE_STORE, "readwrite");
    tx.objectStore(OFFLINE_STORE).put(blob, key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}

function playSingleAudioUrl(url){
  return new Promise(resolve => {
    let done = false;
    const finish = ok => {
      if(done) return;
      done = true;
      audio.onended = null;
      audio.onerror = null;
      audio.oncanplay = null;
      resolve(ok);
    };
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    setupMediaSession($("playerTitle") ? $("playerTitle").textContent : "Koranen", "Abdullah Matrood");
    audio.src = url;
    audio.preload = "auto";
    audio.onended = () => finish(true);
    audio.onerror = () => finish(false);
    audio.oncanplay = () => {
      const p = audio.play();
      if(p && typeof p.catch === "function") p.catch(() => finish(false));
    };
    audio.load();
  });
}

async function fetchAndCacheAyahAudio(sura, verse){
  const key = `${pad3(sura)}${pad3(verse)}`;
  const cached = await getAudioBlob(key);
  if(cached) return cached;
  for(const url of audioUrls(sura, verse)){
    try{
      const res = await fetch(url, {mode:"cors", cache:"force-cache"});
      if(res.ok){
        const blob = await res.blob();
        if(blob.size > 1000){
          await saveAudioBlob(key, blob);
          return blob;
        }
      }
    }catch(e){}
  }
  return null;
}

async function playCachedOrOnlineAyah(sura, verse){
  const key = `${pad3(sura)}${pad3(verse)}`;
  const cached = await getAudioBlob(key).catch(() => null);
  if(cached){
    const url = URL.createObjectURL(cached);
    const ok = await playSingleAudioUrl(url);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return ok;
  }

  // Om ljudet sparades med Service Worker/Cache API spelar vi samma webbadress.
  // Service worker returnerar då filen från mobilen även utan internet.
  for (const url of audioUrls(sura, verse)) {
    if (await isAudioUrlCached(url)) {
      return await playSingleAudioUrl(url);
    }
  }

  if(!navigator.onLine){
    $("playerStatus").textContent = "Ljudet är inte nedladdat offline på denna mobil.";
    return false;
  }

  const saved = await cacheAyahAudioUrls(sura, verse);
  if(saved){
    return await playCachedOrOnlineAyah(sura, verse);
  }

  return await playAudioWithFallback(audioUrls(sura, verse));
}

async function downloadCurrentSurahOffline(){
  const btn = document.getElementById("downloadSurahBtn");
  if(btn) btn.disabled = true;

  if (location.protocol === "file:") {
    $("playerTitle").textContent = "Offline funkar inte från fil";
    $("playerStatus").textContent = "Lägg sidan på GitHub Pages/https eller kör med lokal server. Mobilen kan inte spara offline från file://.";
    if(btn) btn.disabled = false;
    return;
  }

  let ok = 0;
  let already = 0;
  for(let i=0; i<currentVerses.length; i++){
    const v = currentVerses[i];
    $("playerTitle").textContent = "Laddar ner offline";
    $("playerStatus").textContent = `${i+1}/${currentVerses.length} verser sparas...`;

    if(await hasAyahOffline(v.sura, v.verse)){
      already++;
      ok++;
      continue;
    }

    const saved = await cacheAyahAudioUrls(v.sura, v.verse);
    if(saved) ok++;
  }

  $("playerTitle").textContent = ok === currentVerses.length ? "Offline klar" : "Offline delvis klar";
  $("playerStatus").textContent = `${ok}/${currentVerses.length} versljud sparade på denna mobil${already ? ` (${already} fanns redan)` : ""}. Testa flygplansläge efteråt.`;
  if(btn) btn.disabled = false;
}


function loadVoices(){
  voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  setupVoiceSelect();
}

if(window.speechSynthesis){
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
  // Mobiltelefoner laddar ofta röstlistan sent.
  setTimeout(loadVoices, 250);
  setTimeout(loadVoices, 1000);
  setTimeout(loadVoices, 2500);
}

function scoreSwedishVoice(v){
  const name = (v.name || "").toLowerCase();
  const lang = (v.lang || "").toLowerCase();
  let score = 0;
  if(lang === "sv-se") score += 150;
  else if(lang.startsWith("sv")) score += 120;
  if(name.includes("natural")) score += 100;
  if(name.includes("neural")) score += 90;
  if(name.includes("enhanced")) score += 85;
  if(name.includes("premium")) score += 80;
  if(name.includes("alva")) score += 65;
  if(name.includes("sofia")) score += 60;
  if(name.includes("google")) score += 35;
  if(name.includes("microsoft")) score += 30;
  // Oskar ska inte väljas automatiskt när en annan svensk röst finns.
  if(name.includes("oskar")) score -= 100;
  return score;
}

function getSwedishVoices(){
  return voices.filter(v => (v.lang || "").toLowerCase().startsWith("sv"));
}

function getBestSwedishVoice(){
  const sv = getSwedishVoices();
  if(!sv.length) return null;
  return [...sv].sort((a,b) => scoreSwedishVoice(b) - scoreSwedishVoice(a))[0];
}

function setupVoiceSelect(){
  const select = document.getElementById("voiceSelect");
  if(!select) return;

  const oldUri = localStorage.getItem("quranSwedishVoiceURI") || "";
  const oldName = localStorage.getItem("quranSwedishVoiceName") || "";
  const svVoices = [...getSwedishVoices()].sort((a,b) => scoreSwedishVoice(b) - scoreSwedishVoice(a));
  select.innerHTML = "";

  if(!svVoices.length){
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Ingen svensk röst hittades i mobilen";
    select.appendChild(option);
    selectedSwedishVoice = null;
    return;
  }

  svVoices.forEach((v, i) => {
    const option = document.createElement("option");
    option.value = v.voiceURI || v.name;
    option.textContent = `${v.name} (${v.lang})${i === 0 ? " • rekommenderad" : ""}`;
    select.appendChild(option);
  });

  selectedSwedishVoice = svVoices.find(v => (v.voiceURI || "") === oldUri)
    || svVoices.find(v => v.name === oldName)
    || getBestSwedishVoice();
  if(selectedSwedishVoice) select.value = selectedSwedishVoice.voiceURI || selectedSwedishVoice.name;

  select.onchange = () => {
    selectedSwedishVoice = svVoices.find(v => (v.voiceURI || v.name) === select.value) || getBestSwedishVoice();
    if(selectedSwedishVoice){
      localStorage.setItem("quranSwedishVoiceURI", selectedSwedishVoice.voiceURI || "");
      localStorage.setItem("quranSwedishVoiceName", selectedSwedishVoice.name || "");
    }
  };

  const rate = document.getElementById("rateRange");
  const rateValue = document.getElementById("rateValue");
  if(rate && rateValue){
    rate.oninput = () => {
      swedishRate = Number(rate.value);
      rateValue.textContent = `${swedishRate.toFixed(2)}x`;
    };
  }
}

function getVoice(prefix){
  const p = prefix.toLowerCase();
  return voices.find(v => (v.lang || "").toLowerCase().startsWith(p)) || null;
}

function escapeHtml(str){ return String(str ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }

async function fetchArabicSurah(num){
  if (AR_CACHE[num]) return AR_CACHE[num];
  try{
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`);
    const json = await res.json();
    const ayahs = json.data.ayahs.map(a => a.text);
    AR_CACHE[num] = ayahs;
    return ayahs;
  }catch(e){
    if(num === 1){
      return [
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "الرَّحْمَٰنِ الرَّحِيمِ",
        "مَالِكِ يَوْمِ الدِّينِ",
        "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
      ];
    }
    return [];
  }
}

function renderSurahs(filter=""){
  $("surahList").innerHTML = "";
  const q = filter.trim().toLowerCase();
  DATA.surahs
    .filter(s => !q || s.name.toLowerCase().includes(q) || s.swedishName.toLowerCase().includes(q) || s.arabicName.includes(q) || String(s.number) === q)
    .forEach(s => {
      const btn = document.createElement("button");
      btn.className = "surah" + (s.number === currentSurah.number ? " active" : "");
      btn.innerHTML = `<div class="num">${s.number}</div><div><h3>${s.name}</h3><p>${s.swedishName} • ${s.verses} verser</p></div><div class="ar">${s.arabicName}</div>`;
      btn.onclick = () => selectSurah(s.number);
      $("surahList").appendChild(btn);
    });
}

async function selectSurah(num){
  stop(false);
  currentSurah = DATA.surahs[num-1];
  const sv = DATA.verses[String(num)] || [];
  const ar = await fetchArabicSurah(num);
  currentVerses = sv.map((v,i) => ({...v, arabic: ar[i] || ""}));
  currentIndex = 0;
  $("surahTitle").textContent = `Sura ${currentSurah.number} - ${currentSurah.name}`;
  $("surahSub").textContent = `${currentSurah.swedishName} • ${currentSurah.verses} verser`;
  renderSurahs($("search").value);
  renderVerses();
}


async function loadQuranComArabic(suraNumber){
  try{
    const url = `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${suraNumber}`;
    const response = await fetch(url, { cache: "force-cache" });
    if(!response.ok) throw new Error(`Quran.com API ${response.status}`);
    const payload = await response.json();
    const verses = payload.verses || [];

    verses.forEach(item => {
      const verseNo = Number(String(item.verse_key || "").split(":")[1]);
      const localVerse = currentVerses.find(v => Number(v.verse) === verseNo);
      if(localVerse && item.text_uthmani){
        localVerse.arabic = item.text_uthmani;
      }
    });

    return true;
  }catch(error){
    console.warn("Kunde inte ladda Quran.com-text. Använder lokal arabisk reservtext.", error);
    return false;
  }
}


const originalRenderAfterQuranLoad = true;

function toArabicIndicDigits(value){
  const digits = "٠١٢٣٤٥٦٧٨٩";
  return String(value).replace(/\d/g, d => digits[Number(d)]);
}

function makeAyahMarker(value){
  return `<span class="simple-ayah-number">${toArabicIndicDigits(value)}</span>`;
}

function renderVerses(){
  $("verses").innerHTML = "";
  currentVerses.forEach((v,idx) => {
    const card = document.createElement("article");
    card.className = "verse-card";
    card.id = `verse-${idx}`;
    const arabicText = escapeHtml(v.arabic || "Laddar arabisk text...");
    const ayahMarker = makeAyahMarker(v.verse);
    card.innerHTML = `<div class="verse-head"><button class="verse-play">▶</button></div><div class="arabic"><span class="ayah-marker" aria-label="Vers ${v.verse}">${ayahMarker}</span><span class="ayah-text">${arabicText}</span></div><div class="swedish">${escapeHtml(v.swedish)}</div>`;
    card.querySelector(".verse-play").onclick = () => startPlaybackFromUserClick(idx);
    $("verses").appendChild(card);
  });
}

function clearHighlight(){
  document.querySelectorAll(".verse-card").forEach(el => el.classList.remove("active-ar","active-sv"));
}

function highlight(idx, phase){
  clearHighlight();
  const el = $(`verse-${idx}`);
  if(!el) return;
  el.classList.add(phase === "sv" ? "active-sv" : "active-ar");
  el.scrollIntoView({behavior:"smooth", block:"center"});
}

function playAudioWithFallback(urls, idx=0){
  return new Promise(resolve => {
    if(idx >= urls.length){
      resolve(false);
      return;
    }

    let resolved = false;
    let checkTimer = null;

    const finish = (ok) => {
      if(resolved) return;
      resolved = true;
      if(checkTimer) clearInterval(checkTimer);
      audio.oncanplay = null;
      audio.onplaying = null;
      audio.onended = null;
      audio.onerror = null;
      resolve(ok);
    };

    const tryNext = () => {
      if(checkTimer) clearInterval(checkTimer);
      audio.oncanplay = null;
      audio.onplaying = null;
      audio.onended = null;
      audio.onerror = null;
      playAudioWithFallback(urls, idx + 1).then(resolve);
    };

    audio.pause();
    audio.removeAttribute("src");
    audio.load();

    setupMediaSession($("playerTitle") ? $("playerTitle").textContent : "Koranen", "Abdullah Matrood");
    audio.src = urls[idx];
    audio.preload = "auto";

    audio.onplaying = () => {
      $("playerStatus").textContent = "Abdullah Matrood läser versen...";
    };

    audio.onended = () => {
      finish(true);
    };

    audio.onerror = () => {
      tryNext();
    };

    audio.oncanplay = () => {
      const p = audio.play();
      if(p && typeof p.catch === "function"){
        p.catch(() => {
          $("playerStatus").textContent = "Tryck play igen. Webbläsaren blockerade ljudet.";
          finish(false);
        });
      }

      // Extra kontroll bara om ended-event missas. Den startar aldrig svenska tidigt.
      checkTimer = setInterval(() => {
        if(Number.isFinite(audio.duration) && audio.duration > 0){
          const nearEnd = audio.currentTime >= audio.duration - 0.15;
          if(nearEnd && audio.paused){
            finish(true);
          }
        }
      }, 500);
    };

    audio.load();
  });
}

function cleanTextForReading(text){
  return String(text || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\[[^\]]*\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function ensureSwedishVoices(){
  if(!window.speechSynthesis) return null;
  for(let i=0; i<18; i++){
    voices = speechSynthesis.getVoices();

    // På mobil kan ett gammalt voice-objekt sluta fungera efter reload.
    // Därför hämtar vi alltid en färsk röst från nuvarande röstlista.
    const savedUri = localStorage.getItem("quranSwedishVoiceURI") || "";
    const savedName = localStorage.getItem("quranSwedishVoiceName") || "";
    const freshSelected = voices.find(v => (v.voiceURI || "") === savedUri)
      || voices.find(v => v.name === savedName)
      || null;

    const voice = freshSelected || getBestSwedishVoice() || getVoice("sv");
    if(voice){
      selectedSwedishVoice = voice;
      setupVoiceSelect();
      return voice;
    }
    await new Promise(r => setTimeout(r, 250));
  }
  return null;
}

function isMobileBrowser(){
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
}

function unlockSwedishSpeechFromUserClick(){
  if(!window.speechSynthesis || mobileSpeechUnlocked) return;
  try{
    loadVoices();
    if(window.speechSynthesis) speechSynthesis.cancel();
    speechSynthesis.resume();

    // Viktigt för iPhone/Android: Web Speech måste startas direkt av knapptrycket.
    // Den här mycket tysta korta rösten låser upp svensk uppläsning för resten av spelningen.
    const u = new SpeechSynthesisUtterance(".");
    u.lang = "sv-SE";
    u.volume = 0.01;
    u.rate = 1;
    const v = selectedSwedishVoice || getBestSwedishVoice() || getVoice("sv");
    if(v) u.voice = v;
    u.onstart = () => { mobileSpeechUnlocked = true; };
    u.onend = () => { mobileSpeechUnlocked = true; };
    u.onerror = (e) => { lastSpeechError = e.error || "speech error"; };
    speechSynthesis.speak(u);
    setTimeout(() => {
      try{ if(window.speechSynthesis) speechSynthesis.cancel(); speechSynthesis.resume(); }catch(e){}
      mobileSpeechUnlocked = true;
    }, 120);
  }catch(e){
    lastSpeechError = e.message || String(e);
  }
}

function splitSwedishText(text, maxLen=180){
  const clean = cleanTextForReading(text);
  if(!clean) return [];
  const sentences = clean.match(/[^.!?;:]+[.!?;:]?|.+$/g) || [clean];
  const chunks = [];
  let current = "";
  for(const sentence of sentences){
    const part = sentence.trim();
    if(!part) continue;
    if((current + " " + part).trim().length <= maxLen){
      current = (current + " " + part).trim();
    }else{
      if(current) chunks.push(current);
      current = part;
    }
  }
  if(current) chunks.push(current);
  return chunks;
}


async function playSwedishMp3IfAvailable(sura, verse){
  // För låsskärm krävs riktig ljudfil. Finns ingen svensk MP3 faller appen tillbaka till AI-röst.
  for(const url of swedishMp3Urls(sura, verse)){
    const ok = await playSingleAudioUrl(url);
    if(ok) return true;
  }
  return false;
}

async function speakSwedish(text){
  if(document.visibilityState === "hidden" && isMobileBrowser()){
    // Mobilwebbläsare stoppar ofta Web Speech när skärmen är låst.
    // Därför fortsätter vi inte fastna i bakgrunden. Arabiska MP3 kan fortsätta när skärmen är på/låst beroende på mobil.
  }
  if(!window.speechSynthesis){
    $("playerStatus").textContent = "Din webbläsare stödjer inte svensk uppläsning.";
    return;
  }
  const chunks = splitSwedishText(text);
  if(!chunks.length) return;

  const voice = await ensureSwedishVoices();
  if(!voice){
    $("playerStatus").textContent = "Ingen svensk röst hittades. Ladda ner svensk röst i mobilens inställningar.";
    return;
  }

  if(window.speechSynthesis) speechSynthesis.cancel();
  speechSynthesis.resume();
  await new Promise(r => setTimeout(r, isMobileBrowser() ? 650 : 180));

  for(const chunk of chunks){
    if(!playing) return;
    await new Promise(resolve => {
      let done = false;
      let started = false;
      let attempts = 0;
      let timer = null;

      const finish = () => {
        if(done) return;
        done = true;
        if(timer) clearTimeout(timer);
        resolve();
      };

      const speakNow = (useChosenVoice=true) => {
        attempts++;
        try{ if(window.speechSynthesis) speechSynthesis.cancel(); speechSynthesis.resume(); }catch(e){}
        const u = new SpeechSynthesisUtterance(chunk);
        u.lang = "sv-SE";
        u.rate = swedishRate;
        u.pitch = 0.95;
        u.volume = 1;
        if(useChosenVoice && voice) u.voice = voice;

        u.onstart = () => {
          started = true;
          $("playerStatus").textContent = `Svensk röst läser${voice ? " • " + voice.name : ""}...`;
        };
        u.onend = finish;
        u.onerror = (e) => {
          lastSpeechError = e.error || "speech error";
          // Vissa mobiler vägrar vald röst. Försök då med systemets standard-svenska.
          if(attempts === 1 && !done){
            setTimeout(() => speakNow(false), 250);
          }else{
            finish();
          }
        };

        speechSynthesis.speak(u);
        setTimeout(() => { try{ if(speechSynthesis.paused) speechSynthesis.resume(); }catch(e){} }, 120);
        setTimeout(() => { try{ if(speechSynthesis.paused) speechSynthesis.resume(); }catch(e){} }, 700);

        // Om mobilen inte ens startar rösten efter arabiska ljudet: försök igen en gång.
        setTimeout(() => {
          if(!started && attempts === 1 && !done){
            speakNow(false);
          }
        }, 1600);
      };

      speakNow(true);
      timer = setTimeout(finish, Math.max(15000, chunk.length * 220));
    });
  }
}

async function playOne(idx){
  const v = currentVerses[idx];
  if(!v || !playing) return;

  // Stoppa svensk röst från förra versen innan Matrood börjar.
  if(window.speechSynthesis) speechSynthesis.cancel();

  currentIndex = idx;
  $("playerTitle").textContent = `Abdullah Matrood • Sura ${v.sura}:${v.verse}`;
  $("playerStatus").textContent = "Startar Abdullah Matrood...";
  highlight(idx, "ar");

  const ok = await playCachedOrOnlineAyah(v.sura, v.verse);

  if(!playing) return;

  if(!ok){
    $("playerStatus").textContent = "Ljudet kunde inte spelas för denna vers. Tryck play igen eller testa Live Server.";
    playing = false;
    $("playAll").textContent = "▶";
    return;
  }

  // Här väntar vi tills Matroods ljud är HELT slut.
  await new Promise(r => setTimeout(r, 500));
  if(!playing) return;

  $("playerStatus").textContent = "Nu läses svensk översättning...";
  highlight(idx, "sv");

  // För låsskärm/bakgrund: prova först riktig svensk MP3.
  // Om filen inte finns använder appen mobilens AI-röst, men den stoppas ofta när skärmen låses.
  const svMp3Ok = await playSwedishMp3IfAvailable(v.sura, v.verse);
  if(!svMp3Ok){
    if(document.visibilityState === "hidden" && isMobileBrowser()){
      $("playerStatus").textContent = "Svensk AI-röst stoppas när skärmen är låst. Lägg in svenska MP3-filer för bakgrundsläge.";
      return;
    }
    await speakSwedish(v.swedish);
  }
}

async function playFrom(idx){
  playing = true;
  requestWakeLock();
  $("playAll").textContent = "Ⅱ";
  for(let i=idx; i<currentVerses.length && playing; i++){
    await playOne(i);
    await new Promise(r => setTimeout(r, 450));
  }
  if(playing){
    playing = false;
    $("playAll").textContent = "▶";
    $("playerStatus").textContent = "Klar";
  }
}

function stop(reset=true){
  playing = false;
  releaseWakeLock();
  audio.pause(); audio.removeAttribute("src"); audio.load();
  if(window.speechSynthesis) speechSynthesis.cancel();
  $("playAll").textContent = "▶";
  if(reset){
    $("playerTitle").textContent = "Stoppad";
    $("playerStatus").textContent = "Tryck play igen";
    clearHighlight();
  }
}

$("search").addEventListener("input", e => renderSurahs(e.target.value));
function startPlaybackFromUserClick(idx){
  if(playing){ stop(); return; }
  stop(false);
  unlockSwedishSpeechFromUserClick();
  playFrom(idx);
}

$("playAll").onclick = () => startPlaybackFromUserClick(currentIndex || 0);
$("stopBtn").onclick = () => stop();
const downloadSurahBtn = document.getElementById("downloadSurahBtn");
if(downloadSurahBtn){
  downloadSurahBtn.onclick = () => downloadCurrentSurahOffline();
}

const testVoiceBtn = document.getElementById("testVoiceBtn");
if(testVoiceBtn){
  testVoiceBtn.onclick = async () => {
    stop(false);
    playing = true;
    unlockSwedishSpeechFromUserClick();
    $("playerTitle").textContent = "Testar svensk röst";
    $("playerStatus").textContent = "Om du hör detta fungerar svensk mobilröst.";
    await speakSwedish("Detta är ett test av svensk röst på mobilen.");
    playing = false;
    $("playAll").textContent = "▶";
  };
}

const wakeLockBtn = document.getElementById("wakeLockBtn");
if(wakeLockBtn){
  wakeLockBtn.textContent = keepScreenAwake ? "Håll skärmen vaken" : "Skärm-vaken av";
  wakeLockBtn.onclick = async () => {
    keepScreenAwake = !keepScreenAwake;
    localStorage.setItem("quranKeepScreenAwake", keepScreenAwake ? "1" : "0");
    if(keepScreenAwake){
      await requestWakeLock();
      $("playerTitle").textContent = "Skärmen hålls vaken";
      $("playerStatus").textContent = "Låt mobilen vara på. Om du låser skärmen kan svensk AI-röst stoppas av iPhone/Android.";
    }else{
      await releaseWakeLock();
      $("playerTitle").textContent = "Skärm-vaken av";
      $("playerStatus").textContent = "Mobilen kan stoppa svensk röst när skärmen släcks.";
    }
  };
}


// ===== V29: EN LJUDKÖ/FIL PER SURA =====
// Filformat: surah-audio/001.mp3, surah-audio/002.mp3 ... surah-audio/114.mp3
// Varje fil ska redan innehålla: arabisk vers 1 -> svensk översättning 1 ->
// arabisk vers 2 -> svensk översättning 2 -> ... tills suran är slut.
function fullSurahAudioUrl(sura){
  return `surah-audio/${pad3(sura)}.mp3`;
}

async function playWholeSurahFile(){
  if(playing){ stop(); return; }
  stop(false);
  playing = true;
  $("playAll").textContent = "Ⅱ";
  $("playerTitle").textContent = `Sura ${currentSurah.number} • komplett ljudfil`;
  $("playerStatus").textContent = "Spelar vers + svensk översättning i en sammanhängande ljudfil...";
  setupMediaSession(`Sura ${currentSurah.number} - ${currentSurah.name}`, "Arabisk recitation + svensk översättning");

  const ok = await playSingleAudioUrl(fullSurahAudioUrl(currentSurah.number));
  playing = false;
  $("playAll").textContent = "▶";

  if(ok){
    $("playerStatus").textContent = "Klar";
  }else{
    $("playerStatus").textContent = `Saknar surah-audio/${pad3(currentSurah.number)}.mp3. Kör SKAPA_SURAH_LJUDFILER.bat på datorn en gång.`;
  }
}

// V29: stora play-knappen spelar nu hela surans färdiga ljudfil.
$("playAll").onclick = () => playWholeSurahFile();


// ===== V35: LÅSSKÄRM-LÖSNING =====
// Mobilens låsskärm fortsätter bara säkert med riktig MP3.
// Filformat: surah-audio/001.mp3 ... surah-audio/114.mp3
function fullSurahAudioUrl(sura){
  return `surah-audio/${pad3(sura)}.mp3`;
}

async function playWholeSurahFileFromLockscreen(){
  if(playing){ stop(); return; }
  stop(false);
  playing = true;
  $("playAll").textContent = "Ⅱ";
  $("playerTitle").textContent = `Sura ${currentSurah.number} • låsskärms-ljud`;
  $("playerStatus").textContent = "Spelar hel sura som riktig MP3...";
  setupMediaSession(`Sura ${currentSurah.number} - ${currentSurah.name}`, "Abdullah Matrood + svensk röst");
  const ok = await playSingleAudioUrl(fullSurahAudioUrl(currentSurah.number));
  playing = false;
  $("playAll").textContent = "▶";
  $("playerStatus").textContent = ok ? "Klar" : `Saknar surah-audio/${pad3(currentSurah.number)}.mp3. Kör SKAPA_SURAH_LJUDFILER.bat först.`;
}

$("playAll").onclick = () => playWholeSurahFileFromLockscreen();
selectSurah(1);


// ===== RIKTIG AI-CHATT =====
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("aiChatOpen");
  const panel = document.getElementById("aiChatPanel");
  const closeBtn = document.getElementById("aiChatClose");
  const form = document.getElementById("aiChatForm");
  const input = document.getElementById("aiInput");
  const messages = document.getElementById("aiMessages");
  const verses = document.getElementById("verses");
  const history = [];

  if (!openBtn || !panel || !form || !input || !messages) {
    console.error("AI-chatten kunde inte starta: HTML-element saknas.");
    return;
  }

  function openChat(word = "") {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (word) input.value = word;
    setTimeout(() => input.focus(), 50);
  }

  function add(text, who) {
    const d = document.createElement("div");
    d.className = "ai-msg " + who;
    d.textContent = text;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
  }

  async function ask(text) {
    text = String(text || "").trim();
    if (!text) return;

    add(text, "user");
    input.value = "";

    const wait = document.createElement("div");
    wait.className = "ai-msg bot";
    wait.textContent = "AI tänker...";
    messages.appendChild(wait);
    messages.scrollTop = messages.scrollHeight;

    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history })
      });

      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Serverfel");

      wait.remove();
      add(data.answer, "bot");
      history.push({ role: "user", text }, { role: "assistant", text: data.answer });
    } catch (e) {
      wait.remove();
      const msg = "Lokal AI kunde inte svara: " + e.message;
      add(msg, "bot");
      console.error(e);
    }
  }

  openBtn.addEventListener("click", () => openChat());
  if (closeBtn) closeBtn.addEventListener("click", () => {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    ask(input.value);
  });

  document.querySelectorAll(".quick-words button").forEach((b) => {
    b.addEventListener("click", () => ask(b.dataset.word || b.textContent));
  });

  if (verses) {
    verses.addEventListener("dblclick", () => {
      const s = window.getSelection().toString().trim();
      if (s) {
        openChat(s);
        ask("Förklara detta enkelt: " + s);
      }
    });
  }
});


// ===== ENKEL FÖRKLARING AV VARJE VERS =====
document.addEventListener("DOMContentLoaded", () => {
  const CURATED_EASY_EXPLANATIONS = {
    "1:1": `Allah är namnet på Gud på arabiska. Det finns bara en Gud, och det är bara Allah som ska dyrkas. Ingen annan har rätt att dyrkas.

”Den Nåderike, den Benådande” betyder att Allah har stor barmhärtighet, är snäll mot sina skapelser och förlåter människor.`,

    "1:2": `”Den Nåderike” (ar-Raḥmān) betyder att Allah har mycket stor barmhärtighet. Hans barmhärtighet når alla skapelser och allt som finns i världen.

”Den Benådande” (ar-Raḥīm) betyder att Allah har en särskild barmhärtighet för de troende. Han hjälper och visar dem barmhärtighet både i detta liv och i livet efter döden.`
  };

  const EASY_REPLACE = [
    [/All lovprisning tillkommer Allah/gi, "All tack och beröm hör till Allah"],
    [/den Nåderike/gi, "Allah som är mycket barmhärtig"],
    [/den Benådande/gi, "Allah som förlåter och visar nåd"],
    [/Domedagens Ägare/gi, "Allah bestämmer på Domedagen"],
    [/Endast Dig dyrkar vi/gi, "Vi ber bara till Dig"],
    [/endast Dig ber vi om hjälp/gi, "vi ber bara Dig om hjälp"],
    [/Led oss på den raka vägen/gi, "Visa oss den rätta vägen"],
    [/välsignat/gi, "gett mycket gott"],
    [/vilsna/gi, "de som har gått fel väg"],
    [/gudfruktiga/gi, "människor som tror på Allah och försöker göra rätt"],
    [/det fördolda/gi, "saker vi inte kan se, till exempel änglar, paradiset och Domedagen"],
    [/förrättar bönen/gi, "ber bönen på rätt sätt"],
    [/försörjt dem med/gi, "gett dem"],
    [/förnekar \[?sanningen\]?/gi, "vägrar tro på sanningen"],
    [/förseglat deras hjärtan/gi, "gjort så att de inte tar emot sanningen"],
    [/fördärv/gi, "skada och problem"],
    [/hycklare/gi, "personer som säger att de tror men inte menar det i hjärtat"],
    [/villfarelse/gi, "fel väg"],
    [/vägledning/gi, "hjälp att hitta rätt väg"],
    [/paradis/gi, "den bästa platsen efter livet"],
    [/otrogna/gi, "de som inte tror"],
    [/sanningen/gi, "det som är rätt och sant"],
    [/Domedagen/gi, "dagen då Allah dömer människorna"],
    [/underkastelse/gi, "att lyda Allah och följa Hans väg"],
    [/barmhärtighet/gi, "nåd, snällhet och förlåtelse"],
    [/skapelsen/gi, "allt Allah har skapat"],
    [/Herre/gi, "den som äger, styr och tar hand om allt"]
  ];

  function cleanText(t) {
    return String(t || "")
      .replace(/Enkel förklaring/g, "")
      .replace(/Lokal AI|AI Ord/g, "")
      .replace(/▶|■|Spela|Paus|Stoppad|Tryck play igen/g, "")
      .replace(/\([TBKÖ, ]+\)/g, "")
      .replace(/[٠-٩١-٩۝۞]+/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function simpleExplain(text, card) {
    let original = cleanText(text);

    // Handgjorda enkla förklaringar används först. De följer samma stil:
    // tydlig svenska, svåra ord förklaras och versens mening förklaras utan att bara byta några ord.
    const allCards = Array.from((document.getElementById("verses") || document).querySelectorAll(".verse-card"));
    const cardIndex = card ? allCards.indexOf(card) : -1;
    const verse = cardIndex >= 0 ? currentVerses[cardIndex] : null;
    const key = verse ? `${verse.sura}:${verse.verse}` : "";
    if (CURATED_EASY_EXPLANATIONS[key]) return CURATED_EASY_EXPLANATIONS[key];
    if (!original) return "Jag hittar ingen svensk text i den här versen.";

    let easy = original;
    for (const [a,b] of EASY_REPLACE) easy = easy.replace(a,b);

    // V31: alla verser får en fullständig enkel förklaring.
    // Vi förklarar meningen i vanlig svenska i stället för att bara visa originaltexten.
    easy = easy
      .replace(/\bI sanning\b/gi, "Det är verkligen sant att")
      .replace(/\bSannerligen\b/gi, "Det är verkligen så att")
      .replace(/\bFörvisso\b/gi, "Det är säkert att")
      .replace(/\bSe!\b/gi, "Tänk på detta:")
      .replace(/\bskall\b/gi, "ska")
      .replace(/\beder\b/gi, "er")
      .replace(/\bedra\b/gi, "era")
      .replace(/\bdig veterligen\b/gi, "så långt du vet")
      .replace(/\bvedergällning\b/gi, "straff eller rättvis belöning")
      .replace(/\bmisshag\b/gi, "det Allah inte tycker om")
      .replace(/\bpåbud\b/gi, "befallning")
      .replace(/\bföreskrivit\b/gi, "bestämt som en regel")
      .replace(/\böverträdare\b/gi, "de som går över Allahs gränser")
      .replace(/\bmissgärningar\b/gi, "dåliga handlingar och synder")
      .replace(/\brättfärdiga\b/gi, "människor som tror och försöker göra det rätta")
      .replace(/\borättfärdiga\b/gi, "människor som gör fel och behandlar andra orättvist")
      .replace(/\bavgudadyrkare\b/gi, "människor som dyrkar andra vid sidan av Allah")
      .replace(/\bavgudar\b/gi, "sådant som människor dyrkar i stället för Allah")
      .replace(/\buppenbarelse\b/gi, "budskap som Allah har sänt")
      .replace(/\bbudbärare\b/gi, "person som Allah har sänt med ett budskap")
      .replace(/\bprofeterna\b/gi, "de profeter som Allah sände till människorna")
      .replace(/\bfromma\b/gi, "goda människor som lyder Allah")
      .replace(/\bde troende\b/gi, "människor som tror på Allah")
      .replace(/\bförnekare\b/gi, "människor som vägrar tro på sanningen")
      .replace(/\bförneka\b/gi, "vägra tro på eller acceptera")
      .replace(/\bvittnesbörd\b/gi, "ett tydligt bevis eller det man vittnar om")
      .replace(/\barvedel\b/gi, "det man får eller ärver")
      .replace(/\bsläkte\b/gi, "folk eller familj")
      .replace(/\bförbund\b/gi, "ett viktigt löfte eller avtal")
      .replace(/\bprövning\b/gi, "ett test i livet")
      .replace(/\bprövar\b/gi, "testar")
      .replace(/\bfrestelse\b/gi, "något som lockar en till fel")
      .replace(/\bsynd\b/gi, "något som är fel inför Allah")
      .replace(/\bsynder\b/gi, "saker som är fel inför Allah")
      .replace(/\bnåd\b/gi, "barmhärtighet och godhet")
      .replace(/\bnådig\b/gi, "barmhärtig och förlåtande")
      .replace(/\bstraff\b/gi, "konsekvens för allvarliga fel")
      .replace(/\bräkenskap\b/gi, "dagen då människans handlingar bedöms")
      .replace(/\båteruppväckas\b/gi, "få liv igen efter döden")
      .replace(/\bEvigheten\b/gi, "livet som aldrig tar slut")
      .replace(/\bden yttersta dagen\b/gi, "Domedagen")
      .replace(/\bdet kommande livet\b/gi, "livet efter döden")
      .replace(/\bdenna värld\b/gi, "livet här på jorden")
      .replace(/\bförsörjning\b/gi, "det Allah ger för att människor ska kunna leva")
      .replace(/\bskänkt\b/gi, "gett")
      .replace(/\bförunnat\b/gi, "gett")
      .replace(/\bålagt\b/gi, "bestämt att man ska göra")
      .replace(/\bavhålla sig\b/gi, "låta bli")
      .replace(/\bfrukta Allah\b/gi, "vara medveten om Allah och vara rädd för att göra fel")
      .replace(/\bgudfruktighet\b/gi, "att vara medveten om Allah och försöka göra rätt")
      .replace(/\bvägledning\b/gi, "hjälp att förstå och följa den rätta vägen")
      .replace(/\bvilseleda\b/gi, "låta någon gå på fel väg")
      .replace(/\bvillfarelse\b/gi, "att vara på fel väg")
      .replace(/\bödmjuk\b/gi, "lugn och utan stolthet")
      .replace(/\bhögmod\b/gi, "stolthet där man ser sig som bättre än andra")
      .replace(/\bhögmodiga\b/gi, "de som är stolta och ser sig som bättre än andra")
      .replace(/\bfördärv\b/gi, "skada, ondska och problem")
      .replace(/\bfördärva\b/gi, "skada och förstöra")
      .replace(/\bhycklare\b/gi, "personer som visar tro utåt men inte tror ärligt i hjärtat")
      .replace(/\bhyckleri\b/gi, "att visa tro utåt utan att vara ärlig i hjärtat")
      .replace(/\btillbe\b/gi, "dyrka")
      .replace(/\btillbedjan\b/gi, "dyrkan av Allah")
      .replace(/\bHerre\b/gi, "Allah, som äger, styr och tar hand om allt")
      .replace(/\bskapelser\b/gi, "allt levande och allt annat som Allah har skapat")
      .replace(/\bskapelsen\b/gi, "allt som Allah har skapat");

    const lower = original.toLowerCase();
    let note = "";
    if (lower.includes("allahs namn")) note = "Versen lär oss att börja med Allahs namn och komma ihåg Hans nåd.";
    else if (lower.includes("lovprisning")) note = "Versen lär oss att tacka Allah, eftersom Han skapat och tar hand om allt.";
    else if (lower.includes("domedagen")) note = "Versen påminner om att Allah dömer rättvist på Domedagen.";
    else if (lower.includes("dyrkar") || lower.includes("hjälp")) note = "Versen lär oss att bara dyrka Allah och be Honom om hjälp.";
    else if (lower.includes("raka vägen")) note = "Versen är en bön om att Allah ska hjälpa oss leva rätt.";
    else if (lower.includes("välsignat") || lower.includes("vilsna")) note = "Versen lär oss att följa de godas väg och undvika fel väg.";
    else if (lower.includes("tvivel")) note = "Versen säger att Koranen är en säker vägledning för den som vill göra rätt.";
    else if (lower.includes("bönen")) note = "Versen visar att tro också syns i handling, som bön och att hjälpa andra.";
    else if (lower.includes("förnekar")) note = "Versen handlar om människor som vägrar ta emot sanningen.";
    else if (lower.includes("hjärtan")) note = "Versen visar att hjärtat kan bli stängt när man länge vägrar sanningen.";
    else if (lower.includes("paradis")) note = "Versen berättar om belöningen för tro och goda handlingar.";

    // Ta bort arabisk text och konstiga symboler från fallback-förklaringen.
    easy = easy
      .replace(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g, "")
      .replace(/\s+/g, " ")
      .trim();

    let explanation = "";
    if (lower.includes("nåd") || lower.includes("barmhärt") || lower.includes("benådande")) {
      explanation = easy;
    } else if (/^säg/i.test(original)) {
      explanation = "Allah lär profeten vad han ska säga. Med enkla ord betyder det: " + easy.charAt(0).toLowerCase() + easy.slice(1);
    } else if (lower.includes("frågar dig")) {
      explanation = "Här får profeten ett svar på en fråga. Svaret betyder med enkla ord: " + easy.charAt(0).toLowerCase() + easy.slice(1);
    } else {
      explanation = "Med enkla ord betyder detta: " + easy.charAt(0).toLowerCase() + easy.slice(1);
    }

    return explanation + (note ? "\n\nKort förklaring: " + note : "");
  }

  function fallbackRealEasyExplanation(text, card) {
    const original = cleanText(text);

    const allCards = Array.from((document.getElementById("verses") || document).querySelectorAll(".verse-card"));
    const cardIndex = card ? allCards.indexOf(card) : -1;
    const verse = cardIndex >= 0 ? currentVerses[cardIndex] : null;
    const key = verse ? `${verse.sura}:${verse.verse}` : "";

    if (CURATED_EASY_EXPLANATIONS[key]) return CURATED_EASY_EXPLANATIONS[key];

    let t = original
      .replace(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g, "")
      .replace(/\s+/g, " ")
      .trim();

    const lower = t.toLowerCase();

    // Extra handgjord fallback för exemplet användaren visade.
    if (lower.includes("våra hjärtan hindras") && lower.includes("våra öron är förseglade") && lower.includes("slöja")) {
      return `Människorna säger att de inte vill ta emot budskapet. De beskriver det som att deras hjärtan är täckta, deras öron är stängda och att det finns en vägg mellan dem och profeten.

Det betyder att de vägrar lyssna och förstå. De säger i princip: ”Fortsätt med din väg, vi fortsätter med vår väg.”`;
    }

    if (lower.includes("hjärtan") && (lower.includes("försegl") || lower.includes("höljen") || lower.includes("slöja"))) {
      return `Versen beskriver människor som inte vill lyssna på sanningen. När de säger att hjärtat är täckt eller att öronen är stängda betyder det att de inte vill förstå eller ta emot budskapet.

Det handlar alltså inte bara om öron och hjärta, utan om att de själva väljer att stänga sig för vägledning.`;
    }

    if (lower.includes("den nåderike") || lower.includes("benådande") || lower.includes("barmhärtighet") || lower.includes("nåd")) {
      return `Versen förklarar Allahs barmhärtighet. Det betyder att Allah är mycket nådig, hjälper sina skapelser och kan förlåta människor.

När texten nämner särskild barmhärtighet för de troende betyder det att Allah ger extra hjälp, nåd och belöning till dem som tror och försöker följa Honom.`;
    }

    if (lower.includes("dyrkar") || lower.includes("tillber")) {
      return `Versen handlar om dyrkan. Den betyder att människan ska rikta sin bön, sin lydnad och sin tillbedjan till Allah, inte till något annat.

Det visar att Allah är den ende som har rätt att dyrkas.`;
    }

    if (lower.includes("raka vägen") || lower.includes("vägledning")) {
      return `Versen handlar om att be Allah om hjälp att hitta rätt väg. Den rätta vägen betyder ett liv där man tror på Allah och försöker göra det som är gott och rätt.

Det är en bön om att inte gå vilse i livet.`;
    }

    if (lower.includes("paradis")) {
      return `Versen berättar om Allahs belöning. Paradiset är platsen som Allah lovar de troende som gör goda handlingar.

Det betyder att livet inte bara handlar om denna värld, utan också om belöningen i livet efter döden.`;
    }

    if (lower.includes("helvet") || lower.includes("straff")) {
      return `Versen varnar för konsekvensen av att vägra sanningen och fortsätta med allvarliga fel.

Det betyder att människans val och handlingar har följder inför Allah.`;
    }

    if (lower.includes("troende")) {
      return `Versen handlar om människor som tror på Allah. Den visar att tro inte bara är ord, utan också något som ska synas i hjärtat och i handlingar.

En troende försöker följa Allah, göra gott och hålla sig borta från det som är fel.`;
    }

    if (lower.includes("förnekar") || lower.includes("förnekade") || lower.includes("otrogna")) {
      return `Versen beskriver människor som vägrar ta emot sanningen även när budskapet har kommit till dem.

Det betyder att problemet inte alltid är att de inte förstår, utan att de inte vill lyssna eller ändra sig.`;
    }

    if (lower.includes("profet") || lower.includes("budbärare")) {
      return `Versen handlar om Allahs budskap till människor genom en profet eller budbärare.

Det betyder att Allah inte lämnar människor utan vägledning, utan sänder budskap så att de kan förstå vad som är rätt.`;
    }

    return `Versen förklarar ett viktigt budskap från Allah. Med enklare ord betyder den att människan ska försöka förstå Allahs vägledning och inte bara följa sina egna önskningar.

Den påminner också om att det man tror och gör i livet har betydelse inför Allah.`;
  }

  async function aiRealEasyExplanation(card) {
    const allCards = Array.from((document.getElementById("verses") || document).querySelectorAll(".verse-card"));
    const cardIndex = card ? allCards.indexOf(card) : -1;
    const verse = cardIndex >= 0 ? currentVerses[cardIndex] : null;
    if (!verse) return fallbackRealEasyExplanation(card.innerText, card);

    const key = `${verse.sura}:${verse.verse}`;
    if (CURATED_EASY_EXPLANATIONS[key]) return CURATED_EASY_EXPLANATIONS[key];

    const cacheKey = `easyExplanationV34:${key}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    const prompt = `Du ska skriva ENKEL FÖRKLARING av en svensk koranöversättning.

VIKTIGT:
- Kopiera INTE översättningen.
- Skriv INTE "Med enkla ord betyder detta:" följt av samma text.
- Skriv INTE generiska meningar som "Versen handlar om tro".
- Förklara vad texten betyder på lätt svenska, som i detta exempel:

Översättning:
Den Nåderike, den Benådande. Den Nåderike (ar-Raḥmān) vars gränslösa nåd omfattar hela Hans skapelse. Den Benådande (ar-Raḥīm) vars särskilda nåd innesluter Hans troende tjänare.

Bra enkel förklaring:
”Den Nåderike” (ar-Raḥmān) betyder att Allah har mycket stor barmhärtighet. Hans barmhärtighet når alla skapelser och allt som finns i världen.

”Den Benådande” (ar-Raḥīm) betyder att Allah har en särskild barmhärtighet för de troende. Han hjälper och visar dem barmhärtighet både i detta liv och i livet efter döden.

Skriv nu enkel förklaring för denna vers:
Sura ${verse.sura}, vers ${verse.verse}
${verse.swedish}

Regler:
- Svara bara med enkel förklaring.
- 1 till 3 korta stycken.
- Förklara svåra bilder/uttryck, t.ex. "hjärtan är täckta", "öron är förseglade", "slöja".
- Ingen arabisk text om den inte behövs för ett namn i parentes.
- Lägg inte till ny tafsir som inte stöds av texten.`;

    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt, history: [] })
      });
      const data = await r.json();
      if (!r.ok || !data.answer) throw new Error(data.error || "AI saknas");
      let ans = String(data.answer).trim();

      // Skydd: om AI:n råkar kopiera för mycket av översättningen, använd bättre lokal fallback.
      const sw = String(verse.swedish || "").replace(/\s+/g, " ").trim().toLowerCase();
      const an = ans.replace(/\s+/g, " ").trim().toLowerCase();
      const badCopy = sw.length > 60 && an.includes(sw.slice(0, Math.min(80, sw.length)));
      if (badCopy || ans.length < 20) ans = fallbackRealEasyExplanation(verse.swedish, card);

      localStorage.setItem(cacheKey, ans);
      return ans;
    } catch (e) {
      return fallbackRealEasyExplanation(verse.swedish, card);
    }
  }

  function addButtons() {
    const root = document.getElementById("verses") || document.body;
    const all = Array.from(root.querySelectorAll("article, .verse-card, .ayah-card, .verse, .ayah, .card, section > div"));
    const cards = all.filter(el => {
      const txt = el.innerText || "";
      return txt.length > 40 && /[åäöÅÄÖ]/.test(txt) && !el.querySelector(".easy-verse-btn") && !el.closest(".ai-chat-panel");
    });

    cards.forEach(card => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "easy-verse-btn";
      btn.textContent = "Enkel förklaring";

      const box = document.createElement("div");
      box.className = "easy-verse-box";
      box.style.display = "none";

      btn.addEventListener("click", () => {
        box.textContent = simpleExplain(card.innerText, card);
        box.style.display = box.style.display === "none" ? "block" : "none";
      });

      card.appendChild(btn);
      card.appendChild(box);
    });
  }

  addButtons();
  const root = document.getElementById("verses") || document.body;
  new MutationObserver(() => {
    clearTimeout(window.__easyVerseTimer);
    window.__easyVerseTimer = setTimeout(addButtons, 200);
  }).observe(root, {childList:true, subtree:true});
});

