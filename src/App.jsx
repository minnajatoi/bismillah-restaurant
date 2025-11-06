import React, { useEffect } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Menu from './components/menu';
import Reviews from './components/reviews';
import Social from './components/Social';
import Contact from './components/contact';
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
