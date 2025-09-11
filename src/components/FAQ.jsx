// src/components/FAQ.jsx
import React, { useState } from "react";

const faqs = [
  { q: "How quickly can I launch?", a: "You can get a site up in under an hour with the provided content and assets." },
  { q: "Do I need coding experience?", a: "No — basic content edits are done in plain files; more advanced changes require React/Tailwind familiarity." },
  { q: "What support is included?", a: "See the marketplace listing. We include docs and quickstart; paid tiers can include support." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-lg border bg-white p-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex items-center justify-between"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-slate-800">{f.q}</span>
                <span className="text-slate-500">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <p className="mt-3 text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}