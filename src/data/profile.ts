export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Person {
  name: string;
  currentTitle: string;
  positioningLine: string;
  location: string;
  contact: Contact;
  nationality: string;
  targetSeoPhrases: string[];
  bioShort: string;
  bioLong: string;
  /** Third-person version of bioShort, verbatim pre-rewrite text — for schema.org Person.description only. */
  bioShortSchema: string;
  /** Short first-person homepage summary of leadershipApproach. */
  leadershipSummary: string;
  /** Scannable bullets restating leadershipApproach for homepage/skills display. */
  leadershipHighlights: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  title: string;
  dates: string;
  summary: string;
  highlights: string[];
}

export interface CaseStudy {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  // Approximate publish date, mirroring the knowledge-base baseline. Used for
  // CreativeWork JSON-LD `datePublished`; refine per-study later if needed.
  publishDate: Date;
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  dates: string;
}

export interface Skills {
  productAndAgile: string[];
  dataAndAi: string[];
  ecommerce: string[];
  webAndDelivery: string[];
  tools: string[];
}

export interface Language {
  language: string;
  level: string;
}

export interface Profile {
  person: Person;
  experience: ExperienceEntry[];
  caseStudies: CaseStudy[];
  leadershipApproach: string;
  education: EducationEntry[];
  certifications: string[];
  skills: Skills;
  languages: Language[];
}

