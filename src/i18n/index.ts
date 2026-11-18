import en, { type Dict } from './en';
import es from './es';
import ro from './ro';

export const LANGS = ['en', 'es', 'ro'] as const;
export type Lang = (typeof LANGS)[number];
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', es: 'ES', ro: 'RO' };
export const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español', ro: 'Română' };

const DICTS: Record<Lang, Dict> = { en, es, ro };
export const t = (lang: Lang): Dict => DICTS[lang];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Absolute path inside the site, e.g. url('/projects/x/') -> /projects/x/ */
export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

/** Home page for a language: /, /es/, /ro/ */
export const home = (lang: Lang) => url(lang === 'en' ? '/' : `/${lang}/`);
