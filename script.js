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
  {chapter:"Trafikolyckor", question:"Vad är viktigt efter mindre krock utan personskada?", answers:["Byta uppgifter med den andra föraren","Köra därifrån direkt","Skylla på andra","Ta bort registreringsskylt"], correct:0},
  // INDELNING AV FORDON
  {chapter:"Indelning av fordon", question:"Vad räknas som personbil klass I?", answers:["Vanlig personbil","Moped klass II","Traktor","Släpvagn"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är en moped klass I?", answers:["En EU-moped som får köras i högst 45 km/h","En cykel utan motor","En lätt lastbil","En bil med släp"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är en lätt lastbil?", answers:["Lastbil med totalvikt högst 3,5 ton","Lastbil över 12 ton","Personbil utan säten","Motorcykel med släp"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är en buss?", answers:["Fordon för fler än 8 passagerare utöver föraren","Fordon med två hjul","Fordon utan motor","Fordon med bara lastutrymme"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är släpvagn?", answers:["Fordon som kopplas efter annat fordon","Fordon med egen motor","En typ av motorcykel","En vägren"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är motorcykel?", answers:["Motorfordon med två hjul eller tre hjul","Fyrhjulig personbil","Tung lastbil","Buss"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är cykel?", answers:["Fordon som drivs med trampor eller elassistans","Fordon som alltid kräver B-körkort","Fordon över 3,5 ton","Fordon med dieselmotor"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad är traktor ofta byggd för?", answers:["Att dra andra fordon eller arbetsredskap","Att köra snabbt på motorväg","Att transportera passagerare i stad","Att vara taxibil"], correct:0},
  {chapter:"Indelning av fordon", question:"Vilket fordon kräver normalt B-körkort?", answers:["Personbil","Cykel","Moped klass II","Sparkcykel utan motor"], correct:0},
  {chapter:"Indelning av fordon", question:"Vad betyder totalvikt?", answers:["Fordonets tjänstevikt plus maxlast","Bara förarens vikt","Bara bilens bränsle","Bara släpets vikt"], correct:0},

  // STRÄCKOR
  {chapter:"Sträckor", question:"Vad är reaktionssträcka?", answers:["Sträckan bilen hinner rulla innan du börjar bromsa","Sträckan efter att bilen stannat","Sträckan mellan två vägmärken","Sträckan vid parkering"], correct:0},
  {chapter:"Sträckor", question:"Vad är bromssträcka?", answers:["Sträckan från att du börjar bromsa tills bilen står still","Sträckan innan du ser faran","Sträckan när du blinkar","Sträckan på vägrenen"], correct:0},
  {chapter:"Sträckor", question:"Vad är stoppsträcka?", answers:["Reaktionssträcka plus bromssträcka","Bara bromssträcka","Bara reaktionstid","Bara avstånd till bilen bakom"], correct:0},
  {chapter:"Sträckor", question:"Vad händer med bromssträckan om hastigheten fördubblas?", answers:["Den blir ungefär fyra gånger längre","Den blir hälften så lång","Den blir oförändrad","Den försvinner"], correct:0},
  {chapter:"Sträckor", question:"Vad påverkar reaktionssträckan?", answers:["Din reaktionstid och hastighet","Däckens färg","Bilens radio","Registreringsnumret"], correct:0},
  {chapter:"Sträckor", question:"Vad gör trötthet med reaktionstiden?", answers:["Den blir längre","Den blir kortare","Den försvinner","Den påverkar bara blinkers"], correct:0},
  {chapter:"Sträckor", question:"Vad gör halt väglag med bromssträckan?", answers:["Den blir längre","Den blir alltid kortare","Den påverkas inte","Den blir exakt 1 meter"], correct:0},
  {chapter:"Sträckor", question:"Vad är viktigt för kortare stoppsträcka?", answers:["Bra däck, rätt hastighet och uppmärksamhet","Hög musik","Full last","Smutsiga rutor"], correct:0},
  {chapter:"Sträckor", question:"Varför ska du hålla avstånd?", answers:["För att hinna reagera och bromsa","För att bilen bakom ska köra snabbare","För att slippa använda speglar","För att kunna parkera"], correct:0},
  {chapter:"Sträckor", question:"Vad ska du göra om sikten är dålig?", answers:["Sänka hastigheten","Öka hastigheten","Köra närmare bilen framför","Tuta hela tiden"], correct:0},

  // DÄCK
  {chapter:"Däck", question:"Vad är viktigt med däcken?", answers:["Bra mönsterdjup och rätt lufttryck","Att de har samma färg","Att de är gamla","Att de är smutsiga"], correct:0},
  {chapter:"Däck", question:"Vad kan fel lufttryck leda till?", answers:["Sämre väggrepp och högre slitage","Bättre bromsar","Lägre olycksrisk","Bättre syn"], correct:0},
  {chapter:"Däck", question:"Vad är vattenplaning?", answers:["När däcken tappar kontakt med vägen på vatten","När bilen tvättas","När bromsarna blir torra","När däcken blir varma"], correct:0},
  {chapter:"Däck", question:"Vad minskar risken för vattenplaning?", answers:["Bra mönsterdjup och lägre hastighet","Högre hastighet","Slitna däck","Fel lufttryck"], correct:0},
  {chapter:"Däck", question:"När behövs vinterdäck?", answers:["Vid vinterväglag under vinterperioden","Bara på sommaren","Bara vid regn i juli","Aldrig"], correct:0},
  {chapter:"Däck", question:"Vad är dubbdäck bra för?", answers:["Bättre grepp på is","Bättre radio","Kortare reaktionstid","Mer last"], correct:0},
  {chapter:"Däck", question:"Vad händer med slitna däck?", answers:["Sämre grepp och längre bromssträcka","Bilen blir lättare","Du ser bättre","Motorn blir starkare"], correct:0},
  {chapter:"Däck", question:"Varför ska däcken kontrolleras regelbundet?", answers:["För säkerhet och ekonomi","För att bilen ska låta mer","För att slippa bromsa","För att blinkers ska fungera"], correct:0},
  {chapter:"Däck", question:"Vad kan obalans i hjulen ge?", answers:["Vibrationer i bilen","Bättre styrning","Kortare stoppsträcka","Lägre hastighet automatiskt"], correct:0},
  {chapter:"Däck", question:"Vad ska du tänka på med reservhjul?", answers:["Att det är rätt monterat och har luft","Att det alltid är större","Att det aldrig används","Att det är utan mönster"], correct:0},

  // STYRNING
  {chapter:"Styrning", question:"Vad är viktigt med styrningen?", answers:["Att bilen svarar rätt när du styr","Att ratten är varm","Att bilen låter högt","Att däcken är smutsiga"], correct:0},
  {chapter:"Styrning", question:"Vad kan glapp i styrningen leda till?", answers:["Sämre kontroll över bilen","Bättre bromsning","Lägre bränsleförbrukning","Bättre belysning"], correct:0},
  {chapter:"Styrning", question:"Vad ska du göra om bilen drar åt sidan?", answers:["Kontrollera däck, hjulinställning eller verkstad","Köra snabbare","Ignorera det","Stänga av lamporna"], correct:0},
  {chapter:"Styrning", question:"Vad påverkar styrningen mycket?", answers:["Däckens skick och väglag","Bilens färg","Antal passagerare endast","Radio"], correct:0},
  {chapter:"Styrning", question:"Hur ska du styra vid halt väglag?", answers:["Mjukt och lugnt","Hårt och snabbt","Ryckigt","Med en hand och hög fart"], correct:0},
  {chapter:"Styrning", question:"Vad ska du undvika vid hög hastighet?", answers:["Plötsliga rattrörelser","Att titta framåt","Att hålla avstånd","Att bromsa mjukt"], correct:0},
  {chapter:"Styrning", question:"Vad kan fel hjulinställning orsaka?", answers:["Ojämnt däckslitage","Bättre sikt","Mindre bränsle alltid","Kortare bil"], correct:0},
  {chapter:"Styrning", question:"Vad hjälper servostyrning med?", answers:["Gör det lättare att vrida ratten","Gör bilen snabbare","Bromsar bilen","Tänder helljus"], correct:0},
  {chapter:"Styrning", question:"Vad ska du göra om styrningen känns konstig?", answers:["Stanna säkert och kontrollera bilen","Köra vidare snabbt","Öka hastigheten","Ignorera"], correct:0},
  {chapter:"Styrning", question:"Varför är styrningen viktig?", answers:["För att kunna kontrollera bilens riktning","För att spela musik","För att höja värmen","För att låsa bilen"], correct:0},

  // BROMSAR
  {chapter:"Bromsar", question:"Vad är färdbroms?", answers:["Vanliga bromsen som används vid körning","Parkeringsljus","Blinkers","Rattlås"], correct:0},
  {chapter:"Bromsar", question:"Vad är parkeringsbroms?", answers:["Broms som håller bilen stilla vid parkering","Broms bara för motorväg","En typ av däck","En strålkastare"], correct:0},
  {chapter:"Bromsar", question:"Vad gör ABS-bromsar?", answers:["Hjälper dig styra vid hård bromsning","Gör bilen snabbare","Tar bort bromssträckan helt","Stänger av motorn"], correct:0},
  {chapter:"Bromsar", question:"Vad ska du göra om bromsarna känns svaga?", answers:["Kontrollera bilen och kör inte vidare i onödan","Köra snabbare","Ignorera det","Bromsa ännu hårdare hela tiden"], correct:0},
  {chapter:"Bromsar", question:"Vad kan våta bromsar ge?", answers:["Sämre bromsverkan tillfälligt","Bättre acceleration","Kortare reaktionstid","Bättre helljus"], correct:0},
  {chapter:"Bromsar", question:"Vad kan ojämn bromsverkan orsaka?", answers:["Bilen kan dra åt sidan","Bilen blir tystare","Däcken blir större","Blinkers slutar behövas"], correct:0},
  {chapter:"Bromsar", question:"Vad ska du göra i nedförsbacke?", answers:["Använda låg växel och bromsa kontrollerat","Rulla i friläge","Stänga av motorn","Bara använda tutan"], correct:0},
  {chapter:"Bromsar", question:"Vad är viktigt vid bromsning på halt väglag?", answers:["Bromsa mjukt och i god tid","Bromsa sent och hårt","Köra närmare bilen framför","Stänga av ABS"], correct:0},
  {chapter:"Bromsar", question:"Vad varnar bromsvarningslampan för?", answers:["Fel i bromssystemet eller låg bromsvätska","Att radion är på","Att däcken är nya","Att bilen är tvättad"], correct:0},
  {chapter:"Bromsar", question:"Varför ska bromsarna testas ibland?", answers:["För att veta att de fungerar säkert","För att spara blinkers","För att minska synfältet","För att bilen ska låta mer"], correct:0},
   // KROCKSÄKERHET
  {chapter:"Krocksäkerhet", question:"Vad är bilens deformationszon till för?", answers:["Att ta upp krockkraften","Att göra bilen snabbare","Att minska bränsleförbrukningen","Att öka motoreffekten"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vad gör säkerhetsbältet?", answers:["Håller kvar dig vid en krock","Ökar bilens hastighet","Stänger av motorn","Tänder airbags"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vad gör en airbag?", answers:["Minskar risken för skador vid kollision","Ökar bromssträckan","Gör bilen lättare","Förbättrar styrningen"], correct:0},
  {chapter:"Krocksäkerhet", question:"Varför ska bälte alltid användas även med airbag?", answers:["Airbag ersätter inte säkerhetsbältet","Airbag fungerar bara utan bälte","Bälte behövs bara i stad","Bälte är bara för passagerare"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vad är nackskyddets uppgift?", answers:["Minska risken för pisksnärtsskada","Skydda benen","Skydda däcken","Minska buller"], correct:0},
  {chapter:"Krocksäkerhet", question:"Hur ska nackskyddet vara inställt?", answers:["I höjd med bakhuvudet","Under axlarna","Över taket","Spelar ingen roll"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vad ökar risken för skador vid krock?", answers:["Hög hastighet","Låg hastighet","Bra däck","Säkerhetsbälte"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vilken typ av säkerhet är ABS?", answers:["Aktiv säkerhet","Passiv säkerhet","Personlig säkerhet","Miljösäkerhet"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vilken typ av säkerhet är säkerhetsbälte?", answers:["Passiv säkerhet","Aktiv säkerhet","Elektrisk säkerhet","Miljösäkerhet"], correct:0},
  {chapter:"Krocksäkerhet", question:"Vad är viktigast för att undvika olyckor?", answers:["Anpassad hastighet och uppmärksamhet","Kraftigare motor","Större fälgar","Hög musik"], correct:0},

  // BILBARNSTOLAR
  {chapter:"Bilbarnstolar", question:"Hur ska små barn färdas i bilen?", answers:["I godkänd bilbarnstol","I framsätet utan stol","I knät på vuxen","Stående"], correct:0},
  {chapter:"Bilbarnstolar", question:"Varför rekommenderas bakåtvänd bilbarnstol?", answers:["Den skyddar barnets nacke bättre","Den är billigare","Den tar mindre plats","Den gör bilen snabbare"], correct:0},
  {chapter:"Bilbarnstolar", question:"När får barn använda bilens bälte utan bilkudde?", answers:["När bältet sitter rätt över kroppen","När de fyllt 10 år","När de vill","Alltid"], correct:0},
  {chapter:"Bilbarnstolar", question:"Var är säkrast för barn att sitta?", answers:["I baksätet","På förarplatsen","I bagageutrymmet","På mittkonsolen"], correct:0},
  {chapter:"Bilbarnstolar", question:"Vad ska göras om airbag finns framför bakåtvänd stol?", answers:["Airbagen ska vara avstängd","Airbagen ska vara på","Barnet ska stå upp","Ingenting"], correct:0},
  {chapter:"Bilbarnstolar", question:"Varför ska bilbarnstolen monteras rätt?", answers:["För att ge bästa skydd","För att bilen ska gå snabbare","För att minska bränsleförbrukningen","För att radion ska fungera"], correct:0},
  {chapter:"Bilbarnstolar", question:"Vad gäller för bilbarnstolar?", answers:["De ska vara godkända","De får vara trasiga","Alla stolar fungerar","De behöver inte spännas fast"], correct:0},
  {chapter:"Bilbarnstolar", question:"Hur ska bältet sitta på barnet?", answers:["Sträckt och nära kroppen","Löst","Bakom ryggen","Under armen"], correct:0},
  {chapter:"Bilbarnstolar", question:"Vad är farligt med tjock vinterjacka under bältet?", answers:["Bältet skyddar sämre","Barnet fryser","Bilen blir tyngre","Bromsarna slits"], correct:0},
  {chapter:"Bilbarnstolar", question:"Vad är viktigast när barn åker bil?", answers:["Att de är rätt fastspända","Att de sitter längst fram","Att de håller i sig","Att de sitter högt"], correct:0},

  // LÄNGD & BREDD
  {chapter:"Längd & bredd", question:"Varför är det viktigt att känna till bilens mått?", answers:["För att kunna bedöma utrymme","För att bilen ska bli snabbare","För att minska bränsle","För att höja motorn"], correct:0},
  {chapter:"Längd & bredd", question:"Vad ska du tänka på vid smala passager?", answers:["Bilens bredd och säkerhetsmarginal","Bilens färg","Musiken","Bränslet"], correct:0},
  {chapter:"Längd & bredd", question:"Vad påverkar bilens längd?", answers:["Hur mycket plats den behöver","Bromsarna","Motorns ljud","Lufttrycket"], correct:0},
  {chapter:"Längd & bredd", question:"När är bilens bredd extra viktig?", answers:["Vid möte och parkering","På motorväg","Vid tankning","Vid tvätt"], correct:0},
  {chapter:"Längd & bredd", question:"Vad ska du göra om det är trångt?", answers:["Köra långsamt","Öka farten","Blunda","Tuta hela tiden"], correct:0},
  {chapter:"Längd & bredd", question:"Vad är viktigt vid garage?", answers:["Kontrollera höjd och bredd","Öka hastigheten","Stäng av lampor","Köra mitt i"], correct:0},
  {chapter:"Längd & bredd", question:"Vad kan hända om bilen är för bred?", answers:["Den kan ta i hinder","Den blir snabbare","Den drar mindre bränsle","Ingenting"], correct:0},
  {chapter:"Längd & bredd", question:"Vad hjälper speglarna dig med?", answers:["Att bedöma avstånd","Att bromsa","Att styra","Att tanka"], correct:0},
  {chapter:"Längd & bredd", question:"När behöver du extra marginal?", answers:["Vid möte med stora fordon","På tom parkering","När bilen står still","Vid tvätt"], correct:0},
  {chapter:"Längd & bredd", question:"Vad är viktigast?", answers:["Att inte underskatta bilens storlek","Att köra fort","Att tuta","Att köra nära andra"], correct:0},

  // LAST
  {chapter:"Last", question:"Vad är maxlast?", answers:["Hur mycket bilen får lastas","Bilens tjänstevikt","Bilens totalvikt","Släpets vikt"], correct:0},
  {chapter:"Last", question:"Vad är tjänstevikt?", answers:["Bilens vikt körklar utan passagerare och last","Bilens totalvikt","Släpets vikt","Endast motorns vikt"], correct:0},
  {chapter:"Last", question:"Vad är totalvikt?", answers:["Tjänstevikt plus maxlast","Bilens längd","Bilens bredd","Endast lasten"], correct:0},
  {chapter:"Last", question:"Hur ska lasten placeras?", answers:["Lågt och säkert fastspänd","Högt och löst","Bara bak","På taket alltid"], correct:0},
  {chapter:"Last", question:"Vad kan lös last orsaka?", answers:["Allvarliga skador vid krock","Bättre balans","Kortare bromssträcka","Lägre bränsleförbrukning"], correct:0},
  {chapter:"Last", question:"Vad händer om bilen överlastas?", answers:["Sämre köregenskaper","Bättre bromsar","Kortare stoppsträcka","Högre komfort"], correct:0},
  {chapter:"Last", question:"Vad påverkas mest av tung last?", answers:["Bromssträckan","Signalhornet","Vindrutetorkarna","Radion"], correct:0},
  {chapter:"Last", question:"Hur ska taklast säkras?", answers:["Ordentligt fastspänd","Löst","Behöver inte säkras","Med tejp"], correct:0},
  {chapter:"Last", question:"Vad ska du kontrollera före körning med släp?", answers:["Att kopplingen är låst","Att radion fungerar","Att bilen är tvättad","Att lamporna är av"], correct:0},
  {chapter:"Last", question:"Vad är viktigast med last?", answers:["Att den är säkert fastsatt","Att den är tung","Att den är hög","Att den är längst bak"], correct:0},
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
