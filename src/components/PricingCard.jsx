import React from 'react'
import Button from "./Button"

export default function PricingCard({ tier, billing = 'monthly' }) {
    const price = billing === 'monthly' ? tier.priceMonthly : tier.priceYearly
    const suffix = billing === 'monthly' ? '/mo' : '/yr'

    return (
        <div className={`relative flex flex-col rounded-xl border p-6 bg-white shadow-sm ${tier.popular ? 'ring-2 ring-indigo-100': ''}`}>
            {tier.popular && (
                <div className="absolute -top-3 right-3 rounded-full bg-amber-500 px-3 py-1 text-xs text-white">Popular</div>
            )}
            <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{tier.description}</p>

            <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">${price}</span>
                <span className="text-sm text-slate-600">{suffix}</span>
            </div>

            <ul className="mt-4 space-y-2 flex-1">
                {tier.features.map((f) => (
                    <li key={f} className="text-sm text-slate-600">• {f}</li>
                ))}
            </ul>

            <div className="mt-6">
                <Button href="#signup" variant="primary">Choose plan</Button>
            </div>
        </div>
    )
}