/*
 * Contenuti dell'app: livelli, argomenti, spiegazioni ed esercizi.
 * Negli esercizi la PRIMA opzione è sempre quella corretta:
 * l'app mescola le opzioni prima di mostrarle.
 */

var LEVELS = [
  { id: 'principiante', nome: 'Principiante', descrizione: 'Le basi: presente, pronomi personali, prime preposizioni e la regola V2.' },
  { id: 'intermedio', nome: 'Intermedio', descrizione: 'Passato, possessivi, frasi subordinate e inversione dopo avverbi.' },
  { id: 'avanzato', nome: 'Avanzato', descrizione: 'Passivo, pronomi relativi, verbi con preposizione fissa e sfumature.' }
];

var TOPICS = [
  { id: 'verbi', nome: 'Verbi', danese: 'verber' },
  { id: 'avverbi', nome: 'Avverbi', danese: 'adverbier' },
  { id: 'pronomi', nome: 'Pronomi', danese: 'pronominer' },
  { id: 'preposizioni', nome: 'Preposizioni', danese: 'præpositioner' },
  { id: 'congiunzioni', nome: 'Congiunzioni', danese: 'konjunktioner' },
  { id: 'inversione', nome: 'Regola di inversione', danese: 'inversion / V2' }
];

/* Piccoli aiuti per scrivere gli esempi e le tabelle */
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

