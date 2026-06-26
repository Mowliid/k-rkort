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
  {chapter:"Vinter", question:"Vad är bäst vid vinterkörning?", answers:["Planera, köra lugnt och ha god marginal","Stressa","Köra nära andra"], correct:0},
// INLÄRNING & MOGNAD
{chapter:"Inlärning & mognad", question:"Vad är viktigt när du lär dig köra bil?", answers:["Att köra fort direkt","Att öva steg för steg","Att bara läsa skyltar","Att undvika stadstrafik"], correct:1},
{chapter:"Inlärning & mognad", question:"Vad betyder mognad i trafiken?", answers:["Att kunna ta ansvar och inte chansa","Att alltid köra långsamt","Att aldrig köra på landsväg","Att kunna alla bilmärken"], correct:0},
{chapter:"Inlärning & mognad", question:"Vad är bäst när du är ny förare?", answers:["Köra stressad","Ta stora risker","Öva mycket och köra lugnt","Köra utan plan"], correct:2},
{chapter:"Inlärning & mognad", question:"Vad kan stress leda till i trafiken?", answers:["Bättre reaktion","Säkrare körning","Mindre risk","Sämre beslut"], correct:3},
{chapter:"Inlärning & mognad", question:"Vad ska du göra om du känner dig osäker?", answers:["Köra ändå snabbt","Sänka farten och ta det lugnt","Tuta på andra","Byta körfält ofta"], correct:1},
{chapter:"Inlärning & mognad", question:"Vad är erfarenhet bra för?", answers:["Den hjälper dig upptäcka risker tidigare","Den gör att regler inte gäller","Den gör bilen snabbare","Den tar bort alla risker"], correct:0},
{chapter:"Inlärning & mognad", question:"Vad ska en mogen förare göra?", answers:["Visa hänsyn","Köra nära andra","Chansa vid korsning","Ignorera cyklister"], correct:0},
{chapter:"Inlärning & mognad", question:"Vad är farligt med övertro?", answers:["Man tror att man klarar mer än man gör","Man kör långsammare","Man bromsar tidigare","Man visar mer hänsyn"], correct:0},
{chapter:"Inlärning & mognad", question:"Hur lär man sig bäst trafiksäkerhet?", answers:["Genom att bara gissa","Genom teori och praktisk övning","Genom att köra utan handledare","Genom att ignorera misstag"], correct:1},
{chapter:"Inlärning & mognad", question:"Vad ska du göra efter ett misstag i trafiken?", answers:["Skylla på andra","Lära dig av det","Köra snabbare","Strunta i det"], correct:1},

// ALKOHOL
{chapter:"Alkohol", question:"Hur påverkar alkohol körningen?", answers:["Du kör säkrare","Reaktionen blir bättre","Omdöme och reaktion försämras","Synen blir bättre"], correct:2},
{chapter:"Alkohol", question:"Vad är rattfylleri?", answers:["Att köra med alkohol över laglig gräns","Att köra trött","Att köra sakta","Att köra med vinterdäck"], correct:0},
{chapter:"Alkohol", question:"Vad ska du göra om du druckit alkohol?", answers:["Köra sakta hem","Vänta och inte köra","Köra bara kort sträcka","Köra med varningsblinkers"], correct:1},
{chapter:"Alkohol", question:"Kan små mängder alkohol påverka körningen?", answers:["Nej aldrig","Bara på motorväg","Ja","Bara på vintern"], correct:2},
{chapter:"Alkohol", question:"Vad påverkas ofta först av alkohol?", answers:["Bilmotorn","Omdömet","Däcktrycket","Blinkers"], correct:1},
{chapter:"Alkohol", question:"Vad är bäst dagen efter fest?", answers:["Köra direkt på morgonen","Köra om du känner dig pigg","Tänka på att alkohol kan finnas kvar","Dricka kaffe och köra direkt"], correct:2},
{chapter:"Alkohol", question:"Vad kan alkohol ge för effekt?", answers:["Sämre uppmärksamhet","Kortare bromssträcka","Bättre mörkerseende","Snabbare reaktion"], correct:0},
{chapter:"Alkohol", question:"Vad ska du göra om en vän vill köra berusad?", answers:["Låta personen köra","Stoppa personen från att köra","Åka med ändå","Säga att köra långsamt"], correct:1},
{chapter:"Alkohol", question:"Varför är alkohol farligt i trafiken?", answers:["Det gör bilen tyngre","Det minskar risker","Det försämrar kontroll och beslut","Det förbättrar koncentration"], correct:2},
{chapter:"Alkohol", question:"Vad gäller vid droger och bilkörning?", answers:["Det är okej ibland","Det är farligt och olagligt","Det påverkar inte","Det gäller bara lastbil"], correct:1},

