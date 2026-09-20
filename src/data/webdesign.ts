import type { Locale } from '../i18n';

export interface WebDesignPackage {
  name: string;
  price: string;
  priceSchema: string;
  tagline: string;
  intro: string;
  items: string[];
  duration: string;
}

export interface WebDesignStep {
  title: string;
  text: string;
}

export interface WebDesignFaq {
  question: string;
  answer: string;
}

export interface WebDesignContent {
  meta: { title: string; description: string };
  hero: { headline: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  philosophy: { heading: string; body: string[] };
  proof: { text: string; linkLabel: string };
  offer: { eyebrow: string; heading: string; intro: string };
  freeCheck: { title: string; text: string; cta: string };
  workshop: {
    name: string;
    price: string;
    priceSchema: string;
    tagline: string;
    intro: string;
    items: string[];
  };
  packages: WebDesignPackage[];
  selfBuild: {
    name: string;
    price: string;
    priceSchema: string;
    tagline: string;
    intro: string;
    items: string[];
  };
  care: { name: string; price: string; intro: string };
  handover: { name: string; price: string; priceSchema: string; intro: string };
  larger: { label: string; text: string };
  addons: { label: string; items: string[] };
  reference: { eyebrow: string; heading: string; body: string; cta: string };
  ablauf: { eyebrow: string; heading: string; steps: WebDesignStep[] };
  faq: { eyebrow: string; heading: string; items: WebDesignFaq[] };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    form: {
      name: string;
      email: string;
      business: string;
      businessPlaceholder: string;
      message: string;
      optional: string;
      submit: string;
    };
    status: { sending: string; success: string; error: string };
  };
  breadcrumb: { home: string; self: string };
  service: { name: string; description: string; areaServed: string };
}

