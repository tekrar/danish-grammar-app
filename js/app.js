(function () {
  'use strict';

  var app = document.getElementById('app');
  var STORAGE_KEY = 'grammatica-danese-punteggi';

  // ---------- Punteggi salvati (solo nel browser dell'utente) ----------
  function loadScores() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveScore(level, topic, score, total) {
    var scores = loadScores();
    var key = level + '/' + topic;
    var prev = scores[key];
    if (!prev || score > prev.score) scores[key] = { score: score, total: total };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(scores)); } catch (e) { /* ignorato */ }
  }

  // ---------- Utilità ----------
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function render(nodes, title) {
    app.innerHTML = '';
    nodes.forEach(function (n) { if (n) app.appendChild(n); });
    document.title = title ? title + ' · Grammatica Danese' : 'Grammatica Danese';
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  // ---------- Pagine ----------
  function homePage() {
    var scores = loadScores();
    var levels = LEVELS.map(function (lvl) {
      var done = TOPICS.filter(function (t) { return scores[lvl.id + '/' + t.id]; }).length;
      return el('a', { class: 'level-btn lvl-' + lvl.id, href: '#/' + lvl.id }, [
        el('span', { class: 'name', text: lvl.nome }),
        el('span', { class: 'desc', text: lvl.descrizione }),
        el('span', { class: 'progress-label', text: done + ' argomenti su ' + TOPICS.length + ' completati' })
      ]);
    });

    render([
      el('section', { class: 'hero' }, [
        el('h1', { text: 'Impara la grammatica danese' }),
        el('p', { class: 'lead', text: 'Un percorso pensato per chi parla italiano. Scegli il tuo livello per iniziare.' })
      ]),
      el('nav', { class: 'levels', 'aria-label': 'Livelli' }, levels)
    ]);
  }

  function levelPage(levelId) {
    var lvl = LEVELS.find(function (l) { return l.id === levelId; });
    if (!lvl) return notFound();
    var scores = loadScores();

    var cards = TOPICS.map(function (t) {
      var data = CONTENT[levelId][t.id];
      var s = scores[levelId + '/' + t.id];
      return el('a', { class: 'topic-card', href: '#/' + levelId + '/' + t.id }, [
        el('span', { class: 't-name', text: t.nome }),
        el('span', { class: 't-da', text: t.danese }),
        el('span', { class: 't-sum', text: data.sommario }),
        el('span', {
          class: 'badge' + (s ? ' done' : ''),
          text: s ? 'Miglior punteggio: ' + s.score + '/' + s.total : 'Da fare'
        })
      ]);
    });

    var wrap = el('div', { class: 'lvl-' + levelId }, [
      el('p', { class: 'breadcrumb', html: '<a href="#/">Home</a> › ' + lvl.nome }),
      el('span', { class: 'level-tag', text: 'Livello' }),
      el('h1', { text: lvl.nome }),
      el('p', { class: 'lead', text: lvl.descrizione }),
      el('nav', { class: 'topics', 'aria-label': 'Argomenti' }, cards)
    ]);
    render([wrap], lvl.nome);
  }

  function topicPage(levelId, topicId) {
    var lvl = LEVELS.find(function (l) { return l.id === levelId; });
    var topic = TOPICS.find(function (t) { return t.id === topicId; });
    if (!lvl || !topic) return notFound();
    var data = CONTENT[levelId][topicId];

    var lesson = el('article', { class: 'lesson' });
    data.sezioni.forEach(function (sez) {
      lesson.appendChild(el('h2', { text: sez.titolo }));
      lesson.appendChild(el('div', { html: sez.html }));
    });

    var quizBox = el('section', { class: 'quiz', 'aria-labelledby': 'quiz-title' });
    buildQuiz(quizBox, data.quiz, levelId, topicId);

    var idx = TOPICS.indexOf(topic);
    var prev = TOPICS[idx - 1];
    var next = TOPICS[idx + 1];
    var pager = el('nav', { class: 'pager', 'aria-label': 'Altri argomenti' }, [
      prev ? el('a', { class: 'btn ghost', href: '#/' + levelId + '/' + prev.id, text: '← ' + prev.nome }) : el('span'),
      next ? el('a', { class: 'btn ghost', href: '#/' + levelId + '/' + next.id, text: next.nome + ' →' })
           : el('a', { class: 'btn ghost', href: '#/' + levelId, text: 'Tutti gli argomenti' })
    ]);

    var wrap = el('div', { class: 'lvl-' + levelId }, [
      el('p', { class: 'breadcrumb', html: '<a href="#/">Home</a> › <a href="#/' + levelId + '">' + lvl.nome + '</a> › ' + topic.nome }),
      el('span', { class: 'level-tag', text: lvl.nome }),
      el('h1', { text: topic.nome + ' ' }, [el('span', { class: 't-da', text: '(' + topic.danese + ')' })]),
      el('p', { class: 'lead', text: data.sommario }),
      lesson,
      quizBox,
      pager
    ]);
    render([wrap], topic.nome + ' · ' + lvl.nome);
  }

  function buildQuiz(box, questions, levelId, topicId) {
    box.innerHTML = '';
    var answered = 0;
    var correct = 0;
    var list = shuffle(questions);

    box.appendChild(el('h2', { id: 'quiz-title', text: 'Esercizi' }));
    box.appendChild(el('p', { class: 'lead', text: 'Scegli la risposta giusta. La correzione è immediata.' }));

    list.forEach(function (q, i) {
      var feedback = el('div', { class: 'feedback', 'aria-live': 'polite' });
      var opts = shuffle(q.opzioni.map(function (text, k) { return { text: text, ok: k === 0 }; }));
      var buttons = [];
      opts.forEach(function (o) {
        var b = el('button', { class: 'option', type: 'button', text: o.text });
        b.addEventListener('click', function () {
          buttons.forEach(function (bb, n) {
            bb.disabled = true;
            if (opts[n].ok) bb.classList.add('correct');
          });
          if (!o.ok) b.classList.add('wrong');
          answered++;
          if (o.ok) correct++;
          feedback.className = 'feedback ' + (o.ok ? 'ok' : 'ko');
          feedback.innerHTML = '<strong>' + (o.ok ? 'Giusto!' : 'Non proprio.') + '</strong> ' + q.spiegazione;
          if (answered === list.length) showResult();
        });
        buttons.push(b);
      });
      box.appendChild(el('div', { class: 'question' }, [
        el('div', { class: 'q-num', text: 'Domanda ' + (i + 1) + ' di ' + list.length }),
        el('div', { class: 'q-text', html: q.domanda }),
        el('div', { class: 'options' }, buttons),
        feedback
      ]));
    });

    function showResult() {
      saveScore(levelId, topicId, correct, list.length);
      var msg = correct === list.length ? 'Perfetto! Hai capito benissimo questo argomento.'
        : correct >= list.length * 0.6 ? 'Bravo/a! Ripassa le domande sbagliate e riprova.'
        : 'Rileggi la spiegazione qui sopra e riprova: ce la farai!';
      var result = el('div', { class: 'result', 'aria-live': 'polite' }, [
        el('div', { text: 'Risultato' }),
        el('div', { class: 'score', text: correct + ' / ' + list.length }),
        el('p', { text: msg }),
        el('div', { class: 'actions' }, [
          el('button', { class: 'btn', type: 'button', text: 'Riprova', onclick: function () {
            buildQuiz(box, questions, levelId, topicId);
            box.scrollIntoView({ behavior: 'smooth' });
          } }),
          el('a', { class: 'btn ghost', href: '#/' + levelId, text: 'Torna agli argomenti' })
        ])
      ]);
      box.appendChild(result);
    }
  }

  function notFound() {
    render([
      el('h1', { text: 'Pagina non trovata' }),
      el('p', {}, [el('a', { href: '#/', text: 'Torna alla home' })])
    ], 'Pagina non trovata');
  }

  // ---------- Router ----------
  function route() {
    var parts = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts.length === 0) homePage();
    else if (parts.length === 1) levelPage(parts[0]);
    else topicPage(parts[0], parts[1]);
  }

  window.addEventListener('hashchange', route);
  route();
})();
