
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".webm": "audio/webm; codecs=opus"
};

function stripHtml(s) {
  return String(s || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeWord(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\- ]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function singularGuess(w) {
  return w
    .replace(/erna$/i, "e")
    .replace(/arna$/i, "e")
    .replace(/orna$/i, "a")
    .replace(/elser$/i, "else")
    .replace(/heter$/i, "het")
    .replace(/ingar$/i, "ing")
    .replace(/ande$/i, "a")
    .replace(/ende$/i, "e")
    .replace(/er$/i, "")
    .replace(/ar$/i, "")
    .replace(/or$/i, "")
    .replace(/en$/i, "")
    .replace(/et$/i, "")
    .replace(/s$/i, "");
}

function loadCorpus() {
  const dataPath = path.join(ROOT, "data.js");
  let raw = "";
  try { raw = fs.readFileSync(dataPath, "utf8"); } catch { return []; }

  const texts = [];
  const regex = /["'`](.*?)(?<!\\)["'`]/gs;
  let m;
  while ((m = regex.exec(raw)) !== null) {
    const t = stripHtml(m[1].replace(/\\n/g, " "));
    if (/[åäöÅÄÖ]/.test(t) || /\b(Allah|Herre|värld|skapelse|barmhärtig|nåd|vers|Sura)\b/i.test(t)) {
      if (t.length > 10) texts.push(t);
    }
  }

  const sentences = [];
  for (const t of texts) {
    for (const s of t.split(/(?<=[.!?])\s+| • | \| /)) {
      const clean = stripHtml(s);
      if (clean.length >= 20 && clean.length <= 500) sentences.push(clean);
    }
  }
  return [...new Set(sentences)];
}

const corpus = loadCorpus();

const simpleDict = {
  "välsignelse": "något gott som Gud ger eller något gott man får i livet, till exempel hälsa, mat, familj eller trygghet",
  "välsignelser": "flera goda saker som Gud ger eller flera goda saker man får i livet",
  "nåd": "att få godhet, hjälp eller förlåtelse även när man inte har förtjänat det",
  "nåderik": "mycket god, barmhärtig och förlåtande",
  "barmhärtig": "snäll och förlåtande mot människor",
  "benådande": "en som förlåter och visar nåd",
  "lovprisning": "att säga goda och fina ord om Gud",
  "tillkommer": "hör till eller passar för någon",
  "herre": "den som äger, styr och tar hand om något",
  "skapelse": "allt som Gud har skapat",
  "förvaltare": "någon som tar hand om och styr något",
  "dyrka": "att be till och visa stor respekt för Gud",
  "gudomlighet": "det som hör till Gud eller det gudomliga",
  "oändlig": "utan slut",
  "nådige": "den som visar nåd och förlåtelse"
};

function findSentencesFor(word) {
  const w = normalizeWord(word);
  const base = singularGuess(w);
  const hits = [];

  for (const s of corpus) {
    const ns = normalizeWord(s);
    if (ns.includes(w) || (base.length > 3 && ns.includes(base))) hits.push(s);
    if (hits.length >= 6) break;
  }
  return hits;
}

function explainWord(input) {
  const raw = String(input || "").trim();
  const cleaned = normalizeWord(raw.replace(/^förklara detta enkelt:?/i, ""));
  const words = cleaned.split(" ").filter(Boolean);
  const word = words.length ? words[words.length - 1] : cleaned;
  const base = singularGuess(word);

  let meaning = simpleDict[word] || simpleDict[base] || null;
  const hits = findSentencesFor(word);

  if (!meaning) {
    if (hits.length) {
      meaning = "Ordet finns i svenska Koran-texten. Jag kan inte ge en perfekt ordboksförklaring offline, men jag kan förklara med hjälp av sammanhanget i texten.";
    } else {
      meaning = "Jag hittar inte ordet i den lokala svenska Koran-texten. Offline-AI:n kan bäst förklara ord som finns i appens svenska text.";
    }
  }

  let answer = `Ordet "${word}" betyder enkelt: ${meaning}.`;

  if (hits.length) {
    answer += "\n\nExempel från texten:\n";
    answer += hits.slice(0, 3).map(x => "• " + x).join("\n");
  }

  answer += "\n\nMed enklare ord: tänk på ordet som något som hjälper dig förstå meningen runt omkring. Vill du kan du skriva: 'förklara ännu enklare' eller fråga ett nytt ord.";
  return answer;
}

function answerLocalAI(message) {
  const msg = String(message || "").trim();
  const lower = msg.toLowerCase();

  if (!msg) return "Skriv ett svenskt ord från texten, så förklarar jag det enkelt.";

  if (lower.includes("vad kan du") || lower.includes("hjälp")) {
    return "Jag är en gratis lokal AI i appen. Jag kan förklara svenska ord som finns i Koranens svenska text, visa exempel från texten och hjälpa dig förstå meningen enkelt. Jag använder ingen API-nyckel och behöver inte internet.";
  }

  if (lower.includes("internet") || lower.includes("wikipedia") || lower.includes("wiktionary")) {
    return "Internet-sökning är separat. Den här lokala AI:n fungerar utan internet och använder appens svenska Koran-text. Senare kan man lägga till en knapp för Wikipedia/Wiktionary.";
  }

  if (lower.includes("förklara ännu enklare") || lower.includes("enklare")) {
    return "Skriv ordet igen, till exempel: 'välsignelser'. Då förklarar jag det med mycket enkla ord och exempel från texten.";
  }

  return explainWord(msg);
}

function readBody(req, cb) {
  let body = "";
  req.on("data", c => body += c);
  req.on("end", () => cb(body));
}


const MATROOD_CACHE_DIR = path.join(ROOT, "matrood-cache");
const MATROOD_BASE_URL = "https://everyayah.com/data/Abdullah_Matroud_128kbps/";
const activeDownloads = new Map();
fs.mkdirSync(MATROOD_CACHE_DIR, { recursive: true });

function isValidMatroodFile(name) {
  return /^\d{6}\.mp3$/.test(String(name || ""));
}

function downloadUrlToFile(url, destination, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 6) return reject(new Error("För många omdirigeringar"));
    const client = url.startsWith("https:") ? https : http;
    const request = client.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 QuranApp/1.0",
        "Accept": "audio/mpeg,audio/*;q=0.9,*/*;q=0.8"
      }
    }, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        response.resume();
        const nextUrl = new URL(response.headers.location, url).toString();
        return downloadUrlToFile(nextUrl, destination, redirects + 1).then(resolve, reject);
      }
      if (response.statusCode !== 200) {
        response.resume();
        return reject(new Error(`EveryAyah svarade ${response.statusCode}`));
      }

      const temp = destination + `.part-${process.pid}-${Date.now()}`;
      const output = fs.createWriteStream(temp);
      response.pipe(output);
      output.on("finish", () => {
        output.close(() => {
          fs.stat(temp, (error, stat) => {
            if (error || stat.size < 1000) {
              fs.unlink(temp, () => {});
              return reject(error || new Error("Den hämtade MP3-filen var tom"));
            }
            fs.rename(temp, destination, renameError => {
              if (renameError) {
                fs.unlink(temp, () => {});
                return reject(renameError);
              }
              resolve(destination);
            });
          });
        });
      });
      output.on("error", error => {
        response.destroy();
        fs.unlink(temp, () => {});
        reject(error);
      });
    });
    request.setTimeout(45000, () => request.destroy(new Error("Tidsgränsen gick ut")));
    request.on("error", reject);
  });
}

