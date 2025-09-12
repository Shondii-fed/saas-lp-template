import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Newsletter signup */}
          <section className="md:col-span-1 text-center md:text-left" aria-label="Newsletter subscription">
            <h4 className="text-white font-semibold mb-4">Stay in the loop</h4>
            <p className="text-slate-400 text-sm mb-4 max-w-md mx-auto md:mx-0">
              Subscribe to get the latest updates, features, and product news.
            </p>
            <form className="flex flex-col sm:flex-row justify-center md:justify-start items-center sm:items-stretch gap-2 max-w-md mx-auto md:mx-0">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="relative w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" aria-hidden="true" />
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </section>

          {/* Link columns */}
          <nav className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left" aria-label="Footer navigation">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} SaaSify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}