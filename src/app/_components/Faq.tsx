"use client";

import { useState } from "react";

export type Qa = { q: string; a: string };

export default function Faq({ items }: { items: Qa[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink/10">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-[17px] leading-snug font-semibold text-ink md:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative mt-1 h-4 w-4 shrink-0 ${isOpen ? "text-blue" : "text-ink/60"} transition-colors duration-300 group-hover:text-blue`}
                >
                  <span className="absolute top-1/2 left-0 h-[2px] w-4 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute top-0 left-1/2 h-4 w-[2px] -translate-x-1/2 bg-current transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[68ch] pb-6 text-[15.5px] leading-relaxed text-graph">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
