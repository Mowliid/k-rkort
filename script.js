let provIndex = 0;
let questions = [];
let current = 0;
let answers = [];
let revealed = [];
let activeChapter = null;
let activePage = 1;
let miniAnswers = {};

const letters = ['A','B','C','D'];
const screens = ['home','provList','quiz','overview','result','theory','chapter'];
const $ = id => document.getElementById(id);

const BOOK_CHAPTERS = [
  {cat:'Trafikregler', title:'Inledning', start:6, end:12},
  {cat:'Trafikregler', title:'Körfält', start:14, end:20},
  {cat:'Trafikregler', title:'Väjningsregler', start:22, end:44},
  {cat:'Trafikregler', title:'Passager', start:46, end:56},
  {cat:'Trafikregler', title:'Cirkulationsplats', start:58, end:66},
  {cat:'Trafikregler', title:'Stanna & parkera', start:68, end:76},
  {cat:'Trafikregler', title:'Landsväg', start:78, end:88},
  {cat:'Trafikregler', title:'Motorväg & motortrafikled', start:90, end:96},
  {cat:'Trafikregler', title:'Omkörningar', start:98, end:106},
  {cat:'Trafikregler', title:'Järnvägskorsningar', start:108, end:114},
  {cat:'Trafikregler', title:'Speciella gator', start:116, end:122},
  {cat:'Trafikregler', title:'Vinter', start:124, end:130},
  {cat:'Människan', title:'Inlärning & mognad', start:132, end:138},
  {cat:'Människan', title:'Alkohol', start:140, end:146},
  {cat:'Människan', title:'Trötthet', start:148, end:152},
  {cat:'Människan', title:'Synen', start:154, end:160},
  {cat:'Människan', title:'Nedsatt förmåga', start:162, end:166},
  {cat:'Människan', title:'Barn', start:168, end:172},
  {cat:'Människan', title:'Trafikolyckor', start:174, end:186},
  {cat:'Fordon', title:'Indelning av fordon', start:188, end:194},
  {cat:'Fordon', title:'Sträckor', start:196, end:202},
  {cat:'Fordon', title:'Däck', start:204, end:212},
  {cat:'Fordon', title:'Styrning', start:214, end:222},
  {cat:'Fordon', title:'Bromsar', start:224, end:230},
  {cat:'Fordon', title:'Krocksäkerhet', start:232, end:236},
  {cat:'Fordon', title:'Bilbarnstolar', start:238, end:242},
  {cat:'Fordon', title:'Längd & bredd', start:244, end:250},
  {cat:'Fordon', title:'Last', start:252, end:260},
  {cat:'Fordon', title:'Belysning', start:262, end:270},
  {cat:'Fordon', title:'Säkerhetskontroller', start:272, end:276},
  {cat:'Fordon', title:'Besiktning', start:278, end:282},
  {cat:'Fordon', title:'Service', start:284, end:288},
  {cat:'Fordon', title:'Registreringsbevis', start:290, end:296},
  {cat:'Fordon', title:'Försäkring', start:298, end:302},
  {cat:'Miljö', title:'Miljö', start:304, end:310},
  {cat:'Miljö', title:'Sparsam körning', start:312, end:316},
  {cat:'Miljö', title:'Drivmedel', start:318, end:322},
  {cat:'Vägmärken', title:'Vägmärken', start:324, end:360},
  {cat:'Rättsfall', title:'Hur domstolar har dömt i olika trafikmål', start:362, end:367}
];

function show(id){ screens.forEach(s=>$(s)?.classList.add('hidden')); $(id)?.classList.remove('hidden'); window.scrollTo(0,0); }
function showHome(){ stopSpeech(); show('home'); }
function openMenu(){ alert('Meny kommer senare. Använd Hem, Prov och Teoribok.'); }
function init(){ buildProvCards(); show('home'); }

