import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--primary-navy)', padding: '60px 0' }}>
        <div className="container">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '24px',
              fontFamily: 'var(--font-body)'
            }}
          >
            <ArrowLeft size={20} /> Back to Home
          </motion.button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-lg"
            style={{ color: 'var(--bg-white)', marginBottom: '12px' }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}
          >
            Last updated: April 28, 2026
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ padding: '60px 24px', maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            backgroundColor: 'var(--bg-white)',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: 'var(--premium-shadow)',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            fontSize: '0.95rem'
          }}
        >
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              1. Introduction
            </h2>
            <p>
              Welcome to Payal Tour & Travels. We are committed to protecting your personal information and your right to privacy.
              This Privacy Policy describes how we collect, use, and share information when you use our website and services.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '12px' }}>We may collect the following types of personal information:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Personal Details:</strong> Name, email address, phone number when you fill out our contact form.</li>
              <li><strong>Booking Details:</strong> Travel dates, destination preferences, vehicle preferences, and number of passengers.</li>
              <li><strong>Device Information:</strong> Browser type, IP address, and device information collected automatically.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on the site, and other analytical data.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              3. How We Use Your Information
            </h2>
            <p style={{ marginBottom: '12px' }}>We use the information we collect to:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Process your booking requests and provide travel services.</li>
              <li>Communicate with you about your inquiries and bookings.</li>
              <li>Send you promotional offers and updates (only with your consent).</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              4. Data Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties.
              We may share your data only with trusted service partners (such as drivers and hotel operators) strictly to fulfill your booking.
              We may also disclose information if required by law or to protect the safety and rights of our users.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              5. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              6. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              Cookies are small files stored on your device that help us understand your preferences and improve our services.
              You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              7. Your Rights
            </h2>
            <p style={{ marginBottom: '12px' }}>You have the right to:</p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Request access to your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Withdraw your consent where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              8. Contact Us
            </h2>
            <p style={{ marginBottom: '12px' }}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div style={{
              backgroundColor: 'var(--bg-cream)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid rgba(212, 175, 55, 0.15)'
            }}>
              <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--primary-navy)' }}>Payal Tour & Travels</strong></p>
              <p style={{ marginBottom: '4px' }}>📞 +91 98296 30405 / +91 96369 28587</p>
              <p>📍 Jaipur, Rajasthan, India</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
