
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BreadCrumb from './BreadCrumb';
import Contact from './Contact';
import Location from './Location';

const ContactPage = () => {
  return (
    <div>
      <Navigation />
      <BreadCrumb/>
      <Contact/>
      <Location/>
      <Footer />
      
      
    </div>
  );
};

export default ContactPage;
