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
  { id: "celeste", name: "Celeste" },
  { id: "terminal", name: "Terminal" },
  { id: "editorial", name: "Editorial" },
  { id: "aurora", name: "Aurora" },
  { id: "pampa", name: "Pampa" },
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
  { id: "iod", company: "Innovate On Demand", from: "2025-09", to: null },
  { id: "comerciapp", company: "ComercIApp", from: "2025", to: null },
  { id: "gpi", company: "Globalization Partners International", from: "2017-12", to: "2025-07" },
  { id: "globant", company: "Globant, J.P. Morgan Chase", from: "2016-05", to: "2017-11" },
  { id: "janus", company: "Janus Automation", from: "2013-11", to: "2016-05" },
  { id: "aes", company: "AES Argentina (Infoseek and self-employed)", from: "2009-11", to: "2013-06" },
  { id: "early", company: "Freelance and Eniac Computación", from: "2007-06", to: "2009-11" },
];

export const projects = [
  { id: "comerciapp", name: "ComercIApp", url: "https://comerci.app", tags: [".NET 8", "React", "PostgreSQL", "AI agent"], featured: true },
  // TODO: Fernando has to tell what the Academy is and give the link.
  { id: "academy", name: "ComercIApp Academy", url: null, tags: ["ComercIApp"], featured: true },
  { id: "driveprolink", name: "DriveProLink", url: "https://driveprolink.com", tags: [".NET", "Azure", "React", "Vercel", "PostgreSQL"] },
  { id: "portal", name: "Translation Portal and GPMS", url: "https://www.translationportal.com", tags: ["Localization", "CMS connectors", ".NET"] },
  { id: "dealeromg", name: "DealerOMG", url: null, tags: ["Node.js"] },
  { id: "leasemax", name: "LeaseMax", url: null, tags: ["Vehicle leasing", "Reports"] },
];

export const roleIds = ["dev", "server", "db", "analyst", "pm", "founder", "lead"];

