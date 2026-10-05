/* ==========================================================================
   Kriya · estructura y piezas compartidas del portal
   --------------------------------------------------------------------------
   Este archivo define el mapa del portal (sus caminos y las secciones de
   cada uno) y dibuja lo que comparten las páginas de inicio y de portada:
   la barra de navegación con su menú, el pie de página, el cielo
   estrellado, las tarjetas de secciones y las figuras de entrada.

   Cómo se usa en una página:
     <nav class="nav" id="nav" data-actual="kriya"></nav>  barra y menú
     <div class="cards" data-camino="kriya"></div>        tarjetas de un camino
     <div data-caminos></div>                             figuras de entrada
     <div data-figura="buda"></div>                       una figura suelta
     <footer class="foot" id="foot"></footer>             pie de página
     <script src="portal.js"></script>                    al final del <body>

   Para añadir una sección, agrega un objeto a las «secciones» de su camino.
   Para añadir un camino (otra tradición), agrega un objeto a PORTAL.caminos
   y crea su página de portada copiando kriya.html o buda.html.
   ========================================================================== */
(function(){

/*
  Campos de cada sección:
    id          identificador único
    titulo      nombre principal
    subtitulo   línea corta en cursiva
    descripcion texto de la tarjeta
    grupo       categoría que se muestra en la tarjeta
    href        enlace a la página; si se omite, aparece como «Próximamente»
    color       color de acento (hex)
    petalos     número de pétalos del icono de loto
    icono       opcional: 'rueda' dibuja la rueda de los yugas en lugar de un loto
*/
const PORTAL = {
  nombre: 'Kriya',
  lema: 'mapas de las tradiciones contemplativas',
  caminos: [
    {id:'kriya', titulo:'Kriya', subtitulo:'Kriya yoga', href:'kriya.html', color:'#6f8fe0', figura:'krishna',
     descripcion:'El cuerpo sutil, los chakras y los grandes ciclos del tiempo en la tradición del Kriya yoga.',
     secciones:[
      {id:'chakras', titulo:'Los siete lotos', subtitulo:'Chakras y sus dualidades', grupo:'Cuerpo sutil',
       descripcion:'Recorre la columna de mūlādhāra a sahasrāra. Cada chakra muestra sus atributos, sus emociones y las dualidades que se integran en suṣumnā.',
       href:'chakras-interactivo.html', color:'#e0bd45', petalos:10},
      {id:'yugas', titulo:'La rueda de los yugas', subtitulo:'Los ciclos cósmicos de Sri Yukteswar', grupo:'Ciclos cósmicos',
       descripcion:'El Sol gira alrededor de su estrella dual en 24.000 años y, al acercarse o alejarse de Vishnunabhi, la inteligencia humana se expande o se contrae. Recorre las cuatro eras y descubre en cuál vivimos.',
       href:'yugas-yukteswar.html', color:'#c4824f', icono:'rueda'},
      {id:'nadis', titulo:'Las tres nāḍīs', subtitulo:'Iḍā, piṅgalā y suṣumnā', grupo:'Cuerpo sutil',
       descripcion:'Las corrientes lunar y solar que se entrelazan alrededor de la columna, y el canal central donde se reúnen.',
       color:'#8b7ce0', petalos:2},
      {id:'bijas', titulo:'Bījas y mantras', subtitulo:'La sílaba semilla', grupo:'Práctica',
       descripcion:'El sonido de cada centro: cómo se pronuncia, dónde resuena y cómo se usa en japa.',
       color:'#5fb2d9', petalos:16}
     ]},
    {id:'buda', titulo:'Buda', subtitulo:'Budismo', href:'buda.html', color:'#d0843f', figura:'buda',
     descripcion:'La enseñanza del Buda sobre la mente, el sufrimiento y el camino que lleva a su cese.',
     secciones:[]}
  ]
};

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const RAINBOW = ['#d9574a','#e48d45','#e0bd45','#5fbf8a','#5fb2d9','#8b7ce0','#c7a2ec'];
let uid = 0;

/* ---- Dibujo: pétalos y lotos ---- */
function mix(hex, w){
  const n = parseInt(hex.slice(1),16);
  let r = n>>16, g = (n>>8)&255, b = n&255;
  r = Math.round(r+(255-r)*w); g = Math.round(g+(255-g)*w); b = Math.round(b+(255-b)*w);
  return 'rgb('+r+','+g+','+b+')';
}
function petal(b,l,w){
  return 'M0,'+(-b)+' C'+w+','+(-(b+l*.3))+' '+(w*.75)+','+(-(b+l*.85))+' 0,'+(-(b+l))+
         ' C'+(-w*.75)+','+(-(b+l*.85))+' '+(-w)+','+(-(b+l*.3))+' 0,'+(-b)+'Z';
}
function ring(n,b,l,fill,stroke,off,op,wMax){
  const w = Math.min(wMax||l*.42, Math.PI*b/n*1.25);
  let s = '';
  for(let i=0;i<n;i++){
    s += '<path d="'+petal(b,l,w)+'" transform="rotate('+(off+i*360/n)+')" fill="'+fill+'" fill-opacity="'+op+'" stroke="'+stroke+'" stroke-opacity=".9" stroke-width="1"/>';
  }
  return s;
}

/* ---- Iconos de las secciones ---- */
/* Rueda de los yugas: ocho arcos proporcionales a su duración,
   Satya arriba (junto a Vishnunabhi) y el Sol girando sobre la órbita */
const YUGA_ARCOS = [['#e8c46a',4],['#b9c5de',3],['#c4824f',2],['#7a8095',1],['#7a8095',1],['#c4824f',2],['#b9c5de',3],['#e8c46a',4]];
function wheel(s, p){
  const id = p+'-'+s.id, R = 80, pt = a => (R*Math.cos(a*Math.PI/180)).toFixed(1)+' '+(R*Math.sin(a*Math.PI/180)).toFixed(1);
  let a = -90, arcs = '';
  YUGA_ARCOS.forEach(([c,u]) => {
    const a0 = a+2, a1 = a+u*18-2;
    arcs += '<path d="M'+pt(a0)+' A'+R+' '+R+' 0 0 1 '+pt(a1)+'" fill="none" stroke="'+c+'" stroke-width="22"/>';
    a += u*18;
  });
  const hoy = 112.9; // 2026 d.C. en la órbita del modelo
  return '<svg viewBox="-125 -125 250 250" aria-hidden="true"><defs>'+
    '<radialGradient id="'+id+'-h"><stop offset="0" stop-color="'+s.color+'" stop-opacity=".5"/>'+
    '<stop offset="1" stop-color="'+s.color+'" stop-opacity="0"/></radialGradient></defs>'+
    '<circle r="124" fill="url(#'+id+'-h)"/>'+
    '<g opacity=".9">'+arcs+'</g>'+
    '<circle cy="-112" r="7" fill="#f6f1ff"/>'+
    '<circle r="9" fill="#dbe8ff"/>'+
    '<g class="petals-s"><circle r="'+R+'" fill="none" stroke="none"/>'+
    '<circle cx="'+(R*Math.cos(hoy*Math.PI/180)).toFixed(1)+'" cy="'+(R*Math.sin(hoy*Math.PI/180)).toFixed(1)+'" r="15" fill="#ffd27a" stroke="var(--card)" stroke-width="4"/></g></svg>';
}
/* Loto con el número de pétalos de la sección */
function icon(s, p){
  if(s.icono==='rueda') return wheel(s, p);
  const id = p+'-'+s.id;
  const petals = s.petalos===2
    ? '<path d="'+petal(38,72,36)+'" transform="rotate(90)" fill="url(#'+id+')" fill-opacity=".9" stroke="'+s.color+'"/>'+
      '<path d="'+petal(38,72,36)+'" transform="rotate(-90)" fill="url(#'+id+')" fill-opacity=".9" stroke="'+s.color+'"/>'
    : ring(s.petalos,48,62,'url(#'+id+')',s.color,0,.88);
  return '<svg viewBox="-125 -125 250 250" aria-hidden="true"><defs>'+
    '<radialGradient id="'+id+'" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="112">'+
    '<stop offset=".3" stop-color="'+mix(s.color,.75)+'"/><stop offset="1" stop-color="'+s.color+'"/></radialGradient>'+
    '<radialGradient id="'+id+'-h"><stop offset="0" stop-color="'+s.color+'" stop-opacity=".55"/>'+
    '<stop offset="1" stop-color="'+s.color+'" stop-opacity="0"/></radialGradient></defs>'+
    '<circle r="124" fill="url(#'+id+'-h)"/>'+
    '<g class="petals-s">'+petals+'</g>'+
    '<circle r="44" fill="var(--card)" stroke="'+s.color+'" stroke-width="5"/>'+
    '<circle r="14" fill="'+s.color+'"/></svg>';
}

/* ---- Figuras de entrada: Krishna y Buda en meditación ---- */
const FIGURAS = {
  krishna:{skin:'#5a7fd6', shade:'#3c5bab', cloth:'#e8b23a', clothShade:'#b9851d', hair:'#1b1838', halo:'#8da0e8', aura:'#e8c46a'},
  buda:   {skin:'#e6b872', shade:'#c09049', cloth:'#c9662c', clothShade:'#9a4a1c', hair:'#2b2552', halo:'#f0cf7a', aura:'#e8c46a'}
};
function figura(tipo){
  const P = FIGURAS[tipo], k = tipo==='krishna', p = 'fg'+(++uid);
  const u = s => 'url(#'+p+s+')', line = '#2a2140';
  const skin = u('s'), cloth = u('c');

  // Loto del asiento: fila trasera (detrás de las piernas) y fila delantera
  let back = '', front = '';
  for(let i=0;i<9;i++) back += '<path d="'+petal(0,98,24)+'" transform="translate(150 304) scale(1 .36) rotate('+(-90+i*22.5)+')"/>';
  for(let i=0;i<7;i++) front += '<path d="'+petal(0,46,17)+'" transform="translate(150 320) scale(1 .42) rotate('+(-75+i*25)+')"/>';

  // Rayos del halo
  const rays = ring(k?24:36, 46, k?30:24, u('r'), P.halo, 0, k?.45:.35);

  // Chispas que ascienden
  let sparks = '';
  [[88,250],[212,236],[116,176],[186,166],[150,30],[74,140],[226,122],[150,214]].forEach(([x,y],i) => {
    sparks += '<circle class="fig-spark" cx="'+x+'" cy="'+y+'" r="2.2" fill="'+P.aura+'" style="animation-delay:'+(i*.75).toFixed(2)+'s"/>';
  });

  let body = '';
  // Piernas cruzadas en loto, cubiertas por la tela
  body += '<path d="M66,290 C64,262 96,242 150,242 C204,242 236,262 234,290 C234,302 206,306 150,304 C94,306 66,302 66,290 Z" fill="'+cloth+'"/>';
  body += '<path d="M92,278 Q150,264 208,278 M150,250 Q146,278 150,302 M84,292 Q118,286 140,296 M216,292 Q182,286 160,296" fill="none" stroke="'+P.clothShade+'" stroke-width="1.6" stroke-linecap="round" opacity=".55"/>';
  // Pies sobre los muslos
  body += '<ellipse cx="112" cy="261" rx="17" ry="6.5" transform="rotate(-12 112 261)" fill="'+skin+'"/>'+
          '<ellipse cx="188" cy="261" rx="17" ry="6.5" transform="rotate(12 188 261)" fill="'+skin+'"/>';
  // Cuello y torso
  body += '<path d="M141,126 L141,152 L159,152 L159,126 Z" fill="'+P.shade+'"/>';
  body += '<path d="M150,146 C132,146 116,150 110,160 C104,182 108,214 116,244 L184,244 C192,214 196,182 190,160 C184,150 168,146 150,146 Z" fill="'+skin+'"/>';
  if(k){
    // Collar y guirnalda vaijayantī
    body += '<path d="M128,151 Q150,170 172,151" fill="none" stroke="#e8c46a" stroke-width="2.6"/>';
    body += '<path d="M121,155 C117,190 133,220 150,226 C167,220 183,190 179,155" fill="none" stroke="#3f9a6c" stroke-width="5" stroke-linecap="round"/>';
    [[120,170],[123,188],[131,205],[140,217],[150,224],[160,217],[169,205],[177,188],[180,170]].forEach(([x,y],i) => {
      body += '<circle cx="'+x+'" cy="'+y+'" r="3.4" fill="'+['#d9574a','#f6efe0','#e8c46a'][i%3]+'"/>';
    });
  } else {
    // Hábito monástico sobre el hombro izquierdo, hombro derecho descubierto
    body += '<path d="M150,147 C168,146 185,150 190,160 C196,182 192,214 184,244 L114,244 C118,230 124,218 131,206 C141,188 146,168 150,147 Z" fill="'+cloth+'"/>';
    body += '<path d="M150,147 C146,168 141,188 131,206 C124,218 118,230 114,244" fill="none" stroke="'+P.clothShade+'" stroke-width="2"/>';
    body += '<path d="M158,170 Q170,196 168,232 M174,164 Q184,192 180,236" fill="none" stroke="'+P.clothShade+'" stroke-width="1.4" opacity=".55"/>';
  }
  // Brazos con las manos en el regazo (dhyāna mudrā)
  const armL = 'M114,162 C96,182 92,212 102,230 C110,244 128,250 146,251';
  const armR = 'M186,162 C204,182 208,212 198,230 C190,244 172,250 154,251';
  body += '<path d="'+armL+'" fill="none" stroke="'+skin+'" stroke-width="15" stroke-linecap="round"/>';
  body += '<path d="'+armR+'" fill="none" stroke="'+(k?skin:cloth)+'" stroke-width="15" stroke-linecap="round"/>';
  if(k) body += '<path d="M101,224 L111,222 M199,224 L189,222" stroke="#e8c46a" stroke-width="3" stroke-linecap="round"/>';
  body += '<ellipse cx="150" cy="252" rx="21" ry="8.5" fill="'+skin+'"/>'+
          '<path d="M137,249 Q150,241 163,249" fill="none" stroke="'+P.shade+'" stroke-width="1.4"/>';

  // Cabeza
  let head = '';
  if(k){
    head += '<path d="M130,100 C124,118 125,134 133,146 M170,100 C176,118 175,134 167,146" fill="none" stroke="'+P.hair+'" stroke-width="6" stroke-linecap="round"/>';
  } else {
    head += '<ellipse cx="128" cy="116" rx="5.5" ry="14" fill="'+skin+'"/><ellipse cx="172" cy="116" rx="5.5" ry="14" fill="'+skin+'"/>';
  }
  head += '<ellipse cx="150" cy="108" rx="21" ry="25" fill="'+skin+'"/>';
  head += '<path d="M129,104 C129,84 140,80 150,80 C160,80 171,84 171,104 C166,94 158,90 150,90 C142,90 134,94 129,104 Z" fill="'+P.hair+'"/>';
  if(k){
    // Corona (mukuṭa) y pluma de pavo real
    head += '<g class="fig-pluma"><path d="M160,70 Q168,50 177,32" fill="none" stroke="#2f7d5b" stroke-width="2"/>'+
            '<ellipse cx="179" cy="28" rx="9" ry="16" transform="rotate(22 179 28)" fill="'+u('f')+'"/>'+
            '<ellipse cx="180" cy="25" rx="4.6" ry="7" transform="rotate(22 180 25)" fill="#e8c46a"/>'+
            '<ellipse cx="180.5" cy="24" rx="2.6" ry="4" transform="rotate(22 180.5 24)" fill="#1e3a8a"/></g>';
    head += '<path d="M128,88 L131,64 L140,74 L150,52 L160,74 L169,64 L172,88 Z" fill="#e8c46a" stroke="#a2751f" stroke-width="1"/>'+
            '<rect x="127" y="82" width="46" height="7" rx="2" fill="#c9962f"/>'+
            '<circle cx="150" cy="73" r="3.2" fill="#d9574a"/>';
    head += '<path d="M147,92 L150,101 L153,92" fill="none" stroke="#e8c46a" stroke-width="1.6" stroke-linejoin="round"/>';
    head += '<circle cx="129" cy="118" r="3" fill="#e8c46a"/><circle cx="171" cy="118" r="3" fill="#e8c46a"/>';
  } else {
    // Rizos, protuberancia (uṣṇīṣa) y ūrṇā
    head += '<ellipse cx="150" cy="79" rx="11" ry="9" fill="'+P.hair+'"/>';
    [[137,90],[144,86],[151,85],[158,86],[164,90],[150,76],[145,79],[155,79]].forEach(([x,y]) => {
      head += '<circle cx="'+x+'" cy="'+y+'" r="2" fill="#3c3570"/>';
    });
    head += '<circle cx="150" cy="99" r="1.7" fill="#a2751f"/>';
  }
  // Ojos cerrados y leve sonrisa
  head += '<path d="M136,109 Q141,113 146,109 M154,109 Q159,113 164,109" fill="none" stroke="'+line+'" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>'+
          '<path d="M145,122 Q150,125 155,122" fill="none" stroke="'+line+'" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>';

  const leaf = k ? '' :
    '<g class="fig-hoja"><path d="M150,10 C158,42 205,62 228,110 C248,156 230,206 190,216 C172,220 158,210 150,200 C142,210 128,220 110,216 C70,206 52,156 72,110 C95,62 142,42 150,10 Z" fill="#5fbf8a" fill-opacity=".14" stroke="#5fbf8a" stroke-opacity=".4" stroke-width="1.4"/>'+
    '<path d="M150,22 L150,196 M150,90 Q120,100 96,128 M150,90 Q180,100 204,128 M150,130 Q122,140 90,170 M150,130 Q178,140 210,170" fill="none" stroke="#5fbf8a" stroke-opacity=".3" stroke-width="1.2"/></g>';

  return '<svg class="figura fig-'+tipo+'" viewBox="0 0 300 340" aria-hidden="true"><defs>'+
    '<radialGradient id="'+p+'h"><stop offset="0" stop-color="'+P.halo+'" stop-opacity=".9"/><stop offset=".5" stop-color="'+P.halo+'" stop-opacity=".35"/><stop offset="1" stop-color="'+P.halo+'" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="'+p+'a" cx="50%" cy="58%"><stop offset="0" stop-color="'+P.aura+'" stop-opacity=".3"/><stop offset="1" stop-color="'+P.aura+'" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="'+p+'r" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="80"><stop offset=".5" stop-color="'+mix(P.halo,.4)+'"/><stop offset="1" stop-color="'+P.halo+'"/></radialGradient>'+
    '<linearGradient id="'+p+'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7d3dc"/><stop offset="1" stop-color="#d9788f"/></linearGradient>'+
    '<linearGradient id="'+p+'s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+P.skin+'"/><stop offset="1" stop-color="'+P.shade+'"/></linearGradient>'+
    '<linearGradient id="'+p+'c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.cloth+'"/><stop offset="1" stop-color="'+P.clothShade+'"/></linearGradient>'+
    '<radialGradient id="'+p+'f"><stop offset="0" stop-color="#46c2c9"/><stop offset=".6" stop-color="#2f9e7a"/><stop offset="1" stop-color="#1f6b52"/></radialGradient>'+
    '</defs>'+
    '<ellipse class="fig-mandorla" cx="150" cy="196" rx="120" ry="144" fill="'+u('a')+'"/>'+
    leaf+
    '<g transform="translate(150 108)"><g class="fig-rays">'+rays+'</g></g>'+
    '<circle class="fig-halo" cx="150" cy="108" r="50" fill="'+u('h')+'"/>'+
    '<ellipse cx="150" cy="326" rx="88" ry="6" fill="#000" opacity=".14"/>'+
    '<g fill="'+u('l')+'" stroke="#b85a72" stroke-opacity=".55" stroke-width="1">'+back+'</g>'+
    '<g class="fig-body">'+body+head+'</g>'+
    '<g fill="'+u('l')+'" stroke="#b85a72" stroke-opacity=".55" stroke-width="1">'+front+'</g>'+
    '<g class="fig-sparks">'+sparks+'</g></svg>';
}

/* Marca del portal: loto con los colores de raíz a corona */
function brandMark(){
  return '<svg viewBox="-60 -60 120 120" aria-hidden="true"><defs><radialGradient id="brandG" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="56">'+
    '<stop offset=".35" stop-color="'+RAINBOW[2]+'"/><stop offset="1" stop-color="'+RAINBOW[6]+'"/></radialGradient></defs>'+
    '<g class="petals-s">'+ring(8,16,38,'url(#brandG)','var(--gold)',0,.75)+'</g>'+
    '<circle r="15" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/><circle r="4.5" fill="var(--gold)"/></svg>';
}

/* ---- Barra de navegación y menú ---- */
function renderNav(nav){
  const actual = nav.dataset.actual || 'inicio';
  const cur = id => id===actual ? ' aria-current="page"' : '';
  document.documentElement.classList.add('con-nav');
  nav.setAttribute('aria-label', 'Principal');

  let grupos = '';
  PORTAL.caminos.forEach(c => {
    let items = '<li><a class="m-item m-camino" href="'+c.href+'" style="--c:'+c.color+'">'+
      '<span class="ico">'+figura(c.figura)+'</span>'+
      '<span><span class="mt">'+c.titulo+'</span><span class="ms">'+c.subtitulo+' · portada</span></span></a></li>';
    c.secciones.forEach(s => {
      const txt = '<span><span class="mt">'+s.titulo+(s.href?'':'<span class="tag">Pronto</span>')+'</span>'+
                  '<span class="ms">'+s.subtitulo+'</span></span>';
      const ico = '<span class="ico">'+icon(s,'m')+'</span>';
      items += '<li>'+(s.href
        ? '<a class="m-item" href="'+s.href+'" style="--c:'+s.color+'">'+ico+txt+'</a>'
        : '<span class="m-item soon" aria-disabled="true" style="--c:'+s.color+'">'+ico+txt+'</span>')+'</li>';
    });
    if(!c.secciones.length) items += '<li class="m-empty">Sus primeras secciones están en preparación.</li>';
    grupos += '<section class="menu-group"><h3>'+c.titulo+' · '+c.subtitulo+'</h3><ul class="menu-list">'+items+'</ul></section>';
  });
  const listas = PORTAL.caminos.reduce((n,c) => n + c.secciones.filter(s => s.href).length, 0);

  nav.innerHTML =
    '<div class="nav-inner">'+
      '<a class="brand" href="index.html" aria-label="'+PORTAL.nombre+', inicio">'+brandMark()+'<span>'+PORTAL.nombre+'</span></a>'+
      '<ul class="nav-links">'+
        '<li><a class="nav-link hide-sm" href="index.html"'+cur('inicio')+'>Inicio</a></li>'+
        PORTAL.caminos.map(c => '<li><a class="nav-link hide-sm" href="'+c.href+'"'+cur(c.id)+'>'+c.titulo+'</a></li>').join('')+
        '<li><button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="menu">'+
          '<span class="burger" aria-hidden="true"><span></span><span></span><span></span></span><span class="lbl">Secciones</span></button></li>'+
      '</ul>'+
      '<div class="menu" id="menu" hidden>'+
        '<div class="menu-head"><p>Elige un camino</p><span class="count">'+
          listas+(listas===1?' sección disponible':' secciones disponibles')+'</span></div>'+grupos+
      '</div>'+
    '</div>';

  const menu = nav.querySelector('#menu'), btn = nav.querySelector('#menuBtn');
  const links = () => [...menu.querySelectorAll('a.m-item')];
  function setMenu(open, focusFirst){
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true':'false');
    nav.classList.toggle('open', open);
    if(open && focusFirst){ const l = links(); if(l[0]) l[0].focus(); }
  }
  btn.addEventListener('click', e => setMenu(menu.hidden, e.detail===0));
  btn.addEventListener('keydown', e => { if(e.key==='ArrowDown'){ e.preventDefault(); setMenu(true, true); } });
  menu.addEventListener('keydown', e => {
    const l = links(), i = l.indexOf(document.activeElement);
    if(e.key==='ArrowDown' || e.key==='ArrowRight'){ e.preventDefault(); l[(i+1)%l.length].focus(); }
    if(e.key==='ArrowUp' || e.key==='ArrowLeft'){ e.preventDefault(); l[(i-1+l.length)%l.length].focus(); }
    if(e.key==='Home'){ e.preventDefault(); l[0].focus(); }
    if(e.key==='End'){ e.preventDefault(); l[l.length-1].focus(); }
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape' && !menu.hidden){ setMenu(false); btn.focus(); } });
  document.addEventListener('click', e => {
    if(!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) setMenu(false);
  });
  menu.addEventListener('focusout', e => {
    if(e.relatedTarget && !menu.contains(e.relatedTarget) && e.relatedTarget!==btn) setMenu(false);
  });
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* ---- Tarjetas de las secciones de un camino ---- */
function renderCards(el){
  const c = PORTAL.caminos.find(x => x.id===el.dataset.camino);
  if(!c) return;
  if(!c.secciones.length){
    el.innerHTML = '<div class="vacio"><p class="sub">Próximamente</p><p>Las primeras secciones de este camino están en preparación.</p></div>';
    return;
  }
  el.innerHTML = c.secciones.map((s,i) => {
    const ready = !!s.href;
    const inner =
      '<div class="ico">'+icon(s,'c')+'</div>'+
      '<span class="grp">'+s.grupo+'</span>'+
      '<h3>'+s.titulo+'</h3><p class="sub">'+s.subtitulo+'</p>'+
      '<p class="desc">'+s.descripcion+'</p>'+
      (ready ? '<span class="go"><span class="d"></span>Explorar <span class="arr" aria-hidden="true">→</span></span>'
             : '<span class="go"><span class="tag">Próximamente</span></span>');
    const style = 'style="--c:'+s.color+'; animation-delay:'+(i*.08).toFixed(2)+'s"';
    return ready ? '<a class="card" href="'+s.href+'" '+style+'>'+inner+'</a>'
                 : '<article class="card soon" '+style+'>'+inner+'</article>';
  }).join('');
}

/* ---- Figuras de entrada a cada camino ---- */
function renderCaminos(el){
  el.innerHTML = PORTAL.caminos.map((c,i) => {
    const n = c.secciones.filter(s => s.href).length;
    const estado = n ? n+(n===1?' sección':' secciones') : 'Primeras secciones en preparación';
    return '<a class="camino" href="'+c.href+'" style="--c:'+c.color+'; animation-delay:'+(i*.12).toFixed(2)+'s" aria-label="Entrar en '+c.titulo+', '+c.subtitulo+'">'+
      '<div class="fig-wrap">'+figura(c.figura)+'</div>'+
      '<span class="cam-sub">'+c.subtitulo+'</span>'+
      '<h2>'+c.titulo+'</h2>'+
      '<p>'+c.descripcion+'</p>'+
      '<span class="cam-estado">'+estado+'</span>'+
      '<span class="go">Entrar <span class="arr" aria-hidden="true">→</span></span></a>';
  }).join('');
  if(reduce) return;
  // Inclinación suave que sigue al puntero
  el.querySelectorAll('.camino').forEach(a => {
    a.addEventListener('pointermove', e => {
      const r = a.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - .5, y = (e.clientY - r.top)/r.height - .5;
      a.style.setProperty('--ry', (x*10).toFixed(2)+'deg');
      a.style.setProperty('--rx', (-y*8).toFixed(2)+'deg');
    });
    a.addEventListener('pointerleave', () => { a.style.setProperty('--rx','0deg'); a.style.setProperty('--ry','0deg'); });
  });
}

/* ---- Pie de página ---- */
function renderFoot(el){
  el.innerHTML = '<span>'+PORTAL.nombre+' · '+PORTAL.lema+'</span>'+
    '<span>'+PORTAL.caminos.map(c => c.subtitulo).join(' · ')+'</span>';
}

/* ---- Cielo estrellado ---- */
function renderStars(el){
  let sh = '';
  for(let i=0;i<80;i++){
    const s = Math.random()<.15 ? 3 : 2;
    sh += '<i style="left:'+(Math.random()*100).toFixed(2)+'%;top:'+(Math.random()*100).toFixed(2)+'%;width:'+s+'px;height:'+s+'px;animation-delay:'+(Math.random()*5).toFixed(2)+'s;animation-duration:'+(3+Math.random()*5).toFixed(1)+'s"></i>';
  }
  el.innerHTML = sh;
}

/* ---- Arranque ---- */
const $ = id => document.getElementById(id);
if($('stars')) renderStars($('stars'));
if($('nav')) renderNav($('nav'));
if($('foot')) renderFoot($('foot'));
document.querySelectorAll('.cards[data-camino]').forEach(renderCards);
document.querySelectorAll('[data-caminos]').forEach(renderCaminos);
document.querySelectorAll('[data-figura]').forEach(el => { el.innerHTML = figura(el.dataset.figura); });

window.Portal = {PORTAL, petal, ring, mix, icon, figura, RAINBOW};
})();
