// Cursor trail: small flat coloured squares (Nina-style) dropped along the mouse path while it
// moves over a container, each one fading and shrinking away. Only for real pointers that can
// hover and for people who haven't asked for reduced motion. Purely decorative: the squares sit
// behind the content (z-index 0) and never take pointer events. Styles live in global.css.

const PALETTE = ['#F4A0C8', '#F8E39A', '#4A8FE0', '#C9A7F0', '#E8894A', '#E94B2A']; // no green
const STEP = 34; // px of mouse travel between two squares
const MAX_LIVE = 14;

export function attachCursorTrail(container: HTMLElement) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
  let last: { x: number; y: number } | null = null;
  let live = 0;
  container.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const box = container.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    if (last && Math.hypot(x - last.x, y - last.y) < STEP) return;
    last = { x, y };
    if (live > MAX_LIVE) return;
    const el = document.createElement('span');
    el.className = 'cursor-trail';
    el.setAttribute('aria-hidden', 'true');
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.background = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    live++;
    el.addEventListener('animationend', () => { el.remove(); live--; });
    container.appendChild(el);
  });
  container.addEventListener('pointerleave', () => { last = null; });
}