const profile: Profile = {
  person: {
    name: 'Daven Thill',
    currentTitle: 'Product Owner',
    positioningLine:
      'Product Owner in Basel, Switzerland, focused on data-driven and AI-powered B2B e-commerce products',
    location: 'Basel, Switzerland',
    contact: {
      email: 'daventhill@gmail.com',
      linkedin: 'https://linkedin.com/in/daventhill',
      github: 'https://github.com/thillydee',
    },
    nationality:
      'Luxembourg (EU), Swiss C permit, fully authorized to work in Switzerland',
    targetSeoPhrases: [
      'Product Owner Basel',
      'Product Owner Basel-Landschaft',
      'Product Owner Schweiz',
      'Data-driven Product Owner Basel',
      'AI Product Owner Switzerland',
      'Digital Product Owner B2B Basel',
      'B2B E-commerce Product Owner Switzerland',
    ],
    bioShort:
      "I'm a Product Owner based in Basel, Switzerland, with more than five years of experience leading data-driven digital products in B2B and industrial environments. I currently own the Products section of endress.com at Endress+Hauser, where I lead a cross-functional squad and have shipped AI-powered features including a sales-data-driven cross-selling engine and a relevance-based product sorting model. I hold a Professional Scrum Product Owner (PSPO) certification and previously worked in product and project management roles at MediaMarkt Switzerland and Manor AG.",
    bioLong:
      "I'm a Product Owner based in Basel, Switzerland, with more than five years of experience leading digital products end to end, from roadmap and backlog to hands-on delivery. I currently own the Products section of endress.com at Endress+Hauser, a global leader in industrial process automation and measurement instrumentation, where I've built and led a cross-functional squad of business owners, UX, and IT for around four years. My recent work centers on data and AI driven product decisions: an AI-powered cross-selling engine built on real sales data, a relevance ranking model for product listings, and a metadata and PIM migration that defines how product data is structured and consumed, including by AI tools. I'm a certified Professional Scrum Product Owner (PSPO) with additional training in Design Thinking, and hold a Bachelor of Science in Business Administration from FHNW. Before Endress+Hauser, I held product and project management roles at MediaMarkt Switzerland and Manor AG.",
    bioShortSchema:
      'Daven Thill is a Product Owner based in Basel, Switzerland, with more than five years of experience leading data-driven digital products in B2B and industrial environments. He currently owns the Products section of endress.com at Endress+Hauser, where he leads a cross-functional squad and has shipped AI-powered features including a sales-data-driven cross-selling engine and a relevance-based product sorting model. He holds a Professional Scrum Product Owner (PSPO) certification and previously worked in product and project management roles at MediaMarkt Switzerland and Manor AG.',
    leadershipSummary:
      "For around four years, I've built and led a cross-functional squad of business owners, UX, and IT — embedding agile ways of working into how we operate day to day, not running ceremonies for their own sake. Beyond my own squad, I help raise the bar across the wider organization's squads as an active member of a cross-squad Agile Guild.",
    leadershipHighlights: [
      'Run retrospectives and continuously reassess ways of working — agile ceremonies as a living practice, not a box to tick.',
      'Bridge a multi-national, multi-background team so everyone pulls in the same direction.',
      'Actively develop people — helping team members grow, not just assigning tickets.',
      'Facilitate the cross-squad Agile Guild: co-organizing offsites and All-Hands, and leading Squad Health Checks to raise agile practice across every squad, not just my own.',
    ],
  },

  experience: [
    {
      company: 'Endress+Hauser Group',
      location: 'Reinach, Basel-Landschaft, Switzerland',
      title: 'Product Owner',
      dates: 'November 2023 to present',
      summary:
        'Owns the Products section of endress.com, leading a cross-functional squad and driving data and AI powered improvements to the B2B e-commerce experience.',
      highlights: [
        'Initiated and led an AI-powered cross-selling project, replacing manually curated cross-selling logic with a calculation model grounded in real sales data to surface genuinely complementary product recommendations.',
        'Owns product-level metadata management and led the migration of product specification data from a legacy DAM to a new PIM system, defining how data is structured and consumed on endress.com and by AI tools.',
        "Enhanced endress.com's onsite search (Elasticsearch) with a business-tuned boost layer on top of its native relevance algorithm, factoring in business signals like availability and product lifecycle to surface the most relevant listings first.",
        'Designed and launched an MVP feature plus supporting data management process to show market-level stock availability on the website, including which configuration variants are available.',
        'Built and has led a cross-functional squad of business owners, UX, and IT for around four years, embedding agile ways of working (Scrum and Kanban).',
        'Owns setting up and coordinating user acceptance testing on the business side, defining use cases and acceptance criteria, and has established a structured approach with the squad that gives each member clear, role-tailored testing boundaries.',
        'Active member of the cross-squad Agile Guild for endress.com, co-organizing offsites, All-Hands, and learning and growth sessions, and leading Squad Health Checks to continuously improve ways of working across all squads.',
        "Manages SharePoint Online as an editor, administering entire sections of the organization's M365 environment.",
      ],
    },
    {
      company: 'Endress+Hauser Group',
      location: 'Reinach, Basel-Landschaft, Switzerland',
      title: 'Digital Project Manager',
      dates: 'March 2022 to October 2023',
      summary:
        'Drove digital product development for endress.com and co-built the cross-functional squad that later became a permanent product team.',
      highlights: [
        'Drove digital product development for endress.com, focused on the Products section and e-commerce.',
        'Co-built the cross-functional squad and introduced agile ways of working within the team.',
        'Coordinated between business, UX, and IT across the full product development process.',
      ],
    },
    {
      company: 'MediaMarkt Switzerland',
      location: 'Dietikon, Switzerland',
      title: 'Product Owner / Project Manager',
      dates: 'April 2021 to March 2022',
      summary: 'Owned site search and recommendation engines for the Swiss webshop.',
      highlights: [
        'Product Owner for site search and recommendation engines on the Swiss webshop.',
        'Coordinated front and back end teams using Scrum, including release and test management for webshop development.',
      ],
    },
    {
      company: 'Manor AG',
      location: 'Basel, Switzerland',
      title: 'Project Manager, Customer Experience',
      dates: 'September 2019 to January 2021',
      summary: 'Led web projects and partner integrations for manor.ch.',
      highlights: [
        'Led web projects including UX and UI improvements to payment flows and new sub-structures on manor.ch.',
        'Point of contact for partner integrations such as search engine, review system, and personalization tools.',
      ],
    },
  ],

  caseStudies: [
    {
      title: 'An AI-powered cross-selling engine built on real sales data',
      slug: 'ai-cross-selling',
      summary:
        'Replacing manually curated cross-selling logic with a data model that recommends genuinely complementary products.',
      problem:
        'Cross-selling recommendations are only as good as the logic behind them. When that logic is curated by hand rather than grounded in how customers actually buy, the products shown alongside a main product are not always genuinely complementary.',
      approach:
        'I initiated and led a project to rebuild this logic around real purchasing behavior. Working from real sales data, I drove the development of a calculation model that surfaces genuinely complementary products, then used it to power the recommendations shown on the product pages.',
      outcome:
        'The result is a cross-selling engine grounded in actual demand patterns rather than internal assumptions — surfacing product pairings that reflect how B2B customers in industrial settings actually build out their orders.',
      publishDate: new Date('2026-07-08'),
    },
    {
      title: 'Migrating product data to a modern PIM, with AI consumption in mind',
      slug: 'metadata-pim-migration',
      summary:
        'Leading a full data migration from a legacy DAM to a PIM system, and defining how product data should be structured for both the website and AI tools.',
      problem:
        'Product specification data lived in a legacy DAM (Digital Asset Management) system, not designed for the flexible, structured data consumption that a modern e-commerce site and AI-driven tools both need.',
      approach:
        'I own product-level metadata management and led the migration of this data to a new PIM (Product Information Management) system, defining the interfaces and data structures involved. Part of the work was explicitly designing how the data would be consumed — not only by the website itself, but by AI tools that increasingly need clean, structured product data to work with.',
      outcome:
        'A cleaner, more consistent product data foundation that supports both the current website and the growing set of AI-driven use cases around product data.',
      publishDate: new Date('2026-07-08'),
    },
    {
      title: 'Search Relevance Tuning: Elasticsearch + Business Logic',
      slug: 'relevance-sorting',
      summary:
        "How I tuned search relevance: a business-logic boost layer on top of Elasticsearch, without replacing its relevance engine.",
      problem:
        "Onsite search often runs on Elasticsearch, whose relevance scoring is built around text-match quality and has no built-in concept of the business context that actually determines whether a listing is worth surfacing to a B2B buyer at a given moment — things like whether a product is still current and whether it's even available in the customer's market.",
      approach:
        "Rather than replacing Elasticsearch's relevance engine, I initiated and led the design of a boost layer on top of it: a calculation model that scores each product on business signals — availability and product lifecycle among them — and translates that into boosts and penalties applied on top of Elasticsearch's native relevance score. Elasticsearch still does what it's best at, matching and ranking by search intent, while the boost layer adds the business context it has no visibility into by default.",
      outcome:
        "Search results and product listings now reflect both what a customer is looking for and what is actually relevant to buy right now, without discarding Elasticsearch's underlying relevance model — a boost layer that can keep absorbing new business signals as they become relevant to weight in.",
      publishDate: new Date('2026-07-08'),
    },
    {
      title: 'Market-level stock visibility, down to the configuration',
      slug: 'in-stock-mvp',
      summary:
        'An MVP feature and supporting data process that shows customers, per market, whether a product and its specific configuration are in stock.',
      problem:
        'Customers browsing a large B2B catalog often have no way to see, at a glance, whether a product they are interested in is actually available in their market, let alone in the specific configuration they need.',
      approach:
        'I designed and launched an MVP feature together with the supporting data management process required to power it, surfacing market-level stock availability directly on the product pages, including which configuration variants are available.',
      outcome:
        'Customers can see stock and configuration availability up front, which shortens the path from browsing to purchase.',
      publishDate: new Date('2026-07-08'),
    },
    {
      title: 'This website as a product: how I scoped, built, and maintain daventhill.ch',
      slug: 'building-this-site',
      summary:
        'Treating my own portfolio as a real product — a data-driven architecture, an SEO/AEO layer, and an AI-assisted workflow I use to keep it current.',
      problem:
        'A job search needs an asset that proves capability, not just claims it. A generic template or a static PDF turned into a webpage says nothing about whether I can actually own a digital product end to end — so I treated my own portfolio as a product, not a brochure.',
      approach:
        "I built this site on a data-driven architecture: a single TypeScript source of truth for my profile plus a markdown knowledge base, both rendered through an i18n layer into fully static, bilingual EN/DE pages, layered with an SEO/AEO structure (schema.org JSON-LD, a dedicated llms.txt for AI answer engines, per-page OG images) and a performance and accessibility budget. I maintain it with the same discipline I'd apply to any product I own: a written vision, a structured review process across content, UX, and SEO, and a running decision log — increasingly run through an AI-assisted, multi-agent workflow that I direct and sign off on.",
      outcome:
        "The result is a fast, accessible, bilingual site that's citable by AI answer engines and has been iterated on in the open, cycle by cycle, the same way I'd run a product roadmap. This case study is itself the proof — it documents the exact site you're reading it on.",
      publishDate: new Date('2026-09-20'),
    },
  ],

  leadershipApproach:
    'I have built and led a cross-functional squad of business owners, UX, and IT for around four years, embedding agile ways of working (Scrum and Kanban) into how the team operates day to day. My approach to product ownership sits at the intersection of business strategy, data, and technology: I document business requirements, user stories, and acceptance criteria as a firm foundation for development, and I plan and run user acceptance testing myself through to sign-off before anything goes live. Beyond my own squad, I am an active member of a cross-squad Agile Guild, where I help organize offsites, All-Hands, and learning and growth sessions, and lead Squad Health Checks to raise the bar on agile practice across the wider organization.',

  education: [
    {
      institution: 'FHNW School of Business',
      location: 'Basel, Switzerland',
      degree:
        'Bachelor of Science (BSc) in Business Administration, major in B2C Marketing, minor in Digital Media',
      dates: '2011 to 2016',
    },
    {
      institution: 'Wirtschaftsmittelschule',
      location: 'Basel, Switzerland',
      degree: 'Commercial Vocational Baccalaureate',
      dates: '2007 to 2010',
    },
  ],

  certifications: ['Professional Scrum Product Owner (PSPO)', 'Design Thinking'],

  skills: {
    productAndAgile: [
      'Scrum',
      'Kanban',
      'Squad and team leadership',
      'Roadmap and backlog management',
      'Stakeholder management',
      'Agile Guild facilitation',
      'Squad Health Checks',
      'UAT design & coordination',
    ],
    dataAndAi: [
      'Metadata management',
      'PIM (Product Information Management)',
      'Data-driven decision making',
      'AI and ML informed product recommendations',
      'Sales & transaction data',
      'Elasticsearch',
    ],
    ecommerce: ['B2B and B2C e-commerce', 'Conversion optimization', 'Customer journey design'],
    webAndDelivery: [
      'Astro',
      'TypeScript',
      'Tailwind CSS',
      'Web performance (Core Web Vitals)',
      'Technical SEO & AEO',
      'Accessibility (WCAG)',
      'Internationalization (i18n)',
      'CI/CD (Vercel)',
    ],
    tools: [
      'Jira',
      'Confluence',
      'Asana',
      'SharePoint Online',
      'SAP',
      'Google Analytics',
      'Google Data Studio',
    ],
  },

  languages: [
    { language: 'German', level: 'Native' },
    { language: 'English', level: 'Native' },
    { language: 'French', level: 'Business fluent' },
    { language: 'Luxembourgish', level: 'Conversational' },
    { language: 'Swiss German', level: 'Native' },
  ],
};

export default profile;
