"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        className="w-full flex items-center justify-between py-5 text-left font-display font-semibold text-lg text-white hover:text-accent transition-colors duration-200 uppercase tracking-tight"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`ml-4 text-grey transition-transform duration-200 shrink-0 ${isOpen ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"}`}
      >
        <p className="text-base text-muted leading-relaxed max-w-[55ch] font-body">
          {answer}
        </p>
      </div>
    </div>
  );
}
