"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/faqItems";

type FAQSectionProps = {
  items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-lg font-semibold text-ink">{item.question}</span>
              <span className="shrink-0 font-serif text-2xl text-cinnabar">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="pb-5 leading-7 text-muted">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
