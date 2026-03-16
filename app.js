// ══════════════════════════════════════════════
// CONFIGURACIÓN
// ══════════════════════════════════════════════

// ► Pon aquí la fecha en que entregas el cuadro
//   Formato: "AÑO-MES-DÍA"  (mes normal, sin trucos)
//   Ejemplos:
//     "2025-06-15"  →  15 de junio de 2025
//     "2025-07-20"  →  20 de julio de 2025
const FECHA_STR    = "2026-04-15";
const FECHA_OBJETIVO = new Date(FECHA_STR + "T00:00:00");

// ► MODO PRUEBA — para ver cómo se ve cada día sin tocar el celular
//   Pon un número del 1 al 15 para forzar ese día en pantalla.
//   Cuando ya no quieras probar, cámbialo a null.
const DIA_PRUEBA = null;   // ← ejemplo: pon 3 para ver el día 3

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
  // Modo prueba: fuerza un día específico
  if (DIA_PRUEBA !== null) return Math.max(0, Math.min(14, DIA_PRUEBA - 1));

  const ahora = new Date();
  const hoy   = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate()); // medianoche local
  const meta  = new Date(FECHA_STR + "T00:00:00");

  const msDiff  = meta - hoy;
  if (msDiff <= 0) return 14; // ya llegó el gran día → día 15

  const diasRestantes = Math.round(msDiff / (1000 * 60 * 60 * 24));
  // 15 días antes → día 1 (idx 0)
  // 1 día antes   → día 14 (idx 13)
  // 0 días (hoy)  → día 15 (idx 14)
  return Math.max(0, Math.min(14, 15 - diasRestantes));
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
  const btn  = document.querySelector('.save-btn');
  const nodo = document.getElementById('cupon-card');
  btn.classList.add('loading');
  btn.textContent = '⏳ Generando imagen...';

  html2canvas(nodo, {
    scale: 3,
    backgroundColor: '#f5ead8',
    useCORS: true,
    logging: false
  }).then(canvas => {
    const url = canvas.toDataURL('image/png');
    const idx = getDayIndex();
    const esIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (esIOS) {
      mostrarImagenGuardar(url, idx);
    } else {
      const link    = document.createElement('a');
      link.download = `cupon-dia-${idx + 1}.png`;
      link.href     = url;
      link.click();
      btn.classList.remove('loading');
      btn.innerHTML = '✓ Descargado';
      showToast('✓ Cupón guardado');
    }
  }).catch(() => {
    btn.classList.remove('loading');
    btn.textContent = '↓ Guardar cupón como imagen';
    showToast('Mantén presionado el cupón → "Guardar imagen"');
  });
}

function mostrarImagenGuardar(url, idx) {
  const overlay = document.createElement('div');
  overlay.id = 'img-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:500;background:rgba(26,15,10,0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.25rem;padding:2rem;';

  const instruccion = document.createElement('p');
  instruccion.textContent = '✦ Mantén presionada la imagen → "Añadir a fotos"';
  instruccion.style.cssText = 'font-family:Space Mono,monospace;font-size:0.65rem;letter-spacing:0.12em;color:#c9a96e;text-align:center;text-transform:uppercase;';

  const img = document.createElement('img');
  img.src   = url;
  img.alt   = 'Cupón día ' + (idx + 1);
  img.style.cssText = 'max-width:90vw;max-height:65vh;border-radius:4px;box-shadow:0 8px 40px rgba(0,0,0,0.6);';

  const cerrar = document.createElement('button');
  cerrar.textContent = '✕ Cerrar';
  cerrar.style.cssText = 'background:transparent;border:1px solid rgba(201,169,110,0.4);color:#8b6650;padding:0.7rem 2rem;font-family:Space Mono,monospace;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;cursor:pointer;border-radius:2px;';
  cerrar.onclick = () => {
    overlay.remove();
    const b = document.querySelector('.save-btn');
    b.classList.remove('loading');
    b.innerHTML = '✓ Listo';
  };

  overlay.appendChild(instruccion);
  overlay.appendChild(img);
  overlay.appendChild(cerrar);
  document.body.appendChild(overlay);
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

// ── Efecto press en la foto (funciona en móvil y computador) ──
document.addEventListener('DOMContentLoaded', () => {});
window.addEventListener('load', () => {
  const frame = document.querySelector('.photo-frame');
  if (!frame) return;

  const press   = () => frame.classList.add('pressed');
  const release = () => frame.classList.remove('pressed');

  // Touch (móvil)
  frame.addEventListener('touchstart',  press,   { passive: true });
  frame.addEventListener('touchend',    release, { passive: true });
  frame.addEventListener('touchcancel', release, { passive: true });

  // Mouse (computador)
  frame.addEventListener('mousedown', press);
  frame.addEventListener('mouseup',   release);
  frame.addEventListener('mouseleave', release);
});

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
