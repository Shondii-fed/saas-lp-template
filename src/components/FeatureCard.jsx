import React from "react";

export default function FeatureCard({ icon: Icon, name, description }) {
  return (
    <div
      className={`
        flex flex-col sm:flex-row sm:items-start 
        rounded-xl border border-slate-200 bg-white
        p-6 sm:p-8 shadow-sm 
        transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg
        h-full
      `}
    >
      {/* Icon */}
      <div
        className="
          flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0
          items-center justify-center
          rounded-lg bg-indigo-100 text-indigo-600
          mx-auto sm:mx-0
        "
      >
        {Icon ? (
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{name}</h3>
        <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}