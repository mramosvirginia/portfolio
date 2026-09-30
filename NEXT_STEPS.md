# Portfolio — proyecto Astro

Estado a 30 de septiembre de 2026. El sitio está completo y publicado; lo que queda son mejoras
técnicas que salieron de una auditoría por bloques (ver más abajo).

## Qué hay construido
- **Páginas (español en `/`, inglés en `/en/`):** Home, Trabajo, Sobre mí, Lab, seis casos de estudio
  (Web IA, UX QuickAudit, Aurora Dorada, Rebranding qdq, Landora, Levedad y Somos Paisajes) y una
  página 404 bilingüe.
- **Layout común:** cabecera (navegación, selector de idioma, botón de tema, menú móvil, CV) y footer
  con rastro de cuadrados de colores al mover el ratón.
- **Tema claro/oscuro** sin parpadeo al cargar (ver la nota de abajo).
- **Tokens de diseño** en `src/styles/global.css` (colores, espacios, radios, fuentes).
- **Contenido centralizado** en `src/data/site.ts` y `src/data/case-studies/*.ts`, siempre en dos
  bloques paralelos `es` y `en`; nunca escrito dentro del diseño.
- **SEO:** título, descripción, canónica, `hreflang`, Open Graph y Twitter por página (cada caso de
  estudio con su título, descripción e imagen para compartir), `sitemap.xml`, `robots.txt` y datos
  estructurados (`WebSite` y `Person` con `sameAs`).

## Decisiones que conviene recordar
- **Dominio real: `https://www.mramosvirginia.com`.** El dominio sin `www` redirige a `www` en Vercel, así
  que `site` en `astro.config.mjs`, la canónica, el sitemap y `robots.txt` usan `www`.
- **Todas las URLs terminan en barra** (`/work/`). Lo fijan `trailingSlash: 'always'` en
  `astro.config.mjs` y `"trailingSlash": true` en `vercel.json`. Los enlaces internos deben escribirse con
  barra final.
- **Redirecciones `/es/…` → nuevas:** son 301 reales definidos en `vercel.json`. Las de
  `astro.config.mjs` son solo un respaldo (en producción las de Vercel van primero). Las rutas antiguas
  sin barra hacen dos saltos (308 y luego 301); el destino final es correcto.
- **Alt de imágenes de casos:** cada imagen lleva su `alt` propio en los datos (obligatorio en el tipo
  `CaseStudyImage`); la portada usa `heroAlt`. Si añades una imagen, describe lo que se ve, no el título de
  la sección.
- **Suelo de 12 px** para cualquier texto. No pongas tamaños de letra por debajo.
- **Protección de las vistas previas de Vercel:** se desactiva a mano cuando hay que probar una rama sin
  sesión (por ejemplo, con `curl`). Hay que volver a activarla después (Proyecto → Settings → Deployment
  Protection).

## Auditoría técnica: estado por bloques
- **Bloque 1 — cerrado.** Vídeo con botón de pausa y respeto de `prefers-reduced-motion`, nombre accesible
  del botón del carrusel del Lab, pestañas de Sobre mí en un `div` (no en un `nav`), página 404, foto del
  hero servida solo en pantallas anchas, primera card sin `eager`.
- **Bloque 2 — cerrado.** Google Fonts recortado a los pesos que se usan (Geist 400/500/700, Geist Mono
  400/500), CS Briem precargada y sin la fuente de respaldo que no se usaba.
- **Bloque 3 — cerrado.** Dominio `www` coherente en canónica, `hreflang`, sitemap, robots e imagen OG;
  barras finales unificadas; redirecciones 301; un solo `h1` en Sobre mí; contraste de la frase de intro
  del hero (4,5:1); etiqueta del selector de idioma traducida; menú móvil con Esc; restos sin usar
  eliminados (dos imágenes, paleta lila, opción `framed`).
- **Bloque 4 — cerrado.** Alt descriptivos para todas las imágenes de los casos, ARIA de los puntos del
  carrusel del Lab, suelo de 12 px, descripción, título localizado e imagen para compartir propios por
  caso, y `sameAs` (LinkedIn) en los datos estructurados.

## Qué queda pendiente

### 1. Reestructuración grande (mantenimiento, no urgente)
- **22 páginas duplicadas es/en** (`src/pages/**` y `src/pages/en/**`): pasar a rutas dinámicas con
  `getStaticPaths` o a un único componente de página por tipo. Mover también el `footerTagline`, que hoy
  se repite en cada página, dentro de `Layout`.
