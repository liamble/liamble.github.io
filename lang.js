(function () {
  var b = document.body;
  function appliquer(l) {
    b.setAttribute('data-lang', l);
    document.documentElement.setAttribute('lang', l);
    var boutons = document.querySelectorAll('.langs button');
    for (var i = 0; i < boutons.length; i++) {
      boutons[i].setAttribute('aria-pressed', boutons[i].getAttribute('data-l') === l ? 'true' : 'false');
    }
  }
  var l = null;
  try { l = localStorage.getItem('lia-lang'); } catch (e) {}
  if (l !== 'fr' && l !== 'en') {
    l = (navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }
  appliquer(l);
  var boutons = document.querySelectorAll('.langs button');
  for (var i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener('click', function () {
      var choix = this.getAttribute('data-l');
      appliquer(choix);
      try { localStorage.setItem('lia-lang', choix); } catch (e) {}
    });
  }
})();
