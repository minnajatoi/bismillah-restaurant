import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  return (

  <div className="bg-dark text-white">
    <Header />
    <main>
      <Hero />
      <Menu />
      <Reviews />
      <Social />
      <Contact />
    </main>
    <Footer />
  </div>
  );
};