function buildProvCards(){
  const wrap=$('provCards'); if(!wrap) return;
  wrap.innerHTML=(PROVS||[]).slice(0,4).map((p,i)=>`<button class="prov-card" onclick="startProv(${i})"><h2>${p.title}</h2><p>70 frågor • Godkänd 52 rätt</p></button>`).join('');
}
function showProvList(){ stopSpeech(); show('provList'); }
function startProv(i){
  provIndex=i; questions=PROVS[i].questions||[]; current=0; answers=Array(questions.length).fill(null); revealed=Array(questions.length).fill(false); show('quiz'); render();
}
function correctIndex(q){
  const v=q.correct ?? q.answer ?? q.correctAnswer;
  if(typeof v==='number') return v;
  if(typeof v==='string'){ const t=v.trim().toUpperCase(); if(letters.includes(t)) return letters.indexOf(t); const n=Number(t); if(!Number.isNaN(n)) return n; }
  return null;
}
function countRight(){ let r=0; questions.forEach((q,i)=>{ if(answers[i]===correctIndex(q)) r++; }); return r; }
function render(){
  if(!questions.length) return showProvList();
  const q=questions[current], c=correctIndex(q);
  $('activeProvName').textContent=PROVS[provIndex].title;
  $('counter').textContent=`Fråga ${current+1} av ${questions.length}`;
  $('progressText').textContent=`Fråga ${current+1} av ${questions.length}`;
  $('liveRight').textContent=countRight();
  $('progressFill').style.width=`${((current+1)/questions.length)*100}%`;
  $('chapterName').innerHTML=`Kapitel: ${q.chapter || 'Blandade frågor'}`;
  $('questionText').textContent=q.text||'';
  $('imageBox').innerHTML=(q.images||[]).map(src=>`<img src="${src}" alt="Bild till frågan" onerror="this.style.display='none'">`).join('');
  $('answers').innerHTML=(q.options||[]).map((opt,i)=>{
    let cls='answer';
    if(answers[current]===i) cls+=' selected';
    if(revealed[current] && i===c) cls+=' correct';
    if(revealed[current] && answers[current]===i && i!==c) cls+=' wrong';
    return `<div class="${cls}" onclick="choose(${i})"><span>${letters[i]})</span><span>${opt}</span><button onclick="event.stopPropagation(); readText('${escapeText(letters[i]+'. '+opt)}')">🔊</button></div>`;
  }).join('');
  const fb=$('feedback'); fb.className='feedback hidden'; fb.textContent='';
  if(revealed[current]){ fb.classList.remove('hidden'); if(answers[current]===c){ fb.textContent='Rätt svar!'; fb.classList.add('ok'); } else { fb.textContent=`Fel svar. Rätt svar är ${letters[c]}.`; fb.classList.add('bad'); } }
}
function choose(i){ answers[current]=i; revealed[current]=true; render(); }
function nextQuestion(){ if(current<questions.length-1){ current++; render(); window.scrollTo(0,0); } else finishExam(); }
function prevQuestion(){ if(current>0){ current--; render(); window.scrollTo(0,0); } }
function showOverview(){
  $('overviewGrid').innerHTML=questions.map((q,i)=>{ let cls='qbtn'; if(answers[i]!==null) cls+=' answered'; if(revealed[i] && answers[i]!==correctIndex(q)) cls+=' wrong'; return `<button class="${cls}" onclick="goQuestion(${i})">${i+1}</button>`; }).join(''); show('overview');
}
function goQuestion(i){ current=i; show('quiz'); render(); }
function backToQuiz(){ show('quiz'); render(); }
function finishExam(){ const right=countRight(), pass=right>=52; $('statusText').textContent=pass?'Godkänd':'Icke godkänd'; $('statusText').className=pass?'pass':'fail'; $('scoreText').textContent=`${right} / ${questions.length} rätt`; $('resultInfo').textContent=pass?'Bra jobbat! Du klarade provet.':'Du behöver minst 52 rätt för godkänt.'; show('result'); }
function restartSame(){ startProv(provIndex); }

function showTheory(){ stopSpeech(); buildTheoryList(); show('theory'); }
function showTheoryTab(tab){
  const tabs=document.querySelectorAll('.theory-tabs button'); tabs.forEach(b=>b.classList.remove('active'));
  if(tab==='book'){ tabs[0].classList.add('active'); buildTheoryList(); }
  if(tab==='saved'){ tabs[1].classList.add('active'); $('theoryContent').innerHTML='<div class="empty-card">Du har inte sparat något ännu.</div>'; }
  if(tab==='keys'){ tabs[2].classList.add('active'); buildKeywords(); }
}
function buildTheoryList(){
  const wrap=$('theoryContent'); if(!wrap) return;
  let html='';
  const cats=[...new Set(BOOK_CHAPTERS.map(c=>c.cat))];
  cats.forEach(cat=>{
    html += `<h2 class="cat-title">${cat}</h2><div class="chapter-list">`;
    BOOK_CHAPTERS.filter(c=>c.cat===cat).forEach((c)=>{
      const idx=BOOK_CHAPTERS.indexOf(c);
      html += `<button class="chapter-item" onclick="openChapter(${idx})"><div><small>${c.cat} • sida ${c.start}</small><b>${c.title}</b><span>${c.end-c.start+1} sidor</span></div><strong>›</strong></button>`;
    });
    html += '</div>';
  });
  wrap.innerHTML=html;
}
function buildKeywords(){
  const keys=['högerregeln','huvudled','väjningsplikt','övergångsställe','cirkulationsplats','parkering','motorväg','omkörning','vinterdäck','alkohol','trötthet','bromssträcka','däck','belysning','miljö'];
  $('theoryContent').innerHTML=`<div class="keyword-grid">${keys.map(k=>`<button onclick="searchKeyword('${k}')">${k}</button>`).join('')}</div>`;
}
function searchKeyword(k){ alert('Sök i PDF: använd webbläsarens sökfunktion Ctrl+F och sök: '+k); }
function openChapter(i){
  activeChapter=BOOK_CHAPTERS[i]; activePage=activeChapter.start; miniAnswers={};
  $('chapterTitle').textContent=activeChapter.title;
  $('chapterHeading').textContent=activeChapter.title;
  $('chapterCategory').textContent=activeChapter.cat;
  renderBookPage(); buildChapterTest(); show('chapter');
}
function renderBookPage(){
  if(!activeChapter) return;
  $('chapterPagesLabel').textContent=`sida ${activePage} av ${activeChapter.end}`;
  const pdfUrl=`teoribok.pdf#page=${activePage}&zoom=page-width`;
  $('bookViewer').innerHTML=`<iframe title="Teoribok sida ${activePage}" src="${pdfUrl}"></iframe><p class="pdf-help">Om sidan inte syns på mobil: tryck <a href="${pdfUrl}" target="_blank">öppna sidan i ny flik</a>.</p>`;
}
function nextBookPage(){ if(activeChapter && activePage<activeChapter.end){ activePage++; renderBookPage(); document.querySelector('.chapter-card').scrollIntoView({behavior:'smooth'}); } }
function prevBookPage(){ if(activeChapter && activePage>activeChapter.start){ activePage--; renderBookPage(); document.querySelector('.chapter-card').scrollIntoView({behavior:'smooth'}); } }
function readChapterIntro(){ if(activeChapter) readText(`${activeChapter.category || activeChapter.cat}. ${activeChapter.title}. Läs sidorna ${activeChapter.start} till ${activeChapter.end}.`); }