const en: WebDesignContent = {
  meta: {
    title: 'Web Design for Local Businesses in Basel',
    description:
      'I help local businesses turn who they are into a website that brings in the right people — from a simple move to a new build, to the full journey from vision to launch.',
  },
  hero: {
    headline: 'A website that actually sounds like your business.',
    sub: "I'm a Product Owner in Basel. On the side, I help local businesses turn who they are — their vision, their voice, the way they work — into a website that brings in the right people. From a simple move onto a faster foundation, to the full journey from first idea to launch.",
    ctaPrimary: 'Get a free website check',
    ctaSecondary: 'How we can work together',
  },
  philosophy: {
    heading: 'A website is a product, not a picture.',
    body: [
      "Most website projects start with “how should it look.” I start with who you are and what you're trying to achieve — your services, the people you want to reach, and what sets you apart from the shop down the street.",
      'Only then does the rest follow: the structure, the words, the look and feel, the way it gets found on Google. A good website isn’t a nice picture of your business — it’s a tool with a job, and the job is getting the right people to get in touch.',
      "And I'll tell you honestly where your real lever is. For a lot of local businesses it isn't the website at all — it's the Google Business Profile. Usually it's both, and they only work together. I'd rather point you at what actually moves the needle than sell you everything I offer.",
    ],
  },
  proof: {
    text: 'This very site is a worked example — I built and maintain it as a product, from a single-source architecture to the AI-assisted workflow that keeps it current.',
    linkLabel: 'See how I built it',
  },
  offer: {
    eyebrow: 'How we can work together',
    heading: 'Meet you where you are.',
    intro:
      'Start with a free check, a single workshop, a simple move, or the whole journey — whatever fits where your business is right now.',
  },
  freeCheck: {
    title: 'Free website check',
    text: 'Not sure where you stand? Send me your current site and I’ll come back with an honest, no-obligation read on what would make the biggest difference — website, Google profile, or both.',
    cta: 'Request a free check',
  },
  workshop: {
    name: 'Strategy workshop',
    price: 'CHF 490',
    priceSchema: '490',
    tagline: 'Figure out what your site should actually do.',
    intro:
      'We sit down — in person in Basel or by video — and dig into your business: your vision, your services, the people you want to reach, what sets you apart. You walk away with a clear structure and content plan for your site, yours to keep whether you build it with me or not.',
    items: [
      'A working session focused on your vision and goals',
      'A concrete site structure and content plan you own',
      'Fully credited toward any build if you go on to work with me',
    ],
  },
  packages: [
    {
      name: 'Move',
      price: 'from CHF 690',
      priceSchema: '690',
      tagline: 'Your content, a better foundation.',
      intro:
        'Your existing site, rebuilt on a fast, clean, mobile foundation and hosted on my setup. Same content — a structure that actually works and a site that loads instantly. The accessible way off Wix or Squarespace.',
      items: [
        'Your existing content, rebuilt with a cleaner structure',
        'Fast, mobile, on the same stack this site runs on',
        'Google Business Profile and local-visibility basics (NAP, LocalBusiness schema)',
        'Imprint and privacy policy (revDSG-compliant)',
        'Hosting and upkeep via the care plan (included)',
      ],
      duration: '≈ 2 weeks',
    },
    {
      name: 'New website',
      price: 'from CHF 2,400',
      priceSchema: '2400',
      tagline: 'Built around your business, not a template.',
      intro:
        'For businesses ready to get it right, not just moved over. We start with the strategy workshop, shape a structure and a design concept — look and feel, colours, typography — and build a proper new site with the basics of SEO in place.',
      items: [
        'Strategy workshop included',
        'Five to seven pages, designed for your business — not a template',
        'Design concept: look and feel, colour, typography',
        'Clean structure, polished copy, basic SEO',
        'Everything from Move included',
      ],
      duration: '≈ 4 to 6 weeks',
    },
    {
      name: 'The whole journey',
      price: 'from CHF 5,900',
      priceSchema: '5900',
      tagline: 'From first idea to launch — and beyond.',
      intro:
        'The full partnership. We start with your vision and go the whole way: strategy, a complete design concept and voice, content written for you, bilingual if you need it, and a site built to actually generate enquiries — plus aftercare while it finds its feet. At full scope — bilingual, several pages, content written from scratch, like ava-beauty.ch — a project typically lands between CHF 6,500 and 9,000.',
      items: [
        'Everything from New website',
        'Deep vision and brand work: voice, tone, visual identity',
        'Content written from scratch, in your voice',
        'Bilingual German/English',
        'SEO plus lead-generation and e-commerce optimization',
        'Image concept: coordinate a shoot or work with what you have',
        'Three months of aftercare after launch',
      ],
      duration: 'Quoted after the workshop',
    },
  ],
  selfBuild: {
    name: 'Do it yourself',
    price: 'from CHF 1,200',
    priceSchema: '1200',
    tagline: 'Run your own site on my framework, with Claude.',
    intro:
      'Prefer to own the whole thing and keep it in-house? I set you up to build and maintain your own site on the same framework I use for mine — then hand you the keys. It pairs with how I run this very site, so you get a proven setup, not a blank page.',
    items: [
      'An onboarding session and your framework scaffolded, ready to run',
      'A walkthrough of the AI-assisted workflow — how to update and extend it with Claude',
      '2 to 4 weeks of support while you find your feet',
      'Optional light support retainer after that',
    ],
  },
  care: {
    name: 'Care plan',
    price: 'CHF 45/month or CHF 480/year',
    intro:
      'Hosting, domain, updates, backups, and small changes — send me the new price or opening hours and it’s live the next day. And if you want, steady improvements over time. Included with Move; optional but recommended on every build.',
  },
  handover: {
    name: 'Own it outright',
    price: 'CHF 890 one-time',
    priceSchema: '890',
    intro:
      'No lock-in, ever. At the end of any build you can take full ownership of the repository and hosting setup for a one-time fee — including a handover session and a short guide to keeping it running with Claude. Most people stay on the care plan because it’s simpler, but the door is always open.',
  },
  larger: {
    label: 'Something bigger',
    text: 'An online shop, a larger site, or ongoing campaigns go beyond the packages above — that’s a quote after a first conversation, not a fixed price.',
  },
  addons: {
    label: 'Add-ons',
    items: [
      'Second language: +25–30% of the base package',
      'Content written from scratch, per page: CHF 250–400',
      'Google Business Profile on its own, without a website package: CHF 400',
    ],
  },
  reference: {
    eyebrow: 'Reference project',
    heading: 'ava-beauty.ch — a website for Sandra, hair & make-up artist in Basel',
    body: "Bilingual German/English, built on Astro, with five dedicated service pages, a portfolio, an about page and contact. Every page has its own social preview image, all images are optimized to load fast, and the copy is written for each language separately — not translated, but reformulated to fit Sandra's business in both.",
    cta: 'Visit ava-beauty.ch →',
  },
  ablauf: {
    eyebrow: 'How it works',
    heading: 'From first conversation to launch',
    steps: [
      {
        title: 'First conversation',
        text: "Free and no-obligation, by video or in person in Basel. We look at where you are and whether we're a fit — and I'll give you an honest read on your biggest lever.",
      },
      {
        title: 'Workshop',
        text: 'We dig into your vision, your services and the people you want to reach, and turn it into a concrete plan. (Smaller projects skip straight ahead.)',
      },
      {
        title: 'Concept',
        text: 'Structure, design concept and voice — how the site is built up, how it looks, how it sounds.',
      },
      {
        title: 'Build',
        text: 'I build it, write or refine the content, and optimize it to be found and to bring in enquiries. You see progress as it happens, not just at the end.',
      },
      {
        title: 'Launch & care',
        text: 'The site goes live. With a care plan I take hosting, updates and ongoing improvements off your plate from there.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    items: [
      {
        question: 'Do I have to do the whole journey?',
        answer:
          "No — that's the point of starting with a free check or a single workshop. Plenty of businesses start with a simple Move onto a faster setup and grow from there. I'd rather get you the one thing that helps most than sell you the biggest package.",
      },
      {
        question: 'Can I change content myself?',
        answer:
          "After launch you can send me small changes any time — a new price, new opening hours, a new photo — and I'll have them live, usually the next day. That's part of the care plan (CHF 45/month or CHF 480/year). If you'd rather manage bigger content yourself, we'll set that up in the workshop.",
      },
      {
        question: 'What does the upkeep cost?',
        answer:
          "The care plan is CHF 45 a month or CHF 480 a year and covers hosting, domain, updates, backups and small content changes. Without it you take on hosting and domain yourself — I'm happy to advise if you prefer that.",
      },
      {
        question: 'How long does it take?',
        answer:
          'A Move is around two weeks. A new build (New website or the whole journey) runs four to six weeks and up, depending on scope and how quickly content and feedback come from your side.',
      },
      {
        question: 'What if I already have a Wix site?',
        answer:
          "No problem — a Move rebuilds your existing content on a faster, cleaner foundation, whether it's Wix, Squarespace or anything else, and fixes the most common technical gaps along the way. A full rebuild only makes sense once the site itself is the thing holding you back — and I'll tell you honestly if it isn't.",
      },
    ],
  },
  contact: {
    eyebrow: 'Get in touch',
    heading: 'Tell me about your business',
    intro:
      "Tell me a bit about your business — or send your current site for a free check — and I'll come back within 1–2 working days with an honest take on what would make the biggest difference.",
    form: {
      name: 'Name',
      email: 'Email',
      business: 'Type of business',
      businessPlaceholder: 'e.g. barber, tradesperson, practice',
      message: 'Message',
      optional: 'optional',
      submit: 'Send enquiry',
    },
    status: {
      sending: 'Sending…',
      success: "Thanks! I'll get back to you within 1–2 working days.",
      error: 'Something went wrong. Email me directly at daventhill@gmail.com.',
    },
  },
  breadcrumb: { home: 'Home', self: 'Web Design' },
  service: {
    name: 'Web design for local businesses',
    description:
      'Websites for local businesses in Basel and the surrounding area: a free check, a strategy workshop, a simple move, a new build, or the full journey from vision to launch — with clear packages and transparent prices.',
    areaServed: 'Nordwestschweiz',
  },
};

const de: WebDesignContent = {
  meta: {
    title: 'Webdesign für lokale Betriebe in Basel',
    description:
      'Ich helfe lokalen Betrieben, das, was sie ausmacht, in eine Website zu übersetzen, die die richtigen Leute bringt — vom einfachen Umzug über eine neue Website bis zur ganzen Reise von der Vision bis zum Livegang.',
  },
  hero: {
    headline: 'Eine Website, die klingt wie Ihr Betrieb.',
    sub: 'Ich bin Product Owner in Basel. Nebenbei helfe ich lokalen Betrieben, das, was sie ausmacht — ihre Vision, ihre Stimme, ihre Art zu arbeiten — in eine Website zu übersetzen, die die richtigen Leute bringt. Vom einfachen Umzug auf ein schnelleres Fundament bis zur ganzen Reise von der ersten Idee bis zum Livegang.',
    ctaPrimary: 'Kostenlosen Website-Check anfragen',
    ctaSecondary: 'So arbeiten wir zusammen',
  },
  philosophy: {
    heading: 'Eine Website ist ein Produkt. Kein Bild.',
    body: [
      'Die meisten Website-Projekte beginnen mit „wie soll es aussehen“. Ich beginne mit der Frage, wer Sie sind und was Sie erreichen wollen — Ihre Leistungen, die Menschen, die Sie ansprechen wollen, und was Sie vom Betrieb um die Ecke unterscheidet.',
      'Erst danach folgt der Rest: die Struktur, die Worte, das Aussehen, die Auffindbarkeit bei Google. Eine gute Website ist kein schönes Bild Ihres Betriebs — sie ist ein Werkzeug mit einer Aufgabe, und die Aufgabe ist, dass sich die richtigen Leute bei Ihnen melden.',
      'Und ich sage Ihnen offen, wo Ihr eigentlicher Hebel liegt. Für viele lokale Betriebe ist es gar nicht die Website — sondern das Google-Unternehmensprofil. Meist ist es beides, und beides wirkt nur zusammen. Ich zeige Ihnen lieber, was wirklich etwas bewegt, als Ihnen alles zu verkaufen, was ich anbiete.',
    ],
  },
  proof: {
    text: 'Diese Seite ist ein Beispiel aus der Praxis — ich habe sie als Produkt gebaut und pflege sie so, von einer Single-Source-Architektur bis zum KI-gestützten Workflow, der sie aktuell hält.',
    linkLabel: 'So habe ich sie gebaut',
  },
  offer: {
    eyebrow: 'Wie wir zusammenarbeiten können',
    heading: 'Ich hole Sie dort ab, wo Sie stehen.',
    intro:
      'Beginnen Sie mit einem kostenlosen Check, einem einzelnen Workshop, einem einfachen Umzug oder der ganzen Reise — je nachdem, wo Ihr Betrieb gerade steht.',
  },
  freeCheck: {
    title: 'Kostenloser Website-Check',
    text: 'Unsicher, wo Sie stehen? Schicken Sie mir Ihre aktuelle Seite, und ich melde mich mit einer ehrlichen, unverbindlichen Einschätzung, was den grössten Unterschied machen würde — Website, Google-Profil oder beides.',
    cta: 'Kostenlosen Check anfragen',
  },
  workshop: {
    name: 'Strategie-Workshop',
    price: 'CHF 490',
    priceSchema: '490',
    tagline: 'Herausfinden, was Ihre Seite eigentlich leisten soll.',
    intro:
      'Wir setzen uns zusammen — vor Ort in Basel oder per Video — und gehen Ihrem Betrieb auf den Grund: Ihre Vision, Ihre Leistungen, die Menschen, die Sie erreichen wollen, und was Sie besonders macht. Sie gehen mit einer klaren Struktur und einem Inhaltsplan für Ihre Seite nach Hause — Ihr Plan, egal ob Sie ihn mit mir oder selbst umsetzen.',
    items: [
      'Eine Arbeitssitzung rund um Ihre Vision und Ziele',
      'Eine konkrete Seitenstruktur und einen Inhaltsplan, die Ihnen gehören',
      'Wird vollständig angerechnet, wenn Sie danach mit mir bauen',
    ],
  },
  packages: [
    {
      name: 'Umzug',
      price: 'ab CHF 690',
      priceSchema: '690',
      tagline: 'Ihre Inhalte, ein besseres Fundament.',
      intro:
        'Ihre bestehende Seite, neu gebaut auf einem schnellen, sauberen, mobilen Fundament und auf meinem Setup gehostet. Gleiche Inhalte — eine Struktur, die funktioniert, und eine Seite, die sofort lädt. Der einfache Weg weg von Wix oder Squarespace.',
      items: [
        'Ihre bestehenden Inhalte, neu mit sauberer Struktur aufgebaut',
        'Schnell, mobil, auf demselben Fundament wie diese Seite',
        'Google-Unternehmensprofil und lokale Sichtbarkeit (NAP, LocalBusiness-Schema)',
        'Impressum und Datenschutzerklärung (revDSG-konform)',
        'Hosting und Pflege über die Betreuung (inklusive)',
      ],
      duration: '≈ 2 Wochen',
    },
    {
      name: 'Neue Website',
      price: 'ab CHF 2’400',
      priceSchema: '2400',
      tagline: 'Um Ihren Betrieb herum gebaut, nicht aus einer Vorlage.',
      intro:
        'Für Betriebe, die es richtig machen wollen, nicht nur umziehen. Wir starten mit dem Strategie-Workshop, entwickeln eine Struktur und ein Gestaltungskonzept — Look and Feel, Farben, Typografie — und bauen eine richtige neue Seite mit solider Basis-SEO.',
      items: [
        'Strategie-Workshop inklusive',
        'Fünf bis sieben Seiten, für Ihren Betrieb gestaltet — keine Vorlage',
        'Gestaltungskonzept: Look and Feel, Farbe, Typografie',
        'Saubere Struktur, geschliffene Texte, Basis-SEO',
        'Alles aus dem Umzug inklusive',
      ],
      duration: '≈ 4 bis 6 Wochen',
    },
    {
      name: 'Die ganze Reise',
      price: 'ab CHF 5’900',
      priceSchema: '5900',
      tagline: 'Von der ersten Idee bis zum Livegang — und darüber hinaus.',
      intro:
        'Die volle Partnerschaft. Wir starten bei Ihrer Vision und gehen den ganzen Weg: Strategie, ein komplettes Gestaltungs- und Sprachkonzept, Texte, die für Sie geschrieben werden, zweisprachig wenn nötig, und eine Seite, die wirklich Anfragen bringt — plus Betreuung, während sie sich einspielt. Im vollen Umfang — zweisprachig, mehrere Seiten, Texte von Grund auf, wie bei ava-beauty.ch — liegt ein Projekt typischerweise zwischen CHF 6’500 und 9’000.',
      items: [
        'Alles aus der neuen Website',
        'Tiefe Vision- und Markenarbeit: Stimme, Ton, visuelle Identität',
        'Texte von Grund auf, in Ihrer Sprache geschrieben',
        'Zweisprachig Deutsch/Englisch',
        'SEO plus Optimierung für Lead-Generierung und E-Commerce',
        'Bildkonzept: Shooting koordinieren oder bestehendes Material aufbereiten',
        'Drei Monate Betreuung nach dem Livegang',
      ],
      duration: 'Offerte nach dem Workshop',
    },
  ],
  selfBuild: {
    name: 'In Eigenregie',
    price: 'ab CHF 1’200',
    priceSchema: '1200',
    tagline: 'Ihre eigene Seite auf meinem Framework betreiben, mit Claude.',
    intro:
      'Lieber alles selbst besitzen und im Haus behalten? Ich richte Sie so ein, dass Sie Ihre eigene Seite auf demselben Framework bauen und pflegen, das ich für meine nutze — und übergebe Ihnen dann die Schlüssel. Es baut darauf auf, wie ich diese Seite hier betreibe: Sie bekommen ein bewährtes Setup, kein leeres Blatt.',
    items: [
      'Eine Einführungssitzung und Ihr Framework startklar aufgesetzt',
      'Eine Anleitung zum KI-gestützten Workflow — wie Sie mit Claude aktualisieren und erweitern',
      '2 bis 4 Wochen Unterstützung für den Start',
      'Optional ein leichtes Support-Abo danach',
    ],
  },
  care: {
    name: 'Betreuung',
    price: 'CHF 45/Monat oder CHF 480/Jahr',
    intro:
      'Hosting, Domain, Updates, Backups und kleine Änderungen — Sie schicken mir den neuen Preis oder die neuen Öffnungszeiten, am nächsten Tag steht’s auf der Seite. Und wenn Sie möchten, laufende Verbesserungen über die Zeit. Beim Umzug inklusive; bei jedem Bau optional, aber empfohlen.',
  },
  handover: {
    name: 'Selbst übernehmen',
    price: 'CHF 890 einmalig',
    priceSchema: '890',
    intro:
      'Keine Bindung, nie. Am Ende jedes Projekts können Sie das Repository und das Hosting-Setup gegen eine einmalige Gebühr vollständig übernehmen — inklusive einer Übergabesitzung und einer kurzen Anleitung, wie Sie es mit Claude am Laufen halten. Die meisten bleiben bei der Betreuung, weil es einfacher ist, aber die Tür steht immer offen.',
  },
  larger: {
    label: 'Etwas Grösseres',
    text: 'Ein Online-Shop, eine umfangreichere Seite oder laufende Kampagnen gehen über die Pakete oben hinaus — dafür gibt es eine Offerte nach einem ersten Gespräch, keinen Fixpreis.',
  },
  addons: {
    label: 'Zusatzleistungen',
    items: [
      'Zweite Sprache: +25–30 % des Grundpakets',
      'Texte von Grund auf, pro Seite: CHF 250–400',
      'Google-Unternehmensprofil separat, ohne Website-Paket: CHF 400',
    ],
  },
  reference: {
    eyebrow: 'Referenzprojekt',
    heading: 'ava-beauty.ch — Website für Sandra, Hair & Make-up Artist in Basel',
    body: 'Zweisprachig Deutsch/Englisch, gebaut auf Astro, mit fünf eigenen Leistungsseiten, Portfolio, Über-mich- und Kontaktseite. Jede Seite hat eine eigene Social-Vorschau, alle Bilder sind für schnelles Laden optimiert, und die Texte sind für jede Sprache separat geschrieben — nicht übersetzt, sondern für Sandras Betrieb in beiden Sprachen neu formuliert.',
    cta: 'ava-beauty.ch ansehen →',
  },
  ablauf: {
    eyebrow: 'Ablauf',
    heading: 'Vom ersten Gespräch bis zum Livegang',
    steps: [
      {
        title: 'Erstgespräch',
        text: 'Kostenlos und unverbindlich, per Video oder vor Ort in Basel. Wir schauen, wo Sie stehen und ob es passt — und ich gebe Ihnen eine ehrliche Einschätzung zu Ihrem grössten Hebel.',
      },
      {
        title: 'Workshop',
        text: 'Wir gehen Ihrer Vision, Ihren Leistungen und Ihrer Zielgruppe auf den Grund und machen daraus einen konkreten Plan. (Kleinere Projekte überspringen diesen Schritt.)',
      },
      {
        title: 'Konzept',
        text: 'Struktur, Gestaltungskonzept und Sprache — wie die Seite aufgebaut ist, wie sie aussieht, wie sie klingt.',
      },
      {
        title: 'Umsetzung',
        text: 'Ich baue sie, schreibe oder schärfe die Texte und optimiere sie auf Auffindbarkeit und Anfragen. Sie sehen den Fortschritt laufend, nicht erst am Schluss.',
      },
      {
        title: 'Livegang & Betreuung',
        text: 'Die Seite geht online. Mit Betreuung nehme ich Ihnen Hosting, Updates und laufende Verbesserungen ab hier ab.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Häufige Fragen',
    items: [
      {
        question: 'Muss ich gleich die ganze Reise machen?',
        answer:
          'Nein — genau deshalb beginnt es mit einem kostenlosen Check oder einem einzelnen Workshop. Viele Betriebe starten mit einem einfachen Umzug auf ein schnelleres Fundament und wachsen von dort. Ich hole lieber das Eine für Sie heraus, das am meisten bringt, als Ihnen das grösste Paket zu verkaufen.',
      },
      {
        question: 'Kann ich Inhalte selbst ändern?',
        answer:
          'Nach dem Livegang können Sie mir kleine Änderungen jederzeit schicken — neuer Preis, neue Öffnungszeiten, neues Bild — und ich setze sie um, meist noch am nächsten Tag. Das ist Teil der Betreuung (CHF 45/Monat oder CHF 480/Jahr). Wenn Sie grössere Inhalte lieber selbst pflegen, richten wir das im Workshop ein.',
      },
      {
        question: 'Was kostet der Betrieb?',
        answer:
          'Die Betreuung kostet CHF 45 im Monat oder CHF 480 im Jahr und deckt Hosting, Domain, Updates, Backups und kleine Inhaltsänderungen ab. Ohne Betreuung übernehmen Sie Hosting und Domain selbst — dazu berate ich Sie gerne, wenn Sie das bevorzugen.',
      },
      {
        question: 'Wie lange dauert es?',
        answer:
          'Ein Umzug dauert rund zwei Wochen. Ein Neubau (neue Website oder die ganze Reise) dauert vier bis sechs Wochen und mehr, je nach Umfang und wie schnell Inhalte und Feedback von Ihrer Seite kommen.',
      },
      {
        question: 'Was, wenn ich schon eine Wix-Seite habe?',
        answer:
          'Kein Problem — ein Umzug baut Ihre bestehenden Inhalte auf einem schnelleren, saubereren Fundament neu auf, egal ob Wix, Squarespace oder etwas anderes, und behebt dabei die häufigsten technischen Lücken. Ein kompletter Neubau lohnt sich erst, wenn die Seite selbst Sie ausbremst — und das sage ich Ihnen ehrlich, wenn es nicht so ist.',
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    heading: 'Erzählen Sie mir von Ihrem Betrieb',
    intro:
      'Erzählen Sie mir kurz von Ihrem Betrieb — oder schicken Sie Ihre aktuelle Seite für einen kostenlosen Check — und ich melde mich innerhalb von 1–2 Werktagen mit einer ehrlichen Einschätzung, was den grössten Unterschied machen würde.',
    form: {
      name: 'Name',
      email: 'E-Mail',
      business: 'Art des Betriebs',
      businessPlaceholder: 'z. B. Coiffeur, Handwerksbetrieb, Praxis',
      message: 'Nachricht',
      optional: 'optional',
      submit: 'Anfrage senden',
    },
    status: {
      sending: 'Wird gesendet…',
      success: 'Danke! Ich melde mich innerhalb von 1–2 Werktagen.',
      error: 'Da ist etwas schiefgelaufen. Schreiben Sie mir direkt an daventhill@gmail.com.',
    },
  },
  breadcrumb: { home: 'Startseite', self: 'Webdesign' },
  service: {
    name: 'Webdesign für lokale Betriebe',
    description:
      'Websites für lokale Betriebe in Basel und Umgebung: kostenloser Check, Strategie-Workshop, einfacher Umzug, Neubau oder die ganze Reise von der Vision bis zum Livegang — mit klaren Paketen und transparenten Preisen.',
    areaServed: 'Nordwestschweiz',
  },
};

const webdesign: Record<Locale, WebDesignContent> = { en, de };

export function getWebDesign(locale: Locale): WebDesignContent {
  return webdesign[locale];
}

export default webdesign;
