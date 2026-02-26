"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast can I get candidates?",
    a: "We typically deliver 2 to 3 qualified candidates within 72 hours of your intake call. For niche roles, it may take up to one week.",
  },
  {
    q: "What countries do your engineers come from?",
    a: "Primarily Colombia, Venezuela, Argentina, Mexico, and Brazil. All candidates are fluent in English and aligned with US business hours.",
  },
  {
    q: "How does the replacement guarantee work?",
    a: "If your hire leaves or underperforms within 6 months, we replace them at no additional cost. No refund needed because we handle the replacement directly.",
  },
  {
    q: "Do I need to handle payroll and compliance?",
    a: "No. We manage payroll through Deel, handle contracts, and ensure compliance. You focus on the work, we handle the logistics.",
  },
  {
    q: "What's the difference between staffing and placement?",
    a: "Monthly staffing means the engineer stays on our payroll and you pay a monthly rate. Direct placement means we recruit them and they join your team as a direct hire with a one-time fee.",
  },
  {
    q: "Can I interview candidates before committing?",
    a: "Absolutely. You interview every candidate we present. We never place someone without your explicit approval. You make the final call.",
  },
  {
    q: "What if I need a role you don't have listed?",
    a: "If the talent exists in Latin America, we can find it. Reach out and describe what you need. We've placed everything from data engineers to product managers.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-primary pr-4">{f.q}</span>
                <svg
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-text-muted leading-relaxed text-sm">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
