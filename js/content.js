/*
 * Contenuti dell'app: livelli, argomenti, spiegazioni e quiz.
 * Teoria e domande seguono le unità del manuale
 * "Godt begyndt. Corso di lingua danese":
 *   Principiante = unità 1–5, Intermedio = unità 6–10, Avanzato = unità 11–15.
 * Ogni domanda ha 4 opzioni e la PRIMA è sempre quella corretta:
 * l'app mescola le opzioni prima di mostrarle.
 */

var LEVELS = [
  { id: 'principiante', nome: 'Principiante', descrizione: 'Unità 1–5 del libro: presente, pronomi, på/i/til, la regola V2 e le prime inversioni.' },
  { id: 'intermedio', nome: 'Intermedio', descrizione: 'Unità 6–10: imperativo, verbi di posizione, passato prossimo, sin/hans, nogen/noget/nogle e il soggetto provvisorio der.' },
  { id: 'avanzato', nome: 'Avanzato', descrizione: 'Unità 11–15: futuro, preterito, passivo, trapassato, pronomi relativi e dimostrativi, subordinate.' }
];

var TOPICS = [
  { id: 'verbi', nome: 'Verbi', danese: 'verber' },
  { id: 'avverbi', nome: 'Avverbi', danese: 'adverbier' },
  { id: 'pronomi', nome: 'Pronomi', danese: 'pronominer' },
  { id: 'preposizioni', nome: 'Preposizioni', danese: 'præpositioner' },
  { id: 'congiunzioni', nome: 'Congiunzioni', danese: 'konjunktioner' },
  { id: 'inversione', nome: 'Regola di inversione', danese: 'inversion / V2' }
];

/* Piccoli aiuti per scrivere gli esempi, le tabelle e le domande */
function ex(rows) {
  return '<ul class="examples">' + rows.map(function (r) {
    return '<li><span class="da">' + r[0] + '</span><span class="it">' + r[1] + '</span></li>';
  }).join('') + '</ul>';
}
function table(head, rows) {
  return '<div class="table-wrap"><table><thead><tr>' +
    head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
    '</tr></thead><tbody>' +
    rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') +
    '</tbody></table></div>';
}
function tip(html) { return '<p class="tip">' + html + '</p>'; }
/* q(domanda, [corretta, sbagliata, sbagliata, sbagliata], spiegazione) */
function q(domanda, opzioni, spiegazione) {
  return { domanda: domanda, opzioni: opzioni, spiegazione: spiegazione };
}

