"use strict";

const DATA = window.SV_DATA;
const $ = id => document.getElementById(id);
const arabicAudio = $("ayahAudio");
const translationAudio = $("translationAudio");

let currentSurah = DATA.surahs[0];
let currentVerses = [];
let currentIndex = 0;
let playing = false;
let playbackSessionId = 0;
let activeCancel = null;
let activeAudio = null;
let activePhase = "none";

const AR_CACHE = {};
const TRANSLATION_RATE_KEY = "quranTranslationPlaybackRateFinal";
let translationPlaybackRate = Number(localStorage.getItem(TRANSLATION_RATE_KEY) || "1");
if (!Number.isFinite(translationPlaybackRate)) translationPlaybackRate = 1;
translationPlaybackRate = Math.max(0.65, Math.min(1.25, translationPlaybackRate));

const LOCAL_PROXY = location.port === "3000";
const PLAYER_CHANNEL_NAME = "quran-clean-player-20260718";
let playerChannel = null;
try {
  if ("BroadcastChannel" in window) {
    playerChannel = new BroadcastChannel(PLAYER_CHANNEL_NAME);
    playerChannel.onmessage = event => {
      if (event.data && event.data.type === "playing" && event.data.id !== window.name) {
        stopPlayback(false, false);
      }
    };
  }
} catch (_) {}

window.addEventListener("storage", event => {
  if (event.key === PLAYER_CHANNEL_NAME && event.newValue) stopPlayback(false, false);
});

function announcePlayback() {
  const id = `${Date.now()}-${Math.random()}`;
  window.name = id;
  try { playerChannel?.postMessage({type: "playing", id}); } catch (_) {}
  try { localStorage.setItem(PLAYER_CHANNEL_NAME, id); } catch (_) {}
}

function pad3(value) {
  return String(value).padStart(3, "0");
}

function arabicFileName(sura, verse) {
  return `${pad3(sura)}${pad3(verse)}.mp3`;
}

function arabicAudioSources(sura, verse) {
  const file = arabicFileName(sura, verse);
  const sources = [];
  // När STARTA_APPEN.bat används hämtar Node-servern exakt originalfil och
  // sparar den oförändrad i matrood-cache. Det undviker gamla webbläsarcacher.
  if (LOCAL_PROXY) sources.push(`/matrood/${file}`);
  sources.push(`https://everyayah.com/data/Abdullah_Matroud_128kbps/${file}`);
  sources.push(`https://www.everyayah.com/data/Abdullah_Matroud_128kbps/${file}`);
  return sources;
}

function fullSurahAudioUrl(sura) {
  return `surah-audio/${pad3(sura)}.webm`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[ch]);
}

function toArabicIndicDigits(value) {
  const digits = "٠١٢٣٤٥٦٧٨٩";
  return String(value).replace(/\d/g, digit => digits[Number(digit)]);
}

function makeAyahMarker(value) {
  return `<span class="simple-ayah-number">${toArabicIndicDigits(value)}</span>`;
}

