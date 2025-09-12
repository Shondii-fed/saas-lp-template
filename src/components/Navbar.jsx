import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#" aria-label="SaaSify Home" className="text-xl font-bold text-indigo-600">
            SaaSify
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8" role="menubar">
            {navLinks.map((link) => (
              <li key={link.label} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className="text-slate-700 hover:text-indigo-600 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden" ref={buttonRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          id="mobile-menu"
          ref={dropdownRef}
          role="menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-2" : "max-h-0"}`}
        >
          <ul className="bg-white border-t border-slate-200 flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <li key={link.label} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className="block py-3 text-slate-700 hover:text-indigo-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li role="none">
              <a
                href="#"
                role="menuitem"
                className="block bg-indigo-600 hover:bg-indigo-700 text-white text-center px-4 py-2 rounded-lg mt-2 shadow transition"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}