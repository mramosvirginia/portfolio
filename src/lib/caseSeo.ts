import { getImage as optimizeImage } from 'astro:assets';
import { getImage } from './images';
import type { CaseStudyContent } from '../data/caseStudyTypes';

// Share-image size recommended by Open Graph / Twitter large cards.
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

/**
 * SEO data for a case-study page: its own localized title and description, and a share image
 * made from the case's hero picture (cropped to 1200x630 JPEG at build time).
 */
export async function caseSeo(study: CaseStudyContent) {
  const share = await optimizeImage({
    src: getImage((study.shareImage ?? study.heroImage)!),
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fit: 'cover',
    format: 'jpg',
    quality: 80,
  });
  return {
    title: study.seo.title,
    description: study.seo.description,
    image: { src: share.src, alt: study.heroAlt ?? study.title, width: OG_WIDTH, height: OG_HEIGHT },
  };
}
