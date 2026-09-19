import type { ImageMetadata } from 'astro';

// Content data refers to images by their old public URL (e.g. "/images/case-studies/x/cover.webp").
// Resolve those to the processed files under src/assets so astro:assets can optimize them.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function getImage(path: string): ImageMetadata {
  const mod = modules[`/src/assets${path}`];
  if (!mod) throw new Error(`Image not found in src/assets: ${path}`);
  return mod.default;
}
