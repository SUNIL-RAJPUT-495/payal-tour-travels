import React, { useState } from 'react';
import { Car, MapPin, Map, Plane, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for premium tours/cars to: ${searchQuery}`);
      // In a real app, this would route to a search results page
    }
  };

  return (
    <section id="root" style={{
      padding: '40px 0 80px 0',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-xl"
          style={{ marginBottom: '16px', color: 'var(--primary-navy)' }}
        >
          Discover Luxury in Every Journey
        </motion.h1>
        
        {/* Category Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-categories"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {[
            { icon: <Car />, label: 'Car Rental' },
            { icon: <Map />, label: 'Sightseeing' },
            { icon: <MapPin />, label: 'Outstation' },
            { icon: <Plane />, label: 'Airport' },
            { icon: <ShieldCheck />, label: 'Verified' },
          ].map((item, idx) => (
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              key={idx} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                padding: '16px',
                borderRadius: '16px',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                backgroundColor: 'var(--bg-white)',
                boxShadow: 'var(--premium-shadow)',
                color: 'var(--accent-gold)'
              }} className="category-icon">
                {item.icon}
              </div>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Bar Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hero-image"
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
            height: '450px',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundImage: 'url("/hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.3), var(--premium-shadow)'
          }}
        >
          <div className="glass-premium hero-search-box" style={{
            padding: '12px',
            borderRadius: '32px',
            display: 'flex',
            alignItems: 'center',
            width: '90%',
            maxWidth: '700px',
            boxShadow: 'var(--premium-shadow-hover)'
          }}>
            <div className="hero-search-input-wrap" style={{ display: 'flex', alignItems: 'center', flex: 1, padding: '0 20px', borderRight: '1px solid rgba(0,0,0,0.1)' }}>
              <MapPin size={24} color="#333" style={{ marginRight: '12px' }} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search for cars, tours, or places..." 
                style={{ 
                  border: 'none', 
                  outline: 'none', 
                  width: '100%', 
                  fontSize: '1.1rem', 
                  fontWeight: 500,
                  background: 'transparent',
                  color: '#000'
                }}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="btn btn-primary" 
              style={{ borderRadius: '24px', padding: '16px 40px', fontSize: '1.1rem' }}
            >
              Search
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