async function fetchArabicSurah(number) {
  if (AR_CACHE[number]) return AR_CACHE[number];
  try {
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`, {cache: "force-cache"});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const verses = payload.data.ayahs.map(item => item.text);
    AR_CACHE[number] = verses;
    return verses;
  } catch (_) {
    if (number === 1) {
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

function renderSurahs(filter = "") {
  const list = $("surahList");
  list.innerHTML = "";
  const query = String(filter).trim().toLowerCase();
  DATA.surahs
    .filter(surah => !query || surah.name.toLowerCase().includes(query) ||
      surah.swedishName.toLowerCase().includes(query) || surah.arabicName.includes(query) ||
      String(surah.number) === query)
    .forEach(surah => {
      const button = document.createElement("button");
      button.className = `surah${surah.number === currentSurah.number ? " active" : ""}`;
      button.innerHTML = `<div class="num">${surah.number}</div><div><h3>${surah.name}</h3><p>${surah.swedishName} • ${surah.verses} verser</p></div><div class="ar">${surah.arabicName}</div>`;
      button.addEventListener("click", () => selectSurah(surah.number));
      list.appendChild(button);
    });
}

async function selectSurah(number) {
  stopPlayback(false, false);
  currentSurah = DATA.surahs[number - 1];
  const swedish = DATA.verses[String(number)] || [];
  const arabic = await fetchArabicSurah(number);
  currentVerses = swedish.map((verse, index) => ({...verse, arabic: arabic[index] || ""}));
  currentIndex = 0;
  $("surahTitle").textContent = `Sura ${currentSurah.number} - ${currentSurah.name}`;
  $("surahSub").textContent = `${currentSurah.swedishName} • ${currentSurah.verses} verser`;
  renderSurahs($("search").value);
  renderVerses();
}

function renderVerses() {
  const container = $("verses");
  container.innerHTML = "";
  currentVerses.forEach((verse, index) => {
    const card = document.createElement("article");
    card.className = "verse-card";
    card.id = `verse-${index}`;
    card.innerHTML = `<div class="verse-head"><button class="verse-play" type="button">▶</button></div>
      <div class="arabic"><span class="ayah-marker" aria-label="Vers ${verse.verse}">${makeAyahMarker(verse.verse)}</span><span class="ayah-text">${escapeHtml(verse.arabic || "Laddar arabisk text...")}</span></div>
      <div class="swedish">${escapeHtml(verse.swedish)}</div>`;
    card.querySelector(".verse-play").addEventListener("click", () => startPlaybackFromUserClick(index));
    container.appendChild(card);
  });
}

function clearHighlight() {
  document.querySelectorAll(".verse-card").forEach(card => card.classList.remove("active-ar", "active-sv"));
}

function highlight(index, phase) {
  clearHighlight();
  const card = $(`verse-${index}`);
  if (!card) return;
  card.classList.add(phase === "sv" ? "active-sv" : "active-ar");
  card.scrollIntoView({behavior: "smooth", block: "center"});
}

function clearElementHandlers(element) {
  element.onloadedmetadata = null;
  element.ondurationchange = null;
  element.oncanplay = null;
  element.onplaying = null;
  element.onended = null;
  element.onerror = null;
  element.onabort = null;
  element.onseeked = null;
  element.ontimeupdate = null;
}

function hardStopElement(element) {
  clearElementHandlers(element);
  try { element.pause(); } catch (_) {}
  try { element.removeAttribute("src"); } catch (_) {}
  try { element.load(); } catch (_) {}
  element.volume = 1;
  element.muted = false;
}

function cancelCurrentWait() {
  if (activeCancel) {
    const cancel = activeCancel;
    activeCancel = null;
    cancel();
  }
}

function stopPlayback(resetUi = true, announce = true) {
  playbackSessionId += 1;
  playing = false;
  cancelCurrentWait();
  hardStopElement(arabicAudio);
  hardStopElement(translationAudio);
  activeAudio = null;
  activePhase = "none";
  try { navigator.mediaSession.playbackState = "none"; } catch (_) {}
  $("playAll").textContent = "▶";
  if (resetUi) {
    $("playerTitle").textContent = "Stoppad";
    $("playerStatus").textContent = "Tryck play igen";
    clearHighlight();
  }
  if (announce) {
    // Ingen stoppsignal behövs. Nästa play skickar alltid en ny spelarsignal.
  }
}

function setupMediaSession(title, artist) {
  if (!("mediaSession" in navigator)) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({title, artist, album: "Koranen"});
    navigator.mediaSession.setActionHandler("play", () => {
      if (!activeAudio) return;
      activeAudio.play().then(() => {
        $("playAll").textContent = "Ⅱ";
        $("playerStatus").textContent = activePhase === "sv" ? "Svensk översättning spelar..." : "Abdullah Al‑Matrood spelar...";
        try { navigator.mediaSession.playbackState = "playing"; } catch (_) {}
      }).catch(() => {});
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      activeAudio?.pause();
      $("playAll").textContent = "▶";
      $("playerStatus").textContent = "Pausad – tryck play för att fortsätta";
      try { navigator.mediaSession.playbackState = "paused"; } catch (_) {}
    });
    navigator.mediaSession.setActionHandler("stop", () => stopPlayback());
  } catch (_) {}
}

function setArabicNativeSettings() {
  arabicAudio.volume = 1;
  arabicAudio.muted = false;
  arabicAudio.defaultPlaybackRate = 1;
  arabicAudio.playbackRate = 1;
  try { arabicAudio.preservesPitch = true; } catch (_) {}
  try { arabicAudio.webkitPreservesPitch = true; } catch (_) {}
}

function setTranslationNativeSettings() {
  translationAudio.volume = 1;
  translationAudio.muted = false;
  translationAudio.defaultPlaybackRate = translationPlaybackRate;
  translationAudio.playbackRate = translationPlaybackRate;
  try { translationAudio.preservesPitch = true; } catch (_) {}
  try { translationAudio.webkitPreservesPitch = true; } catch (_) {}
}

function playArabicUrl(url, token) {
  return new Promise(resolve => {
    if (!playing || token !== playbackSessionId) return resolve({ok: false, cancelled: true, duration: 0});

    // Viktigt: den svenska spelaren stoppas och töms innan Matrood startar.
    // Därmed kan den gamla lågkomprimerade surafilen aldrig höras samtidigt.
    hardStopElement(translationAudio);
    hardStopElement(arabicAudio);
    activeAudio = arabicAudio;
    activePhase = "ar";
    setArabicNativeSettings();

    let finished = false;
    let started = false;
    let duration = 0;
    let startTimeout = null;

    const finish = result => {
      if (finished) return;
      finished = true;
      if (startTimeout) clearTimeout(startTimeout);
      clearElementHandlers(arabicAudio);
      if (activeCancel === cancel) activeCancel = null;
      resolve(result);
    };
    const cancel = () => finish({ok: false, cancelled: true, duration});
    activeCancel = cancel;

    arabicAudio.src = url;
    arabicAudio.preload = "auto";
    arabicAudio.onloadedmetadata = () => {
      setArabicNativeSettings();
      if (Number.isFinite(arabicAudio.duration)) duration = arabicAudio.duration;
    };
    arabicAudio.ondurationchange = () => {
      if (Number.isFinite(arabicAudio.duration)) duration = arabicAudio.duration;
    };
    arabicAudio.onplaying = () => {
      started = true;
      setArabicNativeSettings();
      try { navigator.mediaSession.playbackState = "playing"; } catch (_) {}
    };
    arabicAudio.onended = () => {
      duration = Number.isFinite(arabicAudio.duration) ? arabicAudio.duration : Math.max(duration, arabicAudio.currentTime || 0);
      finish({ok: true, cancelled: false, duration});
    };
    arabicAudio.onerror = () => finish({ok: false, cancelled: false, duration});
    arabicAudio.onabort = () => finish({ok: false, cancelled: true, duration});

    arabicAudio.load();
    setArabicNativeSettings();
    const playPromise = arabicAudio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => finish({ok: false, cancelled: false, duration}));
    }
    startTimeout = setTimeout(() => {
      if (!started) finish({ok: false, cancelled: false, duration});
    }, 60000);
  });
}

async function playCleanArabicVerse(sura, verse, token) {
  for (const url of arabicAudioSources(sura, verse)) {
    if (!playing || token !== playbackSessionId) return {ok: false, cancelled: true, duration: 0};
    const result = await playArabicUrl(url, token);
    if (result.cancelled) return result;
    if (result.ok && result.duration > 0) return result;
  }
  return {ok: false, cancelled: false, duration: 0};
}

function getVerseSegment(sura, verseIndex) {
  const list = window.TRANSLATION_SEGMENTS?.[String(sura)];
  return Array.isArray(list) ? list[verseIndex] : null;
}

function playTranslationSegment(sura, verseIndex, arabicDuration, token) {
  return new Promise(resolve => {
    const segment = getVerseSegment(sura, verseIndex);
    if (!segment || !playing || token !== playbackSessionId) return resolve(false);

    // Matrood-elementet töms helt innan surafilen öppnas. Bara den svenska
    // tidsdelen spelas. Ingen lågkvalitativ arabisk del kan ligga bakom.
    hardStopElement(arabicAudio);
    hardStopElement(translationAudio);
    activeAudio = translationAudio;
    activePhase = "sv";
    setTranslationNativeSettings();

    let finished = false;
    let started = false;
    let interval = null;
    let safetyTimeout = null;
    const rawStart = Number(segment.start) + Number(arabicDuration || 0) + 0.18;
    const segmentEnd = Math.max(Number(segment.start) + 0.35, Number(segment.end) - 0.055);
    let segmentStart = Math.max(Number(segment.start), Math.min(rawStart, segmentEnd - 0.25));

    const cleanup = () => {
      if (interval) clearInterval(interval);
      if (safetyTimeout) clearTimeout(safetyTimeout);
      clearElementHandlers(translationAudio);
    };
    const finish = ok => {
      if (finished) return;
      finished = true;
      cleanup();
      try { translationAudio.pause(); } catch (_) {}
      if (activeCancel === cancel) activeCancel = null;
      resolve(ok);
    };
    const cancel = () => finish(false);
    activeCancel = cancel;

    const checkEnd = () => {
      if (finished) return;
      if (!playing || token !== playbackSessionId) return finish(false);
      if (translationAudio.currentTime >= segmentEnd - 0.012) finish(true);
    };

    const begin = () => {
      if (started || finished || !playing || token !== playbackSessionId) return;
      started = true;
      setTranslationNativeSettings();
      const promise = translationAudio.play();
      if (promise && typeof promise.then === "function") {
        promise.then(() => {
          interval = setInterval(checkEnd, 45);
          checkEnd();
        }).catch(() => finish(false));
      } else {
        interval = setInterval(checkEnd, 45);
      }
    };

    translationAudio.src = fullSurahAudioUrl(sura);
    translationAudio.preload = "auto";
    translationAudio.onloadedmetadata = () => {
      if (Number.isFinite(translationAudio.duration)) {
        segmentStart = Math.min(segmentStart, Math.max(0, translationAudio.duration - 0.3));
      }
      setTranslationNativeSettings();
      try {
        if (typeof translationAudio.fastSeek === "function") translationAudio.fastSeek(segmentStart);
        else translationAudio.currentTime = segmentStart;
      } catch (_) {
        finish(false);
      }
    };
    translationAudio.onseeked = begin;
    translationAudio.oncanplay = () => {
      if (Math.abs(translationAudio.currentTime - segmentStart) < 0.35) begin();
    };
    translationAudio.ontimeupdate = checkEnd;
    translationAudio.onended = () => finish(true);
    translationAudio.onerror = () => finish(false);
    translationAudio.onabort = () => finish(false);
    translationAudio.load();

    const expectedMs = Math.max(15000, ((segmentEnd - segmentStart) / translationPlaybackRate + 20) * 1000);
    safetyTimeout = setTimeout(() => finish(false), expectedMs);
  });
}

function updatePhaseUi(index, phase) {
  currentIndex = index;
  highlight(index, phase);
  const verse = currentVerses[index];
  $("playerTitle").textContent = `Sura ${verse.sura}:${verse.verse}`;
  if (phase === "ar") {
    $("playerStatus").textContent = LOCAL_PROXY
      ? "Abdullah Al‑Matrood • ren original‑MP3 • 1.00x"
      : "Abdullah Al‑Matrood • EveryAyah 128 kbps • 1.00x";
    setupMediaSession(`Sura ${verse.sura}:${verse.verse}`, "Abdullah Al‑Matrood 128 kbps");
  } else {
    $("playerStatus").textContent = `Svensk översättning • ${translationPlaybackRate.toFixed(2)}x`;
    setupMediaSession(`Sura ${verse.sura}:${verse.verse}`, "Svensk översättning");
  }
}

async function playSequence(startIndex = 0) {
  if (!currentVerses.length) return;
  announcePlayback();
  stopPlayback(false, false);
  playing = true;
  const token = ++playbackSessionId;
  const first = Math.max(0, Math.min(Number(startIndex) || 0, currentVerses.length - 1));
  $("playAll").textContent = "Ⅱ";

  for (let index = first; index < currentVerses.length; index += 1) {
    if (!playing || token !== playbackSessionId) return;
    const verse = currentVerses[index];

    updatePhaseUi(index, "ar");
    const arabicResult = await playCleanArabicVerse(verse.sura, verse.verse, token);
    if (!playing || token !== playbackSessionId || arabicResult.cancelled) return;
    if (!arabicResult.ok) {
      playing = false;
      $("playAll").textContent = "▶";
      $("playerTitle").textContent = "Matrood-ljudet kunde inte hämtas";
      $("playerStatus").textContent = "Kontrollera internet och starta appen med STARTA_APPEN.bat.";
      return;
    }

    updatePhaseUi(index, "sv");
    const translationOk = await playTranslationSegment(verse.sura, index, arabicResult.duration, token);
    if (!playing || token !== playbackSessionId) return;
    if (!translationOk) {
      playing = false;
      $("playAll").textContent = "▶";
      $("playerTitle").textContent = "Översättningen kunde inte spelas";
      $("playerStatus").textContent = "Starta om sidan och försök igen.";
      return;
    }
  }

  if (playing && token === playbackSessionId) {
    playing = false;
    cancelCurrentWait();
    hardStopElement(arabicAudio);
    hardStopElement(translationAudio);
    activeAudio = null;
    activePhase = "none";
    $("playAll").textContent = "▶";
    $("playerStatus").textContent = "Klar";
    clearHighlight();
    currentIndex = 0;
  }
}

function startPlaybackFromUserClick(index) {
  stopPlayback(false, false);
  currentIndex = Number(index) || 0;
  playSequence(currentIndex);
}

function setupTranslationRateControls() {
  const range = $("translationRateRange");
  const value = $("translationRateValue");
  const reset = $("translationRateReset");
  if (!range || !value) return;

  const paint = () => {
    range.value = translationPlaybackRate.toFixed(2);
    value.textContent = `${translationPlaybackRate.toFixed(2)}x`;
  };
  paint();

  range.addEventListener("input", () => {
    const rate = Number(range.value);
    if (!Number.isFinite(rate)) return;
    translationPlaybackRate = Math.max(0.65, Math.min(1.25, rate));
    localStorage.setItem(TRANSLATION_RATE_KEY, String(translationPlaybackRate));
    value.textContent = `${translationPlaybackRate.toFixed(2)}x`;
    // Endast translationAudio ändras. arabicAudio rörs aldrig av reglaget.
    if (activePhase === "sv") setTranslationNativeSettings();
  });

  reset?.addEventListener("click", () => {
    translationPlaybackRate = 1;
    localStorage.setItem(TRANSLATION_RATE_KEY, "1");
    paint();
    if (activePhase === "sv") setTranslationNativeSettings();
  });
}

async function saveDirectAudioToBrowserCache(url) {
  if (!("caches" in window)) return false;
  try {
    const cache = await caches.open("quran-clean-matrood-v6");
    const request = new Request(url, {mode: "no-cors"});
    const response = await fetch(request);
    if (response && (response.ok || response.type === "opaque")) {
      await cache.put(request, response.clone());
      return true;
    }
  } catch (_) {}
  return false;
}

async function downloadCurrentSurahOffline() {
  const button = $("downloadSurahBtn");
  const sura = currentSurah.number;
  const count = currentSurah.verses;
  button.disabled = true;
  let saved = 0;
  try {
    // Den svenska filen finns redan i projektet. På webbhotell läggs den även i Cache API.
    if ("caches" in window) {
      try {
        const cache = await caches.open("quran-swedish-surah-v6");
        const response = await fetch(fullSurahAudioUrl(sura));
        if (response.ok) await cache.put(fullSurahAudioUrl(sura), response.clone());
      } catch (_) {}
    }

    for (let verse = 1; verse <= count; verse += 1) {
      $("playerTitle").textContent = "Sparar suran offline";
      $("playerStatus").textContent = `Sparar ren Matrood-vers ${verse} av ${count}...`;
      const file = arabicFileName(sura, verse);
      let ok = false;
      if (LOCAL_PROXY) {
        try {
          const response = await fetch(`/matrood/${file}?save=1`, {cache: "no-store"});
          if (response.ok) {
            await response.arrayBuffer();
            ok = true;
          }
        } catch (_) {}
      } else {
        ok = await saveDirectAudioToBrowserCache(`https://everyayah.com/data/Abdullah_Matroud_128kbps/${file}`);
      }
      if (ok) saved += 1;
    }
    $("playerTitle").textContent = "Suran är sparad";
    $("playerStatus").textContent = `${saved} av ${count} rena Matrood-verser är sparade offline.`;
  } finally {
    button.disabled = false;
  }
}

