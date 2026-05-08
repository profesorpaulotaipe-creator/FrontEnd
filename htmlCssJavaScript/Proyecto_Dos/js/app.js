// ╔══════════════════════════════════════════════════════════╗
// ║  app.js — Utilidades globales del sitio                  ║
// ╚══════════════════════════════════════════════════════════╝

// ── CARGA DE COMPONENTES (nav / footer) ──────────────────────
function cargarComponente(id, archivo) {
  const enSubcarpeta = window.location.pathname.includes("/pages/");
  const ruta = enSubcarpeta
    ? `../components/${archivo}`
    : `components/${archivo}`;

  fetch(ruta)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(() => console.warn(`No se pudo cargar: ${archivo}`));
}

// ── localStorage: 3 FUNCIONES GENÉRICAS ──────────────────────

function guardar(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

function leer(clave, porDefecto = null) {
  const dato = localStorage.getItem(clave);
  if (dato === null) return porDefecto;
  try { return JSON.parse(dato); }
  catch { return dato; }
}

function borrar(clave) {
  localStorage.removeItem(clave);
}

// ── DARK MODE ─────────────────────────────────────────────────
function aplicarTema() {
  const tema = leer("tema", "claro");
  document.documentElement.setAttribute("data-tema", tema);
}

function toggleTema() {
  const actual = leer("tema", "claro");
  const nuevo  = actual === "claro" ? "oscuro" : "claro";
  guardar("tema", nuevo);
  aplicarTema();
  const btn = document.getElementById("btn-tema");
  if (btn) btn.textContent = nuevo === "oscuro" ? "☀️ Claro" : "🌙 Oscuro";
}

// ── INICIALIZACIÓN ────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  aplicarTema();
  cargarComponente("nav-container",    "nav.html");
  cargarComponente("footer-container", "footer.html");
});
