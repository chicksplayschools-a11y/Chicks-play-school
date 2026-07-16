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
import WaveDivider from './components/ui/WaveDivider';
import PlayfulBackground from './components/ui/PlayfulBackground';

function App() {
  return (
    <div className="font-body text-text relative min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />

      <main className="flex-grow flex flex-col w-full">
        <PlayfulBackground />
        {/* HERO: Peach */}
        <div className="bg-[#FFC3B9] relative z-20">
          <Hero />
        </div>
        <WaveDivider topColor="#FFC3B9" bottomColor="#FFD266" />

        {/* TRUSTBAR + ABOUT: Yellow */}
        <div className="bg-[#FFD266]">
          <TrustBar />
          <About />
        </div>
        <WaveDivider topColor="#FFD266" bottomColor="#C0ABCA" />

        {/* PROGRAMS: Lavender */}
        <div className="bg-[#C0ABCA] relative z-20">
          <Programs />
        </div>
        <WaveDivider topColor="#C0ABCA" bottomColor="#FFC3B9" />

        {/* FACILITIES: Peach */}
        <div className="bg-[#FFC3B9] relative z-30">
          <Facilities />
        </div>
        <WaveDivider topColor="#FFC3B9" bottomColor="#FFD266" />

        {/* GALLERY: Yellow */}
        <div className="bg-[#FFD266] relative z-40">
          <Gallery />
        </div>
        <WaveDivider topColor="#FFD266" bottomColor="#C0ABCA" />

        {/* TESTIMONIALS: Lavender */}
        <div className="bg-[#C0ABCA] relative z-50">
          <Testimonials />
        </div>
        <WaveDivider topColor="#C0ABCA" bottomColor="#FFC3B9" />

        {/* WHY CHOOSE US: Peach */}
        <div className="bg-[#FFC3B9] relative z-[60]">
          <WhyChooseUs />
        </div>
        <WaveDivider topColor="#FFC3B9" bottomColor="#FFD266" />

        {/* CTA + CONTACT: Yellow */}
        <div className="bg-[#FFD266]">
          <CTA />
          <Contact />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
