import agentArmy from '../assets/projects/agent-army.jpg';
import flipscout from '../assets/projects/flipscout.jpg';
import flakyHunter from '../assets/projects/flaky-hunter.jpg';
import helpdesk from '../assets/projects/helpdesk-api.jpg';

export const LINKS = {
  email: 'eduardmilitarug@gmail.com',
  linkedin: 'https://linkedin.com/in/eduardmilitaru',
  github: 'https://github.com/EduardMilitaruG',
  cv: '/cv/Eduard_Militaru_CV_EN.pdf',
};

export type ProjectLink = { kind: 'github' | 'case' | 'demo'; href: string; internal?: boolean };

export const PROJECTS = [
  {
    slug: 'agent-army',
    title: 'Agent Army',
    image: agentArmy,
    tags: ['Node.js', 'Claude Code', 'MCP', 'Playwright', 'PowerShell'],
    links: [{ kind: 'github', href: 'https://github.com/EduardMilitaruG/agent-army' }] as ProjectLink[],
    stat: { value: '8', label: 'agents' },
  },
  {
    slug: 'flipscout',
    title: 'FlipScout',
    image: flipscout,
    tags: ['React', 'Vite', 'Tailwind', 'FastAPI', 'Python'],
    links: [
      { kind: 'github', href: 'https://github.com/EduardMilitaruG/flipscout' },
      { kind: 'demo', href: 'https://dashboard-two-pearl-54.vercel.app' },
    ] as ProjectLink[],
    stat: { value: '2', label: 'JP markets' },
  },
  {
    slug: 'flaky-hunter',
    title: 'flaky-hunter',
    image: flakyHunter,
    tags: ['TypeScript', 'Node.js', 'Vitest', 'Playwright', 'GitHub Actions'],
    links: [
      { kind: 'case', href: '/projects/flaky-hunter/', internal: true },
      { kind: 'demo', href: '/demos/flaky-hunter/', internal: true },
    ] as ProjectLink[],
    stat: { value: '99%', label: 'coverage' },
  },
  {
    slug: 'helpdesk-api-quality',
    title: 'Helpdesk API Quality',
    image: helpdesk,
    tags: ['TypeScript', 'PostgreSQL', 'OpenAPI', 'Schemathesis', 'k6', 'OWASP ZAP'],
    links: [{ kind: 'case', href: '/projects/helpdesk-api-quality/', internal: true }] as ProjectLink[],
    stat: { value: '131', label: 'tests' },
  },
] as const;

export const ALSO = [
  { key: 'jobfy', title: 'JobFy v2', href: 'https://github.com/EduardMilitaruG/JobFy-v2' },
  { key: 'warehouse', title: 'Warehouse Simulator', href: 'https://github.com/EduardMilitaruG/warehouse-simulator' },
  { key: 'archive', title: 'archive-scout', href: 'https://github.com/EduardMilitaruG/archive-scout' },
  { key: 'finbyt', title: 'FinByt', href: 'https://github.com/EduardMilitaruG/FinByt' },
] as const;

/*
 * Stat strip values. All derived from the repos:
 *  tests   = helpdesk 131 + flaky-hunter 84 + 16 + JobFy v2 88 + JobFy Playwright suite 75 = 394
 *  defects = helpdesk 11 + JobFy Playwright suite 12 = 23
 */
export const STATS = [
  { value: '394', tone: 'accent' },
  { value: '23', tone: 'green' },
  { value: '99%', tone: 'fill' },
  { value: '3', tone: 'white' },
] as const;

export const MARQUEE = [
  'Playwright', 'TypeScript', 'Vitest', 'OpenAPI', 'k6', 'OWASP ZAP', 'PostgreSQL', 'Docker',
  'GitHub Actions', 'React', 'Node.js', 'Python', 'Supabase', 'Linux', 'Claude Code',
] as const;

/*
 * Stack & tools, collected from the package.json / requirements.txt / docker-compose / CI files of my
 * own projects (JobFy v2, helpdesk-api-quality, flaky-hunter, FlipScout, archive-scout, Dossier,
 * warehouse-simulator, FinByt, Atlas, this site...). Nothing here is a wish list.
 * `where` lists the projects that use it (shown as a tooltip).
 */
