export interface Service {
  id: string;
  title: string;
  description: string;
  number: string;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "infrastructure";
}

export interface Project {
  slug: string;
  title: string;
  label: string;
  clientType: string;
  scope: string;
  stack: string[];
  year: string;
  challenge: string;
  architecture: string;
  result: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ApproachPhase {
  number: string;
  title: string;
  description: string;
}

export interface SecurityItem {
  title: string;
  description: string;
}

export interface SLAItem {
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  scale: string;
  budget: string;
  description: string;
}
