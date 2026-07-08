import type { APIRoute } from 'astro';
import { getProfile } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).toString();

  const en = getProfile('en');
  const de = getProfile('de');

  const body = `# ${en.person.name}

> ${en.person.positioningLine}

${en.person.bioLong}

## English

- [Home](${abs('/')}): overview, positioning, and current role
- [Experience](${abs('/experience')}): full reverse-chronological work history, education, and certifications
- [Case Studies](${abs('/case-studies')}): data and AI driven product case studies
${en.caseStudies
  .map((cs) => `  - [${cs.title}](${abs(`/case-studies/${cs.slug}`)}): ${cs.summary}`)
  .join('\n')}
- [Skills](${abs('/skills')}): product, agile, data & AI skills, certifications, and languages
- [Contact](${abs('/contact')}): contact form and direct contact details

## Deutsch

> ${de.person.positioningLine}

${de.person.bioLong}

- [Startseite](${abs('/de/')}): Positionierung und aktuelle Position
- [Erfahrung](${abs('/de/experience')}): vollständiger Werdegang, Ausbildung und Zertifizierungen
- [Case Studies](${abs('/de/case-studies')}): daten- und KI-getriebene Produkt-Case-Studies
${de.caseStudies
  .map((cs) => `  - [${cs.title}](${abs(`/de/case-studies/${cs.slug}`)}): ${cs.summary}`)
  .join('\n')}
- [Skills](${abs('/de/skills')}): Product-, Agile-, Daten- und KI-Skills, Zertifizierungen und Sprachen
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
