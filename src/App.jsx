import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import './index.css';
import Showcase from './Components/Showcase';
import OurLogos from './Components/OurLogos';
import AppFeatures from './Components/AppFeatures';
import Carousel from './Components/Carousel';
import FeaturesAvatar from './Components/FeaturesAvatar';
import FeaturesPayments from './Components/FeaturesPaymants';
import TestimonialsField from './Components/TestemonialsField';
import Faqs from './Components/Faqs';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import ContactPage from './Components/ContactPage'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Showcase />
            <OurLogos />
            <AppFeatures />
            <Carousel />
            <FeaturesAvatar />
            <FeaturesPayments />
            <TestimonialsField />
            <Faqs />
            <Subscribe />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

