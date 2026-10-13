# 🇩🇰 Grammatica Danese per Italiani

> **Hej! Velkommen!** Impara la grammatica danese passo dopo passo, con spiegazioni chiare in italiano ed esercizi a correzione immediata.

Il danese ha fama di lingua difficile: le vocali sembrano infinite e la pronuncia è un mistero. Ma c'è una buona notizia: **la grammatica è molto più semplice di quella italiana**. I verbi non cambiano per persona, non ci sono congiuntivi da memorizzare e le regole sull'ordine delle parole sono poche e logiche.

Questa web app ti accompagna dalle basi fino alle sfumature più raffinate, pensando sempre agli errori tipici di chi parla italiano.

---

## ✨ Cosa trovi

**3 livelli** e **6 argomenti** per ogni livello: in tutto **18 lezioni** e più di **120 esercizi**.

| | 🟢 Principiante | 🟠 Intermedio | 🟣 Avanzato |
|---|---|---|---|
| **Verbi** | presente, være/have, modali | passato e perfektum | passivo, deponenti, condizionale |
| **Avverbi** | ikke, også, heller ikke | posizione nella subordinata, hjem/hjemme | jo, nok, vel e la posizione dei pronomi |
| **Pronomi** | personali, min/mit/mine | tutti i possessivi, sin vs hans | relativi e indefiniti |
| **Preposizioni** | i, på, fra, til, med, hos | preposizioni di tempo | verbi con preposizione fissa |
| **Congiunzioni** | og, men, eller, for, så | at, fordi, når/da, hvis/om | både…og, hverken…eller, medmindre |
| **Regola di inversione** | la regola V2 e le domande | inversione dopo avverbi e subordinate | discorso diretto, condizionali senza *hvis* |

Ogni lezione contiene:

- 📖 **Spiegazioni brevi** in italiano, con tabelle ed esempi tradotti
- 💡 **Suggerimenti** sugli errori più comuni degli italiani
- ✅ **Esercizi a scelta multipla** con correzione immediata e spiegazione della risposta
- 🏆 **Punteggio salvato** nel tuo browser, così vedi i tuoi progressi

## 📱 Funziona ovunque

L'app è pensata prima di tutto per il telefono: puoi ripassare sul treno, in pausa caffè o mentre aspetti l'autobus (*mens du venter på bussen!*). Si adatta anche a tablet e computer e supporta la modalità scura.

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
├── css/style.css     # stile (anche mobile e modalità scura)
└── js/
    ├── content.js    # tutte le lezioni e gli esercizi
    └── app.js        # navigazione, quiz e punteggi
```

### Aggiungere o modificare un esercizio

Tutti i contenuti stanno in `js/content.js`. Ogni esercizio ha questa forma:

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

I contenuti seguono la progressione del manuale *Godt begyndt. Corso di lingua danese*. Le spiegazioni e gli esercizi sono stati riscritti per questa app.

---

<p align="center"><strong>Held og lykke!</strong> 🍀 <em>(Buona fortuna!)</em></p>
