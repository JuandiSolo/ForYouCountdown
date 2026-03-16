// ══════════════════════════════════════════════
// CONFIGURACIÓN — edita estas dos secciones
// ══════════════════════════════════════════════

// Fecha en que se entrega el cuadro (año, mes-1, día)
// Ejemplo: 20 de julio de 2025 → new Date(2025, 6, 20, 0, 0, 0)
const FECHA_OBJETIVO = new Date(2025, 5, 15, 0, 0, 0);

// ── CONTENIDO DE LOS 15 DÍAS ──────────────────
// foto    → ruta relativa al archivo index.html (ej: "fotos/dia1.jpg")
// caption → texto escrito a mano debajo de la polaroid
// frase   → frase que aparece en la sección de texto
// cupon   → lo que dice el cupón del día
const DIAS = [
  {
    foto: "fotos/dia1.jpg",
    caption: "el primer día que supe",
    frase: "Porque en el primer día que te vi, algo en mí supo que serías tú.",
    cupon: {
      emoji: "☕",
      titulo: "Un café con charla infinita",
      desc: "Válido para una mañana entera contigo, con café caliente y sin prisa.",
      code: "CAFÉ-01"
    }
  },
  {
    foto: "fotos/dia2.jpg",
    caption: "cuando te reíste así",
    frase: "Porque tu risa es el sonido más bonito que conozco y nunca me canso de escucharlo.",
    cupon: {
      emoji: "🍕",
      titulo: "Pizza de medianoche",
      desc: "Canjeable por una noche de pizza, película y pijamas. Sin negociación.",
      code: "NOCHE-02"
    }
  },
  {
    foto: "fotos/dia3.jpg",
    caption: "nuestro lugar favorito",
    frase: "Porque cualquier lugar se vuelve nuestro cuando estás tú en él.",
    cupon: {
      emoji: "🚗",
      titulo: "Paseo sorpresa",
      desc: "Te llevo a donde tú quieras, sin mapa y sin plan. Solo nosotros.",
      code: "PASEO-03"
    }
  },
  {
    foto: "fotos/dia4.jpg",
    caption: "la tarde que no olvidamos",
    frase: "Porque cada tarde contigo vale más que mil días sin ti.",
    cupon: {
      emoji: "💆",
      titulo: "Masaje de 20 minutos",
      desc: "Espalda, hombros, cabeza — tú decides. Yo obedezco.",
      code: "RELAX-04"
    }
  },
  {
    foto: "fotos/dia5.jpg",
    caption: "cuando me diste la mano",
    frase: "Porque tu mano en la mía es el tipo de seguridad que no se compra ni se explica.",
    cupon: {
      emoji: "🌙",
      titulo: "Noche de estrellas",
      desc: "Salimos a ver el cielo juntos. Traigo cobija, tú traes ganas.",
      code: "LUNA-05"
    }
  },
  {
    foto: "fotos/dia6.jpg",
    caption: "esa sonrisa que guardo",
    frase: "Porque tengo guardadas mil versiones de tu sonrisa y todas son mi favorita.",
    cupon: {
      emoji: "🎵",
      titulo: "Concierto privado",
      desc: "Te pongo tu playlist favorita y cantamos como nadie nos escucha. Porque nadie nos escucha.",
      code: "MUSICA-06"
    }
  },
  {
    foto: "fotos/dia7.jpg",
    caption: "a la mitad del camino",
    frase: "Porque llevamos la mitad del camino juntos y cada paso ha valido la pena.",
    cupon: {
      emoji: "🍫",
      titulo: "Día de antojos",
      desc: "Hoy tú pides y yo traigo. Chocolate, helado, lo que sea. Sin excusas.",
      code: "ANTOJO-07"
    }
  },
  {
    foto: "fotos/dia8.jpg",
    caption: "cuando todo fue más fácil",
    frase: "Porque contigo hasta los días difíciles tienen algo bueno escondido.",
    cupon: {
      emoji: "🛁",
      titulo: "Noche de spa en casa",
      desc: "Música suave, velas, y tiempo solo para ti. Te lo mereces.",
      code: "SPA-08"
    }
  },
  {
    foto: "fotos/dia9.jpg",
    caption: "esos momentos quietos",
    frase: "Porque el silencio contigo es de los más bonitos que existen.",
    cupon: {
      emoji: "📚",
      titulo: "Tarde de lectura juntos",
      desc: "Leemos lo que queramos, en el mismo cuarto, sin hablar. Perfectamente juntos.",
      code: "LIBRO-09"
    }
  },
  {
    foto: "fotos/dia10.jpg",
    caption: "mirándote sin que lo supieras",
    frase: "Porque me atrapaste mirándote y no me arrepentí ni un segundo.",
    cupon: {
      emoji: "🌺",
      titulo: "Flores sin razón",
      desc: "Flores porque sí, porque es martes, porque existes. Sin más.",
      code: "FLOR-10"
    }
  },
  {
    foto: "fotos/dia11.jpg",
    caption: "cuatro días más",
    frase: "Porque la espera tiene más sentido cuando sé que eres tú al final.",
    cupon: {
      emoji: "🍷",
      titulo: "Cena especial",
      desc: "Una cena como se debe — mesa bonita, música, brindis y tú enfrente.",
      code: "CENA-11"
    }
  },
  {
    foto: "fotos/dia12.jpg",
    caption: "casi llegamos",
    frase: "Porque tres días más y tengo la excusa perfecta para mimarte el doble.",
    cupon: {
      emoji: "🎨",
      titulo: "Tarde creativa",
      desc: "Pintamos, dibujamos, hacemos lo que sea. El arte cuenta si estás tú.",
      code: "ARTE-12"
    }
  },
  {
    foto: "fotos/dia13.jpg",
    caption: "mañana mismo",
    frase: "Porque mañana se acerca y hoy ya te quiero tanto como siempre.",
    cupon: {
      emoji: "🌅",
      titulo: "Ver el amanecer juntos",
      desc: "Madrugar vale la pena cuando lo primero que ves es el cielo contigo.",
      code: "AMANECER-13"
    }
  },
  {
    foto: "fotos/dia14.jpg",
    caption: "el día antes",
    frase: "Porque mañana es el gran día y hoy ya estoy celebrando que eres tú.",
    cupon: {
      emoji: "💃",
      titulo: "Bailar en la cocina",
      desc: "Canción random, dos pies torpes, cero vergüenza. Bailamos.",
      code: "BAILE-14"
    }
  },
  {
    foto: "fotos/dia15.jpg",
    caption: "¡llegamos!",
    frase: "Porque este fue el regalo más largo que preparé y tú eres la razón de cada día.",
    cupon: {
      emoji: "💍",
      titulo: "Un deseo que yo cumplo",
      desc: "Lo que me pidas hoy. Cualquier cosa. Solo di la palabra.",
      code: "DESEO-15"
    }
  }
];

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════

