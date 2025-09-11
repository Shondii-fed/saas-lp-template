import React, { useState } from 'react'
import { pricingTiers } from '../data/pricing'
import PricingCard from './PricingCard'

export default function Pricing() {
    const [billing, setBilling] = useState('monthly')

    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900">Pricing that scales with you</h2>
                <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Simple pricing for startups and teams.</p>
            
                <div className="mt-6 inline-flex items-center rounded-full bg-slate-100 p-1">
                    <button onClick={() => setBilling('monthly')} className={`px-4 py-1 rounded-full ${billing === 'monthly' ? 'bg-white shadow' : ''}`}>Monthly</button>
                    <button onClick={() => setBilling('yearly')} className={`px-4 py-1 rounded-full ${billing === 'yearly' ? 'bg-white shadow' : ''}`}>Yearly</button>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {pricingTiers.map((t) => (
                        <PricingCard key={t.name} tier={t} billing={billing} />
                    ))}
                </div>
            </div>
        </section>
    )
}