import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
      <BackToTop />
    </div>
  );
}
