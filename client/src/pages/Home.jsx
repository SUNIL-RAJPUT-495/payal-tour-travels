import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import TourCards from '../components/TourCards';
import Fleet from '../components/Fleet';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import LeadFormPopup from '../components/LeadFormPopup';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <TourCards />
        <Fleet />
        <Contact />
      </main>
      <AIAssistant />
      <LeadFormPopup />
      <Footer />
    </div>
  );
};

export default Home;
