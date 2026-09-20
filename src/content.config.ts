import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledgeSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(['faq', 'concept']),
  question: z.string().optional(),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  relatedCaseStudies: z.array(z.string()).optional(),
  publishDate: z.coerce.date(),
});

// Optional rich deep-dive body for a case study, matched to a `caseStudies[]`
// entry (profile.ts/profile.de.ts) by slug/filename. Case studies without a
// matching file here keep rendering exactly as before — this is additive.
const caseStudyDeepSchema = z.object({
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
});

export const collections = {
  knowledgeEn: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/knowledge/en' }),
    schema: knowledgeSchema,
  }),
  knowledgeDe: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/knowledge/de' }),
    schema: knowledgeSchema,
  }),
  caseStudyDeepEn: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/case-studies/en' }),
    schema: caseStudyDeepSchema,
  }),
  caseStudyDeepDe: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/case-studies/de' }),
    schema: caseStudyDeepSchema,
  }),
};
