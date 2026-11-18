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
  'Playwright', 'TypeScript', 'API testing', 'OpenAPI contracts', 'Schemathesis fuzzing', 'k6 load',
  'OWASP ZAP', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Linux', 'Root-cause analysis', 'LoRaWAN / IoT',
];

export const STACK = {
  testing: ['Playwright', 'Jest', 'Vitest', 'Supertest', 'React Testing Library', 'Postman', 'OpenAPI contract tests', 'fast-check', 'Schemathesis', 'k6', 'OWASP ZAP', 'Visual regression'],
  systems: ['Linux', 'Docker', 'Git', 'GitHub Actions', 'PostgreSQL', 'SQLite', 'SQL', 'Log analysis'],
  programming: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  frameworks: ['React', 'Node.js', 'Express', 'Prisma', 'FastAPI', 'Astro'],
  other: ['LoRaWAN / IoT', 'n8n', 'Figma'],
} as const;

export const HOBBIES = ['chess', 'art', 'cars', 'gym', 'hardware', 'house'] as const;
