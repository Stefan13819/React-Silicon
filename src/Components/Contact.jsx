import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import emailIcon from '../assets/images/email-icon.svg';
import addGroupIcon from '../assets/images/add-group.svg';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullName.trim() === '' || !emailPattern.test(email) || specialist.trim() === '') {
      setError('Please fill in all fields correctly.');
      setMessage('');
      return;
    }

    setError('');
    setMessage('');

    const requestBody = {
      fullName,
      email,
      specialist,
    };

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setMessage('Your message has been sent successfully!');
        setFullName('');
        setEmail('');
        setSpecialist('');
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <section aria-label="contact-us" className="contact-section">
      <div className="container space-y-1">
        <div className="contact-grid">
          <h2 className="h1">Contact Us</h2>
          <div className="contact-card-side flex">
            <div className="icon-container">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Email Us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <span className="leave-message">Leave a message</span>
              <span className="arrow">
                <FontAwesomeIcon icon={faArrowDown} className="fa-rotate-270" />
              </span>
            </div>
          </div>
          <div className="contact-card-side flex">
            <div className="icon-container">
              <img src={addGroupIcon} alt="Careers Icon" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Careers</h3>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <span className="leave-message">Send an application</span>
              <span className="arrow">
                <FontAwesomeIcon icon={faArrowDown} className="fa-rotate-270" />
              </span>
            </div>
          </div>
        </div>
        <form className="reg-form space-y-1" id="regForm" onSubmit={handleSubmit}>
          <h2 className="h2">Get Online Consultation</h2>
          <div className="input-group">
            <label htmlFor="FullName" className="form-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {error && fullName.trim() === '' && <p className="invalid-input">Full Name is required</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && !emailPattern.test(email) && <p className="invalid-input">Invalid Email Address</p>}
          </div>
          <div className="input-group" id="specialist">
            <label htmlFor="specialist" className="form-label">Specialist</label>
            <input
              type="text"
              id="specialist"
              className="form-input"
              value={specialist}
              onChange={(e) => setSpecialist(e.target.value)}
              required
            />
            <span className="specialist-down">
              <FontAwesomeIcon icon={faArrowDown} className="fa-xs" />
            </span>
            {error && specialist.trim() === '' && <p className="invalid-input">Specialist is required</p>}
          </div>
          <button type="submit" className="button" id="appointment-btn">Make an appointment</button>
          {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        </form>  
    
      </div>
    </section>
  );
};

export default Contact;