export type StackItem = { name: string; where: string };
export const STACK: Record<'testing' | 'backend' | 'frontend' | 'languages' | 'devops' | 'ai', StackItem[]> = {
  testing: [
    { name: 'Playwright', where: 'JobFy, Dossier, flaky-hunter, Atlas, this site' },
    { name: 'Vitest', where: 'helpdesk-api-quality, flaky-hunter, Dossier, warehouse-simulator, FinByt' },
    { name: 'Jest', where: 'JobFy v2 backend and frontend' },
    { name: 'Supertest', where: 'helpdesk-api-quality, JobFy v2, warehouse-simulator, FinByt' },
    { name: 'Testing Library', where: 'JobFy v2, Dossier, Atlas' },
    { name: 'Cypress', where: 'JobFy v2 (with cypress-axe)' },
    { name: 'axe-core · a11y', where: 'JobFy v2, Dossier' },
    { name: 'OpenAPI', where: 'helpdesk-api-quality: Spectral lint + AJV contract tests' },
    { name: 'fast-check', where: 'helpdesk-api-quality: property-based tests' },
    { name: 'Schemathesis', where: 'helpdesk-api-quality: API fuzzing' },
    { name: 'k6', where: 'helpdesk-api-quality: load tests' },
    { name: 'OWASP ZAP', where: 'helpdesk-api-quality: baseline security scan' },
    { name: 'Postman', where: 'Manual API exploration' },
  ],
  backend: [
    { name: 'Node.js', where: 'Most of my backends' },
    { name: 'Express', where: 'helpdesk-api-quality, JobFy v2, warehouse-simulator, FinByt' },
    { name: 'FastAPI', where: 'FlipScout, JobFy (v1)' },
    { name: 'PostgreSQL', where: 'helpdesk-api-quality, JobFy v2, Dossier, warehouse-simulator' },
    { name: 'SQLite', where: 'FinByt, Dossier' },
    { name: 'Prisma', where: 'JobFy v2, Dossier' },
    { name: 'Supabase', where: "Atlas, this site's visitor log" },
    { name: 'Zod', where: 'JobFy v2, Dossier, Atlas' },
    { name: 'Pino', where: 'helpdesk-api-quality, JobFy v2, warehouse-simulator' },
  ],
  frontend: [
    { name: 'React', where: 'JobFy, Dossier, FinByt, FlipScout, archive-scout, Atlas' },
    { name: 'Next.js', where: 'Dossier, Atlas, archive-scout' },
    { name: 'Vite', where: 'JobFy, FinByt, FlipScout' },
    { name: 'Tailwind CSS', where: 'FlipScout, Dossier, Atlas, archive-scout' },
    { name: 'Astro', where: 'This site' },
    { name: 'Electron', where: 'Dossier desktop app' },
  ],
  languages: [
    { name: 'TypeScript', where: '12 packages across my projects' },
    { name: 'JavaScript', where: 'Everywhere' },
    { name: 'Python', where: 'FlipScout, archive-scout, JobFy (v1)' },
    { name: 'SQL', where: 'PostgreSQL / SQLite, test data and debugging' },
    { name: 'Bash', where: 'CI scripts, Linux administration' },
    { name: 'Java', where: 'DAM studies' },
  ],
  devops: [
    { name: 'Docker', where: 'helpdesk-api-quality, JobFy v2, Dossier, warehouse-simulator' },
    { name: 'GitHub Actions', where: 'CI on every repo: test matrices, deploys, scheduled runs' },
    { name: 'Linux', where: 'Servers, SMR' },
    { name: 'Git', where: 'Everything' },
    { name: 'Vercel', where: 'FlipScout dashboard' },
    { name: 'Railway', where: 'FlipScout API' },
    { name: 'GitHub Pages', where: 'This site' },
  ],
  ai: [
    { name: 'Claude Code', where: 'Agent Army, daily pair programming' },
    { name: 'Anthropic SDK', where: 'Dossier' },
    { name: 'MCP servers', where: 'Dossier, Agent Army' },
    { name: 'Ollama', where: 'Dossier (local models)' },
    { name: 'Telegram & Discord bots', where: 'archive-scout alerts' },
    { name: 'Web scraping', where: 'BeautifulSoup, Cheerio, curl_cffi' },
  ],
};

export const HOBBIES = ['chess', 'art', 'cars', 'gym', 'hardware', 'house'] as const;
