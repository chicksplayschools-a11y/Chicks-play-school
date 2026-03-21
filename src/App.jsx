import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Facilities from './components/sections/Facilities';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import WhyChooseUs from './components/sections/WhyChooseUs';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="font-body text-text relative min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <TrustBar />
        <About />
        <Programs />
        <Facilities />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
