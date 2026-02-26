import { Translations } from "./types";

export const en: Translations = {
  nav: {
    capabilities: "Capabilities",
    approach: "Approach",
    technology: "Technology",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    label: "Enterprise Software Engineering",
    line1: "SYSTEMS",
    line2: "ENGINEERED",
    line3: "WITH PRECISION",
    subtitle1: "Architecture-first software for enterprise operations.",
    subtitle2: "Designed to scale. Built to endure.",
    cta: "Start a Conversation",
  },
  capabilities: {
    label: "What We Build",
    title1: "Capability",
    title2: "Architecture",
    services: [
      {
        title: "Web Platforms",
        description:
          "Enterprise-grade web systems designed for scale, reliability, and long-term operational clarity. We architect platforms that serve as core business infrastructure — not disposable marketing surfaces. Every decision is grounded in domain modeling, performance constraints, and deployment strategy.",
      },
      {
        title: "Process Automation",
        description:
          "Systematic elimination of operational friction through engineered workflows. We build automation pipelines that integrate with existing infrastructure, enforce business rules at the system level, and reduce manual intervention across critical operations.",
      },
      {
        title: "Custom Systems",
        description:
          "Purpose-built software for organizations whose requirements exceed commodity solutions. From internal tooling to domain-specific platforms, we design systems with clear boundaries, typed contracts, and maintainable architecture.",
      },
    ],
  },
  approach: {
    label: "How We Work",
    title1: "Engineering",
    title2: "Methodology",
    phases: [
      {
        title: "Discovery",
        description:
          "We map the operational landscape — existing systems, data flows, stakeholder requirements, and technical constraints. No assumptions. Every decision is grounded in evidence and domain understanding.",
      },
      {
        title: "Architecture",
        description:
          "System boundaries are defined before a single line of code is written. We design data models, API contracts, infrastructure topology, and deployment strategy as a unified blueprint.",
      },
      {
        title: "Implementation",
        description:
          "Modular, typed, testable code delivered in iterative cycles. Continuous integration from day one. Every component is built with clear interfaces and documented behavior.",
      },
      {
        title: "Optimization",
        description:
          "Post-deployment performance auditing, monitoring setup, and systematic refinement. We measure real-world behavior and optimize against concrete metrics — not assumptions.",
      },
    ],
  },
  techStack: {
    label: "Technology",
    title1: "System",
    title2: "Stack",
    frontend: "Frontend",
    backend: "Backend",
    infrastructure: "Infrastructure",
  },
  portfolio: {
    label: "Portfolio",
    title1: "Selected",
    title2: "Projects",
  },
  security: {
    label: "Standards",
    title1: "Security &",
    title2: "Standards",
    items: [
      {
        title: "Authentication & Access Control",
        description:
          "Role-based access control, multi-factor authentication, session management, and token-based authorization. Every system enforces the principle of least privilege at the infrastructure level.",
      },
      {
        title: "Infrastructure Monitoring",
        description:
          "Real-time observability across application, database, and network layers. Alerting pipelines detect anomalies before they become incidents. Structured logging with centralized aggregation.",
      },
      {
        title: "Backup & Recovery",
        description:
          "Automated database backups with point-in-time recovery. Disaster recovery plans tested against defined RPO and RTO targets. Data redundancy across geographic regions where required.",
      },
      {
        title: "Deployment Reliability",
        description:
          "Zero-downtime deployments through blue-green strategies and automated rollback mechanisms. Environment parity between staging and production. Infrastructure defined as code.",
      },
    ],
  },
  infrastructure: {
    label: "Operations",
    title1: "Infrastructure &",
    title2: "Continuity",
    blocks: [
      {
        title: "Continuous Deployment",
        description:
          "Automated CI/CD pipelines with branch-based promotion, automated testing gates, and deterministic build artifacts. Every merge to main triggers a validated deployment path from staging to production.",
      },
      {
        title: "Environment Management",
        description:
          "Isolated environments for development, staging, and production with configuration parity. Environment variables managed through encrypted vaults. Infrastructure provisioning is version-controlled.",
      },
      {
        title: "Monitoring & Alerting",
        description:
          "Application performance monitoring, error tracking, and uptime checks with configurable alert thresholds. Incident response workflows integrated into team communication channels.",
      },
    ],
    slaTitle: "SLA Framework",
    slaItems: [
      {
        question: "What uptime guarantees are provided?",
        answer:
          "We target 99.9% uptime for production environments. Monitoring is continuous with automated alerting for degradation events. Specific SLA terms are documented per engagement.",
      },
      {
        question: "How are incidents handled?",
        answer:
          "Critical incidents trigger immediate response within 30 minutes during business hours. We maintain runbooks for common failure scenarios and conduct post-incident reviews for every P1 event.",
      },
      {
        question: "What does ongoing maintenance include?",
        answer:
          "Dependency updates, security patch application, performance monitoring, and infrastructure optimization. We perform quarterly architecture reviews and provide monthly health reports.",
      },
      {
        question: "How is scaling handled?",
        answer:
          "Infrastructure is designed with horizontal scaling from the start. Auto-scaling policies are configured based on traffic patterns and resource utilization.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title1: "Ready to",
    title2: "Build?",
    description:
      "We work with organizations that take their software infrastructure seriously. If you're planning a system that needs to scale, integrate, and endure — we should talk.",
    email: "contact@hyvento.com",
    form: {
      details: "Details",
      project: "Project",
      review: "Review",
      name: "Full Name",
      emailLabel: "Email Address",
      company: "Company",
      service: "Service Required",
      scale: "Project Scale",
      budget: "Budget Range",
      descriptionLabel: "Project Description",
      continue: "Continue",
      back: "Back",
      submit: "Submit Inquiry",
      sending: "Sending",
      successTitle: "Message Received",
      successDescription: "We'll review your inquiry and respond within two business days.",
      namePlaceholder: "Your name",
      emailPlaceholder: "email@company.com",
      companyPlaceholder: "Organization name",
      descriptionPlaceholder: "Describe the system you need, the problem it solves, and any technical constraints.",
      selectOption: "Select an option",
      summary: "Summary",
    },
    serviceOptions: [
      { value: "web-platforms", label: "Web Platforms" },
      { value: "process-automation", label: "Process Automation" },
      { value: "custom-systems", label: "Custom Systems" },
      { value: "consulting", label: "Technical Consulting" },
    ],
    scaleOptions: [
      { value: "small", label: "Small — Single application" },
      { value: "medium", label: "Medium — Multi-module system" },
      { value: "large", label: "Large — Enterprise platform" },
      { value: "ongoing", label: "Ongoing — Long-term engagement" },
    ],
    budgetOptions: [
      { value: "10k-25k", label: "$10,000 – $25,000" },
      { value: "25k-50k", label: "$25,000 – $50,000" },
      { value: "50k-100k", label: "$50,000 – $100,000" },
      { value: "100k+", label: "$100,000+" },
      { value: "undetermined", label: "To be determined" },
    ],
  },
  footer: {
    tagline1: "Enterprise software engineering.",
    tagline2: "Architecture-first. System-level thinking.",
    rights: "All rights reserved.",
  },
};
