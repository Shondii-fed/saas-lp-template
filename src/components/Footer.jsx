import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white border-t py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-slate-700">© {new Date().getFullYear()} SaaSify. All rights reserved.</div>
                <div className="flex items-center gap-4">
                    <a href="#features" className="text-sm hover:text-indigo-600">Features</a>
                    <a href="#pricing" className="text-sm hover:text-indigo-600">Pricing</a>
                    <a href="#faq" className="text-sm hover:text-indigo-600">FAQ</a>
                </div>
            </div>
        </footer>
    )
}