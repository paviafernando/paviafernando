// All the text of the site lives here, in three languages.
// The site and the README files are both generated from this file.
// Writing rules: plain words, short sentences, no numbers that are not confirmed.

export const profile = {
  name: "Fernando Pavia",
  email: "paviafernando@gmail.com",
  whatsapp: "5493364013120",
  phoneLabel: "+54 9 336 401-3120",
  linkedin: "https://www.linkedin.com/in/paviafernando",
  site: "https://paviafernando.vercel.app",
  // Change this if the GitHub user name is different.
  github: "paviafernando",
  repo: "paviafernando",
  // The GitHub link in the footer is hidden until the repository exists and the user name is confirmed.
  repoPublic: true,
  toptal: {
    profile: "https://talent.toptal.com/resume/developers/fernando-pavia",
    clientReferral: "https://toptal.com/Xp3oYQ/worlds-top-talent",
    // The official Toptal badge sends every click to Toptal, not to my own contact.
    // Keep it off until it is decided. See src/toptalBadge.js.
    showBadge: false,
  },
};

export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "pt", label: "PT", name: "Português" },
];

export const themes = [
  { id: "celeste", name: "Argentina" },
  { id: "terminal", name: "Matrix" },
  { id: "editorial", name: "Multinational" },
  { id: "aurora", name: "Arcade" },
  { id: "pampa", name: "Patagonia" },
];

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
};
const PRESENT = { en: "Present", es: "Actualidad", pt: "Atual" };

export function formatPeriod(from, to, lang) {
  const fmt = (s) => {
    const [y, m] = s.split("-");
    return m ? `${MONTHS[lang][Number(m) - 1]} ${y}` : y;
  };
  return `${fmt(from)} - ${to ? fmt(to) : PRESENT[lang]}`;
}

// Shared facts (not translated)
export const timeline = [
  {
    id: "iod",
    company: "Innovate On Demand",
    from: "2025-09",
    to: null,
    stack: [".NET", "Node.js", "React", "Azure", "Google Cloud", "BigQuery", "PostgreSQL"],
  },
  {
    id: "comerciapp",
    company: "ComercIApp",
    from: "2025",
    to: null,
    stack: [".NET 8", "React", "PostgreSQL", "Claude API"],
  },
  {
    id: "gpi",
    company: "Globalization Partners International",
    from: "2017-12",
    to: "2025-07",
    stack: [".NET", "Sitecore", "Optimizely", "Umbraco", "Strapi", "Amplience", "SQL Server"],
  },
  {
    id: "globant",
    company: "Globant, J.P. Morgan Chase",
    from: "2016-05",
    to: "2017-11",
    stack: [".NET", "SQL Server", "Oracle", "Sybase", "Pentaho", "Windows desktop"],
  },
  {
    id: "janus",
    company: "Janus Automation",
    from: "2013-11",
    to: "2016-05",
    stack: ["SCADA", "QNX", "Angular", "TDD", "SQL Server", "Windows/IIS servers"],
  },
  {
    id: "aes",
    company: "AES Argentina (Infoseek and self-employed)",
    from: "2009-11",
    to: "2013-06",
    stack: ["RFID", "SharePoint", "Windows desktop"],
  },
  {
    id: "early",
    company: "Freelance and Eniac Computación",
    from: "2007-06",
    to: "2009-11",
    stack: ["Web basics"],
  },
];

export const projects = [
  { id: "comerciapp", name: "ComercIApp", url: "https://comerci.app", tags: [".NET 8", "React", "PostgreSQL", "AI agent"], featured: true, screenshot: "/screenshots/comerciapp.png" },
  { id: "academy", name: "ComercIApp Academy", url: "https://academy.comerci.app", tags: ["ComercIApp", "Next.js", "WordPress (headless)"], featured: true, screenshot: "/screenshots/academy.png" },
  { id: "tramitessn", name: "Municipal procedures engine", url: "https://github.com/paviafernando/desafio-tecnico-innosn", tags: ["Node.js", "TypeScript", "React", "PostgreSQL", "WebSockets", "TDD"] },
  { id: "taskmgmt", name: "Task management system", url: "https://github.com/paviafernando/Ballastlane_technical_interview", tags: [".NET 8", "Clean Architecture", "React", "TypeScript", "PostgreSQL"] },
  { id: "driveprolink", name: "Vehicle finance and lease platform", url: null, tags: [".NET", "Azure", "React", "PostgreSQL"] },
  { id: "portal", name: "Translation and localization portal", url: null, tags: ["Angular", "React", ".NET", "GraphQL", "Headless CMS"] },
  { id: "dealeromg", name: "Dealer management platform", url: null, tags: [".NET", "React", "Node.js"] },
  { id: "leasemax", name: "Vehicle lease quotation engine", url: null, tags: ["Node.js", "React", "PostgreSQL"] },
];

export const roleIds = ["dev", "server", "db", "analyst", "pm", "founder", "lead"];

