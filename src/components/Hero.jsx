import React from 'react';
import Button from "./Button";

export default function Hero() {
  return (
    <header className="relative overflow-x-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left content */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-slate-900">
            Launch your SaaS in days, not weeks.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0">
            A modern, responsive landing page template built with React + Tailwind v4 — 
            designed for indie hackers and startup founders who need to move fast.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button 
              href="#pricing"
              variant="primary"
              ariaLabel="Go to pricing section"
            >
              Get Started
            </Button>
            <Button 
              href="#demo"
              variant="secondary"
              ariaLabel="Go to live demo section"
            >
              Live Demo
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl shadow-lg p-6 bg-white">
            <div className="aspect-[16/9] w-full bg-slate-100 rounded-md flex items-center justify-center">
              {/* Comment this span below out when an image is in place and uncomment when there isn't one */}
              {/* <span className="text-slate-400">Replace with your image</span> */}
              <img src="./demo/Features_Screenshot.png" alt="Product screenshot placeholder"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}