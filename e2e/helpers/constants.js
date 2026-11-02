export const VIEWPORTS = {
  mobile: { width: 393, height: 851 },
  tablet: { width: 810, height: 1080 },
  desktop: { width: 1280, height: 720 }
}

// The page loads in English; the ES/EN button switches every data-i18n string.
export const NAV_LINKS = [
  { href: '#projects', label: 'Projects', labelEs: 'Proyectos' },
  { href: '#about', label: 'About', labelEs: 'Sobre mí' },
  { href: '#contact', label: 'Contact', labelEs: 'Contacto' }
]

export const PROJECTS = [
  { title: 'Warehouse Order Simulator', github: 'https://github.com/EduardMilitaruG/warehouse-simulator' },
  {
    title: 'JobFy v2',
    github: 'https://github.com/EduardMilitaruG/JobFy-v2',
    demo: 'https://jobfy-frontend.onrender.com/'
  },
  {
    title: 'FinByt',
    github: 'https://github.com/EduardMilitaruG/FinByt',
    demo: 'https://client-eight-ebon-78.vercel.app'
  }
]

export const SOCIAL_LINKS = [
  { href: 'https://github.com/EduardMilitaruG', label: 'GitHub' },
  { href: 'https://linkedin.com/in/eduardmilitaru', label: 'LinkedIn' },
  { href: 'mailto:eduardmilitarug@gmail.com', label: 'Email' }
]

export const SKILLS = [
  'Playwright / TypeScript',
  'Postman / API testing',
  'SQL / PostgreSQL',
  'React / Node.js',
  'Jest / Supertest',
  'Docker / GitHub Actions',
  'Linux / Bash',
  'IoT / LoRaWAN'
]

export const EMAIL_HREF = 'mailto:eduardmilitarug@gmail.com'

export const CV_HREF = 'Eduard_Militaru_CV.pdf'

export const SEO = {
  title: 'Eduard Militaru | QA & Test Automation',
  description:
    'QA and test automation with a web development background: Playwright, TypeScript, Postman and SQL. Based in Castellón, open to travel and relocation in Europe.',
  ogType: 'website',
  ogTitle: 'Eduard Militaru | QA & Test Automation',
  lang: 'en'
}
