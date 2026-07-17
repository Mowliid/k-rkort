
const http = require("http");
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

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/chat") {
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

  let url = req.url.split("?")[0];
  if (url === "/") url = "/index.html";
  const file = path.normalize(path.join(ROOT, decodeURIComponent(url)));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404);
      return res.end("Not found");
    }

    const contentType = types[path.extname(file)] || "application/octet-stream";
    const commonHeaders = {
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Cache-Control": file.includes(`${path.sep}surah-audio${path.sep}`)
        ? "public, max-age=31536000, immutable"
        : "no-cache"
    };
    const range = req.headers.range;

    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) {
        res.writeHead(416, {...commonHeaders, "Content-Range": `bytes */${stat.size}`});
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
        res.writeHead(416, {...commonHeaders, "Content-Range": `bytes */${stat.size}`});
        return res.end();
      }

      res.writeHead(206, {
        ...commonHeaders,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": end - start + 1
      });
      if (req.method === "HEAD") return res.end();
      return fs.createReadStream(file, {start, end}).pipe(res);
    }

    res.writeHead(200, {...commonHeaders, "Content-Length": stat.size});
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  });
});

server.listen(3000, () => {
  console.log("\nGRATIS LOKAL AI KÖR: http://localhost:3000");
  console.log("Ingen API-nyckel behövs. Kör inte npm install.\n");
});
