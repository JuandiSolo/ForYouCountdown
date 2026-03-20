// ══════════════════════════════════════════════
// CONFIGURACIÓN
// ══════════════════════════════════════════════

// ► Pon aquí la fecha en que entregas el cuadro
//   Formato: "AÑO-MES-DÍA"  (mes normal, sin trucos)
//   Ejemplos:
//     "2025-06-15"  →  15 de junio de 2025
//     "2025-07-20"  →  20 de julio de 2025
const FECHA_STR    = "2026-04-04";
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
    caption: "el primer día que realmente te conocí",
    frase: "Que esta aventura a la que llamo conocerte nunca pare por favor.",
    cupon: {
      emoji: "🍕",
      titulo: "Noche de pizza",
      desc: "Válido para noche pizza mientras vemos peliculas. Adición de cobija incluida.",
      code: "PIZZA-01"
    }
  },
  {
    foto: "fotos/dia2.jpg",
    caption: "tu foto favorita jeje",
    frase: "Gracias por darme de ti, y dejarme entrar en esa cabezita tuya :).",
    cupon: {
      emoji: "🐞",
      titulo: "Recorrido por naturaleza",
      desc: "Canjeable por una caminada por el parque tomandole foto a bichitos, juntos.",
      code: "NATURALEZA-02"
    }
  },
  {
    foto: "fotos/dia3.jpg",
    caption: "me encantó este plan, perdon por vomitar jeje",
    frase: "El sentimiento de flotar es curioso, porque asi me siento cuando te acuestas sobre mi.",
    cupon: {
      emoji: "📼",
      titulo: "Sala Realidad Virtual",
      desc: "Valido para una tarde jugando a realidad virtual en la U (Vale la pena corazón te lo prometo).",
      code: "VR-03"
    }
  },
  {
    foto: "fotos/dia4.jpg",
    caption: "una bonita tarde con esta personita",
    frase: "Dicen que una imagen dice mil palabras, yo solo necesito una.",
    cupon: {
      emoji: "💆",
      titulo: "Masaje de 30 minutos",
      desc: "Cabeza, cuello, hombros — tú me dices. Yo cumplo.",
      code: "RELAX-04"
    }
  },
  {
    foto: "fotos/dia5.jpg",
    caption: "foto que nos tomaron jeje",
    frase: "¿Te han dicho que tu mano cura mas dolores que la mejor medicina?.",
    cupon: {
      emoji: "🧋",
      titulo: "Cosechas",
      desc: "Te compro tu cosechas favorito, así matas el antojo.",
      code: "COSECHAS-05"
    }
  },
  {
    foto: "fotos/dia6.jpg",
    caption: "foto manitas creativas",
    frase: "Conozco muchas versiones de ti, pero mi favorita no la he encontrado",
    cupon: {
      emoji: "🎵",
      titulo: "Concierto privado",
      desc: "Escuchamos tu playlist favorita y miramos a las estrellas como si no existiera nadie mas en el mundo.",
      code: "MUSICA-06"
    }
  },
  {
    foto: "fotos/dia7.jpg",
    caption: "cuando conociste a una parte de mi familia",
    frase: "Acaso eres tu la chica que me tiene pensandola todo el dia.",
    cupon: {
      emoji: "🎨",
      titulo: "Tarde de pintar",
      desc: "Nos sentamos los dos en un parque, a dibujar o a colorear mandalas.",
      code: "PINTAR-07"
    }
  },
  {
    foto: "fotos/dia8.jpg",
    caption: "me encanta esta fotooo",
    frase: "Nunca cambies, eres perfecta como eres y que nadie te diga lo contrario.",
    cupon: {
      emoji: "🍫",
      titulo: "Antojitos",
      desc: "Redimible para 5 antojos que tengas, yo te los cumplo.",
      code: "ANTOJO-08"
    }
  },
  {
    foto: "fotos/dia9.jpg",
    caption: "jaja se durmió (tenia que ponerla corazón)",
    frase: "Corazón, si yo fuera gey",
    cupon: {
      emoji: "🍇",
      titulo: "Bolsa de uvas",
      desc: "Valido por una bolsita completa de uvas verdes.",
      code: "UVAS-09"
    }
  },
  {
    foto: "fotos/dia10.jpg",
    caption: "recuerdo del chino",
    frase: "Tu mirada me atrapa, siempre que me miras siento como si por toda mi vida me hubieras estado mirando.",
    cupon: {
      emoji: "🎤",
      titulo: "Tarde de karaoke",
      desc: "Una tarde de karaoke en mi casa, ponemos la musica y cantamos a todo pulmón.",
      code: "KARAOKE-10"
    }
  },
  {
    foto: "fotos/dia11.jpg",
    caption: "btw amo salir a bailar contigo",
    frase: "Que pena no estar siempre pendiente, pero creeme que estoy ahi",
    cupon: {
      emoji: "👽",
      titulo: "Ver Avatar",
      desc: "AJA MIRA, aqui esta tu cupón de ver Avatar, no se donde, no se como, pero la vemos.",
      code: "AVATAR-11"
    }
  },
  {
    foto: "fotos/dia12.jpg",
    caption: "jeje, no voy a decir nada",
    frase: "Cuidado con esa cola que yo no perdono.",
    cupon: {
      emoji: "📦",
      titulo: "Tarde de LEGOS",
      desc: "Armamos legos juntos en mi casa. Solos tu y yo.",
      code: "LEGOS-12"
    }
  },
  {
    foto: "fotos/dia13.jpg",
    caption: "aprovechando que nos tomaron esta foto",
    frase: "Porque ni el presente es tan regalo como lo eres tu en mi vida.",
    cupon: {
      emoji: "🏷️",
      titulo: "Tarde de presentaciones",
      desc: "Cada uno expone media hora sobre su tema favorito sin interrupciones.",
      code: "PRESENTACIONES-13"
    }
  },
  {
    foto: "fotos/dia14.jpg",
    caption: "jeje foto random, gracias seneca",
    frase: "Gracias suegrita por darme a tan increible persona.",
    cupon: {
      emoji: "💃",
      titulo: "Bailar juntos",
      desc: "Un baile privado, tu eliges la canción y la gozamos.",
      code: "BAILE-14"
    }
  },
  {
    foto: "fotos/dia15.jpg",
    caption: "finalmente mi foto favorita corazón",
    frase: "Corazón, tu te mereces lo mejor siempre, no solo de mí sino de la vida. NUNCA lo olvides.",
    cupon: {
      emoji: "⭐",
      titulo: "Un deseo que yo cumplo",
      desc: "Lo que me pidas hoy. Solo di la palabra.",
      code: "DESEO-15"
    }
  }
];

