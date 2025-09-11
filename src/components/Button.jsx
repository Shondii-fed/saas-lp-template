import React from 'react'
import clsx from 'clsx'

export default function Button({ href = "#", children, variant = "primary" }) {
    const baseStyles = 
        "inline flex items-center justify-center rounded-xl px-5 py-3 font-medium transition"
    
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }

    return (
        <a
            href={href}
            className={clsx(baseStyles, variants[variant])}
        >
            {children}
        </a>
    )
}

