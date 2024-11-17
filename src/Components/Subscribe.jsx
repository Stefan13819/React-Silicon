import React, { useState } from 'react';
import BellImage from '../assets/images/bell.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      setMessage('');
      return;
    }

    setError('');
    setMessage('');

    const requestBody = {
      email: email,
    };

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setError('Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <section aria-label="subscribe" className="subsrcibe-section">
      <div className="container space-y-3">
        <div className="ball-wrapper">
          <div className="img-container">
            <img src={BellImage} alt="Bell" />
          </div>
          <div className="subscription-text">
            <h3 className="h4">Subscribe to our <br /> newsletter</h3>
          </div>
          <div className="subscription-text-2">
            <h3 className="h4">Subscribe to our newsletter to stay <br /> informed about latest updates</h3>
          </div>
        </div>
        <form className="comment-form" id="comment-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#b4b7c9' }} className="i" />
            <input
              type="email"
              id="comment-input"
              className="comment-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button" id="subscription-button">Subscribe</button>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

