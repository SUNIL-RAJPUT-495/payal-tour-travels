import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Mail, MapPin, CheckCircle } from 'lucide-react';

const LeadFormPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
  });

  useEffect(() => {
    // Check if user has already seen/submitted the form in this session
    const hasSeenPopup = sessionStorage.getItem('leadPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('leadPopupSeen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    sessionStorage.setItem('leadPopupSeen', 'true');
    // Auto close after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(10, 17, 40, 0.7)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 9998,
            }}
          />

          {/* Modal Wrapper - flex centering so framer-motion scale doesn't break positioning */}
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="lead-popup-modal"
              style={{
                width: '90%',
                maxWidth: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                pointerEvents: 'auto',
              }}
            >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-light) 100%)',
              padding: '32px 32px 28px',
              position: 'relative',
            }}>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <X size={18} />
              </motion.button>

              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: 'var(--gold-glow)',
              }}>
                <MapPin size={28} color="var(--primary-navy)" />
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '8px',
              }}>
                Plan Your Dream Trip!
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
              }}>
                Get a free quote and exclusive offers from Payal Tour & Travels
              </p>
            </div>

            {/* Body */}
            <div style={{
              backgroundColor: 'var(--bg-white)',
              padding: '32px',
            }}>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div style={{ position: 'relative' }}>
                      <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="email"
                        placeholder="Email (Optional)"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <MapPin size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <select
                        required
                        value={formData.destination}
                        onChange={e => setFormData({...formData, destination: e.target.value})}
                        style={{...inputStyle, appearance: 'none'}}
                      >
                        <option value="" disabled>Where do you want to go?</option>
                        <option value="jaipur">Jaipur Sightseeing</option>
                        <option value="udaipur">Udaipur</option>
                        <option value="jodhpur">Jodhpur</option>
                        <option value="jaisalmer">Jaisalmer / Desert Safari</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="outstation">Outstation Trip</option>
                        <option value="wedding">Wedding Car</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn btn-gold"
                      style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '12px',
                        fontSize: '1.05rem',
                        marginTop: '4px',
                      }}
                    >
                      Get Free Quote
                    </motion.button>

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      We respect your privacy. No spam, ever.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: 'center',
                      padding: '20px 0',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1 }}
                    >
                      <CheckCircle size={56} color="var(--accent-gold)" style={{ marginBottom: '20px' }} />
                    </motion.div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--primary-navy)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-heading)',
                    }}>
                      Thank You, {formData.name}!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      Our team will call you shortly with the best deals.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const inputStyle = {
  width: '100%',
  padding: '14px 14px 14px 44px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.08)',
  backgroundColor: 'var(--bg-cream)',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  color: 'var(--text-dark)',
};

export default LeadFormPopup;