function makeTest(ch){
  const templates = [
    [`Vilken huvudregel är viktigast i kapitlet ${ch.title}?`, ['Att köra fortare än andra','Att anpassa körningen efter situationen','Att alltid ligga nära bilen framför','Att alltid välja vänster körfält'], 1],
    [`Vad ska du göra när du är osäker i en situation som hör till ${ch.title}?`, ['Chansa snabbt','Tuta och fortsätta','Sänka farten och skapa marginal','Stanna mitt i körfältet utan anledning'], 2],
    [`Vad betyder defensiv körning i praktiken?`, ['Ta onödiga risker','Ha god uppsikt och marginal','Köra över till vänster','Alltid köra långsamt'], 1],
    [`Vad är bäst för säkerheten?`, ['Stressa igenom situationen','Hålla blicken stilla','Planera i god tid','Köra nära andra'], 2],
    [`När ska du använda extra försiktighet?`, ['När sikten är begränsad','Endast på motorväg','Bara vid soligt väder','Aldrig i tätort'], 0],
    [`Vad ska du tänka på kring regler och vägmärken?`, ['Polisens tecken gäller först','Högerregeln gäller alltid först','Skyltar gäller aldrig','Trafiksignaler gäller aldrig'], 0],
    [`Vilket beteende är farligast?`, ['Att hålla säkerhetsavstånd','Att läsa trafiken långt fram','Att ta större risker för att bilen har säkerhetssystem','Att anpassa hastigheten'], 2],
    [`Vad ska ett kapiteltest hjälpa dig med?`, ['Memorera bara bilder','Förstå reglerna i riktiga situationer','Hoppa över teorin','Gissa snabbare'], 1],
    [`Vad är bäst om du missar något i kapitlet?`, ['Gå tillbaka och läsa sidan igen','Fortsätta utan att förstå','Bara trycka nästa','Gissa på provet'], 0],
    [`Vad är målet med ${ch.title}?`, ['Att förstå hur du kör säkert och lagligt','Att bara klara en fråga','Att ignorera andra trafikanter','Att alltid köra snabbast'], 0]
  ];
  return templates;
}
function buildChapterTest(){
  const qs=makeTest(activeChapter);
  $('chapterTest').innerHTML=qs.map((q,qi)=>`<div class="mini-q" id="mini-${qi}"><h4>${qi+1}. ${q[0]}</h4>${q[1].map((o,oi)=>`<button onclick="answerMini(${qi},${oi})">${letters[oi]}) ${o}</button>`).join('')}<p></p></div>`).join('');
}
function answerMini(qi,oi){
  const qs=makeTest(activeChapter); const correct=qs[qi][2]; const box=$(`mini-${qi}`); const buttons=box.querySelectorAll('button');
  buttons.forEach((b,i)=>{ b.classList.remove('right','bad'); if(i===correct) b.classList.add('right'); if(i===oi && i!==correct) b.classList.add('bad'); });
  box.querySelector('p').textContent = oi===correct ? 'Rätt!' : `Fel. Rätt svar är ${letters[correct]}.`;
}

function readCurrentQuestion(){ const q=questions[current]; if(!q) return; readText(`Fråga ${current+1}. ${q.text}. ` + (q.options||[]).map((o,i)=>`${letters[i]}. ${o}`).join('. ')); }
function readText(text){ if(!('speechSynthesis' in window)){ alert('Din webbläsare stödjer inte uppläsning.'); return; } speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(String(text).replace(/\s+/g,' ')); u.lang='sv-SE'; u.rate=.9; speechSynthesis.speak(u); }
function stopSpeech(){ if('speechSynthesis' in window) speechSynthesis.cancel(); }
function escapeText(s){ return String(s).replace(/'/g,'’').replace(/\n/g,' '); }

window.addEventListener('load', init);
