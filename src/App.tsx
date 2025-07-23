import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

// Senja Widget Component
function SenjaWidget() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/25658a93-1f90-4e47-8a21-62c06b2490e8/platform.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pt-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-72">
            <div className="senja-embed" data-id="25658a93-1f90-4e47-8a21-62c06b2490e8" data-mode="shadow" data-lazyload="false" style={{ display: 'block', width: '100%' }}></div>
          </div>
          <div className="flex-1 lg:justify-start">
            <h2 className="text-3xl font-bold text-gray-900">Challenges Activos</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <SenjaWidget />
              <Projects />
              <About />
              <Community />
              <Testimonials />
              <Contact />
            </main>
          } />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}