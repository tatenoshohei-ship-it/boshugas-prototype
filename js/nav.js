// 房州ガス プロトタイプ - 共通ナビゲーション v2
(function () {
  // --- CSS ---
  var style = document.createElement('style');
  style.textContent = [
    '#proto-mega-header { background:#0068b7; padding:0; position:relative; z-index:99990; }',
    '#proto-mega-header * { box-sizing:border-box; }',
    '#proto-mega-header .pmh-inner { max-width:1100px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding:0 20px; }',
    '#proto-mega-header .pmh-logo { color:#fff; font-size:20px; font-weight:700; text-decoration:none; padding:14px 0; }',
    '#proto-mega-header .pmh-nav { display:flex; gap:0; align-items:center; list-style:none; margin:0; padding:0; }',
    '#proto-mega-header .pmh-nav-item { position:relative; }',
    '#proto-mega-header .pmh-nav-trigger { display:block; padding:16px 14px; color:#fff; text-decoration:none; font-size:13px; font-weight:500; white-space:nowrap; cursor:pointer; border:none; background:none; font-family:inherit; }',
    '#proto-mega-header .pmh-nav-trigger:hover { background:rgba(255,255,255,0.15); }',
    '#proto-mega-header .pmh-dropdown { display:none !important; position:absolute; top:100%; left:0; min-width:220px; background:#fff; border-radius:0 0 8px 8px; box-shadow:0 8px 24px rgba(0,0,0,0.18); z-index:99999; padding:8px 0; }',
    '#proto-mega-header .pmh-nav-item:hover > .pmh-dropdown { display:block !important; }',
    '#proto-mega-header .pmh-dropdown a { display:block; padding:10px 20px; color:#333 !important; text-decoration:none !important; font-size:13px; border-left:3px solid transparent; transition:all 0.15s; background:#fff !important; }',
    '#proto-mega-header .pmh-dropdown a:hover { background:#f0f7ff !important; color:#0068b7 !important; border-left-color:#0068b7; }',
    '#proto-mega-header .pmh-mobile-btn { display:none; background:none; border:1px solid rgba(255,255,255,0.5); color:#fff; font-size:22px; padding:6px 12px; border-radius:4px; cursor:pointer; }',
    '@media (max-width:900px) {',
    '  #proto-mega-header .pmh-nav { display:none; flex-direction:column; position:absolute; top:100%; left:0; right:0; background:#0068b7; padding:8px 0; z-index:99998; }',
    '  #proto-mega-header .pmh-nav.is-open { display:flex !important; }',
    '  #proto-mega-header .pmh-dropdown { position:static !important; box-shadow:none !important; background:rgba(0,0,0,0.15) !important; border-radius:0 !important; }',
    '  #proto-mega-header .pmh-nav-item:hover > .pmh-dropdown { display:none !important; }',
    '  #proto-mega-header .pmh-nav-item.is-open > .pmh-dropdown { display:block !important; }',
    '  #proto-mega-header .pmh-dropdown a { color:#fff !important; padding-left:36px; }',
    '  #proto-mega-header .pmh-dropdown a:hover { background:rgba(255,255,255,0.1) !important; color:#fff !important; }',
    '  #proto-mega-header .pmh-mobile-btn { display:block; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // --- HTML ---
  var header = document.createElement('header');
  header.id = 'proto-mega-header';
  header.innerHTML = '<div class="pmh-inner">'
    + '<a href="index.html" class="pmh-logo">\u2606 \u623f\u5dde\u30ac\u30b9\u682a\u5f0f\u4f1a\u793e</a>'
    + '<ul class="pmh-nav">'
    + '<li class="pmh-nav-item"><button class="pmh-nav-trigger">\u500b\u4eba\u306e\u304a\u5ba2\u69d8\u3078 \u25be</button><div class="pmh-dropdown">'
    + '<a href="gas-application.html">\u30ac\u30b9\u306e\u3054\u5229\u7528</a>'
    + '<a href="gas-price.html">\u30ac\u30b9\u6599\u91d1</a>'
    + '<a href="payment.html">\u304a\u652f\u6255\u65b9\u6cd5</a>'
    + '<a href="safety.html">\u5b89\u5168\u306b\u304a\u4f7f\u3044\u3044\u305f\u3060\u304f\u305f\u3081\u306b</a>'
    + '<a href="faq.html">\u3088\u304f\u3042\u308b\u3054\u8cea\u554f</a>'
    + '<a href="terms.html">\u5404\u7a2e\u7d04\u6b3e</a>'
    + '</div></li>'
    + '<li class="pmh-nav-item"><button class="pmh-nav-trigger">\u6cd5\u4eba\u306e\u304a\u5ba2\u69d8\u3078 \u25be</button><div class="pmh-dropdown">'
    + '<a href="corporate-service.html">\u30b5\u30fc\u30d3\u30b9\u306e\u3054\u6848\u5185</a>'
    + '<a href="corporate-flow.html">\u5c0e\u5165\u307e\u3067\u306e\u6d41\u308c</a>'
    + '<a href="corporate-price.html">\u30ac\u30b9\u6599\u91d1</a>'
    + '<a href="corporate-case.html">\u6d3b\u7528\u4e8b\u4f8b</a>'
    + '<a href="corporate-construction.html">\u65b0\u7bc9\u30fb\u5c0e\u7ba1\u5f15\u304d\u8fbc\u307f</a>'
    + '<a href="corporate-faq.html">\u3088\u304f\u3042\u308b\u3054\u8cea\u554f</a>'
    + '<a href="corporate-terms.html">\u5404\u7a2e\u7d04\u6b3e</a>'
    + '</div></li>'
    + '<li class="pmh-nav-item"><button class="pmh-nav-trigger">\u304a\u56f0\u308a\u306e\u6642\u306f \u25be</button><div class="pmh-dropdown">'
    + '<a href="trouble-gas-smell.html">\u30ac\u30b9\u304f\u3055\u3044\u3068\u304d</a>'
    + '<a href="trouble-no-gas.html">\u30ac\u30b9\u304c\u51fa\u306a\u3044\u3068\u304d</a>'
    + '<a href="trouble-earthquake.html">\u5730\u9707\u306e\u3068\u304d\u306f</a>'
    + '<a href="trouble-meter-reset.html">\u30e1\u30fc\u30bf\u30fc\u5fa9\u5e30\u64cd\u4f5c</a>'
    + '<a href="trouble-equipment.html">\u30ac\u30b9\u6a5f\u5668\u304c\u6545\u969c\u3057\u305f\u3089</a>'
    + '</div></li>'
    + '<li class="pmh-nav-item"><button class="pmh-nav-trigger">\u30ac\u30b9\u6a5f\u5668 \u25be</button><div class="pmh-dropdown">'
    + '<a href="equipment-home.html">\u5bb6\u5ead\u7528</a>'
    + '<a href="equipment-business.html">\u696d\u52d9\u7528</a>'
    + '</div></li>'
    + '<li class="pmh-nav-item"><button class="pmh-nav-trigger">\u5b89\u5168\u30fb\u5de5\u4e8b \u25be</button><div class="pmh-dropdown">'
    + '<a href="safety-aging-pipe.html">\u7d4c\u5e74\u7ba1\u306e\u5165\u308c\u66ff\u3048</a>'
    + '<a href="safety-construction.html">\u30ac\u30b9\u5de5\u4e8b\u30fb\u8abf\u67fb</a>'
    + '<a href="safety-demolition.html">\u5efa\u7269\u89e3\u4f53\u6642\u306e\u304a\u9858\u3044</a>'
    + '<a href="safety-city-gas.html">\u90fd\u5e02\u30ac\u30b9\u3078\u306e\u5207\u66ff</a>'
    + '</div></li>'
    + '<li class="pmh-nav-item"><button class="pmh-nav-trigger">\u305d\u306e\u4ed6 \u25be</button><div class="pmh-dropdown">'
    + '<a href="news.html">\u304a\u77e5\u3089\u305b</a>'
    + '<a href="company.html">\u4f1a\u793e\u6848\u5185</a>'
    + '<a href="supply-area.html">\u4f9b\u7d66\u30a8\u30ea\u30a2</a>'
    + '<a href="environment.html">\u74b0\u5883\u30fb\u5730\u57df</a>'
    + '<a href="recruit.html">\u63a1\u7528\u60c5\u5831</a>'
    + '<a href="contact.html">\u304a\u554f\u3044\u5408\u308f\u305b</a>'
    + '<a href="privacy.html">\u500b\u4eba\u60c5\u5831</a>'
    + '</div></li>'
    + '</ul>'
    + '<button class="pmh-mobile-btn" onclick="document.querySelector(\'.pmh-nav\').classList.toggle(\'is-open\')">\u2630</button>'
    + '</div>';

  // --- Replace or insert header ---
  var oldHeader = document.querySelector('.proto-header')
    || document.querySelector('header.header')
    || document.querySelector('header')
    || document.querySelector('[class*="header"]');

  if (oldHeader) {
    oldHeader.parentNode.replaceChild(header, oldHeader);
  } else {
    document.body.insertBefore(header, document.body.firstChild);
  }

  // --- Mobile toggle ---
  header.querySelectorAll('.pmh-nav-trigger').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        this.parentElement.classList.toggle('is-open');
      }
    });
  });

  // --- Highlight current page ---
  var currentPage = location.pathname.split('/').pop() || 'index.html';
  header.querySelectorAll('.pmh-dropdown a').forEach(function (a) {
    if (a.getAttribute('href') === currentPage) {
      a.style.fontWeight = '700';
      a.style.color = '#0068b7';
      a.style.borderLeftColor = '#0068b7';
      a.style.background = '#f0f7ff';
    }
  });
})();