function pad(n) {
  return String(n).padStart(2, '0');
}

// Calcula qué día del conteo mostrar (0 = día 1, 14 = día 15)
function getDayIndex() {
  const now = new Date();
  const ms = FECHA_OBJETIVO - now;
  if (ms <= 0) return 14; // ya llegó el gran día → mostrar día 15
  const daysLeft = Math.ceil(ms / (1000 * 60 * 60 * 24));
  return Math.max(0, Math.min(14, 15 - daysLeft));
}

function getTimeLeft() {
  const ms = FECHA_OBJETIVO - new Date();
  if (ms <= 0) return null;
  const total = Math.floor(ms / 1000);
  return {
    days:  Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    mins:  Math.floor((total % 3600) / 60),
    secs:  total % 60
  };
}

// ══════════════════════════════════════════════
// COUNTDOWN — se actualiza cada segundo
// ══════════════════════════════════════════════

function updateCountdown() {
  const t = getTimeLeft();
  if (!t) {
    document.getElementById('countdown-content').innerHTML =
      '<div class="end-message">¡Llegó el gran día! 🎉</div>';
    return;
  }
  document.getElementById('cd-days').textContent  = pad(t.days);
  document.getElementById('cd-hours').textContent = pad(t.hours);
  document.getElementById('cd-mins').textContent  = pad(t.mins);
  document.getElementById('cd-secs').textContent  = pad(t.secs);
}

// ══════════════════════════════════════════════
// CONTENIDO DEL DÍA
// ══════════════════════════════════════════════