export const copy = {
  // ---------------------------------------------------------------- English
  en: {
    meta: { htmlLang: "en", title: "Fernando Pavia | Full-stack developer and AI agent engineer" },
    ui: {
      nav: { work: "Work", experience: "Experience", skills: "Skills", contact: "Contact" },
      skip: "Skip to content",
      status: "Open to part-time and contract work",
      cv: "Download CV",
      email: "Email me",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      scheduleCall: "Schedule a 30 min call",
      visit: "Visit",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      language: "Language",
      openMenu: "Choose theme",
      footer: "Built with React.",
      soon: "Details coming soon.",
    },
    toptal: {
      line: "I'm a member of Toptal as an AI engineer. Toptal says it accepts the top 3% of applicants.",
      link: "See my Toptal profile",
      clientText: "If you prefer to hire through Toptal, you can start here.",
      clientLink: "Hire through Toptal",
      badgeTitle: "Toptal top 3% talent badge",
    },
    hero: {
      title: "I build and take care of the software your business runs on.",
      intro:
        "I've done this since 2007: business systems, internal tools, websites, and now AI features. You work with one person who owns the problem end to end, not a ticket queue.",
      techDetails: "I work mostly with .NET, Angular and React, and today I build with AI agents.",
      stats: [
        { value: "2007", label: "working as a developer" },
        { value: "2017", label: "remote for international clients" },
        { value: "C2", label: "Cambridge English" },
      ],
      rolesTitle: "What I take care of",
      rolesHint: "Choose one to read more.",
    },
    roles: {
      dev: {
        name: "Developer",
        text: "I build desktop and web software. Started with .NET, moved through Angular, React and Node.js. Today I also direct AI agents that write a good part of the code.",
      },
      server: {
        name: "Server admin",
        text: "I manage web and database servers: updates, backups, security and the environments a project runs on.",
      },
      db: {
        name: "Database admin",
        text: "I write and run SQL directly on production databases, and work through the performance and data issues that come up in a live system.",
      },
      analyst: {
        name: "Analyst",
        text: "I turn business needs into requirements a team can actually build from, before picking any technology.",
      },
      pm: {
        name: "Project manager",
        text: "I estimate, break work into tasks and plan sprints, from a single feature to a full project.",
      },
      founder: {
        name: "Founder",
        text: "I own a product end to end: what gets built, how it works for the people using it, and the technology behind it.",
      },
      lead: {
        name: "Technical lead",
        text: "I own architecture decisions, review code and keep deploys under control for a team.",
      },
    },
    how: {
      title: "How I work",
      items: [
        {
          title: "I take ownership",
          text: "When I take a project, I treat it as mine: architecture, deploy and maintenance, not only the part of the code I was asked to write.",
        },
        {
          title: "I look for a win-win",
          text: "Before I decide something, I try to understand what the other side actually needs. I start from the business rules, then choose the technology.",
        },
        {
          title: "AI works for me",
          text: "I use AI agents every day: Claude Code, Cursor and the Claude extension in Visual Studio. I decide the architecture, write clear tasks and review the result. React and TypeScript are written mostly by the agents under my direction.",
        },
      ],
    },
    work: {
      title: "Work",
      more: "More builds",
      moreText:
        "A low-code workflow builder in Next.js. A translation plugin for Optimizely CMS 12 in .NET 8. A re-engineering of a Yii (PHP) project to Node.js. Small apps for shops: point of sale, delivery, a bicycle shop, and billing with ARCA/AFIP.",
      items: {
        comerciapp:
          "Online store, WhatsApp orders and invoicing in one app for small shops in Argentina. It has an AI sales agent that answers customers on WhatsApp. I'm the founder and I own product, architecture and delivery.",
        academy:
          "Tutorials for ComercIApp shop owners: sales, catalog, online store, staff, finances and the AI features. I built it to help them get real value from the app, not just click through it.",
        tramitessn:
          "A technical challenge for the Secretaría de Innovación y Ciudad Inteligente of San Nicolás, my own city. Instead of one hardcoded procedure, a configurable engine: admins define procedure types and citizens track their request in real time, with a full history and notifications.",
        taskmgmt:
          "A technical interview exercise: a full-stack task management app, built with Clean Architecture and test-driven development.",
        driveprolink:
          "Client product, name not public. Gives people the best cash finance and lease quote for a vehicle, so they arrive at the dealership with a budget and can negotiate. I worked on it with a team at Innovate On Demand, from the first version.",
        portal:
          "Client product, name not public. A client portal for a localization company, for translation quotes, projects and reports, and the internal systems behind it. I worked on the 2022 UI re-design of the portal, on the server that receives the translation packages and quotes, and on the internal project management system.",
        dealeromg: "Client product, name not public. A dealer management platform: .NET backend, a React admin dashboard, and Node.js satellite services for data ingestion and integrations. I maintain it at Innovate On Demand.",
        leasemax: "Client product, name not public. A quotation engine for vehicle leasing, plus reporting for the leasing team.",
      },
      detailsLabel: "Tech details",
      hideLabel: "Hide details",
      details: {
        comerciapp:
          "Architecture: multi-tenant, each shop's data is isolated from the others. Offline-first on the shop floor, syncs automatically when the connection comes back. Payments with Stripe and MercadoPago, WhatsApp for orders, an AI sales agent built with the Claude API, and GDPR-style data deletion with an audit trail.",
        academy:
          "Next.js and React on the frontend. Content comes from a headless WordPress: PHP and MySQL behind the API, Next.js fetches and renders the tutorials and the search.",
        tramitessn:
          "Backend: Node.js, TypeScript, Express, PostgreSQL. Frontend: React, TypeScript, Tailwind, Vite. Real-time updates with WebSockets (Socket.IO), S3-compatible file storage, and TDD with Jest and Vitest.",
        taskmgmt:
          ".NET 8 Web API with Clean Architecture (API, business logic, domain and infrastructure layers), Entity Framework Core, JWT auth. React and TypeScript frontend. Backend tests with xUnit, Moq and FluentAssertions, frontend tests with Vitest and React Testing Library.",
        driveprolink:
          "Patterns: server-side rate and quote calculations, integrations with external finance and leasing rate providers. React frontend, .NET backend, deployed on Vercel.",
        portal:
          "Patterns: role-based access per client account, CMS connectors that push translated content back automatically. Angular and React on the frontend, .NET backend, a GraphQL API layer, and a headless CMS architecture. Dashboard charts for spend and turnaround time.",
        dealeromg:
          "Main backend and admin dashboard in .NET and React. Separate Node.js services handle data ingestion and third-party integrations. Incremental refactors of a legacy codebase without stopping live operations.",
        leasemax:
          "Node.js and Express backend with PostgreSQL. A React tool for quotes with PDF generation and Stripe payments, plus a separate React admin dashboard.",
      },
      industriesTitle: "Industries",
      industries:
        "I've worked in banking (J.P. Morgan Chase, through Globant), steel (Ternium), energy (AES), industrial automation, communications, health, translation and localization, automotive finance and retail.",
      exploringTitle: "What's next",
      exploring:
        "I'm building new AI-agent products right now. Too early to share details, I'll post them here once they're live.",
    },
    experience: {
      title: "Experience",
      earlierLabel: "Earlier",
      items: {
        iod: {
          role: "Technical lead and senior .NET engineer",
          note: "Remote",
          bullets: [
            "Worked on a vehicle finance and lease platform from the first version, with a team. I covered architecture, deploy and maintenance.",
            "Maintain dealer platforms written in Node.js.",
            "Stabilized a fragile deployment process and refactored a legacy dealer product in small steps, without stopping live operations.",
            "Estimation, sprint planning and code reviews. AI agents in the daily development.",
          ],
          learned:
            "Learned BigQuery on Google Cloud. Led a backend from scratch on one project: picked the stack, planned the tasks and the CI. It was in production in 4 months, no regressions, and the client was happy from day one.",
        },
        comerciapp: {
          role: "Founder and product lead",
          note: "My own product",
          bullets: [
            "Online store, WhatsApp orders and invoicing in one app, made for owners without technical knowledge.",
            "An AI sales agent answers customers on WhatsApp. The app also works offline and syncs later.",
            ".NET 8 Web API, React and PostgreSQL. The data of each shop is isolated from the others.",
            "I decide the product, the flows and the architecture, and I use AI coding agents to build faster.",
          ],
        },
        gpi: {
          role: ".NET senior developer, globalization solutions",
          note: "Contractor, fully remote, 7.5 years",
          bullets: [
            "Worked on a translation and localization client portal, including the 2022 UI re-design: dashboard, charts and security checks.",
            "Worked on the translation server that receives the content packages to translate and the quote requests.",
            "Worked on GPI's internal project management system.",
            "Built and maintained translation connectors for CMS platforms: Sitecore XP and XM Cloud, Optimizely, Umbraco, Strapi and Amplience.",
            "Automated localization workflows between translation teams, developers and CMS editors.",
            "Fixed production incidents: database performance, integration failures and security patches.",
            "Quotes and estimates with the technical manager. Support for internal servers. Documentation for the ISO certification.",
          ],
          learned:
            "Promoted during my time there. Got the Sitecore Developer certification. Took courses in Java, Node.js, MongoDB, Cassandra, GraphQL, Angular, React, .NET Core, Sitecore XM Cloud, Optimizely, Strapi, Amplience, Kentico, Umbraco and Azure. Worked daily with teams across different time zones.",
        },
        globant: {
          role: ".NET semi senior developer analyst",
          note: "Banking, on site at a J.P. Morgan Chase project",
          bullets: [
            "Web and Windows desktop applications for banking operations.",
            "SQL scripts for data processing, reports and database maintenance.",
            "Code reviews, testing and deployments.",
          ],
          learned:
            "Promoted during my time there. Worked in banking, with high security requirements. Learned Pentaho and Oracle, kept using Sybase, and learned more about compliance.",
        },
        janus: {
          role: "Semi senior developer",
          note: "Industrial automation. First year as support developer for Ternium (steel)",
          bullets: [
            "Worked on a SCADA system with real-time monitoring.",
            "Deployed web applications to production and managed the web and database servers: updates, backups and security.",
            "At Ternium: support for their applications, with corrective SQL scripts on live databases.",
          ],
          learned:
            "Courses in English and in real-time operating systems (QNX). Worked on a SCADA system, Angular, server administration, deployments and going live, and TDD. Picked up project management along the way.",
        },
        aes: {
          role: "Developer",
          note: "Energy. Self-employed at first, then through Infoseek",
          bullets: [
            "A desktop application with RFID support, SharePoint applications and web applications.",
            "Fixed web applications and databases in production.",
          ],
          learned:
            "Worked on medical service systems and on a physical access and personnel recognition system using RFID. Learned about compliance and what it's like working inside a multinational company.",
        },
        early: {
          role: "Freelance developer, and trainee at Eniac",
          note: "My first jobs",
          bullets: [
            "Websites for small clients, with budgets and requirements. Some of it was remote.",
            "On-site support and debugging at Eniac Computación.",
          ],
        },
      },
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "Everyday business systems",
          pitch: "The backend, admin panels and internal tools your team uses every day. Websites and CMS platforms too.",
          text: ".NET and C#, ASP.NET Web API and MVC, SQL Server, Angular, JavaScript and TypeScript, HTML and CSS, WordPress, CMS integrations, localization workflows, Azure DevOps and CI/CD, Windows and IIS servers.",
        },
        {
          title: "Modern web, cloud and integrations",
          pitch: "Cloud hosting, databases, payments, and connecting your systems with the other tools your business already uses.",
          text: "Node.js, React and Next.js, PostgreSQL, MySQL, MongoDB, GraphQL, Docker, Azure, AWS (EC2, S3, Lambda), GitHub Actions, third-party APIs with OAuth2 and webhooks, payments with Stripe and MercadoPago, BigQuery, GDPR data deletion with an audit trail.",
        },
        {
          title: "AI for your business",
          pitch: "AI agents that help me build faster, and AI features built into real products, like an assistant that talks to your customers automatically.",
          text: "I use Claude Code, Cursor and the Claude extension in Visual Studio every day. I've built with the Claude API, an AI sales agent inside ComercIApp, and a local model (Ollama) connected to real app data. I keep training on this, and an Anthropic certification is next on my list.",
        },
        {
          title: "Where I'm still growing",
          text: "I haven't built a large-scale RAG system yet, Python and Kubernetes are still on my list, and I'm at a basic level with mobile.",
        },
      ],
    },
    about: {
      title: "Education and languages",
      education: [
        "Technical high school, Computer Science. Fray Luis Beltrán, 2006-2008",
        "Systems analysis studies. ISFT N°38, 2008-2010",
        "Computer systems engineering studies. UAI Rosario, 2011-2012",
        "AngularJS course. Code School, 2016",
      ],
      languages: [
        "English: Cambridge C2 (2015)",
        "Spanish: native",
        "Portuguese: intermediate",
      ],
    },
    contact: {
      title: "Contact",
      text: "I'm open to part-time and contract work with international clients. I work async and I'm based in UTC-3. Write to me by email or LinkedIn.",
      book: {
        title: "Book a 30 min call",
        intro: "Pick a slot that works for you. I'll confirm by email, usually within a day.",
        timezoneNote: "Times shown in your time zone ({tz}). I'm based in Argentina (UTC-3).",
        requestLabel: "Requesting",
        namePlaceholder: "Your name",
        emailPlaceholder: "Email",
        phonePlaceholder: "Phone",
        contactHint: "Name is required, plus an email or a phone (at least one).",
        send: "Send request",
        sending: "Sending...",
        success: "Got it. I'll confirm by email soon.",
        successInstant: "You're booked. Check your email for the calendar invite and the video call link.",
        noSlots: "No open times that day. Try another one.",
        formError: "Check your name, and add a valid email or phone. The captcha needs to be completed too.",
        sendError: "Something went wrong. Try again, or write to me directly.",
      },
      chat: {
        openLabel: "Ask about Fernando",
        title: "Ask about Fernando",
        intro: "Ask anything about my work, skills or background. If I'm not sure, I'll say so and you can book a call instead.",
        hint: "Got a question? Ask me anything",
        placeholder: "Type a question",
        send: "Send",
        sending: "Sending...",
        error: "Something went wrong. Write to me directly instead:",
        close: "Close",
      },
    },
  },

  // ---------------------------------------------------------------- Español
  es: {
    meta: { htmlLang: "es", title: "Fernando Pavia | Desarrollador full-stack e ingeniero de agentes de IA" },
    ui: {
      nav: { work: "Proyectos", experience: "Experiencia", skills: "Habilidades", contact: "Contacto" },
      skip: "Saltar al contenido",
      status: "Disponible para trabajo part-time y por contrato",
      cv: "Descargar CV",
      email: "Escribime",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      scheduleCall: "Agendar una llamada de 30 min",
      visit: "Visitar",
      theme: "Tema",
      light: "Claro",
      dark: "Oscuro",
      language: "Idioma",
      openMenu: "Elegir tema",
      footer: "Hecho con React.",
      soon: "Más detalles pronto.",
    },
    toptal: {
      line: "Soy miembro de Toptal como ingeniero de IA. Toptal dice que acepta al 3% superior de los postulantes.",
      link: "Ver mi perfil en Toptal",
      clientText: "Si preferís contratar a través de Toptal, podés empezar acá.",
      clientLink: "Contratar por Toptal",
      badgeTitle: "Insignia Toptal top 3% de talento",
    },
    hero: {
      title: "Me encargo del software que tu empresa necesita para funcionar.",
      intro:
        "Hago esto desde 2007: sistemas de negocio, herramientas internas, sitios web y ahora funciones con IA. Trabajás con una sola persona que se hace cargo del problema de punta a punta, no con una fila de tickets.",
      techDetails: "Trabajo sobre todo con .NET, Angular y React, y hoy desarrollo con agentes de IA.",
      stats: [
        { value: "2007", label: "trabajando como desarrollador" },
        { value: "2017", label: "remoto para clientes del exterior" },
        { value: "C2", label: "inglés Cambridge" },
      ],
      rolesTitle: "De qué me encargo",
      rolesHint: "Elegí uno para leer más.",
    },
    roles: {
      dev: {
        name: "Desarrollador",
        text: "Construyo software de escritorio y web. Empecé con .NET, después Angular, React y Node.js. Hoy también dirijo agentes de IA que escriben buena parte del código.",
      },
      server: {
        name: "Administrador de servidores",
        text: "Administro servidores web y de bases de datos: actualizaciones, backups, seguridad y los entornos donde corre un proyecto.",
      },
      db: {
        name: "Administrador de bases de datos",
        text: "Escribo y ejecuto SQL directo sobre bases en producción, y resuelvo los problemas de performance y datos que aparecen en un sistema vivo.",
      },
      analyst: {
        name: "Analista",
        text: "Convierto necesidades de negocio en requisitos que un equipo puede construir, antes de elegir cualquier tecnología.",
      },
      pm: {
        name: "Gestión de proyectos",
        text: "Estimo, divido el trabajo en tareas y planifico sprints, desde una sola feature hasta un proyecto completo.",
      },
      founder: {
        name: "Fundador",
        text: "Soy dueño de un producto de punta a punta: qué se construye, cómo funciona para quien lo usa, y la tecnología detrás.",
      },
      lead: {
        name: "Líder técnico",
        text: "Defino decisiones de arquitectura, reviso código y mantengo los deploys bajo control para un equipo.",
      },
    },
    how: {
      title: "Cómo trabajo",
      items: [
        {
          title: "Me hago cargo",
          text: "Cuando tomo un proyecto, lo trato como propio: arquitectura, deploy y mantenimiento, no solo la parte de código que me pidieron escribir.",
        },
        {
          title: "Busco que ganemos todos",
          text: "Antes de decidir algo, trato de entender qué necesita de verdad la otra parte. Arranco por las reglas de negocio y después elijo la tecnología.",
        },
        {
          title: "La IA trabaja para mí",
          text: "Uso agentes de IA todos los días: Claude Code, Cursor y la extensión de Claude en Visual Studio. Yo decido la arquitectura, escribo tareas claras y reviso el resultado. React y TypeScript los escriben sobre todo los agentes, bajo mi dirección.",
        },
      ],
    },
    work: {
      title: "Proyectos",
      more: "Otros desarrollos",
      moreText:
        "Un constructor de flujos de trabajo low-code en Next.js. Un plugin de traducción para Optimizely CMS 12 en .NET 8. La reingeniería de un proyecto Yii (PHP) a Node.js. Apps chicas para comercios: punto de venta, delivery, una bicicletería y facturación con ARCA/AFIP.",
      items: {
        comerciapp:
          "Tienda online, pedidos por WhatsApp y facturación en una sola app para comercios chicos de Argentina. Tiene un agente de ventas con IA que atiende a los clientes por WhatsApp. Soy el fundador y me ocupo del producto, la arquitectura y la entrega.",
        academy:
          "Tutoriales para los dueños de comercios que usan ComercIApp: ventas, catálogo, tienda online, personal, finanzas y las funciones de IA. La armé para que le saquen valor real a la app, no solo para que la usen a los tumbos.",
        tramitessn:
          "Un desafío técnico para la Secretaría de Innovación y Ciudad Inteligente de San Nicolás, mi propia ciudad. En vez de resolver un solo trámite, armé un motor configurable: los administradores crean tipos de trámite y los vecinos siguen su pedido en tiempo real, con historial completo y notificaciones.",
        taskmgmt:
          "Un ejercicio de entrevista técnica: una app de gestión de tareas full-stack, con Clean Architecture y desarrollo guiado por tests.",
        driveprolink:
          "Producto de un cliente, el nombre no es público. Le da a las personas la mejor cotización de financiación y leasing de un vehículo, para que lleguen a la concesionaria con un presupuesto y puedan negociar. Trabajé en ella con un equipo en Innovate On Demand, desde la primera versión.",
        portal:
          "Producto de un cliente, el nombre no es público. Un portal de clientes de una empresa de localización, para cotizaciones, proyectos y reportes, y los sistemas internos que lo sostienen. Trabajé en el rediseño de la interfaz del portal en 2022, en el servidor que recibe los paquetes de traducción y las cotizaciones, y en el sistema interno de gestión de proyectos.",
        dealeromg: "Producto de un cliente, el nombre no es público. Una plataforma para concesionarias: backend en .NET, dashboard de administración en React, y servicios satélite en Node.js para ingesta de datos e integraciones. La mantengo en Innovate On Demand.",
        leasemax: "Producto de un cliente, el nombre no es público. Un motor de cotizaciones de leasing de vehículos, más los reportes para el equipo comercial.",
      },
      detailsLabel: "Detalles técnicos",
      hideLabel: "Ocultar detalles",
      details: {
        comerciapp:
          "Arquitectura: multi-tenant, los datos de cada comercio están aislados de los demás. Offline-first en el local, sincroniza solo cuando vuelve la conexión. Pagos con Stripe y MercadoPago, pedidos por WhatsApp, un agente de ventas con IA hecho con la API de Claude, y eliminación de datos según GDPR con registro de auditoría.",
        academy:
          "Next.js y React en el frontend. El contenido viene de un WordPress headless: PHP y MySQL detrás de la API, Next.js trae y renderiza los tutoriales y la búsqueda.",
        tramitessn:
          "Backend: Node.js, TypeScript, Express, PostgreSQL. Frontend: React, TypeScript, Tailwind, Vite. Actualización en tiempo real con WebSockets (Socket.IO), almacenamiento de archivos compatible con S3, y TDD con Jest y Vitest.",
        taskmgmt:
          "API Web .NET 8 con Clean Architecture (capas de API, lógica de negocio, dominio e infraestructura), Entity Framework Core, autenticación JWT. Frontend en React y TypeScript. Tests de backend con xUnit, Moq y FluentAssertions, tests de frontend con Vitest y React Testing Library.",
        driveprolink:
          "Patrones: cálculos de tasas y cotizaciones en el servidor, integraciones con proveedores externos de tasas de financiación y leasing. Frontend en React, backend en .NET, deploy en Vercel.",
        portal:
          "Patrones: acceso según rol por cuenta de cliente, conectores CMS que devuelven el contenido traducido de forma automática. Angular y React en el frontend, backend en .NET, una capa de API en GraphQL, y arquitectura de CMS headless. Gráficos del dashboard de gasto y tiempos de entrega.",
        dealeromg:
          "Backend principal y dashboard de administración en .NET y React. Servicios separados en Node.js para ingesta de datos e integraciones con terceros. Refactors incrementales de un código legado sin frenar la operación.",
        leasemax:
          "Backend en Node.js y Express con PostgreSQL. Una herramienta en React para cotizaciones con generación de PDF y pagos con Stripe, más un dashboard de administración aparte, también en React.",
      },
      industriesTitle: "Industrias",
      industries:
        "Trabajé en banca (J.P. Morgan Chase, a través de Globant), acero (Ternium), energía (AES), automatización industrial, comunicaciones, salud, traducción y localización, financiación automotriz y comercio.",
      exploringTitle: "Lo que sigue",
      exploring:
        "Estoy armando nuevos productos con agentes de IA. Todavía es muy pronto para dar detalles, los voy a publicar acá cuando estén en marcha.",
    },
    experience: {
      title: "Experiencia",
      earlierLabel: "Antes",
      items: {
        iod: {
          role: "Líder técnico e ingeniero .NET senior",
          note: "Remoto",
          bullets: [
            "Trabajé en una plataforma de financiación y leasing de vehículos desde la primera versión, con un equipo. Me ocupé de la arquitectura, el deploy y el mantenimiento.",
            "Mantengo plataformas para concesionarias escritas en Node.js.",
            "Estabilicé un proceso de deploy frágil y refactoricé de a poco un producto legacy para concesionarias, sin frenar la operación en vivo.",
            "Estimaciones, planificación de sprints y revisiones de código. Agentes de IA en el desarrollo diario.",
          ],
          learned:
            "Aprendí BigQuery en Google Cloud. Lideré un backend desde cero en un proyecto: elegí el stack, planifiqué las tareas y el CI. Estuvo en producción en 4 meses, sin regresiones, y el cliente estuvo contento desde el primer día.",
        },
        comerciapp: {
          role: "Fundador y líder de producto",
          note: "Producto propio",
          bullets: [
            "Tienda online, pedidos por WhatsApp y facturación en una sola app, pensada para dueños sin conocimientos técnicos.",
            "Un agente de ventas con IA atiende a los clientes por WhatsApp. La app también funciona sin conexión y sincroniza después.",
            "API web en .NET 8, React y PostgreSQL. Los datos de cada comercio están aislados de los de los demás.",
            "Decido el producto, los flujos y la arquitectura, y uso agentes de IA para programar más rápido.",
          ],
        },
        gpi: {
          role: "Desarrollador .NET senior, soluciones de globalización",
          note: "Contratista, 100% remoto, 7,5 años",
          bullets: [
            "Trabajé en un portal de clientes de traducción y localización, incluido el rediseño de la interfaz de 2022: dashboard, gráficos y controles de seguridad.",
            "Trabajé en el servidor de traducciones, que recibe los paquetes de contenido a traducir y los pedidos de cotización.",
            "Trabajé en el sistema interno de gestión de proyectos de GPI.",
            "Desarrollé y mantuve conectores de traducción para CMS: Sitecore XP y XM Cloud, Optimizely, Umbraco, Strapi y Amplience.",
            "Automaticé flujos de localización entre equipos de traducción, desarrolladores y editores de CMS.",
            "Resolví incidentes en producción: performance de base de datos, fallas de integración y parches de seguridad.",
            "Cotizaciones y estimaciones con el gerente técnico. Soporte de servidores internos. Documentación para la certificación ISO.",
          ],
          learned:
            "Tuve ascensos en ese tiempo. Saqué la certificación de Sitecore Developer. Hice cursos de Java, Node.js, MongoDB, Cassandra, GraphQL, Angular, React, .NET Core, Sitecore XM Cloud, Optimizely, Strapi, Amplience, Kentico, Umbraco y Azure. Trabajé día a día con equipos en distintas zonas horarias.",
        },
        globant: {
          role: "Developer analyst .NET semi senior",
          note: "Banca, en sitio en un proyecto de J.P. Morgan Chase",
          bullets: [
            "Aplicaciones web y de escritorio Windows para operaciones bancarias.",
            "Scripts SQL para procesamiento de datos, reportes y mantenimiento de bases de datos.",
            "Revisiones de código, pruebas y deploys.",
          ],
          learned:
            "Tuve un ascenso en ese tiempo. Trabajé en banca, con requisitos de seguridad altos. Aprendí Pentaho y Oracle, seguí usando Sybase, y aprendí más de compliance.",
        },
        janus: {
          role: "Desarrollador semi senior",
          note: "Automatización industrial. El primer año, desarrollador de soporte en Ternium (acero)",
          bullets: [
            "Trabajé en un sistema SCADA con monitoreo en tiempo real.",
            "Publiqué aplicaciones web en producción y administré los servidores web y de bases de datos: actualizaciones, backups y seguridad.",
            "En Ternium: soporte de sus aplicaciones, con scripts SQL correctivos sobre bases en producción.",
          ],
          learned:
            "Cursos de inglés y de sistemas operativos en tiempo real (QNX). Trabajé en un sistema SCADA, Angular, administración de servidores, implementaciones y puestas en producción, y TDD. Aprendí bastante de project management en el camino.",
        },
        aes: {
          role: "Desarrollador",
          note: "Energía. Primero por cuenta propia, después a través de Infoseek",
          bullets: [
            "Una aplicación de escritorio con soporte RFID, aplicaciones SharePoint y aplicaciones web.",
            "Corrección de aplicaciones web y bases de datos en producción.",
          ],
          learned:
            "Trabajé en sistemas de servicio médico y en un sistema de acceso físico y reconocimiento de personal con RFID. Aprendí de compliance y de cómo es trabajar dentro de una empresa multinacional.",
        },
        early: {
          role: "Desarrollador freelance, y trainee en Eniac",
          note: "Mis primeros trabajos",
          bullets: [
            "Sitios web para clientes chicos, con presupuestos y relevamiento de requisitos. Parte fue remoto.",
            "Soporte en sitio y depuración en Eniac Computación.",
          ],
        },
      },
    },
    skills: {
      title: "Habilidades",
      groups: [
        {
          title: "Sistemas de negocio del día a día",
          pitch: "El backend, paneles de administración y herramientas internas que usa tu equipo todos los días. También sitios web y CMS.",
          text: ".NET y C#, ASP.NET Web API y MVC, SQL Server, Angular, JavaScript y TypeScript, HTML y CSS, WordPress, integraciones con CMS, flujos de localización, Azure DevOps y CI/CD, servidores Windows e IIS.",
        },
        {
          title: "Web moderna, nube e integraciones",
          pitch: "Hosting en la nube, bases de datos, pagos y conexión con las otras herramientas que ya usa tu empresa.",
          text: "Node.js, React y Next.js, PostgreSQL, MySQL, MongoDB, GraphQL, Docker, Azure, AWS (EC2, S3, Lambda), GitHub Actions, APIs de terceros con OAuth2 y webhooks, pagos con Stripe y MercadoPago, BigQuery, eliminación de datos personales según GDPR con registro de auditoría.",
        },
        {
          title: "IA para tu empresa",
          pitch: "Agentes de IA que me ayudan a desarrollar más rápido, y funciones de IA dentro de productos reales, como un asistente que le habla a tus clientes de forma automática.",
          text: "Uso Claude Code, Cursor y la extensión de Claude en Visual Studio todos los días. Desarrollé con la API de Claude, un agente de ventas con IA dentro de ComercIApp y un modelo local (Ollama) conectado a datos reales de una app. Sigo capacitándome en esto, y una certificación de Anthropic es lo próximo en mi lista.",
        },
        {
          title: "Donde sigo creciendo",
          text: "Todavía no armé un sistema RAG a gran escala, Python y Kubernetes siguen en mi lista, y en mobile estoy en un nivel básico.",
        },
      ],
    },
    about: {
      title: "Educación e idiomas",
      education: [
        "Secundario técnico, Informática. Fray Luis Beltrán, 2006-2008",
        "Estudios de análisis de sistemas. ISFT N°38, 2008-2010",
        "Estudios de ingeniería en sistemas. UAI Rosario, 2011-2012",
        "Curso de AngularJS. Code School, 2016",
      ],
      languages: [
        "Inglés: Cambridge C2 (2015)",
        "Español: nativo",
        "Portugués: intermedio",
      ],
    },
    contact: {
      title: "Contacto",
      text: "Estoy disponible para trabajo part-time y por contrato con clientes del exterior. Trabajo de forma asíncrona y estoy en UTC-3. Escribime por email o por LinkedIn.",
      book: {
        title: "Reservá una llamada de 30 min",
        intro: "Elegí un horario que te sirva. Te confirmo por email, por lo general en menos de un día.",
        timezoneNote: "Horarios en tu zona horaria ({tz}). Yo estoy en Argentina (UTC-3).",
        requestLabel: "Pidiendo",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "Email",
        phonePlaceholder: "Teléfono",
        contactHint: "El nombre es obligatorio, más un email o un teléfono (al menos uno).",
        send: "Enviar pedido",
        sending: "Enviando...",
        success: "Listo. Te confirmo por email pronto.",
        successInstant: "Quedaste agendado. Revisá tu email: te llega la invitación al calendario y el link de la videollamada.",
        noSlots: "No hay horarios libres ese día. Probá otro.",
        formError: "Revisá el nombre, y agregá un email o teléfono válido. El captcha también hay que completarlo.",
        sendError: "Algo salió mal. Probá de nuevo, o escribime directo.",
      },
      chat: {
        openLabel: "Preguntame sobre mí",
        title: "Preguntame sobre mí",
        intro: "Preguntá lo que quieras sobre mi trabajo, mis skills o mi trayectoria. Si no estoy seguro, te lo digo y podés reservar una llamada.",
        hint: "¿Tenés una pregunta? Preguntame lo que sea",
        placeholder: "Escribí una pregunta",
        send: "Enviar",
        sending: "Enviando...",
        error: "Algo salió mal. Mejor escribime directo:",
        close: "Cerrar",
      },
    },
  },

  // -------------------------------------------------------------- Português
  pt: {
    meta: { htmlLang: "pt", title: "Fernando Pavia | Desenvolvedor full-stack e engenheiro de agentes de IA" },
    ui: {
      nav: { work: "Projetos", experience: "Experiência", skills: "Habilidades", contact: "Contato" },
      skip: "Ir para o conteúdo",
      status: "Disponível para trabalho part-time e por contrato",
      cv: "Baixar CV",
      email: "Me escreva",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      scheduleCall: "Agendar uma call de 30 min",
      visit: "Visitar",
      theme: "Tema",
      light: "Claro",
      dark: "Escuro",
      language: "Idioma",
      openMenu: "Escolher tema",
      footer: "Feito com React.",
      soon: "Mais detalhes em breve.",
    },
    toptal: {
      line: "Sou membro da Toptal como engenheiro de IA. A Toptal diz que aceita os 3% melhores candidatos.",
      link: "Ver meu perfil na Toptal",
      clientText: "Se preferir contratar pela Toptal, pode começar por aqui.",
      clientLink: "Contratar pela Toptal",
      badgeTitle: "Selo Toptal top 3% de talentos",
    },
    hero: {
      title: "Cuido do software que sua empresa precisa para funcionar.",
      intro:
        "Faço isso desde 2007: sistemas de negócio, ferramentas internas, sites e agora recursos com IA. Você trabalha com uma só pessoa que assume o problema de ponta a ponta, não uma fila de chamados.",
      techDetails: "Trabalho principalmente com .NET, Angular e React, e hoje desenvolvo com agentes de IA.",
      stats: [
        { value: "2007", label: "trabalhando como desenvolvedor" },
        { value: "2017", label: "remoto para clientes do exterior" },
        { value: "C2", label: "inglês Cambridge" },
      ],
      rolesTitle: "Do que eu cuido",
      rolesHint: "Escolha um para ler mais.",
    },
    roles: {
      dev: {
        name: "Desenvolvedor",
        text: "Construo software de desktop e web. Comecei com .NET, depois Angular, React e Node.js. Hoje também dirijo agentes de IA que escrevem boa parte do código.",
      },
      server: {
        name: "Administrador de servidores",
        text: "Administro servidores web e de banco de dados: atualizações, backups, segurança e os ambientes onde um projeto roda.",
      },
      db: {
        name: "Administrador de banco de dados",
        text: "Escrevo e executo SQL direto em bancos em produção, e resolvo os problemas de performance e dados que aparecem em um sistema vivo.",
      },
      analyst: {
        name: "Analista",
        text: "Transformo necessidades de negócio em requisitos que um time consegue construir, antes de escolher qualquer tecnologia.",
      },
      pm: {
        name: "Gestão de projetos",
        text: "Estimo, divido o trabalho em tarefas e planejo sprints, de uma única feature até um projeto inteiro.",
      },
      founder: {
        name: "Fundador",
        text: "Sou dono de um produto de ponta a ponta: o que é construído, como funciona para quem usa, e a tecnologia por trás.",
      },
      lead: {
        name: "Líder técnico",
        text: "Defino decisões de arquitetura, revejo código e mantenho os deploys sob controle para um time.",
      },
    },
    how: {
      title: "Como eu trabalho",
      items: [
        {
          title: "Assumo a responsabilidade",
          text: "Quando pego um projeto, trato como meu: arquitetura, deploy e manutenção, não só a parte de código que me pediram para escrever.",
        },
        {
          title: "Busco que todos ganhem",
          text: "Antes de decidir algo, tento entender o que o outro lado realmente precisa. Começo pelas regras de negócio e depois escolho a tecnologia.",
        },
        {
          title: "A IA trabalha para mim",
          text: "Uso agentes de IA todos os dias: Claude Code, Cursor e a extensão do Claude no Visual Studio. Eu decido a arquitetura, escrevo tarefas claras e reviso o resultado. React e TypeScript são escritos principalmente pelos agentes, sob a minha direção.",
        },
      ],
    },
    work: {
      title: "Projetos",
      more: "Outros projetos",
      moreText:
        "Um construtor de fluxos de trabalho low-code em Next.js. Um plugin de tradução para o Optimizely CMS 12 em .NET 8. A reengenharia de um projeto Yii (PHP) para Node.js. Apps pequenos para lojas: ponto de venda, delivery, uma loja de bicicletas e faturamento com ARCA/AFIP.",
      items: {
        comerciapp:
          "Loja online, pedidos pelo WhatsApp e emissão de notas em um só app para pequenos comércios da Argentina. Tem um agente de vendas com IA que atende os clientes no WhatsApp. Sou o fundador e cuido do produto, da arquitetura e da entrega.",
        academy:
          "Tutoriais para os donos de comércios que usam o ComercIApp: vendas, catálogo, loja online, equipe, finanças e os recursos de IA. Eu criei para que eles tirem valor real do app, não só para clicar por clicar.",
        tramitessn:
          "Um desafio técnico para a Secretaria de Inovação e Cidade Inteligente de San Nicolás, minha própria cidade. Em vez de resolver um único trâmite, montei um motor configurável: os administradores criam tipos de trâmite e os moradores acompanham o pedido em tempo real, com histórico completo e notificações.",
        taskmgmt:
          "Um exercício de entrevista técnica: um app full-stack de gestão de tarefas, com Clean Architecture e desenvolvimento guiado por testes.",
        driveprolink:
          "Produto de um cliente, o nome não é público. Dá às pessoas a melhor cotação de financiamento e leasing de um veículo, para que cheguem à concessionária com um orçamento e possam negociar. Trabalhei nele com uma equipe na Innovate On Demand, desde a primeira versão.",
        portal:
          "Produto de um cliente, o nome não é público. Um portal de clientes de uma empresa de localização, para orçamentos, projetos e relatórios, e os sistemas internos por trás dele. Trabalhei no redesenho da interface do portal em 2022, no servidor que recebe os pacotes de tradução e os orçamentos, e no sistema interno de gestão de projetos.",
        dealeromg: "Produto de um cliente, o nome não é público. Uma plataforma para concessionárias: backend em .NET, dashboard de administração em React, e serviços satélite em Node.js para ingestão de dados e integrações. Eu a mantenho na Innovate On Demand.",
        leasemax: "Produto de um cliente, o nome não é público. Um motor de cotações de leasing de veículos, mais os relatórios para o time comercial.",
      },
      detailsLabel: "Detalhes técnicos",
      hideLabel: "Ocultar detalhes",
      details: {
        comerciapp:
          "Arquitetura: multi-tenant, os dados de cada comércio ficam isolados dos demais. Offline-first na loja, sincroniza automaticamente quando a conexão volta. Pagamentos com Stripe e MercadoPago, pedidos pelo WhatsApp, um agente de vendas com IA feito com a API do Claude, e exclusão de dados conforme a GDPR com trilha de auditoria.",
        academy:
          "Next.js e React no frontend. O conteúdo vem de um WordPress headless: PHP e MySQL por trás da API, o Next.js busca e renderiza os tutoriais e a busca.",
        tramitessn:
          "Backend: Node.js, TypeScript, Express, PostgreSQL. Frontend: React, TypeScript, Tailwind, Vite. Atualização em tempo real com WebSockets (Socket.IO), armazenamento de arquivos compatível com S3, e TDD com Jest e Vitest.",
        taskmgmt:
          "API Web .NET 8 com Clean Architecture (camadas de API, lógica de negócio, domínio e infraestrutura), Entity Framework Core, autenticação JWT. Frontend em React e TypeScript. Testes de backend com xUnit, Moq e FluentAssertions, testes de frontend com Vitest e React Testing Library.",
        driveprolink:
          "Padrões: cálculos de taxas e cotações no servidor, integrações com provedores externos de taxas de financiamento e leasing. Frontend em React, backend em .NET, deploy na Vercel.",
        portal:
          "Padrões: acesso por perfil de cada conta de cliente, conectores de CMS que devolvem o conteúdo traduzido automaticamente. Angular e React no frontend, backend em .NET, uma camada de API em GraphQL, e arquitetura de CMS headless. Gráficos do dashboard de gasto e prazos de entrega.",
        dealeromg:
          "Backend principal e dashboard de administração em .NET e React. Serviços separados em Node.js para ingestão de dados e integrações com terceiros. Refatorações incrementais de um código legado sem parar a operação.",
        leasemax:
          "Backend em Node.js e Express com PostgreSQL. Uma ferramenta em React para cotações com geração de PDF e pagamentos com Stripe, mais um dashboard de administração à parte, também em React.",
      },
      industriesTitle: "Setores",
      industries:
        "Trabalhei em bancos (J.P. Morgan Chase, por meio da Globant), aço (Ternium), energia (AES), automação industrial, comunicações, saúde, tradução e localização, financiamento automotivo e varejo.",
      exploringTitle: "O que vem a seguir",
      exploring:
        "Estou construindo novos produtos com agentes de IA. Ainda é cedo para dar detalhes, vou publicar aqui quando estiverem no ar.",
    },
    experience: {
      title: "Experiência",
      earlierLabel: "Antes",
      items: {
        iod: {
          role: "Líder técnico e engenheiro .NET sênior",
          note: "Remoto",
          bullets: [
            "Trabalhei em uma plataforma de financiamento e leasing de veículos desde a primeira versão, com uma equipe. Cuidei da arquitetura, do deploy e da manutenção.",
            "Mantenho plataformas para concessionárias escritas em Node.js.",
            "Estabilizei um processo de deploy frágil e refatorei aos poucos um produto legado para concessionárias, sem parar a operação em produção.",
            "Estimativas, planejamento de sprints e revisões de código. Agentes de IA no desenvolvimento diário.",
          ],
          learned:
            "Aprendi BigQuery no Google Cloud. Liderei um backend do zero em um projeto: escolhi o stack, planejei as tarefas e o CI. Ficou em produção em 4 meses, sem regressões, e o cliente ficou satisfeito desde o primeiro dia.",
        },
        comerciapp: {
          role: "Fundador e líder de produto",
          note: "Produto próprio",
          bullets: [
            "Loja online, pedidos pelo WhatsApp e emissão de notas em um só app, feito para donos sem conhecimento técnico.",
            "Um agente de vendas com IA atende os clientes no WhatsApp. O app também funciona offline e sincroniza depois.",
            "API web em .NET 8, React e PostgreSQL. Os dados de cada loja ficam isolados dos das outras.",
            "Decido o produto, os fluxos e a arquitetura, e uso agentes de IA para programar mais rápido.",
          ],
        },
        gpi: {
          role: "Desenvolvedor .NET sênior, soluções de globalização",
          note: "Contratado, 100% remoto, 7,5 anos",
          bullets: [
            "Trabalhei em um portal de clientes de tradução e localização, incluindo o redesenho da interface em 2022: dashboard, gráficos e verificações de segurança.",
            "Trabalhei no servidor de traduções, que recebe os pacotes de conteúdo para traduzir e os pedidos de orçamento.",
            "Trabalhei no sistema interno de gestão de projetos da GPI.",
            "Desenvolvi e mantive conectores de tradução para CMS: Sitecore XP e XM Cloud, Optimizely, Umbraco, Strapi e Amplience.",
            "Automatizei fluxos de localização entre equipes de tradução, desenvolvedores e editores de CMS.",
            "Resolvi incidentes em produção: performance de banco de dados, falhas de integração e patches de segurança.",
            "Orçamentos e estimativas com o gerente técnico. Suporte aos servidores internos. Documentação para a certificação ISO.",
          ],
          learned:
            "Fui promovido nesse período. Tirei a certificação Sitecore Developer. Fiz cursos de Java, Node.js, MongoDB, Cassandra, GraphQL, Angular, React, .NET Core, Sitecore XM Cloud, Optimizely, Strapi, Amplience, Kentico, Umbraco e Azure. Trabalhei todo dia com equipes em fusos horários diferentes.",
        },
        globant: {
          role: "Developer analyst .NET semi sênior",
          note: "Setor bancário, no cliente, em um projeto do J.P. Morgan Chase",
          bullets: [
            "Aplicações web e desktop Windows para operações bancárias.",
            "Scripts SQL para processamento de dados, relatórios e manutenção de banco de dados.",
            "Revisões de código, testes e deploys.",
          ],
          learned:
            "Fui promovido nesse período. Trabalhei no setor bancário, com requisitos altos de segurança. Aprendi Pentaho e Oracle, continuei usando Sybase, e aprendi mais sobre compliance.",
        },
        janus: {
          role: "Desenvolvedor semi sênior",
          note: "Automação industrial. No primeiro ano, desenvolvedor de suporte na Ternium (aço)",
          bullets: [
            "Trabalhei em um sistema SCADA com monitoramento em tempo real.",
            "Publiquei aplicações web em produção e administrei os servidores web e de banco de dados: atualizações, backups e segurança.",
            "Na Ternium: suporte às aplicações, com scripts SQL corretivos em bancos em produção.",
          ],
          learned:
            "Cursos de inglês e de sistemas operacionais em tempo real (QNX). Trabalhei em um sistema SCADA, Angular, administração de servidores, implantações e entradas em produção, e TDD. Aprendi bastante de gestão de projetos pelo caminho.",
        },
        aes: {
          role: "Desenvolvedor",
          note: "Energia. Primeiro por conta própria, depois pela Infoseek",
          bullets: [
            "Uma aplicação desktop com suporte a RFID, aplicações SharePoint e aplicações web.",
            "Correção de aplicações web e bancos de dados em produção.",
          ],
          learned:
            "Trabalhei em sistemas de serviço médico e em um sistema de acesso físico e reconhecimento de pessoal com RFID. Aprendi sobre compliance e como é trabalhar dentro de uma multinacional.",
        },
        early: {
          role: "Desenvolvedor freelance, e trainee na Eniac",
          note: "Meus primeiros trabalhos",
          bullets: [
            "Sites para clientes pequenos, com orçamentos e levantamento de requisitos. Parte foi remoto.",
            "Suporte no local e depuração na Eniac Computación.",
          ],
        },
      },
    },
    skills: {
      title: "Habilidades",
      groups: [
        {
          title: "Sistemas de negócio do dia a dia",
          pitch: "O backend, painéis administrativos e ferramentas internas que sua equipe usa todos os dias. Também sites e CMS.",
          text: ".NET e C#, ASP.NET Web API e MVC, SQL Server, Angular, JavaScript e TypeScript, HTML e CSS, WordPress, integrações com CMS, fluxos de localização, Azure DevOps e CI/CD, servidores Windows e IIS.",
        },
        {
          title: "Web moderna, nuvem e integrações",
          pitch: "Hospedagem na nuvem, bancos de dados, pagamentos e integração com as outras ferramentas que sua empresa já usa.",
          text: "Node.js, React e Next.js, PostgreSQL, MySQL, MongoDB, GraphQL, Docker, Azure, AWS (EC2, S3, Lambda), GitHub Actions, APIs de terceiros com OAuth2 e webhooks, pagamentos com Stripe e MercadoPago, BigQuery, exclusão de dados pessoais conforme a GDPR com trilha de auditoria.",
        },
        {
          title: "IA para sua empresa",
          pitch: "Agentes de IA que me ajudam a desenvolver mais rápido, e recursos de IA dentro de produtos reais, como um assistente que fala com seus clientes automaticamente.",
          text: "Uso Claude Code, Cursor e a extensão do Claude no Visual Studio todos os dias. Desenvolvi com a API do Claude, um agente de vendas com IA dentro do ComercIApp e um modelo local (Ollama) conectado a dados reais de um app. Continuo me capacitando nisso, e uma certificação da Anthropic é o próximo passo.",
        },
        {
          title: "Onde ainda estou crescendo",
          text: "Ainda não montei um sistema RAG em grande escala, Python e Kubernetes continuam na minha lista, e em mobile estou em um nível básico.",
        },
      ],
    },
    about: {
      title: "Formação e idiomas",
      education: [
        "Ensino médio técnico, Informática. Fray Luis Beltrán, 2006-2008",
        "Estudos de análise de sistemas. ISFT N°38, 2008-2010",
        "Estudos de engenharia de sistemas. UAI Rosario, 2011-2012",
        "Curso de AngularJS. Code School, 2016",
      ],
      languages: [
        "Inglês: Cambridge C2 (2015)",
        "Espanhol: nativo",
        "Português: intermediário",
      ],
    },
    contact: {
      title: "Contato",
      text: "Estou disponível para trabalho part-time e por contrato com clientes do exterior. Trabalho de forma assíncrona e estou em UTC-3. Escreva por e-mail ou LinkedIn.",
      book: {
        title: "Agende uma call de 30 min",
        intro: "Escolha um horário que funcione para você. Eu confirmo por e-mail, geralmente em menos de um dia.",
        timezoneNote: "Horários no seu fuso ({tz}). Eu estou na Argentina (UTC-3).",
        requestLabel: "Pedindo",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "E-mail",
        phonePlaceholder: "Telefone",
        contactHint: "O nome é obrigatório, mais um e-mail ou telefone (pelo menos um).",
        send: "Enviar pedido",
        sending: "Enviando...",
        success: "Prontinho. Confirmo por e-mail em breve.",
        successInstant: "Você está agendado. Confira seu e-mail: chega o convite do calendário e o link da videochamada.",
        noSlots: "Sem horários livres nesse dia. Tente outro.",
        formError: "Confira o nome, e adicione um e-mail ou telefone válido. O captcha também precisa ser preenchido.",
        sendError: "Algo deu errado. Tente de novo, ou me escreva direto.",
      },
      chat: {
        openLabel: "Pergunte sobre mim",
        title: "Pergunte sobre mim",
        intro: "Pergunte o que quiser sobre meu trabalho, minhas skills ou minha trajetória. Se eu não tiver certeza, eu digo, e você pode agendar uma call.",
        hint: "Tem uma pergunta? Pergunte o que quiser",
        placeholder: "Digite uma pergunta",
        send: "Enviar",
        sending: "Enviando...",
        error: "Algo deu errado. Melhor me escrever direto:",
        close: "Fechar",
      },
    },
  },
};
