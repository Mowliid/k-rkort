V27 - bakgrundsljud / låsskärm

Arabiska ljudet är riktig MP3 och kan fortsätta när mobilen låses.
Svensk AI-röst använder mobilens Web Speech/speechSynthesis. Den stoppas ofta av iPhone/Android när skärmen låses. Detta går inte att tvinga från en vanlig webbsida.

Ny lösning i v27:
- Appen provar först att spela svensk MP3 från mappen sv-audio/.
- Om svensk MP3 finns kan den fortsätta i låsskärm som vanlig ljudfil.
- Om svensk MP3 saknas faller appen tillbaka till AI-röst, som bara är säker när skärmen är på.

Filnamn:
001001.mp3 = Sura 1 vers 1
001002.mp3 = Sura 1 vers 2
002255.mp3 = Sura 2 vers 255