- **Dividir los componentes grandes:** `Home.astro` (~800 líneas: hero, casos, proceso, FAQ, scripts y
  CSS) en `Hero`, `Process` y `Faq`; `Layout.astro` (~660) en `SeoHead`, `Header` y `Footer`.
- **Colores fijos en los componentes** (unos 30 valores hex y `rgba`, y overrides solo para modo claro
  con `:global([data-theme='light'])`): llevarlos a tokens.
- **Textos es/en sin garantía de simetría:** tipar `home`, `about`, `lab`, etc. con `satisfies` para que
  falte un aviso si una clave existe en un idioma y no en el otro.
- **Transición global de color** (`body.theme-ready *` en `global.css`): acotarla a lo que cambia.
- **Comprobación de tipos:** añadir `@astrojs/check` y `typescript` y un script `astro check`.
- **Tokens sin uso:** `--radius-lg` y `--text-card-process`.

### 2. Imágenes pesadas (a la espera de los originales)
- **Landora y UX QuickAudit:** hay capturas de 1 a 2 MB (`landora/image2.png`, `landora/image12.webp`,
  `uxquickaudit/image1.webp`, `uxquickaudit/image3.webp`, `uxquickaudit/cover.webp`) que pesan igual tras
  optimizarlas. Reexportarlas a menor peso desde el original. También `about/overview.png` (1,1 MB).
- **Valorar AVIF** con `<Picture formats={['avif','webp']}>`.
- **`src/lib/images.ts`** importa todas las imágenes de golpe (`import.meta.glob` eager), así que los
  originales sin optimizar también acaban en `dist` (~4 MB). Pasar a importar cada imagen donde se usa.
- **Vídeo de Web IA** (`public/images/case-studies/webia/video4.mp4`, 1,8 MB): añadir póster y un formato
  más ligero.

### 3. Fuentes: dos detalles menores
- **Fallback con `size-adjust` para CS Briem.** El titular usa `font-display: swap` con precarga. Si la
  fuente llegara tarde, el texto de respaldo (Geist) mide ~8 % más ancho que CS Briem ("Virginia Miner
  Visual Designer": 1261 px frente a 1365 px a 100 px de cuerpo) y se notaría un salto. Solución: un
  `@font-face` de respaldo con `size-adjust`, `ascent-override` y `descent-override` calculados a partir
  de las métricas de CS Briem, y ponerlo justo detrás de 'CS Briem' en `--font-headline`.
- **Negrita falsa en las `<th>`.** Las cabeceras de tabla de los casos de estudio (`CaseStudy.astro`) usan
  Geist Mono y el navegador les aplica peso 700 por defecto, pero solo se cargan los pesos 400 y 500 de
  Geist Mono, así que el navegador simula la negrita. Arreglo: fijar `font-weight: 500` en `th`, o pedir
  el peso 700 de Geist Mono en la URL de Google Fonts.

### 4. Otros detalles sueltos
- Sobre mí desborda 7 px a 320 px de ancho (la fila de pestañas).
- Alojar Geist en local en vez de pedirla a Google Fonts (hoy es una petición bloqueante).
- Datos estructurados: valorar `image` y `description` en `Person`, y `CreativeWork` o `BreadcrumbList`
  en los casos.
- Redirecciones `/es/…` sin barra final: hacen dos saltos (308 y 301). Solo cambiaría si se quita
  `trailingSlash` de `vercel.json`, y no compensa.
- Contenido: revisión de las cadenas en español que sean traducciones provisionales, y el enlace de
  traspaso de Landora cuando Zeroheight esté listo.

## Nota importante (leer antes de tocar el CSS del modo oscuro)
Astro limita el CSS de cada componente a ese componente. Si escribes `[data-theme='dark'] .foo { }` dentro
del `<style>` de un componente, Astro le añade el atributo del componente también a la parte
`[data-theme='dark']`, y entonces nunca coincide con la etiqueta `<html>`. Hay que escribirlo siempre como
`:global([data-theme='dark']) .foo { }`. Esto ya dio problemas tres veces (fondo de tarjeta, iconos del
botón de tema y texto del footer) antes de encontrar la causa.

## Comandos
```
npm install        # solo la primera vez
npm run dev        # servidor local con recarga en localhost:4321
npm run build      # genera el sitio estático en dist/
```

## Despliegue
Sitio estático (Astro con salida estática). Se despliega en Vercel al hacer push a GitHub: `main` publica
en producción y cualquier otra rama genera una vista previa. La configuración de barras finales y
redirecciones está en `vercel.json`.