// ══════════════════════════════════════════════
// TIEMPO GLOBAL — WorldTimeAPI (zona Colombia)
// La app usa este tiempo, NO el reloj del celular.
// Si no hay internet, usa el reloj local como fallback.
// ══════════════════════════════════════════════

// Aquí guardamos la fecha real del servidor una vez que llega
let FECHA_SERVIDOR = null;     // objeto Date con la hora del servidor
let TS_CARGA       = null;     // performance.now() en el momento de recibir la hora
let TRAMPA_DETECTADA = false;  // si el celular está adelantado

// Obtiene la hora del servidor y luego arranca la app
async function iniciarConTiempoReal() {
  // Mostrar estado de carga en el splash
  const sub = document.querySelector('.splash-sub');
  if (sub) sub.textContent = 'Verificando la fecha...';

  try {
    // WorldTimeAPI — zona Colombia (America/Bogota)
    // Usamos un proxy de CORS porque la API no admite fetch directo desde GitHub Pages
    // Alternativa 1: worldtimeapi.org
    // Alternativa 2: timeapi.io (más permisivo con CORS)
    const resp = await fetch('https://timeapi.io/api/time/current/zone?timeZone=America%2FBogota', {
      cache: 'no-store'
    });

    if (!resp.ok) throw new Error('no response');
    const data = await resp.json();

    // timeapi.io devuelve: { dateTime: "2025-06-01T14:30:00.123", ... }
    FECHA_SERVIDOR = new Date(data.dateTime);
    TS_CARGA       = performance.now();

    // Comparar con el reloj del celular
    // Si el celular está MÁS DE 6 horas adelante → trampa detectada
    const diferenciaHoras = (new Date() - FECHA_SERVIDOR) / (1000 * 60 * 60);
    if (diferenciaHoras > 6) {
      TRAMPA_DETECTADA = true;
      mostrarPantallaTrampa();
      return;
    }

  } catch (e) {
    // Sin internet: usar reloj local con advertencia
    FECHA_SERVIDOR = new Date();
    TS_CARGA       = performance.now();
    console.warn('WorldTimeAPI no disponible, usando reloj local');
  }

  // Todo bien — arrancar la app normal
  if (sub) sub.textContent = '15 días · 15 razones';
  arrancarApp();
}

// Devuelve la hora "real" actual (servidor + tiempo transcurrido desde la carga)
function ahoraReal() {
  if (!FECHA_SERVIDOR) return new Date(); // fallback
  const transcurrido = performance.now() - TS_CARGA;
  return new Date(FECHA_SERVIDOR.getTime() + transcurrido);
}

