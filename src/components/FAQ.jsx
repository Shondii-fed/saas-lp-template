import React, { useState } from "react";

const faqs = [
  { q: "How quickly can I launch?", a: "You can get a site up in under an hour with the provided content and assets." },
  { q: "Do I need coding experience?", a: "No — basic content edits are done in plain files; more advanced changes require React/Tailwind familiarity." },
  { q: "What support is included?", a: "See the marketplace listing. We include docs and quickstart; paid tiers can include support." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-slate-50 py-16 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`rounded-lg border p-4 transition-colors duration-300 ${
                openIndex === i ? "bg-amber-500" : "bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded"
              >
                <span
                  className={`transition-colors duration-300 ${
                    openIndex === i ? "font-bold text-white" : "font-medium text-slate-800"
                  } text-base sm:text-lg md:text-xl`}
                >
                  {f.q}
                </span>
                <span
                  className={`transition-transform duration-300 text-slate-500 text-lg`}
                  aria-hidden="true"
                >
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              
              <div
                id={`faq-answer-${i}`}
                className="overflow-hidden transition-all duration-300 mt-2"
                style={{ maxHeight: openIndex === i ? "200px" : "0" }}
              >
                <p className="text-slate-700 text-base sm:text-lg md:text-lg mt-2">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}