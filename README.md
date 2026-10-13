# 🇩🇰 Grammatica Danese per Italiani

> **Hej! Velkommen!** Metti alla prova la tua grammatica danese con 18 quiz pensati per chi parla italiano: una domanda alla volta, correzione immediata e spiegazione per ogni risposta.

Il danese ha fama di lingua difficile: le vocali sembrano infinite e la pronuncia è un mistero. Ma c'è una buona notizia: **la grammatica è molto più semplice di quella italiana**. I verbi non cambiano per persona, non ci sono congiuntivi da memorizzare e le regole sull'ordine delle parole sono poche e logiche.

Questa web app ti allena dalle basi fino alle sfumature più raffinate, con domande costruite sugli errori tipici di chi parla italiano.

---

## ✨ Cosa trovi

**3 livelli** e **6 quiz** per ogni livello: in tutto **18 quiz** e **180 domande**.

| | 🟢 Principiante | 🟠 Intermedio | 🟣 Avanzato |
|---|---|---|---|
| **Verbi** | presente, være/have, modali | passato e perfektum | passivo, deponenti, condizionale |
| **Avverbi** | ikke, også, heller ikke | posizione nella subordinata, hjem/hjemme | jo, nok, vel e la posizione dei pronomi |
| **Pronomi** | personali, min/mit/mine | tutti i possessivi, sin vs hans | relativi e indefiniti |
| **Preposizioni** | i, på, fra, til, med, hos | preposizioni di tempo | verbi con preposizione fissa |
| **Congiunzioni** | og, men, eller, for, så | at, fordi, når/da, hvis/om | både…og, hverken…eller, medmindre |
| **Regola di inversione** | la regola V2 e le domande | inversione dopo avverbi e subordinate | discorso diretto, condizionali senza *hvis* |

Ogni quiz ha:

- ✅ **10 domande a scelta multipla**, una alla volta, con barra di avanzamento
- 💡 **Correzione immediata** e spiegazione in italiano dopo ogni risposta
- 📋 **Riepilogo finale** con le domande sbagliate da ripassare
- 📖 **"Ripassa la regola"**: un riquadro apribile con la teoria, tabelle ed esempi tradotti
- 🏆 **Punteggio migliore salvato** nel tuo browser, così vedi i tuoi progressi
- ⌨️ Sul computer puoi rispondere con i tasti **1, 2, 3** e andare avanti con **Invio**

## 📱 Funziona ovunque

L'app è pensata prima di tutto per il telefono: puoi ripassare sul treno, in pausa caffè o mentre aspetti l'autobus (*mens du venter på bussen!*). Si adatta anche a tablet e computer. I colori sono solo tre: bianco, rosso e verde, come la bandiera danese… e quella italiana! 🇩🇰🇮🇹

## 🚀 Provala subito

**Online:** apri la versione pubblicata su GitHub Pages:
👉 https://tekrar.github.io/danish-grammar-app/

**Sul tuo computer:** scarica il repository e apri `index.html` nel browser. Non serve installare niente.

```bash
git clone https://github.com/tekrar/danish-grammar-app.git
cd danish-grammar-app
open index.html   # su Windows: start index.html
```

## 🛠️ Com'è fatta

Solo **HTML, CSS e JavaScript puro**: nessun framework, nessuna dipendenza, nessun passaggio di build.

```
danish-grammar-app/
├── index.html        # la pagina principale
├── css/style.css     # stile (mobile first, bianco/rosso/verde)
└── js/
    ├── content.js    # teoria e domande dei quiz
    └── app.js        # navigazione, quiz e punteggi
```

### Aggiungere o modificare una domanda

Tutti i contenuti stanno in `js/content.js`. Ogni domanda ha questa forma:

```js
{
  domanda: 'Hun ___ fra Brasilien. <em>(at komme)</em>',
  opzioni: ['kommer', 'komme', 'kommerer'],   // la PRIMA è quella giusta
  spiegazione: 'Presente = infinito + -r.'
}
```

Le opzioni vengono mescolate automaticamente, quindi metti sempre la risposta corretta per prima.

### Pubblicare con GitHub Pages

1. Vai su **Settings → Pages** del repository
2. In *Source* scegli **Deploy from a branch**
3. Seleziona il branch `main` e la cartella `/ (root)`, poi salva

Dopo un minuto l'app sarà online.

## 📚 Fonti

I contenuti seguono la progressione del manuale *Godt begyndt. Corso di lingua danese*. Le spiegazioni e le domande sono state riscritte per questa app.

---

<p align="center"><strong>Held og lykke!</strong> 🍀 <em>(Buona fortuna!)</em></p>
