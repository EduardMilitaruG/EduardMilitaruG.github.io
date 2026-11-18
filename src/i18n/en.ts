const en = {
  lang: 'en',
  meta: {
    title: 'Eduard Militaru · QA Automation & IT Support',
    description:
      'Junior QA Automation & IT Support engineer in Castellón, Spain. Playwright, TypeScript, API quality pipelines, Docker and GitHub Actions.',
  },
  skip: 'Skip to content',
  nav: {
    projects: 'Projects',
    experience: 'Experience',
    beyond: 'Beyond',
    stack: 'Stack',
    log: 'Log',
    contact: 'Contact',
    cv: 'CV',
    accent: 'Accent colour',
    language: 'Language',
    menu: 'Menu',
    close: 'Close menu',
  },
  topbar: { status: 'Open to work', location: 'Castellón · ES' },
  hero: {
    kicker: 'Castellón, Spain · Personal portfolio',
    name: 'Eduard Militaru',
    role: 'QA Automation & IT Support',
    available: 'Available now · remote, hybrid or relocation',
    line1: 'Testing',
    words: ['what breaks.', 'the edge cases.', 'every release.', 'before users do.'],
    intro:
      "Hi, I'm Eduard. I build end-to-end and API test suites with Playwright and TypeScript, run them in GitHub Actions against real PostgreSQL stacks in Docker, and trace failures to the root cause through logs and SQL. I come from systems & networks (SMR) and full-stack development (DAM), so I understand the code I test.",
    linkedin: "Let's connect",
    cv: 'Download CV',
    github: 'GitHub',
    photoAlt: 'Portrait of Eduard Militaru',
  },
  runner: {
    spec: 'tests/portfolio.spec.ts',
    engine: 'Playwright · Chromium · Firefox · WebKit',
    tests: [
      'renders in English, Spanish and Romanian',
      'has no horizontal scroll at 360px',
      'keeps the chosen accent after reload',
      'every internal link answers 200',
      'images have alt text',
      'respects prefers-reduced-motion',
      'visitor log works offline',
    ],
    summary: 'passed',
    replay: 'Replay',
    caption: 'The real Playwright tests that guard this site, replayed.',
  },
  stats: [
    { label: 'Tests_written', sub: 'automated tests across my repos' },
    { label: 'Defects_found', sub: 'real bugs found and fixed by my suites' },
    { label: 'Top_coverage', sub: 'flaky-hunter line coverage' },
    { label: 'Languages', sub: 'Spanish · Romanian · English (C1)' },
  ],
  projects: {
    title: 'Featured<br><em>projects.</em>',
    lead: 'Test tooling, API quality pipelines, AI agents and a full-stack dashboard: built, tested and documented by me.',
    github: 'GitHub',
    case: 'Case study',
    demo: 'Live demo',
    alsoTitle: 'Also on GitHub',
    items: {
      'agent-army': {
        category: 'AI agents',
        desc: 'Local dashboard where a Chief of Staff agent plans my day and delegates to seven specialist agents (job search through an MCP job tracker, learning, interviews, LinkedIn, training, hobbies). Each one is a headless Claude Code process with its own rules, memory and tool allow list. Safety lives in configuration, not prompts: agents can draft, but never send, post, buy or push.',
      },
      flipscout: {
        category: 'Full-stack · data',
        desc: 'Japanese arbitrage profit calculator. Scans Yahoo Auctions Japan and Mercari JP for underpriced tech, Pokémon cards and fashion, computes real EUR margins after shipping and fees, and ranks the deals in a React dashboard backed by FastAPI. The dashboard is where this site’s visual language comes from.',
      },
      'flaky-hunter': {
        category: 'QA tooling',
        desc: 'CLI and GitHub Action that reads JUnit XML and Playwright JSON from many CI runs, scores each test for flakiness, separates real regressions from flaky tests, groups failures by root cause and publishes an HTML dashboard. 84 Vitest tests (99% coverage) and 16 Playwright tests; CI runs it on its own results.',
      },
      'helpdesk-api-quality': {
        category: 'API quality',
        desc: 'IT helpdesk ticketing REST API (roles, status workflow, SLA deadlines, ETag concurrency) tested in seven layers: 131 Vitest tests, real PostgreSQL integration, OpenAPI contract and OWASP API security tests, plus Schemathesis fuzzing, k6 load budgets and an OWASP ZAP scan in CI. The layers found and fixed 11 defects.',
      },
    },
    also: {
      jobfy: 'Job dashboard monorepo · 88 tests in CI + 75-test Playwright suite',
      warehouse: 'Order pipeline state machine · SQL diagnostics · fault injection',
      archive: 'Japanese secondhand monitor · Telegram & Discord alerts',
      finbyt: 'Investment dashboard · JWT auth · live CoinGecko prices',
    },
  },
  experience: {
    title: 'Experience<br><em>&amp; education.</em>',
    lead: 'Development, field commissioning and IT support: the habit of finding out why things break.',
    present: 'Most recent',
    items: [
      {
        role: 'Freelance Web / Java Developer',
        org: 'Demelsoft clients',
        dates: 'Jun 2025 – Dec 2025',
        bullets: ['Developed web and Java applications for clients.'],
      },
      {
        role: 'Full-Stack Developer & On-Site IoT Commissioning',
        org: 'OpenMS',
        dates: 'Sep 2024 – Jun 2025',
        bullets: [
          'Built React/TypeScript features and Node.js endpoints for 3 public-administration web apps, including the Montanejos town council.',
          'Validated REST APIs with Postman and prepared SQL test data in PostgreSQL.',
          'Commissioned LoRaWAN devices (buoy systems) on-site in real client environments.',
        ],
      },
      {
        role: 'Dining & Kitchen Support, Business Digitalization',
        org: 'Select Pizzería, Benicàssim',
        dates: 'Summer seasons 2025 – 2026',
        bullets: [
          'Customer-facing service in high-pressure summer seasons while digitalizing the family business: menu website, QR tooling and an ordering assistant in development.',
        ],
      },
      {
        role: 'IT Support & Web Maintenance Intern (FCT)',
        org: 'Canon',
        dates: 'Oct 2020 – Jan 2021',
        bullets: ['Helpdesk support for users and maintenance of the company website.'],
      },
    ],
    eduTitle: 'Education',
    edu: [
      { name: 'DAM', full: 'Higher Technician in Multiplatform Application Development' },
      { name: 'SMR', full: 'Technician in Microcomputer Systems and Networks' },
    ],
  },
  beyond: {
    title: 'Beyond<br><em>the code.</em>',
    lead: 'What keeps the focus balanced when the terminal is closed.',
    pending: 'Media soon',
    items: {
      chess: { name: 'Chess', line: 'Openings, puzzles and endgames.' },
      art: { name: 'Art', line: 'Art and auction research.' },
      cars: { name: 'Cars', line: 'Engineering and design.' },
      gym: { name: 'Sport & Gym', line: 'Training, tracked like a test suite.' },
      hardware: { name: 'Hardware', line: 'Builds, upgrades and how things work.' },
      house: { name: 'House Music', line: 'The soundtrack while I work.' },
    },
  },
  stack: {
    title: 'Stack<br><em>&amp; tools.</em>',
    lead: 'What I use every week to build, test and ship.',
    groups: {
      testing: 'Testing & QA',
      systems: 'Systems & DevOps',
      programming: 'Programming',
      frameworks: 'Frameworks',
      other: 'Other',
    },
  },
  log: {
    title: 'Visitor<br><em>log.</em>',
    lead: 'Leave your mark: clock in and you are counted on the board.',
    button: 'Clock in',
    total: 'Total marks',
    yours: 'Your marks',
    live: 'Live · Supabase',
    offline: 'Offline · counting in this browser only',
    thanks: 'Marked. Thanks for stopping by.',
    limit: 'That’s the max for today. Thanks!',
    error: 'Could not reach the log. Try again later.',
  },
  contact: {
    title: "Let's<br><em>talk.</em>",
    lead: 'Looking for a QA or test automation profile with a developer background? I reply quickly.',
    email: 'Email',
    location: 'Castellón de la Plana, Spain · EU citizen',
    availability: 'Open to remote, hybrid or relocation · Available immediately',
  },
  footer: {
    sections: 'Sections',
    connect: 'Connect',
    built: 'Built with Astro · Terminal Editorial design',
    tested: 'Tested with Playwright in CI',
  },
  case: {
    back: 'Back to portfolio',
    langNote: '',
  },
};

export default en;
export type Dict = typeof en;
