const PROVS = [
  {
    "id": 1,
    "title": "Svenska Prov 1",
    "questions": [
      {
        "text": "Du har kommet till den här situationen.\n\nvilket fordon har du väjningsplikt\nmot?",
        "options": [
          "Enbart fordon från höger",
          "Fordon från vänster och höger,\nmen inte mötande",
          "Enbart mötande fordon",
          "Fordon från vänster och höger,\nsamt mötande"
        ],
        "images": [
          "assets/prov1/1_1.jpg",
          "assets/prov1/100px-1_1_23.svg.png"
        ],
        "correct": 3
      },
      {
        "text": "Du kör en personbil och har kommet till dena situationen.\n\nFår du passera en av de vägmärkena?",
        "options": [
          "Ja, men enbart vägmärke A",
          "Ja, men enbart vägmärke B",
          "Ja, båda",
          "Nej"
        ],
        "images": [
          "assets/prov1/100px-1_2_7.svg.png",
          "assets/prov1/11_411.png"
        ],
        "correct": 2
      },
      {
        "text": "Du parkera öfta din bil där\nvägmärket och tilläggstavlorna gäller (se A)\n\nvilken av följande tider får du\nparkera där utan att betala avgift\n(se B)?",
        "options": [
          "2 mars kl.08.00",
          "10 mars kl. 10.00",
          "19 mars.kl 14.00",
          "24 mars kl.16.00"
        ],
        "images": [
          "assets/prov1/2.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Hur ska du uppträde när du köra om?",
        "options": [
          "Jag ska alltid köra om till höger",
          "Jag får köra om antingen till\nvänster eller till höger beroende\npå situationen",
          "Jag ska alltid köra om till vänster"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "När ska du använda horn?",
        "options": [
          "När bilen framför inte kör trots\natt trafiksignalen visar grönt ljus",
          "När jag ska köra om två cyklister\nsom kör i bredd på en smal väg",
          "När bilen framför kör så\nlångsamt att jag blir hindrad",
          "När jag ska köra om någon som\nrider på vägen"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du har jobbat hela natten och du ska kör tillbaka hemma.\n\nVilken del av resan finns stor risk att somna när du kör ?",
        "options": [
          "När jag är nästan hemma",
          "Vid början av resa",
          "Vid halv av resa"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Tänk dig att situationerna på\nbilderna inträffs när du kör i\nmörker\n\nI vilken situation är det\natt fortsätta med helljus?",
        "options": [
          "I fall A",
          "I fall B",
          "I fall C",
          "I fall D"
        ],
        "images": [
          "assets/prov1/4.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vilket efterräkning har koldioxid?",
        "options": [
          "Medeltemperaturen höjs",
          "Mangnetfälten stärks",
          "Medeltemperaturen sänks",
          "Mangnetfälten försvagas"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska svänga höger. Vilken dold fara måste du vara beredd på i den här situation?",
        "options": [
          "Gående som är på\növergångstället framför mig.",
          "Cyklister som kommer bakifrån\npå cykelbanan",
          "Mötande fordon som ska svänga\nvänster i korsningen",
          "Cyklister som kommer framifrån\npå cykelbanan."
        ],
        "images": [
          "assets/prov1/6.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vad innebär detta vägmärke?",
        "options": [
          "Gatan till höger är endast\navsedd för spårvägstrafik",
          "Endast spårvagnar får svänga till\nhöger i korsningen",
          "Om jag svänger till höger\nkommer jag att korsa en\nspårväg               bommar",
          "Om jag svänger till höger\nkommer jag att korsa en\nspårväg                bommar"
        ],
        "images": [
          "assets/prov1/1_1_33.png",
          "assets/prov1/11_18_1.png"
        ],
        "correct": 2
      },
      {
        "text": "Du möter en bil som kör på fel sida\nav vägen.\n\nHur bör du göra?",
        "options": [
          "Bromsa och styra åt höger",
          "Snabbt styra över åt vänster"
        ],
        "images": [
          "assets/prov1/11.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad gäller när du kör i cirkulationsplatsen?",
        "options": [
          "Fordonen i cirkulationsplatsen\nhar väjningsplikt mot mig",
          "Jag måste alltid stanna innan jag\nkör in i cirkulationsplatsen",
          "Jag har väjningsplikt mot\nfordonen i cirkulationsplatsen"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "När ska du använda dubbdäck?",
        "options": [
          "1 oktober - 31 mars",
          "1 oktober - 30 april",
          "1 november - 31 mars",
          "1 november - 30 april"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du blivet stopp under nätt tid på grund av hjulens bytt\n\nVilket belysning är                             att\nha tänd på bilen när du bytt hjulet?",
        "options": [
          "Enbart varningsblinkern",
          "Enbart höger blinker",
          "Höger blinker och\nparkeringsljuset",
          "Varningsblinkern och\nparkeringsljuset"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du råkar backa på en parkerad bil.\n\nVad är riktigt?",
        "options": [
          "Jag ska i första hand kontakt\npolis om en pareringsskada\nuppstår",
          "Det är enbart om skadan är stor\nsom jag behöver kontakt\nbilägaren",
          "Jag riskerar att mitt körkort blir\nåterkallat om jag åker från\nplatsen utan att kontakta\nbilägaren",
          "Det räcker att jag kontaktar\nbilägaren när jag kommer hem"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör denna bil med 270 kg i bagaget\n\nhur mycke är bruttovikt?",
        "options": [
          "Ca 1540 kg",
          "Ca 1340 kg",
          "Ca 1250 kg",
          "Ca 1180 kg"
        ],
        "images": [
          "assets/prov1/16.jpg"
        ],
        "correct": 2
      },
      {
        "text": "När händer mest av alkoholsolyckor?",
        "options": [
          "Allhelgonahelgen",
          "Jul",
          "Påsk",
          "Midsommar"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Får du stanna i motorvägen och\nta en liftare?",
        "options": [
          "Ja, om jag slå på\nvarningsblinkern",
          "Nej, det är förbjudet att stanna\npå en motorväg",
          "Ja, om det inte kommer någon\n trafik bakifrån",
          "Ja, om den högsta tillåtna\nhastigheten på motorvägen\när 70 km/h"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Hur ska du uppträda mot\nfötgångaren\ni den här situationen?",
        "options": [
          "Jag ska sakta in eller stanna för\natt visa att jag tänker låta henne\ngå först",
          "Jag ska köra, eftersom vi har\nögonkontakt och jag ser att hon\ntänker vänta",
          "Jag ska köra, eftersom hon är\nskyldig att vänta på mig"
        ],
        "images": [
          "assets/prov1/25.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du har kommet till tunnelen, hur påverkar din seende?",
        "options": [
          "Man har bättre uppsikt bakåt i\nsidospeglarna",
          "Stoppsträckan blir kortare",
          "Man gör mindre och lugnare\nrattrörelser",
          "Det är större risk att man får\ntunnelseende"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Trafiksignalen visar röttljus.\n\nFår du köra eller ska du stanna i den\nhär situationen?",
        "options": [
          "Jag ska stanna",
          "Jag får köra, eftersom mötande\nska låta mig köra först enligt\nvägmärket",
          "Jag får köra, men jag ska låta\nmötande köra först enligt vägmärket",
          "Jag får kör"
        ],
        "images": [
          "assets/prov1/f1.jpg",
          "assets/prov1/1_4_21.png"
        ],
        "correct": 0
      },
      {
        "text": "Du kör personbil.\n\nFår du köra om i en eller flera av situationen?",
        "options": [
          "Ja, men endast i situation A",
          "I både situationen A och B",
          "Ingen"
        ],
        "images": [
          "assets/prov1/9.jpg",
          "assets/prov1/100px-1_2_63.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Hur ska du uppträda när du blir om köred?",
        "options": [
          "Jag placerar bilen intill kantlinjen\nför att underlätta omkörningen",
          "Jag placerar bilen intill mittlinjen\nför att markera att det är\nolämpligt att köra om",
          "Jag ökar hastigheten för att\nförhindra omkörningen"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Nya bilar är utrustad med säkerhetssystemet\n\nfinns nyckdeler på detta eller inte?",
        "options": [
          "Nej, säkerhetssystem i bilar är\nenbart positivt",
          "Nej, det gör att alla förare kan\nkoncentrera sig mer på trafiken",
          "Ja, det kan bli svårare att\nmanöverera bilen",
          "Ja, det kan medföra att en del\nförare tar större risker"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "I vilken av de situationer får du inte stanna?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C"
        ],
        "images": [
          "assets/prov1/25_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör en bil med släp\ndet är vinterväglag\n\nVad är rätt angående dubbdäck på\nkombinationen bil och släpvagn?",
        "options": [
          "Om släpvagnen har dubbdäck\nmåste även bilen ha det",
          "Om bilen har dubbdäck\nmåste även släpvagnen ha det"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du kör en bil med de uppgiften du\nser på registreringsbiviset, Du har\nbagage i bilen som väger 400 kg.\n\nFår du dessutom ta med dig\npassagerare?",
        "options": [
          "Ja",
          "Nej"
        ],
        "images": [
          "assets/prov1/27.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Hur ska du uppträda om du ska svänga till vänster?",
        "options": [
          "Jag kör sakta framåt medan\nmötande trafik passerar",
          "Jag kör eftersom mötande trafik\nhar rött ljus",
          "Jag kör eftersom mötande trafik\nska lämna företräde",
          "Jag stannar vid stopplinjen och\nvänter medan mötande trafik\npasserar"
        ],
        "images": [
          "assets/prov1/68.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Hur ska du uppträda i denna\nsituationen?",
        "options": [
          "Tuta innan omkörningen för att\ntydligt visa min avsikt",
          "Behålla min placering i körfältet\noch kör förbi",
          "Köra förbi sakta och med god\nmarginal i sidled",
          "Accelerera kraftigt för att göra\nomkörningen effektiv"
        ],
        "images": [
          "assets/prov1/29.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad innebär vägmärke?",
        "options": [
          "Korsande järnväg med flera spår",
          "Korsande järnväg med ett spår",
          "Korsande järnväg utan bommar"
        ],
        "images": [
          "assets/prov1/jarn.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad ska du göra när du kännar sig sömnen?",
        "options": [
          "Jag höjer hastigheten för att\nkomma fram förtare",
          "Jag höjer värmen i bilen för att\nlättare kunna hålla mig vaken",
          "Jag stannar bilen och tar en\npaus för att sova en kort stund",
          "Jag minskar hastigheten för att\nöka min reaktionsförmåga"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska svänga till höger\nmåste du stanna i någon av situationerna?",
        "options": [
          "Ja, men enbart i situation A",
          "Ja, men enbart i situation B",
          "Ja, i båda situationerna",
          "Nej."
        ],
        "images": [
          "assets/prov1/58.jpg",
          "assets/prov1/115px-1_2_50.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Du ska på kvällen den 15 mars\nparkera din bil på gatan där\nvägmärket gäller.\n\nDu ska hämta bilen på morgonen\nden 16 mars.\n\nVar är det tillåtet att parkera?",
        "options": [
          "På den sida av gatan som har\nudda adressnummer",
          "På den sida av gatan som har\njämna adressnummer",
          "På båda sidorna av gatan"
        ],
        "images": [
          "assets/prov1/33.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör på en motorväg. Du närmar\ndig fordonen framför och du vill köra\nförbi.\n\nFår du köra om flera fordon i en gång?",
        "options": [
          "Nej, bara ett fordon åt gången",
          "Ja, det är tillåtet",
          "Ja, men bara om jag ger\nljudsignal"
        ],
        "images": [
          "assets/prov1/34.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du ska kör raktfram i korsningen\n\nvad är riktigt?",
        "options": [
          "Bilar från höger ska låta mig köra\nförst",
          "Jag ska låta mötande bilar som\nska svänga till vänster köra först",
          "Mötande bilar som ska svänga till\nvänster ska låta mig köra först"
        ],
        "images": [
          "assets/prov1/36.jpg",
          "assets/prov1/100px-1_1_23.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Du ska förtsätter till höger\n\ni vilket situationen ska du blinka?",
        "options": [
          "Ja, men endast i situationen A",
          "Ja, men endast i situationen B",
          "Ja, i både situationen",
          "Nej"
        ],
        "images": [
          "assets/prov1/14.jpg",
          "assets/prov1/100px-1_1_1_1.svg.png",
          "assets/prov1/hvdldr.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du har blivit inblandad i en\ntrafikolycka\n\när du skyldig att se till att polisen\nunderrättad?",
        "options": [
          "Ja, om de inblandade fordonen\ninte kan köras från platsen",
          "Nej, aldrig",
          "Ja, om någon människa har\n   och skadan inte är",
          "Ja, jag är alltid skyldig att\nunderrätta polisen"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska svänga till vänster\n\nhar du väjningsplikt från höger i en av korsningar?",
        "options": [
          "Ja, men endast i situationen A",
          "Ja, men endast i situationen B",
          "Ja, i både korsningar",
          "Nej"
        ],
        "images": [
          "assets/prov1/2_7.jpg",
          "assets/prov1/16_1.jpg",
          "assets/prov1/100px-1_4_5.svg.png",
          "assets/prov1/hvdldr.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du med dina kamrater är på väg till\nfjällen. Ni har två timmars restid kvar\noch du känner dig trött efter några\ntimmars körning.\n\nVad är bäst att göra för att resten\nav resan ska bli så säker som\nmöjligt?",
        "options": [
          "Jag låter någon av mina utvilade\nkamrater som har körkort\nfortsätta att köra",
          "Jag öppnar ett fönster och\nfortsätter att köra",
          "Jag går ur bilen en stund för att\nröra på mig och fortsätter sedan\natt köra",
          "Jag sätter på musik på radion\noch fortsätter att köra"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad innebar vägmärken?",
        "options": [
          "Jag kör på riksväg 58",
          "Jag kör på en väg som leder till\nriksväg 58",
          "Jag kör på en väg som tillfälligt\nersätter riksväg 58"
        ],
        "images": [
          "assets/prov1/1_5_4_4.png"
        ],
        "correct": 2
      },
      {
        "text": "Vad innebar vägmärken?",
        "options": [
          "Det är förbjudet att köra\nlångsammare än 40 km/h",
          "Korsningar i samma plan kan\nförekomma",
          "Backning får endast ske på\nvägrenen",
          "Traktortrafik är förbjuden"
        ],
        "images": [
          "assets/prov1/1_4_1.png"
        ],
        "correct": 2
      },
      {
        "text": "Vad innebär två vägmärkna\nsom visar på bilden?",
        "options": [
          "Innebär för tillfället förbjudet att\nkör fortare än 30 km/h",
          "Innebär för tillfället olämpligt att\nkör fortare än 30 km/h",
          "Jag måste hålla minst 30 meter\nmellan fordonet framför"
        ],
        "images": [
          "assets/prov1/30h.jpg",
          "assets/prov1/1_4_17-2111.png"
        ],
        "correct": 2
      },
      {
        "text": "Trafiksignalenvisar gult blinkande\nljus.\n\nVilken färg visar trafiksignalen på\ndenkorsande gatan?",
        "options": [
          "Gul blinkande ljus",
          "Gul fast ljus",
          "Rött ljus",
          "Grönt ljus"
        ],
        "images": [
          "assets/prov1/43_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilket körsätt kan kallas defensiv?",
        "options": [
          "Att hela tiden köra långsamt för\natt lunga ner trafikrytmen",
          "Att hela tiden köra med hög\nhastighet för att följa\ntrafikrytmen",
          "Att hela tiden anpassa\nhastigheten för att vare beredd\natt handla i kritiska situationer"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "I vilken trafikmiljö är det stort risk\nför att föraren blir trött ( sömnig )?",
        "options": [
          "På en bred och rak landsväg med\nlite trafik",
          "På en smal och krokig landsväg\nmed lite trafik",
          "På en bred väg i stadstrafik med\nmycket trafik",
          "I stadstrafik med lite trafik"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du konstaterar att bilens\nstötdämbare är slitna\n\nHur påverkas väggreppet av detta?",
        "options": [
          "Bilen blir understyrd",
          "Bilen får längre bromssträcka\noch sämre förmåga att hålla\nkusen i kurvor",
          "Bilens antisladdsystem upphör\natt fungera på ojämn vägbana",
          "Bilen får felaktig bromsfördelning"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilket vägmärke varnar dig för att\nvägsträckan ofta korsas av cyklister\noch mopedförare?",
        "options": [
          "Vägmärke A",
          "Vägmärke B",
          "Vägmärke C",
          "Vägmärke D"
        ],
        "images": [
          "assets/prov1/100px-1_3_6_2.svg.png",
          "assets/prov1/100px-1_1_44.svg.png",
          "assets/prov1/100px-1_2_10.svg.png",
          "assets/prov1/100px-1_6_7.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Du ska förtsätta rakt fram\n\nHur bör du göra i den här\nsituationen för att underlätta\nkörfältsbytet för föraren i den vita\nbilen?",
        "options": [
          "Byta till vänster körfält",
          "Öka hastigheten",
          "Byta till höger körfält",
          "Anpassa hastigheten"
        ],
        "images": [
          "assets/prov1/f48.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du kör på en landsväg i mörker med\nhelljuset tänt och närmar dig ett\nbackrön.\n\nAv vilken anledning kan det vara bra\natt bländs av till halvljus för en\nsekund?",
        "options": [
          "För att kontrollera att halvljuset\nfungerar",
          "För att mötande fordons helljus\nska bli mindre bländande",
          "För att jag då lättare kan\nupptäcka mötande bilar",
          "För att låta ögonen vila från\nstarkt ljus"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad innebär den heldragna gula\nlenjen?",
        "options": [
          "Jag får inte stanna eller parkera\nhär",
          "Jag får stanna här, men bara för\natt hämta eller lämna gods",
          "Jag får stanna här, men bara för\natt hämta eller släppa aav\npassagerare",
          "Jag får stanna här oavsett\närende, men inte parkera"
        ],
        "images": [
          "assets/prov1/4_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du kommer fram till en olyckasplats.\nEtt av de inblandade fordonen är en\nlastbil märkt medden här skylten.\n\nVad bör du göra?",
        "options": [
          "Slå ifrån tändningen på fordonen\nsom är inblandade i olyckanoch\ndärefter ringa 112",
          "Stanna intill olycksplatsen,slå på\nvarningsblinker och därefter\nring 112",
          "Stanna en bit från fordonen,\nvarna andra och ringa 112",
          "Rädda skadade personer och\nringa 112"
        ],
        "images": [
          "assets/prov1/farligt.jpg"
        ],
        "correct": 2
      },
      {
        "text": "En person har varit berusad en kväll.\nDagen efter är alkoholhalten i blodet\nnoll\n\nÄr personen en lika bra bilförare som\nvanligt den dagen?",
        "options": [
          "Ja, men enbart om personen fått\nsova ordentligt",
          "Nej",
          "Ja, eftersom alkoholhalten i\nblodet är noll"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilka får trafikera körfält A där vägmärket gäller?",
        "options": [
          "Bussar och tunga lastbilar",
          "Fordon i linjetrafik och cyklister",
          "Endast bussar"
        ],
        "images": [
          "assets/prov1/8_124.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du ska svänga till vänster i\nkorsningen på bilden.\n\nVar ska du placera bilen?",
        "options": [
          "Mitt i körfältet",
          "Till höger på vägrenen",
          "Till höger i körfältet"
        ],
        "images": [
          "assets/prov1/5_87.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilken belysning är tänd här\nljus......................i den\nhär positionen?",
        "options": [
          "Halvljuset",
          "Parkeringsljuset",
          "Dimbakljuset",
          "Bromsljuset"
        ],
        "images": [
          "assets/prov1/f55.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Varför inträffer de flesta dödsolyckor\ni trafiken mellan klockan 16 och\nklockan 18?",
        "options": [
          "Därför att då är fler äldre ute i\ntrafiken",
          "Därför att då är fler yngre och\noerfarna förare ute i trafiken",
          "Därför att då är det mest trafik",
          "Därför att då är genomsnitts-\nhastigheten högst"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilken är den storst risken i den här\nsituationen?",
        "options": [
          "Att jag blir omkörd till höger",
          "Att lastbil framför bromsar",
          "Att jag blir omkörd till vänster",
          "Att lastbil framför byter körfält"
        ],
        "images": [
          "assets/prov1/8_13.jpg"
        ],
        "correct": 3
      },
      {
        "text": "På bilens instrumentpanel blinkar\nkontrollampan på bilden när du kör\n\nvad innebär det?",
        "options": [
          "Det är lågt oljetryck i motorn",
          "Det är helt väglag",
          "Det är fel på bilens elsystem",
          "Det är fel på bromsarna"
        ],
        "images": [
          "assets/prov1/f58.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Är det tillåtet att parkera som den\ninringade grå bilen gjört?",
        "options": [
          "Ja, eftersom gatan är tillräckligt\nbred för attbilen inte ska hindra\npasserande bilar",
          "Ja, eftersom det inte får komma\ntrafik från vänster i korsningen",
          "Nej, eftersom bilen är parkerad i\nen korsning",
          "Ja, eftersom bilen är parkerad på\nden korsningsfria sidan av gatan"
        ],
        "images": [
          "assets/prov1/f59.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska förtsätta rakt fram i\nkorsningen\n\nHar du väjningsplikt mot några\nfordon?",
        "options": [
          "Ja, mot fordon från vänster",
          "Ja, mot fordon från höger",
          "Ja, mot mötande fordon",
          "Nej, eftersom jag kör på\nhuvudled"
        ],
        "images": [
          "assets/prov1/f60.jpg",
          "assets/prov1/100px-1_4_5.svg.png",
          "assets/prov1/100px-1_1_10.svg.png",
          "assets/prov1/11_23_1.png"
        ],
        "correct": 3
      },
      {
        "text": "Vad innebär det att ett\nbromssystem är hydrauliskt?",
        "options": [
          "Att det finns två separata\nbromsketsar",
          "Att tryckluft överför\nbromskraften",
          "Att en vajer överför\nbromskraften",
          "Att bromsvätska överför\nbromskraften"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "I vilken situation finns storst risk för\nen olycka med dödlig utgång?",
        "options": [
          "När jag från en påfart kör in på\nen motorväg",
          "När jag kör in i en\ncirkulationsplats",
          "När jag svänger till höger på en\n90-väg",
          "När jag svänger till vänster på en\n90-väg"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vilken bild visar en fordons-\nkombination som du får köra när du\nhar körkort med behörighet B?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C",
          "Bild D"
        ],
        "images": [
          "assets/prov1/f63.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du kopplar en lastad släpvagn till din\nbil\n\nHur ska du enklast ändra kultrycket?",
        "options": [
          "Jag minskar lufttrycket i släpets\ndäck",
          "Jag ökar lufttrycket i släpets\ndäck",
          "Jag fördelar om lasten i bilen",
          "Jag fördelar om lasten på släpet"
        ],
        "images": [
          "assets/prov1/7.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vilken drivmedel bidrar\nväxthuseffeken?",
        "options": [
          "Biogas",
          "Diesel",
          "Naturgas",
          "Bensin"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du lånar en bakhjulsdriven bil i\nstället för den framhjulsdrivna som\ndu är van att köra.\n\n\nVilken skillnad är viktig att känna till\nnär du ska köra i halt väglag?",
        "options": [
          "En bakhjulsdriven bil sladdar oftast med framvagn",
          "En bakhjulsdriven bil har oftast bättre väggrepp i motlut",
          "En bakhjulsdriven bil sladdar oftast med bakvagnen"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilken av följande beteende är\nviktigast för att så den information\nman behöver i trafiken?",
        "options": [
          "Att jag håller blicken fixerad\nlångt fram längs vägen",
          "Att jag alltid håller lägre\nhastighet än tillåtet",
          "Att jag håller blicken rörlig och\nlångt fram längs vägen",
          "Att jag hela tiden har\nbromsberedskap så att jag kan\nstanna när det behövs"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du närmar dig backkrönet och\nanpassar därför hastigheten.\n\nVar ska du placera bilen i den här\nsituationen?",
        "options": [
          "Nära vägens mitt för att inte\nriskera att köra på gående eller\ncyklister på vägens högra sida",
          "Placeringen har ingen betydelse\neftersom jag har anpassat\nhastigheten",
          "Väl till höger för att ha god\nmarginal i sidled om jag får möte"
        ],
        "images": [
          "assets/prov1/68_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska köra rakt fram.\n\nVad är mest förrädiskt i den\nhär situationen?",
        "options": [
          "Att mopedföraren kanske inte\nhar kunskap om högerregeln",
          "Att det kan komma fler\ntrafikanter från höger i\nkorsningen",
          "Att mopedföraren kanske inte\nkan bedöma hastighet och\navstånd"
        ],
        "images": [
          "assets/prov1/69.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du har fått en ny medicin utskriven\nav din läkare.\n\nVem har ansvaret för att bedöma\nom du kan köra bil. När du använder\nmedicinen?",
        "options": [
          "Apotekspersonalen som säljer\nmedicinen till mig",
          "Läkemedelsföretaget som\nproducerar medicinen",
          "Läkaren som skriver ut\nmedicinen",
          "Jag själv"
        ],
        "images": [
          "assets/prov1/01_1.jpg"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": 2,
    "title": "Svenska Prov 2",
    "questions": [
      {
        "text": "Du planerar köra om den mörka\nbilen som befinner sig i körfältet i\nmitten.\n\nVad gäller i denna situation?",
        "options": [
          "Jag får köra om i det högra\nkörfältet",
          "Jag måste köra om i det vänstra\nkörfältet"
        ],
        "images": [
          "assets/prov2/1.jpg",
          "assets/prov2/100px-1_2_653.svg.png"
        ],
        "correct": 0
      },
      {
        "text": "Vad är skillnaden mellan\nmotortrafikleder och motorvägar?",
        "options": [
          "På en motortrafikled är det\ntillåtet att stanna",
          "På en motortrafikled kan det\nfinnas korsningar i samma plan",
          "På en motortrafikled är det\ntillåtet att vända",
          "På en motortrafikled kan det\nförekomma mötande trafik på\nsamma körbana"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du upptäcker att kylvätskenivån i din\nbil är låg\n\nska du fylla på med något mer än\nbara vanligt vatten?",
        "options": [
          "Nej, bara vatten",
          "Ja, K- sprit",
          "Ja, glykol",
          "Ja, T- sprit"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilken är den högsta tillåtna\nhastigheten vid bogsering med\nbogserlina?",
        "options": [
          "20 km/tim",
          "30 km/tim",
          "40 km/tim"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du ska svängatill vänster möt\nHullsjö.\n\nVilken är den storsta riskeni den här\nsituationen?",
        "options": [
          "Att mötande fordon upptäcker\nmig sent",
          "Att jag missbedömer mötande\nfordons hastighet",
          "Att bakomvarande bilar kör om\nmig",
          "Att mötande fordon också ska\nsvänga till vänster"
        ],
        "images": [
          "assets/prov2/5.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du kör under de siktförhållande som bilden visar.\n\nVilken av de här belysningarna är\nlämpigast att använda framtill på\nbilen?",
        "options": [
          "Parkeringsljus",
          "Halvljus",
          "Helljus"
        ],
        "images": [
          "assets/prov2/6.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du parkera öfta din bil där\nvägmärket och tilläggstavlorna gäller (se A)\n\nvilken av följande tider får du\nparkera där utan att betala avgift\n(se B)?",
        "options": [
          "4 augusti kl. 15.00",
          "13 augusti kl. 18.00",
          "19 augusti kl. 16.00",
          "25 augusti kl. 09.00"
        ],
        "images": [
          "assets/prov2/7.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Hur påverkas körningen om man\nprata i mobiltelefon när man kör bil?",
        "options": [
          "Man gör mindre och lugnare\nrattrörelser",
          "Stoppsträckan blir kortare",
          "Reaktionstiden blir kortare",
          "Man har sämre uppsikt bakåt i\nsidospeglarna"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du ska köra rakt fram.\n\nHar du väjningsplikt mot någon\ntrafik i korsningen?",
        "options": [
          "Nej",
          "Ja, men enbart mot trafik från\nhöger",
          "Ja, mot trafik från både vänster\noch höger",
          "Ja, men enbart mot trafik från\nvänster"
        ],
        "images": [
          "assets/prov2/2_58.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad införmerar vägmärket om?",
        "options": [
          "Jag närmar mog ett\nvägarbetsområde",
          "Omkörningsförbud gäller inte\nlängre",
          "Rekommenderad högsta\nhastighet gäller inte längre",
          "Jag närmar mig ett område med\nhastighetsbegränsning på\n30 km/tim"
        ],
        "images": [
          "assets/prov2/10.jpg",
          "assets/prov2/100px-1_4_17.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Förbjudet att parkera fordon på\ndag med udda datum",
        "options": [
          "Förbjudet att stanna fordon på\ndag med jämnt datum",
          "Alltid förbjudet att stanna\nfordon",
          "Förbjudet att stanna fordon på\ndag med udda datum",
          "Förbjudet att parkera fordon på\ndag med udda datum"
        ],
        "images": [
          "assets/prov2/100px-Dateparking1.svg.png"
        ],
        "correct": 3
      },
      {
        "text": "Du ska köra rakt fram i\nvägkorsningen. Trafiksignalen är ur\nfunktion.\n\nHar du väjningsplikt mot någon\ntrafik i korsningen?",
        "options": [
          "Ja, mot trafik både från vänster\noch höger",
          "Ja,men enbart mot trafik från\nvänster",
          "Ja, men enbart mot trafik från\nhöger",
          "Nej"
        ],
        "images": [
          "assets/prov2/12.jpg",
          "assets/prov2/100px-1_1_23.svg.png"
        ],
        "correct": 0
      },
      {
        "text": "Vilka linjer ska du följa i den här\nsituationen?",
        "options": [
          "Det är tillåtet att följa vilka jag\nvill",
          "De orangefärgade",
          "De vita"
        ],
        "images": [
          "assets/prov2/13.jpg",
          "assets/prov2/100px-1_3_2_2.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Måste du stanna innan du passerar\njärnvägen?",
        "options": [
          "Nej",
          "Ja, men enbart om något tåg\nnärmar sig korsningen",
          "Ja, alltid"
        ],
        "images": [
          "assets/prov2/14.jpg",
          "assets/prov2/115px-1_2_50.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Vad gäller i korsningen?",
        "options": [
          "Jag måste svänga till höger",
          "Det är tillåtet att svänga till\nvänster",
          "Det är tillåtet att både köra rakt\nfram och svänga till höger"
        ],
        "images": [
          "assets/prov2/7_74.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Värför bygger man så kallade\nspanska svängar( se bilden)?",
        "options": [
          "För att underlätta framkomlig-\nheten för vägarbetsfordon",
          "För att underlätta vänstersväng\nmed långa fordon",
          "För att minska riskerna för all\nvänstersvängande trafik"
        ],
        "images": [
          "assets/prov2/16.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du köri 30 km/tim och det är torrt\nväglag . Bromssträckan är då\nca 6 meter.\n\nHur lång blir bromssträckan om du\nökar hastigheten till 90 km/tim?",
        "options": [
          "Ca 18 meter",
          "Ca 24 meter",
          "Ca 36 meter",
          "Ca 54 meter"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du har råkat köra ner ett vägmärke\noch kan inte själv sätta upp det\nigen. Du gör vad du kan för att det\ninte ska bli problem för trafiken.\n\nMåste du göra något mer?",
        "options": [
          "Ja, jag måste kontakta polisen\neller den som satt upp märket\noch meddela vad som har hänt",
          "Ja, jag måste kontakta trafik-\ninformationen på den lokala\nradiostationen och meddela vad\nsom har hänt",
          "Nej, jag vehöver inte göra\nnågonting mera"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad innebär vägmärkena?",
        "options": [
          "Trafik i vänster körfält har om\n400 meter väjningsplikt mot\ntrafik i höger körfält",
          "Omkörning är förbjuden\neftersom vägen strax blir\nsmalare",
          "Antalet körfält minskar om\n400 meter",
          "Trafik i höger körfält har om\n400 meter väjningsplikt mot\ntrafik i vänster körfält"
        ],
        "images": [
          "assets/prov2/19.jpg",
          "assets/prov2/1_5_1_5.png",
          "assets/prov2/400.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör på en rak landsväg och du\nska svänga till vänster.\n\nVilket mötande fordon är det oftast\nsvårast att bedöma hastigheten på?",
        "options": [
          "En buss",
          "En traktor",
          "En moped",
          "En personbil med husvagn"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör på en enkelriktad gatan och\nser detta vägmärke längre fram.\n\nVad innebär märket?",
        "options": [
          "Varning för korsande trafik",
          "Jag ska lämna företrade åt\nmötande fordon",
          "Mötande fordon ska lämna företräde åt mig",
          "Jag kan strax få mötande trafik"
        ],
        "images": [
          "assets/prov2/1_1_52.png"
        ],
        "correct": 3
      },
      {
        "text": "Du kör i 70 km/tim på en landsväg.\nHjulen på bilens högre sida har\nhamnat utanför asfältkanten.\n\nHur bör du göra?",
        "options": [
          "Jag behåller hastigheten och styr\nförsiktigt upp på vägen",
          "Jag bromsar hårt och styr\nförsiktigt upp på vägen",
          "Jag bromsar mjukt och vrider\nkraftigt på ratten för att snabbt\nkomma upp på vägen",
          "Jag släpper gasen och styr\nförsiktigt upp på vägen"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vilken av dessaegenskaper hos en\nförare är mest avgörande för att\nhan eller hon ska undvika\ntrafikolyckor?",
        "options": [
          "Stort riskmedvetande",
          "Goda regelkunskaper",
          "God syn",
          "Snabb reaktionsförmåga"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilken av dessa åtgärder är den\nbästa om du vill minska utsläppen av koldioxid från din bil?",
        "options": [
          "Jag kör på lägsta möjligt växel",
          "Jag kör på högsta möjligt växel",
          "Jag kör med högoktanig bensin",
          "Jag kör med lågoktanig bensin"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilket påstående om\när riktigt?",
        "options": [
          "Den blir längre när föraren måste\nvälja mellan olika alternativ",
          "Den blir kortare i låga\nhastigheter",
          "Den blir längre i halt väglag"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska köra iväg från en korsning.\n\ndär du stått stilla och väglaget är\nmycket halt\n\nhur ska du göra för att lättast\nkomma iväg?",
        "options": [
          "Jag startar på högre växel än\nnormalt",
          "Jag drar åt parkeringsbromsen\noch lossar den långsamt\nsamtidigt som jag ger mer gas\nän normalt",
          "Jag ger mer gas än normalt",
          "Jag höjer kopplingensnabbare\nän normalt"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Hur ska du göra efter detta vägmärke?",
        "options": [
          "Jag ska alltid lämna företräde åt\nfordon från vänster",
          "Jag ska alltid lämna företräde åt\nfordon från höger",
          "Jag ska använda sammanvävning\ntillsammans medövrig trafik"
        ],
        "images": [
          "assets/prov2/2-1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "När du kör tänds den här lampan på\nbilens instrumentpanel.\n\nVad innebär det?",
        "options": [
          "Yttertemperaturen är nära\nnoll grader.\nDet är risk för halka",
          "Något är fel på bilens elsystem",
          "Oljetrycket är för lågt.\nDet är risk för motorskador",
          "Något är fel på bromssystemet\nkör inte vidare"
        ],
        "images": [
          "assets/prov2/handbroms.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du ska förtsätta rakt fram.\n\nGäller högerregeln i någon av\nkorsningarna?",
        "options": [
          "Ja, men enbart i korsning A",
          "Ja, men enbart i korsning B",
          "Ja, i båda korsningarna",
          "Nej"
        ],
        "images": [
          "assets/prov2/29.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör personbil med en tillkopplad\nlastad släpvagn.\n\nVad bör du göra efter att ha\npasserat detta vägmärke?",
        "options": [
          "Jag placerar mig närmare vägens\nmitt, eftersom vägbanan\nkommer att luta åt höger",
          "Jag ökar hastigheten, eftersom\njag inte får hindra bakomvarande\ntrafik",
          "Jag växlar normalt ned, eftersom\njag närmar mig en brant\nuppförsbacke",
          "Jag växlar normalt ned, eftersom\njag närmar mig en brant\nnedförsbacke"
        ],
        "images": [
          "assets/prov2/1_1_2_1.png"
        ],
        "correct": 3
      },
      {
        "text": "Du ska köra in på motorvägen från\naccelerationsfältet.\n\nVad är riktigt?",
        "options": [
          "Trafiken på motorvägen har\nväjningsplikt mot mig",
          "Jag har väjningsplikt mot\ntrafikenpå motorvägen",
          "Jag ska anpassa min hastighet\ntill trafiken på motorvägen"
        ],
        "images": [
          "assets/prov2/31.jpg"
        ],
        "correct": 2
      },
      {
        "text": "En 20-årig förare har några\njämnåriga kamrater som\npassagerare.\n\ni vilken situation är det störst risk\nför en trafikolycka?",
        "options": [
          "När föraren är en man som har\nkvinnor som passagerare",
          "När föraren är en kvinna som har\nkvinnor som passagerare",
          "När föraren är en kvinna som har\nmän som passagerare",
          "När föraren är en man som har\nmän som passagerare"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "För vilka skador gäller din\ntrafikförsäkring vid en kollision?",
        "options": [
          "Skadorna på samtliga inblandade\nfordon",
          "Enbart skadorna på mitt fordon",
          "Enbart skadorna på motpartens\nfordon"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad är det som avgör hur länge man\nska låta en motorvärmare vara\ninkopplad före start?",
        "options": [
          "Storleken på bilens motor",
          "Luftfuktigheten",
          "Utomhustemperaturen",
          "Motorns glykolblandning"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du har börjat köra om lastbilen.\n\nHur ska du göra i denna situation?",
        "options": [
          "Jag avbryter omkörningen och\ngår tillbaka till höger körfält",
          "Jag signalerar med helljuset för\natt varna mötande trafik",
          "Jag accelererar för att\nomkörningen ska gå så snabbt\nsom möjligt"
        ],
        "images": [
          "assets/prov2/5_94.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du kolliderar med ett rådjur som dör i kollisionen.\n\nVad är du skyldig att göra?",
        "options": [
          "Flytta rådjuret till vägrenen om\ndet ligger trafikfarligt och köra\nvidare",
          "Flytta rådjuret om det ligger\ntrafikfarligt och meddela aktuell\nradiostation om olyckan",
          "Märka ut platsen, flytta rådjuret\nom det ligger trafikfarligt och\nanmäla kollisionen till polisen",
          "Märka ut platsen och därefter ta\nrådjuret med mig därifrån"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Är någon ab bilarna parkerad på\ntillåten plats?",
        "options": [
          "Ja, men enbart bilen på bild A",
          "Ja, men enbart bilen på bild B",
          "Ja, men enbart bilen på bild C",
          "Nej, ingen av bilarna"
        ],
        "images": [
          "assets/prov2/37-c.jpg",
          "assets/prov2/4_44.jpg",
          "assets/prov2/37-b.jpg",
          "assets/prov2/100px-1_4_5.svg.png",
          "assets/prov2/100px-1_2_40.svg.png",
          "assets/prov2/11_7_2.png"
        ],
        "correct": 3
      },
      {
        "text": "Får du i någon av situationerna\nsvänga till höger utan att först\nstanna?",
        "options": [
          "Ja, men enbart i situation A",
          "Ja, men enbart i situation B",
          "Ja,i båda situationerna",
          "Nej"
        ],
        "images": [
          "assets/prov2/3.jpg",
          "assets/prov2/64.jpg",
          "assets/prov2/100px-1_2_53_2.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Varför blir vana förare i 50-årsåldern\nmer sällan inblandade i olyckor än\nunga förare?",
        "options": [
          "De har mer erfarenhet",
          "De kör mer offensivt",
          "De kör oftare på natten",
          "De har mer prestigetänkande"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska svänga vänster\n\nvad gäller?",
        "options": [
          "Trafik rakt framifrån ska låta mig\nköra först",
          "Jag ska låta trafik enbart från\nhöger köra före mig",
          "Jag ska låta all korsande trafik\nköra före mig",
          "Jag ska låta enbart trafik från\nvänster köra före mig"
        ],
        "images": [
          "assets/prov2/40.jpg",
          "assets/prov2/11_23_2.png"
        ],
        "correct": 0
      },
      {
        "text": "Du närmar dig en korsning där du\nhar väjningsplikt.\n\nHur kan du bäst visa andra\ntrafikanter att du tänker lämna\nföreträde?",
        "options": [
          "Jag vrider på huvudet och söker\nögonkontakt med andra\ntrafikanter",
          "Jag sänker hastigheten i god tid",
          "Jag placerar bilen väl till höger"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Finns det fordon som är bredare än\n260 cm som får föras på allmänna\nvägar?",
        "options": [
          "Ja, men enbart fordon som har\nsärskilt tillstånd",
          "Ja, men enbart fordon som har\npoliseskort",
          "Nej",
          "Ja, till exempel jordbruksredskap"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken av följande utrustningar i bilen\när viktigast för att minska risken att\ndu blir skadad om du blir påkörd\nbakifrån?",
        "options": [
          "Krockkudde ( airbag )",
          "ABS-bromsar",
          "Huvudstöd ( nackstöd )",
          "Antisladdsystem"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska med din bil hämta en\nrullstolsburn kamrat som\nbor på den här gatan.\n\nFår du köra in på gatan och hämta honom?",
        "options": [
          "Nej, all fordonstrafik är\nförbjuden",
          "Ja, om jag inte kör fortare än\n30km/tim",
          "Nej, enbart rörelsehindrade får\nköra in på gatan",
          "Ja, eftersom han bor på den här\ngatan"
        ],
        "images": [
          "assets/prov2/44.jpg",
          "assets/prov2/100px-1_4_12.svg.png"
        ],
        "correct": 3
      },
      {
        "text": "Vilket påstående stämmer med hur\nunga förare i allmänhet uppfattar sin egen körförmåga?",
        "options": [
          "De flesta unga män tror att de\nkör bättre än\ngenomsnittsbilisten",
          "De flesta unga kvinnor tror att de\nkör bättre än\ngenomsnittsbilisten",
          "Alla unga förare tror att de kör\nbättre än genomsnittsbilisten"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Hur kan du minska bränsle-\nförbrukningen på din bil?",
        "options": [
          "Jag stänger av\nluftkonditioneringen när den inte\nbehövs",
          "Jag kör med lågt lufttryck i\ndäcken",
          "Jag blandar karburatorsprit i\nbensinen vintertid"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilket avstånd måste det                  vara mellan den heldragna linjen och fordonet för att du ska få stanna som fordonet på bilen?",
        "options": [
          "2 meter",
          "3 meter",
          "4 meter"
        ],
        "images": [
          "assets/prov2/47.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vad innebär polismannens tecken?",
        "options": [
          "Jag får köra och mötande ska\nstanna",
          "Jag ska stanna och mötande får\nköra",
          "Både jag och mötande ska\nstanna",
          "Jag ska minska hastigheten"
        ],
        "images": [
          "assets/prov2/2_6.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du ska förtsätta köra rakt fram.\n\nHur ska du köra i den här\nsituationen för att släppa ut så lite\navgaser som möjligt?",
        "options": [
          "Jag ska köra fram till trafikljuset\noch stanna",
          "Jag ska motorbromsa och\nförsöka undvika att stanna",
          "Jag ska trampa ner kopplingen\noch rulla fram mot trafikljuset"
        ],
        "images": [
          "assets/prov2/49.jpg"
        ],
        "correct": 1
      },
      {
        "text": "En sysnskadad som använder vit\nkäpp står vid trottoaren.\nHan sträcker käppen snett framåt\n\nvad bör du vara beredd på att den\nsynskadade tänker göra?",
        "options": [
          "Be någon om hjälp",
          "Vända sig helt om och gå åt\nandra hållet",
          "Gå över gatan",
          "Stå kvar och låta mig köra först"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska svänga till vänster.\n\nKan mötande fordon ha grönt ljus\nsamtidigt som du i någon av\nsituationerna?",
        "options": [
          "Ja, men enbart i situation A",
          "Ja, men enbart i situation B",
          "Ja, i både situationerna",
          "Nej"
        ],
        "images": [
          "assets/prov2/4_7.jpg",
          "assets/prov2/51a.jpg",
          "assets/prov2/HOGER.png"
        ],
        "correct": 0
      },
      {
        "text": "I vilken situation är olycksrisken\nstörst för unga förare?",
        "options": [
          "När de har ungdomar som\npassagerare i bilen",
          "När de är ensamma i bilen",
          "När de har bilradion påslagen\nmed högt ljud"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Kan du förkorta katalysatorns\nuppvärmmningstid när du ska starta bilen en kall dag och på det sättet minska utsläppen?",
        "options": [
          "Ja, genom att använda\nmotorvärmare",
          "Nej, det går inte att förkorta\nuppvärmningstiden",
          "Ja, genom att varava upp motorn\nmer än 3000 v/min några\nminuter innan jag åker iväg",
          "Ja, genom att låta motorn gå på\ntomgång några minuter innan\njag åker iväg"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Jag får             stanna i korsningen\nnär jag har grönt ljus",
        "options": [
          "Jag måste lämna fotgängaren\nföreträde även om hon inte\nhunnit lämna refugen",
          "Jag behöver             lämna\nfotgängaren företräde eftersom\nhon är skyldig att stanna på\nrefugen i mitten av gatan"
        ],
        "images": [
          "assets/prov2/4_8.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad bör du göra när du närmar dig\ndetta vägmärke?",
        "options": [
          "Sänka farten och rikta blicken\nmot sidan av vägen oftare än\nnormalt",
          "Behålla farten och rikta blicken\nlängre fram på vägenän normalt",
          "Behålla farten och rikta blicken\nnärmare framför bilen än normalt"
        ],
        "images": [
          "assets/prov2/1_1_43_1.png"
        ],
        "correct": 0
      },
      {
        "text": "Kan det här vägmärket få någon\nsärskild betydelse när det är halt\nväglag?",
        "options": [
          "Ja, där vinden är kraftig blir\nvägbanan sträv med bra\nväggrepp",
          "Nej, det innebär endast farlig\nsidvind från vänster",
          "Ja, i halt väglag kan plötslig\nsidvind göra att jag får sladd"
        ],
        "images": [
          "assets/prov2/1_1_51_1.png"
        ],
        "correct": 2
      },
      {
        "text": "På motorvägar finns det tvärgående\nförbindelsevägar mellan körbanorna\n( se bilden )\n\nvilka av de här förarna får använda\nen sådan öppning?",
        "options": [
          "Förare som har minst en\ntidigare avfart",
          "Lastbilsförare i yrkesmässig\ntrafik",
          "Taxiförare",
          "Förare av väghållningsfordon"
        ],
        "images": [
          "assets/prov2/57.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vid en omkörning ska flera\nbedömningar göras.\n\nVilken bedömning är oftast svårst\natt göra?",
        "options": [
          "Mötande fordons hastighet",
          "Omkörningssträckans längd",
          "Min egen bils\naccelerationsförmåga",
          "Om bakomvarande förare\nplanerar en omkörning"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vilket alternativ är exempel på\ndefensiv körning?",
        "options": [
          "Jag kör impulsivt",
          "Jag lämnar alltid företräde i\nkorsningar",
          "Jag är hela tiden beredd att\nreagera på de situationer som\nuppstår",
          "Jag kör långsamt i alla\nsituationer"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska följa vägeni vänstersväng.\n\nHar du väjningsplikt mot trafik från\ndenanslutande vägen?",
        "options": [
          "Ja, i både korsningarna",
          "Ja, men enbart i korsning B",
          "Ja, men enbart i korsning A",
          "Nej"
        ],
        "images": [
          "assets/prov2/60a.jpg",
          "assets/prov2/60b.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Hur kan du veta att bilens ABS-\nbromsar fungerar som de ska när du gör en kraftig provbromsning?",
        "options": [
          "Jag känner att bromspedalen är\nhelt stilla och ser att det ryker\nom frmdäcken",
          "Jag ser att ABS-kontrollampan\nblinkar med rött sken",
          "Jag hörett pulserande ljud och\nkänner vibrationer i\nbromspedalen"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du bör hålla tillräckligt långt avstånd\ntill bilen framför av flera skäl.\n\nVilket är det viktigaste miljöskälet?",
        "options": [
          "Jag kan undvika onödiga stopp\noch onödiga accelerationer",
          "Partiklar från vägbeläggningen\nsom sprätter upp från framför-\nvarande kommer inte in i min bil",
          "Jag kan köra på ett högre varvtal",
          "Jag slipper få in avgaserna från\nframförvarande i min bil"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Bilen har fått motorfel och du\ntvingas stanna i mörker på en väg\nsom saknar gatubelysning.\n\nVilket ljus, utöver varningsblinkers\noch baklyktor, ska du ha tänt på\nbilen när du stannat?",
        "options": [
          "Parkeringsljus",
          "Helljus",
          "Halvljus"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Hur påverkas förarens syn om han\neller hon är alkoholpåverkad?",
        "options": [
          "Syndkärpen minskar och\nsynfältet blir bredare",
          "Syndkärpen ökar och föraren blir\nlättare bländad",
          "Syndkärpen minskar och\nsynfältet blir smalare",
          "Syndkärpan ökar och synfältet\nblir bredare"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad avgör                              om ett\nbarn ska sitta i en bakåtvänd\nbilbarnstol eller på en bälteskudde\neller bältestol?",
        "options": [
          "Barnets ålder",
          "Barnets vikt",
          "Barnets längd"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Har du väjningsplikt mot\nfotgängaren i den här situationen?",
        "options": [
          "Nej, eftersom fotgängaren ännu\ninte är ute på övergångsstället",
          "Ja, eftersom övergångsstället\nanses som obevakat när\ntrafiksignalen är släckt",
          "Nej, eftersom det finns\ntrafiksignal"
        ],
        "images": [
          "assets/prov2/2_51.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Får du vid en omkörning överskrida\nmittlinjen med vänster hjulpar\nsamtidigt som du har mötande\ntrafik?",
        "options": [
          "Nej, inte ens om mötande\nfordon delvis kör på vägrenen",
          "Ja,om det fordon jag ska köra\nförbi delvis kör på vägrenen",
          "Ja, om mötande fordon delvis\nkör på vägrenen"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vägen du kör på har enbart ett\nkörfält i vardera riktningen och det\nfinns ingen vägren.\n\nFår du köra om strax före ett\nbackrön där sikten är skymd?",
        "options": [
          "Nej",
          "Ja, om fordonet jag vill köra om\när en traktor med släp",
          "Ja, om föraren jag vill köra om\nger tecken att det inte finns\nmötande trafik"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du vill öva upp din förmåga att\nmanövrera bilen i halt väglag.\n\nVar är det säkrast att öva?",
        "options": [
          "På vägar där trafik sällan\nförekommer",
          "På parkeringsplatser",
          "I villaområden",
          "På trafikövningsplatser"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "När måste du ha vinterdäck på din\npersonbil?",
        "options": [
          "1 november - 31 mars ävenom\ndet           är vinterväglag",
          "1 december - 31 mars om det är\nvinterväglag",
          "1 december - 31 mars även om\n det               är vinterväglag",
          "1 oktober - 30 april om det är\nvinterväglag"
        ],
        "images": [
          "assets/prov2/01_1.jpg"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": 3,
    "title": "Svenska Prov 3",
    "questions": [
      {
        "text": "Trafiksignalen visar blinkande gult\nljus.\n\nFår du köra eller ska du stanna i den\nhär situationen?",
        "options": [
          "Jag ska stanna",
          "Jag får köra, eftersom mötande\nska låta mig köra först enligt\nvägmärket",
          "Jag får köra, men jag ska låta\nmötande köra först enligt vägmärket",
          "Jag får kör"
        ],
        "images": [
          "assets/prov3/f1.jpg",
          "assets/prov3/100px-1_4_21.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Många unga förare omkommer i\ntrafiken på helgnätter under\nsommaren.\n\nVilken är den vanligaste orsaken?",
        "options": [
          "Att de har druckit alkohol",
          "Att de omkommer i en\nomkörningsolycka",
          "Att de är tötta",
          "Att de råkar ut för en viltolycka"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska hämta en passagerare.\n\nFår du stanna som föraren i den här bilen gjort?",
        "options": [
          "Ja, om jag på så sätt kan\nunderlätta för övrig trafik",
          "Ja, men högst 1 minut",
          "Ja, eftersom gatan är smal",
          "Nej"
        ],
        "images": [
          "assets/prov3/4_52.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du har lånat en personbil en dag\ni mars när det ser ut som på bilden.\n\nVid säkerhetskontrollen ser du att\nbilen har vinterdäck märkta M+S.\nMönsterdjupet på bakdäcken är\n4 mm och framdäcken 2 mm.\n\nFår du köra med bilen?",
        "options": [
          "Nej",
          "Ja, men enbart i tätort",
          "Ja, eftersom bakdäcken har\nstörst mönsterdjup"
        ],
        "images": [
          "assets/prov3/8_22.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken av dessa personer kan lättast\npåverkas av grupptryck vid\nbilkörning?",
        "options": [
          "Den som har dåligt\nsjälvförtroende",
          "Den som har lång erfarenhet av\nbilkörning",
          "Den som har bra självförtroende"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska transportera ett tungt\nföremåll i en övertäckt släpvägn inom\ntättbebyggt område.\n\nBehöver du lastsäkra föremålet?",
        "options": [
          "Nej, eftersom jag kör inom\ntättbebyggt område",
          "Nej, eftersom föremålet är tungt\nstår det stadigt",
          "Ja, jag måste alltid lastsäkra",
          "Nej, eftersom släpvagnen är\növertäckt"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilket alternativ anger rätt\nrangordning för trafik\nanvisningar?",
        "options": [
          "1.Polismans tecken\n2.Trafiksignaler\n3.Vägmärken\n4.Trafikregler",
          "1.Polismans tecken\n2.Vägmärken\n3.Trafikregler\n4.Trafiksignaler",
          "1.Polismans tecken\n2.Trafiksignaler\n3.Trafikregler\n4.Vägmärken",
          "1.Polismans tecken\n2.Trafikregler\n3.Vägmärken\n4.Trafiksignaler"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad varnar vägmärket för?",
        "options": [
          "En farlig vänsterkurva",
          "En farlig högerkurva",
          "Flera farliga kurvor, den första till\nvänster",
          "Flera farliga kurvor, den första till\nhöger"
        ],
        "images": [
          "assets/prov3/f8.jpg",
          "assets/prov3/100px-1_1_1_3.svg.png"
        ],
        "correct": 3
      },
      {
        "text": "Vilken av de här förarna visar\nexempel för säkert samspel i\ntrafiken?",
        "options": [
          "En förare som alltid håller på sin rätt enligt reglerna",
          "En förare som överträder hastighetsgränsen för att följa trafikrytmen",
          "En förare som saktar in för att visa att han har väjningsplikt"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Får du svänga till vänster vid\ntrafiksignalen?",
        "options": [
          "Nej, här får enbart\nvarutransporter svänga till\nvänster",
          "Ja",
          "Nej, vänstersväng är förbjuden"
        ],
        "images": [
          "assets/prov3/f10.jpg",
          "assets/prov3/100px-1_2_62.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Vilket är det lämpligaste sättet att\nvända i korningen på bilden?",
        "options": [
          "Jag svänger vänster i\nkorsningen, stannar och backar\nrunt hörn A",
          "Jag svänger vänster i\nkorsningen, stannar och backar\nrakt genom korsningen",
          "Jag svänger höger i korsningen,\nstannar och backar rakt genom\nkorsningen",
          "Jag kör rakt fram i korsningen,\nstannar och backar runt hörn B"
        ],
        "images": [
          "assets/prov3/f11.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vilka veckodagar är högsta tillåtna\nhastighet 30 km/tim efter vägmärket\npå bilden?",
        "options": [
          "Alla dagar",
          "Söndagar",
          "Vardagar utom dag före sön-\noch helgdag",
          "Lördagar"
        ],
        "images": [
          "assets/prov3/Untitled2-5.jpg",
          "assets/prov3/100px-1_2_651.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Påverkar ditt körsätt hur mycket\ndäcken slits?",
        "options": [
          "Nej",
          "Ja, om jag kör i hög hastighet\nslits däcken mindre än i låg\nhastighet",
          "Ja, om jag kör kraftiga\naccelerationer och inbromsningar\nökar däckslitaget"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad innebär vägmärket för dig?",
        "options": [
          "Jag har väjningsplikt mot all\nbusstrafik efter vägmärket",
          "Jag får   inte          forsätta rakt fram",
          "Jag får fortsätta rakt fram bara\nom jag tänker parkera",
          "Högsta hastighet efter\nvägmärket är 30 km/tim"
        ],
        "images": [
          "assets/prov3/f14.jpg",
          "assets/prov3/100px-1_3_11.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Är omkörning tillåten i någon av\nsituationen på bilderna?",
        "options": [
          "Ja, i situation A",
          "Ja, i situation B",
          "Ja, i situation C",
          "Ja, i situation D"
        ],
        "images": [
          "assets/prov3/f15.jpg",
          "assets/prov3/100px-1_1_31.svg.png",
          "assets/prov3/100px-1_4_28.svg.png"
        ],
        "correct": 3
      },
      {
        "text": "Vilken information om vägsträckan\nfår du av vägmärkerna?",
        "options": [
          "Jag närmar mig ett\növergångsställe med trafiksignal",
          "Jag närmar mig ett obevakat\növergångsställe vid en skola",
          "Här finns ofta rullstolsburna\npersoner",
          "Här finns ofta barn med nedsatt\nhörsel eller syn"
        ],
        "images": [
          "assets/prov3/f16.jpg",
          "assets/prov3/100px-1_1_41.svg.png",
          "assets/prov3/11_20.png",
          "assets/prov3/11_21.png"
        ],
        "correct": 3
      },
      {
        "text": "Det är septemper månad\n\ndet börjar snöa kraftigt och det är\nminusgrader så snön ligger kvar på\nvägen.\n\nFår du ha dubbdäck på bilen när du kör?",
        "options": [
          "Ja, efter tillstånd av Trafikverket",
          "Ja, efter tillstånd av Polisen",
          "Ja, eftersom det är vinterväglag"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du är på väg mot Fleninge.\n\nPå vilken bild anger vägvisningen att\nnästa sidoväg leder till Fleninge?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C"
        ],
        "images": [
          "assets/prov3/f18.jpg",
          "assets/prov3/f18-1.jpg",
          "assets/prov3/FLEN.png",
          "assets/prov3/100px-1_9_2_5.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Vilket alternativ är exampel på\ndefensiv körning?",
        "options": [
          "Jag kör långsamt i alla\nsituationer",
          "Jag är hela tiden beredd att\nreagera på de situationer som\nuppstår",
          "Jag lämnar alltid företräde i\nkorsningar",
          "Jag kör ........."
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vad ska du göra när polisen ger det\nhar tecknet?",
        "options": [
          "Följa efter och stanna bakom\npolisbilen när den stannar",
          "Svänga till höger i nästa\nkorsning",
          "Följa efter och sedan köra vidare\nnär polisbilen stannar",
          "Stanna omedelbart intill\nvägkanten"
        ],
        "images": [
          "assets/prov3/f19.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du kör på en väg med omkörningsförbud och heldragen kantlinje.Du ser att föraren i bilen bakom vill köra om dig.\n\nHur ska du göra?",
        "options": [
          "Jag placerar bilen intill kantlinjen\nför att underlätta omkörningen",
          "Jag ökar hastigheten för att\nförhindra omkörningen",
          "Jag placerar bilen intill mittlinjen\nför att markera att det är\nolämpligt att köra om"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken av bilderna vissar en anordning\nsom kan vara uppsatt vid en avfart?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C",
          "Bild D"
        ],
        "images": [
          "assets/prov3/200px-7_1_3.svg.png",
          "assets/prov3/60px-7_1_5.svg.png",
          "assets/prov3/pil.jpg",
          "assets/prov3/lin.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilka regler gäller för last som\nskjuter ut                        1 meter\nframför fordonet?",
        "options": [
          "Den ska alltid märkas ut",
          "Den behöver aldrig märkas ut",
          "Den behöver inte märkas ut om\nden syns tydligt för andra\ntrafikanter"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Måste du köra ut på vägrenen för\natt underlätta en omkörning?",
        "options": [
          "Nej, men jag får göra det om det\nkan ske utan risk",
          "Ja, om jag skymmer sikten för\nbakomvarande",
          "Ja, om vägrenen är bred nog"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Han måste göra om enbart\nkörprov och kunskapsprov",
        "options": [
          "Han får tillbaka körkortet utan\nprov om det har varit återkallat\nkortare tid än 1 år",
          "Han måste göra om enbart\nkörprovet",
          "Han måste göra om enbart\nriskutbildningen",
          "Han måste göra om\nriskutbildningen, kunskapsprov och\nkörprovet"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Är det tillåtet att köra om fordonet\nframför dig i den här situationen?",
        "options": [
          "Ja, om jag hinner påbörja\nomkörningen innan den\nheldragna linjen börjar",
          "Ja, eftersom det är ett\nlångsamtgående fordon",
          "Ja, eftersom det inte finns någon\nmötande trafik",
          "Nej"
        ],
        "images": [
          "assets/prov3/f26.jpg"
        ],
        "correct": 3
      },
      {
        "text": "När intradet körförbud för den här\nbilen om den inte har\nkontrolbesiktats i tid?",
        "options": [
          "1 mars",
          "1 april",
          "1 maj",
          "1 juni"
        ],
        "images": [
          "assets/prov3/F27.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du upptäcker under körning att\nkontrollampan med den här\nsymbolen tänds.\n\nVad betyder det?",
        "options": [
          "Batteriet laddas inte tillräckligt",
          "Batteriet är överhettat",
          "Det har blivit kortslutning i\nnågon elkrets"
        ],
        "images": [
          "assets/prov3/F28.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska bogsera en annan bil\n\nHur stort får avståndet mellan\nfordonen högst vara om bogserlinan\nsaknar utmärkring?",
        "options": [
          "2 meter",
          "3 meter",
          "4 meter",
          "5 meter"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken typ av väg anger vägvisare\nmot Stockholm?",
        "options": [
          "Motorväg",
          "Motortrafikled",
          "Enskild väg"
        ],
        "images": [
          "assets/prov3/f30.jpg",
          "assets/prov3/115px-1_2_50.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Får du i nårga av de här\nsituationerna överskrida den\nlängsgående heldragna linjen?",
        "options": [
          "Ja, men enbart i A och B",
          "Ja, men enbart i A och C",
          "Ja, men enbart i B och C",
          "Ja, i samtliga situationer"
        ],
        "images": [
          "assets/prov3/4_22.jpg",
          "assets/prov3/5_104.jpg",
          "assets/prov3/4_14.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör på landsväg. En ambulans\nnärmar sig bakifrån.\n\nNär ska du lämna fri väg?",
        "options": [
          "När roterande blått ljus eller\nslrener är påslagna",
          "Enbart när hastigheten är\nbegränsad till 70 km/tim eller\nlägre",
          "Enbart när det finns två eller\nflera körfält på min körbana",
          "Alltid"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "På väg mot Nyköping upptäcker du\natt vägen är avstängd p.g.a.\nVägarbete.\n\nVilken vägvisare sätts upp för att\nvisa lämplig förbifart till Nyköping?",
        "options": [
          "Vägvisare 1",
          "Vägvisare  2",
          "Vägvisare 3",
          "Vägvisare 4"
        ],
        "images": [
          "assets/prov3/f33.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad är det                       du kan göra\nsom bilförare för att risken för\nolyckor ska bli så liten som möjligt?",
        "options": [
          "Anpassa hastigheten efter\nsituationen och alltid vara nykter\noch utvilad när jag  kör",
          "Serva bilen regelbundet och köra\nmed lagliga däck",
          "Vara spedlit uppmärksam på\nalla vägmärken och\nvägmarkeringar",
          "Följa trafikrytmen och ha\nuppmärksamheten långt fram"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska svänga till höger i\nkorsningen. Du har några bilar\nbakom dig.\n\nVar bör du placera bilen?",
        "options": [
          "Mitt i körfältet",
          "Intill kantlinjen",
          "På vägrenen"
        ],
        "images": [
          "assets/prov3/f34.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Varför får man         köra i trafiken\nmed en bil som ser ut så här?",
        "options": [
          "Snön kan frysa fast och orsaka\natt fordonet inte fungerar\ntillfredsställande",
          "Bilen drar mer bränsle då snön\npå taket ger ett stort\nluftmotstånd",
          "Bland annat för att snön på bilen\nkan falla av och utgöra fara för\nandra"
        ],
        "images": [
          "assets/prov3/f36.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilken typ av bilar placeras i\nmiljöklass",
        "options": [
          "Bilar som drivs med enbart\nelektridtet från batterier",
          "Bilar som kan drivas med\nantingen bensin eller etanol",
          "Bilar som kan drivas med\nantingen elektridtet från\nbatterier eller förbränningsmotor",
          "Bilar som kan drivas med\nantingen bensin eller dieselolja"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Påverkar trafiksäkerheten av att\nvissa förare          respekterar\nhastighetsgränserna?",
        "options": [
          "Ja, men enbart när\nhastighetsgränserna överträds\npå vägar utan mitträcke",
          "Ja, men enbart när\nhastighetsgränserna överträds i\ntätort",
          "Nej, det har ingen betydelse",
          "Ja, fler riskerar att dödas eller\nskadas svårt"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du kör i tunneln på bilden.\n\nPlötsligt blir det köbildning och\nlängre fram kan du se att en lastbil\nbrinnar under kraftig rökutveckling.\n\nVad bör du göra?",
        "options": [
          "Lämna bilen med nycklarna i\ntändningslåset och ta mig ut ur\ntunneln",
          "Försöka backa ut ur tunneln och\nvarna andra",
          "Försöka köra förbi den\nbrinnande lastbilen ut ur tunneln",
          "Kalla på hjälp och stanna kvar i\nbilen"
        ],
        "images": [
          "assets/prov3/f39.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad kan du göra för att\nbränsleförbrukningen             ska öka?",
        "options": [
          "Jag ser till att min bil får\nregelbunden service",
          "Jag undviker att köra på den\nhögsta växeln längre än\nnödvändigt",
          "Jag undviker att motorbromsa\nföre korsningar"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Det är mörkt och du ska köra på\nlandsvägar.\n\nVilken bild visar var du ska ställa\nljusreglaget?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C"
        ],
        "images": [
          "assets/prov3/f41.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du upptäcker fåglarna vid vänster\nvägkant.\n\nHur bör du göra?",
        "options": [
          "Jag ökar hastigheten och\nhoppas hinna passera innan\nfåglarna förflyttar sig",
          "Jag behåller hastigheten,\neftersom en kollision med en\nfågel inte räknas som viltolycka",
          "Jag försöker att undvika att köra\npå fåglarna, om det inte innebär\nfara för övrig trafik"
        ],
        "images": [
          "assets/prov3/f42.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska förtsätta rakt fram\n\nhur ska du uppträda i korsningen\nsedan du har stannat vid\nstopplinjen?",
        "options": [
          "Högerregeln gäller och därför har\njag väjningsplikt mot trafik från\nhöger",
          "Jag har väjningsplikt mot trafik\nfrån både vänster och höger",
          "Jag måste samspela med övriga\nförare i korsningen om vem som\nska köra först"
        ],
        "images": [
          "assets/prov3/f43.jpg",
          "assets/prov3/115px-1_2_50.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Vad innebar vägmärket bland annat?",
        "options": [
          "Enbart förare med särskilt\ntillstånd får köra på gatan",
          "Det är tillåtet att parkera enbart\npå särskilt anordnad\nparkeringsplats",
          "Det är förbjudet att köra bil med\ntillkopplad släpvagn",
          "Högsta tillåtna hastighet är\n30 km/tim"
        ],
        "images": [
          "assets/prov3/100px-1_4_9.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Du ska svänga in på en huvudled där\nhögsta tillåtna hastighet är\n90 km/tim\n\nVad ska du            göra efter\nsvängen?",
        "options": [
          "Accelerera försiktigt för att inte\nskada miljön",
          "Vara särskilt uppmärksam bakåt\noch accelerera",
          "Använda vägrenen som\naccelerationsfält"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilken är den vanligaste orsäken till\natt trafikolyckor inträffar?",
        "options": [
          "Att förare gör misstag",
          "Att vädret är dåligt",
          "Att vägskyltningen är felaktig",
          "Att vägen är fel utformad"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Tänk dig att situationerna på\nbilderna inträffs när du kör i\nmörker\n\nI vilken situation är det\natt fortsätta med helljus?",
        "options": [
          "I situation A",
          "I situation B",
          "I situation C",
          "I situation D"
        ],
        "images": [
          "assets/prov3/f47.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Längre fram på motorvägen finns\ntre körfält.\n\nVilket bör du normalt använda?",
        "options": [
          "Körfältet mitt i, eftersom det\nhögra körfältet är avsett för\nlastbilar och bussar",
          "Körfältet längst till höger",
          "Körfältet längst till vänster,\neftersom de två högra körfälten\när avsedda för lastbilar och\nbussar"
        ],
        "images": [
          "assets/prov3/f48.jpg",
          "assets/prov3/pil_1.jpg",
          "assets/prov3/pil2.jpg"
        ],
        "correct": 1
      },
      {
        "text": "I vilken av de här situationerna är\ndet                 att bedöma ett annat\nfordons hastighet?",
        "options": [
          "Bild A, ett framförvarande\nfordon",
          "Bild B, ett mötande fordon",
          "Bild C, ett omkörande fordon",
          "Bild D, ett fordon på en\nkorsande väg"
        ],
        "images": [
          "assets/prov3/f49.jpg"
        ],
        "correct": 1
      },
      {
        "text": "En mörknatt får du fel på bilen och\nblirtvingen att stanna på vägrenen.\n\nDu befinner dig på en väg där\nhastigheten är begränsad till\n70 km/tim.\n\nHur bör du göra för att varna andra\ntrafikanter?",
        "options": [
          "Sätta ut varningstriangel\n10 - 20 meter bakom bilen och\ntända parkeringsljuset",
          "Sätta ut varningstriangel\n10 - 20 meter bakom bilen och\ntända helljuset",
          "Sätta ut varningstriangel\n100 - 200 meter bakom bilen och\ntända helljuset"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du kör på en enskild väg och  vägen\nsom anslutet är också enskild\n\nska högerregeln tillämpas i\nkorsningen?",
        "options": [
          "Nej, eftersom den anslutande\nvägen är mindre",
          "Nej, ömsesidig hänsyn gäller i\nkorsningen",
          "Ja",
          "Nej, högerregeln gäller inte på\ngrusvägar"
        ],
        "images": [
          "assets/prov3/f51.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Ett ekonomisk körsätt innebär att\nman utnyttjar bilens rörelseenergi\noch har lång planning.\n\nÖkar bränsleförbrukningen om du\nbromsar i onödan?",
        "options": [
          "Ja, inbromsningar innebär att jag\ninte kan ta vara på den\nrörelseenergi jag har",
          "Ja, men endast vid\ninbromsningar som görs med\nhjälp av motorbromsen",
          "Nej, rörelseenergin påverkas inte\nav inbromsningar",
          "Ja, men endast\nvid inbromsningar som görs i\nutförsbackar"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du parkerar på den här parkeringen\nen vardag klockan 09.15 och du ska\nuträtta ärenden som pågår till cirka\nklockan 11.00.\n\nVilket klockslag ska du ställa\nparkeringsskivan på?",
        "options": [
          "Klockan 08.00",
          "Klockan 09.00",
          "Klockan 09.30",
          "Klockan 11.00"
        ],
        "images": [
          "assets/prov3/f53.jpg",
          "assets/prov3/100px-1_4_31.svg.png",
          "assets/prov3/p1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Öka farten och köra över\nspärrområdet för att komma\ntillbaka till körfältet rakt fram",
        "options": [
          "Bromsa kraftigt och försiktigt\nköra tillbaka till körfältet rakt\nfram",
          "Backa för att komma tillbaka till\nkörfältet rakt fram.",
          "Fortsätta på avfarten även om\ndet innebär att jag måste köra\nen omväg"
        ],
        "images": [
          "assets/prov3/8_15.jpg",
          "assets/prov3/7_1_5.png"
        ],
        "correct": 2
      },
      {
        "text": "Hur många procent av alla bilresor är kortare än 5 kilometer?",
        "options": [
          "15 procent",
          "45 procent",
          "75 procent"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska passera järnvägkorsningen\noch signalen visar vitt blinkande ljus.\n\nVad innbär signalen?",
        "options": [
          "Att signalen strax växlar till rött\nljus",
          "Att jag riskfritt kan passera\njärnvägskorsningen",
          "Att jag bör kontrollera att inget\ntåg kommer innan jag passerar\nkorsningen",
          "Att ett tåg just har passerat och\njag kan passera utan risk"
        ],
        "images": [
          "assets/prov3/f56.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du måste meddela polisen om du\nkört på och skadat ett av de här djuren.\n\nVilket av dem?",
        "options": [
          "Vildsvin",
          "Grävling",
          "Räv",
          "kanin"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Det finns bilförare som struntar i att\nanvända bilbältet\n\nPåverkar det trafiksäkerheten?",
        "options": [
          "Nej, inte alls",
          "Nej, eftersom de flesta bilar har\nkrockkudde idag",
          "Ja, fler riskerar att skadas svårt\neller dö i trafiken"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kör fram längs vägen i cirka\n50 km/tim.\n\nVad är det bästa att göra i den här\nsituationen?",
        "options": [
          "Bromsa och köra vidare med låg\nhastighet när älgen passerat\nvägen",
          "Styra undan och försöka köra\nframför älgen",
          "Använda signalhornet och tuta\nupprepade gånger för att\nskrämma bort älgen",
          "Behålla min hastighet och\nförsöka passera älgen innan den\nkommer upp på vägen"
        ],
        "images": [
          "assets/prov3/f59.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad avgör hur hög fordonsskatten\nblir på en fabriksny bil?",
        "options": [
          "Bilens utsläpp av kolväten",
          "Bilens totalvikt",
          "Bilens utsläpp av koldioxid"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad innebär begreppet\nvattenplaning?",
        "options": [
          "Vatten på bromsarna försämrar\nbromseffekten",
          "Hjulen låser sig när man bromsar",
          "Bilen tappar kontakten med\nvägbanan och blir omöjlig att\nstyra"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du har varit inblandad i en kollision\nmed ett annat fordon och med\nlindriga personskador som följd.\n\nVem bör lämpligen fylla i blanketten\npå bilden?",
        "options": [
          "Föraren som vållade olyckan",
          "De både inblandade förarna",
          "De personer som blev skadade\nvid olyckan",
          "Polisen"
        ],
        "images": [
          "assets/prov3/f62.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du ska köra en sträcka på 60 mil,\nhuvudsaldigen på motorväg\n\nbör du som oerfaren förare planera\nin några pauser?",
        "options": [
          "Nej",
          "Ja, en paus varje timme",
          "Ja, en paus efter ungefär hlava\nsträcka"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska passera bussen som är\nungefär 18 meter lång. När du\nbefiner dig vid bussens bakanda\nspringer ett barn ut framför bussen.\n\nVilken är den högsta hastighet du\nkan ha om du ska ha möjlighet att\nstanna?",
        "options": [
          "20 km/tim",
          "30 km/tim",
          "50 km/tim",
          "60 km/tim"
        ],
        "images": [
          "assets/prov3/26.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Bilen du kör har krockkudden\ninkopplad på passagerarplats\nfram.\n\nVilket är det säkraste sättet att\nplacera en bilbarnstol?",
        "options": [
          "I framsätet, så att barnet sitter\nbakåtvänt eftersom krockkudden\ndå kopplas ur med automatik",
          "I baksätet, så att barnet sitter\nbakåtvänt",
          "I framsätet, så att barnet sitter\nframåtvänt",
          "I baksätet, så att barnet sitter\nframåtvänt"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Hur kan däcken påverka\nbränsleförbrukningen i bilen?",
        "options": [
          "Högt lufttryck i däcken ökar\nförbrukningen",
          "Lågt lufttryck i däcken ökar\nförbrukningen",
          "Lufttrycket i däcken påverkar\n             förbrukningen",
          "Breda däck minskar\nförbrukningen"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vad gäller i den här situationen?",
        "options": [
          "Jag bör hålla låg fart och hålla\navstånd",
          "Mötande trafik har väjningsplikt",
          "Jag har väjningsplikt mot\nmötande trafik"
        ],
        "images": [
          "assets/prov3/f67.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Varför hamnar oerfarna förare ofta\ni farliga situationer än erfarna\nförare?xxxxx",
        "options": [
          "De är sämre på att förutse faror",
          "De har sämre reaktionsförmåga",
          "De har sämre regelkunskap"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad gäller när en militärplois ger\nstopptecken?",
        "options": [
          "Det gäller civila fordon enbart när de befinner sig på militärt\nområde",
          "Det gäller enbart militära fordon\nsom deltar i en militärövning",
          "Det gäller alla fordon, även de\nsom inte deltar i någon\nmilitärövning"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "När är risken för fartblindhet stort?",
        "options": [
          "I dimma",
          "I tät trafik inom tättbebyggt\nområde",
          "I mörker",
          "Vid långa sträckor i hög\nhastighet"
        ],
        "images": [
          "assets/prov3/01_1.jpg"
        ],
        "correct": 3
      }
    ]
  },
  {
    "id": 4,
    "title": "Svenska Prov 4",
    "questions": [
      {
        "text": "Vad innebär polisens tecken?",
        "options": [
          "Både jag och mötande får köra,\nmen långsamt",
          "Jag ska stanna men mötande får\nköra",
          "Jag får föra men mötande ska\nstanna",
          "Både jag och mötande ska\nstanna"
        ],
        "images": [
          "assets/prov4/1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du möter en bil när du kör på en\nländsväg.\nDet är mörkt och vägen saknar\nbelysning\n\nvart ska du rikta blicken för att inte\nbli bländad och för att göra mötet\nsäkrare?",
        "options": [
          "Till vänster om strålkastarna på\nden mötande bilen",
          "Mitt emellan strålkastarna på den\nmötande bilen",
          "Långt fram ut med höger vägkant",
          "I backspegeln"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad påverkar mest hur stort våldet\nblir mot kroppen vid en kollision?",
        "options": [
          "Väglaget",
          "Bilens storlek",
          "Hastigheten",
          "Reaktionstiden"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Får du vid en omkörning överskrida\nmittlinjen med vänster hjulpar\nsamtidigt som du har mötande\ntrafik?",
        "options": [
          "Ja, om det fordon jag ska köra\nförbi delvis kör på vägrenen",
          "Nej, inte ens om mötande\nfordon delvis kör på vägrenen",
          "Ja, om mötande fordon delvis\nkör på vägrenen"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vad bör                          avgöra hur\nfort du kör när du passerar\njärnvägskorsningen på bilden?",
        "options": [
          "Sikten vid järnvägskorsningen",
          "Säkerhetsanordningen vid\njärnvägskorsningen",
          "Hastighetsbegränsningen på\nvägen"
        ],
        "images": [
          "assets/prov4/5.jpg",
          "assets/prov4/80px-1_1_34_1.svg_1.png"
        ],
        "correct": 0
      },
      {
        "text": "Vad är fördelen med att använda\nbiobränslen som drivmedel i bilen?",
        "options": [
          "De bidrar bara i liten grad till\nväxthuseffekten",
          "De bidrar ingen koldioxid",
          "Tillgången på biobränslen är\nobegränsad"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Nya bilar blir allt säkrare och\nutrustas med fler säkerhetssystem,\ntill exampel ABS-bromsar och\nantisladdsystem.\n\nKan detta på något sätt vara\nnegativt för säkerheten?",
        "options": [
          "Ja, det kan bli svårare att\nmanövrera bilen",
          "Ja, det kan medföra att endel\nförare tar större risker",
          "Nej, säkerhetssystem i bilar är\nenbart positivt",
          "Nej, det gör att alla förare kan\nkoncentrera sig mer på trafiken"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du kör i 80 km/ tim och ska fortsätta\nvägen rakt fram.\n\nHur ska du uppträda med tänke på\nden stillästående bilen?",
        "options": [
          "Jag fortsätter köra utan att göra\nnågot särskilt, eftersom bilen\nstår utanför körbanan",
          "Jag ökar farten för att snabbt\nkomma förbi",
          "Jag minskar farten och passerar\nbilen med extra marginal i sidled",
          "Jag ger ljudsignal för att\npersonerna vid bilen ska\nuppmärksamma mig, men\nforsätter i övrigt som förut"
        ],
        "images": [
          "assets/prov4/8.jpg"
        ],
        "correct": 2
      },
      {
        "text": "En förare har kört i tre timmar och\nhar ungefär två timmar kvar till\nfärdmålet.\n\nTröttheten kommer smygande.\nPlötsligtnickar han till och förstår att\nhan kanske är på väg att somna.\n\nVad är det                han då kan göra?",
        "options": [
          "Öppna fönstret",
          "Dricka mycket kaffe",
          "Stanna för att sova",
          "Ta en kort rast"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "En vän ber dig skjutsa en fem årig\nflicka en längre sträcka. Flickan är\n130 cm lång.\n\nDu har ingen bilbarnstol, bältesstol\neller kudde.\n\nFår du skjutsa flickan?",
        "options": [
          "Nej",
          "Ja, i fram- eller baksätet, med\nbilbältet på",
          "Ja, i framsätet med bilbältet på",
          "Ja, i baksätet med bilbältet på"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Kamratarna till en ung man visar\ntydligt att de inte accepterar att han\nkör bil när han är onykter.\n\nDen unge mannen påverkas av\nderas åsikter och kör därför aldrig\nmer bil när han är berusad.\n\nVad kallas detta?",
        "options": [
          "Sannolikhetsinlämning",
          "Grupptryck",
          "Bortträngning",
          "Imitationsinlämning"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vad gäller för att ett\nutryckningsfordon ska på kalla fri\nväg?",
        "options": [
          "Om fordonet har hög fart\nbehöver inte larmanordningar\nvara påslagna",
          "Både ljud- och\nljusanordningarna måste vara\npåslagna samtidigt",
          "Bilnkande blått och rött ljus\nframtill ska vara påslaget",
          "Det räcker att antingen ljud-\neller ljusanordningen är påslagen"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Vad anger varningsmärket?",
        "options": [
          "Övergångsställe",
          "vägarbete",
          "Avsmalnande väg",
          "Farthinder"
        ],
        "images": [
          "assets/prov4/13.jpg",
          "assets/prov4/100px-A9_1.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Varningslampan för ABS-systemet\ntänds under färd.\n\nViket följd kan detta få för din\nförsätta körning?",
        "options": [
          "Jag får ojämn bromsverkan\nnästa gång jag bromsar",
          "Bromsarna är ur funktion",
          "Det finns riskatt hjulen låser sig\nom jag bromsar hårt",
          "Jag måste tryck hårdare på\nbromspedalen nästa gång jag\nbromsar"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du ska köra mot Tågeborg.\n\nMåste du ge tecken med\nkörriktningsvisare vid något tillfälle?",
        "options": [
          "Nej",
          "Ja, till höger när jag lämnar\ncirkulationsplatsen",
          "Ja, till vänster innan jag kör in i\ncirkulationsplatsen"
        ],
        "images": [
          "assets/prov4/15.jpg",
          "assets/prov4/T.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Ja, men endast om det bildats\nkö bakom mig",
        "options": [
          "Ja, eftersom det bara är en enda\nbil",
          "Ja, eftersom hastighets-\nbegränsningen är 90 km/tim",
          "Nej",
          "Ja, men endast om jag ska köra\nin på nästa avfart"
        ],
        "images": [
          "assets/prov4/16.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Kan samåkning i personbil innebär\natt antalet olyckor minskar?",
        "options": [
          "Nej, fler passagerare innebär att\nbilarna får ändrade\nköregenskaper, vilket leder till\nfler olyckor",
          "Ja, med färre bilar på vägarna\nblir det sannolikt färre olyckor",
          "Nej, passagerarna stör föraren,\nvilket leder till fler olyckor"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilket av följande påståenden är riktigt?",
        "options": [
          "Om jag fortsätter i det högra körfältet så måste jag svänga till höger mot LÄNNA N",
          "Eftersom vägmarkeringar saknas är vägen inte uppdelad i körfält.",
          "Om jag placerar mig i det vänstra körfältet så måste jag svänga till vänster mot NYNÄSHAMN",
          "Om jag ska fortsätta mot E4 så kan jag stanna kvar i det högra körfältet."
        ],
        "images": [
          "assets/prov4/S2_60.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Du kör bil med tillkopplad släpvägn\n\nVad kan för lågt kultryck innebära?",
        "options": [
          "Köregenskaperna kan försämras\nväsentligt",
          "Bilens halvljus kan bli bländade",
          "Slitaget på bilens bakdäck kan\nöka"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du ska koppla en släpvagn till din\npersonbil men är osäker på om det\när tillåtet.\n\nVar finns de uppgifter du behöver\nkontrollera?",
        "options": [
          "I fordonens registreringsbevis",
          "I bilens instruktionsbok",
          "På dragbalken",
          "I försäkrningsbeviset"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Får du i något fall köra om till höger\nstrax före en korsning?",
        "options": [
          "Nej, jag får aldrig köra omtill\nhöger",
          "Nej, jag får aldrig köra om strax\nföre en korsning",
          "Ja, när föraren i framförvarande\nfordon visar tecken att svänga\ntill vänster"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du har parkerat din bil i en kraftig\nnedförsbäcka intill en trottoarkan.\n\nVilken              säkerhetsåtgärd kan du\nvidtaga för att bilen           ska\nkomma i rullning?",
        "options": [
          "Jag vrider hjulen bort från\ntrottoarkanten",
          "Jag vrider hjulen in mot\ntrottoarkanten",
          "Jag försäker att ha minst ett hjul\nuppe på trottoarkanten"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilken linje ska du följa i den här\nsituationen?",
        "options": [
          "Jag kan välja att följa antlingen\nden vita eller den gula linjen",
          "Den gula",
          "Den vita"
        ],
        "images": [
          "assets/prov4/23.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Är det du eller den mötande som\nbör stanna vid mötesplatsen om\nutrymmet inte räcker för att mötas?",
        "options": [
          "Jag bör stanna vid vägens\nvänster sida, eftersom jag har\nkommit först",
          "Den mötande, eftersom han har\nvägmärket på sin sida",
          "Jag bör stanna vid vägens högra\nsida, eftersom jag har kommit\nförst"
        ],
        "images": [
          "assets/prov4/24.jpg",
          "assets/prov4/100px-1_4_29.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Vid en bromskontroll ska man\ntrampa hårt på bromspedalen.\n\nVad ska då hända med pedalen om\nfärdbromsen fungerar?",
        "options": [
          "Den ska stanna halvvägs och\nge ett stumt motstånd",
          "Den ska sjunka långsamt",
          "Den ska stanna långt ned",
          "Den ska stanna halvvägs och\nkännas fjädrande"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Hur bör du köra för att körningen\nska bli så miljövänlig som möjligt när du kör på landsväg?",
        "options": [
          "Jag kör i jämn fart på låga växlar",
          "Jag kör med snabba\naccelerationer och full gas",
          "Jag kör på låga växlar och\nundviker att stanna i onödan",
          "Jag kör i jämn fart och undviker\natt stanna i onädan"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Hur stor andel av bilförarna som\nomkommer i vägtrafiken är män",
        "options": [
          "Cirka 25 procent",
          "Cirka 50 procent",
          "Cirka 75 procent",
          "Cirka 95 procent"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du kommer tillen olycksplats. En\nperson blöder kraftigt från ett sår i\narmen.\n\nVad bör du försöka göra?",
        "options": [
          "Pressa ihop såret och lägga\ntryckförband",
          "Lägga personnen i stabilt\n( framstupa) sidoläga",
          "Lägga en filt över den skadade",
          "Se till att personen ligger ned\noch håller armen lågt"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken högsta tillåtna hastighet gäller\nför närmaste framförvarande fordon?",
        "options": [
          "110 km/tim",
          "90 km/tim",
          "80 km/tim",
          "70 km/tim"
        ],
        "images": [
          "assets/prov4/17.jpg",
          "assets/prov4/1_4_1.png",
          "assets/prov4/100px-1_2_654.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Du ska montera dubbade vinterdäck\npå din personbil. Två av däckenär\nhelt nya och två har du använt ett\nper säsonger.\n\nVar bör du placera de bästa däcken\nför att minska risken för sladd?",
        "options": [
          "På framaxeln på alla typer av\nbilar",
          "På bakaxeln på alla typer av bilar",
          "På bakaxeln om bilen är\nframhjulsdriven och på\nframaxeln om bilen är\nbakhjulsdriven",
          "På framaxeln om bilen är\nframhjulsdriven och på bakaxeln\nom bilen är bakhjulsdriven"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du kommer till en vägkorsning där\ndet här vägmärket finns uppsatt.\n\nVad betyder vägmärket?",
        "options": [
          "Färdriktning vid tillfällig\nomledning av trafiken",
          "Jag måste svänga till höger",
          "Vägen till höger är privat",
          "Vägen till höger är enskild"
        ],
        "images": [
          "assets/prov4/31.jpg"
        ],
        "correct": 0
      },
      {
        "text": "På vilket sätt kan du            minska din\nnegativa påverkan på miljön?",
        "options": [
          "Jag använder bara bilen när jag\nska kortare sträckor",
          "Jag använder motorvärmare till\nbilen året runt",
          "Jag undviker att använda\nsyntetisk motorolja i bilen",
          "Jag cyklar när jag ska kortare\nsträckor"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Är du                 att ge bussen\nmölighet att lämna hållpatsen och\nköra före dig i någon av\nsituationerna?",
        "options": [
          "Ja, men enbart i situation A",
          "Ja, men enbart i situation B",
          "Ja, i båda situationerna",
          "Nej"
        ],
        "images": [
          "assets/prov4/33.jpg",
          "assets/prov4/100px-1_2_652.svg.png",
          "assets/prov4/100px-1_2_653.svg.png",
          "assets/prov4/100px-1_4_5.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Du ska köra hem en släkting som\nbor där dettavägmärke finns\nuppsatt.\n\nFår du köra in på gatan?",
        "options": [
          "Ja, i högst 30 km/tim",
          "Ja, i gångfart",
          "Nej"
        ],
        "images": [
          "assets/prov4/1_4_12.png"
        ],
        "correct": 2
      },
      {
        "text": "Tresukundersregeln handlar om det\nminsta avstånd man bör ha till\nfordonet framför.\n\nPå vilket väglag gäller det?",
        "options": [
          "Torrt väglag",
          "Vinterväglag",
          "Alla typer av väglag"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Hur gör du för att visa de\nbakomvarande din avsikter när du\ntänker stanna?",
        "options": [
          "Jag bromsar i god tid före\nsituationen",
          "Jag intar bromsberedskap",
          "Jag väntar med inbromsningen\noch gör sedan ett markerat\nstop",
          "Jag använder mig av\nmotorbromsen"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Det är augusti månad ( bild A )\n\nVilket påstående är riktigt om när du\nfår stanna och parkera på en gata\ndär vägmärket på bild B är uppsatt?",
        "options": [
          "Det är tillåtet att parkera\nmåndagar kl.20.00",
          "Det är tillåtet att stanna\nlördagar kl.10.00",
          "Det är tillåtet att stanna\nonsdagar kl.10.00",
          "Det är tillåtet att parkera\nsöndagar kl.14.00"
        ],
        "images": [
          "assets/prov4/37_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilken av de här förarna är exampel\npå en mogen förare?",
        "options": [
          "En förare som tar ansvar och\nvisar hänsyn",
          "En förare som behärskar sitt\nfordon och som kan köra snabbt",
          "En förare som kan alla\ntrafikregler"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du har stannat för att låta en\ngående passera gatan.\n\nPå vilket sätt kan du undvika\nmissförstånd med den gående?",
        "options": [
          "Jag söker ögonkontakt med den\ngående",
          "Jag vinkar fram den gående",
          "Jag blinkar med ljuset för att\nuppmärksamma den gående på\natt jag väntar",
          "Jag tutar för att uppmärksamma\nden gående på att jag väntar"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken av dessa uppgifter finns på en\npersonbils registreringsbevis?",
        "options": [
          "Rekommenderat lufttryck i\ndäcken",
          "Rekommenderad glödlampstyp\ntill strålkastare",
          "Fordonets höjd",
          "Högsta totalvikt på en släpvagn\nsom får kopplas till bilen om\nföraren har B-körkort"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Värför måste du ha rörlig blick när\ndu kör bil?",
        "options": [
          "Därför att jag endast i en liten\ndel av mitt synfält kan bedöma\nhastighet och avstånd",
          "Därför att jag endast i en liten\ndel av mitt synfält kan upptäcka\nföremål som är i rörelse",
          "Därför att jag endast i en liten\ndel av mitt synfält kan se färger"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad kan följden bli om du ständigt\nkör med dimbakljuset tänt?",
        "options": [
          "Glödlampan kan överhettas",
          "Batteriet kan laddas ur",
          "Förare som kör bakom mig kan\nbli bländade"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vad innebär polisens tecken?",
        "options": [
          "Både jag och mötande ska\nstanna",
          "Jag ska stanna men mötande får\nköra",
          "Jag får köra men mötande ska\nstanna",
          "Både jag och mötande får köra,\nmen långsamt"
        ],
        "images": [
          "assets/prov4/44.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du närmar dig en lastbil som\nhar kört av vägen och håller på att\nbärgas.\n\nVad bör du göra när du passerar\nplatsen?",
        "options": [
          "Hålla låg hastighet och visa\nhänsyn mot de som befinner sig\npå eller invid vägen",
          "Blinka med helljuset för att varna\nmötande trafik",
          "Fortsätta förbi platsen i\noförändrad hastighet, eftersom\nolyckan har skett på mötande\nkörbana",
          "Använda varningsblinker och\nstanna"
        ],
        "images": [
          "assets/prov4/44-1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "I båda situationerna ska du fortsätta\nrakt fram i den första korsingen\n\nGäller högerregeln i någon av dem?",
        "options": [
          "Ja, men enbart i situation A",
          "Ja, men enbart i situation B",
          "Ja, i båda situationerna",
          "Nej"
        ],
        "images": [
          "assets/prov4/45a.jpg",
          "assets/prov4/45b.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Du har lastat brädor på takräcket på\ndin bil och dessa skjuter ut 50 cm\n            bilen\n\nBehöver du märka ut lasten när du\nkör i dagsljus?",
        "options": [
          "Ja,jag måste alltid märka ut last\nsom skjuter ut framför bilen",
          "Ja, om den utskjutande lasten är\nsvår att upptäcka för övriga\ntrafikanter",
          "Nej, jag behöver inte märka ut\nutskjutande last när jag kör i\ndagsljus",
          "Nej, det behövs aldrig när lasten\nskjuter ut mindre än\nen meter framför bilen"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du kör i 70 km/tim. Hjulen på bilens\nhögra sida hamnat utanför\nasfalkanten.\n\nHur bör du göra?",
        "options": [
          "Jag släpper gasen och styr\nförsiktigt upp på vägen",
          "Jag bromsar hårt och styr\nförsiktigt upp på vägen",
          "Jag behåller hastigheten och styr\nförsiktigt upp på vägen",
          "Jag bromsar mjukt och vrider\nkraftigt på ratten för att snabbt\nkomma upp på vägen"
        ],
        "images": [
          "assets/prov4/47.jpg"
        ],
        "correct": 0
      },
      {
        "text": "I vilken av situationerna är det\nstörst risk att du kan drabbas av\nfartblindhet?",
        "options": [
          "När jag lämnar motorvägen och\nkör in på avfarten",
          "När jag får möte med lastbilen\npå den smala vägen",
          "När jag ökar farten på\npåfartssträckan till motorvägen"
        ],
        "images": [
          "assets/prov4/48.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Är det tillåtet att använda\nregummerade däck(begagnade däck\nförsedda med ny slitbana) på\npersonbilar,lätta lastbilar och lätta\nsläpvagnar?",
        "options": [
          "Ja, på alla fordonen",
          "Nej, inte på något av fordonen",
          "Ja, men enbart på lätta lastbilar",
          "Ja, men enbart på lätta\nsläpvagnar"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilken är den vanligaste påföljden för\nden som kör bil och har något\nnarkotiskt ämne i blodet?",
        "options": [
          "Böter eller fängelse och återkallat\nkörkort",
          "Prövotiden på körkortet förlängs\nmed ett år",
          "Varning i körkortsregistret",
          "Återkallat körkort i högst\nen månad"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "En del personer söker efter äventyr\noch spänning i livet.\n\nHur brukar sådana personer bete\nsig när de kör bil?",
        "options": [
          "De tar större risker och visar\nmindre hänsyn än andra",
          "De följer alltid trafikreglerna\nkorrekt",
          "De samspelar tydligt med sina\nmedtrafikanter",
          "De planerar sin körning för att\nundvika kraftiga inbromsningar"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad innebär vägmärket?",
        "options": [
          "Privat väg",
          "Allmän väg",
          "Enskild väg"
        ],
        "images": [
          "assets/prov4/SKARP.png"
        ],
        "correct": 2
      },
      {
        "text": "Du ska tända enbart\nparkeringsljuset.\n\nVilken bild visar var du ska ställa\nljusreglaget?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C"
        ],
        "images": [
          "assets/prov4/53.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Att det inte är tillåtet med\ncykeltrafik efter vägmärket",
        "options": [
          "Att vägen strax övergår till\ncykelbana",
          "Att det ofta förekommer\nkorsande cykel-och mopedtrafik"
        ],
        "images": [
          "assets/prov4/54.jpg",
          "assets/prov4/100px-1_1_44.svg.png"
        ],
        "correct": 1
      },
      {
        "text": "Vilken bild visar en utrustning som\ndu är skyldig att ha med i bilen vid\nkörning?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C",
          "Bild D"
        ],
        "images": [
          "assets/prov4/55-1.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Vilkenär den högsta tillåtna\nhastigheten                tättbebyggt\nområde, om inget annat anges?",
        "options": [
          "60 km/tim",
          "70 km/tim",
          "80 km/tim",
          "90 km/tim"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Katalysatorer renar avgaserna från\nflera giftiga ämnen.\nMen ett ämne som bl.a. Bidrar till\nväxthuseffekten, renas avgaserna\n         från.\n\nVilket ämne är det?",
        "options": [
          "Kolväten",
          "Koldioxid",
          "Kväveoxid",
          "Svaveldioxid"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Hur långt måste det              vara\nmellan din bil och vägkorsning\nför att det ska vara tillåtet att parkera?",
        "options": [
          "8 meter",
          "10 meter",
          "12 meter",
          "30 meter"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Vilken olyckstyp leder till flest\ndödsolyckor?",
        "options": [
          "Upphinnandeolyckor",
          "Kollisionmellan fordon och tåg",
          "Viltolyckor",
          "Singelolyckor"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Det finns olika fordonsvikter.\n\nVad innebär begreppet \"bruttovikt\"?",
        "options": [
          "Vikten som samtliga hjul för över\ntill vägbanan",
          "Vikten som fordonets dragkrok\när konstruerad för att klara",
          "Vikten som en hjulaxel för över\ntill vägbanan"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vad innebär linjen mitt på vägen?",
        "options": [
          "Den förvarnar om heldragen linje\nlängre fram",
          "Den anger att högsta tillåtna\nhastighet är 70 km/tim",
          "Det är förbjudet att överskrida\nlinjen",
          "Den markerar körbanans mitt"
        ],
        "images": [
          "assets/prov4/61.jpg"
        ],
        "correct": 0
      },
      {
        "text": "Vilket av dessa drivmedel är\nförnybart?",
        "options": [
          "Drivmedlet i det svarta\npumphandtaget",
          "Drivmedlet i det blå\npumphandtaget",
          "Drivmedlet i det gröna\npumphandtaget"
        ],
        "images": [
          "assets/prov4/62.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Du har som förare blivit inblandad i\nen trafikolycka.\n\nMåste du uppge namn och adress,\nom någon annan inblandad i samma\nolycka frågar efter det?",
        "options": [
          "Ja, men enbart om jag har\nförorsakat olyckan",
          "Ja, alltid",
          "Nej, de uppgifterna måste jag\nendast uppge för polisen"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du ska svänga till höger i\nkorsningen.\n\nHur ska du göra?",
        "options": [
          "Jag får köra utan att stanna vid\nstopplinjen",
          "Jag får köra även om signalen\nvisar rött ljus,men jag måste\nförst stanna vid stopplinjen",
          "Jag ska stanna vid stopplinjen\noch får köra när signalen visar\ngrönt ljus"
        ],
        "images": [
          "assets/prov4/64.jpg",
          "assets/prov4/100px-1_2_53_2.svg.png"
        ],
        "correct": 2
      },
      {
        "text": "Vilken information ger skyltarna vid\nträden?",
        "options": [
          "Det finns hinder vid vägkanten-\nanpassa farten",
          "Omkörning är förbjuden",
          "Det är förbjudet att stanna",
          "Den anslutande vägen har\nväjningsplikt"
        ],
        "images": [
          "assets/prov4/65.jpg",
          "assets/prov4/35px-Markeringssk_C3_A4rm_sidohinder_2C_h_C3_B6ger.svg.png"
        ],
        "correct": 0
      },
      {
        "text": "Jag kontrollerar att hjulen\nlåser sig när jag bromsar hårt",
        "options": [
          "Jag startar motorn med\nbromspedalen nedtryckt och\nkontrollerar att pedalen\nsjunker",
          "Jag startar motorn med bromspedalen nedtryckt och\nkontrollerar att pedalen sjunker\nnågot",
          "Jag kontrollerar att det finns\ntillräckligt med bromsvätska",
          "Jag kontrollerar att hjulen låser\nsig när jag bromsar hårt"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 1
      },
      {
        "text": "Du kör på vägen på bilden.\n\nVid vilken temperatur har du\nförmodligen              väggrepp?",
        "options": [
          "-20 grader",
          "-10 grader",
          "0 grader"
        ],
        "images": [
          "assets/prov4/67.jpg"
        ],
        "correct": 2
      },
      {
        "text": "Reaktionstiden är avgörande i en\nkritisk situation.\n\nVilken av dessa orsaker kan göra att\nreaktionstiden förlängs betydligt?",
        "options": [
          "Halt väglag",
          "Bilens hastighet",
          "Bilen saknar ABS-bromsar",
          "Föraren är alkoholpåverkad"
        ],
        "images": [
          "assets/prov4/01_1.jpg"
        ],
        "correct": 3
      },
      {
        "text": "Älgen på bilden är cirka 60 meter\nframför dig när du upptäcker den.\nDu kör i 90 km/tim och bromsar hårt\nför att undvika en kollision.\n\nVilken fart har din bil när du är\nframme vid älgen?",
        "options": [
          "Cirka 10 km/tim",
          "Cirka 30 km/tim",
          "Cirka 60 km/tim",
          "Cirka 80 km/tim"
        ],
        "images": [
          "assets/prov4/69.jpg"
        ],
        "correct": 2
      },
      {
        "text": "På vilken av bilderna används\nbilbältet bäst för att skydda vid en\ntrafikolycka?",
        "options": [
          "Bild A",
          "Bild B",
          "Bild C"
        ],
        "images": [
          "assets/prov4/70.jpg"
        ],
        "correct": 2
      }
    ]
  }
];

window.PROVS = PROVS;
