"use client";

import { AccordionItem } from "@/components/ui/Accordion";
import { SLAItem } from "@/types";

const slaItems: SLAItem[] = [
  {
    question: "What uptime guarantees are provided?",
    answer:
      "We target 99.9% uptime for production environments. Monitoring is continuous with automated alerting for degradation events. Specific SLA terms are documented per engagement based on infrastructure requirements and business criticality.",
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
      "Infrastructure is designed with horizontal scaling from the start. Auto-scaling policies are configured based on traffic patterns and resource utilization. We proactively recommend scaling adjustments.",
  },
];

export default function SLAAccordion() {
  return (
    <div className="max-w-[680px]">
      {slaItems.map((item) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
