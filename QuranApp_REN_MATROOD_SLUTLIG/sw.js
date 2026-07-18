const MATROOD_CACHE = "quran-clean-matrood-v6";
const SWEDISH_CACHE = "quran-swedish-surah-v6";
const CURRENT = new Set([MATROOD_CACHE, SWEDISH_CACHE]);

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith("quran-") && !CURRENT.has(key)) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // Svenska färdiga surafiler.
  if (url.origin === self.location.origin && url.pathname.includes("/surah-audio/") && url.pathname.endsWith(".webm")) {
    event.respondWith((async () => {
      const cache = await caches.open(SWEDISH_CACHE);
      const cached = await cache.match(request) || await cache.match(url.pathname.replace(/^\//, ""));
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) cache.put(request, response.clone()).catch(() => {});
      return response;
    })());
    return;
  }

  // Direkt EveryAyah används endast som reserv när den lokala Node-proxyn inte finns.
  if (url.hostname.endsWith("everyayah.com") && url.pathname.includes("/Abdullah_Matroud_128kbps/") && url.pathname.endsWith(".mp3")) {
    event.respondWith((async () => {
      const cache = await caches.open(MATROOD_CACHE);
      const cached = await cache.match(request) || await cache.match(request.url);
      if (cached) return cached;
      const response = await fetch(request);
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    })());
  }
});
