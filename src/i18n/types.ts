export type Locale = "es" | "en";

export interface Translations {
  nav: {
    capabilities: string;
    approach: string;
    technology: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    label: string;
    line1: string;
    line2: string;
    line3: string;
    subtitle1: string;
    subtitle2: string;
    cta: string;
  };
  capabilities: {
    label: string;
    title1: string;
    title2: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  approach: {
    label: string;
    title1: string;
    title2: string;
    phases: {
      title: string;
      description: string;
    }[];
  };
  techStack: {
    label: string;
    title1: string;
    title2: string;
    frontend: string;
    backend: string;
    infrastructure: string;
  };
  portfolio: {
    label: string;
    title1: string;
    title2: string;
  };
  security: {
    label: string;
    title1: string;
    title2: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  infrastructure: {
    label: string;
    title1: string;
    title2: string;
    blocks: {
      title: string;
      description: string;
    }[];
    slaTitle: string;
    slaItems: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    email: string;
    form: {
      details: string;
      project: string;
      review: string;
      name: string;
      emailLabel: string;
      company: string;
      service: string;
      scale: string;
      budget: string;
      descriptionLabel: string;
      continue: string;
      back: string;
      submit: string;
      sending: string;
      successTitle: string;
      successDescription: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      descriptionPlaceholder: string;
      selectOption: string;
      summary: string;
    };
    serviceOptions: { value: string; label: string }[];
    scaleOptions: { value: string; label: string }[];
    budgetOptions: { value: string; label: string }[];
  };
  footer: {
    tagline1: string;
    tagline2: string;
    rights: string;
  };
}
