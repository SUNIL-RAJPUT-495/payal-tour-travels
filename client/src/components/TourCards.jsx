import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: "Royal Jaipur Heritage",
    image: "https://images.unsplash.com/photo-1605649487212-4d4ce38d14af?auto=format&fit=crop&q=80&w=800",
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    price: "₹15,000",
    description: "Experience the grandeur of Rajasthan's palaces and forts with our exclusive luxury heritage tour."
  },
  {
    id: 2,
    title: "Desert Safari Extravaganza",
    image: "https://images.unsplash.com/photo-1542382103-cd16ebc37554?auto=format&fit=crop&q=80&w=800",
    duration: "2 Days / 1 Night",
    rating: 4.8,
    price: "₹12,500",
    description: "A premium desert experience featuring luxury tent stays, cultural performances, and private safaris."
  },
  {
    id: 3,
    title: "Udaipur Lakes Retreat",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=800",
    duration: "4 Days / 3 Nights",
    rating: 5.0,
    price: "₹25,000",
    description: "Stay in opulent lake-facing suites and enjoy private boat cruises in the Venice of the East."
  }
];

const TourCards = () => {
  return (
    <section id="tours" style={{ padding: '100px 0', backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
            Exclusive Experiences
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Discover our handpicked selection of premium luxury tours curated just for you.
          </p>
        </motion.div>
        
        <div className="grid grid-3">
          {tours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="premium-card"
            >
              <div style={{ height: '240px', position: 'relative' }}>
                <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'var(--bg-white)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--primary-navy)',
                  boxShadow: 'var(--premium-shadow)'
                }}>
                  <Star size={16} color="var(--accent-gold)" fill="var(--accent-gold)" />
                  {tour.rating}
                </div>
              </div>
              <div style={{ padding: '32px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold-dark)', marginBottom: '12px', fontSize: '0.9rem', fontWeight: 600 }}>
                  <Clock size={16} />
                  <span>{tour.duration}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', lineHeight: 1.3 }}>{tour.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>{tour.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '20px' }}>
                  <button className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCards;