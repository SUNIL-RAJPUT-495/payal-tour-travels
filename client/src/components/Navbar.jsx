import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Car, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'about', label: 'About Us' },
  { id: 'tours', label: 'Tours' },
  { id: 'fleet', label: 'Our Fleet' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar ${scrolled ? "glassmorphism" : ""}`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'white',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(224, 224, 224, 0.5)' : '1px solid #E0E0E0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: scrolled ? '8px 0' : '12px 0',
        transition: 'padding 0.4s ease, background-color 0.4s ease'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <motion.div
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          onClick={(e) => handleNavClick(e, 'root')}
          whileTap={{ scale: 0.98 }}
        >
          <img src="/logo.png" alt="Payal Tour & Travels Logo" style={{ height: scrolled ? '42px' : '54px', objectFit: 'contain', transition: 'height 0.4s ease' }} />
          <span className="nav-logo-text" style={{ fontSize: scrolled ? '1.1rem' : '1.3rem', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--primary-navy)', transition: 'font-size 0.4s ease' }}>
            PAYAL TOUR & TRAVELS
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-dark)', textDecoration: 'none' }}
              whileHover={{ color: 'var(--accent-gold-dark)', y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
          <motion.a
            href="tel:+919829630405"
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={16} /> Call Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            color: 'var(--primary-navy)',
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--primary-navy)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Mobile Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo.png" alt="Logo" style={{ height: '40px', objectFit: 'contain' }} />
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent-gold)' }}>
                  PAYAL TRAVELS
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '12px',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px', gap: '8px' }}>
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {item.label}
                  <span style={{ fontSize: '1rem', color: 'var(--accent-gold)', opacity: 0.5 }}>→</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                padding: '24px 32px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <a
                href="tel:+919829630405"
                className="btn btn-gold"
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '14px',
                  fontSize: '1.05rem',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone size={20} /> Call Now
              </a>
              <a
                href="https://wa.me/919829630405"
                target="_blank"
                className="btn"
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '14px',
                  fontSize: '1.05rem',
                  backgroundColor: '#25D366',
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
