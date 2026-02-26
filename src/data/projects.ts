import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "vectral-logistics",
    title: "Vectral Logistics Platform",
    label: "Conceptual Case Study",
    clientType: "Enterprise Logistics",
    scope: "Full-stack operations platform",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "n8n"],
    year: "2025",
    challenge:
      "A regional logistics operator required a centralized platform to replace fragmented spreadsheet-based tracking across 12 distribution centers. The existing process lacked real-time visibility into shipment status, route optimization, and driver allocation — resulting in a 23% late-delivery rate and manual reconciliation across disconnected systems.",
    architecture:
      "We designed a modular platform with a Next.js frontend consuming a Node.js API layer backed by PostgreSQL. The system implements event-driven shipment tracking with webhook-based status updates via n8n. Route optimization runs as a background service, and the dashboard surfaces real-time KPIs through server-sent events. Deployment is containerized via Docker with automated CI/CD through GitHub Actions.",
    result:
      "Late-delivery rate reduced to 4.8%. Manual data reconciliation eliminated. Operational visibility increased across all 12 centers through a unified dashboard with role-based access control.",
  },
  {
    slug: "meridian-compliance",
    title: "Meridian Compliance Engine",
    label: "Internal System Prototype",
    clientType: "Financial Services",
    scope: "Regulatory compliance automation",
    stack: ["Angular", "Firebase", "Cloud Functions", "Supabase"],
    year: "2025",
    challenge:
      "A financial services firm needed to automate regulatory compliance checks that were performed manually across 40+ document categories. The existing workflow required senior analysts to cross-reference multiple regulatory databases, consuming approximately 200 person-hours monthly with a 7% error rate in classification.",
    architecture:
      "The system is built on Angular with Firebase for authentication and real-time document state management. Supabase provides the structured data layer for compliance rules and audit trails. Cloud Functions execute rule-matching logic as serverless processors, triggered by document upload events. The architecture separates rule definition from execution, allowing compliance teams to update criteria without engineering involvement.",
    result:
      "Processing time reduced by 82%. Error rate in document classification dropped below 0.5%. Full audit trail maintained with immutable logging. Compliance team gained direct control over rule configuration.",
  },
  {
    slug: "athenex-internal-tools",
    title: "Athenex Internal Tooling Suite",
    label: "Conceptual Case Study",
    clientType: "Technology Operations",
    scope: "Internal productivity platform",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub Actions"],
    year: "2024",
    challenge:
      "A growing technology firm with 80+ engineers relied on disconnected internal tools for project tracking, resource allocation, and deployment management. Context-switching between platforms introduced friction, and leadership lacked a unified view of engineering capacity and delivery velocity.",
    architecture:
      "We built a unified internal platform using Next.js with TypeScript, deployed on Vercel with edge functions for performance-critical operations. Supabase serves as the data layer with row-level security for multi-team access control. The system integrates with GitHub Actions for deployment tracking and surfaces engineering metrics through a leadership dashboard. Component architecture follows atomic design principles for maintainability.",
    result:
      "Engineering context-switching reduced by approximately 40%. Leadership gained real-time visibility into delivery metrics. Onboarding time for new engineers decreased from 2 weeks to 3 days through centralized documentation and tooling access.",
  },
];
