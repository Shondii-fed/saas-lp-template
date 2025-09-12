import React from 'react';
import clsx from 'clsx';

export default function Button({ href = "#", children, variant = "primary", ariaLabel }) {
  const baseStyles = `
    inline-flex items-center justify-center rounded-xl px-5 py-3 sm:px-6 sm:py-3.5
    font-medium transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
    active:scale-95
  `;
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
  };

  return (
    <a
      href={href}
      className={clsx(baseStyles, variants[variant])}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}