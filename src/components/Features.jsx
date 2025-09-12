import React from "react";
import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section 
      id="features" 
      className="bg-slate-50 py-20 overflow-x-hidden"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 
            id="features-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900"
          >
            Features that help you launch faster
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to present your SaaS, impress investors, and convert without writing custom code.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}