var CONTENT = {

  /* =====================================================================
   * PRINCIPIANTE · unità 1–5
   * ===================================================================== */
  principiante: {

    verbi: {
      sommario: `Presente, være e have, i modali skal e vil, i verbi reciproci (mødes) e riflessivi (sig).`,
      sezioni: [
        {
          titolo: `Il presente: infinito + -r (unità 1–2)`,
          html:
            `<p>Il presente si forma aggiungendo <strong>-r</strong> all'infinito, e il verbo <strong>non cambia mai con la persona</strong>: <span class="da">jeg bor, du bor, hun bor, vi bor</span>.</p>` +
            table([`Infinito`, `Presente`, `Italiano`], [
              [`at bo`, `<span class="da">bor</span>`, `abitare`],
              [`at hedde`, `<span class="da">hedder</span>`, `chiamarsi`],
              [`at være`, `<span class="da">er</span>`, `essere (irregolare)`],
              [`at have`, `<span class="da">har</span>`, `avere (irregolare)`]
            ])
        },
        {
          titolo: `I modali skal e vil (unità 4)`,
          html:
            `<p>Dopo <span class="da">skal</span> (dovere, avere in programma) e <span class="da">vil</span> (volere) l'infinito va <strong>senza at</strong>.</p>` +
            ex([[`Jeg skal arbejde i morgen.`, `Domani devo lavorare.`], [`Vil du gå i biografen?`, `Vuoi andare al cinema?`]])
        },
        {
          titolo: `Verbi reciproci e riflessivi (unità 4–5)`,
          html:
            `<p>Con <strong>-s</strong> l'azione diventa reciproca: <span class="da">Hvor skal vi mødes?</span> (Dove ci incontriamo?), <span class="da">Vi ses i morgen!</span> (Ci vediamo domani!).</p>` +
            `<p>Il riflessivo di 3ª persona è <span class="da">sig</span>; le altre persone usano il pronome oggetto (<span class="da">mig, dig, os, jer</span>).</p>` +
            ex([[`Camilla friserer sig.`, `Camilla si pettina.`], [`Jeg vasker mig.`, `Mi lavo.`]]) +
            tip(`"Alzarsi" non è riflessivo in danese: si dice <span class="da">at stå op</span>.`)
        }
      ],
      quiz: [
        q(`Sofie ___ i København.`, [`bor`, `bo`, `borer`, `at bo`], `Presente = infinito + -r: <span class="da">at bo → bor</span>, uguale per tutte le persone.`),
        q(`Vi ___ italienere.`, [`er`, `være`, `erer`, `har`], `<span class="da">At være</span> al presente è sempre <span class="da">er</span>, anche al plurale.`),
        q(`Hun ___ to børn.`, [`har`, `have`, `haver`, `er`], `<span class="da">At have</span> al presente è <span class="da">har</span>.`),
        q(`Jeg skal ___ i morgen.`, [`arbejde`, `at arbejde`, `arbejder`, `arbejdes`], `Dopo un modale (skal, vil, kan) l'infinito va senza <span class="da">at</span>.`),
        q(`Vil du ___ en kop kaffe?`, [`have`, `har`, `at have`, `haves`], `Dopo <span class="da">vil</span> si usa l'infinito semplice: <span class="da">Vil du have…?</span>`),
        q(`Hvor skal vi ___? <em>(incontrarci)</em>`, [`mødes`, `møde`, `møder`, `møde os selv`], `La -s dà il significato reciproco: <span class="da">at mødes</span> = incontrarsi l'un l'altro.`),
        q(`Vi ___ i morgen! <em>(Ci vediamo domani!)</em>`, [`ses`, `ser`, `se`, `ser os`], `<span class="da">Vi ses</span> è il saluto reciproco con -s, come <span class="da">vi høres ved</span>.`),
        q(`Camilla friserer ___.`, [`sig`, `hende`, `hun`, `sin`], `Il riflessivo di 3ª persona singolare è <span class="da">sig</span>, non il pronome personale.`),
        q(`Jeg barberer ___ om morgenen.`, [`mig`, `sig`, `jeg`, `min`], `Per la 1ª persona il riflessivo coincide con il pronome oggetto: <span class="da">mig</span>.`),
        q(`Come si dice "mi alzo alle sette"?`, [`Jeg står op klokken syv.`, `Jeg rejser mig klokken syv.`, `Jeg står mig op klokken syv.`, `Jeg op står klokken syv.`], `Il libro avverte: "alzarsi" non è riflessivo in danese, si usa <span class="da">at stå op</span>.`)
      ]
    },

    avverbi: {
      sommario: `ikke e aldrig, også / heller ikke / derimod e le risposte con ja e jo.`,
      sezioni: [
        {
          titolo: `Dove vanno ikke e aldrig (unità 5)`,
          html:
            `<p>Nella frase principale le negazioni <span class="da">ikke</span> (non) e <span class="da">aldrig</span> (mai), e avverbi come <span class="da">altid, tit, også</span>, vanno <strong>subito dopo verbo e soggetto</strong>.</p>` +
            ex([[`De drikker ikke kaffe om aftenen.`, `Non bevono caffè la sera.`], [`Om aftenen ser han aldrig fjernsyn.`, `La sera non guarda mai la tv.`]]) +
            tip(`Il riflessivo va prima dell'avverbio: <span class="da">Jesper vasker sig aldrig.</span>`)
        },
        {
          titolo: `også, heller ikke, derimod (unità 3)`,
          html:
            table([`Frase di A`, `Stesso parere`, `Parere opposto`], [
              [`Jeg kan godt lide kaffe.`, `<span class="da">Det kan jeg også.</span>`, `<span class="da">Det kan jeg derimod ikke.</span>`],
              [`Jeg kan ikke lide sild.`, `<span class="da">Det kan jeg heller ikke.</span>`, `<span class="da">Det kan jeg derimod godt.</span>`]
            ])
        },
        {
          titolo: `ja e jo (unità 4)`,
          html:
            `<p>Si risponde <span class="da">jo</span> (invece di ja) quando la domanda contiene una negazione.</p>` +
            ex([[`Er du italiener? — Ja, det er jeg.`, `Sei italiano? — Sì.`], [`Er du ikke italiener? — Jo, det er jeg.`, `Non sei italiano? — Sì, lo sono.`]])
        }
      ],
      quiz: [
        q(`A: Er du ikke træt? B: ___, det er jeg.`, [`Jo`, `Ja`, `Nej`, `Også`], `La domanda contiene <span class="da">ikke</span>: per dire sì si usa <span class="da">jo</span>.`),
        q(`A: Skal vi gå en tur? B: ___, det kan vi godt.`, [`Ja`, `Jo`, `Ikke`, `Heller`], `Nessuna negazione nella domanda, quindi la risposta positiva è <span class="da">ja</span>.`),
        q(`A: Jeg kan godt lide kaffe. B: Det kan jeg ___.`, [`også`, `heller ikke`, `ikke også`, `jo`], `Stesso parere su una frase positiva: <span class="da">også</span> (anche).`),
        q(`A: Jeg kan ikke lide sild. B: Det kan jeg ___.`, [`heller ikke`, `også`, `også ikke`, `ikke heller`], `Stesso parere su una frase negativa: <span class="da">heller ikke</span> (neanche).`),
        q(`A: Jeg kan godt lide smørrebrød. B: Det kan jeg ___ ikke.`, [`derimod`, `også`, `heller`, `aldrig`], `Per esprimere il contrario si usa <span class="da">derimod</span> (invece).`),
        q(`Scegli la frase corretta:`, [`De drikker ikke kaffe om aftenen.`, `De ikke drikker kaffe om aftenen.`, `Ikke de drikker kaffe om aftenen.`, `De drikker kaffe ikke om aftenen.`], `<span class="da">ikke</span> va subito dopo verbo e soggetto.`),
        q(`Scegli la frase corretta:`, [`Om aftenen ser han aldrig fjernsyn.`, `Om aftenen han ser aldrig fjernsyn.`, `Om aftenen aldrig ser han fjernsyn.`, `Om aftenen ser aldrig han fjernsyn.`], `Verbo al 2° posto, poi il soggetto, poi <span class="da">aldrig</span>.`),
        q(`Scegli la frase corretta:`, [`Jesper vasker sig aldrig.`, `Jesper vasker aldrig sig.`, `Jesper aldrig vasker sig.`, `Jesper sig vasker aldrig.`], `Nella principale il pronome riflessivo precede l'avverbio: <span class="da">vasker sig aldrig</span>.`),
        q(`Jeg læser ___ avis om morgenen. <em>(sempre)</em>`, [`altid`, `aldrig`, `tit`, `heller`], `<span class="da">altid</span> = sempre, <span class="da">aldrig</span> = mai, <span class="da">tit</span> = spesso.`),
        q(`Han barberer sig ___ om aftenen. <em>(spesso)</em>`, [`tit`, `altid`, `aldrig`, `også`], `<span class="da">tit</span> significa "spesso" e sta nella stessa posizione di <span class="da">ikke</span>.`)
      ]
    },

    pronomi: {
      sommario: `Pronomi personali soggetto e oggetto, possessivi min/mit/mine e il riflessivo sig.`,
      sezioni: [
        {
          titolo: `Pronomi personali (unità 1 e 3)`,
          html:
            table([`Soggetto`, `Oggetto`, `Italiano`], [
              [`jeg`, `mig`, `io / me`], [`du`, `dig`, `tu / te`], [`han / hun`, `ham / hende`, `lui / lei`],
              [`den / det`, `den / det`, `esso (cose, animali)`], [`vi`, `os`, `noi`], [`I`, `jer`, `voi`], [`de`, `dem`, `loro`]
            ]) +
            tip(`<span class="da">I</span> (voi) si scrive sempre con la maiuscola; <span class="da">De</span> maiuscolo è la forma di cortesia.`)
        },
        {
          titolo: `Possessivi min / mit / mine (unità 3)`,
          html:
            `<p>Il possessivo concorda con la cosa posseduta: comune (en-ord), neutro (et-ord) o plurale.</p>` +
            table([`en-ord`, `et-ord`, `plurale`], [
              [`min bil`, `mit hus`, `mine bøger`], [`din`, `dit`, `dine`], [`vores`, `vores`, `vores`], [`jeres`, `jeres`, `jeres`], [`hans / hendes / deres`, `invariabili`, ``]
            ])
        }
      ],
      quiz: [
        q(`Hvad hedder ___? — Jeg hedder Lorenzo.`, [`du`, `dig`, `din`, `jeg`], `Il soggetto "tu" è <span class="da">du</span>; <span class="da">dig</span> è la forma oggetto.`),
        q(`Kender du Camilla? Ja, jeg kender ___ godt.`, [`hende`, `hun`, `sig`, `hendes`], `Complemento oggetto femminile: <span class="da">hende</span>.`),
        q(`Kan du hjælpe ___? <em>(noi)</em>`, [`os`, `vi`, `vores`, `jer`], `"Noi" come oggetto è <span class="da">os</span>.`),
        q(`Kommer ___ fra Italien? <em>(voi)</em>`, [`I`, `jer`, `jeres`, `vi`], `"Voi" soggetto è <span class="da">I</span>, con la maiuscola.`),
        q(`Det er ___ hus. <em>(mio)</em>`, [`mit`, `min`, `mine`, `mig`], `<span class="da">hus</span> è un et-ord, quindi <span class="da">mit</span>.`),
        q(`Det er ___ cykel. <em>(mia)</em>`, [`min`, `mit`, `mine`, `mig`], `<span class="da">cykel</span> è un en-ord, quindi <span class="da">min</span>.`),
        q(`Hvor er ___ bøger? <em>(i tuoi)</em>`, [`dine`, `din`, `dit`, `dig`], `Al plurale il possessivo prende <span class="da">-e</span>: <span class="da">dine</span>.`),
        q(`Det er ___ lejlighed. <em>(nostro)</em>`, [`vores`, `vors`, `os`, `vore`], `<span class="da">vores</span> non cambia per genere né numero.`),
        q(`Sofie og Lorenzo? Jeg ser ___ i morgen.`, [`dem`, `de`, `deres`, `sig`], `"Loro" come oggetto è <span class="da">dem</span>.`),
        q(`De ___ altid før middag. <em>(si lavano)</em>`, [`vasker sig`, `vasker dem`, `vasker de`, `vasker deres`], `Riflessivo di 3ª persona plurale: <span class="da">sig</span>, come al singolare.`)
      ]
    },

    preposizioni: {
      sommario: `på, i e til, e la differenza tra på tirsdag e om tirsdagen.`,
      sezioni: [
        {
          titolo: `på, i, til (unità 4)`,
          html:
            table([`Preposizione`, `Uso`, `Esempio`], [
              [`<span class="da">i</span>`, `paesi, città, spazi chiusi`, `Jeg bor i Danmark / i Odense.`],
              [`<span class="da">på</span>`, `isole, luoghi pubblici, istituzioni`, `Jeg er på universitetet / på Fyn.`],
              [`<span class="da">til</span>`, `moto a luogo, attività regolari`, `Jeg tager til Paris. Jeg går til klaver.`]
            ]) +
            tip(`Le scelte spesso vanno imparate a memoria: <span class="da">i biografen</span> ma <span class="da">på universitetet</span>, e <span class="da">i Jylland</span> anche se è una penisola.`)
        },
        {
          titolo: `på tirsdag o om tirsdagen? (unità 5)`,
          html:
            ex([[`Han besøger mig på tirsdag.`, `Viene a trovarmi martedì (prossimo).`], [`Han besøger mig om tirsdagen.`, `Viene a trovarmi il martedì (ogni martedì).`]]) +
            `<p><span class="da">om</span> + forma determinata indica un'azione ricorrente: <span class="da">om morgenen, om aftenen, om lørdagen</span>.</p>`
        }
      ],
      quiz: [
        q(`Jeg bor ___ Danmark.`, [`i`, `på`, `til`, `om`], `Con i paesi si usa <span class="da">i</span>.`),
        q(`Sofie studerer ___ universitetet.`, [`på`, `i`, `til`, `om`], `Si dice <span class="da">på universitetet</span>: va imparato insieme alla parola.`),
        q(`Jeg tager ___ Paris i weekenden.`, [`til`, `i`, `på`, `om`], `Moto a luogo verso una destinazione: <span class="da">til</span>.`),
        q(`Jeg går ___ klaver. <em>(prendo lezioni di pianoforte)</em>`, [`til`, `på`, `i`, `om`], `Per un'attività regolare il libro usa <span class="da">at gå til</span>.`),
        q(`Vi er ___ biografen.`, [`i`, `på`, `til`, `ved`], `Il libro: <span class="da">jeg er i biografen</span> (sono al cinema).`),
        q(`Mine forældre bor ___ Jylland.`, [`i`, `på`, `til`, `om`], `Anche se è una penisola, si dice <span class="da">i Jylland</span>.`),
        q(`Han besøger mig ___ tirsdag. <em>(martedì prossimo)</em>`, [`på`, `om`, `i`, `til`], `<span class="da">på</span> + giorno = una sola volta, nel futuro vicino.`),
        q(`Han besøger mig ___ tirsdagen. <em>(ogni martedì)</em>`, [`om`, `på`, `i`, `til`], `<span class="da">om</span> + forma determinata = azione che si ripete.`),
        q(`Jeg drikker ikke kaffe ___ aftenen.`, [`om`, `på`, `i`, `til`], `Abitudine: <span class="da">om aftenen</span> = la sera, tutte le sere.`),
        q(`Jeg er ___ møde. <em>(sono in riunione)</em>`, [`til`, `i`, `på`, `om`], `Per gli incontri e le riunioni si dice <span class="da">til møde</span>.`)
      ]
    },

    congiunzioni: {
      sommario: `Le congiunzioni coordinanti og, men, eller, for e så.`,
      sezioni: [
        {
          titolo: `Le cinque congiunzioni coordinanti`,
          html:
            table([`Danese`, `Italiano`, `Esempio`], [
              [`<span class="da">og</span>`, `e`, `De spiste frokost, og bagefter fik de en drink.`],
              [`<span class="da">eller</span>`, `o, oppure`, `Vil du have en øl, eller foretrækker du vin?`],
              [`<span class="da">men</span>`, `ma`, `Hun hedder ikke Camilla, men Sofie.`],
              [`<span class="da">for</span>`, `perché, infatti`, `De var glade, for solen skinnede.`],
              [`<span class="da">så</span>`, `quindi, perciò`, `Det regnede, så Camilla blev hjemme.`]
            ]) +
            tip(`Dopo queste congiunzioni l'ordine delle parole <strong>non cambia</strong>: soggetto e verbo restano come nella frase normale.`)
        }
      ],
      quiz: [
        q(`Jeg hedder Lorenzo, ___ jeg kommer fra Italien.`, [`og`, `men`, `eller`, `så`], `Si aggiunge un'informazione: <span class="da">og</span>.`),
        q(`Skal vi cykle, ___ skal vi tage bussen?`, [`eller`, `og`, `for`, `så`], `Alternativa tra due possibilità: <span class="da">eller</span>.`),
        q(`Jeg vil gerne have nyt tøj, ___ jeg har ikke nogen penge.`, [`men`, `og`, `for`, `eller`], `Contrasto: <span class="da">men</span> (ma).`),
        q(`Sofie er syg, ___ hun kan desværre ikke komme i aften.`, [`så`, `for`, `eller`, `men`], `Conseguenza: <span class="da">så</span> (quindi).`),
        q(`Tag hat på, ___ solen er meget stærk.`, [`for`, `så`, `eller`, `men`], `Si spiega il motivo di quanto detto prima: <span class="da">for</span>.`),
        q(`Vil du have komælk, ___ foretrækker du plantemælk?`, [`eller`, `men`, `for`, `og`], `Domanda con alternativa: <span class="da">eller</span>.`),
        q(`Hun hedder ikke Camilla, ___ Sofie.`, [`men`, `eller`, `og`, `så`], `Dopo una negazione si corregge con <span class="da">men</span>.`),
        q(`Kaffen smagte ikke godt, ___ hun drak den ikke.`, [`så`, `for`, `men`, `eller`], `Il caffè non era buono, <strong>quindi</strong> non l'ha bevuto: <span class="da">så</span>.`),
        q(`Jeg kan ikke komme i dag, ___ jeg kan godt på fredag.`, [`men`, `for`, `så`, `eller`], `Opposizione tra oggi e venerdì: <span class="da">men</span>.`),
        q(`Vinden blæste koldt fra nord, ___ det regnede.`, [`og`, `eller`, `men`, `for`], `Due fatti che si sommano: <span class="da">og</span>.`)
      ]
    },

    inversione: {
      sommario: `La regola V2: il verbo è sempre al 2° posto. Domande, risposte brevi e inversione del soggetto.`,
      sezioni: [
        {
          titolo: `Il verbo al secondo posto (unità 1 e 5)`,
          html:
            `<p>Nella frase principale il verbo coniugato sta <strong>sempre in seconda posizione</strong>. Se al primo posto mettiamo qualcosa che non è il soggetto, il soggetto passa <strong>dopo il verbo</strong>: è l'inversione.</p>` +
            table([`1° posto`, `Verbo`, `Soggetto`, `Resto`], [
              [`Jeg`, `spiser`, ``, `frokost hver dag.`],
              [`Hver dag`, `spiser`, `jeg`, `frokost.`],
              [`Frokost`, `spiser`, `jeg`, `hver dag.`]
            ])
        },
        {
          titolo: `Domande e risposte brevi (unità 1–2)`,
          html:
            `<p>Nelle domande sì/no il verbo va al primo posto: <span class="da">Er du italiener?</span> Con una parola interrogativa: <span class="da">Hvor bor du?</span></p>` +
            ex([[`Er du træt? — Ja, det er jeg.`, `Sei stanco? — Sì.`], [`Har du en bil? — Nej, det har jeg ikke.`, `Hai una macchina? — No.`]]) +
            tip(`Nella risposta breve si ripete il verbo e c'è inversione: <span class="da">det er jeg</span>, non <span class="da">det jeg er</span>.`)
        }
      ],
      quiz: [
        q(`Hver dag ___ frokost.`, [`spiser jeg`, `jeg spiser`, `spise jeg`, `jeg spise`], `Al 1° posto c'è "hver dag", quindi verbo e poi soggetto: <span class="da">spiser jeg</span>.`),
        q(`Frokost ___ hver dag.`, [`spiser jeg`, `jeg spiser`, `jeg spise`, `spiser`], `L'oggetto messo in testa provoca l'inversione: <span class="da">Frokost spiser jeg</span>.`),
        q(`Om aftenen ___ ikke kaffe.`, [`drikker de`, `de drikker`, `de ikke drikker`, `drikker`], `Espressione di tempo al 1° posto → <span class="da">drikker de</span>.`),
        q(`Come si chiede "Sei italiano?"`, [`Er du italiener?`, `Du er italiener?`, `Italiener du er?`, `Er italiener du?`], `Nella domanda sì/no il verbo va al primo posto.`),
        q(`Hvor ___?`, [`bor du`, `du bor`, `bo du`, `du bo`], `Dopo la parola interrogativa viene subito il verbo.`),
        q(`A: Er du træt? B: Ja, ___.`, [`det er jeg`, `det jeg er`, `jeg er det`, `er jeg det`], `Risposta breve: <span class="da">det</span> + verbo + soggetto.`),
        q(`A: Har du en bil? B: Nej, ___.`, [`det har jeg ikke`, `det jeg har ikke`, `jeg har det ikke`, `det har ikke jeg`], `Risposta breve negativa: <span class="da">det har jeg ikke</span>, con ikke alla fine.`),
        q(`I morgen ___ til Odense.`, [`kører vi`, `vi kører`, `vi køre`, `køre vi`], `<span class="da">I morgen</span> al primo posto → verbo prima del soggetto.`),
        q(`Scegli la frase corretta:`, [`Søndag morgen skal jeg i kirke.`, `Søndag morgen jeg skal i kirke.`, `Søndag morgen skal i kirke jeg.`, `Jeg søndag morgen skal i kirke.`], `Il verbo coniugato (<span class="da">skal</span>) resta al 2° posto.`),
        q(`Hvad ___ i weekenden?`, [`laver du`, `du laver`, `laver`, `du lave`], `Domanda con <span class="da">hvad</span>: segue il verbo, poi il soggetto.`)
      ]
    }
  },

  /* =====================================================================
   * INTERMEDIO · unità 6–10
   * ===================================================================== */
  intermedio: {

    verbi: {
      sommario: `Imperativo, il modale måtte, i verbi di posizione e il passato prossimo con har o er.`,
      sezioni: [
        {
          titolo: `L'imperativo (unità 8)`,
          html:
            `<p>Si forma togliendo la <strong>-e</strong> finale dell'infinito, senza soggetto. Non finisce mai con due consonanti uguali.</p>` +
            table([`Infinito`, `Imperativo`, `Esempio`], [
              [`at hente`, `hent`, `Hent vinen!`], [`at køre`, `kør`, `Kør forsigtigt!`], [`at have`, `hav`, `Hav en god aften!`], [`at ringe`, `ring`, `Ring til mig!`]
            ]) +
            tip(`Per essere più gentili si usa una domanda: <span class="da">Kunne du snakke lidt langsommere?</span>`)
        },
        {
          titolo: `Verbi di posizione (unità 9)`,
          html:
            `<p>Il danese dice <em>come</em> sta una cosa: <span class="da">ligge</span> (sdraiata, piatta), <span class="da">stå</span> (in piedi, dritta), <span class="da">hænge</span> (appesa), <span class="da">sidde</span> (seduta).</p>` +
            ex([[`Nøglen ligger på spisebordet.`, `La chiave è sul tavolo.`], [`Cyklen står foran huset.`, `La bici è davanti a casa.`], [`Der hænger et billede på væggen.`, `C'è un quadro sulla parete.`]])
        },
        {
          titolo: `Il passato prossimo (unità 10)`,
          html:
            `<p><span class="da">har</span> / <span class="da">er</span> + participio passato. Grande gruppo debole: <span class="da">-et</span> (arbejdet); piccolo gruppo: <span class="da">-t</span> (læst).</p>` +
            `<p>Con i verbi che indicano un <strong>cambiamento o spostamento</strong> si usa <span class="da">er</span>: <span class="da">Han er rejst</span> (è partito). Se indicano un'attività, <span class="da">har</span>: <span class="da">Han har rejst i Australien</span>.</p>` +
            tip(`Per un'azione iniziata nel passato che continua ancora, il danese usa il passato prossimo dove l'italiano usa il presente: <span class="da">Sofie har studeret biologi i fire år</span> = Sofie studia biologia da quattro anni.`)
        }
      ],
      quiz: [
        q(`___ vinen! <em>(at hente)</em>`, [`Hent`, `Hente`, `Henter`, `Hentt`], `Imperativo = infinito senza -e: <span class="da">hent</span>.`),
        q(`___ forsigtigt! <em>(at køre)</em>`, [`Kør`, `Køre`, `Kører`, `Du kør`], `L'imperativo non ha soggetto e perde la -e: <span class="da">Kør!</span>`),
        q(`___ en god aften! <em>(at have)</em>`, [`Hav`, `Har`, `Have`, `Haver`], `Per fare un augurio: <span class="da">Hav en god aften!</span>`),
        q(`___ til mig i morgen! <em>(at ringe)</em>`, [`Ring`, `Ringe`, `Ringer`, `Rin`], `<span class="da">ringe → ring</span>: si toglie solo la -e.`),
        q(`Nøglen ___ på spisebordet.`, [`ligger`, `står`, `hænger`, `sidder`], `Una chiave è piatta sul tavolo: <span class="da">ligger</span>.`),
        q(`Cyklen ___ foran huset.`, [`står`, `ligger`, `hænger`, `sidder`], `La bici è dritta sulle ruote: <span class="da">står</span>.`),
        q(`Der ___ et billede på væggen.`, [`hænger`, `ligger`, `står`, `sidder`], `Un quadro è appeso: <span class="da">hænger</span>.`),
        q(`Han har ___ i to timer. <em>(at arbejde)</em>`, [`arbejdet`, `arbejdt`, `arbejder`, `arbejde`], `Grande gruppo debole: participio in <span class="da">-et</span>.`),
        q(`Irene ___ taget hjem. <em>(è andata a casa)</em>`, [`er`, `har`, `bliver`, `var`], `Spostamento/cambiamento: ausiliare <span class="da">er</span>.`),
        q(`Sofie studia biologia da quattro anni.`, [`Sofie har studeret biologi i fire år.`, `Sofie studerer biologi i fire år.`, `Sofie er studeret biologi i fire år.`, `Sofie studerede biologi i fire år.`], `Azione che continua fino a oggi: in danese passato prossimo con <span class="da">i</span> + durata.`)
      ]
    },

    avverbi: {
      sommario: `Avverbi da aggettivi con -t, mange/meget/flere/mere e i comparativi irregolari.`,
      sezioni: [
        {
          titolo: `Avverbi da aggettivi (unità 7)`,
          html:
            `<p>Molti avverbi di modo si ottengono aggiungendo <strong>-t</strong> all'aggettivo, come la forma neutra.</p>` +
            ex([[`Han er hurtig. → Han løber hurtigt.`, `È veloce. → Corre velocemente.`], [`Hun er god. → Hun synger godt.`, `È brava. → Canta bene.`]])
        },
        {
          titolo: `mange, meget, flere, mere (unità 8)`,
          html:
            table([``, `Numerabile (plurale)`, `Non numerabile`], [
              [`tanto`, `<span class="da">mange</span> kartofler`, `<span class="da">meget</span> kaffe`],
              [`di più / ancora`, `<span class="da">flere</span> kartofler`, `<span class="da">mere</span> mælk`]
            ]) +
            ex([[`Der er ikke flere æbler.`, `Non ci sono più mele.`], [`Der er ikke mere te.`, `Non c'è più tè.`]])
        },
        {
          titolo: `Comparativi irregolari (unità 10)`,
          html:
            table([`Base`, `Comparativo`, `Superlativo`], [
              [`god`, `bedre`, `bedst`], [`mange`, `flere`, `flest`], [`meget`, `mere`, `mest`], [`gerne`, `hellere`, `helst`], [`lille`, `mindre`, `mindst`]
            ])
        }
      ],
      quiz: [
        q(`Han løber meget ___. <em>(hurtig)</em>`, [`hurtigt`, `hurtig`, `hurtige`, `hurtigere end`], `Avverbio di modo = aggettivo + <span class="da">-t</span>.`),
        q(`Hun synger ___. <em>(bene)</em>`, [`godt`, `god`, `gode`, `bedst`], `<span class="da">god</span> → avverbio <span class="da">godt</span>.`),
        q(`Han har ___ penge.`, [`mange`, `meget`, `mere`, `flest`], `<span class="da">penge</span> è un plurale numerabile: <span class="da">mange</span>.`),
        q(`Der er ___ trafik i dag.`, [`meget`, `mange`, `flere`, `nogle`], `<span class="da">trafik</span> non si conta: <span class="da">meget</span>.`),
        q(`Må jeg få ___ kartofler?`, [`flere`, `mere`, `meget`, `mest`], `Una quantità in più di una cosa numerabile: <span class="da">flere</span>.`),
        q(`Må jeg få ___ mælk?`, [`mere`, `flere`, `mange`, `flest`], `Latte non si conta: <span class="da">mere</span>.`),
        q(`Der er ikke ___ æbler. <em>(non ci sono più mele)</em>`, [`flere`, `mere`, `mange`, `meget`], `<span class="da">ikke flere</span> + plurale numerabile = non più.`),
        q(`Jeg drikker ___ te end kaffe. <em>(preferisco)</em>`, [`hellere`, `gerne`, `bedre`, `mere gerne`], `<span class="da">gerne – hellere – helst</span>: "più volentieri".`),
        q(`Vejret bliver ___ i weekenden. <em>(migliore)</em>`, [`bedre`, `godere`, `mere god`, `bedst`], `<span class="da">god – bedre – bedst</span> è irregolare.`),
        q(`Der er ___ indere end kinesere.`, [`flere`, `mere`, `mange`, `meget`], `Confronto tra quantità numerabili: <span class="da">flere … end</span>.`)
      ]
    },

    pronomi: {
      sommario: `nogen/noget/nogle, il possessivo riflessivo sin/sit/sine e il pronome man.`,
      sezioni: [
        {
          titolo: `nogen, noget, nogle (unità 8)`,
          html:
            table([`Forma`, `Quando`, `Esempio`], [
              [`<span class="da">noget</span>`, `non numerabile, o neutro singolare in frasi negative/domande`, `Vi har noget salt. Familien har ikke noget kæledyr.`],
              [`<span class="da">nogen</span>`, `domande e negazioni (comune singolare o plurale), persone`, `Har du nogen søskende?`],
              [`<span class="da">nogle</span>`, `frasi affermative al plurale`, `De køber nogle æbler.`]
            ])
        },
        {
          titolo: `sin, sit, sine o hans, hendes? (unità 10)`,
          html:
            `<p>Alla 3ª persona singolare, se la cosa appartiene <strong>al soggetto stesso</strong>, si usa il riflessivo <span class="da">sin / sit / sine</span>, che concorda con la cosa posseduta.</p>` +
            ex([[`Hun tager sin taske.`, `Prende la sua (propria) borsa.`], [`Hun tager hendes taske.`, `Prende la borsa di un'altra.`], [`De elsker deres børn.`, `Al plurale si usa sempre deres.`]])
        },
        {
          titolo: `man / en (unità 10)`,
          html:
            `<p><span class="da">man</span> è il "si" impersonale e fa solo da soggetto; come complemento diventa <span class="da">en</span>.</p>` +
            ex([[`Man bliver glad af god mad.`, `Si diventa felici con il buon cibo.`], [`God mad gør en glad.`, `Il buon cibo rende felici.`]])
        }
      ],
      quiz: [
        q(`Vi har ___ salt i køkkenet.`, [`noget`, `nogen`, `nogle`, `mange`], `Sale = non numerabile: <span class="da">noget</span>.`),
        q(`De køber ___ æbler.`, [`nogle`, `noget`, `nogen`, `meget`], `Frase affermativa con plurale: <span class="da">nogle</span>.`),
        q(`Har du ___ søskende?`, [`nogen`, `noget`, `nogle`, `meget`], `Domanda con un plurale: <span class="da">nogen</span>.`),
        q(`Familien har ikke ___ kæledyr.`, [`noget`, `nogle`, `nogen`, `mange`], `Negativa con un et-ord singolare (et kæledyr): <span class="da">noget</span>.`),
        q(`Hun tager ___ taske. <em>(la propria)</em>`, [`sin`, `hendes`, `sit`, `sine`], `Appartiene al soggetto e <span class="da">taske</span> è en-ord: <span class="da">sin</span>.`),
        q(`Han er god til ___ job. <em>(il proprio)</em>`, [`sit`, `sin`, `hans`, `sine`], `<span class="da">job</span> è neutro: <span class="da">sit</span>.`),
        q(`Hun elsker ___ børn. <em>(i propri)</em>`, [`sine`, `sin`, `deres`, `hendes egen`], `Plurale della cosa posseduta: <span class="da">sine</span>.`),
        q(`De elsker ___ børn.`, [`deres`, `sine`, `sin`, `dem`], `Con un soggetto plurale si usa sempre <span class="da">deres</span>.`),
        q(`Hvor tit bør ___ børste tænder? <em>(si)</em>`, [`man`, `en`, `sig`, `den`], `Il soggetto impersonale è <span class="da">man</span>.`),
        q(`God mad gør ___ glad.`, [`en`, `man`, `sig`, `ens`], `Come complemento <span class="da">man</span> diventa <span class="da">en</span>.`)
      ]
    },

    preposizioni: {
      sommario: `Preposizioni di luogo con i verbi di posizione, e i / siden con il passato prossimo.`,
      sezioni: [
        {
          titolo: `Dove si trova? (unità 9)`,
          html:
            table([`Danese`, `Italiano`], [
              [`på`, `su (superficie)`], [`i`, `in, dentro`], [`under`, `sotto`], [`over`, `sopra (senza toccare)`],
              [`foran`, `davanti a`], [`bagved`, `dietro`], [`mellem`, `tra`], [`ved siden af`, `accanto a`]
            ]) +
            ex([[`Bolden ligger i kassen.`, `La palla è nella scatola.`], [`Kassen står mellem to bolde.`, `La scatola è tra due palle.`], [`Pengene ligger i pungen.`, `I soldi sono nel portafoglio.`]])
        },
        {
          titolo: `i e siden con il passato prossimo (unità 10)`,
          html:
            ex([[`Sofie har studeret biologi i fire år.`, `… da quattro anni (durata).`], [`Fru Nielsen har været pensionist siden 2020.`, `… dal 2020 (punto di partenza).`]])
        }
      ],
      quiz: [
        q(`Nøglen ligger ___ spisebordet.`, [`på`, `i`, `under`, `mellem`], `Sulla superficie del tavolo: <span class="da">på</span>.`),
        q(`Pengene ligger ___ pungen.`, [`i`, `på`, `over`, `ved`], `Dentro il portafoglio: <span class="da">i</span>.`),
        q(`Stolen står ___ bordet. <em>(davanti a)</em>`, [`foran`, `bagved`, `under`, `over`], `<span class="da">foran</span> = davanti a.`),
        q(`Bolden ligger ___ kassen. <em>(dietro)</em>`, [`bagved`, `foran`, `i`, `på`], `<span class="da">bagved</span> = dietro.`),
        q(`Kassen står ___ to bolde. <em>(tra)</em>`, [`mellem`, `ved`, `over`, `under`], `<span class="da">mellem</span> = tra.`),
        q(`Katten sover ___ sengen. <em>(sotto)</em>`, [`under`, `over`, `bagved`, `mellem`], `<span class="da">under</span> = sotto.`),
        q(`Lampen hænger ___ bordet. <em>(sopra)</em>`, [`over`, `på`, `under`, `i`], `Sopra senza toccare: <span class="da">over</span>.`),
        q(`Der hænger et billede ___ væggen.`, [`på`, `i`, `over`, `ved`], `Appeso alla parete: <span class="da">på væggen</span>.`),
        q(`Sofie har studeret biologi ___ fire år.`, [`i`, `siden`, `for`, `på`], `Durata di un'azione ancora in corso: <span class="da">i</span> + periodo.`),
        q(`Fru Nielsen har været pensionist ___ 2020.`, [`siden`, `i`, `fra`, `for`], `Punto di partenza: <span class="da">siden</span> (dal).`)
      ]
    },

    congiunzioni: {
      sommario: `end nei paragoni, at (che), fordi (perché) e for contro fordi.`,
      sezioni: [
        {
          titolo: `end: il secondo termine di paragone (unità 10)`,
          html:
            ex([[`Det er koldere i dag end i går.`, `Fa più freddo oggi che ieri.`], [`Marts er varmere end januar.`, `Marzo è più caldo di gennaio.`]]) +
            tip(`"di" e "che" del paragone si traducono sempre con <span class="da">end</span>.`)
        },
        {
          titolo: `at e fordi`,
          html:
            ex([[`Jeg tror, at han er gift.`, `Credo che sia sposato.`], [`De unge flytter, fordi de vil gå på universitetet.`, `I giovani si trasferiscono perché vogliono andare all'università.`]]) +
            `<p><span class="da">for</span> e <span class="da">fordi</span> vogliono dire entrambi "perché": <span class="da">fordi</span> introduce una subordinata (con <span class="da">ikke</span> prima del verbo), <span class="da">for</span> una frase principale e non può stare all'inizio.</p>`
        }
      ],
      quiz: [
        q(`Marts er varmere ___ januar.`, [`end`, `som`, `af`, `at`], `Nei paragoni "di/che" = <span class="da">end</span>.`),
        q(`Det er koldere i dag ___ i går.`, [`end`, `som`, `så`, `og`], `Comparativo + <span class="da">end</span>.`),
        q(`Der er flere indere ___ kinesere.`, [`end`, `af`, `som`, `fra`], `Anche con <span class="da">flere</span>: <span class="da">end</span>.`),
        q(`Jeg tror, ___ han kommer i morgen.`, [`at`, `om`, `end`, `for`], `"che" dopo verbi di opinione: <span class="da">at</span>.`),
        q(`De unge flytter, ___ de vil gå på universitetet.`, [`fordi`, `at`, `end`, `men`], `Causa: <span class="da">fordi</span> (perché).`),
        q(`Quale di queste congiunzioni <strong>non</strong> può stare all'inizio della frase?`, [`For`, `Fordi`, `Når`, `Hvis`], `<span class="da">for</span> collega due principali e non può stare in testa alla frase.`),
        q(`Han ligger i sengen, fordi han ___.`, [`ikke har det godt`, `har ikke det godt`, `har det ikke godt`, `det har ikke godt`], `Nella subordinata <span class="da">ikke</span> va prima del verbo.`),
        q(`Han ligger i sengen, for han ___.`, [`har det ikke godt`, `ikke har det godt`, `ikke det har godt`, `har ikke godt det`], `Dopo <span class="da">for</span> l'ordine è quello della principale: <span class="da">ikke</span> dopo il verbo.`),
        q(`Han siger, ___ hun er venlig.`, [`at`, `om`, `end`, `fordi`], `Discorso indiretto affermativo: <span class="da">at</span>.`),
        q(`Den nye lejlighed er større ___ den gamle.`, [`end`, `som`, `og`, `at`], `Paragone di maggioranza: <span class="da">større end</span>.`)
      ]
    },

    inversione: {
      sommario: `Il soggetto provvisorio der, l'inversione con il passato prossimo e i modali.`,
      sezioni: [
        {
          titolo: `Il soggetto provvisorio der (unità 9)`,
          html:
            `<p>Quando il soggetto è indeterminato si apre la frase con <span class="da">der</span> e il vero soggetto va dopo il verbo.</p>` +
            ex([[`Mange lejligheder er i byen. → Der er mange lejligheder i byen.`, `Ci sono molti appartamenti in città.`], [`Der ligger en avis i postkassen.`, `C'è un giornale nella cassetta.`], [`Der kommer mange gæster til festen.`, `Vengono molti ospiti alla festa.`]])
        },
        {
          titolo: `V2 con i tempi composti`,
          html:
            `<p>Con il passato prossimo o un modale, al 2° posto va l'<strong>ausiliare</strong>; il participio o l'infinito restano in fondo.</p>` +
            ex([[`I dag har jeg arbejdet hele dagen.`, `Oggi ho lavorato tutto il giorno.`], [`Der har jeg aldrig været.`, `Lì non ci sono mai stato.`]]) +
            tip(`<span class="da">ikke</span> e <span class="da">aldrig</span> vanno dopo verbo + soggetto, prima del participio.`)
        }
      ],
      quiz: [
        q(`___ en avis i postkassen.`, [`Der ligger`, `Ligger der`, `Det ligger`, `Den ligger`], `Soggetto indeterminato → <span class="da">Der ligger…</span>`),
        q(`___ mange mennesker i Kina.`, [`Der bor`, `Det bor`, `Bor der`, `De bor`], `Il soggetto provvisorio è <span class="da">der</span>, non <span class="da">det</span>.`),
        q(`I morgen ___ mange gæster til festen.`, [`kommer der`, `der kommer`, `kommer det`, `det kommer`], `Inversione: verbo al 2° posto, poi <span class="da">der</span>.`),
        q(`Scegli la frase corretta:`, [`I dag har jeg arbejdet hele dagen.`, `I dag jeg har arbejdet hele dagen.`, `I dag har arbejdet jeg hele dagen.`, `I dag arbejdet har jeg hele dagen.`], `L'ausiliare <span class="da">har</span> al 2° posto, poi soggetto, poi participio.`),
        q(`Der ___ aldrig været. <em>(Lì non sono mai stato)</em>`, [`har jeg`, `jeg har`, `er jeg`, `jeg er`], `<span class="da">Der</span> (lì) in testa → inversione: <span class="da">har jeg</span>.`),
        q(`Scegli la frase corretta:`, [`Hun har ikke set filmen.`, `Hun ikke har set filmen.`, `Hun har set ikke filmen.`, `Ikke hun har set filmen.`], `<span class="da">ikke</span> va tra l'ausiliare e il participio.`),
        q(`A: Har du set filmen? B: Ja, ___.`, [`det har jeg`, `det jeg har`, `jeg har det`, `har jeg det`], `Risposta breve: <span class="da">det har jeg</span>.`),
        q(`Hvor længe ___ i Danmark?`, [`har du boet`, `du har boet`, `har boet du`, `boet har du`], `Domanda: ausiliare, soggetto, participio.`),
        q(`Scegli la frase corretta:`, [`Der står en flaske vin i skabet.`, `Det står en flaske vin i skabet.`, `En flaske vin der står i skabet.`, `Står der en flaske vin i skabet det.`], `Soggetto indeterminato con verbo di posizione: <span class="da">Der står…</span>`),
        q(`På lørdag ___ til fest hos Charlotte.`, [`skal vi`, `vi skal`, `skal`, `vi skal gå`], `Espressione di tempo in testa → <span class="da">skal vi</span>.`)
      ]
    }
  },

  /* =====================================================================
   * AVANZATO · unità 11–15
   * ===================================================================== */
  avanzato: {

    verbi: {
      sommario: `Futuro, preterito, tro o synes, passivo, trapassato e azione durativa.`,
      sezioni: [
        {
          titolo: `Il futuro (unità 11)`,
          html:
            `<p>Il danese non ha un tempo futuro vero e proprio. Si usa il presente con un'indicazione di tempo, i modali <span class="da">skal / vil</span>, oppure <span class="da">blive</span> e <span class="da">komme</span>.</p>` +
            ex([[`Han spiser hjemme i aften.`, `Mangerà a casa stasera.`], [`Jeg skal flytte til Italien.`, `Mi trasferirò in Italia.`], [`Det bliver godt vejr i weekenden.`, `Farà bel tempo nel fine settimana.`], [`Der kommer meget regn i morgen.`, `Verrà molta pioggia domani.`]])
        },
        {
          titolo: `Il preterito (unità 12)`,
          html:
            table([`Gruppo`, `Infinito`, `Preterito`], [
              [`grande gruppo debole (-ede)`, `at lave`, `lavede`], [`piccolo gruppo debole (-te)`, `at spise`, `spiste`],
              [`irregolari (-de)`, `at have, at sige`, `havde, sagde`], [`forti (cambio vocale)`, `at drikke, at finde`, `drak, fandt`]
            ]) +
            `<p>Il preterito traduce imperfetto, passato remoto e spesso anche il passato prossimo italiano, quando l'azione è collocata in un momento concluso: <span class="da">i går, i lørdags, for tre år siden</span>.</p>`
        },
        {
          titolo: `tro o synes? (unità 13)`,
          html:
            ex([[`Jeg tror, at det bliver godt vejr i morgen.`, `Supposizione, futuro, cose misurabili.`], [`Jeg synes, at franske vine er sure.`, `Opinione personale, gusto, esperienza diretta.`]])
        },
        {
          titolo: `Passivo, trapassato e azione durativa (unità 14–15)`,
          html:
            `<p>Passivo con <strong>-s</strong> (<span class="da">vaskes, vaskedes</span>) o con <span class="da">blive</span> + participio (<span class="da">Huset blev opført af min morfar</span>). Trapassato: <span class="da">havde / var</span> + participio. Azione in corso: verbo di posizione + <span class="da">og</span> (<span class="da">De lå og sov</span>) oppure <span class="da">være ved at</span>.</p>`
        }
      ],
      quiz: [
        q(`Det ___ godt vejr i weekenden. <em>(farà)</em>`, [`bliver`, `bli'r at`, `skal være at`, `blev`], `Per il futuro si usa spesso <span class="da">blive</span> al presente.`),
        q(`I går ___ hun hjemme. <em>(at spise)</em>`, [`spiste`, `spisede`, `spiser`, `spist`], `<span class="da">spise</span> è del piccolo gruppo debole: preterito in <span class="da">-te</span>.`),
        q(`Hvad ___ du i går? <em>(at lave)</em>`, [`lavede`, `lavte`, `laver`, `har lavet i går`], `Grande gruppo debole: <span class="da">-ede</span>. Con <span class="da">i går</span> si usa il preterito.`),
        q(`Han ___ en øl i aftes. <em>(at drikke)</em>`, [`drak`, `drikkede`, `drikte`, `drukket`], `Verbo forte: la vocale cambia, <span class="da">drikke → drak</span>.`),
        q(`Han er ret tyk. Jeg ___, at han vejer mindst 100 kilo.`, [`tror`, `synes`, `syntes`, `synes om`], `Una supposizione su qualcosa di misurabile: <span class="da">tror</span>.`),
        q(`Har du været i Prag? Det er en virkelig dejlig by, ___ jeg.`, [`synes`, `tror`, `troede`, `menes`], `Opinione basata sull'esperienza diretta: <span class="da">synes</span>.`),
        q(`Huset ___ af min morfar i 1937.`, [`blev opført`, `opførte`, `er opførende`, `bliver opførte`], `Passivo con <span class="da">blive</span> + participio per un evento concreto; l'agente con <span class="da">af</span>.`),
        q(`Beløbet ___ af kommunen. <em>(viene amministrata)</em>`, [`administreres`, `administrerer`, `administreret`, `bliver administrerer`], `Passivo con <span class="da">-s</span>: <span class="da">administrere → administreres</span>.`),
        q(`Sofie var ked af det, fordi hun ___ en dårlig karakter.`, [`havde fået`, `har fået`, `fik haft`, `var fået`], `Azione anteriore a un'altra al passato: trapassato <span class="da">havde fået</span>.`),
        q(`Stavano dormendo.`, [`De lå og sov.`, `De var sovende.`, `De sov og lå.`, `De stod og sov.`], `Azione durativa: verbo di posizione + <span class="da">og</span>. Si dorme sdraiati: <span class="da">lå og sov</span>.`)
      ]
    },

    avverbi: {
      sommario: `Avverbi di luogo: hjem/hjemme, ud/ude, ind/inde, op/oppe e derned/heroppe.`,
      sezioni: [
        {
          titolo: `Moto a luogo o stato in luogo? (unità 14)`,
          html:
            `<p>Alcuni avverbi hanno due forme: quella base per il <strong>movimento verso</strong> un luogo e quella in <strong>-e</strong> per lo <strong>stare</strong> in un luogo.</p>` +
            table([`Moto (verso dove?)`, `Stato (dove?)`, `Italiano`], [
              [`hjem`, `hjemme`, `a casa`], [`ud`, `ude`, `fuori`], [`ind`, `inde`, `dentro`], [`op`, `oppe`, `su`], [`ned`, `nede`, `giù`], [`hen`, `henne`, `(là)`], [`over`, `ovre`, `dall'altra parte`]
            ]) +
            ex([[`Hun går hen til bageren.`, `Va dal fornaio.`], [`Hun er henne hos bageren.`, `È dal fornaio.`]])
        },
        {
          titolo: `La direzione sta nell'avverbio`,
          html:
            `<p>L'italiano dice entrare, uscire, salire, scendere; il danese dice <em>come</em> ci si muove e aggiunge la direzione: <span class="da">gå ind, gå ud, gå op, gå ned</span>.</p>` +
            ex([[`Camilla gik ind i køkkenet.`, `Camilla entrò in cucina.`], [`Hun flyver derned. / Hvad laver hun dernede?`, `Vola laggiù. / Cosa fa laggiù?`]])
        }
      ],
      quiz: [
        q(`Han gik tidligt ___.`, [`hjem`, `hjemme`, `hjemmet`, `hjemad til`], `Movimento verso casa: <span class="da">hjem</span>.`),
        q(`I dag arbejder han ___.`, [`hjemme`, `hjem`, `hjemmet`, `til hjem`], `Si trova a casa: <span class="da">hjemme</span>.`),
        q(`Jeg vil gerne ___ nu. <em>(andare a casa)</em>`, [`hjem`, `hjemme`, `hjemmet`, `være hjem`], `Con <span class="da">vil</span> sottinteso il movimento: <span class="da">hjem</span>.`),
        q(`Hun løber ___ i haven. <em>(esce correndo in giardino)</em>`, [`ud`, `ude`, `inde`, `ind`], `Movimento verso fuori: <span class="da">ud</span>.`),
        q(`Børnene leger ___ i stuen. <em>(dentro)</em>`, [`inde`, `ind`, `ude`, `ud`], `Stanno dentro, nessun movimento verso: <span class="da">inde</span>.`),
        q(`Sofie er ___ i kælderen. <em>(giù)</em>`, [`nede`, `ned`, `oppe`, `op`], `Stato in luogo: forma in -e, <span class="da">nede</span>.`),
        q(`Hun er ___ hos bageren.`, [`henne`, `hen`, `hjemme`, `ovre`], `Si trova dal fornaio: <span class="da">henne</span>.`),
        q(`Camilla entrò in cucina.`, [`Camilla gik ind i køkkenet.`, `Camilla gik inde i køkkenet.`, `Camilla entrede køkkenet inde.`, `Camilla gik i køkkenet ind.`], `"Entrare" = <span class="da">gå ind</span>: la direzione è nell'avverbio.`),
        q(`Camilla scese le scale.`, [`Camilla gik ned ad trappen.`, `Camilla gik nede ad trappen.`, `Camilla gik op ad trappen.`, `Camilla nedgik trappen.`], `"Scendere" = <span class="da">gå ned</span>.`),
        q(`Hun flyver til Spanien. Hvad laver hun ___?`, [`dernede`, `derned`, `heroppe`, `herop`], `Stato in un luogo lontano (verso sud): <span class="da">dernede</span>.`)
      ]
    },

    pronomi: {
      sommario: `hvilken/hvilket/hvilke, i relativi der e som, i dimostrativi e la posizione dei pronomi.`,
      sezioni: [
        {
          titolo: `hvilken, hvilket, hvilke (unità 11)`,
          html:
            ex([[`Hvilken dag skal vi holde fest?`, `comune singolare (en dag)`], [`Hvilket tøj skal jeg vælge?`, `neutro singolare (et tøj)`], [`Hvilke sko har du på?`, `plurale`]]) +
            tip(`Nel parlato si sente spesso <span class="da">hvad for en / et / nogle</span>.`)
        },
        {
          titolo: `I relativi der e som (unità 14)`,
          html:
            `<p><span class="da">der</span> può essere solo <strong>soggetto</strong> della relativa; <span class="da">som</span> può essere soggetto, oggetto o retto da una preposizione (che va in fondo).</p>` +
            ex([[`Jeg har en veninde, der/som er meget klog.`, `soggetto: der o som`], [`Jeg har en veninde, som jeg ser hver fredag.`, `oggetto: solo som`], [`… en veninde, som jeg skal på ferie med.`, `preposizione in fondo`]])
        },
        {
          titolo: `Dimostrativi (unità 15)`,
          html:
            table([``, `comune`, `neutro`, `plurale`], [
              [`vicino`, `denne (her)`, `dette (her)`, `disse (her)`], [`lontano`, `den (der)`, `det (der)`, `de (der)`]
            ]) +
            `<p>Come oggetto al plurale si usa <span class="da">dem</span>: <span class="da">Nej, dem kan jeg slet ikke lide.</span></p>`
        }
      ],
      quiz: [
        q(`___ dag skal vi holde fest?`, [`Hvilken`, `Hvilket`, `Hvilke`, `Hvem`], `<span class="da">en dag</span>: comune singolare → <span class="da">hvilken</span>.`),
        q(`___ tøj skal jeg vælge?`, [`Hvilket`, `Hvilken`, `Hvilke`, `Hvad for en`], `<span class="da">et tøj</span>: neutro → <span class="da">hvilket</span>.`),
        q(`___ sko har du på?`, [`Hvilke`, `Hvilken`, `Hvilket`, `Hvem`], `Plurale → <span class="da">hvilke</span>.`),
        q(`___ lande er ikke med i EU?`, [`Hvilke`, `Hvilket`, `Hvilken`, `Hvad`], `<span class="da">lande</span> è plurale → <span class="da">hvilke</span>.`),
        q(`Jeg har en veninde, ___ jeg ser hver fredag.`, [`som`, `der`, `hvem`, `hvad`], `Il relativo è oggetto: solo <span class="da">som</span>, mai <span class="da">der</span>.`),
        q(`Jeg har en veninde, ___ er meget klog, og som bor i København.`, [`der`, `hvem`, `hvis`, `hvilken`], `Soggetto della relativa: <span class="da">der</span> (o som). La seconda relativa coordinata vuole <span class="da">som</span>.`),
        q(`Den veninde, ___ jeg skal på ferie ___, er lige flyttet.`, [`som … med`, `der … med`, `hvilken … med`, `hvem … med`], `Con la preposizione si usa <span class="da">som</span> e la preposizione va in fondo (som può anche essere omesso).`),
        q(`Jeg har købt ___ smukke ring. <em>(questo)</em>`, [`denne`, `dette`, `disse`, `den her her`], `<span class="da">ring</span> è comune, vicino: <span class="da">denne</span>. L'aggettivo prende -e.`),
        q(`A: Kan du lide disse støvler? B: Nej, ___ kan jeg slet ikke lide.`, [`dem`, `de`, `disse`, `deres`], `Dimostrativo plurale in funzione di oggetto: <span class="da">dem</span>.`),
        q(`Scegli la frase corretta:`, [`Jesper giver hende den ikke i dag.`, `Jesper giver ikke hende den i dag.`, `Jesper giver den hende ikke i dag.`, `Jesper ikke giver hende den i dag.`], `Nei tempi semplici i pronomi oggetto vanno prima di <span class="da">ikke</span>, e l'indiretto prima del diretto.`)
      ]
    },

    preposizioni: {
      sommario: `Espressioni di tempo al passato e al futuro, af nel passivo, om con synes e handle.`,
      sezioni: [
        {
          titolo: `Tempo passato (unità 12)`,
          html:
            table([`Struttura`, `Esempi`], [
              [`i + giorno + -s`, `i mandags (lunedì scorso), i lørdags`],
              [`for … siden`, `for to dage siden (due giorni fa)`],
              [`i sidste + periodo`, `i sidste uge (la settimana scorsa), sidste år`],
              [`i + parte del giorno`, `i går, i nat, i aftes (ieri sera), i morges`]
            ])
        },
        {
          titolo: `Tempo futuro (unità 11)`,
          html: ex([[`i aften`, `stasera`], [`på fredag`, `venerdì prossimo`], [`til sommer`, `la prossima estate`], [`i næste uge`, `la settimana prossima`]])
        },
        {
          titolo: `Altre preposizioni fisse (unità 13–14)`,
          html: ex([[`Hvad synes du om filmen?`, `Che ne pensi del film?`], [`Den handler om fire mænd.`, `Parla di quattro uomini.`], [`Huset blev opført af min morfar.`, `Fu costruita da mio nonno (agente del passivo).`], [`Camilla gik ud af køkkenet.`, `Camilla uscì dalla cucina.`]])
        }
      ],
      quiz: [
        q(`Charlotte flyttede til København ___ tre år ___.`, [`for … siden`, `i … siden`, `siden … for`, `for … før`], `"tre anni fa" = <span class="da">for tre år siden</span>.`),
        q(`Jeg købte et par sko ___. <em>(mercoledì scorso)</em>`, [`i onsdags`, `på onsdag`, `om onsdagen`, `i onsdag`], `Giorno passato: <span class="da">i</span> + giorno + <span class="da">-s</span>.`),
        q(`Vi var i London ___. <em>(l'anno scorso)</em>`, [`sidste år`, `næste år`, `for et år`, `om året`], `<span class="da">sidste år</span> = l'anno scorso.`),
        q(`Hvad lavede du ___? <em>(ieri sera)</em>`, [`i aftes`, `i aften`, `om aftenen`, `på aften`], `<span class="da">i aftes</span> = ieri sera; <span class="da">i aften</span> = stasera.`),
        q(`Rikke går på ferie ___ fredag. <em>(venerdì prossimo)</em>`, [`på`, `i`, `om`, `for`], `Futuro vicino: <span class="da">på fredag</span>.`),
        q(`Vi tager til Rom ___ næste uge.`, [`i`, `på`, `om`, `til`], `<span class="da">i næste uge</span> = la settimana prossima.`),
        q(`Hvad synes du ___ filmen?`, [`om`, `på`, `af`, `til`], `<span class="da">synes om</span>: avere un'opinione su qualcosa.`),
        q(`Den handler ___ kærlighed og venskab.`, [`om`, `af`, `på`, `med`], `"Parla di…" = <span class="da">handler om</span>.`),
        q(`Huset blev opført ___ min morfar.`, [`af`, `fra`, `med`, `ved`], `L'agente del passivo si introduce con <span class="da">af</span>.`),
        q(`Camilla gik ud ___ køkkenet.`, [`af`, `fra`, `i`, `til`], `"uscire da" = <span class="da">gå ud af</span>.`)
      ]
    },

    congiunzioni: {
      sommario: `at/om, da/når, hvis/om, fordi/selvom e le subordinanti di tempo.`,
      sezioni: [
        {
          titolo: `at e om (unità 11)`,
          html: ex([[`Sofie siger, at det ikke bliver regnvejr i dag.`, `at = che`], [`Camilla spørger, om det også bliver regnvejr.`, `om = se (domanda indiretta)`]])
        },
        {
          titolo: `da o når? (unità 12)`,
          html:
            table([`Congiunzione`, `Uso`, `Esempio`], [
              [`<span class="da">da</span>`, `un momento o un periodo concluso nel passato`, `Sofie var 18 år, da hun blev student.`],
              [`<span class="da">når</span>`, `futuro, oppure cose che si ripetono (presente o passato)`, `Når jeg bliver gift, vil jeg have børn. Hun var altid træt, når hun fik fri.`]
            ])
        },
        {
          titolo: `Altre subordinanti (unità 13)`,
          html:
            table([`Danese`, `Italiano`], [
              [`hvis`, `se (condizione)`], [`om`, `se (domanda indiretta)`], [`fordi`, `perché`], [`selvom`, `anche se`],
              [`inden / før`, `prima che`], [`mens`, `mentre`], [`siden`, `da quando`], [`så`, `affinché`]
            ])
        }
      ],
      quiz: [
        q(`Camilla spørger, ___ det også bliver regnvejr i dag.`, [`om`, `at`, `hvis`, `da`], `Domanda indiretta: <span class="da">om</span>.`),
        q(`Jeg kommer, ___ jeg har tid.`, [`hvis`, `om`, `da`, `selvom`], `Condizione: <span class="da">hvis</span>. <span class="da">om</span> è solo per le domande indirette.`),
        q(`___ jeg var barn, ville jeg være arkæolog.`, [`Da`, `Når`, `Hvis`, `Om`], `Periodo concluso nel passato: <span class="da">da</span>.`),
        q(`___ det er vinter, er vejene glatte.`, [`Når`, `Da`, `Om`, `Mens`], `Qualcosa che succede ogni volta: <span class="da">når</span>.`),
        q(`Sofie var 18 år, ___ hun blev student.`, [`da`, `når`, `hvis`, `om`], `Un momento preciso nel passato: <span class="da">da</span>.`),
        q(`Jeg er ikke træt, ___ jeg kun har sovet et par timer.`, [`selvom`, `fordi`, `så`, `når`], `Concessiva: <span class="da">selvom</span> (anche se).`),
        q(`Hun er bekymret, ___ hendes mor er på hospitalet.`, [`fordi`, `selvom`, `om`, `så`], `Causa: <span class="da">fordi</span>.`),
        q(`Tag varmt tøj på, ___ du ikke bliver kold.`, [`så`, `for`, `selvom`, `da`], `Scopo (affinché): <span class="da">så</span> + subordinata.`),
        q(`Pigerne snakkede sammen, ___ drengene spillede bordfodbold.`, [`mens`, `siden`, `inden`, `om`], `Due azioni contemporanee: <span class="da">mens</span>.`),
        q(`Jeg børster tænder, ___ jeg går på arbejde.`, [`inden`, `mens`, `siden`, `selvom`], `"prima di" = <span class="da">inden</span>.`)
      ]
    },

    inversione: {
      sommario: `L'ordine delle parole nella subordinata e l'inversione quando la subordinata viene prima.`,
      sezioni: [
        {
          titolo: `La subordinata: ikke prima del verbo (unità 11)`,
          html:
            `<p>Nella subordinata <strong>non c'è inversione</strong> e avverbi come <span class="da">ikke, også, måske, altid</span> vanno <strong>tra soggetto e verbo</strong>.</p>` +
            ex([[`Det bliver ikke regnvejr i dag.`, `principale`], [`Sofie siger, at det ikke bliver regnvejr i dag.`, `subordinata`]])
        },
        {
          titolo: `Subordinata in testa → inversione (unità 12–13)`,
          html:
            `<p>Se la subordinata viene prima, occupa il 1° posto: nella principale il verbo viene subito dopo, e poi il soggetto.</p>` +
            ex([[`Du skal slukke lyset, inden du går.`, `Devi spegnere la luce prima di uscire.`], [`Inden du går, skal du slukke lyset.`, `Prima di uscire devi spegnere la luce.`], [`Når jeg bliver voksen, vil jeg være politibetjent.`, `Da grande voglio fare il poliziotto.`]])
        }
      ],
      quiz: [
        q(`Sofie siger, at det ___ i dag.`, [`ikke bliver regnvejr`, `bliver ikke regnvejr`, `bliver regnvejr ikke`, `ikke regnvejr bliver`], `Nella subordinata <span class="da">ikke</span> precede il verbo.`),
        q(`Inden du går, ___ slukke lyset.`, [`skal du`, `du skal`, `du skal at`, `skal at du`], `La subordinata è al 1° posto: segue subito il verbo, poi il soggetto.`),
        q(`Når jeg bliver voksen, ___ være politibetjent.`, [`vil jeg`, `jeg vil`, `jeg vil at`, `vil at jeg`], `Subordinata in testa → inversione nella principale.`),
        q(`Da Charlotte var studerende, ___ mange sjove fester.`, [`holdt hun`, `hun holdt`, `hun holdte`, `holdte hun`], `Inversione dopo la subordinata, e il preterito di <span class="da">holde</span> è <span class="da">holdt</span>.`),
        q(`Camilla spørger, om det ___ regnvejr i dag.`, [`også bliver`, `bliver også`, `bliver regnvejr også`, `også det bliver`], `Anche <span class="da">også</span> va prima del verbo nella subordinata.`),
        q(`Hvis du vil, ___.`, [`kan du`, `du kan`, `du kan det`, `kan`], `Dopo una subordinata con <span class="da">hvis</span> in testa: <span class="da">kan du</span>.`),
        q(`Scegli la frase corretta:`, [`Jeg spiser kagen, selvom jeg ikke har lyst.`, `Jeg spiser kagen, selvom jeg har ikke lyst.`, `Jeg spiser kagen, selvom har jeg ikke lyst.`, `Jeg spiser kagen, selvom ikke jeg har lyst.`], `Subordinata: soggetto + <span class="da">ikke</span> + verbo.`),
        q(`Scegli la frase corretta:`, [`Sofie ser dem næsten aldrig.`, `Sofie ser næsten aldrig dem.`, `Sofie dem ser næsten aldrig.`, `Sofie næsten aldrig ser dem.`], `Nel presente e nel preterito il pronome oggetto si sposta prima dell'avverbio.`),
        q(`Scegli la frase corretta:`, [`I år vil jeg altså ikke fejre det med Mogens.`, `I år vil jeg det altså ikke fejre med Mogens.`, `I år jeg vil altså ikke fejre det med Mogens.`, `I år vil det jeg altså ikke fejre med Mogens.`], `Con un infinito (V occupato) il pronome resta dopo il verbo principale.`),
        q(`Hun var altid træt, når hun ___ fri fra arbejde.`, [`fik`, `får`, `fikk`, `fået`], `Azione ripetuta nel passato: <span class="da">når</span> + preterito (<span class="da">få → fik</span>).`)
      ]
    }
  }
};