// ── Easter egg / pantalla de trampa ──────────────
function mostrarPantallaTrampa() {
  const splash = document.getElementById('splash');
  splash.innerHTML = `
    <div style="text-align:center; padding: 2rem; max-width: 320px;">
      <div style="font-size: 4rem; margin-bottom: 1.5rem; animation: heartbeat 1.8s ease-in-out infinite;">⏰</div>
      <div style="font-family:'Playfair Display',serif; font-style:italic; font-size:1.6rem; color:#8b6650; line-height:1.3; margin-bottom:1rem;">
        Ey, ey, ey...
      </div>
      <div style="font-family:'Cormorant Garamond',serif; font-size:1.1rem; color:#8b6650; line-height:1.6; margin-bottom:1.5rem;">
        Vi lo que hiciste con la fecha del celular. 👀<br><br>
        La paciencia también es un acto de amor.<br>
        Cada día llega cuando tiene que llegar. 🌹
      </div>
      <div style="font-family:'Space Mono',monospace; font-size:0.6rem; color:#8b6650; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:2rem;">
        Vuelve mañana con la fecha correcta
      </div>
      <button onclick="location.reload()" style="background:transparent; border:1px solid rgba(201,169,110,0.4); color:#c9a96e; padding:0.8rem 2rem; font-family:'Space Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; border-radius:2px;">
        ↺ Reintentar
      </button>
    </div>
  `;
}

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════

function pad(n) {
  return String(n).padStart(2, '0');
}

// Calcula qué día del conteo mostrar usando la hora del servidor
function getDayIndex() {
  if (DIA_PRUEBA !== null) return Math.max(0, Math.min(14, DIA_PRUEBA - 1));

  const ahora = ahoraReal();
  const hoy   = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
  const meta  = new Date(FECHA_STR + 'T00:00:00');

  const msDiff = meta - hoy;

  // El día de la fecha (msDiff === 0) o después → día 15
  if (msDiff <= 0) return 14;

  const diasRestantes = Math.round(msDiff / (1000 * 60 * 60 * 24));
  // 1 día antes  → día 14 (idx 13)
  // 2 días antes → día 13 (idx 12)
  // ...
  // 14 días antes → día 1 (idx 0)
  // 15+ días antes → día 1 (idx 0)
  return Math.max(0, Math.min(13, 14 - diasRestantes));
}

function getTimeLeft() {
  const meta = new Date(FECHA_STR + 'T00:00:00');
  const ms   = meta - ahoraReal();
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

// ── Función que arranca todo una vez que tenemos la hora real ──
function arrancarApp() {
  loadDayContent();
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ══════════════════════════════════════════════
// CONTENIDO DEL DÍA
// ══════════════════════════════════════════════

function loadDayContent() {
  const idx    = getDayIndex();
  const dia    = DIAS[idx];
  const dayNum = idx + 1;

  // Fecha en la cinta dorada (encima de la polaroid) — usa hora del servidor
  const now     = ahoraReal();
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
// IMPRESORA — animación de impresión
// ══════════════════════════════════════════════

function revelarCupon() {
  const btn    = document.getElementById('reveal-btn');
  const luz    = document.getElementById('printer-light');
  const salida = document.getElementById('cupon-salida');
  const savBtn = document.getElementById('save-btn');

  // Deshabilitar botón
  btn.classList.add('imprimiendo');
  btn.innerHTML = '<span class="printer-btn-icon">⏳</span><span>Imprimiendo...</span>';

  // 1. Luz parpadea
  luz.classList.add('printing');

  // 2. Vibración en móvil
  if (navigator.vibrate) navigator.vibrate([30, 20, 30, 20, 30, 20, 60]);

  // 3. Pausa dramática, luego el papel sale
  setTimeout(() => {
    salida.classList.add('imprimiendo');
  }, 400);

  // 4. Cuando termina la animación del papel
  setTimeout(() => {
    luz.classList.remove('printing');
    luz.classList.add('ready');
    btn.innerHTML = '<span class="printer-btn-icon">✓</span><span>Cupón impreso</span>';
    savBtn.classList.add('visible');
  }, 2200);
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
// INIT — arranca con tiempo del servidor
// ══════════════════════════════════════════════

// Efecto press en la foto (funciona en móvil y computador)
window.addEventListener('load', () => {
  const frame = document.querySelector('.photo-frame');
  if (!frame) return;
  const press   = () => frame.classList.add('pressed');
  const release = () => frame.classList.remove('pressed');
  frame.addEventListener('touchstart',  press,   { passive: true });
  frame.addEventListener('touchend',    release, { passive: true });
  frame.addEventListener('touchcancel', release, { passive: true });
  frame.addEventListener('mousedown',  press);
  frame.addEventListener('mouseup',    release);
  frame.addEventListener('mouseleave', release);
});

// Arranca consultando la hora real del servidor
iniciarConTiempoReal();