export const copy = {
  // ---------------------------------------------------------------- English
  en: {
    meta: { htmlLang: "en", title: "Fernando Pavia | Full-stack developer and technical lead" },
    ui: {
      nav: { work: "Work", experience: "Experience", skills: "Skills", contact: "Contact" },
      skip: "Skip to content",
      status: "Open to part-time and contract work",
      cv: "Download CV",
      email: "Email me",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
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
      title: "Full-stack developer and technical lead",
      intro:
        "I'm a senior developer from Argentina. I work mostly with .NET, Angular and React, and today I build with AI agents. I've been a developer since 2007.",
      stats: [
        { value: "2007", label: "working as a developer" },
        { value: "2017", label: "remote for international clients" },
        { value: "C2", label: "Cambridge English" },
      ],
      rolesTitle: "Roles I've had in projects",
      rolesHint: "Choose one to see a real example.",
    },
    roles: {
      dev: {
        name: "Developer",
        where: "Since 2007",
        text: "Desktop and web at first, then .NET, Angular, React and Node.js. Today I direct AI agents that write a good part of the code.",
      },
      server: {
        name: "Server admin",
        where: "Janus Automation, GPI",
        text: "At Janus Automation I managed the web and database servers: updates, backups and security. At GPI I supported the internal servers and the project environments.",
      },
      db: {
        name: "Database admin",
        where: "Ternium, J.P. Morgan Chase, GPI",
        text: "I've written and run corrective SQL scripts on live databases, first for Ternium's applications and later in banking. At GPI I worked on database performance incidents.",
      },
      analyst: {
        name: "Analyst",
        where: "Globant",
        text: "My title at Globant was developer analyst, on a project for J.P. Morgan Chase. Requirements and business analysis are part of my daily work.",
      },
      pm: {
        name: "Project manager",
        where: "GPI, Innovate On Demand",
        text: "At GPI I worked with the technical manager on estimates, quotes and task breakdowns for multilingual web projects. As technical lead I do estimation and sprint planning.",
      },
      founder: {
        name: "Founder",
        where: "ComercIApp",
        text: "I started ComercIApp in 2025. I decide the product, the flows and the architecture. I also talk to shop owners directly and help them load their catalog.",
      },
      lead: {
        name: "Technical lead",
        where: "Innovate On Demand",
        text: "Technical lead since September 2025, across several client projects. I take care of architecture, deploys and code reviews.",
      },
    },
    how: {
      title: "How I work",
      items: [
        {
          title: "I take ownership",
          text: "When I take a project, I treat it as mine. On DriveProLink I covered architecture, deploy and maintenance. On ComercIApp I decide the product, not only the code.",
        },
        {
          title: "I look for a win-win",
          text: "Before I decide something, I try to understand what the other side needs. With ComercIApp, I offer to help shop owners load their first products, so they don't have to figure it out alone. In client work, I start with the business rules and then choose the technology.",
        },
        {
          title: "AI works for me",
          text: "I use AI agents every day: Claude Code, Cursor and the Claude extension in Visual Studio. I decide the architecture, write clear tasks and review the result. React and TypeScript are written mostly by the agents under my direction. That's how I can carry a product like ComercIApp on my own.",
        },
      ],
    },
    work: {
      title: "Work",
      more: "More builds",
      moreText:
        "FlowCraft, a low-code workflow builder in Next.js. A translation plugin for Optimizely CMS 12 in .NET 8. A re-engineering of a Yii (PHP) project to Node.js. Small apps for shops: point of sale, delivery, a bicycle shop, and billing with ARCA/AFIP.",
      items: {
        comerciapp:
          "Online store, WhatsApp orders and invoicing in one app for small shops in Argentina. It has an AI sales agent that answers customers on WhatsApp. I'm the founder and I own product, architecture and delivery.",
        academy: "Part of ComercIApp.",
        driveprolink:
          "Gives people the best cash finance and lease quote for a vehicle, so they arrive at the dealership with a budget and can negotiate. I worked on it with a team at Innovate On Demand, from the first version.",
        portal:
          "GPI's client portal for quotes, projects and reports, and the internal systems behind it. I worked on the 2022 UI re-design of the portal, on the translation server and on GPMS.",
        dealeromg: "A dealer platform written in Node.js. I maintain it at Innovate On Demand.",
        leasemax: "Vehicle lease quotations with the MARSE API engine, and the LeaseMax reports.",
      },
      industriesTitle: "Industries",
      industries:
        "I've worked in banking (J.P. Morgan Chase, through Globant), steel (Ternium), energy (AES), industrial automation, communications, health, translation and localization, automotive finance and retail.",
    },
    experience: {
      title: "Experience",
      items: {
        iod: {
          role: "Technical lead and senior .NET engineer",
          note: "Remote",
          bullets: [
            "Worked on DriveProLink from the first version, with a team. I covered architecture, deploy and maintenance.",
            "Maintain dealer platforms written in Node.js, like DealerOMG.",
            "Stabilized a fragile deployment process and refactored a legacy dealer product in small steps, without stopping live operations.",
            "Estimation, sprint planning and code reviews. AI agents in the daily development.",
          ],
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
            "Worked on the Translation Portal, including the 2022 UI re-design: dashboard, charts and security checks.",
            "Worked on the translation server that receives the content packages to translate and the quote requests.",
            "Worked on GPMS, GPI's internal project management system.",
            "Built and maintained translation connectors for CMS platforms: Sitecore XP and XM Cloud, Optimizely, Umbraco, Strapi and Amplience.",
            "Automated localization workflows between translation teams, developers and CMS editors.",
            "Fixed production incidents: database performance, integration failures and security patches.",
            "Quotes and estimates with the technical manager. Support for internal servers. Documentation for the ISO certification.",
          ],
        },
        globant: {
          role: ".NET semi senior developer analyst",
          note: "Banking, on site at a J.P. Morgan Chase project",
          bullets: [
            "Web and Windows desktop applications for banking operations.",
            "SQL scripts for data processing, reports and database maintenance.",
            "Code reviews, testing and deployments.",
          ],
        },
        janus: {
          role: "Semi senior developer",
          note: "Industrial automation. First year as support developer for Ternium (steel)",
          bullets: [
            "Worked on a SCADA system with real-time monitoring.",
            "Deployed web applications to production and managed the web and database servers: updates, backups and security.",
            "At Ternium: support for their applications, with corrective SQL scripts on live databases.",
          ],
        },
        aes: {
          role: "Developer",
          note: "Energy. Self-employed at first, then through Infoseek",
          bullets: [
            "A desktop application with RFID support, SharePoint applications and web applications.",
            "Fixed web applications and databases in production.",
          ],
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
          title: "What I use every day",
          text: ".NET and C#, ASP.NET Web API and MVC, SQL Server, Angular, JavaScript and TypeScript, HTML and CSS, WordPress, CMS integrations, localization workflows, Azure DevOps and CI/CD, Windows and IIS servers.",
        },
        {
          title: "What I've used in production",
          text: "Node.js, React and Next.js, PostgreSQL, MySQL, MongoDB, GraphQL, Docker, Azure, GitHub Actions, third-party APIs with OAuth2 and webhooks, payments with Stripe and MercadoPago, BigQuery, GDPR data deletion with an audit trail.",
        },
        {
          title: "AI",
          text: "I use Claude Code, Cursor and the Claude extension in Visual Studio every day. I've built with the Claude API, an AI sales agent inside ComercIApp, and a local model (Ollama) connected to real app data.",
        },
        {
          title: "Where I'm less strong",
          text: "My AWS experience (EC2, S3, Lambda) is more limited than my .NET and Azure work. I haven't built a large RAG system in production. Python is a gap. I don't write React and TypeScript by hand anymore, the agents do it under my direction. Mobile: basics only. I haven't used Kubernetes.",
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
    },
  },

  // ---------------------------------------------------------------- Español
  es: {
    meta: { htmlLang: "es", title: "Fernando Pavia | Desarrollador full-stack y líder técnico" },
    ui: {
      nav: { work: "Proyectos", experience: "Experiencia", skills: "Habilidades", contact: "Contacto" },
      skip: "Saltar al contenido",
      status: "Disponible para trabajo part-time y por contrato",
      cv: "Descargar CV",
      email: "Escribime",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
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
      title: "Desarrollador full-stack y líder técnico",
      intro:
        "Soy desarrollador senior, de Argentina. Trabajo sobre todo con .NET, Angular y React, y hoy desarrollo con agentes de IA. Soy desarrollador desde 2007.",
      stats: [
        { value: "2007", label: "trabajando como desarrollador" },
        { value: "2017", label: "remoto para clientes del exterior" },
        { value: "C2", label: "inglés Cambridge" },
      ],
      rolesTitle: "Roles que tuve en proyectos",
      rolesHint: "Elegí uno para ver un ejemplo real.",
    },
    roles: {
      dev: {
        name: "Desarrollador",
        where: "Desde 2007",
        text: "Primero escritorio y web, después .NET, Angular, React y Node.js. Hoy dirijo agentes de IA que escriben buena parte del código.",
      },
      server: {
        name: "Administrador de servidores",
        where: "Janus Automation, GPI",
        text: "En Janus Automation administré los servidores web y de bases de datos: actualizaciones, backups y seguridad. En GPI di soporte a los servidores internos y a los entornos de los proyectos.",
      },
      db: {
        name: "Administrador de bases de datos",
        where: "Ternium, J.P. Morgan Chase, GPI",
        text: "Escribí y ejecuté scripts SQL correctivos sobre bases en producción, primero para las aplicaciones de Ternium y después en banca. En GPI trabajé en incidentes de performance de base de datos.",
      },
      analyst: {
        name: "Analista",
        where: "Globant",
        text: "Mi puesto en Globant fue developer analyst, en un proyecto para J.P. Morgan Chase. El análisis de requisitos y de negocio es parte de mi trabajo diario.",
      },
      pm: {
        name: "Gestión de proyectos",
        where: "GPI, Innovate On Demand",
        text: "En GPI trabajé con el gerente técnico en estimaciones, cotizaciones y división de tareas para proyectos web multilingües. Como líder técnico hago estimaciones y planificación de sprints.",
      },
      founder: {
        name: "Fundador",
        where: "ComercIApp",
        text: "Empecé ComercIApp en 2025. Decido el producto, los flujos y la arquitectura. También hablo directo con los dueños de comercios y los ayudo a cargar su catálogo.",
      },
      lead: {
        name: "Líder técnico",
        where: "Innovate On Demand",
        text: "Líder técnico desde septiembre de 2025, en varios proyectos de clientes. Me ocupo de la arquitectura, los deploys y las revisiones de código.",
      },
    },
    how: {
      title: "Cómo trabajo",
      items: [
        {
          title: "Me hago cargo",
          text: "Cuando tomo un proyecto, lo trato como propio. En DriveProLink me ocupé de la arquitectura, el deploy y el mantenimiento. En ComercIApp decido el producto, no solo el código.",
        },
        {
          title: "Busco que ganemos todos",
          text: "Antes de decidir algo, trato de entender qué necesita la otra parte. Con ComercIApp me ofrezco a ayudar a los dueños de comercios a cargar sus primeros productos, para que no tengan que resolverlo solos. En trabajo para clientes, empiezo por las reglas de negocio y después elijo la tecnología.",
        },
        {
          title: "La IA trabaja para mí",
          text: "Uso agentes de IA todos los días: Claude Code, Cursor y la extensión de Claude en Visual Studio. Yo decido la arquitectura, escribo tareas claras y reviso el resultado. React y TypeScript los escriben sobre todo los agentes, bajo mi dirección. Así puedo llevar yo solo un producto como ComercIApp.",
        },
      ],
    },
    work: {
      title: "Proyectos",
      more: "Otros desarrollos",
      moreText:
        "FlowCraft, un constructor de flujos de trabajo low-code en Next.js. Un plugin de traducción para Optimizely CMS 12 en .NET 8. La reingeniería de un proyecto Yii (PHP) a Node.js. Apps chicas para comercios: punto de venta, delivery, una bicicletería y facturación con ARCA/AFIP.",
      items: {
        comerciapp:
          "Tienda online, pedidos por WhatsApp y facturación en una sola app para comercios chicos de Argentina. Tiene un agente de ventas con IA que atiende a los clientes por WhatsApp. Soy el fundador y me ocupo del producto, la arquitectura y la entrega.",
        academy: "Parte de ComercIApp.",
        driveprolink:
          "Da a las personas la mejor cotización de financiación y leasing de un vehículo, para que lleguen a la concesionaria con un presupuesto y puedan negociar. Trabajé en ella con un equipo en Innovate On Demand, desde la primera versión.",
        portal:
          "El portal de clientes de GPI para cotizaciones, proyectos y reportes, y los sistemas internos que lo sostienen. Trabajé en el rediseño de la interfaz del portal en 2022, en el servidor de traducciones y en GPMS.",
        dealeromg: "Una plataforma para concesionarias escrita en Node.js. La mantengo en Innovate On Demand.",
        leasemax: "Cotizaciones de leasing de vehículos con el motor de API MARSE, y los reportes de LeaseMax.",
      },
      industriesTitle: "Industrias",
      industries:
        "Trabajé en banca (J.P. Morgan Chase, a través de Globant), acero (Ternium), energía (AES), automatización industrial, comunicaciones, salud, traducción y localización, financiación automotriz y comercio.",
    },
    experience: {
      title: "Experiencia",
      items: {
        iod: {
          role: "Líder técnico e ingeniero .NET senior",
          note: "Remoto",
          bullets: [
            "Trabajé en DriveProLink desde la primera versión, con un equipo. Me ocupé de la arquitectura, el deploy y el mantenimiento.",
            "Mantengo plataformas para concesionarias escritas en Node.js, como DealerOMG.",
            "Estabilicé un proceso de deploy frágil y refactoricé de a poco un producto legacy para concesionarias, sin frenar la operación en vivo.",
            "Estimaciones, planificación de sprints y revisiones de código. Agentes de IA en el desarrollo diario.",
          ],
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
            "Trabajé en el Translation Portal, incluido el rediseño de la interfaz de 2022: dashboard, gráficos y controles de seguridad.",
            "Trabajé en el servidor de traducciones, que recibe los paquetes de contenido a traducir y los pedidos de cotización.",
            "Trabajé en GPMS, el sistema interno de gestión de proyectos de GPI.",
            "Desarrollé y mantuve conectores de traducción para CMS: Sitecore XP y XM Cloud, Optimizely, Umbraco, Strapi y Amplience.",
            "Automaticé flujos de localización entre equipos de traducción, desarrolladores y editores de CMS.",
            "Resolví incidentes en producción: performance de base de datos, fallas de integración y parches de seguridad.",
            "Cotizaciones y estimaciones con el gerente técnico. Soporte de servidores internos. Documentación para la certificación ISO.",
          ],
        },
        globant: {
          role: "Developer analyst .NET semi senior",
          note: "Banca, en sitio en un proyecto de J.P. Morgan Chase",
          bullets: [
            "Aplicaciones web y de escritorio Windows para operaciones bancarias.",
            "Scripts SQL para procesamiento de datos, reportes y mantenimiento de bases de datos.",
            "Revisiones de código, pruebas y deploys.",
          ],
        },
        janus: {
          role: "Desarrollador semi senior",
          note: "Automatización industrial. El primer año, desarrollador de soporte en Ternium (acero)",
          bullets: [
            "Trabajé en un sistema SCADA con monitoreo en tiempo real.",
            "Publiqué aplicaciones web en producción y administré los servidores web y de bases de datos: actualizaciones, backups y seguridad.",
            "En Ternium: soporte de sus aplicaciones, con scripts SQL correctivos sobre bases en producción.",
          ],
        },
        aes: {
          role: "Desarrollador",
          note: "Energía. Primero por cuenta propia, después a través de Infoseek",
          bullets: [
            "Una aplicación de escritorio con soporte RFID, aplicaciones SharePoint y aplicaciones web.",
            "Corrección de aplicaciones web y bases de datos en producción.",
          ],
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
          title: "Lo que uso todos los días",
          text: ".NET y C#, ASP.NET Web API y MVC, SQL Server, Angular, JavaScript y TypeScript, HTML y CSS, WordPress, integraciones con CMS, flujos de localización, Azure DevOps y CI/CD, servidores Windows e IIS.",
        },
        {
          title: "Lo que usé en producción",
          text: "Node.js, React y Next.js, PostgreSQL, MySQL, MongoDB, GraphQL, Docker, Azure, GitHub Actions, APIs de terceros con OAuth2 y webhooks, pagos con Stripe y MercadoPago, BigQuery, eliminación de datos personales según GDPR con registro de auditoría.",
        },
        {
          title: "IA",
          text: "Uso Claude Code, Cursor y la extensión de Claude en Visual Studio todos los días. Desarrollé con la API de Claude, un agente de ventas con IA dentro de ComercIApp y un modelo local (Ollama) conectado a datos reales de una app.",
        },
        {
          title: "Donde soy menos fuerte",
          text: "Mi experiencia en AWS (EC2, S3, Lambda) es más limitada que la que tengo en .NET y Azure. No armé un sistema RAG grande en producción. Python es una carencia. Ya no escribo React y TypeScript a mano, lo hacen los agentes bajo mi dirección. Mobile: solo lo básico. No usé Kubernetes.",
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
    },
  },

  // -------------------------------------------------------------- Português
  pt: {
    meta: { htmlLang: "pt", title: "Fernando Pavia | Desenvolvedor full-stack e líder técnico" },
    ui: {
      nav: { work: "Projetos", experience: "Experiência", skills: "Habilidades", contact: "Contato" },
      skip: "Ir para o conteúdo",
      status: "Disponível para trabalho part-time e por contrato",
      cv: "Baixar CV",
      email: "Me escreva",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
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
      title: "Desenvolvedor full-stack e líder técnico",
      intro:
        "Sou desenvolvedor sênior, da Argentina. Trabalho principalmente com .NET, Angular e React, e hoje desenvolvo com agentes de IA. Sou desenvolvedor desde 2007.",
      stats: [
        { value: "2007", label: "trabalhando como desenvolvedor" },
        { value: "2017", label: "remoto para clientes do exterior" },
        { value: "C2", label: "inglês Cambridge" },
      ],
      rolesTitle: "Papéis que tive em projetos",
      rolesHint: "Escolha um para ver um exemplo real.",
    },
    roles: {
      dev: {
        name: "Desenvolvedor",
        where: "Desde 2007",
        text: "Primeiro desktop e web, depois .NET, Angular, React e Node.js. Hoje dirijo agentes de IA que escrevem boa parte do código.",
      },
      server: {
        name: "Administrador de servidores",
        where: "Janus Automation, GPI",
        text: "Na Janus Automation administrei os servidores web e de banco de dados: atualizações, backups e segurança. Na GPI dei suporte aos servidores internos e aos ambientes dos projetos.",
      },
      db: {
        name: "Administrador de banco de dados",
        where: "Ternium, J.P. Morgan Chase, GPI",
        text: "Escrevi e executei scripts SQL corretivos em bancos em produção, primeiro para as aplicações da Ternium e depois no setor bancário. Na GPI trabalhei em incidentes de performance de banco de dados.",
      },
      analyst: {
        name: "Analista",
        where: "Globant",
        text: "Meu cargo na Globant foi developer analyst, em um projeto para o J.P. Morgan Chase. Análise de requisitos e de negócio fazem parte do meu trabalho diário.",
      },
      pm: {
        name: "Gestão de projetos",
        where: "GPI, Innovate On Demand",
        text: "Na GPI trabalhei com o gerente técnico em estimativas, orçamentos e divisão de tarefas para projetos web multilíngues. Como líder técnico, faço estimativas e planejamento de sprints.",
      },
      founder: {
        name: "Fundador",
        where: "ComercIApp",
        text: "Comecei o ComercIApp em 2025. Decido o produto, os fluxos e a arquitetura. Também converso direto com os donos de lojas e ajudo a carregar o catálogo.",
      },
      lead: {
        name: "Líder técnico",
        where: "Innovate On Demand",
        text: "Líder técnico desde setembro de 2025, em vários projetos de clientes. Cuido da arquitetura, dos deploys e das revisões de código.",
      },
    },
    how: {
      title: "Como eu trabalho",
      items: [
        {
          title: "Assumo a responsabilidade",
          text: "Quando pego um projeto, trato como meu. No DriveProLink cuidei da arquitetura, do deploy e da manutenção. No ComercIApp eu decido o produto, não só o código.",
        },
        {
          title: "Busco que todos ganhem",
          text: "Antes de decidir algo, tento entender o que o outro lado precisa. No ComercIApp, me ofereço para ajudar os donos de lojas a cadastrar os primeiros produtos, para que não precisem resolver sozinhos. No trabalho com clientes, começo pelas regras de negócio e depois escolho a tecnologia.",
        },
        {
          title: "A IA trabalha para mim",
          text: "Uso agentes de IA todos os dias: Claude Code, Cursor e a extensão do Claude no Visual Studio. Eu decido a arquitetura, escrevo tarefas claras e reviso o resultado. React e TypeScript são escritos principalmente pelos agentes, sob a minha direção. Assim consigo levar sozinho um produto como o ComercIApp.",
        },
      ],
    },
    work: {
      title: "Projetos",
      more: "Outros projetos",
      moreText:
        "FlowCraft, um construtor de fluxos de trabalho low-code em Next.js. Um plugin de tradução para o Optimizely CMS 12 em .NET 8. A reengenharia de um projeto Yii (PHP) para Node.js. Apps pequenos para lojas: ponto de venda, delivery, uma loja de bicicletas e faturamento com ARCA/AFIP.",
      items: {
        comerciapp:
          "Loja online, pedidos pelo WhatsApp e emissão de notas em um só app para pequenos comércios da Argentina. Tem um agente de vendas com IA que atende os clientes no WhatsApp. Sou o fundador e cuido do produto, da arquitetura e da entrega.",
        academy: "Parte do ComercIApp.",
        driveprolink:
          "Dá às pessoas a melhor cotação de financiamento e leasing de um veículo, para que cheguem à concessionária com um orçamento e possam negociar. Trabalhei nele com uma equipe na Innovate On Demand, desde a primeira versão.",
        portal:
          "O portal de clientes da GPI para orçamentos, projetos e relatórios, e os sistemas internos por trás dele. Trabalhei no redesenho da interface do portal em 2022, no servidor de traduções e no GPMS.",
        dealeromg: "Uma plataforma para concessionárias escrita em Node.js. Eu a mantenho na Innovate On Demand.",
        leasemax: "Cotações de leasing de veículos com o motor de API MARSE, e os relatórios do LeaseMax.",
      },
      industriesTitle: "Setores",
      industries:
        "Trabalhei em bancos (J.P. Morgan Chase, por meio da Globant), aço (Ternium), energia (AES), automação industrial, comunicações, saúde, tradução e localização, financiamento automotivo e varejo.",
    },
    experience: {
      title: "Experiência",
      items: {
        iod: {
          role: "Líder técnico e engenheiro .NET sênior",
          note: "Remoto",
          bullets: [
            "Trabalhei no DriveProLink desde a primeira versão, com uma equipe. Cuidei da arquitetura, do deploy e da manutenção.",
            "Mantenho plataformas para concessionárias escritas em Node.js, como o DealerOMG.",
            "Estabilizei um processo de deploy frágil e refatorei aos poucos um produto legado para concessionárias, sem parar a operação em produção.",
            "Estimativas, planejamento de sprints e revisões de código. Agentes de IA no desenvolvimento diário.",
          ],
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
            "Trabalhei no Translation Portal, incluindo o redesenho da interface em 2022: dashboard, gráficos e verificações de segurança.",
            "Trabalhei no servidor de traduções, que recebe os pacotes de conteúdo para traduzir e os pedidos de orçamento.",
            "Trabalhei no GPMS, o sistema interno de gestão de projetos da GPI.",
            "Desenvolvi e mantive conectores de tradução para CMS: Sitecore XP e XM Cloud, Optimizely, Umbraco, Strapi e Amplience.",
            "Automatizei fluxos de localização entre equipes de tradução, desenvolvedores e editores de CMS.",
            "Resolvi incidentes em produção: performance de banco de dados, falhas de integração e patches de segurança.",
            "Orçamentos e estimativas com o gerente técnico. Suporte aos servidores internos. Documentação para a certificação ISO.",
          ],
        },
        globant: {
          role: "Developer analyst .NET semi sênior",
          note: "Setor bancário, no cliente, em um projeto do J.P. Morgan Chase",
          bullets: [
            "Aplicações web e desktop Windows para operações bancárias.",
            "Scripts SQL para processamento de dados, relatórios e manutenção de banco de dados.",
            "Revisões de código, testes e deploys.",
          ],
        },
        janus: {
          role: "Desenvolvedor semi sênior",
          note: "Automação industrial. No primeiro ano, desenvolvedor de suporte na Ternium (aço)",
          bullets: [
            "Trabalhei em um sistema SCADA com monitoramento em tempo real.",
            "Publiquei aplicações web em produção e administrei os servidores web e de banco de dados: atualizações, backups e segurança.",
            "Na Ternium: suporte às aplicações, com scripts SQL corretivos em bancos em produção.",
          ],
        },
        aes: {
          role: "Desenvolvedor",
          note: "Energia. Primeiro por conta própria, depois pela Infoseek",
          bullets: [
            "Uma aplicação desktop com suporte a RFID, aplicações SharePoint e aplicações web.",
            "Correção de aplicações web e bancos de dados em produção.",
          ],
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
          title: "O que uso todos os dias",
          text: ".NET e C#, ASP.NET Web API e MVC, SQL Server, Angular, JavaScript e TypeScript, HTML e CSS, WordPress, integrações com CMS, fluxos de localização, Azure DevOps e CI/CD, servidores Windows e IIS.",
        },
        {
          title: "O que já usei em produção",
          text: "Node.js, React e Next.js, PostgreSQL, MySQL, MongoDB, GraphQL, Docker, Azure, GitHub Actions, APIs de terceiros com OAuth2 e webhooks, pagamentos com Stripe e MercadoPago, BigQuery, exclusão de dados pessoais conforme a GDPR com trilha de auditoria.",
        },
        {
          title: "IA",
          text: "Uso Claude Code, Cursor e a extensão do Claude no Visual Studio todos os dias. Desenvolvi com a API do Claude, um agente de vendas com IA dentro do ComercIApp e um modelo local (Ollama) conectado a dados reais de um app.",
        },
        {
          title: "Onde sou menos forte",
          text: "Minha experiência com AWS (EC2, S3, Lambda) é mais limitada que a que tenho em .NET e Azure. Não montei um sistema RAG grande em produção. Python é uma lacuna. Não escrevo mais React e TypeScript à mão, os agentes fazem isso sob a minha direção. Mobile: só o básico. Não usei Kubernetes.",
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
    },
  },
};
