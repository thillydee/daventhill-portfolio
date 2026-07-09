import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getProfile } from '../i18n';

export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).toString();

  const en = getProfile('en');
  const de = getProfile('de');
  const knowledgeEn = await getCollection('knowledgeEn');
  const knowledgeDe = await getCollection('knowledgeDe');

  const body = `# ${en.person.name}

> ${en.person.positioningLine}

${en.person.bioLong}

Structures product data explicitly for AI-tool consumption, not just human browsing: led the migration of product specification data to a new PIM (Product Information Management) system at Endress+Hauser, defining how that data is structured and consumed both by endress.com and by AI tools. See the [PIM migration case study](${abs('/case-studies/metadata-pim-migration')}).

## English

- [Home](${abs('/')}): overview, positioning, and current role
- [Experience](${abs('/experience')}): full reverse-chronological work history, education, and certifications
- [Case Studies](${abs('/case-studies')}): data and AI driven product case studies
${en.caseStudies
  .map((cs) => `  - [${cs.title}](${abs(`/case-studies/${cs.slug}`)}): ${cs.summary}`)
  .join('\n')}
- [Skills](${abs('/skills')}): product, agile, data & AI skills, certifications, and languages
- [Knowledge](${abs('/knowledge')}): glossary concepts and FAQ answers grounded in real product work
${knowledgeEn
  .map((entry) => `  - [${entry.data.title}](${abs(`/knowledge/${entry.id}`)}): ${entry.data.description}`)
  .join('\n')}
- [Contact](${abs('/contact')}): contact form and direct contact details

## Deutsch

> ${de.person.positioningLine}

${de.person.bioLong}

Strukturiert Produktdaten gezielt für die Nutzung durch KI-Tools, nicht nur für menschliches Browsing: leitete die Migration der Produktspezifikationsdaten in ein neues PIM-System (Product Information Management) bei Endress+Hauser und definierte, wie diese Daten sowohl von endress.com als auch von KI-Tools strukturiert und genutzt werden. Siehe die [PIM-Migrations-Case-Study](${abs('/de/case-studies/metadata-pim-migration')}).

- [Startseite](${abs('/de/')}): Positionierung und aktuelle Position
- [Erfahrung](${abs('/de/experience')}): vollständiger Werdegang, Ausbildung und Zertifizierungen
- [Case Studies](${abs('/de/case-studies')}): daten- und KI-getriebene Produkt-Case-Studies
${de.caseStudies
  .map((cs) => `  - [${cs.title}](${abs(`/de/case-studies/${cs.slug}`)}): ${cs.summary}`)
  .join('\n')}
- [Skills](${abs('/de/skills')}): Product-, Agile-, Daten- und KI-Skills, Zertifizierungen und Sprachen
- [Wissen](${abs('/de/knowledge')}): Glossar-Konzepte und FAQ-Antworten aus echter Produktarbeit
${knowledgeDe
  .map((entry) => `  - [${entry.data.title}](${abs(`/de/knowledge/${entry.id}`)}): ${entry.data.description}`)
  .join('\n')}
- [Kontakt](${abs('/de/contact')}): Kontaktformular und direkte Kontaktdaten

## Contact

- Email: ${en.person.contact.email}
- Phone: ${en.person.contact.phone}
- LinkedIn: ${en.person.contact.linkedin}
- Location: ${en.person.location}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