// TRÖTTHET
{chapter:"Trötthet", question:"Hur påverkar trötthet körningen?", answers:["Du reagerar långsammare","Du ser bättre","Du kör säkrare","Du bromsar snabbare"], correct:0},
{chapter:"Trötthet", question:"Vad ska du göra om du blir mycket trött?", answers:["Öka farten","Stanna och vila","Öppna bara fönstret","Köra vidare"], correct:1},
{chapter:"Trötthet", question:"Vad är mikrosömn?", answers:["Att blinka normalt","Att somna till mycket kort","Att vila bilen","Att bromsa mjukt"], correct:1},
{chapter:"Trötthet", question:"När är risken för trötthet ofta stor?", answers:["Efter god sömn","På natten och tidig morgon","När bilen är ny","Vid låg hastighet bara"], correct:1},
{chapter:"Trötthet", question:"Vad är bästa lösningen mot trötthet?", answers:["Hög musik","Kaffe bara","Sömn och vila","Köra snabbare"], correct:2},
{chapter:"Trötthet", question:"Vad kan vara tecken på trötthet?", answers:["Du gäspar och tappar koncentration","Du ser bättre","Du blir lugnare alltid","Du får kortare reaktionstid"], correct:0},
{chapter:"Trötthet", question:"Är trötthet farligt som alkohol?", answers:["Nej aldrig","Ja, det kan vara mycket farligt","Bara i stad","Bara på sommaren"], correct:1},
{chapter:"Trötthet", question:"Vad ska du göra vid lång körning?", answers:["Planera pauser","Köra utan stopp","Äta mycket och köra vidare","Undvika rastplats"], correct:0},
{chapter:"Trötthet", question:"Vad kan monotona vägar leda till?", answers:["Mindre risk","Mer vakenhet","Trötthet och sämre uppmärksamhet","Bättre syn"], correct:2},
{chapter:"Trötthet", question:"Vad ska du inte lita på när du är trött?", answers:["Att du alltid orkar lite till","Att vila hjälper","Att sömn behövs","Att pauser är bra"], correct:0},

