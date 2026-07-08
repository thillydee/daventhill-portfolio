import { OGImageRoute } from 'astro-og-canvas';
import profile from '../../data/profile';

const pages: Record<string, { title: string; description: string }> = {
  index: {
    title: profile.person.name,
    description: profile.person.positioningLine,
  },
  experience: {
    title: 'Experience',
    description: `Product and digital project management experience of ${profile.person.name} in Basel, Switzerland.`,
  },
  'case-studies': {
    title: 'Case Studies',
    description: 'Data and AI driven product case studies from endress.com.',
  },
  skills: {
    title: 'Skills',
    description: 'Product, agile, data and AI skills for B2B e-commerce.',
  },
  contact: {
    title: 'Contact',
    description: `Get in touch with ${profile.person.name}, Product Owner in Basel.`,
  },
};

for (const caseStudy of profile.caseStudies) {
  pages[`case-studies/${caseStudy.slug}`] = {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

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