// Rensa gamla ljudcacher en gång. De tidigare versionerna använde samma namn
// för flera olika spelmetoder och kan annars ligga kvar i Chrome.
(async () => {
  const cleanupKey = "quranCleanCacheReset20260718";
  if (!("caches" in window) || localStorage.getItem(cleanupKey)) return;
  try {
    const keep = new Set(["quran-clean-matrood-v6", "quran-swedish-surah-v6"]);
    for (const key of await caches.keys()) {
      if (key.startsWith("quran-") && !keep.has(key)) await caches.delete(key);
    }
    localStorage.setItem(cleanupKey, "1");
  } catch (_) {}
})();

if ("serviceWorker" in navigator && (location.protocol === "https:" || LOCAL_PROXY)) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

$("search").addEventListener("input", event => renderSurahs(event.target.value));
$("playAll").addEventListener("click", () => {
  if (playing) stopPlayback();
  else playSequence(currentIndex || 0);
});
$("stopBtn").addEventListener("click", () => stopPlayback());
$("downloadSurahBtn").addEventListener("click", downloadCurrentSurahOffline);

setupTranslationRateControls();
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
    if (verse && verse.easySwedish) return verse.easySwedish;
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

    if (verse && verse.easySwedish) return verse.easySwedish;
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
    if (verse && verse.easySwedish) return verse.easySwedish;
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

  function verseForCard(card) {
    const allCards = Array.from((document.getElementById("verses") || document).querySelectorAll(".verse-card"));
    const cardIndex = card ? allCards.indexOf(card) : -1;
    return cardIndex >= 0 ? currentVerses[cardIndex] : null;
  }

  function addButtons() {
    const root = document.getElementById("verses") || document.body;
    const cards = Array.from(root.querySelectorAll(".verse-card"))
      .filter(el => !el.querySelector(".easy-verse-btn"));

    cards.forEach(card => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "easy-verse-btn";
      btn.textContent = "Lätt svenska";

      const box = document.createElement("div");
      box.className = "easy-verse-box";
      box.style.display = "none";

      btn.addEventListener("click", () => {
        box.textContent = (verseForCard(card)?.easySwedish || simpleExplain(card.innerText, card));
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
