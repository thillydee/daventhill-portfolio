export type Locale = 'en' | 'de';

export interface FaqItem {
  question: string;
  answer: string;
}

export const strings = {
  en: {
    nav: {
      experience: 'Experience',
      caseStudies: 'Case Studies',
      skills: 'Skills',
      knowledge: 'Knowledge',
      talk: "Let's talk",
    },
    footer: {
      builtWith: 'Built with Astro.',
    },
    breadcrumbs: {
      home: 'Home',
      experience: 'Experience',
      caseStudies: 'Case Studies',
      skills: 'Skills',
      contact: 'Contact',
      knowledge: 'Knowledge',
    },
    home: {
      heroSuffix: 'in Basel',
      viewCaseStudies: 'View case studies',
      getInTouch: 'Get in touch',
      currentRoleEyebrow: 'Current role',
      seeFullExperience: 'See full experience →',
      caseStudiesEyebrow: 'Case studies',
      caseStudiesHeading: 'Data and AI driven product work',
      readCaseStudy: 'Read case study →',
      faqEyebrow: 'FAQ',
      faqHeading: 'Common questions',
      ctaHeading: "Let's talk about your product",
      ctaText:
        'Based in Basel and open to Product Owner roles and projects across Basel-Landschaft and Switzerland.',
      ctaButton: 'Contact Daven',
    },
    experience: {
      title: 'Experience',
      intro:
        'More than five years leading digital products end to end, from roadmap and backlog to hands-on delivery in B2B and industrial environments.',
      eduCertHeading: 'Education & certifications',
      educationLabel: 'Education',
      certificationsLabel: 'Certifications',
    },
    caseStudies: {
      title: 'Case Studies',
      description:
        "Data and AI driven product case studies from Daven Thill's work on endress.com, covering cross-selling, PIM data, relevance sorting, and stock availability.",
      intro:
        "A closer look at data- and AI-driven product decisions from Daven Thill's work leading the Products section of endress.com.",
      readCaseStudy: 'Read case study →',
    },
    caseStudyDetail: {
      back: '← All case studies',
      problem: 'Problem',
      approach: 'Approach',
      outcome: 'Outcome',
      ctaHeading: 'Working on something similar?',
      ctaText: "Let's talk about data and AI driven product decisions for your team.",
      ctaButton: 'Get in touch',
    },
    skills: {
      title: 'Skills & approach',
      description:
        'Product, agile, data and AI skills of Daven Thill, a data-driven Product Owner based in Basel, Switzerland.',
      groups: {
        productAndAgile: 'Product & Agile',
        dataAndAi: 'Data & AI',
        ecommerce: 'E-commerce',
        tools: 'Tools',
      },
      languagesHeading: 'Languages',
    },
    contact: {
      title: 'Contact',
      heading: 'Get in touch',
      description: 'Get in touch with Daven Thill, Product Owner based in Basel, Switzerland.',
      intro:
        'Open to Product Owner roles and projects in Basel, Basel-Landschaft, and across Switzerland. Send a message below or reach out directly.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        optional: '(optional)',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending...',
        success: "Thanks, your message is on its way. I'll get back to you soon.",
        error:
          'Something went wrong sending your message. Please try emailing directly instead.',
      },
      directContact: 'Direct contact',
    },
    notFound: {
      title: 'Page not found',
      text: "The page you're looking for doesn't exist or has moved.",
      button: 'Back to home',
    },
    knowledge: {
      title: 'Knowledge',
      description:
        "Glossary explainers and FAQ answers from Daven Thill's practice as a Product Owner in Basel, covering concepts like squads, guilds, and product data.",
      intro:
        'Explainers and answers grounded in real product work, not generic definitions — glossary concepts and frequently asked questions, updated regularly.',
      conceptsHeading: 'Concepts',
      faqHeading: 'FAQ',
      back: '← All knowledge',
      relatedCaseStudiesHeading: 'Related case studies',
    },
    faq: [
      {
        question: 'What does a Product Owner in Basel do?',
        answer:
          "A Product Owner in Basel typically owns the roadmap and backlog for a digital product, working across business, UX, and IT to turn requirements into shipped features. In B2B and industrial contexts, like Basel's life sciences and industrial technology cluster, that also means grounding decisions in real data rather than assumptions.",
      },
      {
        question: 'Why work with Daven Thill?',
        answer:
          'Daven Thill is a Product Owner based in Basel, Switzerland, with more than five years of experience leading data-driven digital products in B2B and industrial environments. He currently owns the Products section of endress.com at Endress+Hauser, where he leads a cross-functional squad and has shipped AI-powered features including a sales-data-driven cross-selling engine and a relevance-based product sorting model. He holds a Professional Scrum Product Owner (PSPO) certification and previously worked in product and project management roles at MediaMarkt Switzerland and Manor AG.',
      },
      {
        question: 'Does Daven Thill work with AI-powered product features?',
        answer:
          'Yes. At Endress+Hauser he has initiated and led AI and data driven features including a sales-data-based cross-selling engine, a relevance ranking model for product listings, and a PIM data migration designed with AI consumption in mind.',
      },
    ] satisfies FaqItem[],
    langSwitch: { label: 'DE', full: 'Deutsch' },
  },
  de: {
    nav: {
      experience: 'Erfahrung',
      caseStudies: 'Case Studies',
      skills: 'Skills',
      knowledge: 'Wissen',
      talk: 'Kontakt aufnehmen',
    },
    footer: {
      builtWith: 'Erstellt mit Astro.',
    },
    breadcrumbs: {
      home: 'Startseite',
      experience: 'Erfahrung',
      caseStudies: 'Case Studies',
      skills: 'Skills',
      contact: 'Kontakt',
      knowledge: 'Wissen',
    },
    home: {
      heroSuffix: 'in Basel',
      viewCaseStudies: 'Case Studies ansehen',
      getInTouch: 'Kontakt aufnehmen',
      currentRoleEyebrow: 'Aktuelle Position',
      seeFullExperience: 'Gesamte Erfahrung ansehen →',
      caseStudiesEyebrow: 'Case Studies',
      caseStudiesHeading: 'Daten- und KI-getriebene Produktarbeit',
      readCaseStudy: 'Case Study lesen →',
      faqEyebrow: 'FAQ',
      faqHeading: 'Häufige Fragen',
      ctaHeading: 'Lassen Sie uns über Ihr Produkt sprechen',
      ctaText:
        'Ansässig in Basel und offen für Product-Owner-Rollen und Projekte in Basel-Landschaft und der gesamten Schweiz.',
      ctaButton: 'Daven kontaktieren',
    },
    experience: {
      title: 'Erfahrung',
      intro:
        'Mehr als fünf Jahre End-to-End-Führung digitaler Produkte – von Roadmap und Backlog bis zur operativen Umsetzung im B2B- und Industrieumfeld.',
      eduCertHeading: 'Ausbildung & Zertifizierungen',
      educationLabel: 'Ausbildung',
      certificationsLabel: 'Zertifizierungen',
    },
    caseStudies: {
      title: 'Case Studies',
      description:
        'Daten- und KI-getriebene Produkt-Case-Studies aus der Arbeit von Daven Thill auf endress.com, zu Cross-Selling, PIM-Daten, Relevanz-Sortierung und Lagerverfügbarkeit.',
      intro:
        'Ein genauerer Blick auf daten- und KI-getriebene Produktentscheidungen aus Daven Thills Arbeit als Verantwortlicher des Bereichs Products von endress.com.',
      readCaseStudy: 'Case Study lesen →',
    },
    caseStudyDetail: {
      back: '← Alle Case Studies',
      problem: 'Problem',
      approach: 'Vorgehen',
      outcome: 'Ergebnis',
      ctaHeading: 'Arbeiten Sie an etwas Ähnlichem?',
      ctaText: 'Lassen Sie uns über daten- und KI-getriebene Produktentscheidungen für Ihr Team sprechen.',
      ctaButton: 'Kontakt aufnehmen',
    },
    skills: {
      title: 'Skills & Arbeitsweise',
      description:
        'Product-, Agile-, Daten- und KI-Skills von Daven Thill, einem datengetriebenen Product Owner mit Sitz in Basel.',
      groups: {
        productAndAgile: 'Produkt & Agil',
        dataAndAi: 'Daten & KI',
        ecommerce: 'E-Commerce',
        tools: 'Tools',
      },
      languagesHeading: 'Sprachen',
    },
    contact: {
      title: 'Kontakt',
      heading: 'Kontakt aufnehmen',
      description: 'Nehmen Sie Kontakt mit Daven Thill auf, Product Owner mit Sitz in Basel.',
      intro:
        'Offen für Product-Owner-Rollen und Projekte in Basel, Basel-Landschaft und der gesamten Schweiz. Senden Sie unten eine Nachricht oder melden Sie sich direkt.',
      form: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        optional: '(optional)',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Danke, Ihre Nachricht ist unterwegs. Ich melde mich in Kürze bei Ihnen.',
        error:
          'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte schreiben Sie stattdessen direkt eine E-Mail.',
      },
      directContact: 'Direktkontakt',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
      button: 'Zurück zur Startseite',
    },
    knowledge: {
      title: 'Wissen',
      description:
        'Glossar-Erklärungen und FAQ-Antworten aus der Praxis von Daven Thill als Product Owner in Basel, zu Konzepten wie Squads, Guilds und Produktdaten.',
      intro:
        'Erklärungen und Antworten aus echter Produktarbeit, keine generischen Definitionen – Glossar-Begriffe und häufig gestellte Fragen, regelmässig erweitert.',
      conceptsHeading: 'Konzepte',
      faqHeading: 'FAQ',
      back: '← Alle Wissensartikel',
      relatedCaseStudiesHeading: 'Verwandte Case Studies',
    },
    faq: [
      {
        question: 'Was macht ein Product Owner in Basel?',
        answer:
          'Ein Product Owner in Basel verantwortet in der Regel Roadmap und Backlog eines digitalen Produkts und arbeitet dabei eng mit Business, UX und IT zusammen, um Anforderungen in ausgelieferte Features zu übersetzen. Im B2B- und Industrieumfeld, wie im Basler Life-Sciences- und Industrietechnik-Cluster, bedeutet das auch, Entscheidungen auf echte Daten statt auf Annahmen zu stützen.',
      },
      {
        question: 'Warum mit Daven Thill zusammenarbeiten?',
        answer:
          'Daven Thill ist Product Owner mit Sitz in Basel und verfügt über mehr als fünf Jahre Erfahrung in der Leitung datengetriebener digitaler Produkte im B2B- und Industrieumfeld. Aktuell verantwortet er den Bereich Products von endress.com bei Endress+Hauser, wo er ein interdisziplinäres Squad leitet und KI-gestützte Features realisiert hat, darunter eine auf Verkaufsdaten basierende Cross-Selling-Engine und ein relevanzbasiertes Sortiermodell für Produkte. Er ist zertifizierter Professional Scrum Product Owner (PSPO) und war zuvor in Product- und Projektmanagement-Rollen bei MediaMarkt Schweiz und der Manor AG tätig.',
      },
      {
        question: 'Arbeitet Daven Thill mit KI-gestützten Produkt-Features?',
        answer:
          'Ja. Bei Endress+Hauser hat er KI- und datengetriebene Features initiiert und geleitet, darunter eine auf Verkaufsdaten basierende Cross-Selling-Engine, ein Relevanzmodell für Produktlisten und eine PIM-Datenmigration, die gezielt auch für die Nutzung durch KI konzipiert wurde.',
      },
    ] satisfies FaqItem[],
    langSwitch: { label: 'EN', full: 'English' },
  },
} as const;

export type Strings = typeof strings.en;
