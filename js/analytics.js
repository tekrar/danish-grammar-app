/*
 * Statistiche dei visitatori con Google Analytics 4.
 *
 * 1. Crea una proprietà GA4 e copia l'ID di misurazione (G-XXXXXXXXXX).
 * 2. Incollalo qui sotto al posto del segnaposto.
 *
 * Finché l'ID è il segnaposto non viene caricato nulla e il banner non appare.
 * Google Analytics viene caricato solo dopo che il visitatore ha cliccato "Accetta".
 */
(function () {
  'use strict';

  var GA_ID = 'G-XXXXXXXXXX';
  var CONSENT_KEY = 'grammatica-danese-consenso';

  if (!/^G-[A-Z0-9]+$/.test(GA_ID) || GA_ID === 'G-XXXXXXXXXX') return;

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* ignorato */ }
  }

  var loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // L'app cambia pagina con l'hash (#/livello/argomento): le visite le mandiamo noi
    window.gtag('config', GA_ID, { send_page_view: false });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    sendPageView();
    window.addEventListener('hashchange', function () {
      // aspetta che app.js aggiorni il titolo della pagina
      setTimeout(sendPageView, 0);
    });
  }

  function sendPageView() {
    var path = location.pathname + (location.hash || '#/');
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: location.origin + path,
      page_path: path
    });
  }

  function deleteGaCookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      var host = location.hostname;
      [host, '.' + host].forEach(function (d) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
      });
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
  }

  var banner = null;
  function showBanner() {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consenso ai cookie');
    banner.innerHTML =
      '<p>Usiamo Google Analytics per sapere quante persone usano l\'app, da quale paese e quali quiz visitano. ' +
      'Non raccogliamo nome né email: i dati servono solo a migliorare l\'app. Accetti i cookie statistici?</p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn ghost" data-choice="denied">Rifiuta</button>' +
      '<button type="button" class="btn" data-choice="granted">Accetta</button>' +
      '</div>';
    banner.addEventListener('click', function (e) {
      var choice = e.target.getAttribute && e.target.getAttribute('data-choice');
      if (!choice) return;
      setConsent(choice);
      banner.remove();
      banner = null;
      if (choice === 'granted') loadAnalytics();
      else {
        deleteGaCookies();
        if (loaded) location.reload(); // revoca: ricarica senza Analytics
      }
    });
    document.body.appendChild(banner);
  }

  // Link "Preferenze cookie" nel footer per cambiare idea
  var footer = document.querySelector('.footer');
  if (footer) {
    var p = document.createElement('p');
    var a = document.createElement('a');
    a.href = '#';
    a.className = 'cookie-link';
    a.textContent = 'Preferenze cookie';
    a.addEventListener('click', function (e) { e.preventDefault(); showBanner(); });
    p.appendChild(a);
    footer.appendChild(p);
  }

  var consent = getConsent();
  if (consent === 'granted') loadAnalytics();
  else if (consent !== 'denied') showBanner();
})();
