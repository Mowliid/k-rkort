const questions = [
  // INLEDNING
  {chapter:"Inledning", question:"Vad betyder defensiv körning?", answers:["Att köra aggressivt","Att köra säkert med goda marginaler","Att köra så snabbt som möjligt"], correct:1},
  {chapter:"Inledning", question:"Vilket gäller först i trafiken?", answers:["Polisens tecken","Vägmärken","Högerregeln"], correct:0},
  {chapter:"Inledning", question:"Vad ska du göra mot barn och äldre i trafiken?", answers:["Visa särskild hänsyn","Köra snabbare","Tuta alltid"], correct:0},
  {chapter:"Inledning", question:"Vad är vägrenen?", answers:["Mitten av vägen","Området utanför körbanan","Ett körfält för bilar"], correct:1},
  {chapter:"Inledning", question:"Vad betyder anpassa hastigheten?", answers:["Köra exakt skyltad hastighet alltid","Köra efter väder, trafik och sikt","Köra fortare vid stress"], correct:1},
  {chapter:"Inledning", question:"Vad gäller före vägmärken?", answers:["Trafiksignaler","Högerregeln","Parkeringsregler"], correct:0},
  {chapter:"Inledning", question:"Vad ska du ha till andra trafikanter?", answers:["Säkerhetsavstånd","Kort avstånd","Ingen kontakt"], correct:0},
  {chapter:"Inledning", question:"Vad är körbanan?", answers:["Båda körfälten tillsammans","Bara vägrenen","Bara trottoaren"], correct:0},
  {chapter:"Inledning", question:"Vad ska du göra vid otydliga regler?", answers:["Göra en rimlig och säker bedömning","Alltid chansa","Strunta i regeln"], correct:0},
  {chapter:"Inledning", question:"Vad ska du göra innan du agerar i trafiken?", answers:["Tänka igenom situationen","Blunda och köra","Alltid bromsa hårt"], correct:0},

  // KÖRFÄLT
  {chapter:"Körfält", question:"Var ska du normalt placera bilen?", answers:["I mitten av körfältet","På vägrenen","Så långt vänster som möjligt"], correct:0},
  {chapter:"Körfält", question:"Vad är markerade körfält?", answers:["Körfält med linjer","Körfält utan väg","Bara bussfiler"], correct:0},
  {chapter:"Körfält", question:"Vad ska du kontrollera vid körfältsbyte?", answers:["Spegel, sidospegel och döda vinkeln","Bara blinkers","Bara hastigheten"], correct:0},
  {chapter:"Körfält", question:"När får du inte byta körfält?", answers:["När linjen på din sida är heldragen","När vägen är rak","När det är ljust"], correct:0},
  {chapter:"Körfält", question:"Vilket körfält ska du normalt välja?", answers:["Längst till höger","Längst till vänster","Mitten alltid"], correct:0},
  {chapter:"Körfält", question:"Vad ska du göra innan du svänger över till nytt körfält?", answers:["Kolla döda vinkeln en sista gång","Stänga av blinkers","Bromsa hårt"], correct:0},
  {chapter:"Körfält", question:"Vad är kollektivkörfält?", answers:["Körfält för buss m.fl.","Körfält för alla bilar","Parkeringsplats"], correct:0},
  {chapter:"Körfält", question:"Vad betyder reversibelt körfält?", answers:["Körriktningen kan ändras","Det är alltid avstängt","Bara cyklar får köra"], correct:0},
  {chapter:"Körfält", question:"Hur ska du placera dig vid högersväng?", answers:["Nära högerkanten","Nära vänsterkanten","I mötande körfält"], correct:0},
  {chapter:"Körfält", question:"Får du köra slalom mellan bilar i tät trafik?", answers:["Nej","Ja alltid","Bara på motorväg"], correct:0},

  // VÄJNINGSREGLER
  {chapter:"Väjningsregler", question:"Vad betyder högerregeln?", answers:["Du lämnar företräde åt fordon från höger","Du kör alltid först","Du stannar bara vid skylt"], correct:0},
  {chapter:"Väjningsregler", question:"Vad betyder väjningsplikt?", answers:["Du ska tydligt visa att du tänker släppa fram andra","Du har alltid företräde","Du måste parkera"], correct:0},
  {chapter:"Väjningsregler", question:"Vad gäller vid huvudled?", answers:["Trafik på anslutande väg har väjningsplikt","Högerregeln gäller alltid","Alla måste stanna"], correct:0},
  {chapter:"Väjningsregler", question:"Vad betyder stopplikt?", answers:["Du måste stanna helt","Du kan rulla sakta","Du behöver bara blinka"], correct:0},
  {chapter:"Väjningsregler", question:"När gäller utfartsregeln?", answers:["När du kör ut från t.ex. parkering eller bensinstation","På motorväg","Vid grön signal"], correct:0},
  {chapter:"Väjningsregler", question:"Vad gäller mot buss som lämnar hållplats på väg 50 km/h eller lägre?", answers:["Du ska lämna företräde","Du ska köra om direkt","Du ska tuta"], correct:0},
  {chapter:"Väjningsregler", question:"Vad gör du om trafiksignal visar grönt men väjningsskylt finns?", answers:["Följer trafiksignalen","Följer alltid skylten först","Stannar alltid"], correct:0},
  {chapter:"Väjningsregler", question:"Vad ska du göra vid skymd korsning?", answers:["Sänka farten och vara beredd","Öka farten","Köra mitt i vägen"], correct:0},
  {chapter:"Väjningsregler", question:"Vad innebär svängningsregeln?", answers:["Du får inte hindra mötande trafik när du svänger","Du får alltid svänga först","Du ska alltid stanna efter sväng"], correct:0},
  {chapter:"Väjningsregler", question:"Vilken regel gäller oftast om inget märke finns i korsning?", answers:["Högerregeln","Motorvägsregeln","Parkeringsregeln"], correct:0},

  // PASSAGER
  {chapter:"Passager", question:"Vad ska du göra vid övergångsställe?", answers:["Vara beredd att stanna","Öka farten","Tuta på gående"], correct:0},
  {chapter:"Passager", question:"Vem ska du lämna företräde åt vid obevakat övergångsställe?", answers:["Gående som är ute eller just ska gå ut","Alla bilar","Bara cyklar"], correct:0},
  {chapter:"Passager", question:"Vad är viktigt vid cykelpassage?", answers:["Anpassa hastigheten och visa hänsyn","Köra fort","Stanna mitt på passagen"], correct:0},
  {chapter:"Passager", question:"Vad är cykelöverfart?", answers:["En plats där bilförare har väjningsplikt mot cyklister","En parkeringsplats","En vanlig väggren"], correct:0},
  {chapter:"Passager", question:"Vad ska du göra om sikten är dålig vid passage?", answers:["Sänka hastigheten","Öka hastigheten","Köra nära kanten"], correct:0},
  {chapter:"Passager", question:"Får du köra om precis före övergångsställe?", answers:["Nej, normalt inte","Ja alltid","Bara om du blinkar"], correct:0},
  {chapter:"Passager", question:"Vad ska du göra mot barn nära vägen?", answers:["Vara extra försiktig","Tuta hårt","Köra nära dem"], correct:0},
  {chapter:"Passager", question:"Vad betyder bevakat övergångsställe?", answers:["Det finns trafiksignal eller polis","Det finns bara skylt","Det är på landsväg"], correct:0},
  {chapter:"Passager", question:"Vad ska du göra när du svänger och korsar cykelbana?", answers:["Lämna cyklister möjlighet att passera säkert","Köra först alltid","Stanna efter cykelbanan"], correct:0},
  {chapter:"Passager", question:"Varför ska du söka ögonkontakt?", answers:["För att förstå om personen tänker gå över","För att stressa personen","För att köra fortare"], correct:0},

  // CIRKULATIONSPLATS
  {chapter:"Cirkulationsplats", question:"Vad ska du göra när du kör in i cirkulationsplats?", answers:["Lämna företräde åt fordon i cirkulationen","Köra först","Stanna mitt i rondellen"], correct:0},
  {chapter:"Cirkulationsplats", question:"När ska du blinka?", answers:["När du kör ut","Aldrig","Bara när du kör in"], correct:0},
  {chapter:"Cirkulationsplats", question:"Vilken riktning kör man i cirkulationsplats i Sverige?", answers:["Motsols","Medsols","Valfri riktning"], correct:0},
  {chapter:"Cirkulationsplats", question:"Vad ska du tänka på vid körfältsbyte i rondell?", answers:["Kontrollera speglar och döda vinkeln","Bara svänga snabbt","Inte blinka"], correct:0},
  {chapter:"Cirkulationsplats", question:"Vad ska du göra om du missar avfarten?", answers:["Köra ett varv till","Backa","Stanna och vända"], correct:0},
  {chapter:"Cirkulationsplats", question:"Vem har väjningsplikt vid infart?", answers:["Den som kör in","Den som redan är inne","Gående på trottoar"], correct:0},
  {chapter:"Cirkulationsplats", question:"Vad är rondellen egentligen?", answers:["Mittenytan","Hela cirkulationsplatsen","En vägren"], correct:0},
  {chapter:"Cirkulationsplats", question:"Varför ska du sänka hastigheten före cirkulationsplats?", answers:["För att hinna se och lämna företräde","För att parkera","För att tuta"], correct:0},
  {chapter:"Cirkulationsplats", question:"Vad ska du göra mot cyklister vid utfart?", answers:["Vara uppmärksam och visa hänsyn","Köra snabbt ut","Ignorera dem"], correct:0},
  {chapter:"Cirkulationsplats", question:"Är det bra att byta körfält sent i rondell?", answers:["Nej, planera i tid","Ja alltid","Bara utan blinkers"], correct:0},

  // STANNA & PARKERA
  {chapter:"Stanna & parkera", question:"Får du parkera nära före övergångsställe?", answers:["Nej, inte inom 10 meter före","Ja alltid","Bara på kvällen"], correct:0},
  {chapter:"Stanna & parkera", question:"Vad betyder att stanna?", answers:["Kort uppställning för t.ex. av- och påstigning","Lång parkering","Lämna bilen över natten"], correct:0},
  {chapter:"Stanna & parkera", question:"Vad betyder parkera?", answers:["Ställa upp fordon längre än att bara stanna","Bromsa vid rödljus","Köra sakta"], correct:0},
  {chapter:"Stanna & parkera", question:"Får du parkera där du hindrar trafiken?", answers:["Nej","Ja alltid","Bara om varningsblinkers är på"], correct:0},
  {chapter:"Stanna & parkera", question:"Får du stanna på motorväg utan nödsituation?", answers:["Nej","Ja","Bara i vänster körfält"], correct:0},
  {chapter:"Stanna & parkera", question:"Vad betyder parkeringsförbud?", answers:["Du får inte parkera men kan ibland stanna","Du får inte ens bromsa","Du måste parkera"], correct:0},
  {chapter:"Stanna & parkera", question:"Vad betyder stoppförbud?", answers:["Du får varken stanna eller parkera","Du får parkera länge","Du får bara stanna"], correct:0},
  {chapter:"Stanna & parkera", question:"Varför får man inte parkera nära korsning?", answers:["Det skymmer sikten och hindrar trafik","Det sparar plats","Det gör vägen bredare"], correct:0},
  {chapter:"Stanna & parkera", question:"Får du parkera på busshållplats?", answers:["Nej, normalt inte","Ja alltid","Bara med släp"], correct:0},
  {chapter:"Stanna & parkera", question:"Vad ska du tänka på när du öppnar bildörr?", answers:["Kontrollera så ingen cyklist eller bil kommer","Öppna snabbt","Inte titta bakåt"], correct:0},

  // LANDSVÄG
  {chapter:"Landsväg", question:"Vad är viktigt på landsväg?", answers:["Anpassa hastighet och hålla avstånd","Köra nära bilen framför","Alltid köra om"], correct:0},
  {chapter:"Landsväg", question:"Vad ska du göra vid kurva med dålig sikt?", answers:["Sänka farten","Öka farten","Köra över mittlinjen"], correct:0},
  {chapter:"Landsväg", question:"Vad är viktigt vid möte på smal väg?", answers:["Sakta ner och hålla till höger","Köra i mitten","Blunda"], correct:0},
  {chapter:"Landsväg", question:"Vad ska du göra om vilt kan finnas nära vägen?", answers:["Vara extra uppmärksam","Öka farten","Tuta hela tiden"], correct:0},
  {chapter:"Landsväg", question:"När är risken för viltolycka ofta större?", answers:["Gryning och skymning","Mitt på dagen alltid","Bara på motorväg"], correct:0},
  {chapter:"Landsväg", question:"Vad ska du göra om du får möte med bred lastbil?", answers:["Hålla till höger och sänka hastigheten","Köra om","Stanna i mitten"], correct:0},
  {chapter:"Landsväg", question:"Varför ska du hålla avstånd på landsväg?", answers:["För att hinna reagera och bromsa","För att köra snabbare","För att slippa blinka"], correct:0},
  {chapter:"Landsväg", question:"Vad ska du göra vid backkrön?", answers:["Hålla till höger och vara försiktig","Köra om","Öka farten"], correct:0},
  {chapter:"Landsväg", question:"Får du köra om vid dålig sikt?", answers:["Nej","Ja alltid","Bara om bilen framför kör sakta"], correct:0},
  {chapter:"Landsväg", question:"Vad ska du göra om bakomvarande vill köra om?", answers:["Underlätta om det kan ske säkert","Öka farten","Lägga dig i mitten"], correct:0},

  // MOTORVÄG
  {chapter:"Motorväg", question:"Vad används accelerationsfält till?", answers:["Komma upp i fart innan du kör in","Parkera","Backa"], correct:0},
  {chapter:"Motorväg", question:"Får du backa på motorväg?", answers:["Nej","Ja","Bara lite"], correct:0},
  {chapter:"Motorväg", question:"Får du vända på motorväg?", answers:["Nej","Ja alltid","Bara vid kö"], correct:0},
  {chapter:"Motorväg", question:"Var ska du normalt köra på motorväg?", answers:["Höger körfält","Vänster körfält","Vägrenen"], correct:0},
  {chapter:"Motorväg", question:"Vad används vägrenen på motorväg till?", answers:["Nödsituationer","Vanlig körning","Omkörning"], correct:0},
  {chapter:"Motorväg", question:"Vad ska du göra vid påfart?", answers:["Anpassa fart och hitta lucka","Stanna alltid","Köra långsamt hela vägen"], correct:0},
  {chapter:"Motorväg", question:"Vad är avfartsfält?", answers:["Körfält för att lämna motorvägen","Parkeringsfält","Bussfil"], correct:0},
  {chapter:"Motorväg", question:"Vad ska du göra om du missar avfart?", answers:["Fortsätta till nästa avfart","Backa tillbaka","Vända direkt"], correct:0},
  {chapter:"Motorväg", question:"Vad är viktigt vid hög hastighet?", answers:["Stort säkerhetsavstånd","Kort avstånd","Plötslig bromsning"], correct:0},
  {chapter:"Motorväg", question:"Får långsamtgående fordon köra på motorväg?", answers:["Nej, normalt inte","Ja alltid","Bara traktorer"], correct:0},

  // OMKÖRNINGAR
  {chapter:"Omkörningar", question:"När får du köra om?", answers:["När det är säkert och god sikt","När du vill","I skymd kurva"], correct:0},
  {chapter:"Omkörningar", question:"Vad ska du göra före omkörning?", answers:["Kontrollera bakåt, framåt och döda vinkeln","Bara blinka","Bromsa hårt"], correct:0},
  {chapter:"Omkörningar", question:"Får du köra om vid backkrön?", answers:["Nej, om sikten är dålig","Ja alltid","Bara på vintern"], correct:0},
  {chapter:"Omkörningar", question:"Vad ska du göra efter omkörning?", answers:["Gå tillbaka till höger när det är säkert","Stanna vänster","Bromsa framför bilen"], correct:0},
  {chapter:"Omkörningar", question:"Får du överskrida hastighetsgränsen vid omkörning?", answers:["Nej","Ja alltid","Bara kort stund"], correct:0},
  {chapter:"Omkörningar", question:"Vad ska du göra om någon kör om dig?", answers:["Underlätta och inte öka farten","Öka farten","Köra i mitten"], correct:0},
  {chapter:"Omkörningar", question:"Får du köra om före övergångsställe?", answers:["Nej, normalt inte","Ja alltid","Bara med tuta"], correct:0},
  {chapter:"Omkörningar", question:"Vad är viktigt vid omkörning av cyklist?", answers:["God sidomarginal","Köra mycket nära","Tuta kraftigt"], correct:0},
  {chapter:"Omkörningar", question:"När är omkörning extra farlig?", answers:["Vid dålig sikt och mötande trafik","På rak tom väg","När vägen är bred"], correct:0},
  {chapter:"Omkörningar", question:"Varför ska du planera omkörning?", answers:["För att hinna göra den säkert","För att stressa andra","För att slippa blinkers"], correct:0},

  // JÄRNVÄGSKORSNINGAR
  {chapter:"Järnvägskorsningar", question:"Vad ska du göra vid järnvägskorsning?", answers:["Vara extra uppmärksam","Köra snabbt över","Stanna på spåret"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Får du köra när bommarna går ner?", answers:["Nej","Ja om du hinner","Bara om bilen är liten"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Vad betyder rött blinkande ljus vid järnväg?", answers:["Stanna","Kör försiktigt","Öka farten"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Får du stanna på spåret?", answers:["Nej, aldrig","Ja kort stund","Bara i kö"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Vad ska du göra om bilen fastnar på spåret?", answers:["Lämna bilen och varna andra","Sitta kvar","Vänta lugnt"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Får du köra om precis före järnvägskorsning?", answers:["Nej, normalt inte","Ja alltid","Bara cyklar"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Vad ska du kontrollera om det saknas bommar?", answers:["Titta och lyssna noga","Köra direkt","Bara titta höger"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Varför är järnvägskorsningar farliga?", answers:["Tåg har lång bromssträcka","Tåg stannar direkt","Bilar har alltid företräde"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Vad betyder kryssmärke?", answers:["Järnvägskorsning","Parkering","Motorväg börjar"], correct:0},
  {chapter:"Järnvägskorsningar", question:"Vad gör du om kön står stilla efter korsningen?", answers:["Vänta före spåret","Kör ut på spåret","Stanna på spåret"], correct:0},

  // SPECIELLA GATOR
  {chapter:"Speciella gator", question:"Vad gäller på gångfartsområde?", answers:["Köra i gångfart och lämna företräde åt gående","Köra 70 km/h","Gående ska flytta sig"], correct:0},
  {chapter:"Speciella gator", question:"Vad gäller på gågata?", answers:["Fordonstrafik är normalt förbjuden","Alla bilar får köra fort","Det är motorväg"], correct:0},
  {chapter:"Speciella gator", question:"Vad betyder enkelriktad väg?", answers:["Trafiken går bara åt ett håll","Alla kör åt båda håll","Bara bussar får köra"], correct:0},
  {chapter:"Speciella gator", question:"Vad är bussgata?", answers:["Gata främst för bussar","Gata för parkering","Gata för lastning"], correct:0},
  {chapter:"Speciella gator", question:"Vad ska du tänka på i bostadsområde?", answers:["Barn kan dyka upp plötsligt","Köra fort","Tuta ofta"], correct:0},
  {chapter:"Speciella gator", question:"Vad gäller på cykelgata?", answers:["Bilar ska anpassa sig efter cykeltrafiken","Bilar har alltid företräde","Cyklar är förbjudna"], correct:0},
  {chapter:"Speciella gator", question:"Vad ska du göra nära lekande barn?", answers:["Sänka farten och vara beredd","Öka farten","Köra nära kanten"], correct:0},
  {chapter:"Speciella gator", question:"Får du parkera fritt på gångfartsområde?", answers:["Nej, bara på anvisad plats","Ja överallt","Bara mitt i vägen"], correct:0},
  {chapter:"Speciella gator", question:"Vad betyder tätbebyggt område ofta för hastighet om skylt saknas?", answers:["50 km/h","90 km/h","110 km/h"], correct:0},
  {chapter:"Speciella gator", question:"Vad är viktigt på speciella gator?", answers:["Låg fart och extra hänsyn","Hög fart","Alltid omkörning"], correct:0},

  // VINTER
  {chapter:"Vinter", question:"Vad ska du göra vid halt väglag?", answers:["Hålla större avstånd och köra mjukt","Bromsa hårt","Öka farten"], correct:0},
  {chapter:"Vinter", question:"Varför blir bromssträckan längre på vintern?", answers:["Vägen kan vara hal","Bilen väger mindre","Motorn är kall"], correct:0},
  {chapter:"Vinter", question:"Vad är viktigt med vinterdäck?", answers:["De ger bättre grepp på vinterväglag","De gör bilen snabbare","De minskar bränsle till noll"], correct:0},
  {chapter:"Vinter", question:"Vad ska du göra före start på vintern?", answers:["Skrapa rutor och ta bort snö","Köra med snö på taket","Bara skrapa liten ruta"], correct:0},
  {chapter:"Vinter", question:"Vad är svartis?", answers:["Hal is som kan vara svår att se","Svart asfalt utan risk","Varm väg"], correct:0},
  {chapter:"Vinter", question:"Hur ska du bromsa på halt väglag?", answers:["Mjukt och i god tid","Plötsligt och hårt","Inte alls"], correct:0},
  {chapter:"Vinter", question:"Varför ska du hålla längre avstånd vintertid?", answers:["Du behöver längre tid att stanna","För att köra snabbare","För att slippa blinka"], correct:0},
  {chapter:"Vinter", question:"Vad ska du tänka på vid broar och viadukter?", answers:["De kan bli hala snabbare","De är alltid torra","De har alltid värme"], correct:0},
  {chapter:"Vinter", question:"Vad ska du göra om bilen får sladd?", answers:["Släppa gasen och styra lugnt","Bromsa hårt direkt","Blunda"], correct:0},
  {chapter:"Vinter", question:"Vad är bäst vid vinterkörning?", answers:["Planera, köra lugnt och ha god marginal","Stressa","Köra nära andra"], correct:0}
];

const extraWrongAnswers = [
  "Det gäller bara på natten",
  "Det gäller bara på motorväg",
  "Du får alltid köra först",
  "Du ska alltid stanna även vid grönt",
  "Det gäller bara bussar och lastbilar",
  "Du får bara göra det om vägen är tom",
  "Det är samma sak som parkering",
  "Det är förbjudet i alla situationer"
];

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let locked = false;

document.getElementById("startBtn").addEventListener("click", startQuiz);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeFourOptions(question) {
  const correctText = question.answers[question.correct];
  const options = [...question.answers];

  for (const wrong of shuffle([...extraWrongAnswers])) {
    if (options.length >= 4) break;
    if (!options.includes(wrong) && wrong !== correctText) {
      options.push(wrong);
    }
  }

  const mixed = options.slice(0, 4).map(text => ({
    text,
    isCorrect: text === correctText
  }));

  shuffle(mixed);

  return {
    chapter: question.chapter,
    question: question.question,
    answers: mixed.map(item => item.text),
    correct: mixed.findIndex(item => item.isCorrect)
  };
}

function startQuiz() {
  const selected = document.getElementById("chapterSelect").value;

  if (selected === "alla") {
    currentQuestions = questions.map(makeFourOptions);
  } else {
    currentQuestions = questions
      .filter(q => q.chapter === selected)
      .map(makeFourOptions);
  }

  shuffle(currentQuestions);
  currentIndex = 0;
  score = 0;
  locked = false;

  document.getElementById("result").innerHTML = "";
  showQuestion();
}

function showQuestion() {
  const quizBox = document.getElementById("quizBox");
  const progressText = document.getElementById("progressText");
  const scoreText = document.getElementById("scoreText");
  const progressFill = document.getElementById("progressFill");

  if (currentQuestions.length === 0) {
    quizBox.innerHTML = "";
    progressText.textContent = "";
    scoreText.textContent = "";
    progressFill.style.width = "0%";
    return;
  }

  if (currentIndex >= currentQuestions.length) {
    quizBox.innerHTML = "";
    progressText.textContent = "Klart";
    scoreText.textContent = score + " rätt";
    progressFill.style.width = "100%";

    const percent = Math.round((score / currentQuestions.length) * 100);
    document.getElementById("result").innerHTML =
      `Du fick ${score} av ${currentQuestions.length} rätt.<br>${percent}%`;
    return;
  }

  locked = false;
  const q = currentQuestions[currentIndex];
  const progress = Math.round((currentIndex / currentQuestions.length) * 100);

  progressText.textContent = `Fråga ${currentIndex + 1} av ${currentQuestions.length}`;
  scoreText.textContent = `${score} rätt`;
  progressFill.style.width = progress + "%";

  quizBox.innerHTML = `
    <p><b>Kapitel:</b> ${q.chapter}</p>
    <div class="question">${q.question}</div>
    ${q.answers.map((answer, index) =>
      `<div class="answer" onclick="checkAnswer(${index})">${String.fromCharCode(65 + index)}) ${answer}</div>`
    ).join("")}
  `;
}

function checkAnswer(index) {
  if (locked) return;
  locked = true;

  const q = currentQuestions[currentIndex];
  const answers = document.querySelectorAll(".answer");
  answers.forEach(answer => answer.classList.add("disabled"));

  if (index === q.correct) {
    answers[index].classList.add("correct");
    score++;
  } else {
    answers[index].classList.add("wrong");
    answers[q.correct].classList.add("correct");
  }

  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 900);
}
