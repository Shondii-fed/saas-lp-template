import React from 'react'
import { features } from "../data/features"
import FeatureCard from "./FeatureCard"

export default function Features() {
    return (
        <section id="features" className="bg-slate-50 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Features that help you launch faster
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                    Everything you need to present your SaaS, impress investors, and convert without writing custom code.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        <FeatureCard key={feature.name} {...feature} />
                    })}
                </div>
            </div>
        </section>
    )
}