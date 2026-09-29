// Count-up for result numbers ("300K to 2.5M", "50% of sales..."): each number inside a
// [data-countup] element counts from 0 once, the first time the element enters the
// viewport (~800ms, ease-out). The markup keeps the final text, so it reads fine
// without JS or with reduced motion.

const DURATION = 800;
const NUMBER = /\d[\d.,]*\d|\d/g;
const YEAR = /^(19|20)\d{2}$/;

interface Part {
  target: number;
  decimals: number;
  decimalSep: string;
  thousandSep: string;
}

function parse(token: string): Part {
  const commas = (token.match(/,/g) || []).length;
  const dots = (token.match(/\./g) || []).length;
  let decimalSep = '';
  let thousandSep = '';
  if (commas && dots) {
    decimalSep = token.lastIndexOf(',') > token.lastIndexOf('.') ? ',' : '.';
    thousandSep = decimalSep === ',' ? '.' : ',';
  } else if (commas + dots === 1) {
    const sep = commas ? ',' : '.';
    const after = token.split(sep)[1];
    if (after.length === 3 && token.split(sep)[0].length <= 3) thousandSep = sep;
    else decimalSep = sep;
  } else if (commas + dots > 1) {
    thousandSep = commas ? ',' : '.';
  }
  const clean = token.split(thousandSep || '\u0000').join('').replace(decimalSep || '\u0000', '.');
  const decimals = decimalSep ? token.split(decimalSep)[1].length : 0;
  return { target: parseFloat(clean), decimals, decimalSep, thousandSep };
}

function format(part: Part, value: number): string {
  const fixed = value.toFixed(part.decimals);
  let [int, dec] = fixed.split('.');
  if (part.thousandSep) int = int.replace(/\B(?=(\d{3})+(?!\d))/g, part.thousandSep);
  return dec ? int + part.decimalSep + dec : int;
}

function setup(el: HTMLElement) {
  const original = el.textContent || '';
  const tokens = original.match(NUMBER) || [];
  const parts = tokens.map((t) => (YEAR.test(t) ? null : parse(t)));
  if (!parts.some(Boolean)) return;
  const pieces = original.split(NUMBER);

  const render = (progress: number) => {
    let out = pieces[0];
    tokens.forEach((token, i) => {
      const part = parts[i];
      out += part ? format(part, part.target * progress) : token;
      out += pieces[i + 1];
    });
    el.textContent = out;
  };

  el.setAttribute('aria-label', original);
  render(0);

  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      render(1 - Math.pow(1 - t, 3));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = original;
    };
    requestAnimationFrame(tick);
  }, { threshold: 0.6 });
  io.observe(el);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll<HTMLElement>('[data-countup]').forEach(setup);
}
