export type Locale = 'en' | 'es';

export interface WorkProject {
  year: string;
  category: string;
  title: string;
  href: string;
  filter: 'product' | 'visual';
  image?: string;
  impact?: string;
}

export const nav = {
  en: { home: 'Home', work: 'Work', about: 'About', lab: 'Lab', cv: 'CV' },
  es: { home: 'Inicio', work: 'Trabajo', about: 'Sobre mí', lab: 'Lab', cv: 'CV' },
};

export const footer = {
  en: {
    connectTitle: "You've seen the work, now let's build something great.",
    siteLabel: 'SITE',
    contactLabel: 'CONTACT',
    downloadCv: 'Download CV',
  },
  es: {
    connectTitle: 'Ya has visto el trabajo, construyamos algo genial juntos.',
    siteLabel: 'SITIO',
    contactLabel: 'CONTACTO',
    downloadCv: 'Descargar CV',
  },
};

export const cvUrl =
  'https://drive.google.com/file/d/1TRtIspR3Crb0Q2o7njCeolwB8JPYZssP/view?usp=sharing';
export const email = 'vminer.ramos@gmail.com';
export const linkedinUrl = 'https://www.linkedin.com/in/virginiamramos/';

export const home = {
  en: {
    availability: ['Available for work', '3 yrs product design', '+7 yrs visual design'],
    greeting: "Hi, I'm Virginia Miner,",
    role: 'Product & Visual Designer',
    tagline: 'UX Strategy and Visual Design with an editorial craft.',
    tags: ['UX Strategy', 'Design Systems & AI', 'Editorial Craft'],
    ctaWork: 'See my work',
    ctaTalk: "Let's talk!",
    processEyebrow: 'PROCESS',
    processTitle: 'What guides my process',
    process: [
      {
        title: 'Design with intention first',
        body: 'I research the problem before opening Figma: priorities, benchmarking and user needs. Every decision has a clear reason.',
      },
      {
        title: 'I move between strategy and pixel',
        body: "I can be deciding what to prioritize at the product level one day and adjusting a component's spacing the next.",
      },
      {
        title: 'Scalable by design systems',
        body: 'I design with tokens, variables and handoff documentation from day one, so a dev team can build without depending on me for every question.',
      },
      {
        title: 'Different formats, same eye',
        body: "I've worked across product, brand and editorial print. Different formats, the same eye for clarity and hierarchy.",
      },
    ],
    caseStudiesEyebrow: 'CASE STUDIES',
    caseStudiesTitle: 'Selected work',
    viewCaseStudy: 'View case study',
    projects: [
      {
        year: '2023/2025',
        category: 'Product Design, AI',
        title: "qdq's AI website builder using three data points, featured at MWC 2024",
        href: '/projects/webia',
        filter: 'product',
        image: '/images/case-studies/webia/cover.webp',
        impact: '3 inputs, 1 finished website',
      },
      {
        year: '2026',
        category: 'Product Design, Web Development',
        title: 'A self-built product for fast, evidence-based UX audits',
        href: '/projects/uxquickaudit',
        filter: 'product',
        image: '/images/case-studies/uxquickaudit/cover.webp',
        impact: '96 audit points, zero frameworks',
      },
      {
        year: '2019-2026',
        category: 'Editorial Design, Branding',
        title: '7-year brand leadership: 40+ editorial covers and ecommerce redesign',
        href: '/projects/auroradorada',
        filter: 'visual',
        image: '/images/case-studies/auroradorada/cover.webp',
        impact: '50% of sales now organic',
      },
      {
        year: '2026',
        category: 'Product Design, Design Systems',
        title: 'End-to-end product design for a rural experience platform',
        href: '/projects/landora',
        filter: 'product',
        image: '/images/case-studies/landora/cover.webp',
        impact: '20+ components, fully WCAG AA',
      },
      {
        year: '2024',
        category: 'Product Strategy, Branding',
        title: 'Rebranding qdq: directory redesign & new revenue channels',
        href: '/projects/rebranding-qdq',
        filter: 'product',
        image: '/images/case-studies/rebranding-qdq/cover.webp',
        impact: 'Traffic grew from 300K to 2.5M',
      },
      {
        year: '2016-2022',
        category: 'Editorial Design, Photography',
        title: 'Editorial design for two analog photography personal zines',
        href: '/projects/levedadzine',
        filter: 'visual',
        image: '/images/case-studies/levedadzine/cover.jpg',
        impact: '8 photographers, one collaborative zine',
      },
    ] satisfies WorkProject[],
    labTeaser: {
      year: '2026',
      category: 'Design Systems, AI',
      title: '[Coming soon] Lumen, a mini design system for AI-generative interfaces',
    },
    footerTagline: '© 2026. Virginia M. Design with love in Valencia, made with Astro.',
    downloadResume: 'Download Resume',
  },
  es: {
    availability: ['Disponible para trabajar', '3 años de product design', '+7 años de diseño visual'],
    greeting: 'Hola, soy Virginia Miner,',
    role: 'Product & Visual Designer',
    tagline: 'Estrategia UX y Diseño Visual con un enfoque editorial.',
    tags: ['Estrategia UX', 'Design Systems & IA', 'Criterio editorial'],
    ctaWork: 'Ver mi trabajo',
    ctaTalk: 'Hablemos',
    processEyebrow: 'PROCESO',
    processTitle: 'Lo que guía mi proceso',
    process: [
      {
        title: 'Diseño con intención primero',
        body: 'Investigo el problema antes de abrir Figma: prioridades, benchmarking y necesidades de usuario. Cada decisión tiene una razón clara.',
      },
      {
        title: 'Me muevo entre estrategia y píxel',
        body: 'Puedo estar decidiendo qué priorizar a nivel de producto un día, y ajustando el espaciado de un componente al siguiente.',
      },
      {
        title: 'Escalable gracias a sistemas de diseño',
        body: 'Diseño con tokens, variables y documentación de handoff desde el primer día, para que un equipo de desarrollo pueda construir sin depender de mí para cada duda.',
      },
      {
        title: 'Distintos formatos, el mismo criterio',
        body: 'He trabajado en producto, marca y edición impresa. Distintos formatos, el mismo criterio de claridad y jerarquía.',
      },
    ],
    caseStudiesEyebrow: 'CASOS DE ESTUDIO',
    caseStudiesTitle: 'Trabajo seleccionado',
    viewCaseStudy: 'Ver caso de estudio',
    projects: [
      {
        year: '2023/2025',
        category: 'Diseño de Producto, IA',
        title: 'Constructor web con IA de qdq usando tres datos, presentado en el MWC 2024',
        href: '/es/projects/webia',
        filter: 'product',
        image: '/images/case-studies/webia/cover.webp',
        impact: '3 datos, una web lista',
      },
      {
        year: '2026',
        category: 'Diseño de Producto, Desarrollo Web',
        title: 'Un producto propio para auditorías UX rápidas y basadas en evidencia',
        href: '/es/projects/uxquickaudit',
        filter: 'product',
        image: '/images/case-studies/uxquickaudit/cover.webp',
        impact: '96 puntos, cero frameworks',
      },
      {
        year: '2019-2026',
        category: 'Diseño Editorial, Branding',
        title: '7 años de liderazgo de marca: 40+ cubiertas editoriales y rediseño de ecommerce',
        href: '/es/projects/auroradorada',
        filter: 'visual',
        image: '/images/case-studies/auroradorada/cover.webp',
        impact: '50% de ventas orgánicas',
      },
      {
        year: '2026',
        category: 'Diseño de Producto, Design Systems',
        title: 'Diseño de producto end-to-end para una plataforma de experiencias rurales',
        href: '/es/projects/landora',
        filter: 'product',
        image: '/images/case-studies/landora/cover.webp',
        impact: '20+ componentes, 100% accesibles',
      },
      {
        year: '2024',
        category: 'Estrategia de Producto, Branding',
        title: 'Rebranding de qdq: rediseño del directorio y nuevos canales de ingresos',
        href: '/es/projects/rebranding-qdq',
        filter: 'product',
        image: '/images/case-studies/rebranding-qdq/cover.webp',
        impact: 'Tráfico: de 300K a 2,5M',
      },
      {
        year: '2016-2022',
        category: 'Diseño Editorial, Fotografía',
        title: 'Diseño editorial para dos zines personales de fotografía analógica',
        href: '/es/projects/levedadzine',
        filter: 'visual',
        image: '/images/case-studies/levedadzine/cover.jpg',
        impact: '8 fotógrafos, un zine colaborativo',
      },
    ] satisfies WorkProject[],
    labTeaser: {
      year: '2026',
      category: 'Design Systems, IA',
      title: '[Próximamente] Lumen, un mini design system para interfaces generativas con IA',
    },
    footerTagline: '© 2026. Virginia M. Diseñado con cariño en Valencia, hecho con Astro.',
    downloadResume: 'Descargar CV',
  },
} as const;

