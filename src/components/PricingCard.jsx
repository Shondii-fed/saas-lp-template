import React from 'react';
import Button from "./Button";

export default function PricingCard({ tier, billing = 'monthly' }) {
  const price = billing === 'monthly' ? tier.priceMonthly : tier.priceYearly;
  const suffix = billing === 'monthly' ? '/mo' : '/yr';

  return (
    <div className={`
      relative flex flex-col gap-8 sm:gap-10 lg:gap-12 rounded-xl border 
      hover:scale-[1.02] transition-transform duration-300 p-6 sm:p-8 bg-white shadow-sm
      ${tier.popular ? 'ring-2 ring-indigo-100' : ''}
    `}>
      
      {tier.popular && (
        <span className="absolute -top-4 sm:-top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs sm:text-sm font-semibold text-white shadow">
          Most Popular
        </span>
      )}

      <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-slate-900">{tier.name}</h3>
      <p className="mt-1 text-sm sm:text-base lg:text-lg text-slate-600">{tier.description}</p>

      <div className="mt-6 flex justify-center items-baseline gap-2">
        <span className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900">${price}</span>
        <span className="text-sm sm:text-base text-slate-600">{suffix}</span>
      </div>

      <ul className="mt-4 space-y-2 flex-1 pl-2">
        {tier.features.map((f) => (
          <li key={f} className="text-sm sm:text-base lg:text-lg text-slate-600">• {f}</li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button href="#signup" variant="primary">Choose plan</Button>
      </div>
    </div>
  );
}