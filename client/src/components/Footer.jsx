import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--bg-white)', padding: '60px 0 30px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="grid grid-4 footer-grid" style={{ marginBottom: '48px' }}>
          <div>
            <div className="footer-logo-wrap" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="/logo.png" alt="Logo" style={{ height: '80px', objectFit: 'contain' }} />
              <span style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--accent-gold)' }}>PAYAL TRAVELS</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Your trusted partner for exploring the Pink City. Premium luxury cars, professional chauffeurs, and unforgettable royal memories.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Local Sightseeing</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Airport Transfers</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Outstation Tours</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Wedding Car Rentals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', listStyle: 'none', padding: 0 }}>
              <li><a href="#about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>About Us</a></li>
              <li><a href="#fleet" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Our Fleet</a></li>
              <li><a href="#tours" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Popular Tours</a></li>
              <li><a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-gold)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--accent-gold)' }}>Follow Us</h4>
            <div className="footer-social" style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '30px', 
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          © 2026 Payal Tour & Travels. All rights reserved. Designed with ❤️ by sunil_rajput_06. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