function loadDayContent() {
  const idx    = getDayIndex();
  const dia    = DIAS[idx];
  const dayNum = idx + 1;

  // Fecha en la cinta dorada (encima de la polaroid)
  const now     = new Date();
  const dateStr = `${pad(now.getDate())} / ${pad(now.getMonth() + 1)} / ${now.getFullYear()}`;
  document.getElementById('photo-date').textContent = dateStr;

  // Título del header
  document.getElementById('header-title').textContent = `Día ${dayNum} de 15`;

  // Número en placeholder
  document.getElementById('photo-day-num').textContent = dayNum;

  // Foto: si carga bien, reemplaza el placeholder
  if (dia.foto) {
    const img    = document.createElement('img');
    img.className = 'photo-img';
    img.src       = dia.foto;
    img.alt       = dia.caption;
    img.onload    = () => {
      const ph = document.getElementById('photo-placeholder');
      if (ph) ph.replaceWith(img);
    };
  }

  // Caption de la polaroid
  document.getElementById('photo-caption').textContent = dia.caption;

  // Frase del día
  document.getElementById('frase-text').textContent = `"${dia.frase}"`;

  // Cupón
  document.getElementById('cupon-emoji').textContent = dia.cupon.emoji;
  document.getElementById('cupon-title').textContent = dia.cupon.titulo;
  document.getElementById('cupon-desc').textContent  = dia.cupon.desc;
  document.getElementById('cupon-code').textContent  = dia.cupon.code;
}

// ══════════════════════════════════════════════
// REVELAR CUPÓN
// ══════════════════════════════════════════════

function revelarCupon() {
  const wrapper = document.getElementById('cupon-wrapper');
  const btn     = document.getElementById('reveal-btn');
  wrapper.classList.add('open');
  btn.classList.add('revealed');
  btn.innerHTML = '<span>✦</span><span>Cupón revelado</span>';
}

// ══════════════════════════════════════════════
// GUARDAR CUPÓN COMO IMAGEN
// Usa html2canvas para convertir el div del cupón
// a un PNG que se descarga automáticamente.
// En iPhone: descarga al rol de "Archivos" o
// abre en nueva pestaña → mantener presionado → Guardar imagen
// ══════════════════════════════════════════════

function guardarCupon() {
  const btn = document.querySelector('.save-btn');
  btn.classList.add('loading');
  btn.textContent = '⏳ Generando imagen...';

  // html2canvas toma el nodo .cupon y lo convierte a canvas
  const nodo = document.getElementById('cupon-card');

  html2canvas(nodo, {
    scale: 3,               // alta resolución para pantallas Retina
    backgroundColor: null,  // fondo transparente
    useCORS: true,
    logging: false
  }).then(canvas => {
    // Convertir canvas → data URL → link de descarga
    const url  = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    const idx  = getDayIndex();
    link.download = `cupon-dia-${idx + 1}.png`;
    link.href = url;
    link.click();

    btn.classList.remove('loading');
    btn.innerHTML = '✓ Imagen lista — revisa tus descargas';
    showToast('✓ Cupón guardado como imagen');
  }).catch(() => {
    // Fallback: abrir en nueva pestaña para guardar manualmente
    btn.classList.remove('loading');
    btn.textContent = '↓ Guardar cupón en fotos';
    showToast('Mantén presionado el cupón → "Guardar imagen"');
  });
}

// ══════════════════════════════════════════════
// TOAST (mensaje emergente breve)
// ══════════════════════════════════════════════

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ══════════════════════════════════════════════
// SPLASH → ENTRAR A LA APP
// ══════════════════════════════════════════════

function enterApp() {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('app').classList.add('visible');
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════

loadDayContent();
updateCountdown();
setInterval(updateCountdown, 1000);

// Service Worker para que funcione offline (PWA)
if ('serviceWorker' in navigator) {
  const swCode = `
    self.addEventListener('install', e => e.waitUntil(
      caches.open('amor-v1').then(c =>
        c.addAll(['./', './index.html', './estilos.css', './app.js'])
      )
    ));
    self.addEventListener('fetch', e => e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))
    ));
  `;
  const swBlob = new Blob([swCode], { type: 'application/javascript' });
  navigator.serviceWorker.register(URL.createObjectURL(swBlob));
}
