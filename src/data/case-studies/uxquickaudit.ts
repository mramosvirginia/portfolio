import type { CaseStudyContent } from '../caseStudyTypes';

export const uxquickaudit: { en: CaseStudyContent; es: CaseStudyContent } = {
  en: {
    slug: 'uxquickaudit',
    filter: 'product',
    title: 'A self-built product for fast, evidence-based UX audits',
    heroImage: '/images/case-studies/uxquickaudit/cover.webp',
    heroCtaLabel: 'View Live Project',
    heroCtaHref: 'https://mramosvirginia.github.io/ux-quickaudit/',
    highlight: 'Full UX audit in under 10 minutes',
    overviewTitle: 'Project overview',
    metaLabels: { client: 'Client', industry: 'Industry', year: 'Year', services: 'Services' },
    meta: {
      client: 'Self-Initiated',
      industry: 'Productivity Software',
      year: '2026',
      services: 'Product Design, Web Development',
    },
    stackLabel: 'Stack',
    stack: ['Figma', 'VS Code', 'GitHub'],
    overviewIntro:
      'Designers often leave accessibility, heuristics, and design psychology for the end — or ignore them altogether. There is no quick tool to consult these foundations in a way that is contextualized to the type of product being designed. UX QuickAudit solves this: select the product type and focus, and get technical arguments ready to copy and paste into any document. No registration, no plugins, no friction — 96 unique audit points combining heuristics, WCAG accessibility, and design psychology.',
    overviewImages: [
      { src: '/images/case-studies/uxquickaudit/image2.webp' },
      { src: '/images/case-studies/uxquickaudit/image3.webp' },
    ],
    challengeTitle: 'Challenge',
    challengeBody:
      'The visual layer tends to grab all the attention in the design process — accessibility and usability are often postponed or omitted. Lack of contextualized tools: while NNGroup or W3C rules exist, they are not organized by product type or in a directly usable format. The goal was not just to inform, but to empower the designer to justify decisions with a technical base, not just an aesthetic one.',
    roleLabel: 'My Role',
    role: 'Product Design & Front-End Development · Solo: framework definition, UI design, build.',
    roleImages: [{ src: '/images/case-studies/uxquickaudit/image1.webp' }],
    objectives: {
      title: 'Objectives',
      businessLabel: 'Product Objectives',
      userLabel: 'User Objectives',
      business: [
        'Create a frictionless quick-reference tool',
        'Demonstrate UX criteria and frontend development capabilities',
        'Launch a functional and scalable product',
      ],
      user: [
        'Obtain relevant audit points for their specific product type in seconds',
        'Justify design decisions with a technical foundation in presentations',
        'Copy arguments directly without having to write them from scratch',
      ],
    },
    sections: [
      {
        id: 'tools',
        title: 'Tools',
        items: [
          'HTML, CSS, JavaScript: DOM manipulation and state management with JSON.',
          'Modular approach: Reusable and scalable component structure.',
          'Deployment: Published and available on GitHub Pages.',
        ],
      },
      {
        id: 'product-decisions',
        title: '1. Product Decisions',
        table: {
          headers: ['Identified Problem', 'Design Decision', 'Expected Impact'],
          rows: [
            [
              "Generic tools don't contextualize rules",
              '4 product types × 3 focuses = 96 unique audit points',
              'Relevant results for each design context',
            ],
            [
              'Reference sources are scattered',
              'Each point links directly to NNGroup, Laws of UX, or W3C',
              'Scientific basis and credibility for every argument',
            ],
            [
              'Output must be usable outside the tool',
              '"Copy to clipboard" report with a single click',
              'Real utility — the designer uses the output directly',
            ],
            [
              'Keep the project lightweight',
              'Vanilla JavaScript without frameworks — data.js + app.js architecture',
              'Instant performance and maintainable code',
            ],
          ],
        },
        paragraphs: [
          'Four product types were chosen (landing page, ecommerce, dashboard, and form) as they are the most common in the UX/UI market and have distinct usability needs.',
          'The three audit categories — heuristics & usability, accessibility (WCAG), and design psychology — cover the aspects most often overlooked in daily work.',
          'The copyable report was a core feature from the start to ensure real utility: not just a passive reference site, but a tool designers can use directly in presentations and documentation.',
        ],
      },
      {
        id: 'user-flow',
        title: '2. User Flow',
        labeledItems: [
          {
            label: 'Step 1 — Product Selection',
            body: 'The user chooses the product type (landing page, ecommerce, dashboard, or form). Each selection filters content instantly.',
          },
          {
            label: 'Step 2 — Focus Selection',
            body: 'The user selects the audit area. The combination of product + focus determines the content (8 specific cards per combination, totaling 96 points).',
          },
          {
            label: 'Step 3 — Card Review',
            body: '8 cards are dynamically rendered. The user marks relevant cards to be included in the report.',
          },
          {
            label: 'Step 4 — Report Generation',
            body: 'Clicking "Copy selected report" copies only the marked content to the clipboard, including category, title, and technical argument.',
          },
        ],
      },
      {
        id: 'cards-structure',
        title: '3. Cards Structure',
        items: [
          'Each card combines a usability rule applied to the product, relevant WCAG accessibility points, and a technical argument ready to copy.',
          'Sources link directly to Nielsen Norman Group, Laws of UX, and W3C.',
          "The structure is modular: adding new products or categories doesn't require rewriting the logic.",
        ],
      },
      {
        id: 'technical-development',
        title: '4. Technical Development',
        paragraphs: [
          'The biggest challenge was the filtering logic and responsive adaptation for all devices.',
          'A scalable component architecture in Vanilla JavaScript was chosen to keep the project lightweight and demonstrate core language mastery.',
        ],
        items: [
          'index.html — semantic site structure.',
          'style.css — main stylesheet with responsive design.',
          'app.js — interaction logic and DOM management.',
          'data.js — structured object with all audit content.',
          'assets/ — icons SVG and visual assets.',
          'README.md + LICENSE — documentation and MIT license.',
        ],
        labeledItems: [
          {
            label: 'Separation of Concerns',
            body: 'Content lives in data.js as an exported JS object, not hardcoded in the HTML. app.js listens for events and renders cards dynamically.',
          },
          {
            label: 'Performance',
            body: 'Data is loaded at the start, making transitions between products and focuses instant without asynchronous requests.',
          },
        ],
      },
      {
        id: 'key-deliverables',
        title: 'a) Key Deliverables',
        paragraphs: [
          'UX QuickAudit is a functional, live tool that allows auditing the user experience of any digital product in under 10 minutes, covering 96 evaluation points organized by category. Built entirely with vanilla HTML, CSS, and JavaScript without frameworks, it proves that design judgment and technical execution can coexist without relying on complex tech stacks.',
        ],
      },
      {
        id: 'design-learnings',
        title: 'b) Design Learnings',
        paragraphs: [
          "Building a tool that I use myself changed how I understand product design. The decision to avoid frameworks wasn't just technical—it was about design discipline: if you can't control it without React, you don't fully understand it. I also learned that documenting your own project is harder than documenting a client's: it's easy to assume context the reader doesn't have, forcing you to be more explicit and honest about the decisions made.",
        ],
      },
      {
        id: 'next-steps',
        title: 'c) Next Steps',
        items: [
          'Integrate analytics to measure real usage and validate whether the 96 evaluation points are evenly distributed or if certain categories are ignored.',
          'Develop an exportable report feature (PDF or JSON) to make audit results easily shareable with teams or clients.',
          'Add a finding prioritization layer (critical / high / enhancement) to make the output more actionable rather than purely diagnostic.',
        ],
      },
      {
        id: 'outcome',
        title: 'Outcome',
        paragraphs: [
          'Functional tool, published and accessible without installation or registration. Covers the 4 most frequent digital product types in the UX/UI market. Generates technical arguments based on NNGroup, Laws of UX, and W3C ready to use. Next iteration: Resource search engine, expanded directory, and analytics to measure real usage.',
        ],
        images: [
          { src: '/images/case-studies/uxquickaudit/image5.webp' },
          { src: '/images/case-studies/uxquickaudit/image4.png' },
        ],
      },
    ],
    viewMoreWork: 'View more work.',
  },
  es: {
    slug: 'uxquickaudit',
    filter: 'product',
    title: 'Un producto propio para auditorías UX rápidas y basadas en evidencia',
    heroImage: '/images/case-studies/uxquickaudit/cover.webp',
    heroCtaLabel: 'Ver proyecto en vivo',
    heroCtaHref: 'https://mramosvirginia.github.io/ux-quickaudit/',
    highlight: 'Auditoría UX completa en menos de 10 minutos',
    overviewTitle: 'Resumen del proyecto',
    metaLabels: { client: 'Cliente', industry: 'Industria', year: 'Año', services: 'Servicios' },
    meta: {
      client: 'Iniciativa propia',
      industry: 'Software de productividad',
      year: '2026',
      services: 'Diseño de Producto, Desarrollo web',
    },
    stackLabel: 'Stack',
    stack: ['Figma', 'VS Code', 'GitHub'],
    overviewIntro:
      'Los diseñadores suelen dejar la accesibilidad, la heurística y la psicología del diseño para el final —o directamente las ignoran. No existe una herramienta rápida para consultar estos fundamentos de forma contextualizada al tipo de producto que se está diseñando. UX QuickAudit resuelve esto: selecciona el tipo de producto y el foco, y obtén argumentos técnicos listos para copiar y pegar en cualquier documento. Sin registro, sin plugins, sin fricción — 96 puntos de auditoría únicos que combinan heurística, accesibilidad WCAG y psicología del diseño.',
    overviewImages: [
      { src: '/images/case-studies/uxquickaudit/image2.webp' },
      { src: '/images/case-studies/uxquickaudit/image3.webp' },
    ],
    challengeTitle: 'Reto',
    challengeBody:
      'La capa visual suele acaparar toda la atención en el proceso de diseño —la accesibilidad y la usabilidad a menudo se posponen o se omiten. Falta de herramientas contextualizadas: aunque existen las reglas de NNGroup o W3C, no están organizadas por tipo de producto ni en un formato directamente utilizable. El objetivo no era solo informar, sino capacitar al diseñador para justificar decisiones con una base técnica, no solo estética.',
    roleLabel: 'Mi rol',
    role: 'Diseño de producto y desarrollo Front-End · En solitario: definición del framework, diseño de UI, construcción.',
    roleImages: [{ src: '/images/case-studies/uxquickaudit/image1.webp' }],
    objectives: {
      title: 'Objetivos',
      businessLabel: 'Objetivos de producto',
      userLabel: 'Objetivos de usuario',
      business: [
        'Crear una herramienta de consulta rápida sin fricción',
        'Demostrar criterio UX y capacidades de desarrollo frontend',
        'Lanzar un producto funcional y escalable',
      ],
      user: [
        'Obtener puntos de auditoría relevantes para su tipo de producto en segundos',
        'Justificar decisiones de diseño con una base técnica en presentaciones',
        'Copiar argumentos directamente sin tener que redactarlos desde cero',
      ],
    },
    sections: [
      {
        id: 'tools',
        title: 'Herramientas',
        items: [
          'HTML, CSS, JavaScript: manipulación del DOM y gestión de estado con JSON.',
          'Enfoque modular: estructura de componentes reutilizable y escalable.',
          'Despliegue: publicado y disponible en GitHub Pages.',
        ],
      },
      {
        id: 'product-decisions',
        title: '1. Decisiones de producto',
        table: {
          headers: ['Problema identificado', 'Decisión de diseño', 'Impacto esperado'],
          rows: [
            [
              'Las herramientas genéricas no contextualizan las reglas',
              '4 tipos de producto × 3 focos = 96 puntos de auditoría únicos',
              'Resultados relevantes para cada contexto de diseño',
            ],
            [
              'Las fuentes de referencia están dispersas',
              'Cada punto enlaza directamente a NNGroup, Laws of UX o W3C',
              'Base científica y credibilidad para cada argumento',
            ],
            [
              'El resultado debe poder usarse fuera de la herramienta',
              'Informe "Copiar al portapapeles" con un solo clic',
              'Utilidad real — el diseñador usa el resultado directamente',
            ],
            [
              'Mantener el proyecto ligero',
              'JavaScript puro sin frameworks — arquitectura data.js + app.js',
              'Rendimiento instantáneo y código mantenible',
            ],
          ],
        },
        paragraphs: [
          'Se eligieron cuatro tipos de producto (landing page, ecommerce, dashboard y formulario) por ser los más comunes en el mercado UX/UI y tener necesidades de usabilidad distintas.',
          'Las tres categorías de auditoría —heurística y usabilidad, accesibilidad (WCAG) y psicología del diseño— cubren los aspectos que más se pasan por alto en el día a día.',
          'El informe copiable fue una funcionalidad central desde el inicio para garantizar utilidad real: no solo un sitio de referencia pasivo, sino una herramienta que los diseñadores pueden usar directamente en presentaciones y documentación.',
        ],
      },
      {
        id: 'user-flow',
        title: '2. Flujo de usuario',
        labeledItems: [
          {
            label: 'Paso 1 — Selección de producto',
            body: 'El usuario elige el tipo de producto (landing page, ecommerce, dashboard o formulario). Cada selección filtra el contenido al instante.',
          },
          {
            label: 'Paso 2 — Selección de foco',
            body: 'El usuario selecciona el área de auditoría. La combinación de producto + foco determina el contenido (8 tarjetas específicas por combinación, 96 puntos en total).',
          },
          {
            label: 'Paso 3 — Revisión de tarjetas',
            body: 'Se renderizan 8 tarjetas dinámicamente. El usuario marca las relevantes para incluirlas en el informe.',
          },
          {
            label: 'Paso 4 — Generación del informe',
            body: 'Al hacer clic en "Copiar informe seleccionado" se copia solo el contenido marcado al portapapeles, incluyendo categoría, título y argumento técnico.',
          },
        ],
      },
      {
        id: 'cards-structure',
        title: '3. Estructura de las tarjetas',
        items: [
          'Cada tarjeta combina una regla de usabilidad aplicada al producto, puntos relevantes de accesibilidad WCAG y un argumento técnico listo para copiar.',
          'Las fuentes enlazan directamente a Nielsen Norman Group, Laws of UX y W3C.',
          'La estructura es modular: añadir nuevos productos o categorías no requiere reescribir la lógica.',
        ],
      },
      {
        id: 'technical-development',
        title: '4. Desarrollo técnico',
        paragraphs: [
          'El mayor reto fue la lógica de filtrado y la adaptación responsive para todos los dispositivos.',
          'Se eligió una arquitectura de componentes escalable en JavaScript puro para mantener el proyecto ligero y demostrar dominio del lenguaje base.',
        ],
        items: [
          'index.html — estructura semántica del sitio.',
          'style.css — hoja de estilos principal con diseño responsive.',
          'app.js — lógica de interacción y gestión del DOM.',
          'data.js — objeto estructurado con todo el contenido de auditoría.',
          'assets/ — iconos SVG y recursos visuales.',
          'README.md + LICENSE — documentación y licencia MIT.',
        ],
        labeledItems: [
          {
            label: 'Separación de responsabilidades',
            body: 'El contenido vive en data.js como un objeto JS exportado, no está hardcodeado en el HTML. app.js escucha eventos y renderiza las tarjetas dinámicamente.',
          },
          {
            label: 'Rendimiento',
            body: 'Los datos se cargan al inicio, haciendo que las transiciones entre productos y focos sean instantáneas sin peticiones asíncronas.',
          },
        ],
      },
      {
        id: 'key-deliverables',
        title: 'a) Entregables clave',
        paragraphs: [
          'UX QuickAudit es una herramienta funcional y en producción que permite auditar la experiencia de usuario de cualquier producto digital en menos de 10 minutos, cubriendo 96 puntos de evaluación organizados por categoría. Construida enteramente con HTML, CSS y JavaScript puro sin frameworks, demuestra que el criterio de diseño y la ejecución técnica pueden convivir sin depender de stacks tecnológicos complejos.',
        ],
      },
      {
        id: 'design-learnings',
        title: 'b) Aprendizajes de diseño',
        paragraphs: [
          'Construir una herramienta que yo misma uso cambió mi forma de entender el diseño de producto. La decisión de evitar frameworks no fue solo técnica —fue una cuestión de disciplina de diseño: si no puedes controlarlo sin React, no lo entiendes del todo. También aprendí que documentar tu propio proyecto es más difícil que documentar el de un cliente: es fácil asumir contexto que el lector no tiene, lo que te obliga a ser más explícita y honesta sobre las decisiones tomadas.',
        ],
      },
      {
        id: 'next-steps',
        title: 'c) Próximos pasos',
        items: [
          'Integrar analítica para medir el uso real y validar si los 96 puntos de evaluación se distribuyen de forma equilibrada o si ciertas categorías se ignoran.',
          'Desarrollar una función de informe exportable (PDF o JSON) para que los resultados de auditoría se puedan compartir fácilmente con equipos o clientes.',
          'Añadir una capa de priorización de hallazgos (crítico / alto / mejora) para que el resultado sea más accionable y no solo diagnóstico.',
        ],
      },
      {
        id: 'outcome',
        title: 'Resultado',
        paragraphs: [
          'Herramienta funcional, publicada y accesible sin instalación ni registro. Cubre los 4 tipos de producto digital más frecuentes en el mercado UX/UI. Genera argumentos técnicos basados en NNGroup, Laws of UX y W3C listos para usar. Próxima iteración: buscador de recursos, directorio ampliado y analítica para medir el uso real.',
        ],
        images: [
          { src: '/images/case-studies/uxquickaudit/image5.webp' },
          { src: '/images/case-studies/uxquickaudit/image4.png' },
        ],
      },
    ],
    viewMoreWork: 'Ver más trabajo.',
  },
};