var CONTENT = {

  /* =====================================================================
   * PRINCIPIANTE
   * ===================================================================== */
  principiante: {

    verbi: {
      sommario: 'Infinito, presente e i verbi irregolari være e have.',
      sezioni: [
        {
          titolo: "L'infinito",
          html:
            '<p>In danese l\'infinito è preceduto dalla particella <span class="da">at</span>, che funziona un po\' come il "to" inglese. Quasi tutti gli infiniti finiscono in <strong>-e</strong>.</p>' +
            ex([['at komme', 'venire'], ['at hedde', 'chiamarsi'], ['at tale', 'parlare'], ['at bo', 'abitare']])
        },
        {
          titolo: 'Il presente: basta aggiungere -r',
          html:
            '<p>Per formare il presente si aggiunge <strong>-r</strong> all\'infinito. La bella notizia: il verbo <strong>non cambia mai</strong> secondo la persona. <span class="da">jeg kommer</span>, <span class="da">du kommer</span>, <span class="da">de kommer</span>: sempre uguale!</p>' +
            table(['Infinito', 'Presente', 'Italiano'], [
              ['at komme', '<span class="da">kommer</span>', 'vengo, vieni, viene…'],
              ['at hedde', '<span class="da">hedder</span>', 'mi chiamo, ti chiami…'],
              ['at bo', '<span class="da">bor</span>', 'abito, abiti…'],
              ['at tale', '<span class="da">taler</span>', 'parlo, parli…']
            ]) +
            tip('Visto che il verbo non cambia, in danese il <strong>soggetto è obbligatorio</strong>. In italiano diciamo "abito a Roma", in danese bisogna dire <span class="da">Jeg bor i Rom</span>.') +
            ex([['Johan bor i København.', 'Johan vive a Copenaghen.'], ['Johan og Kristian bor i København.', 'Johan e Kristian vivono a Copenaghen.']])
        },
        {
          titolo: 'Essere e avere: være e have',
          html:
            '<p>I due ausiliari sono irregolari, ma anche loro restano uguali per tutte le persone.</p>' +
            table(['Infinito', 'Presente', 'Esempio'], [
              ['at være (essere)', '<span class="da">er</span>', '<span class="da">Jeg er syg.</span> Sono malato/a.'],
              ['at have (avere)', '<span class="da">har</span>', '<span class="da">Jeg har feber.</span> Ho la febbre.']
            ])
        },
        {
          titolo: 'I verbi modali',
          html:
            '<p>I verbi modali <strong>non</strong> prendono la -r al presente e sono seguiti dall\'infinito <strong>senza</strong> <span class="da">at</span>.</p>' +
            table(['Infinito', 'Presente', 'Significato'], [
              ['at kunne', '<span class="da">kan</span>', 'potere, sapere (fare)'],
              ['at ville', '<span class="da">vil</span>', 'volere'],
              ['at skulle', '<span class="da">skal</span>', 'dovere (programma), andare a'],
              ['at måtte', '<span class="da">må</span>', 'potere (permesso), dovere']
            ]) +
            ex([['Hun kan tale italiensk.', 'Lei sa parlare italiano.'], ['Jeg vil gerne have en kaffe.', 'Vorrei un caffè.']])
        }
      ],
      quiz: [
        { domanda: 'Hun ___ fra Brasilien. <em>(at komme)</em>', opzioni: ['kommer', 'komme', 'kommerer'], spiegazione: 'Presente = infinito + -r: komme → <span class="da">kommer</span>.' },
        { domanda: 'Jeg ___ syg. <em>(sono malato)</em>', opzioni: ['er', 'har', 'være'], spiegazione: '"Essere" al presente è <span class="da">er</span>.' },
        { domanda: 'Hans ___ tandpine. <em>(ha mal di denti)</em>', opzioni: ['har', 'er', 'have'], spiegazione: '"Avere" al presente è <span class="da">har</span>.' },
        { domanda: 'Du ___ tale dansk. <em>(at kunne)</em>', opzioni: ['kan', 'kunner', 'kanr'], spiegazione: 'I modali non prendono la -r: <span class="da">kan</span>.' },
        { domanda: 'Vi ___ i Aarhus. <em>(at bo)</em>', opzioni: ['bor', 'boer', 'bo'], spiegazione: 'bo + r = <span class="da">bor</span>, uguale per tutte le persone.' },
        { domanda: 'Quale frase è corretta?', opzioni: ['Jeg taler dansk.', 'Taler dansk.', 'Jeg tale dansk.'], spiegazione: 'Serve sempre il soggetto e il verbo al presente prende la -r.' }
      ]
    },

    avverbi: {
      sommario: 'ikke, også, heller ikke, godt: dove si mettono e come si usano.',
      sezioni: [
        {
          titolo: 'La negazione ikke',
          html:
            '<p><span class="da">ikke</span> significa "non". Nella frase principale si mette <strong>dopo il verbo</strong>, non prima come in italiano.</p>' +
            ex([['Han er ikke amerikaner.', '(Lui) non è americano.'], ['Hun kan ikke tale italiensk.', '(Lei) non sa parlare italiano.']]) +
            tip('Italiano: "Lui <strong>non</strong> è…" → Danese: "Han er <strong>ikke</strong>…". Prima il verbo, poi <span class="da">ikke</span>.')
        },
        {
          titolo: 'Avverbi utili',
          html:
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">også</span>', 'anche', '<span class="da">Han taler også fransk.</span>'],
              ['<span class="da">godt</span>', 'bene', '<span class="da">Det går godt.</span> Va bene.'],
              ['<span class="da">dårligt</span>', 'male', '<span class="da">Det går dårligt.</span> Va male.'],
              ['<span class="da">meget</span>', 'molto', '<span class="da">Jeg er meget træt.</span>'],
              ['<span class="da">lidt</span>', 'un po\'', '<span class="da">Hun er lidt syg.</span>'],
              ['<span class="da">altid</span>', 'sempre', '<span class="da">Jeg drikker altid kaffe.</span>']
            ]) +
            '<p>Come <span class="da">ikke</span>, anche questi avverbi si mettono dopo il verbo.</p>'
        },
        {
          titolo: 'Anche a me / Neanche a me',
          html:
            '<p>Per rispondere a qualcuno dicendo che sei d\'accordo o no, si usano <span class="da">også</span>, <span class="da">heller ikke</span> e <span class="da">derimod</span>.</p>' +
            table(['Frase', 'Anche io / Neanche io', 'Io invece…'], [
              ['<span class="da">Jeg kan godt lide at svømme.</span><br>Mi piace nuotare.', '<span class="da">Det kan jeg også.</span><br>Anche a me.', '<span class="da">Det kan jeg derimod ikke.</span><br>A me invece no.'],
              ['<span class="da">Jeg kan ikke lide at svømme.</span><br>Non mi piace nuotare.', '<span class="da">Det kan jeg heller ikke.</span><br>Neanche a me.', '<span class="da">Det kan jeg derimod godt.</span><br>A me invece sì.']
            ])
        }
      ],
      quiz: [
        { domanda: 'Quale frase è corretta?', opzioni: ['Han er ikke amerikaner.', 'Han ikke er amerikaner.', 'Ikke han er amerikaner.'], spiegazione: 'Nella principale <span class="da">ikke</span> va dopo il verbo.' },
        { domanda: 'Jeg kan godt lide kaffe, og det kan Peter ___.', opzioni: ['også', 'heller ikke', 'ikke'], spiegazione: 'Frase positiva + accordo = <span class="da">også</span>.' },
        { domanda: 'Jeg kan ikke lide te, og det kan Anna ___.', opzioni: ['heller ikke', 'også', 'derimod ikke'], spiegazione: 'Frase negativa + accordo = <span class="da">heller ikke</span> (neanche).' },
        { domanda: 'Hvordan går det? Det går ___. <em>(bene)</em>', opzioni: ['godt', 'god', 'meget'], spiegazione: '"Bene" come avverbio è <span class="da">godt</span>.' },
        { domanda: 'Mi piace ballare. — A me invece no: "Det kan jeg ___."', opzioni: ['derimod ikke', 'også', 'heller ikke'], spiegazione: 'Disaccordo con una frase positiva: <span class="da">derimod ikke</span>.' },
        { domanda: 'Hun taler ___ fransk. <em>(anche)</em>', opzioni: ['også', 'altid', 'lidt'], spiegazione: '"Anche" = <span class="da">også</span>, dopo il verbo.' }
      ]
    },

    pronomi: {
      sommario: 'Pronomi personali soggetto e complemento, e il possessivo min/mit/mine.',
      sezioni: [
        {
          titolo: 'Pronomi personali',
          html:
            '<p>I pronomi personali danesi hanno due forme: una per il <strong>soggetto</strong> e una per il <strong>complemento</strong> (come "io/me", "tu/te" in italiano).</p>' +
            table(['Persona', 'Soggetto', 'Complemento'], [
              ['io', '<span class="da">jeg</span>', '<span class="da">mig</span>'],
              ['tu', '<span class="da">du</span>', '<span class="da">dig</span>'],
              ['Lei (cortesia)', '<span class="da">De</span>', '<span class="da">Dem</span>'],
              ['lui / lei', '<span class="da">han</span> / <span class="da">hun</span>', '<span class="da">ham</span> / <span class="da">hende</span>'],
              ['esso (cose, animali)', '<span class="da">den</span> / <span class="da">det</span>', '<span class="da">den</span> / <span class="da">det</span>'],
              ['noi', '<span class="da">vi</span>', '<span class="da">os</span>'],
              ['voi', '<span class="da">I</span>', '<span class="da">jer</span>'],
              ['loro', '<span class="da">de</span>', '<span class="da">dem</span>']
            ]) +
            ex([['Jeg elsker dig.', 'Ti amo.'], ['Kan du hjælpe mig?', 'Puoi aiutarmi?'], ['Vi ser dem i morgen.', 'Li vediamo domani.']]) +
            tip('<span class="da">I</span> (voi) si scrive sempre con la maiuscola, per non confonderlo con la preposizione <span class="da">i</span> (in). Anche <span class="da">De</span>/<span class="da">Dem</span> di cortesia hanno la maiuscola, ma oggi si usano pochissimo: in Danimarca si dà quasi sempre del <span class="da">du</span>.')
        },
        {
          titolo: 'Il possessivo min / mit / mine',
          html:
            '<p>"Mio" cambia forma secondo il genere del nome: <strong>comune</strong> (articolo <span class="da">en</span>), <strong>neutro</strong> (articolo <span class="da">et</span>) o <strong>plurale</strong>. Il possessivo va sempre prima del nome, senza articolo.</p>' +
            table(['Comune (en)', 'Neutro (et)', 'Plurale'], [
              ['<span class="da">min ven</span><br>il mio amico', '<span class="da">mit barn</span><br>il mio bambino', '<span class="da">mine børn</span><br>i miei figli']
            ]) +
            tip('Allo stesso modo funzionano <span class="da">din / dit / dine</span> (tuo).')
        }
      ],
      quiz: [
        { domanda: '___ hedder Bodil. <em>(lei)</em>', opzioni: ['Hun', 'Hende', 'Han'], spiegazione: 'Soggetto femminile: <span class="da">hun</span>.' },
        { domanda: 'Kan du hjælpe ___? <em>(me)</em>', opzioni: ['mig', 'jeg', 'min'], spiegazione: 'Complemento di "io": <span class="da">mig</span>.' },
        { domanda: '___ bor i Aalborg. <em>(noi)</em>', opzioni: ['Vi', 'Os', 'De'], spiegazione: 'Soggetto "noi": <span class="da">vi</span>.' },
        { domanda: 'Kommer ___ fra Parma? <em>(voi)</em>', opzioni: ['I', 'jer', 'i'], spiegazione: '"Voi" soggetto è <span class="da">I</span>, con la maiuscola.' },
        { domanda: 'Det er ___ barn. <em>(et barn)</em>', opzioni: ['mit', 'min', 'mine'], spiegazione: 'Nome neutro (et) → <span class="da">mit</span>.' },
        { domanda: 'Det er ___ børn. <em>(plurale)</em>', opzioni: ['mine', 'mit', 'min'], spiegazione: 'Plurale → <span class="da">mine</span>.' },
        { domanda: 'Jeg kender ___. <em>(lui, complemento)</em>', opzioni: ['ham', 'han', 'hans'], spiegazione: 'Complemento di "lui": <span class="da">ham</span>.' }
      ]
    },

    preposizioni: {
      sommario: 'i, på, fra, til, med, hos: le preposizioni di tutti i giorni.',
      sezioni: [
        {
          titolo: 'Le preposizioni di base',
          html:
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">i</span>', 'in, a (città, paesi)', '<span class="da">Jeg bor i København.</span> Abito a Copenaghen.'],
              ['<span class="da">på</span>', 'su, a (isole, luoghi, superfici)', '<span class="da">Han bor på Ærø.</span> Abita a Ærø.'],
              ['<span class="da">fra</span>', 'da (provenienza)', '<span class="da">Anna kommer fra Danmark.</span>'],
              ['<span class="da">til</span>', 'a, verso (direzione)', '<span class="da">Vi tager til Odense.</span> Andiamo a Odense.'],
              ['<span class="da">med</span>', 'con', '<span class="da">Kaffe med mælk.</span> Caffè con latte.'],
              ['<span class="da">hos</span>', 'da, presso (qualcuno)', '<span class="da">Jeg er hos lægen.</span> Sono dal medico.']
            ])
        },
        {
          titolo: 'i oppure på?',
          html:
            '<p>Con le <strong>città</strong> e i <strong>paesi</strong> si usa <span class="da">i</span>. Con le <strong>isole</strong> e con molti luoghi pubblici o di lavoro si usa <span class="da">på</span>.</p>' +
            ex([['i Italien, i Rom, i Danmark', 'in Italia, a Roma, in Danimarca'], ['på Sjælland, på Bornholm', 'in Selandia, a Bornholm (isole)'], ['på arbejde, på universitetet, på biblioteket', 'al lavoro, all\'università, in biblioteca']]) +
            tip('Le combinazioni con <span class="da">på</span> vanno imparate a memoria, un po\' come in italiano "in banca" ma "al supermercato".')
        },
        {
          titolo: 'Andare a fare uno sport: gå til',
          html:
            '<p>Per dire che pratichi regolarmente un\'attività si usa <span class="da">gå til</span>.</p>' +
            ex([['Jeg går til fitness.', 'Vado in palestra.'], ['Hun går til yoga.', 'Fa yoga.']])
        }
      ],
      quiz: [
        { domanda: 'Johan bor ___ København.', opzioni: ['i', 'på', 'til'], spiegazione: 'Con le città si usa <span class="da">i</span>.' },
        { domanda: 'Anna kommer ___ Danmark.', opzioni: ['fra', 'til', 'med'], spiegazione: 'Provenienza: <span class="da">fra</span>.' },
        { domanda: 'Han bor ___ Ærø. <em>(un\'isola)</em>', opzioni: ['på', 'i', 'hos'], spiegazione: 'Con le isole si usa <span class="da">på</span>.' },
        { domanda: 'Vi tager ___ Odense i morgen.', opzioni: ['til', 'fra', 'i'], spiegazione: 'Direzione (andare a): <span class="da">til</span>.' },
        { domanda: 'Jeg drikker kaffe ___ mælk.', opzioni: ['med', 'hos', 'på'], spiegazione: '"Con" = <span class="da">med</span>.' },
        { domanda: 'Jeg er ___ lægen. <em>(dal medico)</em>', opzioni: ['hos', 'til', 'fra'], spiegazione: '"Da qualcuno" (stato) = <span class="da">hos</span>.' },
        { domanda: 'Hun går ___ yoga.', opzioni: ['til', 'på', 'med'], spiegazione: 'Attività regolari: <span class="da">gå til</span>.' }
      ]
    },

    congiunzioni: {
      sommario: 'og, men, eller, for, så: unire due frasi semplici.',
      sezioni: [
        {
          titolo: 'Le congiunzioni coordinanti',
          html:
            '<p>Queste congiunzioni uniscono due frasi "alla pari". Dopo di loro l\'ordine delle parole <strong>non cambia</strong>: soggetto e poi verbo.</p>' +
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">og</span>', 'e', '<span class="da">Anna og Tine kommer fra Danmark.</span>'],
              ['<span class="da">men</span>', 'ma', '<span class="da">Jeg er træt, men jeg arbejder.</span>'],
              ['<span class="da">eller</span>', 'o, oppure', '<span class="da">Vil du have kaffe eller te?</span>'],
              ['<span class="da">for</span>', 'perché, poiché', '<span class="da">Jeg bliver hjemme, for jeg er syg.</span>'],
              ['<span class="da">så</span>', 'quindi, così', '<span class="da">Jeg er syg, så jeg bliver hjemme.</span>']
            ]) +
            tip('Il trucco per ricordarle: dopo <span class="da">og, men, eller, for, så</span> la seconda frase comincia come una frase normale: <strong>soggetto + verbo</strong>.')
        },
        {
          titolo: 'Attenzione a "for"',
          html:
            '<p><span class="da">for</span> come congiunzione significa "perché" (spiegazione), ma è anche una preposizione ("per"). Nel livello intermedio vedrai <span class="da">fordi</span>, l\'altro "perché", che cambia la posizione degli avverbi.</p>'
        }
      ],
      quiz: [
        { domanda: 'Johan ___ Kristian bor i København. <em>(e)</em>', opzioni: ['og', 'men', 'eller'], spiegazione: '"E" = <span class="da">og</span>.' },
        { domanda: 'Jeg er træt, ___ jeg arbejder. <em>(ma)</em>', opzioni: ['men', 'og', 'så'], spiegazione: '"Ma" = <span class="da">men</span>.' },
        { domanda: 'Vil du have kaffe ___ te? <em>(o)</em>', opzioni: ['eller', 'og', 'for'], spiegazione: '"O, oppure" = <span class="da">eller</span>.' },
        { domanda: 'Jeg bliver hjemme, ___ jeg er syg. <em>(perché)</em>', opzioni: ['for', 'så', 'men'], spiegazione: 'Spiegazione della causa: <span class="da">for</span>.' },
        { domanda: 'Jeg er syg, ___ jeg bliver hjemme. <em>(quindi)</em>', opzioni: ['så', 'for', 'eller'], spiegazione: 'Conseguenza: <span class="da">så</span>.' },
        { domanda: 'Quale frase è corretta?', opzioni: ['Jeg er træt, men jeg arbejder.', 'Jeg er træt, men arbejder jeg.', 'Jeg er træt, men jeg arbejder ikke er.'], spiegazione: 'Dopo <span class="da">men</span> l\'ordine resta soggetto + verbo.' }
      ]
    },

    inversione: {
      sommario: 'La regola V2: il verbo sta al secondo posto. E le domande.',
      sezioni: [
        {
          titolo: 'La regola V2',
          html:
            '<p>Il danese è una lingua <strong>V2</strong>: nella frase principale il verbo coniugato sta sempre al <strong>secondo posto</strong>.</p>' +
            table(['1° posto', '2° posto (verbo)', 'resto'], [
              ['<span class="da">Jeg</span>', '<span class="da">hedder</span>', '<span class="da">Sofie.</span>'],
              ['<span class="da">Han</span>', '<span class="da">er</span>', '<span class="da">ikke amerikaner.</span>']
            ])
        },
        {
          titolo: 'Domande sì/no: il verbo al primo posto',
          html:
            '<p>Nelle domande a cui si risponde con <span class="da">ja</span> (sì) o <span class="da">nej</span> (no) il verbo va <strong>al primo posto</strong>, prima del soggetto. Questo scambio si chiama <strong>inversione</strong>.</p>' +
            ex([['Du er dansker. → Er du dansker?', 'Sei danese. → Sei danese?'], ['Kan du også tale fransk?', 'Sai parlare anche francese?'], ['Hedder han ikke Lorenzo?', 'Non si chiama Lorenzo?']]) +
            tip('In italiano basta cambiare l\'intonazione. In danese bisogna spostare il verbo!')
        },
        {
          titolo: 'Domande con le parole in hv-',
          html:
            '<p>Le domande aperte cominciano con una parola interrogativa (quasi tutte iniziano con <strong>hv-</strong>). Subito dopo viene il verbo (secondo posto) e poi il soggetto.</p>' +
            table(['Parola', 'Italiano', 'Esempio'], [
              ['<span class="da">hvad</span>', 'che cosa', '<span class="da">Hvad hedder du?</span> Come ti chiami?'],
              ['<span class="da">hvem</span>', 'chi', '<span class="da">Hvem er det?</span> Chi è?'],
              ['<span class="da">hvor</span>', 'dove', '<span class="da">Hvor bor du?</span> Dove abiti?'],
              ['<span class="da">hvornår</span>', 'quando', '<span class="da">Hvornår kommer du?</span>'],
              ['<span class="da">hvorfor</span>', 'perché', '<span class="da">Hvorfor taler hun dansk?</span>'],
              ['<span class="da">hvordan</span>', 'come', '<span class="da">Hvordan går det?</span> Come va?'],
              ['<span class="da">hvis</span>', 'di chi', '<span class="da">Hvis bog er det?</span> Di chi è il libro?']
            ])
        }
      ],
      quiz: [
        { domanda: 'Metti in ordine: <em>du / hedder / hvad ?</em>', opzioni: ['Hvad hedder du?', 'Hvad du hedder?', 'Du hedder hvad?'], spiegazione: 'Parola hv- + verbo + soggetto.' },
        { domanda: 'Come si chiede "Sei danese?"', opzioni: ['Er du dansker?', 'Du er dansker?', 'Dansker du er?'], spiegazione: 'Domanda sì/no: il verbo va al primo posto.' },
        { domanda: 'Quale domanda è corretta?', opzioni: ['Hvor bor du?', 'Hvor du bor?', 'Bor hvor du?'], spiegazione: 'Il verbo sta al secondo posto, subito dopo <span class="da">hvor</span>.' },
        { domanda: 'Come si dice "quando"?', opzioni: ['hvornår', 'hvorfor', 'hvordan'], spiegazione: '<span class="da">hvornår</span> = quando; <span class="da">hvorfor</span> = perché; <span class="da">hvordan</span> = come.' },
        { domanda: 'Dove va <em>også</em>? "Sai parlare anche francese?"', opzioni: ['Kan du også tale fransk?', 'Også kan du tale fransk?', 'Kan også du tale fransk?'], spiegazione: 'Gli avverbi vanno dopo il gruppo verbo + soggetto.' },
        { domanda: 'Quale frase rispetta la regola V2?', opzioni: ['Jeg hedder Sofie.', 'Jeg Sofie hedder.', 'Hedder Sofie jeg.'], spiegazione: 'Il verbo coniugato sta al secondo posto.' }
      ]
    }
  },

  /* =====================================================================
   * INTERMEDIO
   * ===================================================================== */
  intermedio: {

    verbi: {
      sommario: 'Il passato (datid) e il passato prossimo (perfektum).',
      sezioni: [
        {
          titolo: 'Il passato: due gruppi regolari',
          html:
            '<p>Il passato danese (<em>datid</em>) corrisponde sia al passato prossimo sia al passato remoto/imperfetto italiano quando si parla di un momento finito. Come il presente, <strong>non cambia per persona</strong>.</p>' +
            table(['Gruppo', 'Infinito', 'Passato', 'Participio'], [
              ['1: <strong>-ede</strong>', 'at arbejde (lavorare)', '<span class="da">arbejdede</span>', '<span class="da">arbejdet</span>'],
              ['1: <strong>-ede</strong>', 'at bo (abitare)', '<span class="da">boede</span>', '<span class="da">boet</span>'],
              ['2: <strong>-te</strong>', 'at spise (mangiare)', '<span class="da">spiste</span>', '<span class="da">spist</span>'],
              ['2: <strong>-te</strong>', 'at læse (leggere)', '<span class="da">læste</span>', '<span class="da">læst</span>']
            ]) +
            tip('Purtroppo non c\'è una regola sicura per sapere a quale gruppo appartiene un verbo: impara il passato insieme all\'infinito.')
        },
        {
          titolo: 'Verbi irregolari importanti',
          html:
            table(['Infinito', 'Passato', 'Participio'], [
              ['at være (essere)', '<span class="da">var</span>', '<span class="da">været</span>'],
              ['at have (avere)', '<span class="da">havde</span>', '<span class="da">haft</span>'],
              ['at gå (andare a piedi)', '<span class="da">gik</span>', '<span class="da">gået</span>'],
              ['at komme (venire)', '<span class="da">kom</span>', '<span class="da">kommet</span>'],
              ['at se (vedere)', '<span class="da">så</span>', '<span class="da">set</span>'],
              ['at drikke (bere)', '<span class="da">drak</span>', '<span class="da">drukket</span>'],
              ['at sige (dire)', '<span class="da">sagde</span>', '<span class="da">sagt</span>'],
              ['at tage (prendere)', '<span class="da">tog</span>', '<span class="da">taget</span>']
            ])
        },
        {
          titolo: 'Il perfektum: har o er + participio',
          html:
            '<p>Il <em>perfektum</em> si forma con <span class="da">har</span> + participio. Si usa per azioni passate collegate al presente, o quando non si dice quando sono successe.</p>' +
            ex([['Jeg har set filmen.', 'Ho visto il film.'], ['Hun har boet i Italien i tre år.', 'Abita in Italia da tre anni.']]) +
            '<p>Con i verbi che indicano <strong>movimento</strong> verso una meta o un <strong>cambiamento</strong> si usa <span class="da">er</span>, proprio come in italiano usiamo "essere".</p>' +
            ex([['Han er kommet hjem.', 'È tornato a casa.'], ['Hun er blevet syg.', 'Si è ammalata.']]) +
            tip('<span class="da">I går</span> (ieri), <span class="da">sidste år</span> (l\'anno scorso): con un momento preciso nel passato si usa il <strong>datid</strong>, non il perfektum: <span class="da">I går så jeg en film.</span>')
        }
      ],
      quiz: [
        { domanda: 'I går ___ jeg til kl. 17. <em>(at arbejde)</em>', opzioni: ['arbejdede', 'arbejdet', 'arbejdte'], spiegazione: 'Gruppo 1: arbejde → <span class="da">arbejdede</span>.' },
        { domanda: 'Hun ___ en sandwich. <em>(at spise, passato)</em>', opzioni: ['spiste', 'spisede', 'spist'], spiegazione: 'Gruppo 2: spise → <span class="da">spiste</span>.' },
        { domanda: 'Vi ___ i Italien sidste år. <em>(at være)</em>', opzioni: ['var', 'er', 'været'], spiegazione: 'Passato di være: <span class="da">var</span>.' },
        { domanda: 'Jeg har ___ den film. <em>(at se)</em>', opzioni: ['set', 'så', 'seet'], spiegazione: 'Participio di se: <span class="da">set</span>.' },
        { domanda: 'Han ___ kommet hjem.', opzioni: ['er', 'har', 'var blevet'], spiegazione: 'Verbo di movimento verso una meta: <span class="da">er kommet</span>.' },
        { domanda: 'De ___ til stranden i går. <em>(at gå)</em>', opzioni: ['gik', 'gåede', 'gået'], spiegazione: 'gå è irregolare: <span class="da">gik</span>.' },
        { domanda: 'Hun ___ sagt ja.', opzioni: ['har', 'er', 'havde haft'], spiegazione: 'Perfektum normale con <span class="da">har</span>.' }
      ]
    },

    avverbi: {
      sommario: 'Avverbi nella principale e nella subordinata; hjem e hjemme.',
      sezioni: [
        {
          titolo: 'Avverbi di frase',
          html:
            '<p>Alcuni avverbi "commentano" tutta la frase: <span class="da">ikke</span> (non), <span class="da">aldrig</span> (mai), <span class="da">altid</span> (sempre), <span class="da">ofte</span> (spesso), <span class="da">også</span> (anche), <span class="da">gerne</span> (volentieri), <span class="da">allerede</span> (già).</p>' +
            '<p>La loro posizione dipende dal tipo di frase.</p>'
        },
        {
          titolo: 'Principale: dopo il verbo',
          html:
            ex([['Hun kommer ikke i dag.', 'Lei oggi non viene.'], ['Jeg drikker aldrig kaffe om aftenen.', 'Non bevo mai caffè la sera.']])
        },
        {
          titolo: 'Subordinata: prima del verbo',
          html:
            '<p>Nella frase subordinata (dopo <span class="da">at, fordi, når, hvis…</span>) l\'avverbio si mette <strong>tra il soggetto e il verbo</strong>.</p>' +
            table(['Principale', 'Subordinata'], [
              ['<span class="da">Han er ikke hjemme.</span>', '<span class="da">Jeg ved, at han ikke er hjemme.</span>'],
              ['<span class="da">Hun kommer altid for sent.</span>', '<span class="da">…fordi hun altid kommer for sent.</span>']
            ]) +
            tip('Formula da ricordare: subordinata = <strong>congiunzione + soggetto + avverbio + verbo</strong>.')
        },
        {
          titolo: 'Stato o moto? hjemme / hjem',
          html:
            '<p>Alcuni avverbi di luogo hanno due forme: una per lo <strong>stato</strong> (dove sei) e una per il <strong>moto</strong> (dove vai).</p>' +
            table(['Stato (dove?)', 'Moto (verso dove?)', 'Italiano'], [
              ['<span class="da">hjemme</span>', '<span class="da">hjem</span>', 'a casa'],
              ['<span class="da">ude</span>', '<span class="da">ud</span>', 'fuori'],
              ['<span class="da">inde</span>', '<span class="da">ind</span>', 'dentro'],
              ['<span class="da">oppe</span>', '<span class="da">op</span>', 'su'],
              ['<span class="da">nede</span>', '<span class="da">ned</span>', 'giù']
            ]) +
            ex([['Jeg er hjemme.', 'Sono a casa.'], ['Jeg går hjem.', 'Vado a casa.']])
        }
      ],
      quiz: [
        { domanda: 'Jeg drikker ___ kaffe om aftenen. <em>(mai)</em>', opzioni: ['aldrig', 'altid', 'allerede'], spiegazione: '"Mai" = <span class="da">aldrig</span>.' },
        { domanda: 'Quale frase principale è corretta?', opzioni: ['Hun kommer ikke i dag.', 'Hun ikke kommer i dag.', 'Ikke hun kommer i dag.'], spiegazione: 'Nella principale l\'avverbio va dopo il verbo.' },
        { domanda: 'Jeg ved, at han ___ hjemme.', opzioni: ['ikke er', 'er ikke', 'ikke'], spiegazione: 'Nella subordinata: soggetto + <strong>ikke</strong> + verbo.' },
        { domanda: 'Jeg går ___ nu. <em>(vado a casa)</em>', opzioni: ['hjem', 'hjemme', 'hjemad'], spiegazione: 'Moto: <span class="da">hjem</span>.' },
        { domanda: 'Jeg er ___ hele dagen. <em>(a casa)</em>', opzioni: ['hjemme', 'hjem', 'hjemmet'], spiegazione: 'Stato: <span class="da">hjemme</span>.' },
        { domanda: 'Børnene leger ___ i haven. <em>(fuori, stato)</em>', opzioni: ['ude', 'ud', 'uden'], spiegazione: 'Stato: <span class="da">ude</span>.' },
        { domanda: '…fordi hun ___ for sent.', opzioni: ['altid kommer', 'kommer altid', 'altid'], spiegazione: 'Dopo <span class="da">fordi</span>: soggetto + avverbio + verbo.' }
      ]
    },

    pronomi: {
      sommario: 'Tutti i possessivi e la differenza tra sin e hans/hendes.',
      sezioni: [
        {
          titolo: 'I possessivi',
          html:
            table(['Persona', 'Comune (en)', 'Neutro (et)', 'Plurale'], [
              ['mio', '<span class="da">min</span>', '<span class="da">mit</span>', '<span class="da">mine</span>'],
              ['tuo', '<span class="da">din</span>', '<span class="da">dit</span>', '<span class="da">dine</span>'],
              ['suo (di lui)', '<span class="da">hans</span>', '<span class="da">hans</span>', '<span class="da">hans</span>'],
              ['suo (di lei)', '<span class="da">hendes</span>', '<span class="da">hendes</span>', '<span class="da">hendes</span>'],
              ['suo (riflessivo)', '<span class="da">sin</span>', '<span class="da">sit</span>', '<span class="da">sine</span>'],
              ['nostro', '<span class="da">vores</span>', '<span class="da">vores</span>', '<span class="da">vores</span>'],
              ['vostro', '<span class="da">jeres</span>', '<span class="da">jeres</span>', '<span class="da">jeres</span>'],
              ['loro', '<span class="da">deres</span>', '<span class="da">deres</span>', '<span class="da">deres</span>']
            ]) +
            '<p>Solo <span class="da">min, din, sin</span> cambiano forma. Gli altri restano uguali.</p>'
        },
        {
          titolo: 'sin oppure hans/hendes?',
          html:
            '<p>Questa è una delle difficoltà più tipiche per gli italiani. In italiano "suo" è ambiguo; il danese invece distingue:</p>' +
            '<ul><li><span class="da">sin / sit / sine</span> quando il possessore è <strong>il soggetto della stessa frase</strong>.</li>' +
            '<li><span class="da">hans / hendes</span> quando il possessore è <strong>un\'altra persona</strong>.</li></ul>' +
            ex([['Peter kører i sin bil.', 'Peter guida la sua (propria) macchina.'], ['Peter kører i hans bil.', 'Peter guida la macchina di lui (di un altro uomo).'], ['Anna besøger sine forældre.', 'Anna va a trovare i suoi genitori.']]) +
            tip('<span class="da">sin</span> non può mai far parte del soggetto: si dice <span class="da">Peter og hans kone</span>, non "sin kone", quando sono il soggetto.')
        }
      ],
      quiz: [
        { domanda: 'Det er ___ bil. <em>(tua; en bil)</em>', opzioni: ['din', 'dit', 'dine'], spiegazione: 'Nome comune → <span class="da">din</span>.' },
        { domanda: 'Det er ___ hus. <em>(tuo; et hus)</em>', opzioni: ['dit', 'din', 'dine'], spiegazione: 'Nome neutro → <span class="da">dit</span>.' },
        { domanda: 'Peter kører i ___ bil. <em>(la propria)</em>', opzioni: ['sin', 'hans', 'sit'], spiegazione: 'Il possessore è il soggetto: <span class="da">sin</span>.' },
        { domanda: 'Peter kører i ___ bil. <em>(quella di Lars)</em>', opzioni: ['hans', 'sin', 'sit'], spiegazione: 'Il possessore è un\'altra persona: <span class="da">hans</span>.' },
        { domanda: 'Det er ___ lejlighed. <em>(nostro)</em>', opzioni: ['vores', 'vor', 'voreses'], spiegazione: '"Nostro" = <span class="da">vores</span>, invariabile.' },
        { domanda: 'Anna besøger ___ forældre. <em>(i propri)</em>', opzioni: ['sine', 'hendes', 'sin'], spiegazione: 'Riflessivo plurale: <span class="da">sine</span>.' },
        { domanda: 'Er det ___ hund? <em>(di lei)</em>', opzioni: ['hendes', 'hende', 'hun'], spiegazione: 'Possessivo di "lei": <span class="da">hendes</span>.' }
      ]
    },

    preposizioni: {
      sommario: 'Preposizioni di tempo: i, om, på, for … siden.',
      sezioni: [
        {
          titolo: 'Parlare del tempo',
          html:
            table(['Espressione', 'Significato', 'Esempio'], [
              ['<span class="da">i dag / i morgen / i går</span>', 'oggi / domani / ieri', '<span class="da">I morgen arbejder jeg.</span>'],
              ['<span class="da">om</span> + durata', 'tra (nel futuro)', '<span class="da">Jeg kommer om to timer.</span> Vengo tra due ore.'],
              ['<span class="da">for … siden</span>', 'fa', '<span class="da">Jeg boede i Rom for fem år siden.</span> Abitavo a Roma cinque anni fa.'],
              ['<span class="da">i</span> + durata', 'per, da (durata)', '<span class="da">Hun har boet her i tre år.</span> Vive qui da tre anni.'],
              ['<span class="da">på</span> + giorno', 'prossimo', '<span class="da">Vi ses på fredag.</span> Ci vediamo venerdì.'],
              ['<span class="da">om</span> + forma determinata', 'ogni, di solito', '<span class="da">Om mandagen spiller jeg fodbold.</span> Il lunedì gioco a calcio.'],
              ['<span class="da">til</span> + festa', 'a, per', '<span class="da">til jul, til påske</span> a Natale, a Pasqua']
            ])
        },
        {
          titolo: 'Le stagioni e le parti del giorno',
          html:
            '<p>Per abitudini e momenti ricorrenti si usa <span class="da">om</span> + forma determinata:</p>' +
            ex([['om morgenen', 'la mattina'], ['om aftenen', 'la sera'], ['om sommeren', 'd\'estate'], ['om vinteren', 'd\'inverno']]) +
            tip('Ma: <span class="da">i aften</span> = stasera, <span class="da">i sommer</span> = quest\'estate (una volta sola).')
        }
      ],
      quiz: [
        { domanda: 'Jeg kommer ___ to timer. <em>(tra due ore)</em>', opzioni: ['om', 'i', 'for'], spiegazione: 'Futuro: <span class="da">om</span> + durata.' },
        { domanda: 'Jeg boede i Rom ___ fem år siden.', opzioni: ['for', 'om', 'i'], spiegazione: '"Fa" = <span class="da">for … siden</span>.' },
        { domanda: '___ mandagen spiller vi fodbold. <em>(ogni lunedì)</em>', opzioni: ['Om', 'På', 'I'], spiegazione: 'Abitudine: <span class="da">om</span> + forma determinata.' },
        { domanda: 'Vi ses ___ fredag. <em>(venerdì prossimo)</em>', opzioni: ['på', 'om', 'til'], spiegazione: 'Giorno prossimo: <span class="da">på</span>.' },
        { domanda: 'Hun har boet her ___ tre år.', opzioni: ['i', 'om', 'på'], spiegazione: 'Durata: <span class="da">i</span>.' },
        { domanda: '"Domani" si dice:', opzioni: ['i morgen', 'om morgenen', 'på morgen'], spiegazione: '<span class="da">i morgen</span> = domani; <span class="da">om morgenen</span> = la mattina.' },
        { domanda: 'Vi rejser til Italien ___ jul.', opzioni: ['til', 'på', 'om'], spiegazione: 'Con le feste: <span class="da">til jul</span>.' }
      ]
    },

    congiunzioni: {
      sommario: 'Le congiunzioni subordinanti: at, fordi, når, da, hvis, om, selvom.',
      sezioni: [
        {
          titolo: 'Congiunzioni subordinanti',
          html:
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">at</span>', 'che', '<span class="da">Jeg ved, at du er træt.</span>'],
              ['<span class="da">fordi</span>', 'perché', '<span class="da">Jeg bliver hjemme, fordi jeg er syg.</span>'],
              ['<span class="da">når</span>', 'quando (presente, futuro, ripetuto)', '<span class="da">Når det regner, tager jeg bussen.</span>'],
              ['<span class="da">da</span>', 'quando (una volta nel passato)', '<span class="da">Da jeg var barn, boede jeg i Napoli.</span>'],
              ['<span class="da">hvis</span>', 'se (condizione)', '<span class="da">Hvis du har tid, kan vi drikke kaffe.</span>'],
              ['<span class="da">om</span>', 'se (domanda indiretta)', '<span class="da">Jeg ved ikke, om han kommer.</span>'],
              ['<span class="da">selvom</span>', 'anche se, benché', '<span class="da">Hun går en tur, selvom det regner.</span>'],
              ['<span class="da">mens</span>', 'mentre', '<span class="da">Han læser, mens hun laver mad.</span>']
            ])
        },
        {
          titolo: 'når o da?',
          html:
            '<p>Entrambe significano "quando":</p>' +
            '<ul><li><span class="da">når</span>: presente, futuro, o azioni ripetute nel passato ("ogni volta che").</li>' +
            '<li><span class="da">da</span>: un singolo momento o periodo nel passato.</li></ul>' +
            ex([['Når jeg kommer hjem, spiser jeg.', 'Quando torno a casa, mangio.'], ['Da jeg kom hjem i går, spiste jeg.', 'Quando sono tornato ieri, ho mangiato.']])
        },
        {
          titolo: 'hvis o om?',
          html:
            '<p>Entrambe significano "se". <span class="da">hvis</span> esprime una <strong>condizione</strong>; <span class="da">om</span> introduce una <strong>domanda indiretta</strong> (puoi sostituirlo con "se… o no").</p>' +
            tip('Ricorda: nella subordinata l\'avverbio va prima del verbo: <span class="da">…fordi jeg ikke har tid.</span>')
        }
      ],
      quiz: [
        { domanda: 'Jeg bliver hjemme, ___ jeg er syg.', opzioni: ['fordi', 'selvom', 'om'], spiegazione: 'Causa: <span class="da">fordi</span>.' },
        { domanda: '___ jeg var barn, boede jeg i Napoli.', opzioni: ['Da', 'Når', 'Hvis'], spiegazione: 'Un periodo concluso nel passato: <span class="da">da</span>.' },
        { domanda: '___ det regner, tager jeg bussen. <em>(ogni volta che)</em>', opzioni: ['Når', 'Da', 'Om'], spiegazione: 'Azione ripetuta: <span class="da">når</span>.' },
        { domanda: 'Jeg ved ikke, ___ han kommer. <em>(se)</em>', opzioni: ['om', 'hvis', 'at'], spiegazione: 'Domanda indiretta: <span class="da">om</span>.' },
        { domanda: '___ du har tid, kan vi drikke kaffe. <em>(se)</em>', opzioni: ['Hvis', 'Om', 'Da'], spiegazione: 'Condizione: <span class="da">hvis</span>.' },
        { domanda: 'Hun går en tur, ___ det regner. <em>(anche se)</em>', opzioni: ['selvom', 'fordi', 'mens'], spiegazione: '"Anche se" = <span class="da">selvom</span>.' },
        { domanda: 'Jeg kommer ikke, fordi jeg ___ tid.', opzioni: ['ikke har', 'har ikke', 'ikke'], spiegazione: 'Subordinata: avverbio prima del verbo.' }
      ]
    },

    inversione: {
      sommario: "Quando la frase non inizia con il soggetto, il soggetto va dopo il verbo.",
      sezioni: [
        {
          titolo: "L'inversione",
          html:
            '<p>La regola V2 vale sempre: il verbo resta al <strong>secondo posto</strong>. Quindi, se al primo posto metti qualcosa di diverso dal soggetto (un\'espressione di tempo, di luogo, un avverbio…), il soggetto deve spostarsi <strong>dopo il verbo</strong>.</p>' +
            table(['1° posto', 'Verbo', 'Soggetto', 'Resto'], [
              ['<span class="da">Jeg</span>', '<span class="da">arbejder</span>', '', '<span class="da">i dag.</span>'],
              ['<span class="da">I dag</span>', '<span class="da">arbejder</span>', '<span class="da">jeg</span>', ''],
              ['<span class="da">Om aftenen</span>', '<span class="da">ser</span>', '<span class="da">vi</span>', '<span class="da">fjernsyn.</span>'],
              ['<span class="da">Desværre</span>', '<span class="da">kan</span>', '<span class="da">jeg</span>', '<span class="da">ikke komme.</span>']
            ]) +
            tip('Errore tipico degli italiani: <s>I dag jeg arbejder</s>. Corretto: <span class="da">I dag arbejder jeg.</span>')
        },
        {
          titolo: 'Dopo una subordinata',
          html:
            '<p>Se la frase comincia con una subordinata intera, quella conta come "primo posto". Quindi nella principale che segue viene subito il verbo.</p>' +
            ex([['Når jeg kommer hjem, spiser jeg.', 'Quando torno a casa, mangio.'], ['Hvis det regner, bliver vi hjemme.', 'Se piove, restiamo a casa.']])
        },
        {
          titolo: "Dove va ikke con l'inversione?",
          html:
            '<p>Quando il soggetto è un pronome, l\'ordine è: verbo + soggetto + <span class="da">ikke</span>.</p>' +
            ex([['I dag arbejder jeg ikke.', 'Oggi non lavoro.'], ['Hvorfor kommer du ikke?', 'Perché non vieni?']])
        }
      ],
      quiz: [
        { domanda: 'I morgen ___ til Aarhus.', opzioni: ['tager jeg', 'jeg tager', 'tager'], spiegazione: 'Primo posto = "I morgen" → verbo + soggetto.' },
        { domanda: 'Quale frase è corretta?', opzioni: ['Om aftenen ser vi fjernsyn.', 'Om aftenen vi ser fjernsyn.', 'Om aftenen fjernsyn vi ser.'], spiegazione: 'Il verbo resta al secondo posto: <span class="da">ser vi</span>.' },
        { domanda: 'Når jeg kommer hjem, ___.', opzioni: ['spiser jeg', 'jeg spiser', 'jeg spiser ikke'], spiegazione: 'La subordinata occupa il primo posto → inversione.' },
        { domanda: 'Desværre ___ ikke komme.', opzioni: ['kan jeg', 'jeg kan', 'kan'], spiegazione: 'Avverbio al primo posto → verbo + soggetto.' },
        { domanda: 'Quale frase è corretta?', opzioni: ['I dag arbejder jeg ikke.', 'I dag arbejder ikke jeg.', 'I dag jeg arbejder ikke.'], spiegazione: 'Verbo + pronome soggetto + <span class="da">ikke</span>.' },
        { domanda: 'Hvorfor ___ dansk?', opzioni: ['lærer du', 'du lærer', 'lærer'], spiegazione: 'Parola hv- + verbo + soggetto.' },
        { domanda: 'Hvis det regner, ___ hjemme.', opzioni: ['bliver vi', 'vi bliver', 'vi'], spiegazione: 'Subordinata al primo posto → inversione nella principale.' }
      ]
    }
  },

  /* =====================================================================
   * AVANZATO
   * ===================================================================== */
  avanzato: {

    verbi: {
      sommario: 'Passivo, verbi deponenti, trapassato e condizionale.',
      sezioni: [
        {
          titolo: 'Il passivo con -s',
          html:
            '<p>Si aggiunge <strong>-s</strong> all\'infinito (o al presente senza -r). È molto usato per azioni generali, regole, abitudini e istruzioni.</p>' +
            ex([['Butikken åbnes kl. 9.', 'Il negozio apre (viene aperto) alle 9.'], ['Her tales dansk.', 'Qui si parla danese.'], ['Huset skal males.', 'La casa deve essere dipinta.']])
        },
        {
          titolo: 'Il passivo con blive',
          html:
            '<p><span class="da">blive</span> + participio si usa soprattutto per azioni singole e concrete, spesso al passato.</p>' +
            ex([['Huset blev bygget i 1850.', 'La casa fu costruita nel 1850.'], ['Han er blevet fyret.', 'È stato licenziato.']])
        },
        {
          titolo: 'Verbi deponenti',
          html:
            '<p>Alcuni verbi hanno la forma in -s ma significato <strong>attivo</strong>:</p>' +
            table(['Verbo', 'Significato', 'Esempio'], [
              ['<span class="da">at synes</span>', 'pensare, trovare (opinione)', '<span class="da">Jeg synes, det er en god idé.</span>'],
              ['<span class="da">at findes</span>', 'esistere', '<span class="da">Der findes mange sprog.</span>'],
              ['<span class="da">at lykkes</span>', 'riuscire', '<span class="da">Det lykkedes for mig.</span>'],
              ['<span class="da">at mødes</span>', 'incontrarsi', '<span class="da">Vi mødes i morgen.</span>'],
              ['<span class="da">at ses</span>', 'vedersi', '<span class="da">Vi ses!</span> Ci vediamo!']
            ])
        },
        {
          titolo: 'Trapassato e condizionale',
          html:
            '<p>Il <strong>trapassato</strong> (<em>førnutid</em>) si forma con <span class="da">havde</span> o <span class="da">var</span> + participio.</p>' +
            ex([['Da jeg kom, var han allerede gået.', 'Quando sono arrivato, lui era già andato via.'], ['Hun havde aldrig set sneen før.', 'Non aveva mai visto la neve prima.']]) +
            '<p>Il <strong>condizionale</strong> si fa con <span class="da">ville</span> + infinito; le ipotesi irreali usano il passato dopo <span class="da">hvis</span>.</p>' +
            ex([['Hvis jeg havde tid, ville jeg rejse.', 'Se avessi tempo, viaggerei.'], ['Hvis jeg havde vidst det, ville jeg have hjulpet.', 'Se l\'avessi saputo, avrei aiutato.']])
        }
      ],
      quiz: [
        { domanda: 'Butikken ___ kl. 9. <em>(viene aperto)</em>', opzioni: ['åbnes', 'åbner s', 'blev åbnet af'], spiegazione: 'Passivo in -s: <span class="da">åbnes</span>.' },
        { domanda: 'Huset ___ bygget i 1850.', opzioni: ['blev', 'var blevet bygget', 'bygges'], spiegazione: 'Azione singola al passato: <span class="da">blev bygget</span>.' },
        { domanda: 'Jeg ___, at det er en god idé. <em>(penso)</em>', opzioni: ['synes', 'syner', 'synet'], spiegazione: '<span class="da">synes</span> è un verbo deponente: forma in -s, significato attivo.' },
        { domanda: 'Da jeg kom, ___ han allerede gået.', opzioni: ['var', 'havde', 'er'], spiegazione: 'Trapassato con verbo di movimento: <span class="da">var gået</span>.' },
        { domanda: 'Hvis jeg havde tid, ___ jeg rejse.', opzioni: ['ville', 'vil', 'skal'], spiegazione: 'Condizionale: <span class="da">ville</span> + infinito.' },
        { domanda: 'Vi ___ i morgen kl. 10. <em>(ci incontriamo)</em>', opzioni: ['mødes', 'møder', 'mødte os'], spiegazione: 'Verbo reciproco/deponente: <span class="da">mødes</span>.' },
        { domanda: 'Her ___ dansk. <em>(si parla)</em>', opzioni: ['tales', 'taler man s', 'blive talt'], spiegazione: 'Passivo generico in -s: <span class="da">tales</span>.' }
      ]
    },

    avverbi: {
      sommario: 'Gli avverbi modali (jo, nok, vel, bare) e la posizione dei pronomi.',
      sezioni: [
        {
          titolo: 'Le piccole parole del parlato',
          html:
            '<p>Il danese usa molti piccoli avverbi per esprimere l\'atteggiamento di chi parla. Sono difficili da tradurre, ma rendono la lingua naturale.</p>' +
            table(['Avverbio', 'Sfumatura', 'Esempio'], [
              ['<span class="da">jo</span>', '"come sai", "dopotutto"', '<span class="da">Det ved du jo!</span> Lo sai bene!'],
              ['<span class="da">nok</span>', 'probabilmente', '<span class="da">Det bliver nok regnvejr.</span> Probabilmente pioverà.'],
              ['<span class="da">vel</span>', '"immagino", "vero?"', '<span class="da">Du kommer vel i morgen?</span> Vieni domani, vero?'],
              ['<span class="da">bare</span>', '"pure", "solo"', '<span class="da">Kom bare ind!</span> Entra pure!'],
              ['<span class="da">da</span>', 'enfasi, sorpresa', '<span class="da">Det er da fint!</span> Ma è bello!'],
              ['<span class="da">godt</span>', 'enfasi affermativa', '<span class="da">Jeg kan godt lide det.</span> Mi piace (proprio).']
            ])
        },
        {
          titolo: 'Pronomi e avverbi: lo "spostamento"',
          html:
            '<p>Un pronome complemento non accentato (<span class="da">mig, dig, ham, den, det…</span>) si mette <strong>prima</strong> di <span class="da">ikke</span> nella frase principale con un verbo semplice. Un nome invece va dopo.</p>' +
            ex([['Jeg kender ham ikke.', 'Non lo conosco.'], ['Jeg kender ikke Peter.', 'Non conosco Peter.'], ['Jeg har ikke set ham.', 'Non l\'ho visto. (con verbo composto il pronome resta dopo)']]) +
            tip('Se il verbo è composto (<span class="da">har set</span>, <span class="da">kan se</span>), il pronome resta dopo il participio o l\'infinito.')
        }
      ],
      quiz: [
        { domanda: 'Det bliver ___ regnvejr i morgen. <em>(probabilmente)</em>', opzioni: ['nok', 'jo', 'bare'], spiegazione: '"Probabilmente" = <span class="da">nok</span>.' },
        { domanda: 'Du kommer ___ i morgen? <em>(immagino, vero?)</em>', opzioni: ['vel', 'nok', 'jo'], spiegazione: '<span class="da">vel</span> chiede conferma.' },
        { domanda: 'Det ved du ___! <em>(lo sai bene)</em>', opzioni: ['jo', 'vel', 'nok'], spiegazione: '<span class="da">jo</span> = "come sai benissimo".' },
        { domanda: 'Quale frase è corretta (frase neutra)?', opzioni: ['Jeg kender ham ikke.', 'Jeg kender ikke ham.', 'Jeg ikke kender ham.'], spiegazione: 'Pronome non accentato prima di <span class="da">ikke</span>.' },
        { domanda: 'Quale frase è corretta?', opzioni: ['Jeg har ikke set ham.', 'Jeg har ham ikke set.', 'Jeg har set ikke ham.'], spiegazione: 'Con verbo composto il pronome resta dopo il participio.' },
        { domanda: 'Kom ___ ind! <em>(entra pure)</em>', opzioni: ['bare', 'nok', 'vel'], spiegazione: '<span class="da">bare</span> rende l\'invito gentile.' }
      ]
    },

    pronomi: {
      sommario: 'Pronomi relativi (som, der, hvis, hvilket) e indefiniti (man, nogen, ingen).',
      sezioni: [
        {
          titolo: 'Pronomi relativi',
          html:
            table(['Danese', 'Uso', 'Esempio'], [
              ['<span class="da">som</span>', 'che (soggetto o oggetto)', '<span class="da">Bogen, som jeg læser, er spændende.</span>'],
              ['<span class="da">der</span>', 'che (solo soggetto)', '<span class="da">Manden, der bor her, er læge.</span>'],
              ['<span class="da">hvis</span>', 'il cui, la cui', '<span class="da">Kvinden, hvis bil er rød, er min nabo.</span>'],
              ['<span class="da">hvad</span>', 'ciò che', '<span class="da">Gør, hvad du vil.</span> Fai ciò che vuoi.'],
              ['<span class="da">hvilket</span>', 'il che (riferito a tutta la frase)', '<span class="da">Han kom ikke, hvilket var synd.</span>']
            ]) +
            tip('Quando <span class="da">som</span> è oggetto si può anche omettere: <span class="da">Bogen (som) jeg læser…</span>. Non si può omettere quando è soggetto.')
        },
        {
          titolo: 'Pronomi indefiniti',
          html:
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">man</span>', 'si (impersonale)', '<span class="da">Man siger, at…</span> Si dice che…'],
              ['<span class="da">nogen / noget / nogle</span>', 'qualcuno, qualcosa, alcuni', '<span class="da">Har du nogen søskende?</span>'],
              ['<span class="da">ingen / intet</span>', 'nessuno, niente', '<span class="da">Der er ingen mælk.</span> Non c\'è latte.'],
              ['<span class="da">hver / hvert</span>', 'ogni', '<span class="da">hver dag, hvert år</span>'],
              ['<span class="da">al / alt / alle</span>', 'tutto, tutti', '<span class="da">Alle er her.</span> Ci sono tutti.']
            ]) +
            tip('<span class="da">nogen</span> si usa nelle domande e nelle frasi negative; <span class="da">nogle</span> nelle frasi affermative al plurale: <span class="da">Jeg har nogle venner i Aarhus.</span>')
        }
      ],
      quiz: [
        { domanda: 'Manden, ___ bor ved siden af, er læge.', opzioni: ['der', 'hvad', 'hvis'], spiegazione: 'Relativo soggetto: <span class="da">der</span> (o <span class="da">som</span>).' },
        { domanda: 'Bogen, ___ jeg læser, er spændende.', opzioni: ['som', 'der', 'hvis'], spiegazione: 'Relativo oggetto: solo <span class="da">som</span>, non <span class="da">der</span>.' },
        { domanda: 'Kvinden, ___ bil er rød, er min nabo.', opzioni: ['hvis', 'som', 'hvem'], spiegazione: '"La cui" = <span class="da">hvis</span>.' },
        { domanda: '___ siger, at det bliver koldt. <em>(si dice)</em>', opzioni: ['Man', 'Mand', 'Den'], spiegazione: 'Soggetto impersonale: <span class="da">man</span>.' },
        { domanda: 'Har du ___ søskende?', opzioni: ['nogen', 'nogle', 'noget'], spiegazione: 'Nelle domande: <span class="da">nogen</span>.' },
        { domanda: 'Der er ___ mælk i køleskabet. <em>(non c\'è latte)</em>', opzioni: ['ingen', 'intet', 'ikke'], spiegazione: 'mælk è di genere comune → <span class="da">ingen</span>.' },
        { domanda: 'Han kom ikke, ___ var synd.', opzioni: ['hvilket', 'som', 'hvad'], spiegazione: 'Riferito a tutta la frase: <span class="da">hvilket</span>.' }
      ]
    },

    preposizioni: {
      sommario: 'Verbi e aggettivi con preposizione fissa; la preposizione a fine frase.',
      sezioni: [
        {
          titolo: 'Verbi con preposizione fissa',
          html:
            '<p>Molti verbi vogliono una preposizione precisa, spesso diversa dall\'italiano. Vanno imparati insieme.</p>' +
            table(['Danese', 'Italiano'], [
              ['<span class="da">at tænke på</span>', 'pensare a'],
              ['<span class="da">at vente på</span>', 'aspettare (qualcosa/qualcuno)'],
              ['<span class="da">at tro på</span>', 'credere in'],
              ['<span class="da">at glæde sig til</span>', 'non vedere l\'ora di'],
              ['<span class="da">at interessere sig for</span>', 'interessarsi di'],
              ['<span class="da">at drømme om</span>', 'sognare (di)'],
              ['<span class="da">at tale om</span>', 'parlare di'],
              ['<span class="da">at passe på</span>', 'fare attenzione a, badare a']
            ])
        },
        {
          titolo: 'Aggettivi con preposizione',
          html:
            table(['Danese', 'Italiano'], [
              ['<span class="da">at være glad for</span>', 'essere contento di, voler bene a'],
              ['<span class="da">at være bange for</span>', 'avere paura di'],
              ['<span class="da">at være god til</span>', 'essere bravo in'],
              ['<span class="da">at være træt af</span>', 'essere stufo di'],
              ['<span class="da">at være vant til</span>', 'essere abituato a']
            ])
        },
        {
          titolo: 'La preposizione va in fondo',
          html:
            '<p>Nelle domande e nelle frasi relative la preposizione resta spesso <strong>alla fine</strong>, come in inglese. In italiano invece va all\'inizio.</p>' +
            ex([['Hvem venter du på?', 'Chi stai aspettando?'], ['Hvad taler I om?', 'Di cosa parlate?'], ['Det er den bog, jeg har fortalt dig om.', 'È il libro di cui ti ho parlato.']])
        }
      ],
      quiz: [
        { domanda: 'Jeg glæder mig ___ ferien.', opzioni: ['til', 'på', 'for'], spiegazione: '<span class="da">glæde sig til</span> = non vedere l\'ora di.' },
        { domanda: 'Hun venter ___ bussen.', opzioni: ['på', 'til', 'efter'], spiegazione: '<span class="da">vente på</span> = aspettare.' },
        { domanda: 'Jeg tænker tit ___ dig.', opzioni: ['på', 'om', 'til'], spiegazione: '<span class="da">tænke på</span> = pensare a.' },
        { domanda: 'Han er bange ___ hunde.', opzioni: ['for', 'af', 'på'], spiegazione: '<span class="da">bange for</span> = avere paura di.' },
        { domanda: 'Hvad taler I ___?', opzioni: ['om', 'på', 'til'], spiegazione: '<span class="da">tale om</span>; la preposizione resta in fondo.' },
        { domanda: 'Jeg interesserer mig ___ musik.', opzioni: ['for', 'i', 'på'], spiegazione: '<span class="da">interessere sig for</span>.' },
        { domanda: 'Jeg er træt ___ regnvejr.', opzioni: ['af', 'for', 'med'], spiegazione: '<span class="da">træt af</span> = stufo di.' }
      ]
    },

    congiunzioni: {
      sommario: 'Congiunzioni correlative (både … og, hverken … eller) e subordinanti avanzate.',
      sezioni: [
        {
          titolo: 'Congiunzioni correlative',
          html:
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">både … og</span>', 'sia … sia', '<span class="da">Jeg kan lide både kaffe og te.</span>'],
              ['<span class="da">enten … eller</span>', 'o … o', '<span class="da">Vi tager enten toget eller bussen.</span>'],
              ['<span class="da">hverken … eller</span>', 'né … né', '<span class="da">Han drikker hverken øl eller vin.</span>'],
              ['<span class="da">jo … jo/desto</span>', 'più … più', '<span class="da">Jo mere jeg læser, jo bedre forstår jeg.</span>']
            ]) +
            tip('Nota l\'inversione dopo <span class="da">jo … jo</span>: <span class="da">jo bedre <strong>forstår jeg</strong></span>.')
        },
        {
          titolo: 'Subordinanti avanzate',
          html:
            table(['Danese', 'Italiano', 'Esempio'], [
              ['<span class="da">eftersom</span>', 'poiché, dato che', '<span class="da">Eftersom han er syg, kan han ikke komme.</span>'],
              ['<span class="da">medmindre</span>', 'a meno che', '<span class="da">Vi går en tur, medmindre det regner.</span>'],
              ['<span class="da">så (at)</span>', 'così che, affinché', '<span class="da">Tal højt, så alle kan høre dig.</span>'],
              ['<span class="da">før</span>', 'prima che', '<span class="da">Ring, før du kommer.</span>'],
              ['<span class="da">efter at</span>', 'dopo che', '<span class="da">Efter at vi havde spist, gik vi.</span>'],
              ['<span class="da">indtil</span>', 'finché', '<span class="da">Vent, indtil jeg kommer.</span>']
            ])
        }
      ],
      quiz: [
        { domanda: 'Jeg kan lide ___ kaffe og te. <em>(sia … sia)</em>', opzioni: ['både', 'enten', 'hverken'], spiegazione: '"Sia … sia" = <span class="da">både … og</span>.' },
        { domanda: 'Han drikker ___ øl eller vin. <em>(né … né)</em>', opzioni: ['hverken', 'enten', 'både'], spiegazione: '"Né … né" = <span class="da">hverken … eller</span>.' },
        { domanda: 'Vi tager ___ toget eller bussen. <em>(o … o)</em>', opzioni: ['enten', 'hverken', 'både'], spiegazione: '"O … o" = <span class="da">enten … eller</span>.' },
        { domanda: 'Vi går en tur, ___ det regner. <em>(a meno che)</em>', opzioni: ['medmindre', 'selvom', 'eftersom'], spiegazione: '"A meno che" = <span class="da">medmindre</span>.' },
        { domanda: '___ han er syg, kan han ikke komme. <em>(poiché)</em>', opzioni: ['Eftersom', 'Medmindre', 'Indtil'], spiegazione: '"Poiché" = <span class="da">eftersom</span>.' },
        { domanda: 'Più leggo, meglio capisco: "___ mere jeg læser, ___ bedre forstår jeg."', opzioni: ['Jo … jo', 'Mere … mere', 'Så … så'], spiegazione: '"Più … più" = <span class="da">jo … jo</span>.' },
        { domanda: 'Vent, ___ jeg kommer. <em>(finché)</em>', opzioni: ['indtil', 'før', 'efter at'], spiegazione: '"Finché" = <span class="da">indtil</span>.' }
      ]
    },

    inversione: {
      sommario: 'Inversione nel discorso diretto, nelle condizionali senza hvis e con il complemento in testa.',
      sezioni: [
        {
          titolo: 'Il complemento in prima posizione',
          html:
            '<p>Per dare enfasi si può mettere il complemento oggetto all\'inizio. Il verbo resta comunque secondo.</p>' +
            ex([['Den film har jeg set tre gange.', 'Quel film l\'ho visto tre volte.'], ['Det ved jeg ikke.', 'Questo non lo so.']])
        },
        {
          titolo: 'Discorso diretto',
          html:
            '<p>Dopo una citazione il verbo del "dire" viene prima del soggetto.</p>' +
            ex([['"Jeg er træt," sagde hun.', '"Sono stanca", disse lei.'], ['"Kom ind!" råbte han.', '"Entra!" gridò lui.']])
        },
        {
          titolo: 'Condizionali senza hvis',
          html:
            '<p>Si può esprimere una condizione mettendo il verbo <strong>al primo posto</strong>, senza <span class="da">hvis</span>. È tipico del danese parlato e scritto.</p>' +
            ex([['Har du tid i morgen, kan vi ses.', 'Se hai tempo domani, possiamo vederci.'], ['Kommer han, går jeg.', 'Se viene lui, me ne vado.']])
        },
        {
          titolo: 'Niente inversione nelle domande indirette',
          html:
            '<p>Nelle subordinate (anche nelle domande indirette) l\'ordine è sempre <strong>soggetto + verbo</strong>.</p>' +
            table(['Domanda diretta', 'Domanda indiretta'], [
              ['<span class="da">Hvor bor han?</span>', '<span class="da">Jeg ved ikke, hvor han bor.</span>'],
              ['<span class="da">Kommer hun?</span>', '<span class="da">Jeg spørger, om hun kommer.</span>']
            ])
        }
      ],
      quiz: [
        { domanda: '"Jeg er træt," ___.', opzioni: ['sagde hun', 'hun sagde', 'sagde'], spiegazione: 'Dopo il discorso diretto: verbo + soggetto.' },
        { domanda: '___ du tid i morgen, kan vi ses. <em>(se hai tempo)</em>', opzioni: ['Har', 'Hvis har', 'Du har'], spiegazione: 'Condizionale senza hvis: verbo al primo posto.' },
        { domanda: 'Den film ___ set tre gange.', opzioni: ['har jeg', 'jeg har', 'har'], spiegazione: 'Complemento al primo posto → verbo + soggetto.' },
        { domanda: 'Hvis det regner, ___ hjemme.', opzioni: ['bliver vi', 'vi bliver', 'blive vi'], spiegazione: 'Subordinata al primo posto → inversione.' },
        { domanda: 'Jeg ved ikke, ___.', opzioni: ['hvor han bor', 'hvor bor han', 'bor han hvor'], spiegazione: 'Domanda indiretta: nessuna inversione.' },
        { domanda: 'Heldigvis ___ ikke syg.', opzioni: ['er hun', 'hun er', 'hun ikke er'], spiegazione: 'Avverbio al primo posto → verbo + soggetto.' },
        { domanda: 'Jeg spørger, ___.', opzioni: ['om hun kommer', 'kommer hun', 'om kommer hun'], spiegazione: 'Domanda indiretta sì/no: <span class="da">om</span> + soggetto + verbo.' }
      ]
    }
  }
};
