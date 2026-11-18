/*
 * Visitor log. With PUBLIC_SUPABASE_URL + PUBLIC_SUPABASE_ANON_KEY set at build time it
 * reads and writes the shared `visitor_marks` table through Supabase's REST API (no SDK).
 * Without them, or when Supabase is unreachable, it falls back to a per-browser counter.
 * Each browser can add at most 3 marks per day.
 */
const MAX_PER_DAY = 3;
const TABLE = 'visitor_marks';

type Store = { day: string; mine: number; localTotal: number };

const today = () => new Date().toISOString().slice(0, 10);

function load(): Store {
  try {
    const s = JSON.parse(localStorage.getItem('em-log') || '{}');
    return { day: s.day ?? today(), mine: s.day === today() ? s.mine ?? 0 : 0, localTotal: s.localTotal ?? 0 };
  } catch {
    return { day: today(), mine: 0, localTotal: 0 };
  }
}
function save(s: Store) {
  try { localStorage.setItem('em-log', JSON.stringify(s)); } catch { /* storage blocked */ }
}

export function initVisitorLog() {
  const root = document.querySelector<HTMLElement>('[data-log]');
  if (!root) return;
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const totalEl = $('[data-log-total]');
  const mineEl = $('[data-log-mine]');
  const msgEl = $('[data-log-msg]');
  const modeEl = $('[data-log-mode]');
  const stampEl = $('[data-log-stamp]');
  const btn = $<HTMLButtonElement>('[data-log-btn]');
  const { url, key, lang } = root.dataset;
  const msg = (k: string) => root.dataset[`msg${k}`] ?? '';

  let online = Boolean(url && key);
  let state = load();
  let total = 0;

  const headers = () => ({ apikey: key!, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' });
  const pad = (n: number) => String(n).padStart(7, '0');

  const render = () => {
    totalEl.textContent = pad(total);
    mineEl.textContent = String(state.mine);
    btn.disabled = state.mine >= MAX_PER_DAY;
    modeEl.textContent = online ? msg('Live') : msg('Offline');
    stampEl.textContent = new Date().toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
  };

  const goOffline = () => { online = false; total = state.localTotal; render(); };

  async function fetchTotal() {
    if (!online) return goOffline();
    try {
      const res = await fetch(`${url}/rest/v1/${TABLE}?select=id`, { headers: { ...headers(), Prefer: 'count=exact', Range: '0-0' } });
      if (!res.ok) throw new Error(String(res.status));
      const range = res.headers.get('content-range') || '*/0';
      total = Number(range.split('/')[1]) || 0;
      render();
    } catch {
      goOffline();
    }
  }

  async function clockIn() {
    if (state.mine >= MAX_PER_DAY) { msgEl.textContent = msg('Limit'); return; }
    btn.disabled = true;
    if (online) {
      try {
        const res = await fetch(`${url}/rest/v1/${TABLE}`, { method: 'POST', headers: { ...headers(), Prefer: 'return=minimal' }, body: JSON.stringify({ lang }) });
        if (!res.ok) throw new Error(String(res.status));
        total += 1;
      } catch {
        msgEl.textContent = msg('Error');
        render();
        return;
      }
    } else {
      state.localTotal += 1;
      total = state.localTotal;
    }
    state = { ...state, day: today(), mine: state.mine + 1 };
    save(state);
    msgEl.textContent = state.mine >= MAX_PER_DAY ? msg('Limit') : msg('Thanks');
    root.classList.remove('is-bump'); void root.offsetWidth; root.classList.add('is-bump');
    render();
  }

  btn.addEventListener('click', clockIn);
  render();
  fetchTotal();
}
