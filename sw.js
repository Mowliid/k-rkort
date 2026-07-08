const AUDIO_CACHE = "quran-audio-cache-v2";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

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
