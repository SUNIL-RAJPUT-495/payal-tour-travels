import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--primary-navy)', color: 'white', padding: '100px 0' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg" style={{ marginBottom: '24px', color: 'var(--bg-white)' }}>
              Ready to explore Jaipur?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#AAA', marginBottom: '40px', maxWidth: '500px', lineHeight: '1.6' }}>
              Book your ride in seconds. Our professional drivers are available 24/7 to make your journey comfortable and safe.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <motion.div whileHover={{ x: 10 }} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--primary-navy-light)', borderRadius: '16px' }}>
                  <Phone size={24} color="var(--accent-gold)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Call us anytime</p>
                  <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>+91 98296 30405<br/>+91 96369 28587</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 10 }} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--primary-navy-light)', borderRadius: '16px' }}>
                  <MessageCircle size={24} color="var(--accent-gold)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>WhatsApp booking</p>
                  <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Available 24/7</p>
                </div>
              </motion.div>
            </div>

            <div className="contact-buttons" style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919829630405" 
                target="_blank" 
                className="btn btn-gold" 
                style={{ 
                  padding: '16px 32px',
                  fontSize: '1.05rem',
                  borderRadius: '16px'
                }}
              >
                <MessageCircle size={22} /> WhatsApp Now
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline" 
                style={{ 
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  padding: '16px 32px',
                  borderRadius: '16px'
                }}
              >
                Call Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form-card"
            style={{ 
              backgroundColor: 'var(--primary-navy-light)', 
              padding: '48px', 
              borderRadius: '32px',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <h3 style={{ marginBottom: '8px', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Send us a message</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '0.9rem' }}>We'll get back to you within 30 minutes.</p>
                  
                  <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} />
                  <input required type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={inputStyle} />
                  
                  <div style={{ position: 'relative' }}>
                    <select required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} style={{...inputStyle, appearance: 'none'}}>
                      <option value="" disabled>Select Service</option>
                      <option value="local">Local Sightseeing</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="outstation">Outstation Trip</option>
                      <option value="wedding">Wedding Car</option>
                    </select>
                  </div>
                  
                  <textarea required placeholder="Tell us about your trip details..." rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{...inputStyle, resize: 'none'}}></textarea>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn btn-gold" 
                    style={{ width: '100%', padding: '18px', borderRadius: '16px', fontSize: '1rem', marginTop: '8px' }}
                  >
                    Send Request
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  >
                    <CheckCircle size={60} color="var(--accent-gold)" style={{ marginBottom: '24px' }} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px', color: 'var(--accent-gold)' }}>Message Sent!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>Thank you for reaching out, {formData.name || 'guest'}. Our team will contact you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '16px 20px',
  borderRadius: '16px',
  color: 'white',
  outline: 'none',
  width: '100%',
  fontSize: '0.95rem',
  transition: 'border-color 0.3s ease'
};

export default Contact;