// SYNEN
{chapter:"Synen", question:"Varför är synen viktig i trafiken?", answers:["Du får bättre ljud","Du upptäcker risker i tid","Bilen går snabbare","Du sparar bränsle"], correct:1},
{chapter:"Synen", question:"Vad händer med synfältet vid hög hastighet?", answers:["Det blir bredare","Det blir smalare","Det försvinner helt","Det påverkas inte"], correct:1},
{chapter:"Synen", question:"Vad är tunnelseende?", answers:["Att synfältet blir smalare","Att se genom tunnel","Att se bättre åt sidan","Att blunda kort"], correct:0},
{chapter:"Synen", question:"Vad ska du göra i mörker?", answers:["Köra fortare","Anpassa hastigheten efter sikten","Titta bara rakt fram","Köra nära bilen framför"], correct:1},
{chapter:"Synen", question:"Vad kan bländning göra?", answers:["Förbättra reaktion","Göra att du ser sämre en stund","Göra vägen bredare","Minska stoppsträcka"], correct:1},
{chapter:"Synen", question:"Vad ska du göra vid möte i mörker?", answers:["Titta rakt in i ljuset","Titta mer mot vägkanten","Släcka alla lampor","Öka farten"], correct:1},
{chapter:"Synen", question:"Vad är viktigt med backspeglar?", answers:["De används bara vid parkering","De hjälper dig hålla koll bakåt","De ersätter döda vinkeln helt","De behövs inte"], correct:1},
{chapter:"Synen", question:"Vad är döda vinkeln?", answers:["Område du inte ser i speglarna","En mörk väg","En trasig backspegel","En parkeringsplats"], correct:0},
{chapter:"Synen", question:"Vad ska du göra innan körfältsbyte?", answers:["Bara blinka","Kontrollera speglar och döda vinkeln","Köra direkt","Titta bara framåt"], correct:1},
{chapter:"Synen", question:"Vad påverkar mörkerseendet negativt?", answers:["Rena rutor","Bländning och smutsiga rutor","Låg hastighet","Bra belysning"], correct:1},

// NEDSATT FÖRMÅGA
{chapter:"Nedsatt förmåga", question:"Vad kan ge nedsatt körförmåga?", answers:["Trötthet, sjukdom, alkohol eller medicin","Bra sömn","Lugn körning","Rena rutor"], correct:0},
{chapter:"Nedsatt förmåga", question:"Vad ska du göra om medicin gör dig dåsig?", answers:["Köra ändå","Inte köra om du påverkas","Köra bara fort","Köra utan bälte"], correct:1},
{chapter:"Nedsatt förmåga", question:"Kan sjukdom påverka körningen?", answers:["Nej aldrig","Ja","Bara vid feber över 40","Bara på motorväg"], correct:1},
{chapter:"Nedsatt förmåga", question:"Vad ska du göra om du känner dig yr?", answers:["Stanna säkert och kör inte vidare","Öka farten","Köra hem snabbt","Ignorera det"], correct:0},
{chapter:"Nedsatt förmåga", question:"Vad är farligt med starka känslor i trafiken?", answers:["De kan försämra omdömet","De förbättrar synen","De gör bilen snabbare","De minskar risker"], correct:0},
{chapter:"Nedsatt förmåga", question:"Vad ska du göra om du är arg eller stressad?", answers:["Köra aggressivt","Ta det lugnt eller vänta med att köra","Tuta mycket","Köra nära andra"], correct:1},
{chapter:"Nedsatt förmåga", question:"Vad kan mobiltelefon göra?", answers:["Öka uppmärksamhet","Minska koncentrationen","Förbättra reaktion","Minska risk"], correct:1},
{chapter:"Nedsatt förmåga", question:"Vad är bäst om du inte är körduglig?", answers:["Låta bli att köra","Köra långsamt ändå","Köra med varningsblinkers","Köra bara i stan"], correct:0},
{chapter:"Nedsatt förmåga", question:"Vad kan läkemedel påverka?", answers:["Bara bilens motor","Reaktion, uppmärksamhet och omdöme","Däckens färg","Vägskyltarna"], correct:1},
{chapter:"Nedsatt förmåga", question:"Vem ansvarar för att du är lämplig att köra?", answers:["Du själv","Passageraren","Bilen","Vägverket varje minut"], correct:0},

