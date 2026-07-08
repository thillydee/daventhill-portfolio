import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledgeSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(['faq', 'concept']),
  question: z.string().optional(),
  relatedCaseStudies: z.array(z.string()).optional(),
  publishDate: z.coerce.date(),
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
};
