const DATA = window.SV_DATA;
let currentSurah = DATA.surahs[0];
let currentVerses = [];
let currentIndex = 0;
let playing = false;
let voices = [];
let selectedSwedishVoice = null;
let swedishRate = 0.80;
const audio = document.getElementById("ayahAudio");
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
const OFFLINE_DB_NAME = "quran-audio-offline-v1";
const OFFLINE_STORE = "ayahAudio";

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
  const cached = await getAudioBlob(key);
  if(cached){
    const url = URL.createObjectURL(cached);
    const ok = await playSingleAudioUrl(url);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return ok;
  }
  if(!navigator.onLine){
    $("playerStatus").textContent = "Ljudet är inte nedladdat offline.";
    return false;
  }
  const blob = await fetchAndCacheAyahAudio(sura, verse);
  if(blob){
    const url = URL.createObjectURL(blob);
    const ok = await playSingleAudioUrl(url);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return ok;
  }
  return await playAudioWithFallback(audioUrls(sura, verse));
}

async function downloadCurrentSurahOffline(){
  const btn = document.getElementById("downloadSurahBtn");
  if(btn) btn.disabled = true;
  let ok = 0;
  for(let i=0; i<currentVerses.length; i++){
    const v = currentVerses[i];
    $("playerTitle").textContent = "Laddar ner offline";
    $("playerStatus").textContent = `${i+1}/${currentVerses.length} verser...`;
    const blob = await fetchAndCacheAyahAudio(v.sura, v.verse);
    if(blob) ok++;
  }
  $("playerTitle").textContent = "Offline klar";
  $("playerStatus").textContent = `${ok}/${currentVerses.length} versljud sparade.`;
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
    card.querySelector(".verse-play").onclick = () => playFrom(idx);
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
  for(let i=0; i<12; i++){
    voices = speechSynthesis.getVoices();
    const voice = selectedSwedishVoice || getBestSwedishVoice() || getVoice("sv");
    if(voice){
      selectedSwedishVoice = voice;
      setupVoiceSelect();
      return voice;
    }
    await new Promise(r => setTimeout(r, 200));
  }
  return null;
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

async function speakSwedish(text){
  if(!window.speechSynthesis) return;
  const chunks = splitSwedishText(text);
  if(!chunks.length) return;

  const voice = await ensureSwedishVoices();
  speechSynthesis.cancel();
  speechSynthesis.resume();
  await new Promise(r => setTimeout(r, 180));

  for(const chunk of chunks){
    if(!playing) return;
    await new Promise(resolve => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = "sv-SE";
      u.rate = swedishRate;
      u.pitch = 0.95;
      u.volume = 1;
      if(voice) u.voice = voice;

      let done = false;
      const finish = () => { if(!done){ done = true; resolve(); } };
      u.onend = finish;
      u.onerror = finish;

      // iPhone/Android kan pausa speechSynthesis efter ljuduppspelning.
      speechSynthesis.resume();
      speechSynthesis.speak(u);
      setTimeout(() => { if(speechSynthesis.paused) speechSynthesis.resume(); }, 120);
      setTimeout(() => { if(speechSynthesis.paused) speechSynthesis.resume(); }, 600);
      setTimeout(finish, Math.max(12000, chunk.length * 180));
    });
  }
}

async function playOne(idx){
  const v = currentVerses[idx];
  if(!v || !playing) return;

  // Stoppa svensk röst från förra versen innan Matrood börjar.
  speechSynthesis.cancel();

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
  await speakSwedish(v.swedish);
}

async function playFrom(idx){
  stop(false);
  playing = true;
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
  audio.pause(); audio.removeAttribute("src"); audio.load();
  speechSynthesis.cancel();
  $("playAll").textContent = "▶";
  if(reset){
    $("playerTitle").textContent = "Stoppad";
    $("playerStatus").textContent = "Tryck play igen";
    clearHighlight();
  }
}

$("search").addEventListener("input", e => renderSurahs(e.target.value));
$("playAll").onclick = () => playing ? stop() : playFrom(currentIndex || 0);
$("stopBtn").onclick = () => stop();

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

  function simpleExplain(text) {
    let original = cleanText(text);
    if (!original) return "Jag hittar ingen svensk text i den här versen.";

    let easy = original;
    for (const [a,b] of EASY_REPLACE) easy = easy.replace(a,b);

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

    return "Enkelt sagt: " + easy + (note ? "\n\nKort mening: " + note : "");
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
        box.textContent = simpleExplain(card.innerText);
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

