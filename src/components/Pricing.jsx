import React, { useState } from "react";
import { pricingTiers } from "../data/pricing";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Pricing that scales with you
        </h2>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Simple pricing for startups and teams.
        </p>

        {/* Billing toggle */}
        <div className="mt-6 inline-flex items-center rounded-full bg-slate-100 p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1 rounded-full transition-all duration-300 ${
              billing === "monthly" ? "bg-white shadow" : "hover:bg-slate-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-1 rounded-full transition-all duration-300 ${
              billing === "yearly" ? "bg-white shadow" : "hover:bg-slate-200"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing cards grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
}