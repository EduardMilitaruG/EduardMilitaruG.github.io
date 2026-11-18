import type { Dict } from './en';

const ro: Dict = {
  lang: 'ro',
  meta: {
    title: 'Eduard Militaru · QA Automation & IT Support',
    description:
      'Inginer junior QA Automation și suport IT în Castellón, Spania. Playwright, TypeScript, pipeline-uri de calitate pentru API-uri, Docker și GitHub Actions.',
  },
  skip: 'Sari la conținut',
  nav: {
    projects: 'Proiecte',
    experience: 'Experiență',
    beyond: 'Dincolo',
    stack: 'Stack',
    log: 'Registru',
    contact: 'Contact',
    cv: 'CV',
    accent: 'Culoare de accent',
    language: 'Limbă',
    menu: 'Meniu',
    close: 'Închide meniul',
  },
  topbar: { status: 'Disponibil', location: 'Castellón · ES' },
  hero: {
    kicker: 'Castellón, Spania · Portofoliu personal',
    name: 'Eduard Militaru',
    role: 'QA Automation & IT Support',
    available: 'Disponibil acum · remote, hibrid sau relocare',
    line1: 'Testez',
    words: ['ce se strică.', 'cazurile limită.', 'fiecare release.', 'înaintea utilizatorilor.'],
    intro:
      'Salut, sunt Eduard. Construiesc suite de teste end-to-end și de API cu Playwright și TypeScript, le rulez în GitHub Actions pe stack-uri reale PostgreSQL în Docker și urmăresc erorile până la cauza lor prin loguri și SQL. Vin din sisteme și rețele (SMR) și din dezvoltare full-stack (DAM), așa că înțeleg codul pe care îl testez.',
    linkedin: 'Hai să ne conectăm',
    cv: 'Descarcă CV',
    github: 'GitHub',
    photoAlt: 'Portretul lui Eduard Militaru',
  },
  runner: {
    spec: 'tests/portfolio.spec.ts',
    engine: 'Playwright · Chromium · Firefox · WebKit',
    tests: [
      'se afișează în engleză, spaniolă și română',
      'fără scroll orizontal la 360px',
      'păstrează accentul ales după reîncărcare',
      'toate linkurile interne răspund 200',
      'imaginile au text alternativ',
      'respectă prefers-reduced-motion',
      'registrul de vizite merge și offline',
    ],
    summary: 'trecute',
    replay: 'Reia',
    caption: 'Testele Playwright reale care protejează acest site, reluate.',
  },
  stats: [
    { label: 'Teste_scrise', sub: 'teste automate în repo-urile mele' },
    { label: 'Defecte', sub: 'buguri reale găsite și reparate' },
    { label: 'Acoperire_max', sub: 'acoperirea liniilor în flaky-hunter' },
    { label: 'Limbi', sub: 'Spaniolă · Română · Engleză (C1)' },
  ],
  projects: {
    title: 'Proiecte<br><em>principale.</em>',
    lead: 'Unelte de testare, pipeline-uri de calitate pentru API-uri, agenți AI și un dashboard full-stack: construite, testate și documentate de mine.',
    github: 'GitHub',
    case: 'Studiu de caz',
    demo: 'Demo live',
    alsoTitle: 'Tot pe GitHub',
    items: {
      'agent-army': {
        category: 'Agenți AI',
        desc: 'Dashboard local în care un agent Chief of Staff îmi planifică ziua și delegă către șapte agenți specializați (căutare de joburi printr-un tracker MCP, învățare, interviuri, LinkedIn, antrenament, hobby-uri). Fiecare este un proces Claude Code fără interfață, cu propriile reguli, memorie și listă de unelte permise. Siguranța stă în configurație, nu în prompturi: agenții pot redacta, dar nu trimit, nu publică, nu cumpără și nu fac push.',
      },
      flipscout: {
        category: 'Full-stack · date',
        desc: 'Calculator de arbitraj cu Japonia. Scanează Yahoo Auctions Japan și Mercari JP pentru tehnologie, cărți Pokémon și modă subevaluate, calculează marja reală în euro după transport și comisioane și ordonează ofertele într-un dashboard React cu backend FastAPI. Din acest dashboard vine limbajul vizual al site-ului.',
      },
      'flaky-hunter': {
        category: 'Unelte QA',
        desc: 'CLI și GitHub Action care citește JUnit XML și JSON Playwright din multe rulări CI, dă fiecărui test un scor de instabilitate, separă regresiile reale de testele flaky, grupează erorile după cauză și publică un dashboard HTML. 84 de teste Vitest (99% acoperire) și 16 teste Playwright; CI-ul îl rulează pe propriile rezultate.',
      },
      'helpdesk-api-quality': {
        category: 'Calitate API',
        desc: 'API REST de tichete helpdesk IT (roluri, flux de stări, termene SLA, concurență cu ETag) testat pe șapte niveluri: 131 de teste Vitest, integrare cu PostgreSQL real, teste de contract OpenAPI și de securitate OWASP API, plus fuzzing cu Schemathesis, bugete de încărcare k6 și o scanare OWASP ZAP în CI. Nivelurile au găsit și reparat 11 defecte.',
      },
    },
    also: {
      jobfy: 'Monorepo pentru joburi · 88 de teste în CI + suită Playwright de 75 de teste',
      warehouse: 'Mașină de stări pentru comenzi · diagnostic SQL · injectare de erori',
      archive: 'Monitor second-hand japonez · alerte Telegram și Discord',
      finbyt: 'Dashboard de investiții · autentificare JWT · prețuri live CoinGecko',
    },
  },
  experience: {
    title: 'Experiență<br><em>și studii.</em>',
    lead: 'Dezvoltare, punere în funcțiune pe teren și suport IT: obiceiul de a afla de ce se strică lucrurile.',
    present: 'Cel mai recent',
    items: [
      {
        role: 'Dezvoltator web / Java freelance',
        org: 'Clienți Demelsoft',
        dates: 'Iun 2025 – Dec 2025',
        bullets: ['Dezvoltare de aplicații web și Java pentru clienți.'],
      },
      {
        role: 'Dezvoltator full-stack și punere în funcțiune IoT pe teren',
        org: 'OpenMS',
        dates: 'Sep 2024 – Iun 2025',
        bullets: [
          'Funcționalități React/TypeScript și endpoint-uri Node.js pentru 3 aplicații web ale administrației publice, inclusiv cea a primăriei Montanejos.',
          'Validarea API-urilor REST cu Postman și pregătirea datelor de test SQL în PostgreSQL.',
          'Punerea în funcțiune a dispozitivelor LoRaWAN (sisteme de geamanduri) în medii reale ale clienților.',
        ],
      },
      {
        role: 'Sală și bucătărie, digitalizarea afacerii',
        org: 'Select Pizzería, Benicàssim',
        dates: 'Sezoanele de vară 2025 – 2026',
        bullets: [
          'Servire clienți în sezoane de vară aglomerate, în timp ce digitalizez afacerea familiei: site cu meniul, unelte QR și un asistent de comenzi în dezvoltare.',
        ],
      },
      {
        role: 'Stagiar suport IT și mentenanță web (FCT)',
        org: 'Canon',
        dates: 'Oct 2020 – Ian 2021',
        bullets: ['Suport helpdesk pentru utilizatori și mentenanța site-ului companiei.'],
      },
    ],
    eduTitle: 'Studii',
    edu: [
      { name: 'DAM', full: 'Tehnician superior în dezvoltarea aplicațiilor multiplatformă' },
      { name: 'SMR', full: 'Tehnician în sisteme microinformatice și rețele' },
    ],
  },
  beyond: {
    title: 'Dincolo<br><em>de cod.</em>',
    lead: 'Ce îmi ține concentrarea echilibrată când terminalul e închis.',
    pending: 'Poze în curând',
    items: {
      chess: { name: 'Șah', line: 'Deschideri, probleme și finaluri.' },
      art: { name: 'Artă', line: 'Artă și cercetare de licitații.' },
      cars: { name: 'Mașini', line: 'Inginerie și design.' },
      gym: { name: 'Sport și sală', line: 'Antrenament, măsurat ca o suită de teste.' },
      hardware: { name: 'Hardware', line: 'Configurații, upgrade-uri și cum funcționează lucrurile.' },
      house: { name: 'Muzică house', line: 'Coloana sonoră cât lucrez.' },
    },
  },
  stack: {
    title: 'Stack<br><em>și unelte.</em>',
    lead: 'Ce folosesc în fiecare săptămână ca să construiesc, să testez și să livrez.',
    groups: {
      testing: 'Testare și QA',
      systems: 'Sisteme și DevOps',
      programming: 'Programare',
      frameworks: 'Framework-uri',
      other: 'Altele',
    },
  },
  log: {
    title: 'Registru<br><em>de vizite.</em>',
    lead: 'Lasă-ți semnul: pontează și ești numărat pe tablă.',
    button: 'Pontează',
    total: 'Semne totale',
    yours: 'Semnele tale',
    live: 'Live · Supabase',
    offline: 'Offline · numără doar în acest browser',
    thanks: 'Gata. Mulțumesc că ai trecut pe aici.',
    limit: 'Atât pentru azi. Mulțumesc!',
    error: 'Registrul nu răspunde. Încearcă mai târziu.',
  },
  contact: {
    title: 'Hai să<br><em>vorbim.</em>',
    lead: 'Cauți un profil de QA sau automatizare a testelor, cu experiență de dezvoltare? Răspund repede.',
    email: 'Email',
    location: 'Castellón de la Plana, Spania · Cetățean UE',
    availability: 'Remote, hibrid sau relocare · Disponibil imediat',
  },
  footer: {
    sections: 'Secțiuni',
    connect: 'Contact',
    built: 'Făcut cu Astro · design Terminal Editorial',
    tested: 'Testat cu Playwright în CI',
  },
  case: {
    back: 'Înapoi la portofoliu',
    langNote: 'Acest studiu de caz este în engleză.',
  },
};

export default ro;
