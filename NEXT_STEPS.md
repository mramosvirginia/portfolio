# Portfolio — Astro project

## What's built so far
- Home page (EN + ES) — fully styled, with the design system in place.
- Layout with header (nav, language switch, theme toggle, mobile menu, CV download),
  footer (sitemap + contact).
- Dark/light theme toggle (no flash-of-wrong-theme, fixed via a known Astro CSS-scoping
  gotcha — see notes below).
- Design tokens in `src/styles/global.css` (colors, spacing, radius, fonts).
- Content centralized in `src/data/site.ts` (EN/ES strings), not hardcoded per-page.

## Still to build
- About, Work, Lab pages, and each project/case-study page (only Home exists right now).
- Landora handoff link once Zeroheight is ready.
- Spanish content review (some ES strings are placeholder-quality translations).

## Known gotcha (important — read before touching dark mode CSS)
Astro auto-scopes CSS selectors per component. Writing `[data-theme='dark'] .foo { }`
inside a component's <style> block gets WRONGLY scoped by Astro (it adds the
component's scope attribute to the `[data-theme='dark']` part too, so it can never
match <html>). Always wrap it as `:global([data-theme='dark']) .foo { }` instead.
This bit us three times during this session (card background, theme-toggle icons,
footer text) before we found the root cause.

## Commands
```
npm install       # first time only
npm run dev        # live-reload dev server at localhost:4321
npm run build       # outputs static site to dist/
```

## Deploying
This is a static site (Astro `output: "static"`). Push to GitHub and connect the repo
to Vercel or Netlify — both auto-detect Astro, no config needed. Point your existing
custom domain at whichever you choose once you're happy with it.
