const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
  get(key: string): string | null {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key: string, value: string) {
    try { localStorage.setItem(key, value); } catch { /* private mode, blocked storage */ }
  },
};

function initClock() {
  const els = document.querySelectorAll<HTMLElement>('[data-clock]');
  if (!els.length) return;
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const tick = () => { const s = fmt.format(new Date()); els.forEach((el) => (el.textContent = s)); };
  tick();
  setInterval(tick, 1000);
}

function initAccent() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-accent-set]');
  const apply = (a: string) => {
    document.documentElement.dataset.accent = a;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.accentSet === a)));
  };
  apply(document.documentElement.dataset.accent || 'orange');
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const a = b.dataset.accentSet!;
      apply(a);
      store.set('em-accent', a);
    }),
  );
}

function initMenu() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
  const label = document.querySelector<HTMLElement>('[data-menu-label]');
  if (!nav || !btn) return;
  const set = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? btn.dataset.closeLabel! : btn.dataset.openLabel!;
  };
  btn.addEventListener('click', () => set(!nav.classList.contains('is-open')));
  nav.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  window.matchMedia('(width > 960px)').addEventListener('change', (e) => e.matches && set(false));
}

/** Language links keep the section you are looking at (#projects etc.). */
function initLangLinks() {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((a) =>
    a.addEventListener('click', () => {
      if (location.hash) a.href = a.href.split('#')[0] + location.hash;
    }),
  );
}

function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduceMotion()) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
}

function initCurrentSection() {
  const links = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLElement>('[data-section-link]').forEach((a) => links.set(a.dataset.sectionLink!, a));
  if (!links.size || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.remove('is-current'));
      links.get(e.target.id)?.classList.add('is-current');
    }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/** Typewriter for the rotating hero words. */
function initTyped() {
  const el = document.querySelector<HTMLElement>('[data-typed]');
  if (!el) return;
  const words: string[] = JSON.parse(el.dataset.typed || '[]');
  if (words.length < 2 || reduceMotion()) return;
  let w = 0, i = words[0].length, deleting = true;
  const step = () => {
    const word = words[w];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 38 : 72;
    if (!deleting && i === word.length) { deleting = true; delay = 2200; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 260; }
    setTimeout(step, delay);
  };
  setTimeout(step, 2600);
}

/** Replays the portfolio's Playwright spec line by line when it scrolls into view. */
function initRunner() {
  const root = document.querySelector<HTMLElement>('[data-runner]');
  if (!root) return;
  const lines = Array.from(root.querySelectorAll<HTMLElement>('[data-step]'));
  const summary = root.querySelector<HTMLElement>('[data-summary]');
  const bar = root.querySelector<HTMLElement>('[data-progress]');
  const count = root.querySelector<HTMLElement>('[data-count]');
  const replay = root.querySelector<HTMLButtonElement>('[data-replay]');
  let timers: number[] = [];

  const reset = () => {
    timers.forEach(clearTimeout); timers = [];
    lines.forEach((l) => l.classList.remove('is-run', 'is-pass'));
    summary?.classList.remove('is-in');
    if (bar) bar.style.setProperty('--p', '0');
    if (count) count.textContent = '0';
  };
  const finish = () => {
    lines.forEach((l) => l.classList.add('is-run', 'is-pass'));
    summary?.classList.add('is-in');
    if (bar) bar.style.setProperty('--p', '1');
    if (count) count.textContent = String(lines.length);
  };
  const play = () => {
    reset();
    if (reduceMotion()) return finish();
    lines.forEach((l, idx) => {
      timers.push(window.setTimeout(() => l.classList.add('is-run'), 380 + idx * 520));
      timers.push(window.setTimeout(() => {
        l.classList.add('is-pass');
        if (bar) bar.style.setProperty('--p', String((idx + 1) / lines.length));
        if (count) count.textContent = String(idx + 1);
      }, 380 + idx * 520 + 320));
    });
    timers.push(window.setTimeout(() => summary?.classList.add('is-in'), 380 + lines.length * 520 + 200));
  };

  replay?.addEventListener('click', play);
  if (!('IntersectionObserver' in window)) return finish();
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { play(); io.disconnect(); }
  }, { threshold: 0.3 });
  io.observe(root);
}

export function initSite() {
  initClock();
  initAccent();
  initMenu();
  initLangLinks();
  initReveal();
  initCurrentSection();
  initTyped();
  initRunner();
}