export const work = {
  en: {
    eyebrow: 'WORK',
    title: 'All projects',
    filters: { all: 'All', product: 'Product & UX/UI', visual: 'Visual & Branding' },
  },
  es: {
    eyebrow: 'TRABAJO',
    title: 'Todos los proyectos',
    filters: { all: 'Todos', product: 'Producto y UX/UI', visual: 'Visual y Branding' },
  },
} as const;

export const about = {
  en: {
    tabs: { overview: 'Overview', experience: 'Experience', personal: 'Personal' },
    overview: {
      title: 'A little about me',
      body: [
        "Hi! I'm Virginia, a multidisciplinary designer based in Valencia. I design digital products where craft meets strategy bridging user research, visual design, and a strong editorial foundation built over 7+ years.",
        'With 3 years in product design and 7+ in graphic and editorial work, I bring a rare combination: the rigour of someone who has typeset 1,600-page books and the curiosity of someone who is always asking what problem is actually worth solving.',
        'I also studied fashion design, shoot analog film, and keep a running list of exhibitions I want to visit because for me, design has never been just one discipline.',
      ],
      badges: ['Based in Valencia, Spain', 'Remote / Hybrid (Valencia / Mad travel)'],
    },
    experiencePanel: {
      title: 'Experience that compounds',
      body: [
        'At qdq, I led the end-to-end design and launch of 5+ digital products, collaborated with Más Móvil and Yoigo on branded product experiences, redesigned 20+ web templates in Duda CMS, and participated as Product representative in an internal AI Lab — all while covering a senior designer role from day one.',
        "In parallel, I've spent 6+ years as the sole designer for Aurora Dorada Ediciones — designing 40+ covers, typesetting books distributed across national and international bookstores and marketplaces, and redesigning their e-commerce from scratch.",
        'At OCR Branding, I delivered brand and digital design across landing pages, social media, and print for multiple clients.',
      ],
      cta: 'Download CV / Resume',
    },
    personalPanel: {
      title: 'Outside the work',
      body: [
        "Outside work, I'm drawn to art, culture, and anything that sits at the intersection of image and meaning. I've been shooting analog photography since 2016 including a self-published zine and a collaboration with Lomography. I also studied fashion design for a year, which only deepened my obsession with visual systems.",
        "I regularly visit exhibitions, read widely, and keep personal projects alive across photography, illustration, and editorial design. Design, for me, has never been just a job, it's the lens through which I engage with the world.",
        "I'm also exploring learning experience design because teaching and designing share the same challenge: making something complex feel effortless. I believe the best design comes from people who stay curious beyond screens, and that's why I keep exploring new disciplines and saying yes to projects that scare me a little.",
      ],
      cta: 'Exploring analog photography',
    },
    skillsTitle: 'Skills & Tools',
    skillsGroups: [
      {
        title: 'Product & UX',
        items: ['UX Research', 'Wireframing', 'UI Design', 'Design Systems', 'Prototyping', 'Accessibility'],
      },
      {
        title: 'Visual & Branding',
        items: ['Brand Identity', 'Editorial Design', 'Typography', 'Book & Cover Design', 'Art Direction', 'Layout & Print'],
      },
      {
        title: 'Learning Experience*',
        items: ['Instructional Design', 'Learning Flows', 'Content Structuring', 'ADDIE Methodology', 'eLearning Tools'],
        footnote: '*Currently expanding into LXD',
      },
      {
        title: 'Web & Tools',
        items: ['Figma, Framer', 'Adobe Suite (Ai, Ps, Id) | Affinity', 'Visual Studio - HTML, CSS, JS', 'Responsive Design', 'CMS (Squarespace, Wordpress)', 'Miro, Jira, GA4'],
      },
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Product Designer (UX/UI)',
        company: 'qdq',
        description: 'Designing and launching digital products for clients and brands, conducting UX research and building interfaces that improved user experience and business metrics.',
        years: '2022 - 2025',
      },
      {
        role: 'Editorial & Visual Designer (freelance)',
        company: 'Aurora Dorada Ed.',
        description: 'Designing brand identity and layout for an independent publishing house — over 30 books and 40+ covers, managing each project end-to-end.',
        years: '2019 - now',
      },
      {
        role: 'Brand & Digital Designer',
        company: 'OCR Branding Agency',
        description: 'Creating brand identities and digital design for multiple clients, ensuring visual consistency across online and offline materials.',
        years: '2021 - 2022',
      },
    ],
    coursesTitle: 'Courses',
    courses: [
      {
        title: 'Design Systems PRO',
        institution: 'Shift+R',
        description: 'Shift+R is a continuing education and professional specialization program in digital design, focused on updating skills in Design Systems, collaborative design, accessibility, applied AI, automation, and new ways of working across design, product, and technology.',
        year: 'Ongoing',
      },
      {
        title: 'UX/UI + Front End Development',
        institution: 'Codespace Academy',
        description: "Double Master's Degree in Digital Product Design and Web Development. Grade: 9,3 / 10.",
        year: '2026',
      },
      {
        title: 'AutoLayout, Design Systems & AI Prototyping',
        institution: 'Espacio UX',
        description: 'AutoLayout, Design Systems & AI Prototyping in Figma.',
        year: '2026',
      },
      {
        title: 'Diseño de Producto Digital',
        institution: 'Instituto Tramontana',
        description: 'Design Graduate – Specialization in Digital Product Design.',
        year: '2025',
      },
    ],
  },
  es: {
    tabs: { overview: 'Resumen', experience: 'Experiencia', personal: 'Personal' },
    overview: {
      title: 'Un poco sobre mí',
      body: [
        '¡Hola! Soy Virginia, diseñadora multidisciplinar afincada en Valencia. Diseño productos digitales donde el oficio se encuentra con la estrategia, uniendo investigación de usuarios, diseño visual y una sólida base editorial construida durante más de 7 años.',
        'Con 3 años en product design y más de 7 en diseño gráfico y editorial, aporto una combinación poco habitual: el rigor de quien ha maquetado libros de 1.600 páginas y la curiosidad de quien siempre se pregunta qué problema merece realmente la pena resolver.',
        'También estudié diseño de moda, hago fotografía analógica y llevo una lista siempre creciente de exposiciones que quiero visitar, porque para mí el diseño nunca ha sido una sola disciplina.',
      ],
      badges: ['Afincada en Valencia, España', 'Remoto / Híbrido (Valencia / viajes a Madrid)'],
    },
    experiencePanel: {
      title: 'Una experiencia que suma',
      body: [
        'En qdq, lideré el diseño y lanzamiento de más de 5 productos digitales, colaboré con Más Móvil y Yoigo en experiencias de producto de marca, rediseñé más de 20 plantillas web en Duda CMS, y participé como representante de producto en un AI Lab interno — todo ello asumiendo un rol de diseñadora senior desde el primer día.',
        'En paralelo, llevo más de 6 años como diseñadora única para Aurora Dorada Ediciones — diseñando 40+ portadas, maquetando libros distribuidos en librerías y marketplaces nacionales e internacionales, y rediseñando su ecommerce desde cero.',
        'En OCR Branding, entregué diseño de marca y digital para landing pages, redes sociales y materiales impresos para varios clientes.',
      ],
      cta: 'Descargar CV / Currículum',
    },
    personalPanel: {
      title: 'Fuera del trabajo',
      body: [
        'Fuera del trabajo, me atrae el arte, la cultura y todo lo que se encuentra en la intersección entre imagen y significado. Hago fotografía analógica desde 2016, incluyendo un zine autopublicado y una colaboración con Lomography. También estudié diseño de moda durante un año, lo que solo profundizó mi obsesión por los sistemas visuales.',
        'Visito exposiciones con regularidad, leo mucho y mantengo vivos proyectos personales de fotografía, ilustración y diseño editorial. El diseño, para mí, nunca ha sido solo un trabajo, es la lente a través de la cual me relaciono con el mundo.',
        'También estoy explorando el diseño de experiencias de aprendizaje, porque enseñar y diseñar comparten el mismo reto: hacer que algo complejo se sienta sencillo. Creo que el mejor diseño viene de quienes se mantienen curiosos más allá de las pantallas, y por eso sigo explorando nuevas disciplinas y diciendo sí a proyectos que me dan un poco de miedo.',
      ],
      cta: 'Explorando fotografía analógica',
    },
    skillsTitle: 'Habilidades y herramientas',
    skillsGroups: [
      {
        title: 'Producto & UX',
        items: ['Investigación UX', 'Wireframing', 'Diseño UI', 'Design Systems', 'Prototipado', 'Accesibilidad'],
      },
      {
        title: 'Visual & Branding',
        items: ['Identidad de marca', 'Diseño editorial', 'Tipografía', 'Diseño de libros y portadas', 'Dirección de arte', 'Maquetación e impresión'],
      },
      {
        title: 'Learning Experience*',
        items: ['Diseño instruccional', 'Flujos de aprendizaje', 'Estructuración de contenidos', 'Metodología ADDIE', 'Herramientas eLearning'],
        footnote: '*Actualmente ampliando conocimientos en LXD',
      },
      {
        title: 'Web y herramientas',
        items: ['Figma, Framer', 'Adobe Suite (Ai, Ps, Id) | Affinity', 'Visual Studio - HTML, CSS, JS', 'Diseño responsive', 'CMS (Squarespace, Wordpress)', 'Miro, Jira, GA4'],
      },
    ],
    experienceTitle: 'Experiencia',
    experience: [
      {
        role: 'Product Designer (UX/UI)',
        company: 'qdq',
        description: 'Diseño y lanzamiento de productos digitales para clientes y marcas, con investigación UX y construcción de interfaces que mejoraron la experiencia de usuario y los indicadores de negocio.',
        years: '2022 - 2025',
      },
      {
        role: 'Diseñadora Editorial y Visual (freelance)',
        company: 'Aurora Dorada Ed.',
        description: 'Diseño de identidad de marca y maquetación para una editorial independiente — más de 30 libros y 40+ portadas, gestionando cada proyecto de principio a fin.',
        years: '2019 - act.',
      },
      {
        role: 'Diseñadora de Marca y Digital',
        company: 'OCR Branding Agency',
        description: 'Creación de identidades de marca y diseño digital para varios clientes, garantizando coherencia visual en materiales online y offline.',
        years: '2021 - 2022',
      },
    ],
    coursesTitle: 'Cursos',
    courses: [
      {
        title: 'Design Systems PRO',
        institution: 'Shift+R',
        description: 'Shift+R es un programa de formación continua y especialización profesional en diseño digital, orientado a la actualización de competencias en Design Systems, diseño colaborativo, accesibilidad, IA aplicada, automatización y nuevas formas de trabajo entre diseño, producto y tecnología.',
        year: 'En curso',
      },
      {
        title: 'UX/UI + Desarrollo Front End',
        institution: 'Codespace Academy',
        description: 'Doble Máster en Diseño de Producto Digital y Desarrollo Web. Nota final: 9,3 / 10.',
        year: '2026',
      },
      {
        title: 'AutoLayout, Design Systems & AI Prototyping',
        institution: 'Espacio UX',
        description: 'AutoLayout, Design Systems y Prototipado con IA en Figma.',
        year: '2026',
      },
      {
        title: 'Diseño de Producto Digital',
        institution: 'Instituto Tramontana',
        description: 'Graduada en Diseño – Especialización en Diseño de Producto Digital.',
        year: '2025',
      },
    ],
  },
} as const;
