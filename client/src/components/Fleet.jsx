import React, { useState } from 'react';
import { Users, Briefcase, Fuel } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const cars = [
    {
      name: "Toyota Innova Crysta",
      type: "Premium SUV",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      seats: 7,
      bags: 4,
      transmission: "Manual/Auto"
    },
    {
      name: "Luxury Sedan",
      type: "Business Class",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      seats: 4,
      bags: 2,
      transmission: "Automatic"
    },
    {
      name: "Tempo Traveller",
      type: "Group Travel",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      seats: 12,
      bags: 10,
      transmission: "Manual"
    }
  ];

  return (
    <section id="fleet" style={{ backgroundColor: 'var(--bg-white)', padding: '100px 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '60px' }}>Our Premium Fleet</h2>
        </motion.div>
        
        <div className="grid grid-3">
          {cars.map((car, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              style={{ textAlign: 'center', padding: '24px', borderRadius: '20px', border: '1px solid #F2F2F2' }}
              className="premium-card"
            >
              <div style={{ 
                height: '220px', 
                marginBottom: '24px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                backgroundColor: '#f9f9f9'
              }}>
                <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '6px' }}>{car.name}</h3>
              <p style={{ color: 'var(--accent-gold-dark)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '24px' }}>{car.type}</p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px', 
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                backgroundColor: 'var(--bg-cream)',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Users size={16} color="var(--primary-navy)" /> {car.seats} Seats
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={16} color="var(--primary-navy)" /> {car.bags} Bags
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Fuel size={16} color="var(--primary-navy)" /> {car.transmission}
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVehicle(car)}
                className="btn btn-outline" 
                style={{ marginTop: '24px', width: '100%', padding: '14px', borderRadius: '12px' }}
              >
                Select Vehicle
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal 
        isOpen={!!selectedVehicle} 
        onClose={() => setSelectedVehicle(null)} 
        vehicle={selectedVehicle} 
      />
    </section>
  );
};

export default Fleet;
