import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuSection from '../components/MenuSection';
import Gallery from '../components/Gallery';
import ReservationForm from '../components/ReservationForm';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ notify }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <ReservationForm notify={notify} />
      <Testimonials />
      <Contact notify={notify} />
      <Footer />
    </div>
  );
};

export default Home;