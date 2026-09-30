export interface CaseStudyMeta {
  client: string;
  industry: string;
  year: string;
  services: string;
}

export interface CaseStudyMetaLabels {
  client: string;
  industry: string;
  year: string;
  services: string;
}

export interface CaseStudyObjectives {
  title: string;
  businessLabel: string;
  userLabel: string;
  business: string[];
  user: string[];
}

/** A single supporting image: a required description for screen readers, plus an optional visible caption. */
export interface CaseStudyImage {
  src: string;
  /** What the image shows (not a repeat of the section title). Written in the page's language. */
  alt: string;
  caption?: string;
  /** Turns the first occurrence of `text` inside the caption into a link. */
  captionLink?: { text: string; href: string };
}

/**
 * One flexible content block used for every numbered/lettered section
 * after Objectives (Exploration, Flow Design, Iterations, Scalability,
 * Key Deliverables, Design Learnings, Next Steps, Outcome...).
 * Each project fills in only the fields it needs; the renderer shows
 * paragraphs, then bullet items, then labeled items, then a table,
 * then an optional video, then any supporting images — in that order.
 */
export interface CaseStudySection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  labeledItems?: { label: string; body: string }[];
  table?: { headers: [string, string, string]; rows: [string, string, string][] };
  video?: string;
  /** Accessible description of the video (it is announced instead of the section title). */
  videoAlt?: string;
  images?: CaseStudyImage[];
}

/**
 * Shared shape for every case-study page. New projects reuse this same
 * type + the CaseStudy.astro renderer — only the content differs.
 */
export interface CaseStudyContent {
  slug: string;
  filter: 'product' | 'visual';
  title: string;
  /** Localized <title> and meta description of the page (also used for the share card). */
  seo: { title: string; description: string };
  heroImage?: string;
  /** Accessible description of the hero image. */
  heroAlt?: string;
  /** Optional ready-made 1200x630 share image, for covers that do not survive a landscape crop (e.g. a portrait book). */
  shareImage?: string;
  heroCtaLabel: string;
  heroCtaHref?: string;
  /** One-line "at a glance" result shown at the top of the case study,
   * above the overview. Mirrors the impact line used on its Home card. */
  highlight?: string;
  overviewTitle: string;
  metaLabels: CaseStudyMetaLabels;
  meta: CaseStudyMeta;
  /** Tools/software used on the project, shown as a chip list under the
   * overview meta. Names are proper nouns and stay the same across
   * locales; only stackLabel is translated. */
  stackLabel?: string;
  stack?: string[];
  overviewIntro: string;
  overviewImages?: CaseStudyImage[];
  challengeTitle: string;
  challengeBody: string;
  roleLabel?: string;
  role?: string;
  roleImages?: CaseStudyImage[];
  creditLink?: { label: string; href: string };
  objectives?: CaseStudyObjectives;
  sections: CaseStudySection[];
  viewMoreWork: string;
}
