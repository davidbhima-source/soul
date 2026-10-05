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
    {id:'buda', titulo:'Buda', subtitulo:'Budismo', href:'buda.html', color:'#e0654a', figura:'buda',
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

/* ---- Figuras de entrada: Krishna y el Buda en meditación (medallón cósmico) ----
   Una figura de iconografía clásica, pintada en colores planos dentro de un
   medallón, sobre un trono de loto, con un cielo de puntos que titilan.
   Cada figura usa una paleta corta definida en MEDALLON. */
const MEDALLON = {
  krishna:{bg:['#d9e6fa','#7fa3e3'], skin:'#2f58bd', robe2:'#a8741a', dhoti:'#e3a52a', hair:'#13224f', gold:'#f2c14e',
           garland:'#f6f2e6', flower:'#e3a52a', flower2:'#ffffff', lotus:'#f3f7fd', lotus2:'#b7cdf1', dark:'#0d1a40',
           feather:'#2f58bd', plinth:'#e3a52a'},
  buda:   {bg:['#e2654a','#9c2c1d'], skin:'#f2b53c', skin2:'#b77d17', robeFill:'#7a2214', robe2:'#52160c', hair:'#3a1a10',
           gold:'#f2b53c', lotus:'#f39a7f', lotus2:'#c4472f', dark:'#5a2a08', plinth:'#f2b53c'}
};
const attrs = o => Object.entries(o).filter(([,v]) => v!=null).map(([k,v]) => k+'="'+v+'"').join(' ');
const trazo = (d,o) => '<path d="'+d+'" '+attrs(o)+'/>';
function petalo(x, base, tip, w){
  return 'M'+x+','+base+' C'+(x-w)+','+(base-10)+' '+(x-w*.85)+','+(tip+8)+' '+x+','+tip+
         ' C'+(x+w*.85)+','+(tip+8)+' '+(x+w)+','+(base-10)+' '+x+','+base+' Z';
}
/* Figura sentada en loto: piernas cruzadas, manos en dhyāna mudrā y trono de loto */
function figuraClasica(tipo, c){
  const kr = tipo==='krishna';
  let s = '';
  for(let i=-4;i<4;i++) s += trazo(petalo(162+i*24, 362, 330, 13), {fill:c.lotus2});
  // Piernas cruzadas: dhoti (Krishna) o hábito (Buda)
  s += trazo('M58,300 C56,268 94,248 150,248 C206,248 244,268 242,300 C242,314 208,318 150,316 C92,318 58,314 58,300 Z', {fill:kr?c.dhoti:c.robeFill});
  s += trazo('M90,292 Q150,276 210,292 M150,262 Q147,290 150,314', {fill:'none', stroke:c.robe2, 'stroke-width':1.4, opacity:.6});
  s += '<ellipse cx="108" cy="274" rx="18" ry="7" transform="rotate(-14 108 274)" fill="'+c.skin+'"/>'+
       '<ellipse cx="192" cy="274" rx="18" ry="7" transform="rotate(14 192 274)" fill="'+c.skin+'"/>';
  // Cuello y torso
  s += trazo('M142,120 L142,146 L158,146 L158,120 Z', {fill:c.skin});
  s += trazo('M150,142 C128,142 108,148 100,162 C92,186 96,220 104,250 L196,250 C204,220 208,186 200,162 C192,148 172,142 150,142 Z', {fill:c.skin});
  if(kr){
    // Collar y guirnalda vaijayantī
    s += trazo('M128,150 Q150,168 172,150', {fill:'none', stroke:c.gold, 'stroke-width':2.6});
    s += trazo('M118,150 C112,196 132,232 150,240 C168,232 188,196 182,150', {fill:'none', stroke:c.garland, 'stroke-width':4.5, 'stroke-linecap':'round'});
    [[117,170],[120,192],[129,212],[140,228],[150,238],[160,228],[171,212],[180,192],[183,170]].forEach(([x,y],i) => {
      s += '<circle cx="'+x+'" cy="'+y+'" r="3.4" fill="'+(i%2?c.flower2:c.flower)+'"/>';
    });
  } else {
    // Hábito sobre el hombro izquierdo, con su borde y sus pliegues
    s += trazo('M150,143 C172,142 192,148 200,162 C208,186 204,220 196,250 L104,250 C110,232 120,214 128,198 C140,176 146,160 150,143 Z', {fill:c.robeFill});
    s += trazo('M150,143 C146,160 140,176 128,198 C120,214 110,232 104,250', {fill:'none', stroke:c.robe2, 'stroke-width':3});
    s += trazo('M160,170 Q174,200 170,240 M178,162 Q192,196 186,244', {fill:'none', stroke:c.robe2, 'stroke-width':1.4, opacity:.6});
  }
  // Brazos
  s += trazo('M101,160 C88,182 84,214 90,236 C95,252 112,260 136,260 L142,248 C126,246 114,240 111,228 C107,208 111,186 118,170 Z', {fill:c.skin});
  s += trazo('M199,160 C212,182 216,214 210,236 C205,252 188,260 164,260 L158,248 C174,246 186,240 189,228 C193,208 189,186 182,170 Z', {fill:kr?c.skin:c.robeFill});
  if(kr){
    // Brazaletes y flauta sobre el regazo
    s += trazo('M101,224 L111,222 M199,224 L189,222', {stroke:c.gold, 'stroke-width':3, 'stroke-linecap':'round'});
    s += '<line x1="90" y1="266" x2="210" y2="252" stroke="'+c.gold+'" stroke-width="5" stroke-linecap="round"/>';
    [104,118,182,196].forEach(x => { s += '<circle cx="'+x+'" cy="'+(266-(x-90)*14/120).toFixed(1)+'" r="1.3" fill="'+c.dark+'" opacity=".6"/>'; });
  }
  // Manos en dhyāna mudrā
  s += '<ellipse cx="150" cy="254" rx="24" ry="9" fill="'+c.skin+'"/>';
  s += trazo('M136,251 Q150,242 164,251', {fill:'none', stroke:c.skin2||c.robe2, 'stroke-width':1.3, opacity:.7});
  // Cabeza
  if(kr) s += trazo('M131,98 C125,116 126,132 133,144 M169,98 C175,116 174,132 167,144', {fill:'none', stroke:c.hair, 'stroke-width':6, 'stroke-linecap':'round'});
  else s += '<ellipse cx="129" cy="114" rx="5" ry="14" fill="'+c.skin+'"/><ellipse cx="171" cy="114" rx="5" ry="14" fill="'+c.skin+'"/>';
  s += '<ellipse cx="150" cy="104" rx="20" ry="24" fill="'+c.skin+'"/>';
  s += trazo('M130,100 C130,82 140,78 150,78 C160,78 170,82 170,100 C165,90 158,88 150,88 C142,88 135,90 130,100 Z', {fill:c.hair});
  if(kr){
    // Pluma de pavo real, corona (mukuṭa), pendientes y tilaka
    s += trazo('M162,66 Q170,48 178,32', {fill:'none', stroke:c.gold, 'stroke-width':2})+
         '<ellipse cx="180" cy="26" rx="9" ry="16" transform="rotate(22 180 26)" fill="'+c.feather+'"/>'+
         '<ellipse cx="181" cy="23" rx="4.6" ry="7" transform="rotate(22 181 23)" fill="'+c.gold+'"/>'+
         '<ellipse cx="181.5" cy="22" rx="2.6" ry="4" transform="rotate(22 181.5 22)" fill="'+c.dark+'"/>';
    s += trazo('M127,90 L130,62 L140,74 L150,50 L160,74 L170,62 L173,90 Z', {fill:c.gold});
    s += '<rect x="126" y="84" width="48" height="8" rx="2" fill="'+c.gold+'"/>';
    s += '<circle cx="129" cy="120" r="3.4" fill="'+c.gold+'"/><circle cx="171" cy="120" r="3.4" fill="'+c.gold+'"/>';
    s += trazo('M147,94 L150,102 L153,94', {fill:'none', stroke:c.gold, 'stroke-width':1.5, 'stroke-linejoin':'round'});
  } else {
    // Uṣṇīṣa
    s += '<ellipse cx="150" cy="76" rx="11" ry="9" fill="'+c.hair+'"/>';
  }
  // Ojos cerrados, sin boca
  s += trazo('M137,109 Q142,112 147,109 M153,109 Q158,112 163,109', {fill:'none', stroke:c.dark, 'stroke-width':1.5, 'stroke-linecap':'round', opacity:.85});
  // Peana y fila delantera del loto
  s += '<rect x="66" y="316" width="168" height="9" rx="3" fill="'+c.plinth+'"/>';
  for(let i=-3;i<=3;i++) s += trazo(petalo(150+i*24, 364, 326, 12), {fill:c.lotus, stroke:c.lotus2, 'stroke-width':1});
  return s;
}
function figura(tipo){
  const c = MEDALLON[tipo], id = 'fg'+(++uid);
  // Cielo de puntos: posiciones fijas para que la figura sea siempre igual
  let seed = tipo==='krishna' ? 11 : 29, stars = '';
  const r = () => { seed = (seed*16807)%2147483647; return seed/2147483647; };
  for(let i=0;i<70;i++){
    const a = r()*Math.PI*2, d = 40 + r()*150, x = 150+Math.cos(a)*d, y = 186+Math.sin(a)*d*.95, z = r();
    stars += '<circle class="fig-estrella" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(z<.75?1+r()*1.6:2.6+r()*2.6).toFixed(1)+
             '" fill="#fff" style="animation-delay:'+(r()*4).toFixed(2)+'s"/>';
  }
  return '<svg class="figura fig-'+tipo+'" viewBox="0 0 300 370" aria-hidden="true">'+
    '<defs><radialGradient id="'+id+'"><stop offset="0" stop-color="'+c.bg[0]+'"/><stop offset="1" stop-color="'+c.bg[1]+'"/></radialGradient></defs>'+
    '<circle class="fig-aro" cx="150" cy="186" r="150" fill="'+c.bg[0]+'" opacity=".35"/>'+
    '<circle cx="150" cy="186" r="138" fill="url(#'+id+')"/>'+
    '<circle class="fig-halo" cx="150" cy="102" r="40" fill="'+c.bg[0]+'" opacity=".55"/>'+
    '<circle cx="150" cy="102" r="40" fill="none" stroke="'+c.gold+'" stroke-width="1.2" opacity=".7"/>'+
    '<ellipse cx="150" cy="214" rx="94" ry="118" fill="none" stroke="'+c.gold+'" stroke-width="1" opacity=".45"/>'+
    '<g class="fig-body">'+figuraClasica(tipo, c)+'</g>'+
    '<g class="fig-cielo">'+stars+'</g></svg>';
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
