const AUDIO_CACHE = "quran-audio-cache-v3";
const WHOLE_SURAH_CACHE = "quran-whole-surah-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  // Färdiga svenska sura-MP3. En fil som användaren har sparat offline
  // hämtas direkt ur cache och fortsätter spela även när skärmen låses.
  if (url.origin === self.location.origin && url.pathname.includes("/surah-audio/") && url.pathname.endsWith(".mp3")) {
    event.respondWith((async () => {
      const cache = await caches.open(WHOLE_SURAH_CACHE);
      const cached = await cache.match(req) || await cache.match(url.pathname.split("/").slice(-2).join("/"));
      if (cached) return cached;
      return fetch(req);
    })());
    return;
  }

  // Spara och spela Abdullah Matrood MP3 offline.
  if (url.hostname.includes("everyayah.com") && url.pathname.endsWith(".mp3")) {
    event.respondWith((async () => {
      const cache = await caches.open(AUDIO_CACHE);
      const cached = await cache.match(req) || await cache.match(req.url);
      if (cached) return cached;

      const res = await fetch(req);
      if (res && (res.ok || res.type === "opaque")) {
        cache.put(req, res.clone()).catch(() => {});
      }
      return res;
    })());
  }
});
