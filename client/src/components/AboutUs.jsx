import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Heart, MapPin, Users } from 'lucide-react';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '50+', label: 'Premium Vehicles' },
  { number: '100+', label: 'Tour Packages' },
];

const values = [
  { icon: <Shield size={28} />, title: 'Safety First', description: 'All vehicles are regularly serviced and maintained to ensure your safety on every journey.' },
  { icon: <Clock size={28} />, title: 'Always On Time', description: 'We value your time. Our drivers arrive promptly, ensuring you never miss a moment.' },
  { icon: <Award size={28} />, title: 'Best In Class', description: 'Premium vehicles, experienced chauffeurs, and top-notch service at competitive prices.' },
  { icon: <Heart size={28} />, title: 'Customer Love', description: 'Your comfort and satisfaction is our priority. We go the extra mile for every guest.' },
  { icon: <MapPin size={28} />, title: 'Local Expertise', description: "Deep knowledge of Rajasthan's hidden gems, heritage sites, and royal experiences." },
  { icon: <Users size={28} />, title: 'Family Friendly', description: 'Spacious vehicles, child seats on request, and tours designed for families of all sizes.' },
];

const AboutUs = () => {
  return (
    <section id="about" style={{ padding: '100px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            About Payal Tour & Travels
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            Established in Jaipur, we are a trusted name in luxury travel and car rentals across Rajasthan. 
            From royal heritage tours to comfortable airport transfers, we make every journey unforgettable.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="stats-bar"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
            padding: '40px',
            backgroundColor: 'var(--primary-navy)',
            borderRadius: '20px',
            boxShadow: 'var(--premium-shadow)'
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '24px', fontFamily: 'var(--font-heading)', color: 'var(--primary-navy)' }}>
              Our Story
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '16px', fontSize: '1rem' }}>
              What started as a small car rental service in the heart of Jaipur has grown into one of Rajasthan's most trusted travel agencies. 
              Our founder's vision was simple — provide safe, comfortable, and premium travel experiences that showcase the true beauty of Rajasthan.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px', fontSize: '1rem' }}>
              Today, with a fleet of over 50 premium vehicles and a team of experienced, professional drivers, 
              we serve thousands of happy customers every year — from local sightseeing tours to grand wedding convoys.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['Trusted', 'Professional', 'Affordable', 'Luxury'].map((tag) => (
                <span key={tag} style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  backgroundColor: 'var(--bg-cream)',
                  color: 'var(--accent-gold-dark)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-story-image"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              height: '400px',
              boxShadow: 'var(--premium-shadow)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" 
              alt="Travel Journey" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--primary-navy)' }}>
            Why Choose Us
          </h3>
        </motion.div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="premium-card"
              style={{ padding: '32px', textAlign: 'center' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--accent-gold-dark)',
                border: '1px solid rgba(212, 175, 55, 0.15)'
              }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-navy)' }}>
                {item.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
