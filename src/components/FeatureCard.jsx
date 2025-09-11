import React from 'react'

export default function FeatureCard({ icon: Icon, name, description }) {
    return (
        <div className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {Icon ? (
                    <Icon className="h-6 w-6" aria-hidden="true" />
                ) : (
                    // simple fallback SVG so UI stays intact if icon is missing
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
            
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
            <p className="mt-2 text-slate-600">{description}</p>
        </div>
    )
}