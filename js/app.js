(function () {
  'use strict';

  var app = document.getElementById('app');
  var STORAGE_KEY = 'grammatica-danese-punteggi';
  var keyHandler = null;

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

  function setKeys(fn) {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = fn;
    if (fn) document.addEventListener('keydown', fn);
  }

  function render(nodes, title) {
    setKeys(null);
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
        el('span', { class: 'progress-label', text: done + ' quiz su ' + TOPICS.length + ' completati' })
      ]);
    });

    render([
      el('section', { class: 'hero' }, [
        el('h1', { text: 'Metti alla prova il tuo danese' }),
        el('p', { class: 'lead', text: 'Quiz di grammatica danese pensati per chi parla italiano. Scegli il tuo livello e inizia!' })
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
          text: s ? 'Miglior punteggio: ' + s.score + '/' + s.total : 'Quiz · ' + data.quiz.length + ' domande'
        })
      ]);
    });

    var wrap = el('div', { class: 'lvl-' + levelId }, [
      el('p', { class: 'breadcrumb', html: '<a href="#/">Home</a> › ' + lvl.nome }),
      el('span', { class: 'level-tag', text: 'Livello' }),
      el('h1', { text: lvl.nome }),
      el('p', { class: 'lead', text: 'Scegli un quiz. ' + lvl.descrizione }),
      el('nav', { class: 'topics', 'aria-label': 'Quiz' }, cards)
    ]);
    render([wrap], lvl.nome);
  }

  function topicPage(levelId, topicId) {
    var lvl = LEVELS.find(function (l) { return l.id === levelId; });
    var topic = TOPICS.find(function (t) { return t.id === topicId; });
    if (!lvl || !topic) return notFound();
    var data = CONTENT[levelId][topicId];

    // Ripasso della regola: chiuso di default, il quiz è al centro
    var lesson = el('div', { class: 'lesson' });
    data.sezioni.forEach(function (sez) {
      lesson.appendChild(el('h2', { text: sez.titolo }));
      lesson.appendChild(el('div', { html: sez.html }));
    });
    var theory = el('details', { class: 'theory' }, [
      el('summary', { text: 'Ripassa la regola' }),
      lesson
    ]);

    var quizBox = el('section', { class: 'quiz', 'aria-label': 'Quiz' });

    var wrap = el('div', { class: 'lvl-' + levelId }, [
      el('p', { class: 'breadcrumb', html: '<a href="#/">Home</a> › <a href="#/' + levelId + '">' + lvl.nome + '</a> › ' + topic.nome }),
      el('span', { class: 'level-tag', text: 'Quiz · ' + lvl.nome }),
      el('h1', { text: topic.nome + ' ' }, [el('span', { class: 't-da', text: '(' + topic.danese + ')' })]),
      el('p', { class: 'lead', text: data.sommario }),
      theory,
      quizBox
    ]);
    render([wrap], topic.nome + ' · ' + lvl.nome);
    runQuiz(quizBox, data.quiz, levelId, topicId);
  }

  function runQuiz(box, questions, levelId, topicId) {
    var list = shuffle(questions);
    var current = 0;
    var correct = 0;
    var mistakes = [];

    function showQuestion() {
      var q = list[current];
      var answered = false;
      box.innerHTML = '';

      var pct = Math.round((current / list.length) * 100);
      var header = el('div', { class: 'quiz-head' }, [
        el('span', { text: 'Domanda ' + (current + 1) + ' di ' + list.length }),
        el('span', { class: 'quiz-score', text: '✓ ' + correct })
      ]);
      var bar = el('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(pct) }, [
        el('div', { class: 'progress-fill', style: 'width:' + pct + '%' })
      ]);

      var feedback = el('div', { class: 'feedback', 'aria-live': 'polite' });
      var next = el('button', { class: 'btn next-btn', type: 'button', hidden: 'hidden',
        text: current + 1 < list.length ? 'Avanti →' : 'Vedi il risultato' });
      next.addEventListener('click', goNext);

      var opts = shuffle(q.opzioni.map(function (text, k) { return { text: text, ok: k === 0 }; }));
      var buttons = opts.map(function (o, n) {
        var b = el('button', { class: 'option', type: 'button' }, [
          el('span', { class: 'opt-key', text: String(n + 1) }),
          el('span', { text: o.text })
        ]);
        b.addEventListener('click', function () { choose(n); });
        return b;
      });

      function choose(n) {
        if (answered) return;
        answered = true;
        var o = opts[n];
        buttons.forEach(function (bb, i) {
          bb.disabled = true;
          if (opts[i].ok) bb.classList.add('correct');
        });
        if (o.ok) correct++;
        else {
          buttons[n].classList.add('wrong');
          mistakes.push({ q: q, scelta: o.text });
        }
        feedback.className = 'feedback ' + (o.ok ? 'ok' : 'ko');
        feedback.innerHTML = '<strong>' + (o.ok ? 'Giusto!' : 'Non proprio.') + '</strong> ' + q.spiegazione;
        header.lastChild.textContent = '✓ ' + correct;
        next.hidden = false;
        next.focus({ preventScroll: true });
        next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      function goNext() {
        current++;
        if (current < list.length) showQuestion();
        else showResult();
      }

      setKeys(function (e) {
        if (e.target && (e.target.tagName === 'SUMMARY')) return;
        var k = parseInt(e.key, 10);
        if (!answered && k >= 1 && k <= buttons.length) { choose(k - 1); e.preventDefault(); }
        else if (answered && e.key === 'Enter' && document.activeElement !== next) { goNext(); e.preventDefault(); }
      });

      box.appendChild(el('div', { class: 'question' }, [
        header,
        bar,
        el('div', { class: 'q-text', html: q.domanda }),
        el('div', { class: 'options' }, buttons),
        feedback,
        el('div', { class: 'next-row' }, [next])
      ]));
    }

    function showResult() {
      setKeys(null);
      saveScore(levelId, topicId, correct, list.length);
      box.innerHTML = '';
      var ratio = correct / list.length;
      var stars = ratio === 1 ? '★★★' : ratio >= 0.7 ? '★★☆' : ratio >= 0.4 ? '★☆☆' : '☆☆☆';
      var msg = ratio === 1 ? 'Perfetto! Fantastisk! Hai risposto bene a tutto.'
        : ratio >= 0.7 ? 'Molto bene! Ripassa le domande sbagliate qui sotto.'
        : ratio >= 0.4 ? 'Buon inizio! Apri "Ripassa la regola" e riprova.'
        : 'Niente paura: ripassa la regola qui sopra e riprova.';

      var idx = TOPICS.findIndex(function (t) { return t.id === topicId; });
      var nextTopic = TOPICS[idx + 1];

      var children = [
        el('div', { class: 'stars', 'aria-hidden': 'true', text: stars }),
        el('div', { class: 'score', text: correct + ' / ' + list.length }),
        el('p', { text: msg }),
        el('div', { class: 'actions' }, [
          el('button', { class: 'btn', type: 'button', text: 'Rifai il quiz', onclick: function () {
            runQuiz(box, questions, levelId, topicId);
            box.scrollIntoView({ behavior: 'smooth' });
          } }),
          nextTopic
            ? el('a', { class: 'btn ghost', href: '#/' + levelId + '/' + nextTopic.id, text: 'Prossimo: ' + nextTopic.nome + ' →' })
            : el('a', { class: 'btn ghost', href: '#/' + levelId, text: 'Tutti i quiz' })
        ])
      ];

      if (mistakes.length) {
        var review = el('div', { class: 'review' }, [el('h3', { text: 'Da ripassare' })]);
        mistakes.forEach(function (m) {
          review.appendChild(el('div', { class: 'review-item' }, [
            el('div', { class: 'q-text', html: m.q.domanda }),
            el('div', { class: 'review-ans', html: '<span class="ko-text">La tua risposta: ' + m.scelta + '</span><br><span class="ok-text">Giusta: ' + m.q.opzioni[0] + '</span>' }),
            el('div', { class: 'review-exp', html: m.q.spiegazione })
          ]));
        });
        children.push(review);
      }

      box.appendChild(el('div', { class: 'result', 'aria-live': 'polite' }, children));
    }

    showQuestion();
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
