import type { APIRoute } from 'astro';
import profile from '../data/profile';

export const GET: APIRoute = ({ site }) => {
  const { person, experience, caseStudies } = profile;
  const abs = (path: string) => new URL(path, site).toString();

  const body = `# ${person.name}

> ${person.positioningLine}

${person.bioLong}

## Current role

${experience[0].title} at ${experience[0].company} (${experience[0].dates}). ${experience[0].summary}

## Pages

- [Home](${abs('/')}): overview, positioning, and current role
- [Experience](${abs('/experience')}): full reverse-chronological work history, education, and certifications
- [Case Studies](${abs('/case-studies')}): data and AI driven product case studies
${caseStudies
  .map((cs) => `  - [${cs.title}](${abs(`/case-studies/${cs.slug}`)}): ${cs.summary}`)
  .join('\n')}
- [Skills](${abs('/skills')}): product, agile, data & AI skills, certifications, and languages
- [Contact](${abs('/contact')}): contact form and direct contact details

## Contact

- Email: ${person.contact.email}
- Phone: ${person.contact.phone}
- LinkedIn: ${person.contact.linkedin}
- Location: ${person.location}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
