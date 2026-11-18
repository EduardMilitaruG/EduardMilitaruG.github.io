import type { Dict } from './en';

const es: Dict = {
  lang: 'es',
  meta: {
    title: 'Eduard Militaru · QA Automation & IT Support',
    description:
      'Ingeniero junior de QA Automation y soporte IT en Castellón. Playwright, TypeScript, pipelines de calidad de APIs, Docker y GitHub Actions.',
  },
  skip: 'Saltar al contenido',
  nav: {
    projects: 'Proyectos',
    experience: 'Experiencia',
    beyond: 'Más allá',
    stack: 'Stack',
    log: 'Registro',
    contact: 'Contacto',
    cv: 'CV',
    accent: 'Color de acento',
    language: 'Idioma',
    menu: 'Menú',
    close: 'Cerrar menú',
  },
  topbar: { status: 'Disponible', location: 'Castellón · ES' },
  hero: {
    kicker: 'Castellón, España · Portfolio personal',
    name: 'Eduard Militaru',
    role: 'QA Automation & IT Support',
    available: 'Disponible ya · remoto, híbrido o reubicación',
    line1: 'Probando',
    words: ['lo que se rompe.', 'los casos límite.', 'cada release.', 'antes que el usuario.'],
    intro:
      'Hola, soy Eduard. Construyo suites de tests end-to-end y de API con Playwright y TypeScript, las ejecuto en GitHub Actions contra stacks reales de PostgreSQL en Docker y rastreo los fallos hasta la causa raíz con logs y SQL. Vengo de sistemas y redes (SMR) y de desarrollo full-stack (DAM), así que entiendo el código que pruebo.',
    linkedin: 'Conectemos',
    cv: 'Descargar CV',
    github: 'GitHub',
    photoAlt: 'Retrato de Eduard Militaru',
  },
  runner: {
    spec: 'tests/portfolio.spec.ts',
    engine: 'Playwright · Chromium · Firefox · WebKit',
    tests: [
      'se muestra en inglés, español y rumano',
      'sin scroll horizontal a 360px',
      'mantiene el acento elegido al recargar',
      'todos los enlaces internos responden 200',
      'las imágenes tienen texto alternativo',
      'respeta prefers-reduced-motion',
      'el registro de visitas funciona sin conexión',
    ],
    summary: 'superados',
    replay: 'Repetir',
    caption: 'Los tests reales de Playwright que protegen esta web, en repetición.',
  },
  stats: [
    { label: 'Tests_escritos', sub: 'tests automatizados en mis repos' },
    { label: 'Defectos', sub: 'bugs reales encontrados y corregidos' },
    { label: 'Cobertura_max', sub: 'cobertura de líneas de flaky-hunter' },
    { label: 'Idiomas', sub: 'Español · Rumano · Inglés (C1)' },
  ],
  projects: {
    title: 'Proyectos<br><em>destacados.</em>',
    lead: 'Herramientas de testing, pipelines de calidad de APIs, agentes de IA y un dashboard full-stack: construidos, probados y documentados por mí.',
    github: 'GitHub',
    case: 'Caso de estudio',
    demo: 'Demo',
    alsoTitle: 'También en GitHub',
    items: {
      'agent-army': {
        category: 'Agentes de IA',
        desc: 'Dashboard local donde un agente Chief of Staff planifica mi día y delega en siete agentes especialistas (búsqueda de empleo mediante un gestor MCP, aprendizaje, entrevistas, LinkedIn, entrenamiento, hobbies). Cada uno es un proceso de Claude Code sin interfaz con sus propias reglas, memoria y lista de herramientas permitidas. La seguridad está en la configuración, no en los prompts: los agentes redactan, pero nunca envían, publican, compran ni hacen push.',
      },
      flipscout: {
        category: 'Full-stack · datos',
        desc: 'Calculadora de arbitraje con Japón. Rastrea Yahoo Auctions Japan y Mercari JP buscando tecnología, cartas Pokémon y moda a buen precio, calcula el margen real en euros tras envío y comisiones y ordena las oportunidades en un dashboard React con backend FastAPI. De ese dashboard sale el lenguaje visual de esta web.',
      },
      'flaky-hunter': {
        category: 'Herramientas QA',
        desc: 'CLI y GitHub Action que lee JUnit XML y JSON de Playwright de muchas ejecuciones de CI, puntúa la inestabilidad de cada test, separa regresiones reales de tests flaky, agrupa los fallos por causa raíz y publica un dashboard HTML. 84 tests de Vitest (99% de cobertura) y 16 de Playwright; la CI lo ejecuta sobre sus propios resultados.',
      },
      'helpdesk-api-quality': {
        category: 'Calidad de APIs',
        desc: 'API REST de tickets de soporte IT (roles, flujo de estados, plazos SLA, concurrencia con ETag) probada en siete capas: 131 tests de Vitest, integración con PostgreSQL real, tests de contrato OpenAPI y de seguridad OWASP API, además de fuzzing con Schemathesis, presupuestos de carga con k6 y un escaneo OWASP ZAP en CI. Las capas encontraron y corrigieron 11 defectos.',
      },
    },
    also: {
      jobfy: 'Monorepo de empleo · 88 tests en CI + suite Playwright de 75 tests',
      warehouse: 'Máquina de estados de pedidos · diagnóstico SQL · inyección de fallos',
      archive: 'Monitor de segunda mano japonés · alertas Telegram y Discord',
      finbyt: 'Dashboard de inversiones · auth JWT · precios en vivo de CoinGecko',
    },
  },
  experience: {
    title: 'Experiencia<br><em>y formación.</em>',
    lead: 'Desarrollo, puesta en marcha en campo y soporte IT: la costumbre de averiguar por qué fallan las cosas.',
    present: 'Más reciente',
    items: [
      {
        role: 'Desarrollador web / Java freelance',
        org: 'Clientes de Demelsoft',
        dates: 'Jun 2025 – Dic 2025',
        bullets: ['Desarrollo de aplicaciones web y Java para clientes.'],
      },
      {
        role: 'Desarrollador full-stack y puesta en marcha IoT en campo',
        org: 'OpenMS',
        dates: 'Sep 2024 – Jun 2025',
        bullets: [
          'Funcionalidades en React/TypeScript y endpoints Node.js para 3 aplicaciones web de administración pública, entre ellas la del Ayuntamiento de Montanejos.',
          'Validación de APIs REST con Postman y preparación de datos de prueba SQL en PostgreSQL.',
          'Puesta en marcha de dispositivos LoRaWAN (sistemas de boyas) en entornos reales de cliente.',
        ],
      },
      {
        role: 'Sala y cocina, digitalización del negocio',
        org: 'Select Pizzería, Benicàssim',
        dates: 'Temporadas de verano 2025 – 2026',
        bullets: [
          'Atención al cliente en temporadas de verano de alta presión mientras digitalizo el negocio familiar: web de carta, herramientas QR y un asistente de pedidos en desarrollo.',
        ],
      },
      {
        role: 'Prácticas de soporte IT y mantenimiento web (FCT)',
        org: 'Canon',
        dates: 'Oct 2020 – Ene 2021',
        bullets: ['Soporte helpdesk a usuarios y mantenimiento de la web de la empresa.'],
      },
    ],
    eduTitle: 'Formación',
    edu: [
      { name: 'DAM', full: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma' },
      { name: 'SMR', full: 'Técnico en Sistemas Microinformáticos y Redes' },
    ],
  },
  beyond: {
    title: 'Más allá<br><em>del código.</em>',
    lead: 'Lo que mantiene el foco cuando la terminal está cerrada.',
    pending: 'Fotos pronto',
    items: {
      chess: { name: 'Ajedrez', line: 'Aperturas, problemas y finales.' },
      art: { name: 'Arte', line: 'Arte e investigación de subastas.' },
      cars: { name: 'Coches', line: 'Ingeniería y diseño.' },
      gym: { name: 'Deporte y gym', line: 'Entrenamiento, medido como una suite de tests.' },
      hardware: { name: 'Hardware', line: 'Montajes, mejoras y cómo funcionan las cosas.' },
      house: { name: 'House', line: 'La banda sonora mientras trabajo.' },
    },
  },
  stack: {
    title: 'Stack<br><em>y herramientas.</em>',
    lead: 'Lo que uso cada semana para construir, probar y desplegar.',
    groups: {
      testing: 'Testing y QA',
      systems: 'Sistemas y DevOps',
      programming: 'Programación',
      frameworks: 'Frameworks',
      other: 'Otros',
    },
  },
  log: {
    title: 'Registro<br><em>de visitas.</em>',
    lead: 'Deja tu marca: ficha y quedas contado en el marcador.',
    button: 'Fichar',
    total: 'Marcas totales',
    yours: 'Tus marcas',
    live: 'En vivo · Supabase',
    offline: 'Sin conexión · cuenta solo en este navegador',
    thanks: 'Marcado. Gracias por pasarte.',
    limit: 'Ese es el máximo por hoy. ¡Gracias!',
    error: 'No se pudo conectar con el registro. Inténtalo más tarde.',
  },
  contact: {
    title: 'Hablemos<br><em>de QA.</em>',
    lead: '¿Buscas un perfil de QA o automatización de pruebas con base de desarrollo? Respondo rápido.',
    email: 'Email',
    location: 'Castellón de la Plana, España · Ciudadano de la UE',
    availability: 'Remoto, híbrido o reubicación · Disponible de inmediato',
  },
  footer: {
    sections: 'Secciones',
    connect: 'Contacto',
    built: 'Hecho con Astro · diseño Terminal Editorial',
    tested: 'Probado con Playwright en CI',
  },
  case: {
    back: 'Volver al portfolio',
    langNote: 'Este caso de estudio está en inglés.',
  },
};

export default es;
