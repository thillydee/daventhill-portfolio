import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { getProfile, t, type Locale } from '../../i18n';

const pages: Record<string, { title: string; description: string }> = {};

async function addLocalePages(locale: Locale) {
  const profile = getProfile(locale);
  const strings = t(locale);
  const prefix = locale === 'de' ? 'de/' : '';

  pages[`${prefix}index`] = {
    title: profile.person.name,
    description: profile.person.positioningLine,
  };
  pages[`${prefix}experience`] = {
    title: strings.experience.title,
    description: strings.experience.intro,
  };
  pages[`${prefix}case-studies`] = {
    title: strings.caseStudies.title,
    description: strings.caseStudies.description,
  };
  pages[`${prefix}skills`] = {
    title: strings.skills.title,
    description: strings.skills.description,
  };
  pages[`${prefix}contact`] = {
    title: strings.contact.title,
    description: strings.contact.description,
  };
  pages[`${prefix}knowledge`] = {
    title: strings.knowledge.title,
    description: strings.knowledge.description,
  };

  for (const caseStudy of profile.caseStudies) {
    pages[`${prefix}case-studies/${caseStudy.slug}`] = {
      title: caseStudy.title,
      description: caseStudy.summary,
    };
  }

  const knowledgeEntries = await getCollection(locale === 'de' ? 'knowledgeDe' : 'knowledgeEn');
  for (const entry of knowledgeEntries) {
    pages[`${prefix}knowledge/${entry.id}`] = {
      title: entry.data.title,
      description: entry.data.description,
    };
  }
}

await addLocalePages('en');
await addLocalePages('de');

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[15, 23, 42]],
    border: { color: [37, 99, 235], width: 8, side: 'block-start' },
    padding: 80,
    font: {
      title: { size: 64, weight: 'Bold', color: [255, 255, 255] },
      description: { size: 32, color: [203, 213, 225] },
    },
  }),
});
