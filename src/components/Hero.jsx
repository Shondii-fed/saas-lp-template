import React from 'react'
import Button from "./Button";

export default function Hero() {
  return (
    <header className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Left content */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
          Launch your SaaS in days, not weeks.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-lg">
          A modern, responsive landing page template built with React + Tailwind v4 — 
          designed for indie hackers and startup founders who need to move fast.
        </p>

        <div className="mt-8 flex gap-4">
          <Button href="#pricing" variant="primary">
            Get Started
          </Button>
          <Button href="#demo" variant="secondary">
            Live Demo
          </Button>
        </div>
      </div>

      {/* Right image */}
      <div className="lg:w-1/2">
        <div className="w-full rounded-2xl shadow-lg p-6 bg-white">
          <div className="h-64 bg-slate-100 rounded-md flex items-center justify-center">
            <span className="text-slate-400">Screenshot / Illustration</span>
          </div>
        </div>
      </div>
    </header>
  );
}