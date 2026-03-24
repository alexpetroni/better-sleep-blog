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
    title: "Glanda pineală nu știe că e un telefon, nu soarele",
    description: "Celulele din retină care reglează somnul nu văd imagini, ci măsoară culoarea luminii, și ecranele emit exact spectrul care le activează",
    link: "/blog/lumina-albastra-melatonina",
    date: "2026-01-15",
  },
  {
    title: "Cortizolul crescut noaptea: de ce creierul tău decide că ora 3 dimineața e un moment bun să te trezească",
    description: "Trezirile repetate între 2 și 4 dimineața nu sunt aleatorii. Coincid cu un moment vulnerabil din ciclul cortizolului.",
    link: "/blog/cortizolul-crescut-noaptea",
    date: "2026-01-16",
  },
  {
    title: "Problema glicemiei din spatele trezirilor nocturne pe care puțini o verifică",
    description: "Corpul consumă glucoză și în somn, iar creierul singur arde 5-6 grame pe oră, non-stop.",
    link: "/blog/hipoglicemia-nocturna",
    date: "2026-01-18",
  },
  {
    title: "Progesteronul e sedativul pe care corpul ți-l retrage la fiecare 28 de zile",
    description: "Progesteronul acționează pe receptorii GABA din creier, aceiași pe care îi vizează somnifere ca zolpidemul, iar nivelul lui scade brusc înainte de menstruație și la menopauză.",
    link: "/blog/dezechilibre-hormonale-femei",
    date: "2026-01-20",
  },
  {
    title: "Apneea de somn: de ce 8 ore în pat nu înseamnă 8 ore de somn",
    description: "Apneea obstructivă de somn înseamnă sute de micro-opriri ale respirației pe noapte, fiecare urmată de o micro-trezire de care persoana nu e conștientă",
    link: "/blog/apneea-de-somn",
    date: "2026-01-21",
  },
  {
    title: "Acidul care urcă noaptea: de ce refluxul gastro-esofagian îți sabotează somnul tocmai când te culci",
    description: "Sfincterul esofagian inferior funcționează ca o supapă între stomac și esofag, iar poziția culcat elimină avantajul gravitației care îl ajută să rămână închis",
    link: "/blog/refluxul-gastro-esofagian",
    date: "2026-01-23",
  },
  {
    title: "Mersul la toaletă noaptea: ce stă de fapt în spatele nevoii care îți fragmentează somnul",
    description: "Nicturie înseamnă trezirea de cel puțin o dată pe noapte ca să urinezi, iar de la două ori în sus, impactul asupra calității somnului devine măsurabil",
    link: "/blog/nicturie",
    date: "2026-01-25",
  },
  {
    title: "Durerea cronică și somnul: cum se hrănesc reciproc și unde poți interveni",
    description: "Relația dintre durere și somn e bidirecțională: durerea fragmentează somnul, iar somnul prost amplifică durerea a doua zi",
    link: "/blog/durerea-cronica-somnul",
    date: "2026-01-27",
  },
  {
    title: "Medicamentele care îți fură somnul: ce iei zi de zi și cum afectează ce se întâmplă noaptea",
    description: "Peste 20 de clase de medicamente comune au insomnia ca efect secundar documentat, dar majoritatea pacienților nu fac legătura",
    link: "/blog/medicamentele-care-fura-somnul",
    date: "2026-01-28",
  },
  {
    title: "Temperatura camerei de dormit: de ce 18 grade fac mai mult pentru somnul tău decât crezi",
    description: "Corpul trebuie să-și scadă temperatura centrală cu 1-1.5 grade Celsius ca să inițieze somnul, iar o cameră prea caldă împiedică acest proces",
    link: "/blog/temperatura-camerei",
    date: "2026-01-30",
  },
  {
    title: "Zgomotul și Poluarea Sonoră Nocturnă",
    description: "De ce creierul tău nu se \"oprește\" niciodată cu adevărat din ascultat, nici în somn",
    link: "/blog/zgomotul-poluarea-sonora",
    date: "2026-02-01",
  },
  {
    title: "Alcoolul și Somnul: De Ce Paharul de Vin de Seară Îți Distruge Noaptea",
    description: "Cum alcoolul te ajută să adormi mai repede dar îți sabotează exact fazele de somn care contează",
    link: "/blog/alcoolul-si-somnul",
    date: "2026-02-03",
  },
  {
    title: "Lipsa Rutinei de Culcare: Variațiile Mari de Orar",
    description: "Ce e social jet lag-ul și de ce weekendul tău te sabotează la fel de mult ca un zbor transatlantic",
    link: "/blog/lipsa-rutinei-culcare",
    date: "2026-02-04",
  },
  {
    title: "Dependența de Ecrane Seara: Dopamina din Conținutul Digital",
    description: "De ce problema ecranelor seara nu e doar despre lumina albastră, ci despre ce face conținutul digital cu chimia creierului tău",
    link: "/blog/dependenta-ecrane-seara",
    date: "2026-02-06",
  },
  {
    title: "Anxietatea Nocturnă: De Ce Mintea Se Activează Când Vrei Să Dormi",
    description: "De ce creierul tău alege exact momentul culcării pentru a-ți prezenta inventarul tuturor grijilor",
    link: "/blog/anxietatea-nocturna",
    date: "2026-02-08",
  },
  {
    title: "Trezirile de la 2 noaptea care vin cu aceeași precizie ca un ceas",
    description: "Traumele nerezolvate pot genera treziri repetitive la aceleași ore, cel mai frecvent între 2 și 4 dimineața, un tipar pe care somnul normal nu îl produce",
    link: "/blog/trauma-stres-post-traumatic",
    date: "2026-02-10",
  },
  {
    title: "Când te trezești la 4 dimineața și nu mai poți adormi, problema poate să nu fie somnul",
    description: "Trezirea precoce repetitivă (4-5 dimineața) cu imposibilitatea de a readormi e unul dintre cele mai specifice semne biologice ale depresiei",
    link: "/blog/depresia-mascata",
    date: "2026-02-11",
  },
  {
    title: "Ce se întâmplă în corpul tău când mănânci greu la cină și apoi încerci să dormi",
    description: "Digestia alimentelor grele activează sistemul nervos simpatic și crește temperatura corpului, ambele opuse fiziologiei naturale a adormirii",
    link: "/blog/cina-grea-digestia-nocturna",
    date: "2026-02-13",
  },
  {
    title: "Magneziul: de ce un mineral de care nici nu te gândești poate fi cheia somnului tău",
    description: "Magneziul participă la peste 600 de reacții enzimatice în corp, inclusiv cele care reglează relaxarea musculară, activitatea GABA și conversia triptofanului în melatonină",
    link: "/blog/deficitul-magneziu",
    date: "2026-02-15",
  },
  {
    title: "De ce corpul tău nu mai produce suficientă melatonină și ce lipsește din farfurie",
    description: "Melatonina nu apare din nimic: e produsul final al unui lanț biochimic care începe cu triptofanul și necesită cofactori preciși la fiecare etapă",
    link: "/blog/deficiente-nutritionale-melatonina",
    date: "2026-02-17",
  },
  {
    title: "Picioarele care nu te lasă să dormi ar putea cere fier, nu liniște",
    description: "Sindromul picioarelor neliniștite (SPN) afectează 5-10% din populația adultă și e una dintre cele mai frecvente cauze tratabile de insomnie pe care medicii de familie rareori o investighează corect.",
    link: "/blog/fierul-feritina-scazuta",
    date: "2026-02-18",
  },
  {
    title: "Intestinul care nu doarme bine nu te lasă nici pe tine",
    description: "Aproximativ 90% din serotonina organismului e produsă în intestin, nu în creier, iar serotonina e precursorul direct al melatoninei.",
    link: "/blog/microbiomul-intestinal-somnul",
    date: "2026-02-20",
  },
  {
    title: "Corpul care a uitat cum să se oprească din a fi în alertă",
    description: "Sistemul nervos autonom are două ramuri principale: simpaticul (accelerator) și parasimpaticul (frână). Somnul necesită activarea frânei. Când frâna nu funcționează, corpul rămâne în alertă chiar ș...",
    link: "/blog/sistemul-nervos-autonom",
    date: "2026-02-22",
  },
  {
    title: "Inflamația pe care nu o simți, dar care îți fură somnul profund",
    description: "Inflamația cronică de grad scăzut nu produce simptome evidente. Nu doare, nu e roșie, nu se umflă. Dar perturbă mecanismele somnului profund în mod măsurabil.",
    link: "/blog/inflamatia-sistemica",
    date: "2026-02-23",
  },
  {
    title: "Suprafața pe care dormi contează mai mult decât crezi și mai puțin decât îți vând",
    description: "O saltea inadecvată compromite alinierea coloanei vertebrale, crește numărul de schimbări de poziție în somn și poate produce dureri cronice de spate pe care multe persoane nu le leagă de suprafața...",
    link: "/blog/salteaua-si-perna",
    date: "2026-02-25",
  },
  {
    title: "Materialele în Care Dormi: Țesături Sintetice și Somnul",
    description: "De ce cearșafurile și pijamaua pot sabota termoreglarea nocturnă fără să-ți dai seama",
    link: "/blog/materialele-in-care-dormi",
    date: "2026-02-27",
  },
  {
    title: "Lumina în Dormitor: Poluarea Luminoasă și Melatonina",
    description: "Cât de sensibilă e glanda pineală la lumină și de ce chiar și surse minuscule contează",
    link: "/blog/lumina-in-dormitor",
    date: "2026-03-01",
  },
  {
    title: "Mituri și Realități Despre Dormitor: Wi-Fi, Plante, Cristale",
    description: "Ce spune dovada științifică actuală despre efectele Wi-Fi și câmpurilor electromagnetice asupra somnului",
    link: "/blog/mituri-realitati-dormitor",
    date: "2026-03-02",
  },
  {
    title: "Somnul ca Rezultat al Întregii Zile",
    description: "De ce somnul de noapte nu poate fi separat de modul în care trăiești ziua",
    link: "/blog/somnul-holistic",
    date: "2026-03-04",
  },
  {
    title: "Cafeina: Inamicul Invizibil cu Timp de Înjumătățire de 6 Ore",
    description: "Cum funcționează cafeina la nivel neuronal și de ce te face să te simți treaz fără să fii odihnit",
    link: "/blog/cafeina",
    date: "2026-03-06",
  },
  {
    title: "Somnul de zi: de ce 20 de minute te repară și 45 te strică",
    description: "Creierul trece printr-un ciclu complet de somn în aproximativ 90 de minute, iar o pauză de zi care se oprește la mijlocul ciclului produce o stare mai proastă decât dacă nu ai fi dormit deloc",
    link: "/blog/somnul-de-zi",
    date: "2026-03-08",
  },
  {
    title: "Tiroida și somnul: mica glandă care îți controlează termostatatul nocturn",
    description: "Tiroida reglează rata metabolică a fiecărei celule din corp, inclusiv neuronii responsabili de ciclul somn-veghe",
    link: "/blog/tiroida-si-somnul",
    date: "2026-03-09",
  },
  {
    title: "Histamina și somnul: neurotransmițătorul de veghe pe care îl mănânci la cină",
    description: "Histamina e unul dintre principalii neurotransmițători care mențin starea de veghe, iar antihistaminicele produc somnolență exact prin blocarea acestui efect",
    link: "/blog/histamina-si-somnul",
    date: "2026-03-11",
  },
  {
    title: "Vitamina D și somnul: de ce soarele de dimineață îți repară noaptea",
    description: "Receptorii de vitamina D există în zonele cerebrale care controlează somnul, inclusiv hipotalamusul și trunchiul cerebral, ceea ce sugerează un rol direct, nu doar indirect",
    link: "/blog/vitamina-d-somnul",
    date: "2026-03-13",
  },
  {
    title: "Bruxismul nocturn: ce îți spune maxilarul despre calitatea somnului",
    description: "Bruxismul nocturn (scrâșnitul și strângerea dinților în somn) afectează estimativ 8-13% din populația adultă și produce micro-treziri repetate care fragmentează somnul fără ca persoana să fie conșt...",
    link: "/blog/bruxismul-nocturn",
    date: "2026-03-15",
  },
  {
    title: "Datoria de Somn: Poți Recupera Orele Pierdute în Weekend?",
    description: "Cum se acumulează deficitul de somn, chiar și când pierzi doar 30 de minute pe noapte, și de ce weekendul nu funcționează ca mecanism de compensare",
    link: "/blog/datoria-de-somn",
    date: "2026-03-16",
  },
  {
    title: "Exercițiul Fizic și Somnul: Când, Cât și Ce Tip de Mișcare",
    description: "Cum metabolizează exercițiul fizic cortizolul și adrenalina acumulate în timpul zilei și rolul adenozinei generate de efort în construirea presiunii de somn",
    link: "/blog/exercitiul-fizic-somnul",
    date: "2026-03-18",
  },
  {
    title: "Schimburile de Noapte și Jetlag-ul Social",
    description: "Ce este dezalinierea circadiană, de ce munca în schimburi o provoacă inevitabil și strategii de expunere la lumină pentru reancorarea ritmului circadian",
    link: "/blog/schimburi-noapte-jetlag",
    date: "2026-03-20",
  },
  {
    title: "Somnul După 50 de Ani: De Ce Îmbătrânim și Dormim Altfel",
    description: "Cum se modifică arhitectura somnului odată cu vârsta, diferența între schimbările normale și tulburările tratabile, și strategii eficiente fără somnifere",
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
