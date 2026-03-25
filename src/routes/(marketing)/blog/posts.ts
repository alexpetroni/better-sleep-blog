export const blogInfo = {
  name: "Better Sleep Blog",
  description: "Ghid complet pentru un somn mai bun",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Blog posts imported from markdown articles
const blogPosts: BlogPost[] = [
  {
    title:
      "Glanda pineală nu știe că e soarele sau un telefon",
    description:
      "Retina ta conține celule care nu văd imagini, ci măsoară culoarea luminii, și reacționează la ecranul telefonului exact cum ar reacționa la soarele de amiază. Dacă te întrebi de ce adormi mai greu după o oră de scrolling, răspunsul e un lanț de reacții care începe în ochi și se termină într-o glandă cât un bob de orez din centrul creierului.",
    link: "/blog/lumina-albastra-melatonina",
    date: "2026-01-15",
  },
  {
    title:
      "Cortizolul crescut noaptea: de ce creierul tău decide că ora 3 dimineața e un moment bun să te trezească",
    description:
      "Cortizolul are un ritm precis pe parcursul a 24 de ore, cu un minim pe la miezul nopții care face somnul profund posibil. Dacă acel minim nu mai e chiar minim, creierul primește un semnal de \"e dimineață\" cu ore înainte de ceas, iar gândurile care apar imediat după nu sunt cauza trezirii, ci consecința ei.",
    link: "/blog/cortizolul-crescut-noaptea",
    date: "2026-01-16",
  },
  {
    title:
      "Problema glicemiei din spatele trezirilor nocturne pe care puțini o verifică",
    description:
      "Creierul arde 5-6 grame de glucoză pe oră chiar și în somn, iar ficatul funcționează ca un generator de rezervă care îl alimentează. Dacă generatorul rămâne fără combustibil pe la 2 dimineața, corpul eliberează adrenalină și cortizol ca să mobilizeze zahăr de urgență, iar trezirea vine cu transpirații și anxietate, nu cu foame.",
    link: "/blog/hipoglicemia-nocturna",
    date: "2026-01-18",
  },
  {
    title:
      "Progesteronul e sedativul pe care corpul ți-l retrage la fiecare 28 de zile",
    description:
      "Progesteronul produce un metabolit care se leagă de exact aceiași receptori din creier pe care îi vizează somnifere precum zolpidemul. Când nivelul lui scade brusc înainte de menstruație sau la menopauză, efectul seamănă cu o retragere de sedativ, iar somnul se deteriorează prin trei mecanisme distincte care se suprapun.",
    link: "/blog/dezechilibre-hormonale-femei",
    date: "2026-01-20",
  },
  {
    title: "Apneea de somn: de ce 8 ore în pat nu înseamnă 8 ore de somn",
    description:
      "Dacă dormi 7-8 ore și te trezești constant obosit, există o cauză care afectează 15-30% din bărbații adulți și care poate trece nediagnosticată ani de zile. Mecanismul e simplu: musculatura căilor respiratorii se relaxează în somn, respirația se oprește zeci sau sute de ori pe noapte, iar creierul intervine de fiecare dată cu o micro-trezire de care nu ești conștient.",
    link: "/blog/apneea-de-somn",
    date: "2026-01-21",
  },
  {
    title:
      "Acidul care urcă noaptea: de ce refluxul gastro-esofagian îți sabotează somnul tocmai când te culci",
    description:
      "Stomacul produce acid cu un pH între 1 și 3, suficient de puternic încât să dizolve un cui mic. Noaptea, trei mecanisme de protecție slăbesc simultan: gravitația nu mai ajută, saliva scade cu 80%, iar producția de acid atinge vârful circadian, exact între 22 și 2 dimineața.",
    link: "/blog/refluxul-gastro-esofagian",
    date: "2026-01-23",
  },
  {
    title:
      "Mersul la toaletă noaptea: ce stă de fapt în spatele nevoii care îți fragmentează somnul",
    description:
      "Un hormon numit vasopresină reduce în mod normal producția de urină pe timp de noapte cu aproape 50%. Dacă acest mecanism slăbește, sau dacă altceva crește volumul de urină nocturnă, vezica se umple înainte ca somnul să-și termine ciclurile. Iar cauzele depășesc cu mult cantitatea de apă băută seara.",
    link: "/blog/nicturie",
    date: "2026-01-25",
  },
  {
    title:
      "Durerea cronică și somnul: cum se hrănesc reciproc și unde poți interveni",
    description:
      "Somnul profund e faza în care corpul repară țesuturi, reduce inflamația și recalibrează pragul de durere. E exact ceea ce o persoană cu durere cronică are cel mai mult nevoie, și totuși durerea e unul dintre cele mai eficiente perturbatoare ale acestei faze. Trei nopți de somn fragmentat sunt suficiente ca pragul de durere să scadă cu 25% chiar și la o persoană sănătoasă.",
    link: "/blog/durerea-cronica-somnul",
    date: "2026-01-27",
  },
  {
    title:
      "Medicamentele care îți fură somnul: ce iei zi de zi și cum afectează ce se întâmplă noaptea",
    description:
      "Beta-blocantele pot suprima melatonina nocturnă cu până la 80%. Antidepresivele SSRI cresc mișcările involuntare ale picioarelor în somn la un sfert din pacienți. Dacă iei un medicament zilnic și dormi prost, legătura merită verificată, pentru că 10-15% din cazurile de insomnie cronică au o componentă medicamentoasă directă.",
    link: "/blog/medicamentele-care-fura-somnul",
    date: "2026-01-28",
  },
  {
    title:
      "Temperatura camerei de dormit: de ce 18 grade fac mai mult pentru somnul tău decât crezi",
    description:
      "Ca să inițieze somnul, corpul face ceva contraintuitiv: încălzește mâinile și picioarele ca să disipeze căldura din interior. Dacă dormitorul e prea cald, căldura nu are unde să se ducă, temperatura centrală nu scade, iar creierul nu primește semnalul termic că e noapte. Gradul de vasodilatație al extremităților e un predictor al adormirii mai puternic decât nivelul de melatonină.",
    link: "/blog/temperatura-camerei",
    date: "2026-01-30",
  },
  {
    title: "Zgomotul și Poluarea Sonoră Nocturnă",
    description:
      "Creierul nu își închide urechile când adormi. Fiecare sunet din mediu e evaluat, filtrat și procesat, chiar dacă dimineața nu ai nicio amintire despre asta. Dacă locuiești într-un mediu zgomotos și te trezești obosit fără explicație, costul acelor micro-evaluări nocturne merită înțeles.",
    link: "/blog/zgomotul-poluarea-sonora",
    date: "2026-02-01",
  },
  {
    title:
      "Alcoolul și Somnul: De Ce Paharul de Vin de Seară Îți Distruge Noaptea",
    description:
      "Alcoolul te ajută să adormi mai repede, asta e real. Dar pe măsură ce ficatul îl metabolizează în orele care urmează, creierul intră într-o stare de hiperexcitabilitate compensatorie care fragmentează exact fazele de somn de care ai cea mai mare nevoie. Dacă te trezești între 2 și 4 dimineața după o seară cu un pahar sau două, mecanismul e foarte specific și merită înțeles.",
    link: "/blog/alcoolul-si-somnul",
    date: "2026-02-03",
  },
  {
    title: "Lipsa Rutinei de Culcare: Variațiile Mari de Orar",
    description:
      "Dacă te culci la 23 în cursul săptămânii și la 2 noaptea în weekend, corpul tău trece printr-un mic jet lag la fiecare tranziție. Ceasul circadian nu se adaptează la variație, ci se desincronizează, iar efectele merg mult dincolo de oboseala de luni dimineața.",
    link: "/blog/lipsa-rutinei-culcare",
    date: "2026-02-04",
  },
  {
    title: "Dependența de Ecrane Seara: Dopamina din Conținutul Digital",
    description:
      "Dacă un filtru de lumină albastră ar rezolva problema ecranelor seara, conversația s-ar fi încheiat demult. Efectul principal nu vine din fotoni, ci din modul în care conținutul digital activează circuitul dopaminic, exact circuitul care ține creierul în modul de căutare și explorare, opusul stării necesare adormirii.",
    link: "/blog/dependenta-ecrane-seara",
    date: "2026-02-06",
  },
  {
    title: "Anxietatea Nocturnă: De Ce Mintea Se Activează Când Vrei Să Dormi",
    description:
      "Grijile nu apar noaptea, ele sunt acolo toată ziua, ținute sub prag de distracțiile continue ale minții ocupate. Când te culci și elimini toate aceste filtre, cortexul prefrontal e deja epuizat, iar amigdala preia controlul. Mecanismul are o logică neurobiologică clară și, odată înțeles, devine mai ușor de gestionat.",
    link: "/blog/anxietatea-nocturna",
    date: "2026-02-08",
  },
  {
    title:
      "Trezirile de la 2 noaptea care vin cu aceeași precizie ca un ceas",
    description:
      "Dacă trezirile nocturne vin cu o regularitate aproape mecanică, la aceleași ore, cu aceeași stare de alertă corporală, tiparul e diferit de insomnia obișnuită. Creierul încearcă să proceseze o experiență care a rămas fragmentată, iar al treilea ciclu REM din noapte, cel mai intens, e momentul în care procesarea emoțională atinge un prag critic.",
    link: "/blog/trauma-stres-post-traumatic",
    date: "2026-02-10",
  },
  {
    title:
      "Când te trezești la 4 dimineața și nu mai poți adormi, problema poate să nu fie somnul",
    description:
      "Trezirea precoce repetitivă, în jurul orei 4, cu o luciditate care nu lasă loc somn, e unul dintre cele mai specifice semnale biologice ale depresiei. Cortizolul crește prematur în a doua parte a nopții, iar creierul interpretează acest semnal ca pe venirea dimineții. Dacă tiparul se repetă de câteva săptămâni, merită privit dincolo de igienă a somnului.",
    link: "/blog/depresia-mascata",
    date: "2026-02-11",
  },
  {
    title:
      "Ce se întâmplă în corpul tău când mănânci greu la cină și apoi încerci să dormi",
    description:
      "Corpul are nevoie să-și scadă temperatura cu peste un grad pentru a iniția somnul. Digestia unei cine grele face exact opusul, generând căldură, activând sistemul nervos enteric și ocupând ficatul tocmai în intervalul lui de vârf nocturn. Dacă te trezești între 1 și 3 dimineața după o masă consistentă, legătura e directă și fiziologic explicabilă.",
    link: "/blog/cina-grea-digestia-nocturna",
    date: "2026-02-13",
  },
  {
    title:
      "Magneziul: de ce un mineral de care nici nu te gândești poate fi cheia somnului tău",
    description:
      "Magneziul amplifică semnalul GABA (frâna naturală a creierului), participă la producția de melatonină și reglează relaxarea musculară. Deficitul lui afectează aproximativ jumătate din populația adultă, dar analizele standard de sânge îl ratează aproape întotdeauna. Dacă adormi greu, te trezești cu mușchi încordați sau ai crampe nocturne, conexiunea merită explorată.",
    link: "/blog/deficitul-magneziu",
    date: "2026-02-15",
  },
  {
    title:
      "De ce corpul tău nu mai produce suficientă melatonină și ce lipsește din farfurie",
    description:
      "Melatonina e construită pas cu pas dintr-un aminoacid din mâncare, printr-un lanț biochimic care depinde de vitamina B6, zinc, fier, folat și B12 la fiecare etapă. Dacă oricare dintre acești cofactori lipsește, lanțul încetinește și producția de melatonină scade. Deficitele subclinice ale acestor nutrienți sunt frecvente și rareori asociate cu somnul, dar creierul le simte în fiecare noapte.",
    link: "/blog/deficiente-nutritionale-melatonina",
    date: "2026-02-17",
  },
  {
    title:
      "Picioarele care nu te lasă să dormi ar putea cere fier, nu liniște",
    description:
      "Dacă seara, în pat, simți o agitație inexplicabilă în picioare care dispare doar când te miști, e posibil ca problema să nu fie stresul sau oboseala. Fierul joacă un rol direct în producția de dopamină, iar când rezervele scad sub un anumit prag, circuitele motorii din creier devin instabile, exact în momentul în care ai nevoie de liniște.",
    link: "/blog/fierul-feritina-scazuta",
    date: "2026-02-18",
  },
  {
    title: "Intestinul care nu doarme bine nu te lasă nici pe tine",
    description:
      "Aproximativ 90% din serotonina organismului se produce în intestin, nu în creier, iar serotonina e precursorul direct al melatoninei. Dacă flora intestinală e dezechilibrată, acest lanț biochimic se perturbă, și efectele se simt cel mai clar noaptea, în calitatea somnului.",
    link: "/blog/microbiomul-intestinal-somnul",
    date: "2026-02-20",
  },
  {
    title: "Corpul care a uitat cum să se oprească din a fi în alertă",
    description:
      "Sistemul nervos autonom funcționează ca un balans între accelerator și frână. Dacă stresul cronic ține acceleratorul apăsat prea mult timp, frâna parasimpatică slăbește, iar corpul rămâne în alertă chiar și atunci când te culci. Nu e o problemă de voință, ci de calibrare a unui sistem care a învățat că trebuie să fie mereu pregătit.",
    link: "/blog/sistemul-nervos-autonom",
    date: "2026-02-22",
  },
  {
    title:
      "Inflamația pe care nu o simți, dar care îți fură somnul profund",
    description:
      "Există o formă de inflamație care nu doare, nu se vede și nu produce simptome pe care să le recunoști. Dar citokinele pe care le eliberează ajung la creier și modifică structura somnului, scurtând exact fazele în care corpul se repară. Poți dormi 8 ore și tot să te trezești nerefăcut, pentru că problema nu e durata, ci ce se întâmplă pe interior.",
    link: "/blog/inflamatia-sistemica",
    date: "2026-02-23",
  },
  {
    title:
      "Suprafața pe care dormi contează mai mult decât crezi și mai puțin decât îți vând",
    description:
      "Dacă te ridici dimineața cu rigiditate în spate care dispare după 15 minute de mișcare, salteaua poate fi problema, nu vârsta și nu poziția de dormit. Biomecanica somnului e reală și cercetată, dar industria o îngroapă sub termeni ca \"ortopedic\" și \"anatomic\" care nu înseamnă nimic standardizat.",
    link: "/blog/salteaua-si-perna",
    date: "2026-02-25",
  },
  {
    title: "Materialele în Care Dormi: Țesături Sintetice și Somnul",
    description:
      "Somnul profund necesită o scădere a temperaturii corporale cu 1 până la 1,5 grade. Dacă cearșafurile sau pijamaua sunt din materiale sintetice care rețin căldura și nu absorb transpirația, acest proces e încetinit, iar corpul compensează prin microtreziri de care nici nu ești conștient. Materialul de pe piele contează mai mult decât pare.",
    link: "/blog/materialele-in-care-dormi",
    date: "2026-02-27",
  },
  {
    title: "Lumina în Dormitor: Poluarea Luminoasă și Melatonina",
    description:
      "Glanda pineală e extraordinar de sensibilă, iar cercetările recente arată că și 3 până la 5 luxi (un simplu LED de standby reflectat pe un perete) pot reduce producția de melatonină pe parcursul nopții. Dacă dormitorul tău nu e complet întunecat, e posibil ca somnul să fie afectat de surse pe care, conștient, nici nu le observi.",
    link: "/blog/lumina-in-dormitor",
    date: "2026-03-01",
  },
  {
    title: "Mituri și Realități Despre Dormitor: Wi-Fi, Plante, Cristale",
    description:
      "Sfaturile despre somn circulă într-un spațiu în care temperatura camerei și cristalele de pe noptieră sunt prezentate cu același grad de certitudine. Dacă vrei să investești timp și bani în lucruri care chiar contează, ai nevoie de un filtru care să separe dovezile solide de speculație.",
    link: "/blog/mituri-realitati-dormitor",
    date: "2026-03-02",
  },
  {
    title: "Somnul ca Rezultat al Întregii Zile",
    description:
      "Somnul de noapte nu începe când te bagi în pat. E produsul final al deciziilor din cele 16 ore anterioare: lumina pe care ai primit-o dimineața, mișcarea pe care ai făcut-o sau nu, ce ai mâncat și la ce oră, cum ai gestionat stresul. Dacă te concentrezi doar pe rutina de seară, e ca și cum ai încerca să repari nutriția ocupându-te exclusiv de cină.",
    link: "/blog/somnul-holistic",
    date: "2026-03-04",
  },
  {
    title: "Cafeina: Inamicul Invizibil cu Timp de Înjumătățire de 6 Ore",
    description:
      "Cafeina nu te face mai odihnit, ci temporar incapabil să percepi cât de obosit ești. Blochează receptorii de adenozină din creier, iar când efectul trece, toată oboseala acumulată lovește deodată. Dacă bei o cafea la ora 14, la miezul nopții ai încă suficientă cafeină activă în sistem cât să reducă somnul profund, chiar dacă adormi fără probleme.",
    link: "/blog/cafeina",
    date: "2026-03-06",
  },
  {
    title: "Somnul de zi: de ce 20 de minute te repară și 45 te strică",
    description:
      "Durata unui nap dictează dacă te trezești lucid sau mai obosit decât înainte, și diferența stă în structura ciclurilor de somn. Dacă ai renunțat la somnul de zi pentru că te simțeai mai rău după, probabil nu nap-ul era problema, ci intervalul în care te-ai trezit.",
    link: "/blog/somnul-de-zi",
    date: "2026-03-08",
  },
  {
    title:
      "Tiroida și somnul: mica glandă care îți controlează termostatatul nocturn",
    description:
      "O glandă de 20 de grame de la baza gâtului reglează temperatura, neurotransmițătorii și arhitectura somnului tău. Dacă igiena somnului nu a funcționat și analizele par \"normale\", merită să te uiți mai atent la ce face tiroida, și mai ales la ce nu măsoară un TSH luat singur.",
    link: "/blog/tiroida-si-somnul",
    date: "2026-03-09",
  },
  {
    title:
      "Histamina și somnul: neurotransmițătorul de veghe pe care îl mănânci la cină",
    description:
      "Histamina este unul dintre cele mai puternice semnale de veghe din creier, iar o parte din ea vine direct din ce ai în farfurie seara. Dacă nopțile tale variază imprevizibil, cu unele excelente și altele inexplicabil proaste, legătura s-ar putea să fie în cina, nu în stres.",
    link: "/blog/histamina-si-somnul",
    date: "2026-03-11",
  },
  {
    title:
      "Vitamina D și somnul: de ce soarele de dimineață îți repară noaptea",
    description:
      "Vitamina D funcționează ca un precursor hormonal care influențează producția de serotonină, conversia ei în melatonină și nivelul inflamației cronice. Deficitul ei afectează 40-60% din populația urbană, ceea ce o face una dintre cele mai frecvente cauze corectabile ale somnului de proastă calitate.",
    link: "/blog/vitamina-d-somnul",
    date: "2026-03-13",
  },
  {
    title:
      "Bruxismul nocturn: ce îți spune maxilarul despre calitatea somnului",
    description:
      "Fiecare episod de scrâșnit produce o micro-trezire corticală, iar 40-60 de astfel de episoade pe noapte pot transforma un somn aparent suficient într-unul profund fragmentat. Dacă te trezești cu maxilarul încordat sau cu durere în tâmple, e posibil ca somnul tău să fie sabotat de un mecanism de care nu ești conștient.",
    link: "/blog/bruxismul-nocturn",
    date: "2026-03-15",
  },
  {
    title: "Datoria de Somn: Poți Recupera Orele Pierdute în Weekend?",
    description:
      "Treizeci de minute pierdute pe noapte par nesemnificative, dar la sfârșitul unei luni ai acumulat un deficit de zece ore, cu efecte măsurabile asupra insulinei, inflamației și telomerilor. Dacă strategia ta de recuperare se bazează pe weekenduri lungi de somn, cercetarea arată că mecanismele metabolice afectate nu se resetează la fel de ușor ca cele cognitive.",
    link: "/blog/datoria-de-somn",
    date: "2026-03-16",
  },
  {
    title: "Exercițiul Fizic și Somnul: Când, Cât și Ce Tip de Mișcare",
    description:
      "Mișcarea ajută somnul prin trei mecanisme concrete: metabolizarea cortizolului acumulat, creșterea adenozinei care construiește presiunea de somn și scăderea temperaturii centrale după efort. Dar tipul de exercițiu, ora la care îl faci și intensitatea contează la fel de mult ca faptul că te miști.",
    link: "/blog/exercitiul-fizic-somnul",
    date: "2026-03-18",
  },
  {
    title: "Schimburile de Noapte și Jetlag-ul Social",
    description:
      "Când mănânci la 3 noaptea, ficatul primește semnalul \"e zi\", în timp ce ceasul central din creier știe că e noapte. Această dezaliniere internă, în care organele tale funcționează pe fusuri orare diferite, produce efecte metabolice și cardiovasculare care depășesc cu mult simpla oboseală.",
    link: "/blog/schimburi-noapte-jetlag",
    date: "2026-03-20",
  },
  {
    title:
      "Somnul După 50 de Ani: De Ce când Îmbătrânim Dormim Altfel",
    description:
      "Somnul se modifică cu vârsta, dar distanța dintre \"se modifică\" și \"trebuie să fie prost\" e mult mai mare decât presupun majoritatea oamenilor. Dacă ai pus somnul neodihnitor pe seama anilor, s-ar putea să ratezi o apnee tratabilă, un efect medicamentos corectabil sau o schimbare de obiceiuri care nu mai funcționează ca la 35 de ani.",
    link: "/blog/somnul-dupa-50-ani",
    date: "2026-03-22",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
