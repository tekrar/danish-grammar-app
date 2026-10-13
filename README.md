# 🇩🇰 Grammatica Danese per Italiani

> **Hej! Velkommen!** Metti alla prova la tua grammatica danese con 18 quiz pensati per chi parla italiano: una domanda alla volta, correzione immediata e spiegazione per ogni risposta.

Il danese ha fama di lingua difficile: le vocali sembrano infinite e la pronuncia è un mistero. Ma c'è una buona notizia: **la grammatica è molto più semplice di quella italiana**. I verbi non cambiano per persona, non ci sono congiuntivi da memorizzare e le regole sull'ordine delle parole sono poche e logiche.

Questa web app ti allena dalle basi fino alle sfumature più raffinate, con domande costruite sugli errori tipici di chi parla italiano.

---

## ✨ Cosa trovi

**3 livelli** e **6 quiz** per ogni livello: in tutto **18 quiz** e **180 domande**.

Le domande seguono le **15 unità** del manuale *Godt begyndt*: il livello Principiante copre le unità 1–5, Intermedio le unità 6–10 e Avanzato le unità 11–15.

| | 🟢 Principiante (unità 1–5) | 🔴 Intermedio (unità 6–10) | 🔴 Avanzato (unità 11–15) |
|---|---|---|---|
| **Verbi** | presente, være/have, skal/vil, mødes, verbi riflessivi | imperativo, ligge/stå/hænge, passato prossimo con har/er | futuro, preterito, tro/synes, passivo, trapassato |
| **Avverbi** | ikke/aldrig, også, heller ikke, derimod, ja/jo | avverbi in -t, mange/meget/flere/mere, bedre/hellere | hjem/hjemme, ud/ude, ind/inde, derned/dernede |
| **Pronomi** | personali, min/mit/mine, sig | nogen/noget/nogle, sin vs hans/hendes, man/en | hvilken/hvilket/hvilke, der/som, denne/dette/disse |
| **Preposizioni** | i, på, til, på tirsdag vs om tirsdagen | foran, bagved, mellem, under, i/siden + durata | i mandags, for … siden, synes om, af nel passivo |
| **Congiunzioni** | og, men, eller, for, så | end, at, fordi, for vs fordi | at/om, da/når, hvis/om, selvom, mens, inden |
| **Regola di inversione** | la regola V2, domande, risposte brevi | il soggetto provvisorio der, V2 con i tempi composti | ordine nella subordinata, subordinata in testa |

Ogni quiz ha:

- ✅ **10 domande a scelta multipla con 4 risposte**, una alla volta, con barra di avanzamento
- 💡 **Correzione immediata** e spiegazione in italiano dopo ogni risposta
- 📋 **Riepilogo finale** con le domande sbagliate da ripassare
- 📖 **"Ripassa la regola"**: un riquadro apribile con la teoria, tabelle ed esempi tradotti
- 🏆 **Punteggio migliore salvato** nel tuo browser, così vedi i tuoi progressi
- ⌨️ Sul computer puoi rispondere con i tasti **1, 2, 3, 4** e andare avanti con **Invio**

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
  opzioni: ['kommer', 'komme', 'kommerer', 'at komme'],   // 4 opzioni, la PRIMA è quella giusta
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

Teoria e domande sono tratte dalle unità 1–15 del manuale *Godt begyndt. Corso di lingua danese*: regole, esempi ed esercizi del libro, riformulati come quiz a scelta multipla.

---

<p align="center"><strong>Held og lykke!</strong> 🍀 <em>(Buona fortuna!)</em></p>
