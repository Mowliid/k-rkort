let currentProv = null;
let questions = [];
let current = 0;
let answers = [];
let marked = [];
let revealed = [];
let practice = false;

const $ = id => document.getElementById(id);

function show(id){
  ["startPage","choicePage","examPage","overviewPage"].forEach(x => $(x).classList.add("hidden"));
  $(id).classList.remove("hidden");
}

function resetExamState(){
  currentProv = null;
  questions = [];
  current = 0;
  answers = [];
  marked = [];
  revealed = [];
  practice = false;
}

function goStart(){
  resetExamState();
  show("startPage");
}

function goStartConfirm(){
  goStart();
}

function showProvChoice(){
  renderProvButtons();
  show("choicePage");
}

function startPractice(){
  currentProv = PROVS[0];
  questions = currentProv.questions.slice(0,2);
  practice = true;
  begin();
}

function renderProvButtons(){
  let html = "";
  PROVS.forEach((p,i)=>{
    html += `<button onclick="selectProv(${i})">${p.title}</button>`;
  });
  $("provButtons").innerHTML = html;
}

function selectProv(i){
  currentProv = PROVS[i];
  questions = currentProv.questions;
  practice = false;
  begin();
}

function begin(){
  current = 0;
  answers = Array(questions.length).fill(null);
  marked = Array(questions.length).fill(false);
  revealed = Array(questions.length).fill(false);
  show("examPage");
  renderQuestion();
}

function getShownCorrectIndex(q){
  const value = q.correct ?? q.answer ?? q.correctAnswer ?? q.ratt ?? q.rätt;
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const t = value.trim().toUpperCase();
    if (["A","B","C","D"].includes(t)) return t.charCodeAt(0)-65;
    const n = Number(t);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}

function renderQuestion(){
  let q = questions[current];
  $("questionText").textContent = q.text;
  $("counter").textContent = (current+1)+"/"+questions.length;
  $("markBtn").textContent = marked[current] ? "⚑ Avmarkera frågan" : "⚑ Markera frågan";

  const correctIndex = revealed[current] ? getShownCorrectIndex(q) : null;
  let html = "";
  q.options.forEach((o,i)=>{
    let cls = "option";
    if (answers[current] === i) cls += " selected";
    if (revealed[current] && correctIndex !== null && i === correctIndex) cls += " correctShown";
    if (revealed[current] && correctIndex !== null && answers[current] !== null && answers[current] !== correctIndex && i === answers[current]) cls += " wrongShown";
    html += `<label class="${cls}"><input type="radio" name="ans" ${answers[current]===i?"checked":""} onchange="selectAnswer(${i})"><span class="letter">${String.fromCharCode(65+i)}</span><span>${o}</span></label>`;
  });
  $("options").innerHTML = html;

  let imgs = (q.images||[]).map(src => `<img src="${src}" class="${src.includes('100px')||src.includes('115px')?'small':''}">`).join("");
  $("qImages").innerHTML = imgs || "<p>Ingen bild</p>";
}

function selectAnswer(i){
  answers[current] = i;
  // När man ändrar svar efter Se svar, behåll ringen och uppdatera direkt.
  renderQuestion();
}

function toggleMark(){
  marked[current] = !marked[current];
  renderQuestion();
}

function nextQuestion(){
  if(current < questions.length-1){
    current++;
    renderQuestion();
  } else {
    showOverview();
  }
}

function prevQuestion(){
  if(current > 0){
    current--;
    renderQuestion();
  } else {
    // På fråga 1 går Föregående tillbaka till startsidan.
    goStart();
  }
}

function showOverview(){
  show("overviewPage");
  renderGrid();
}

function renderGrid(){
  let html = "";
  for(let r=0;r<10;r++){
    for(let c=0;c<7;c++){
      let i = c*10+r;
      if(i >= questions.length) continue;
      let cls = answers[i] !== null ? "answered" : "";
      if(marked[i]) cls += " marked";
      const q = questions[i];
      const correct = (typeof q.correct === "number") ? q.correct : null;
      if(revealed[i] && correct !== null && answers[i] !== null && answers[i] !== correct) cls += " wrong";
      html += `<div class="qcell"><span>${i+1}</span><button class="${cls}" onclick="goQuestion(${i})"></button></div>`;
    }
  }
  $("grid").innerHTML = html;
}

function goQuestion(i){
  current = i;
  show("examPage");
  renderQuestion();
}

function showAnswer(){
  revealed[current] = true;
  renderQuestion();
}

function goBackFromOverview(){
  show("examPage");
  renderQuestion();
}

function finishExam(){
  goStart();
}

renderProvButtons();
