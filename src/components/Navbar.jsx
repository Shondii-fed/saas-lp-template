import React from 'react'
import Button from './Button'

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#" className="text-xl font-bold text-indigo-600">
                    SasSify
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-slate-700">
                    <a href="#features" className="hover:text-indigo-600">Features</a>
                    <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
                    <a href="#faq" className="hover:text-indigo-600">FAQ</a>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Button href="#pricing">Get Started</Button>
                </div>

                {/* Mobile menu toggle placeholder */}
                <div className="md:hidden">☰</div>
            </div>
        </nav>
    )
}