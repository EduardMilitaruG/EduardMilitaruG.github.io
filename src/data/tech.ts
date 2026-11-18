/*
 * Technology logos, rendered as inline SVG at build time (no runtime cost).
 * Paths come from simple-icons (CC0). Playwright is not in simple-icons, so it has a small
 * hand-drawn glyph. Anything without a logo falls back to the accent square.
 */
import {
  siTypescript, siJavascript, siPython, siReact, siNodedotjs, siExpress, siPostgresql, siDocker,
  siGithubactions, siVitest, siJest, siCypress, siSupabase, siPrisma, siFastapi, siNextdotjs, siVite,
  siAstro, siTailwindcss, siLinux, siGit, siK6, siPostman, siOpenapiinitiative, siSqlite, siZod,
  siElectron, siClaude, siAnthropic, siVercel, siRailway, siTestinglibrary, siOllama, siPino, siGnubash,
  siZap, siGithubpages, siSwagger, siTelegram, siDiscord,
} from 'simple-icons';

export type Tech = { path: string; hex: string; viewBox?: string };

const si = (i: { path: string; hex: string }): Tech => ({ path: i.path, hex: i.hex });

const PLAYWRIGHT: Tech = {
  // Two overlapping masks, simplified.
  path: 'M7.5 4C4 4 1.5 5.2 1.5 5.2s-.3 5.6 1.8 9.1C5 17.2 7.6 19 9.3 19c.6 0 1.2-.3 1.7-.7-.9-1.4-1.6-3.2-2-5.4-.5-2.8-.4-5.6-.2-7.2V4.1C8.4 4 8 4 7.5 4zm9 1c-3.5 0-6.2 1.2-6.2 1.2s-.4 5.9 1.9 9.5c1.6 2.6 3.6 4.3 5.2 4.3s3.6-1.7 5.2-4.3c2.3-3.6 1.9-9.5 1.9-9.5S20 5 16.5 5zm-3 4.3c.9 0 1.6.5 1.9 1.2-.6-.2-1.3-.2-1.9 0-.6.2-1.1.6-1.4 1.1-.2-1.2.4-2.3 1.4-2.3zm6 0c1 0 1.6 1.1 1.4 2.3-.3-.5-.8-.9-1.4-1.1-.6-.2-1.3-.2-1.9 0 .3-.7 1-1.2 1.9-1.2zm-6.4 4.9h6.8c-.4 1.8-1.8 3.1-3.4 3.1s-3-1.3-3.4-3.1zM4.6 9.6c.8-.1 1.5.3 1.8.9-.6-.1-1.2 0-1.7.2-.5.3-.9.7-1.1 1.2-.3-1.1.2-2.2 1-2.3z',
  hex: '2EAD33',
};

export const TECH: Record<string, Tech> = {
  Playwright: PLAYWRIGHT,
  TypeScript: si(siTypescript),
  JavaScript: si(siJavascript),
  Python: si(siPython),
  React: si(siReact),
  'Node.js': si(siNodedotjs),
  Express: si(siExpress),
  PostgreSQL: si(siPostgresql),
  Docker: si(siDocker),
  'GitHub Actions': si(siGithubactions),
  'GitHub Pages': si(siGithubpages),
  Vitest: si(siVitest),
  Jest: si(siJest),
  Cypress: si(siCypress),
  Supabase: si(siSupabase),
  Prisma: si(siPrisma),
  FastAPI: si(siFastapi),
  'Next.js': si(siNextdotjs),
  Vite: si(siVite),
  Astro: si(siAstro),
  'Tailwind CSS': si(siTailwindcss),
  Linux: si(siLinux),
  Git: si(siGit),
  k6: si(siK6),
  Postman: si(siPostman),
  OpenAPI: si(siOpenapiinitiative),
  Swagger: si(siSwagger),
  SQLite: si(siSqlite),
  Zod: si(siZod),
  Electron: si(siElectron),
  'Claude Code': si(siClaude),
  'Anthropic SDK': si(siAnthropic),
  Vercel: si(siVercel),
  Railway: si(siRailway),
  'Testing Library': si(siTestinglibrary),
  Ollama: si(siOllama),
  Pino: si(siPino),
  Bash: si(siGnubash),
  'OWASP ZAP': si(siZap),
  'Telegram & Discord bots': si(siTelegram),
  Discord: si(siDiscord),
};

/** Brand colour, or white when the brand colour is too dark to read on the near-black page. */
export function techColor(t: Tech): string {
  const n = parseInt(t.hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum < 0.32 ? 'var(--white)' : `#${t.hex}`;
}
