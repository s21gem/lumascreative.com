/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <Services />
          <Process />
          <Team />
          <Testimonials />
          <Booking />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
