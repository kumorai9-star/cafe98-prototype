import React, { useState, useEffect } from 'react';
import { fetchMenu } from '../services/api';
import './MenuSection.css';

const MenuSection = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Coffee', 'Cold Coffee', 'Sandwiches', 'Nachos', 'Desserts'];

  useEffect(() => {
    const getMenu = async () => {
      try {
        const { data } = await fetchMenu();
        setItems(data);
      } catch (error) {
        console.error("Error collecting menu", error);
      } finally {
        setLoading(false);
      }
    };
    getMenu();
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <h2 className="section-title">Popular Menu</h2>
      <p className="section-subtitle">Freshly brewed and prepared on ordering</p>

      <div className="category-tabs">
        {categories.map((cat, idx) => (
          <button 
            key={idx} 
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="spinner-container"><div className="loader"></div></div>
      ) : (
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div className="menu-card" key={item._id}>
              <div className="card-img-wrapper">
                <img src={item.image} alt={item.name} />
                <span className="menu-category-tag">{item.category}</span>
              </div>
              <div className="menu-card-body">
                <div className="card-title-row">
                  <h3>{item.name}</h3>
                  <span className="price-tag">Rs {item.price}</span>
                </div>
                <p className="item-description">{item.description}</p>
                <span className={`status-badge ${item.available ? 'instock' : 'out'}`}>
                  {item.available ? 'Available' : 'Sold Out'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuSection;