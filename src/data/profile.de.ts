import type { Profile } from './profile';

const profileDe: Profile = {
  person: {
    name: 'Daven Thill',
    currentTitle: 'Product Owner',
    positioningLine:
      'Product Owner in Basel mit Fokus auf datengetriebene und KI-gestützte digitale Produkte',
    location: 'Basel, Schweiz',
    contact: {
      email: 'daventhill@gmail.com',
      phone: '+41 79 586 90 72',
      linkedin: 'https://linkedin.com/in/daventhill',
    },
    nationality:
      'Luxemburg (EU), Schweizer C-Bewilligung, uneingeschränkt arbeitsberechtigt in der Schweiz',
    targetSeoPhrases: [
      'Product Owner Basel',
      'Product Owner Basel-Landschaft',
      'Product Owner Schweiz',
      'Datengetriebener Product Owner Basel',
      'KI Product Owner Schweiz',
      'Digitaler Product Owner B2B Basel',
    ],
    bioShort:
      'Daven Thill ist Product Owner mit Sitz in Basel und verfügt über mehr als fünf Jahre Erfahrung in der Leitung datengetriebener digitaler Produkte im B2B- und Industrieumfeld. Aktuell verantwortet er den Bereich Products von endress.com bei Endress+Hauser, wo er ein interdisziplinäres Squad leitet und KI-gestützte Features realisiert hat, darunter eine auf Verkaufsdaten basierende Cross-Selling-Engine und ein relevanzbasiertes Sortiermodell für Produkte. Er ist zertifizierter Professional Scrum Product Owner (PSPO) und war zuvor in Product- und Projektmanagement-Rollen bei MediaMarkt Schweiz und der Manor AG tätig.',
    bioLong:
      'Daven Thill ist Product Owner mit Sitz in Basel und bringt mehr als fünf Jahre Erfahrung in der End-to-End-Führung digitaler Produkte mit – von Roadmap und Backlog bis zur operativen Umsetzung. Aktuell verantwortet er den Bereich Products von endress.com bei Endress+Hauser, einem weltweit führenden Unternehmen für industrielle Prozessautomation und Messtechnik, wo er seit rund vier Jahren ein interdisziplinäres Squad aus Business Ownern, UX und IT aufgebaut und geführt hat. Sein aktueller Schwerpunkt liegt auf daten- und KI-getriebenen Produktentscheidungen: einer KI-gestützten Cross-Selling-Engine auf Basis von SAP-Verkaufsdaten, einem Relevanzmodell für Produktlisten, das Produktlebenszyklus und Lagerverfügbarkeit berücksichtigt, sowie einer Metadaten- und PIM-Migration, die definiert, wie Produktdaten strukturiert und genutzt werden – auch durch KI-Tools. Er ist zertifizierter Professional Scrum Product Owner (PSPO) mit zusätzlicher Ausbildung in Design Thinking und hält einen Bachelor of Science in Business Administration der FHNW. Vor Endress+Hauser war er in Product- und Projektmanagement-Rollen bei MediaMarkt Schweiz und der Manor AG in Basel tätig.',
  },

  experience: [
    {
      company: 'Endress+Hauser Group',
      location: 'Reinach, Basel-Landschaft, Schweiz',
      title: 'Product Owner',
      dates: 'November 2023 bis heute',
      summary:
        'Verantwortet den Bereich Products von endress.com, leitet ein interdisziplinäres Squad und treibt daten- und KI-gestützte Verbesserungen des B2B-E-Commerce-Erlebnisses voran.',
      highlights: [
        'Initiierte und leitete ein KI-gestütztes Cross-Selling-Projekt, das die interne Cross-Selling-Logik durch ein Berechnungsmodell auf Basis von SAP-Verkaufsdaten ersetzte, um wirklich komplementäre Produktempfehlungen anzuzeigen.',
        'Verantwortet das Metadaten-Management auf Produktebene und leitete die Migration der Produktspezifikationsdaten von Censhare in ein neues PIM-System, wobei definiert wurde, wie Daten auf endress.com und durch KI-Tools strukturiert und genutzt werden.',
        'Führte eine relevanzbasierte Sortierfunktion für die Produktliste ein, die auf einem Berechnungsmodell basiert, das Produktlebenszyklus-Phase und interne Geschäftsanforderungen wie Lagerverfügbarkeit berücksichtigt.',
        'Konzipierte und lancierte ein MVP-Feature inklusive unterstützendem Datenmanagement-Prozess, um marktspezifische Lagerverfügbarkeit auf der Website anzuzeigen, einschliesslich verfügbarer Konfigurationsvarianten.',
        'Baute ein interdisziplinäres Squad aus zwei Business Ownern, UX und IT auf und leitet es seit rund vier Jahren, wobei agile Arbeitsweisen (Scrum und Kanban) fest verankert wurden.',
        'Aktives Mitglied der squad-übergreifenden Agile Guild von endress.com, organisiert Offsites, All-Hands und Learning- und Growth-Sessions mit und leitet Squad Health Checks, um die Arbeitsweise über alle Squads hinweg kontinuierlich zu verbessern.',
        'Verwaltet SharePoint Online als Editor und administriert ganze Bereiche der M365-Umgebung des Unternehmens.',
      ],
    },
    {
      company: 'Endress+Hauser Group',
      location: 'Reinach, Basel-Landschaft, Schweiz',
      title: 'Digital Project Manager',
      dates: 'März 2022 bis Oktober 2023',
      summary:
        'Trieb die digitale Produktentwicklung für endress.com voran und baute das interdisziplinäre Squad mit auf, aus dem später ein permanentes Produktteam wurde.',
      highlights: [
        'Trieb die digitale Produktentwicklung für endress.com voran, mit Fokus auf den Bereich Products und E-Commerce.',
        'Baute das interdisziplinäre Squad mit auf und führte agile Arbeitsweisen im Team ein.',
        'Koordinierte zwischen Business, UX und IT über den gesamten Produktentwicklungsprozess hinweg.',
      ],
    },
    {
      company: 'MediaMarkt Switzerland',
      location: 'Dietikon, Schweiz',
      title: 'Product Owner / Project Manager',
      dates: 'April 2021 bis März 2022',
      summary: 'Verantwortete Suche und Empfehlungs-Engines für den Schweizer Webshop.',
      highlights: [
        'Product Owner für die Website-Suche (FACT-Finder) und Empfehlungs-Engines (Prudsys und Swogo).',
        'Koordinierte Frontend- und Backend-Teams mittels Scrum, inklusive Release- und Testmanagement für die Webshop-Entwicklung.',
      ],
    },
    {
      company: 'Manor AG',
      location: 'Basel, Schweiz',
      title: 'Project Manager, Customer Experience',
      dates: 'September 2019 bis Januar 2021',
      summary: 'Leitete Webprojekte und Partnerintegrationen für manor.ch.',
      highlights: [
        'Leitete Webprojekte, darunter UX- und UI-Verbesserungen der Zahlungsprozesse sowie neue Substrukturen auf manor.ch.',
        'Ansprechpartner für Partnerintegrationen wie Suchmaschine, Bewertungssystem und Personalisierungstools.',
      ],
    },
  ],

  caseStudies: [
    {
      title: 'Eine KI-gestützte Cross-Selling-Engine auf Basis echter Verkaufsdaten',
      slug: 'ai-cross-selling',
      summary:
        'Ablösung einer manuell kuratierten Cross-Selling-Logik durch ein Datenmodell, das wirklich komplementäre Produkte empfiehlt.',
      problem:
        'Die bestehende Cross-Selling-Logik auf endress.com wurde intern festgelegt statt sich am tatsächlichen Kaufverhalten der Kunden zu orientieren. Dadurch waren die neben einem Hauptprodukt angezeigten Empfehlungen nicht immer wirklich komplementär.',
      approach:
        'Ich initiierte und leitete ein Projekt, um diese Logik auf Basis des tatsächlichen Kaufverhaltens neu aufzubauen. Mit SAP-Verkaufsdaten trieb ich die Entwicklung eines Berechnungsmodells voran, das identifiziert, welche Produkte tatsächlich zusammen gekauft werden, und nutzte dies, um die auf den Produktseiten angezeigten Empfehlungen zu steuern.',
      outcome:
        'Das Ergebnis ist eine Cross-Selling-Engine, die auf tatsächlichen Nachfragemustern statt internen Annahmen basiert und Produktkombinationen zeigt, die widerspiegeln, wie Kunden in der industriellen Prozessautomation ihre Bestellungen tatsächlich zusammenstellen.',
    },
    {
      title: 'Migration der Produktdaten in ein modernes PIM – mit Blick auf die Nutzung durch KI',
      slug: 'metadata-pim-migration',
      summary:
        'Leitung einer vollständigen Datenmigration von einem veralteten DAM in ein PIM-System sowie Definition, wie Produktdaten sowohl für die Website als auch für KI-Tools strukturiert werden sollen.',
      problem:
        'Produktspezifikationsdaten lagen in Censhare, einem veralteten System, das nicht für die flexible, strukturierte Datennutzung ausgelegt war, die sowohl eine moderne E-Commerce-Site als auch KI-gestützte Tools benötigen.',
      approach:
        'Ich verantworte das Metadaten-Management auf Produktebene und leitete die Migration dieser Daten in ein neues PIM-System (Product Information Management), inklusive Definition der beteiligten Schnittstellen und Datenstrukturen. Ein Teil der Arbeit bestand darin, gezielt zu gestalten, wie die Daten genutzt werden – nicht nur von endress.com selbst, sondern auch von KI-Tools, die zunehmend saubere, strukturierte Produktdaten benötigen.',
      outcome:
        'Eine sauberere, konsistentere Produktdatenbasis, die sowohl die aktuelle Website als auch die wachsende Zahl KI-gestützter Anwendungsfälle rund um Produktdaten unterstützt.',
    },
    {
      title: 'Ein Relevanzmodell für Produktlisten, das echte Geschäftslogik widerspiegelt',
      slug: 'relevance-sorting',
      summary:
        'Ablösung der statischen Sortierregeln für Produktlisten durch ein Berechnungsmodell, das Lebenszyklus-Phase und Lagerverfügbarkeit berücksichtigt.',
      problem:
        'Eine generische oder statische Sortierreihenfolge für Produktlisten spiegelt nicht wider, was ein Produkt für einen Käufer im jeweiligen Moment tatsächlich relevant macht – etwa ob es neu eingeführt wird, ausläuft oder aktuell verfügbar ist.',
      approach:
        'Ich führte eine relevanzbasierte Sortierfunktion ein, die auf einem Berechnungsmodell basiert und die Produktlebenszyklus-Phase (neu, auslaufend usw.) zusammen mit internen Geschäftsanforderungen wie der Lagerverfügbarkeit berücksichtigt.',
      outcome:
        'Produktlisten, die die relevantesten Artikel zuerst anzeigen – basierend auf echten Produkt- und Geschäftssignalen statt einer fixen manuellen Reihenfolge.',
    },
    {
      title: 'Marktspezifische Lagertransparenz – bis auf Konfigurationsebene',
      slug: 'in-stock-mvp',
      summary:
        'Ein MVP-Feature inklusive unterstützendem Datenprozess, das Kunden pro Markt anzeigt, ob ein Produkt und seine spezifische Konfiguration verfügbar sind.',
      problem:
        'Kunden, die auf endress.com stöberten, konnten nicht auf einen Blick erkennen, ob ein Produkt, für das sie sich interessierten, in ihrem Markt tatsächlich verfügbar war – geschweige denn in der benötigten Konfiguration.',
      approach:
        'Ich konzipierte und lancierte ein MVP-Feature zusammen mit dem dafür nötigen Datenmanagement-Prozess, um marktspezifische Lagerverfügbarkeit direkt auf den Produktseiten anzuzeigen, einschliesslich der verfügbaren Konfigurationsvarianten.',
      outcome:
        'Kunden sehen Lager- und Konfigurationsverfügbarkeit direkt auf einen Blick, was den Weg vom Stöbern zum Kauf verkürzt.',
    },
  ],

  leadershipApproach:
    'Ich habe seit rund vier Jahren ein interdisziplinäres Squad aus Business Ownern, UX und IT aufgebaut und geleitet und dabei agile Arbeitsweisen (Scrum und Kanban) fest im Teamalltag verankert. Mein Ansatz für Product Ownership liegt an der Schnittstelle von Geschäftsstrategie, Daten und Technologie: Ich dokumentiere Business-Anforderungen, User Stories und Abnahmekriterien als solide Grundlage für die Entwicklung und plane sowie führe die Abnahmetests (User Acceptance Testing) selbst durch – bis zur finalen Freigabe vor dem Go-live. Über mein eigenes Squad hinaus bin ich aktives Mitglied der squad-übergreifenden Agile Guild von endress.com, wo ich Offsites, All-Hands und Learning- und Growth-Sessions mitorganisiere und Squad Health Checks leite, um das Niveau agiler Praxis in der gesamten Organisation zu heben.',

  education: [
    {
      institution: 'FHNW School of Business',
      location: 'Basel, Schweiz',
      degree:
        'Bachelor of Science (BSc) in Business Administration, Vertiefung B2C Marketing, Nebenfach Digital Media',
      dates: '2011 bis 2016',
    },
    {
      institution: 'Wirtschaftsmittelschule',
      location: 'Basel, Schweiz',
      degree: 'Kaufmännische Berufsmatura',
      dates: '2007 bis 2010',
    },
  ],

  certifications: ['Professional Scrum Product Owner (PSPO)', 'Design Thinking'],

  skills: {
    productAndAgile: [
      'Scrum',
      'Kanban',
      'Squad- und Teamführung',
      'Roadmap- und Backlog-Management',
      'Stakeholder-Management',
      'Moderation der Agile Guild',
      'Squad Health Checks',
    ],
    dataAndAi: [
      'Metadaten-Management',
      'PIM (Product Information Management)',
      'Datengetriebene Entscheidungsfindung',
      'KI- und ML-gestützte Produktempfehlungen',
      'SAP-Verkaufsdaten',
    ],
    ecommerce: ['B2B- und B2C-E-Commerce', 'Conversion-Optimierung', 'Customer-Journey-Design'],
    tools: [
      'Jira',
      'Confluence',
      'Asana',
      'SharePoint Online',
      'SAP',
      'Google Analytics',
      'Google Data Studio',
      'FACT-Finder',
    ],
  },

  languages: [
    { language: 'Deutsch', level: 'Muttersprache' },
    { language: 'Englisch', level: 'Muttersprache' },
    { language: 'Französisch', level: 'Verhandlungssicher' },
    { language: 'Luxemburgisch', level: 'Konversationssicher' },
    { language: 'Schweizerdeutsch', level: 'Konversationssicher' },
  ],
};

export default profileDe;