// BARN
{chapter:"Barn", question:"Varför ska du vara extra försiktig nära barn?", answers:["Barn kan vara impulsiva","Barn kör alltid bil","Barn ser alltid dig","Barn följer alltid regler"], correct:0},
{chapter:"Barn", question:"Vad ska du göra vid skolor?", answers:["Sänka hastigheten och vara beredd","Öka farten","Köra nära trottoaren","Tuta hela tiden"], correct:0},
{chapter:"Barn", question:"Hur bedömer barn trafik?", answers:["Alltid perfekt","Sämre än vuxna","Bättre än förare","De ser allt"], correct:1},
{chapter:"Barn", question:"Vad ska du göra om en boll rullar ut på vägen?", answers:["Vara beredd på att barn kan springa efter","Köra över den snabbt","Tuta och öka farten","Ignorera"], correct:0},
{chapter:"Barn", question:"Vad är viktigt vid övergångsställe nära barn?", answers:["Köra snabbt","Vara extra uppmärksam","Stanna mitt på övergångsstället","Köra om"], correct:1},
{chapter:"Barn", question:"Varför är barn svåra att se?", answers:["De är ofta korta och kan döljas bakom bilar","De lyser i mörker","De står alltid still","De går bara på trottoar"], correct:0},
{chapter:"Barn", question:"Vad gäller vid skolpatrull?", answers:["Visa särskild hänsyn","Köra förbi snabbt","Tuta","Ignorera dem"], correct:0},
{chapter:"Barn", question:"Vad ska du tänka på vid buss med barn?", answers:["Barn kan springa framför eller bakom bussen","Bussen kör alltid först","Barn syns alltid","Du ska alltid köra om"], correct:0},
{chapter:"Barn", question:"Vad är en säker körstil nära lekplats?", answers:["Låg fart och beredskap","Hög fart","Köra nära parkerade bilar","Omkörning"], correct:0},
{chapter:"Barn", question:"Vad är bäst när du ser barn vid vägkanten?", answers:["Sänka farten och öka uppmärksamheten","Köra nära dem","Blinka med helljus","Öka farten"], correct:0},

// TRAFIKOLYCKOR
{chapter:"Trafikolyckor", question:"Vad ska du göra först vid en trafikolycka?", answers:["Säkra platsen och varna andra","Ta bilder först","Köra därifrån","Flytta alla bilar direkt"], correct:0},
{chapter:"Trafikolyckor", question:"Vilket nummer ringer du vid allvarlig olycka?", answers:["112","114 14","1177","911"], correct:0},
{chapter:"Trafikolyckor", question:"Vad betyder LABC?", answers:["Livsfarligt läge, Andning, Blödning, Chock","Ljus, ABS, Broms, Cykel","Last, Alkohol, Bil, Cirkulation","Larm, Avgift, Bälte, Kontroll"], correct:0},
{chapter:"Trafikolyckor", question:"Vad ska du göra om någon blöder kraftigt?", answers:["Stoppa blödningen","Ge personen mat","Lämna platsen","Flytta personen långt"], correct:0},
{chapter:"Trafikolyckor", question:"Vad ska du göra vid livsfarligt läge?", answers:["Flytta personen till säker plats om det behövs","Alltid låta personen ligga kvar","Ta bort bilnyckeln bara","Vänta utan att agera"], correct:0},
{chapter:"Trafikolyckor", question:"Varför ska du varna andra trafikanter?", answers:["För att undvika fler olyckor","För att stoppa all trafik för alltid","För att samla folk","För att hinna filma"], correct:0},
{chapter:"Trafikolyckor", question:"Vad kan du använda för att varna?", answers:["Varningstriangel och varningsblinkers","Helljus hela tiden","Signalhorn i 10 minuter","Parkeringsljus bara"], correct:0},
{chapter:"Trafikolyckor", question:"Vad ska du göra om någon inte andas normalt?", answers:["Larma 112 och starta HLR om du kan","Ge personen vatten","Sätta personen i bilen","Vänta tills någon annan kommer"], correct:0},
{chapter:"Trafikolyckor", question:"Får du lämna en olycksplats där du är inblandad?", answers:["Nej, du måste stanna och hjälpa till","Ja alltid","Bara om du har bråttom","Ja om bilen fungerar"], correct:0},
{chapter:"Trafikolyckor", question:"Vad är viktigt efter mindre krock utan personskada?", answers:["Byta uppgifter med den andra föraren","Köra därifrån direkt","Skylla på andra","Ta bort registreringsskylt"], correct:0}
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
