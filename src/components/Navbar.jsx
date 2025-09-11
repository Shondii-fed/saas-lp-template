import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null); // ref for hamburger button

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  // Close dropdown if clicked outside dropdown AND hamburger button
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
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#" className="text-xl font-bold text-indigo-600">SaaSify</a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-700 hover:text-indigo-600 transition duration-300">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition duration-300">
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden" ref={buttonRef}>
            <button
              onClick={() => setIsOpen(!isOpen)} // toggle open/close
              className="text-slate-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          ref={dropdownRef}
          className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-2" : "max-h-0"}`}
        >
          <div className="bg-white border-t border-slate-200 flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-slate-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)} // close after click
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="block bg-indigo-600 hover:bg-indigo-700 text-white text-center px-4 py-2 rounded-lg mt-2 shadow transition"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}