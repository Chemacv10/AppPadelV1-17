// ── DICCIONARIO DE ICONOS SVG (Vectorizados de la referencia) ──
const ICONS_SVG = {
  inicio: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><circle cx="17" cy="15" r="3" stroke-dasharray="2 2"/></svg>`,
  alumnos: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  grupos: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M12 7v2m0 6v2m-5-5h2m6 0h2"/></svg>`,
  clases: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 12l3 2m-6-8l1 1"/></svg>`,
  ejercicios: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6m-6 3h6m-6 3h3"/></svg>`,
  torneos: `<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
  pagos: `<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 9l-5 5-2-2-4 4"/><circle cx="18" cy="9" r="1" fill="currentColor"/></svg>`,
  pistas: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 4v16M2 12h20"/><circle cx="12" cy="12" r="3"/></svg>`
};

const MODULOS = [
  { id: 'inicio', label: 'Inicio', href: 'index.html' },
  { id: 'alumnos', label: 'Alumnos', href: 'alumnos.html' },
  { id: 'grupos', label: 'Grupos', href: 'grupos.html' },
  { id: 'clases', label: 'Clases', href: 'clases.html' },
  { id: 'ejercicios', label: 'Ejercicios', href: 'ejercicios.html' },
  { id: 'torneos', label: 'Torneos', href: 'torneos.html' },
  { id: 'pagos', label: 'Pagos', href: 'pagos.html' },
  { id: 'pistas', label: 'Pistas', href: 'pistas.html' }
];

/**
 * Renderiza el menú de navegación con SVGs in-line.
 * @param {string} moduloActivo - El id del módulo para aplicar la clase .active
 */
function renderNav(moduloActivo) {
  const container = document.getElementById('nav-container');
  if (!container) return;

  container.innerHTML = MODULOS.map(m => `
    <a href="${m.href}" class="nav-item ${m.id === moduloActivo ? 'active' : ''}">
      <div class="nav-icon-svg">
        ${ICONS_SVG[m.id] || ''}
      </div>
      <span class="nav-label">${m.label}</span>
    </a>
  `).join('');
}