async function ensureMatroodFile(filename) {
  if (!isValidMatroodFile(filename)) throw new Error("Felaktigt filnamn");
  const localPath = path.join(MATROOD_CACHE_DIR, filename);
  try {
    const stat = await fs.promises.stat(localPath);
    if (stat.isFile() && stat.size > 1000) return localPath;
  } catch (_) {}

  if (activeDownloads.has(filename)) return activeDownloads.get(filename);
  const job = downloadUrlToFile(MATROOD_BASE_URL + filename, localPath)
    .finally(() => activeDownloads.delete(filename));
  activeDownloads.set(filename, job);
  return job;
}

function serveFile(req, res, file, contentType, cacheControl = "no-cache") {
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
      return res.end("Filen hittades inte");
    }

    const headers = {
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Cache-Control": cacheControl,
      "X-Content-Type-Options": "nosniff"
    };
    const range = req.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) {
        res.writeHead(416, {...headers, "Content-Range": `bytes */${stat.size}`});
        return res.end();
      }
      let start = match[1] ? Number(match[1]) : 0;
      let end = match[2] ? Number(match[2]) : stat.size - 1;
      if (!match[1] && match[2]) {
        const suffixLength = Number(match[2]);
        start = Math.max(0, stat.size - suffixLength);
        end = stat.size - 1;
      }
      end = Math.min(end, stat.size - 1);
      if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || start > end || start >= stat.size) {
        res.writeHead(416, {...headers, "Content-Range": `bytes */${stat.size}`});
        return res.end();
      }
      res.writeHead(206, {
        ...headers,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": end - start + 1
      });
      if (req.method === "HEAD") return res.end();
      return fs.createReadStream(file, {start, end}).pipe(res);
    }

    res.writeHead(200, {...headers, "Content-Length": stat.size});
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, "http://localhost:3000");

  if ((req.method === "GET" || req.method === "HEAD") && requestUrl.pathname.startsWith("/matrood/")) {
    const filename = decodeURIComponent(requestUrl.pathname.split("/").pop() || "");
    if (!isValidMatroodFile(filename)) {
      res.writeHead(400, {"Content-Type": "text/plain; charset=utf-8"});
      return res.end("Felaktigt MP3-filnamn");
    }
    try {
      const localFile = await ensureMatroodFile(filename);
      return serveFile(req, res, localFile, "audio/mpeg", "public, max-age=31536000, immutable, no-transform");
    } catch (error) {
      console.error("Kunde inte hämta Matrood", filename, error.message);
      res.writeHead(502, {"Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store"});
      return res.end("Kunde inte hämta den rena Matrood-filen. Kontrollera internetanslutningen.");
    }
  }

  if (req.method === "POST" && requestUrl.pathname === "/api/chat") {
    return readBody(req, body => {
      try {
        const data = JSON.parse(body || "{}");
        const answer = answerLocalAI(data.message || "");
        res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
        res.end(JSON.stringify({answer, local:true}));
      } catch (e) {
        res.writeHead(500, {"Content-Type": "application/json; charset=utf-8"});
        res.end(JSON.stringify({error: e.message}));
      }
    });
  }

  let urlPath = requestUrl.pathname;
  if (urlPath === "/") urlPath = "/index.html";
  const file = path.normalize(path.join(ROOT, decodeURIComponent(urlPath)));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  const ext = path.extname(file);
  const contentType = types[ext] || "application/octet-stream";
  const isAudio = ext === ".mp3" || ext === ".webm";
  return serveFile(
    req,
    res,
    file,
    contentType,
    isAudio ? "public, max-age=31536000, immutable, no-transform" : "no-cache, no-store, must-revalidate"
  );
});

server.listen(3000, "127.0.0.1", () => {
  console.log("\nKORANAPP KÖR: http://localhost:3000");
  console.log("Ren Matrood 128 kbps sparas automatiskt i mappen matrood-cache.");
  console.log("Ingen API-nyckel eller npm install behövs.\n");
});
