import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">Our Gallery</h2>
      <p className="section-subtitle">Visual snippets from around our premium workspace</p>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`Café ambience view ${i + 1}`} />
            <div className="gallery-overlay">
              <span>Café 98</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;