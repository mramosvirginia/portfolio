import type { CaseStudyContent } from '../caseStudyTypes';

export const webia: { en: CaseStudyContent; es: CaseStudyContent } = {
  en: {
    slug: 'webia',
    filter: 'product',
    title: 'AI-powered web creation engine generating complete sites from three inputs',
    heroImage: '/images/case-studies/webia/cover.webp',
    heroCtaLabel: 'View Live Project',
    heroCtaHref: 'https://landingia.qdq.com/',
    highlight: 'MWC 2024, sold to partners',
    overviewTitle: 'Project overview',
    metaLabels: { client: 'Client', industry: 'Industry', year: 'Year', services: 'Services' },
    meta: {
      client: 'qdq',
      industry: 'AI & Automation',
      year: '2024-2025',
      services: 'Product Design, AI',
    },
    stackLabel: 'Stack',
    stack: ['Figma', 'Miro', 'OpenAI/ChatGPT', 'eformless', 'GA4'],
    overviewIntro:
      "Freelancers and small businesses without a digital presence face a simple problem: building a website is slow, expensive, and requires technical knowledge they don't have. This AI-powered tool generates a complete site — copy, images, and structure — from just three data points. A real product in production, presented at Mobile World Congress 2024.",
    overviewImages: [
      { src: '/images/case-studies/webia/image1.jpg' },
      { src: '/images/case-studies/webia/image2.webp' },
    ],
    challengeTitle: 'Challenge',
    challengeBody:
      "Creating a website requires time, money, and technical skills that most freelancers don't possess. Existing tools are either too complex or require extensive manual configuration. The goal was to reduce this process to minutes — three input fields, one website ready to publish.",
    roleLabel: 'My Role',
    role: 'Product Design UX/UI · Feature definition, interface design, internal usability testing, in collaboration with the development team.',
    roleImages: [{ src: '/images/case-studies/webia/image3.webp' }],
    objectives: {
      title: 'Objectives',
      businessLabel: 'Business Objectives',
      userLabel: 'User Objectives',
      business: [
        'Increase product activation rates.',
        'Reduce the generation funnel time.',
        'Scale the product as a white-label model for third parties.',
        'Freemium model — free trial, publishing from €5-6/month.',
      ],
      user: [
        'Generate a website without technical knowledge.',
        'Obtain a clean, business-tailored result in minutes.',
        'Easily edit the result without external help.',
        'Maintain an active digital presence without investing significant time or money.',
      ],
    },
    sections: [
      {
        id: 'exploration',
        title: '1. Exploration & Context',
        items: [
          'Targeted at freelancers and small businesses with no digital presence or technical background.',
          'Analyzed no-code tools and web generators to identify simplification opportunities.',
          'Coordinated with development to ensure the AI (ChatGPT) returned structured results consistent with the design.',
          'Defined business categories, image types, and copy structures per template.',
        ],
        video: '/images/case-studies/webia/video4.mp4',
      },
      {
        id: 'flow-design',
        title: '2. Flow Design & Initial Decisions',
        table: {
          headers: ['Identified Problem', 'Design Decision', 'Expected Impact'],
          rows: [
            [
              'High drop-off rate on the first screen (detected via analytics)',
              'Removed intro screen — reduced flow from 3 to 2 steps',
              'Direct improvement in funnel completion rate',
            ],
            [
              "Users didn't know how to edit their site via the CMS (Duda)",
              'Integrated editing guide added to the activation flow',
              'Reduced post-generation friction and support calls',
            ],
            [
              'Break in the flow: publishing was required before editing, but not signaled',
              'Added a visible "Publish" button at the top',
              'Linear flow with zero screen abandonment',
            ],
            [
              'Product was difficult to sell as a standalone',
              'Created a dynamic brand component adaptable by partner',
              'Scalability — marketed to partners like CE Consulting and AECEM',
            ],
          ],
        },
        paragraphs: [
          'The biggest challenge was coordinating with developers to ensure the AI returned coherent results based on design definitions.',
          'We worked template-by-template to provide a solid foundation for the AI to generate content in each section.',
          'Business categories, color ranges by sector, and image types were precisely defined to ensure the generated output was always relevant.',
          "Users could regenerate up to twice or edit the content directly if they weren't satisfied.",
        ],
        images: [{ src: '/images/case-studies/webia/image4.webp', caption: 'Business website results generated with Web IA' }],
      },
      {
        id: 'key-iterations',
        title: '3. Key Iterations',
        labeledItems: [
          {
            label: 'Analytics-driven',
            body: 'Dropped the welcome screen after detecting a massive bounce rate, streamlining the flow to just 2 screens.',
          },
          {
            label: 'Usability-driven',
            body: 'Added an integrated editing manual within the flow after realizing users struggled with the CMS (Duda) post-generation.',
          },
          {
            label: 'Flow-optimization',
            body: 'Signaled the "Publish" action clearly to avoid the previous bottleneck where users felt stuck before being able to edit.',
          },
        ],
      },
      {
        id: 'scalability',
        title: '4. Scalability',
        paragraphs: [
          'The side brand block was designed as a dynamic component, allowing partners to swap colors, images, and logos without a total redesign.',
          'Successfully commercialized with partners such as CE Consulting and AECEM.',
        ],
      },
      {
        id: 'key-deliverables',
        title: 'a) Key Deliverables',
        paragraphs: [
          'Presented at MWC 2024 to hundreds of attendees who completed the flow live, the product proved that just three data points are enough to generate a ready-to-publish website. The conversion funnel was reduced from 3 to 2 screens based on real data analysis, and post-generation friction was resolved through an integrated guided flow. The dynamic brand component allowed the product to scale across partners such as CE Consulting and AECEM.',
        ],
        images: [
          { src: '/images/case-studies/webia/image6.webp' },
          { src: '/images/case-studies/webia/image5.webp' },
        ],
      },
      {
        id: 'design-learnings',
        title: 'b) Design Learnings',
        paragraphs: [
          "Designing an AI-driven product forces you to think about output constraints, not just user inputs. The most critical decision wasn't about the interface, but coordination: precisely defining business categories, color palettes, and image types so the AI generated output consistent with the design system. What seemed like a development issue was actually a system design challenge. It also confirmed that analytics are non-negotiable—a high-bounce welcome screen was the exact signal that unlocked the funnel's most significant improvement.",
        ],
      },
      {
        id: 'next-steps',
        title: 'c) Next Steps',
        items: [
          'Conduct formal usability testing with real freelancers to identify friction points that quantitative analytics miss.',
          'Explore progressive customization: allowing users to adjust color palettes, typography, and copy tone without leaving the generation flow.',
          "Develop a post-publishing metrics dashboard so users can track their website's performance directly within the platform.",
        ],
      },
      {
        id: 'outcome',
        title: 'Outcome',
        paragraphs: [
          'Presented at MWC 2024 — attendees completed the flow live and praised the speed of the results. Funnel reduced from 3 to 2 screens based on data analysis. Major post-generation friction solved via an integrated guide. Scalable product actively marketed and sold to partners.',
        ],
      },
    ],
    viewMoreWork: 'View more work.',
  },
  es: {
    slug: 'webia',
    filter: 'product',
    title: 'Motor de creación web con IA que genera sitios completos a partir de tres datos',
    heroImage: '/images/case-studies/webia/cover.webp',
    heroCtaLabel: 'Ver proyecto en vivo',
    heroCtaHref: 'https://landingia.qdq.com/',
    highlight: 'MWC 2024, vendido a partners',
    overviewTitle: 'Resumen del proyecto',
    metaLabels: { client: 'Cliente', industry: 'Industria', year: 'Año', services: 'Servicios' },
    meta: {
      client: 'qdq',
      industry: 'IA y automatización',
      year: '2024-2025',
      services: 'Diseño de Producto, IA',
    },
    stackLabel: 'Stack',
    stack: ['Figma', 'Miro', 'OpenAI/ChatGPT', 'eformless', 'GA4'],
    overviewIntro:
      'Los autónomos y pequeños negocios sin presencia digital se enfrentan a un problema simple: crear una web es lento, caro y requiere conocimientos técnicos que no tienen. Esta herramienta con IA genera un sitio completo —copy, imágenes y estructura— a partir de solo tres datos. Un producto real en producción, presentado en el Mobile World Congress 2024.',
    overviewImages: [
      { src: '/images/case-studies/webia/image1.jpg' },
      { src: '/images/case-studies/webia/image2.webp' },
    ],
    challengeTitle: 'Reto',
    challengeBody:
      'Crear una web requiere tiempo, dinero y habilidades técnicas que la mayoría de autónomos no tiene. Las herramientas existentes son demasiado complejas o requieren una configuración manual extensa. El objetivo era reducir este proceso a minutos: tres campos de entrada, una web lista para publicar.',
    roleLabel: 'Mi rol',
    role: 'Product Design UX/UI · Definición de funcionalidades, diseño de interfaz, tests de usabilidad internos, en colaboración con el equipo de desarrollo.',
    roleImages: [{ src: '/images/case-studies/webia/image3.webp' }],
    objectives: {
      title: 'Objetivos',
      businessLabel: 'Objetivos de negocio',
      userLabel: 'Objetivos de usuario',
      business: [
        'Aumentar las tasas de activación del producto.',
        'Reducir el tiempo del embudo de generación.',
        'Escalar el producto como modelo white-label para terceros.',
        'Modelo freemium — prueba gratuita, publicación desde 5-6€/mes.',
      ],
      user: [
        'Generar una web sin conocimientos técnicos.',
        'Obtener un resultado limpio y adaptado al negocio en minutos.',
        'Editar el resultado fácilmente sin ayuda externa.',
        'Mantener una presencia digital activa sin invertir mucho tiempo ni dinero.',
      ],
    },
    sections: [
      {
        id: 'exploration',
        title: '1. Exploración y contexto',
        items: [
          'Dirigido a autónomos y pequeños negocios sin presencia digital ni conocimientos técnicos.',
          'Se analizaron herramientas no-code y generadores web para identificar oportunidades de simplificación.',
          'Coordinación con desarrollo para asegurar que la IA (ChatGPT) devolviera resultados estructurados y coherentes con el diseño.',
          'Se definieron categorías de negocio, tipos de imagen y estructuras de copy por plantilla.',
        ],
        video: '/images/case-studies/webia/video4.mp4',
      },
      {
        id: 'flow-design',
        title: '2. Diseño del flujo y decisiones iniciales',
        table: {
          headers: ['Problema identificado', 'Decisión de diseño', 'Impacto esperado'],
          rows: [
            [
              'Alta tasa de abandono en la primera pantalla (detectada vía analítica)',
              'Se eliminó la pantalla de introducción — flujo reducido de 3 a 2 pasos',
              'Mejora directa en la tasa de finalización del embudo',
            ],
            [
              'Los usuarios no sabían editar su web a través del CMS (Duda)',
              'Se integró una guía de edición en el flujo de activación',
              'Reducción de la fricción post-generación y de las llamadas a soporte',
            ],
            [
              'Ruptura en el flujo: había que publicar antes de poder editar, sin indicarlo',
              'Se añadió un botón visible de "Publicar" en la parte superior',
              'Flujo lineal sin abandono de pantallas',
            ],
            [
              'El producto era difícil de vender como algo independiente',
              'Se creó un componente de marca dinámico adaptable por partner',
              'Escalabilidad — comercializado con partners como CE Consulting y AECEM',
            ],
          ],
        },
        paragraphs: [
          'El mayor reto fue coordinarse con desarrollo para que la IA devolviera resultados coherentes según las definiciones de diseño.',
          'Trabajamos plantilla a plantilla para dar una base sólida que permitiera a la IA generar contenido en cada sección.',
          'Se definieron con precisión las categorías de negocio, rangos de color por sector y tipos de imagen para que el resultado generado fuera siempre relevante.',
          'Los usuarios podían regenerar el resultado hasta dos veces o editar el contenido directamente si no quedaban satisfechos.',
        ],
        images: [{ src: '/images/case-studies/webia/image4.webp', caption: 'Resultados de webs de negocio generadas con Web IA' }],
      },
      {
        id: 'key-iterations',
        title: '3. Iteraciones clave',
        labeledItems: [
          {
            label: 'Basada en analítica',
            body: 'Se eliminó la pantalla de bienvenida tras detectar una tasa de rebote muy alta, simplificando el flujo a solo 2 pantallas.',
          },
          {
            label: 'Basada en usabilidad',
            body: 'Se añadió un manual de edición integrado en el flujo al detectar que los usuarios tenían dificultades con el CMS (Duda) tras la generación.',
          },
          {
            label: 'Optimización de flujo',
            body: 'Se señalizó claramente la acción de "Publicar" para evitar el cuello de botella anterior, donde los usuarios se quedaban bloqueados antes de poder editar.',
          },
        ],
      },
      {
        id: 'scalability',
        title: '4. Escalabilidad',
        paragraphs: [
          'El bloque de marca lateral se diseñó como un componente dinámico, permitiendo a los partners cambiar colores, imágenes y logos sin un rediseño completo.',
          'Comercializado con éxito con partners como CE Consulting y AECEM.',
        ],
      },
      {
        id: 'key-deliverables',
        title: 'a) Entregables clave',
        paragraphs: [
          'Presentado en el MWC 2024 ante cientos de asistentes que completaron el flujo en directo, el producto demostró que solo tres datos bastan para generar una web lista para publicar. El embudo de conversión se redujo de 3 a 2 pantallas gracias al análisis de datos reales, y la fricción post-generación se resolvió mediante un flujo guiado integrado. El componente de marca dinámico permitió escalar el producto entre partners como CE Consulting y AECEM.',
        ],
        images: [
          { src: '/images/case-studies/webia/image6.webp' },
          { src: '/images/case-studies/webia/image5.webp' },
        ],
      },
      {
        id: 'design-learnings',
        title: 'b) Aprendizajes de diseño',
        paragraphs: [
          'Diseñar un producto basado en IA obliga a pensar en las restricciones del resultado, no solo en las entradas del usuario. La decisión más crítica no fue sobre la interfaz, sino sobre la coordinación: definir con precisión las categorías de negocio, paletas de color y tipos de imagen para que la IA generara un resultado coherente con el sistema de diseño. Lo que parecía un problema de desarrollo era en realidad un reto de diseño de sistema. También confirmó que la analítica no es negociable: una pantalla de bienvenida con alta tasa de rebote fue la señal exacta que desbloqueó la mejora más importante del embudo.',
        ],
      },
      {
        id: 'next-steps',
        title: 'c) Próximos pasos',
        items: [
          'Realizar tests de usabilidad formales con autónomos reales para identificar puntos de fricción que la analítica cuantitativa no detecta.',
          'Explorar personalización progresiva: permitir a los usuarios ajustar paletas de color, tipografía y tono de copy sin salir del flujo de generación.',
          'Desarrollar un panel de métricas post-publicación para que los usuarios puedan seguir el rendimiento de su web directamente en la plataforma.',
        ],
      },
      {
        id: 'outcome',
        title: 'Resultado',
        paragraphs: [
          'Presentado en el MWC 2024 — los asistentes completaron el flujo en directo y valoraron la rapidez de los resultados. Embudo reducido de 3 a 2 pantallas gracias al análisis de datos. Resuelta la principal fricción post-generación mediante una guía integrada. Producto escalable comercializado activamente con partners.',
        ],
      },
    ],
    viewMoreWork: 'Ver más trabajo.',
  },
};
