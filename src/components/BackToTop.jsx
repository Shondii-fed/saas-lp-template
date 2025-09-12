import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400); // Trigger after Hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
        rounded-full bg-indigo-600 text-white shadow-lg
        transform transition-all duration-300
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
        hover:bg-indigo-700 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}