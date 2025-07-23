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
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="senja-embed" data-id="25658a93-1f90-4e47-8a21-62c06b2490e8" data-mode="shadow" data-lazyload="false" style={{ display: 'block', width: '100%' }}></div>
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