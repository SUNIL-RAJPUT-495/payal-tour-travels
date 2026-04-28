import React, { useState } from 'react';
import { X, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose, vehicle }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', duration: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to success step
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="glassmorphism"
          style={{
            width: '90%',
            maxWidth: '500px',
            borderRadius: '24px',
            padding: '32px',
            position: 'relative',
            boxShadow: 'var(--premium-shadow-hover)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}
        >
          <button 
            onClick={() => { setStep(1); onClose(); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: '#F2F2F2'
            }}
          >
            <X size={20} />
          </button>

          {step === 1 ? (
            <form onSubmit={handleSubmit}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px' }}>
                Book {vehicle?.name || 'Vehicle'}
              </h2>
              <p style={{ color: '#666', marginBottom: '24px' }}>Fill in your details and we will confirm your booking shortly.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '16px', top: '14px', color: '#666' }} />
                  <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} />
                </div>
                <div style={{ position: 'relative' }}>
                  <PhoneIcon />
                  <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={inputStyle} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={18} style={{ position: 'absolute', left: '16px', top: '14px', color: '#666' }} />
                    <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} style={inputStyle} />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Clock size={18} style={{ position: 'absolute', left: '16px', top: '14px', color: '#666' }} />
                    <select required value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} style={inputStyle}>
                      <option value="" disabled>Duration</option>
                      <option value="4h">4 Hours / 40km</option>
                      <option value="8h">8 Hours / 80km</option>
                      <option value="outstation">Outstation (Days)</option>
                    </select>
                  </div>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '16px', marginTop: '16px', fontSize: '1rem', borderRadius: '12px' }}
                >
                  Confirm Booking Request
                </motion.button>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--ta-green)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'white'
                }}
              >
                <CheckCircle size={40} />
              </motion.div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Request Received!</h2>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                Thank you, {formData.name || 'guest'}. Our team will contact you at {formData.phone} shortly to finalize the booking for the {vehicle?.name}.
              </p>
              <button onClick={() => { setStep(1); onClose(); }} className="btn btn-outline" style={{ width: '100%' }}>
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Helper for inline phone icon to avoid importing it specifically if it conflicts
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '16px', top: '14px', color: '#666' }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const inputStyle = {
  width: '100%',
  padding: '14px 14px 14px 44px',
  borderRadius: '12px',
  border: '1px solid #E0E0E0',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  backgroundColor: '#F9F9F9'
};

export default BookingModal;
