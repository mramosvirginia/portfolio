import type { CaseStudyContent } from '../caseStudyTypes';

export const landora: { en: CaseStudyContent; es: CaseStudyContent } = {
  en: {
    slug: 'landora',
    filter: 'product',
    title: 'End-to-end product design for a rural experience platform',
    heroImage: '/images/case-studies/landora/cover.webp',
    heroCtaLabel: 'View Live Project',
    heroCtaHref:
      'https://www.figma.com/proto/xSsAgNWjrqVlo0lg0XpLdm/Landora-App-%7C-UI-Design?node-id=1-4&p=f&viewport=-77%2C89%2C0.41&t=kceyZGHaanXrLbuZ-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&hide-ui=1',
    highlight: '213 token inconsistencies audited & fixed',
    overviewTitle: 'Project overview',
    metaLabels: { client: 'Client', industry: 'Industry', year: 'Year', services: 'Services' },
    meta: {
      client: 'Self-Initiated',
      industry: 'Travel / Rural Tourism',
      year: '2026',
      services: 'Product Design, Design Systems',
    },
    stackLabel: 'Stack',
    stack: ['Figma', 'FigJam', 'Notion', 'Figma Tokens'],
    overviewIntro:
      "Rural experiences in Spain exist but are scattered and difficult to find or book. Current platforms fail to combine good UX with a rural focus and local community support — the booking process is often confusing and visual information is scarce. Landora centralizes the discovery and booking of rural experiences — cultural, gastronomic, and natural — in a simple, accessible way that supports local communities.",
    overviewImages: [
      { src: '/images/case-studies/landora/image3.avif' },
      { src: '/images/case-studies/landora/image2.png' },
    ],
    challengeTitle: 'Challenge',
    challengeBody:
      'Rural areas are depopulating while cities face mass tourism — there is a high demand for unique experiences but no centralized platform to host them. The booking process in existing options is often confusing, outdated, or incomplete. Users find themselves searching multiple sites without finding a unified solution.',
    roleLabel: 'My Role',
    role: 'Product Design & Design System · Solo, end-to-end: research, IA, UI design, accessibility (WCAG AA), dev handoff.',
    roleImages: [{ src: '/images/case-studies/landora/image4.avif' }],
    objectives: {
      title: 'Objectives',
      businessLabel: 'Product Objectives',
      userLabel: 'User Objectives',
      business: [
        'Increase booking conversion rates.',
        'Position Landora as a benchmark for rural tourism.',
        'Support local communities by connecting them with urban users.',
        'Scale the experience catalog by category.',
      ],
      user: [
        'Book rural experiences quickly and without friction.',
        'Find verified experiences with reliable visual information.',
        'Discover experiences on a single platform without cross-searching.',
        'Trust the platform before committing to payment.',
      ],
    },
    sections: [
      {
        id: 'research',
        title: '1. Research',
        paragraphs: [
          'Five in-depth audio interviews were conducted, with full transcription and analysis, with participants aged between 25 and 60 from diverse backgrounds. The questions covered general booking habits, barriers to rural experiences, previous experiences, and the "ideal app." This was supplemented by a Google Forms survey with approximately 20 responses from users with different profiles.',
          "Landora's opportunity: high-quality UX + rural focus + support for the local community, all on one platform.",
        ],
        table: {
          headers: ['Platform', 'Strength', 'Weakness'],
          rows: [
            ['Ecotur', 'Informative', 'Not geared towards direct bookings'],
            ['Airbnb', 'Excellent UX and bookings', 'No rural focus or community impact'],
            ['Rusticae', 'Quality editorial selection', 'Exclusive focus, no community value'],
          ],
        },
        items: [
          'Key insight — Booking Complexity',
          'Key insight — Visual Trust',
          'Key insight — Fragmented Search',
        ],
        images: [
          { src: '/images/case-studies/landora/image5.webp' },
          { src: '/images/case-studies/landora/image6.webp' },
        ],
      },
      {
        id: 'definition',
        title: '2. Definition',
        items: [
          'User Personas and User Journeys.',
          'User flows for exploration, details, and booking.',
          'Information Architecture (IA) to organize categories and experiences.',
          'Prioritization of core features.',
        ],
        images: [
          { src: '/images/case-studies/landora/image7.webp' },
          { src: '/images/case-studies/landora/image8.avif' },
          { src: '/images/case-studies/landora/image9.avif' },
        ],
      },
      {
        id: 'design',
        title: '3. Design',
        paragraphs: [
          'The process began with low-fidelity wireframes to validate the structure before investing in the visual system. Once the architecture and flows were validated, interactive prototypes were developed in Figma, and the visual system was built on three pillars: clarity, hierarchy, and accessibility.',
        ],
        items: [
          'Low-fidelity wireframes to validate structure.',
          'Interactive prototypes in Figma.',
          'Visual system based on clarity, hierarchy, and accessibility.',
        ],
        images: [
          { src: '/images/case-studies/landora/image10.webp' },
          { src: '/images/case-studies/landora/image11.webp' },
        ],
      },
      {
        id: 'design-decisions',
        title: 'Design Decisions',
        table: {
          headers: ['Identified Problem', 'Design Decision', 'Expected Impact'],
          rows: [
            [
              'Overly complex booking process',
              '1 configuration screen + 3-step checkout with persistent info',
              'Reduced friction and abandonment rates',
            ],
            [
              'Lack of reliable visual info',
              'Booking card with swipeable gallery + verified reviews',
              'Increased user trust before confirmation',
            ],
            [
              'Fragmented search experience',
              'Centralized platform with clear category-based browsing',
              'Reduced search time and improved task completion',
            ],
            [
              "Purple brand color didn't meet WCAG 2.1 AA",
              'Separated brand color from interaction color — calibrated level 600 lilac primary ramp',
              'Full accessibility without sacrificing visual identity',
            ],
          ],
        },
        paragraphs: [
          "Purple was chosen over green — it's more distinctive and aligns with the user's motivation: escaping routine and seeking meaningful experiences.",
          'The original purple did not meet WCAG 2.1 AA (minimum 4.5:1 ratio), verified via Figma plugin. The original purple was reserved for decorative branding, and the primary lilac ramp was calibrated to level 600 for all interactive elements — meeting the 4.5:1 ratio for all text and interaction use cases.',
        ],
        items: [
          'Pre-checkout screen: date, time, and guest selection with real-time cost visualization.',
          '3-step checkout: order summary, personal details, and payment.',
          'Activity information remains visible throughout the entire process.',
          'Cancellation policy and support notice included at the payment step.',
          'Component library published in Figma as an independent library, separate from the screen layout file.',
          'Token architecture structured in two layers — primitive values and semantic aliases — covering color, typography, spacing, padding, radius, and grid.',
          'Accessible color palette, verified against WCAG 2.1 AA contrast standards.',
          '20+ components: buttons, text fields, calendar selector, nav bar, cards, stepper, checkout summary, and modular cards.',
          'Fully documented for developer handoff — audited for consistency and published as a standalone documentation site.',
        ],
        images: [{ src: '/images/case-studies/landora/image12.webp' }],
      },
      {
        id: 'handoff-documentation',
        title: 'Handoff & DS Documentation',
        paragraphs: [
          "Beyond the interface design, I treated Landora's UI kit as a system meant to be handed off, not just a set of screens. That meant auditing every token for consistency, structuring a two-layer token architecture, and documenting accessibility compliance before calling it done.",
          "Color was already defined as Figma Styles, but spacing, padding, radius, and typography weren't yet structured as reusable tokens. I converted the color styles to Variables, then built the remaining scales from scratch.",
          'Rather than inventing an arbitrary scale, I scanned actual usage across the component library to see what values were already in play — surfacing a clear core pattern in spacing and padding (4, 8, 12, 16, 24, 32, 64) alongside dozens of one-off values that didn\'t belong. That core pattern became the primitive scale.',
          'Before generating any handoff documentation, I ran a token audit across the full component library rather than trusting it was already consistent. The audit surfaced real inconsistencies: 213 spacing and padding values, a 6px and 10px pattern, and corner radius outliers.',
          "Instead of documenting the system as it stood, I used the audit to enforce a clean 4px-based scale — resolving each outlier by context rather than blindly rounding to the nearest value. For example, a tab bar container's radius (20px) was raised to 24px to match its larger surface area, keeping it visually distinct from smaller interactive elements at 8px. Decorative elements outside the actual design system, like a mockup's status bar battery icon, were deliberately excluded from the token scale rather than forced into it.",
          'With tokens and components audited and cleanly named, I generated a standalone documentation site in Zeroheight — covering foundations (color, typography, spacing, padding, radius), component specs (anatomy, variants, states), and accessibility guidelines — built directly from the Figma file for accurate developer handoff.',
        ],
      },
      {
        id: 'key-deliverables',
        title: 'a) Key Deliverables',
        paragraphs: [
          'The final design delivers a cohesive digital solution combining a solid visual system with a clear, accessible booking experience. Through a streamlined flow and design decisions justified by real research, Landora offers users a trustworthy platform to manage bookings with minimal cognitive effort — backed by a fully documented, production-ready design system with primitive and semantic tokens, ready for developer handoff.',
        ],
      },
      {
        id: 'design-learnings',
        title: 'b) Design Learnings',
        paragraphs: [
          "Consistency isn't something you get right by construction — it erodes through hundreds of small manual adjustments, even in a careful process. Auditing the token system after the fact, rather than assuming it was clean, surfaced real inconsistencies I wouldn't have caught otherwise. And not every irregular value is a mistake to fix: distinguishing a legitimate design decision (a larger radius on a bigger surface) from actual drift (a decimal value from resizing by hand) required judgment, not just automation.",
        ],
      },
      {
        id: 'next-steps',
        title: 'c) Next Steps',
        paragraphs: ['If the product were developed beyond the prototype, the following improvements would be explored:'],
        items: [
          'Conduct usability testing with real users to validate booking flows and uncover undetected friction points in the design process.',
          'Extend the semantic token layer to cover elevation and motion (shadows, transition timing), completing the system beyond color, spacing, and typography.',
          'Develop the native mobile version, prioritizing quick booking flows and active reservation management.',
        ],
      },
      {
        id: 'outcome',
        title: 'Outcome',
        paragraphs: [
          'Identified a real market opportunity: no existing platform combines high-quality UX with a rural focus and community support. Simplified the booking process to 1 configuration screen + 3 checkout steps with persistent contextual information. Accessible color system: level 600 primary lilac ramp to comply with WCAG 2.1 AA (> 4.5:1 ratio). UI Kit documented as a production-ready design system — 20+ components, primitive and semantic tokens, audited for consistency and published as a standalone handoff library. Fully testable interactive prototype in Figma.',
        ],
        images: [{ src: '/images/case-studies/landora/image13.webp' }],
      },
    ],
    viewMoreWork: 'View more work.',
  },
  es: {
    slug: 'landora',
    filter: 'product',
    title: 'Diseño de producto end-to-end para una plataforma de experiencias rurales',
    heroImage: '/images/case-studies/landora/cover.webp',
    heroCtaLabel: 'Ver proyecto en vivo',
    heroCtaHref:
      'https://www.figma.com/proto/xSsAgNWjrqVlo0lg0XpLdm/Landora-App-%7C-UI-Design?node-id=1-4&p=f&viewport=-77%2C89%2C0.41&t=kceyZGHaanXrLbuZ-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&hide-ui=1',
    highlight: '213 inconsistencias de tokens auditadas y corregidas',
    overviewTitle: 'Resumen del proyecto',
    metaLabels: { client: 'Cliente', industry: 'Industria', year: 'Año', services: 'Servicios' },
    meta: {
      client: 'Iniciativa propia',
      industry: 'Viajes / Turismo rural',
      year: '2026',
      services: 'Diseño de Producto, Design Systems',
    },
    stackLabel: 'Stack',
    stack: ['Figma', 'FigJam', 'Notion', 'Figma Tokens'],
    overviewIntro:
      'Las experiencias rurales en España existen pero están dispersas y son difíciles de encontrar o reservar. Las plataformas actuales no combinan una buena UX con un enfoque rural y apoyo a la comunidad local —el proceso de reserva suele ser confuso y la información visual escasa. Landora centraliza el descubrimiento y la reserva de experiencias rurales —culturales, gastronómicas y naturales— de forma sencilla y accesible, apoyando a las comunidades locales.',
    overviewImages: [
      { src: '/images/case-studies/landora/image3.avif' },
      { src: '/images/case-studies/landora/image2.png' },
    ],
    challengeTitle: 'Reto',
    challengeBody:
      'Las zonas rurales se despueblan mientras las ciudades sufren turismo masivo —existe una alta demanda de experiencias únicas pero ninguna plataforma centralizada que las albergue. El proceso de reserva en las opciones existentes suele ser confuso, anticuado o incompleto. Los usuarios acaban buscando en varios sitios sin encontrar una solución unificada.',
    roleLabel: 'Mi rol',
    role: 'Diseño de Producto y Design System · En solitario, de principio a fin: investigación, IA, diseño de UI, accesibilidad (WCAG AA), handoff a desarrollo.',
    roleImages: [{ src: '/images/case-studies/landora/image4.avif' }],
    objectives: {
      title: 'Objetivos',
      businessLabel: 'Objetivos de producto',
      userLabel: 'Objetivos de usuario',
      business: [
        'Aumentar las tasas de conversión de reservas.',
        'Posicionar Landora como referente en turismo rural.',
        'Apoyar a las comunidades locales conectándolas con usuarios urbanos.',
        'Escalar el catálogo de experiencias por categoría.',
      ],
      user: [
        'Reservar experiencias rurales rápido y sin fricción.',
        'Encontrar experiencias verificadas con información visual fiable.',
        'Descubrir experiencias en una sola plataforma sin buscar en varios sitios.',
        'Confiar en la plataforma antes de comprometerse con el pago.',
      ],
    },
    sections: [
      {
        id: 'research',
        title: '1. Investigación',
        paragraphs: [
          'Se realizaron cinco entrevistas en profundidad en audio, con transcripción y análisis completos, con participantes de entre 25 y 60 años de perfiles diversos. Las preguntas cubrieron hábitos generales de reserva, barreras para experiencias rurales, experiencias previas y la "app ideal". Se complementó con una encuesta en Google Forms con unas 20 respuestas de usuarios con perfiles distintos.',
          'La oportunidad de Landora: UX de alta calidad + enfoque rural + apoyo a la comunidad local, todo en una plataforma.',
        ],
        table: {
          headers: ['Plataforma', 'Fortaleza', 'Debilidad'],
          rows: [
            ['Ecotur', 'Informativa', 'No orientada a reservas directas'],
            ['Airbnb', 'Excelente UX y reservas', 'Sin enfoque rural ni impacto comunitario'],
            ['Rusticae', 'Selección editorial de calidad', 'Enfoque exclusivo, sin valor comunitario'],
          ],
        },
        items: [
          'Insight clave — Complejidad de la reserva',
          'Insight clave — Confianza visual',
          'Insight clave — Búsqueda fragmentada',
        ],
        images: [
          { src: '/images/case-studies/landora/image5.webp' },
          { src: '/images/case-studies/landora/image6.webp' },
        ],
      },
      {
        id: 'definition',
        title: '2. Definición',
        items: [
          'Personas y user journeys.',
          'Flujos de usuario para exploración, detalle y reserva.',
          'Arquitectura de información (IA) para organizar categorías y experiencias.',
          'Priorización de funcionalidades clave.',
        ],
        images: [
          { src: '/images/case-studies/landora/image7.webp' },
          { src: '/images/case-studies/landora/image8.avif' },
          { src: '/images/case-studies/landora/image9.avif' },
        ],
      },
      {
        id: 'design',
        title: '3. Diseño',
        paragraphs: [
          'El proceso comenzó con wireframes de baja fidelidad para validar la estructura antes de invertir en el sistema visual. Una vez validadas la arquitectura y los flujos, se desarrollaron prototipos interactivos en Figma, y el sistema visual se construyó sobre tres pilares: claridad, jerarquía y accesibilidad.',
        ],
        items: [
          'Wireframes de baja fidelidad para validar la estructura.',
          'Prototipos interactivos en Figma.',
          'Sistema visual basado en claridad, jerarquía y accesibilidad.',
        ],
        images: [
          { src: '/images/case-studies/landora/image10.webp' },
          { src: '/images/case-studies/landora/image11.webp' },
        ],
      },
      {
        id: 'design-decisions',
        title: 'Decisiones de diseño',
        table: {
          headers: ['Problema identificado', 'Decisión de diseño', 'Impacto esperado'],
          rows: [
            [
              'Proceso de reserva excesivamente complejo',
              '1 pantalla de configuración + checkout de 3 pasos con información persistente',
              'Reducción de la fricción y del abandono',
            ],
            [
              'Falta de información visual fiable',
              'Tarjeta de reserva con galería deslizable + reseñas verificadas',
              'Mayor confianza del usuario antes de confirmar',
            ],
            [
              'Experiencia de búsqueda fragmentada',
              'Plataforma centralizada con navegación clara por categorías',
              'Menor tiempo de búsqueda y mejor finalización de tareas',
            ],
            [
              'El morado de marca no cumplía WCAG 2.1 AA',
              'Se separó el color de marca del color de interacción — rampa lila primaria calibrada al nivel 600',
              'Accesibilidad completa sin sacrificar la identidad visual',
            ],
          ],
        },
        paragraphs: [
          'Se eligió el morado sobre el verde —es más distintivo y encaja con la motivación del usuario: escapar de la rutina y buscar experiencias con sentido.',
          'El morado original no cumplía WCAG 2.1 AA (ratio mínimo 4.5:1), verificado con un plugin de Figma. El morado original se reservó para el branding decorativo, y la rampa lila primaria se calibró al nivel 600 para todos los elementos interactivos —cumpliendo el ratio 4.5:1 en todos los casos de texto e interacción.',
        ],
        items: [
          'Pantalla de pre-checkout: selección de fecha, hora y número de personas con visualización de coste en tiempo real.',
          'Checkout de 3 pasos: resumen del pedido, datos personales y pago.',
          'La información de la actividad permanece visible durante todo el proceso.',
          'Política de cancelación y aviso de soporte incluidos en el paso de pago.',
          'Librería de componentes publicada en Figma como librería independiente, separada del archivo de pantallas.',
          'Arquitectura de tokens estructurada en dos capas —valores primitivos y alias semánticos— cubriendo color, tipografía, espaciado, padding, radio y grid.',
          'Paleta de color accesible, verificada contra los estándares de contraste WCAG 2.1 AA.',
          '20+ componentes: botones, campos de texto, selector de calendario, barra de navegación, tarjetas, stepper, resumen de checkout y tarjetas modulares.',
          'Completamente documentado para handoff a desarrollo —auditado por consistencia y publicado como sitio de documentación independiente.',
        ],
        images: [{ src: '/images/case-studies/landora/image12.webp' }],
      },
      {
        id: 'handoff-documentation',
        title: 'Handoff y documentación del DS',
        paragraphs: [
          'Más allá del diseño de la interfaz, traté el UI kit de Landora como un sistema pensado para ser entregado, no solo un conjunto de pantallas. Eso implicó auditar cada token por consistencia, estructurar una arquitectura de tokens en dos capas y documentar el cumplimiento de accesibilidad antes de darlo por terminado.',
          'El color ya estaba definido como Estilos de Figma, pero el espaciado, el padding, el radio y la tipografía aún no estaban estructurados como tokens reutilizables. Convertí los estilos de color a Variables y construí el resto de escalas desde cero.',
          'En lugar de inventar una escala arbitraria, revisé el uso real en toda la librería de componentes para ver qué valores ya estaban en juego —lo que reveló un patrón claro en espaciado y padding (4, 8, 12, 16, 24, 32, 64) junto a decenas de valores sueltos que no encajaban. Ese patrón se convirtió en la escala primitiva.',
          'Antes de generar cualquier documentación de handoff, hice una auditoría de tokens en toda la librería de componentes en lugar de asumir que ya era consistente. La auditoría reveló inconsistencias reales: 213 valores de espaciado y padding, un patrón de 6px y 10px, y radios de esquina fuera de escala.',
          'En lugar de documentar el sistema tal cual estaba, usé la auditoría para imponer una escala limpia basada en 4px —resolviendo cada excepción según su contexto en lugar de redondear ciegamente al valor más cercano. Por ejemplo, el radio del contenedor de una tab bar (20px) se subió a 24px para ajustarse a su superficie mayor, manteniéndolo visualmente distinto de elementos interactivos más pequeños a 8px. Los elementos decorativos ajenos al sistema de diseño real, como el icono de batería de la barra de estado de un mockup, se excluyeron deliberadamente de la escala de tokens en lugar de forzarlos en ella.',
          'Con los tokens y componentes auditados y bien nombrados, generé un sitio de documentación independiente en Zeroheight —cubriendo fundamentos (color, tipografía, espaciado, padding, radio), especificaciones de componentes (anatomía, variantes, estados) y guías de accesibilidad— construido directamente desde el archivo de Figma para un handoff preciso a desarrollo.',
        ],
      },
      {
        id: 'key-deliverables',
        title: 'a) Entregables clave',
        paragraphs: [
          'El diseño final ofrece una solución digital coherente que combina un sistema visual sólido con una experiencia de reserva clara y accesible. Mediante un flujo optimizado y decisiones de diseño justificadas con investigación real, Landora ofrece a los usuarios una plataforma fiable para gestionar reservas con el mínimo esfuerzo cognitivo —respaldada por un design system totalmente documentado y listo para producción, con tokens primitivos y semánticos, preparado para el handoff a desarrollo.',
        ],
      },
      {
        id: 'design-learnings',
        title: 'b) Aprendizajes de diseño',
        paragraphs: [
          'La consistencia no es algo que se consigue por construcción —se erosiona a través de cientos de pequeños ajustes manuales, incluso en un proceso cuidadoso. Auditar el sistema de tokens a posteriori, en lugar de asumir que estaba limpio, reveló inconsistencias reales que no habría detectado de otra forma. Y no todo valor irregular es un error a corregir: distinguir una decisión de diseño legítima (un radio mayor en una superficie más grande) de una desviación real (un valor decimal por redimensionar a mano) requirió criterio, no solo automatización.',
        ],
      },
      {
        id: 'next-steps',
        title: 'c) Próximos pasos',
        paragraphs: ['Si el producto se desarrollara más allá del prototipo, se explorarían las siguientes mejoras:'],
        items: [
          'Realizar tests de usabilidad con usuarios reales para validar los flujos de reserva y detectar puntos de fricción no identificados en el proceso de diseño.',
          'Extender la capa de tokens semánticos para cubrir elevación y movimiento (sombras, tiempos de transición), completando el sistema más allá de color, espaciado y tipografía.',
          'Desarrollar la versión móvil nativa, priorizando flujos de reserva rápidos y la gestión activa de reservas.',
        ],
      },
      {
        id: 'outcome',
        title: 'Resultado',
        paragraphs: [
          'Se identificó una oportunidad de mercado real: ninguna plataforma existente combina UX de alta calidad con enfoque rural y apoyo comunitario. Se simplificó el proceso de reserva a 1 pantalla de configuración + 3 pasos de checkout con información contextual persistente. Sistema de color accesible: rampa lila primaria de nivel 600 para cumplir WCAG 2.1 AA (ratio > 4.5:1). UI Kit documentado como design system listo para producción —20+ componentes, tokens primitivos y semánticos, auditados por consistencia y publicados como librería de handoff independiente. Prototipo interactivo completamente testeable en Figma.',
        ],
        images: [{ src: '/images/case-studies/landora/image13.webp' }],
      },
    ],
    viewMoreWork: 'Ver más trabajo.',
  },
};
