let provIndex = 0;
let questions = [];
let current = 0;
let answers = [];
let revealed = [];

const $ = (id)=>document.getElementById(id);
const letters = ['A','B','C','D'];
const screens = ['home','quiz','overview','result'];

function show(id){ screens.forEach(s=>$(s).classList.add('hidden')); $(id).classList.remove('hidden'); }

function init(){
  const sel = $('provSelect');
  sel.innerHTML = PROVS.slice(0,4).map((p,i)=>`<option value="${i}">${p.title}</option>`).join('');
}

function startSelectedProv(){
  provIndex = Number($('provSelect').value || 0);
  questions = PROVS[provIndex].questions || [];
  current = 0;
  answers = Array(questions.length).fill(null);
  revealed = Array(questions.length).fill(false);
  buildChapters();
  show('quiz');
  render();
}

function buildChapters(){
  let html = '<option value="0">Alla kapitel</option>';
  for(let s=0;s<questions.length;s+=10){
    const e = Math.min(s+10,questions.length);
    html += `<option value="${s}">Kapitel ${Math.floor(s/10)+1}: fråga ${s+1}-${e}</option>`;
  }
  $('chapterSelect').innerHTML = html;
}

function jumpToChapter(v){ current = Number(v); render(); window.scrollTo(0,0); }
function goHome(){ if(speechSynthesis) speechSynthesis.cancel(); show('home'); }
function backToQuiz(){ show('quiz'); render(); }

function correctIndex(q){
  const v = q.correct ?? q.answer ?? q.correctAnswer ?? q.ratt ?? q['rätt'];
  if(typeof v === 'number' && v >= 0) return v;
  if(typeof v === 'string'){
    const t = v.trim().toUpperCase();
    if(letters.includes(t)) return letters.indexOf(t);
    const n = Number(t); if(!Number.isNaN(n)) return n;
  }
  return null;
}

function countRight(){
  let r = 0;
  questions.forEach((q,i)=>{ const c = correctIndex(q); if(c !== null && answers[i] === c) r++; });
  return r;
}

function render(){
  if(!questions.length) return goHome();
  const q = questions[current];
  $('activeProvName').textContent = PROVS[provIndex].title;
  $('counter').textContent = `Fråga ${current+1} av ${questions.length}`;
  $('progressText').textContent = `Fråga ${current+1} av ${questions.length}`;
  $('liveRight').textContent = countRight();
  $('progressFill').style.width = `${((current+1)/questions.length)*100}%`;
  $('chapterName').innerHTML = `<b>Kapitel:</b> ${q.chapter || ('Kapitel ' + (Math.floor(current/10)+1))}`;
  $('questionText').textContent = q.text || '';
  $('imageBox').innerHTML = (q.images||[]).map(src=>`<img src="${src}" alt="Bild till frågan">`).join('');

  const c = correctIndex(q);
  $('answers').innerHTML = (q.options||[]).map((opt,i)=>{
    let cls = 'answer';
    if(answers[current] === i) cls += ' selected';
    if(revealed[current] && c !== null && i === c) cls += ' correct';
    if(revealed[current] && c !== null && answers[current] === i && i !== c) cls += ' wrong';
    return `<div class="${cls}" onclick="choose(${i})"><span class="letter">${letters[i]})</span><span>${opt}</span><button onclick="event.stopPropagation(); readText('${escapeText(letters[i]+'. '+opt)}')">🔊</button></div>`;
  }).join('');

  const fb = $('feedback');
  fb.className = 'feedback hidden';
  fb.textContent = '';
  if(revealed[current]){
    fb.classList.remove('hidden');
    if(c === null){ fb.textContent = 'Rätt svar saknas i frågedatan.'; fb.classList.add('bad'); }
    else if(answers[current] === c){ fb.textContent = 'Rätt svar!'; fb.classList.add('ok'); }
    else { fb.textContent = `Fel svar. Rätt svar är ${letters[c]}.`; fb.classList.add('bad'); }
  }
}

function choose(i){
  answers[current] = i;
  revealed[current] = true;
  render();
}

function nextQuestion(){
  if(current < questions.length-1){ current++; render(); window.scrollTo(0,0); }
  else finishExam();
}
function prevQuestion(){ if(current>0){ current--; render(); window.scrollTo(0,0); } }

function showOverview(){
  $('overviewGrid').innerHTML = questions.map((q,i)=>{
    const c = correctIndex(q);
    let cls='qbtn';
    if(answers[i] !== null) cls += ' answered';
    if(revealed[i] && c !== null && answers[i] !== null && answers[i] !== c) cls += ' wrong';
    return `<button class="${cls}" onclick="goQuestion(${i})">${i+1}</button>`;
  }).join('');
  show('overview');
}
function goQuestion(i){ current=i; show('quiz'); render(); window.scrollTo(0,0); }

function finishExam(){
  const right = countRight();
  const pass = right >= 52;
  $('statusText').textContent = pass ? 'Godkänd' : 'Icke godkänd';
  $('statusText').className = pass ? 'pass' : 'fail';
  $('scoreText').textContent = `${right} / ${questions.length} rätt`;
  $('resultInfo').textContent = pass ? 'Bra jobbat! Du klarade provet.' : 'Du behöver minst 52 rätt för godkänt.';
  show('result');
}
function restartSame(){ $('provSelect').value = provIndex; startSelectedProv(); }

function readCurrentQuestion(){
  const q = questions[current];
  const text = `Fråga ${current+1}. ${q.text}. ` + (q.options||[]).map((o,i)=>`${letters[i]}. ${o}`).join('. ');
  readText(text);
}
function readText(text){
  if(!('speechSynthesis' in window)){ alert('Din webbläsare stödjer inte uppläsning.'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/\s+/g,' '));
  u.lang='sv-SE'; u.rate=.9;
  speechSynthesis.speak(u);
}
function escapeText(s){ return String(s).replace(/'/g,'’').replace(/\n/g,' '); }

init();
