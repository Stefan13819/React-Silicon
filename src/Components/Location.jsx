import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons';

import facebookIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/bxl-twitter.png';
import instagramIcon from '../assets/images/instagram.png';
import youtubeIcon from '../assets/images/bxl-youtube.svg';

const Location = () => {
  return (
    <section aria-label="location" className="location-section">
      <div className="container space-y-3">
        <div className="location-map">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3179.9605696900117!2d-83.76447562343493!3d37.153637072148356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4517%20Washington%20Ave.%20Manchester%2C%20Kentucky%2039495!5e0!3m2!1sen!2sse!4v1730832368528!5m2!1sen!2sse"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="medical-grid">
          <div className="medical-center-1">
            <h3 className="h5">Medical Center 1</h3>
            <p className="dotts">
              <FontAwesomeIcon icon={faLocationDot}  style={{ color: '#6366F1'}} /> 4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <p className="dotts">
              <FontAwesomeIcon icon={faPhoneVolume}  style={{ color: '#6366F1'}} /> (406) 555-0120
            </p>
            <p className="dotts">
              <FontAwesomeIcon icon={faClock}  style={{ color: '#6366F1'}} /> <strong>Mon - Fri:</strong> 9:00 am – 22:00 am
            </p>
            <p className="dotts">
              <strong className="time">Sat – Sun:</strong> 9:00 am – 20:00 am
            </p>
          </div>

          <div className="medical-center-2">
            <h3 className="h5">Medical Center 2</h3>
            <p className="dotts">
              <FontAwesomeIcon icon={faLocationDot}  style={{ color: '#6366F1'}} /> 2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <p className="dotts">
              <FontAwesomeIcon icon={faPhoneVolume}  style={{ color: '#6366F1'}} /> (406) 544-0123
            </p>
            <p className="dotts">
              <FontAwesomeIcon icon={faClock}  style={{ color: '#6366F1'}} /> <strong>Mon - Fri:</strong> 9:00 am – 22:00 am
            </p>
            <p className="dotts">
              <strong className="time">Sat – Sun:</strong> 9:00 am – 20:00 am
            </p>
          </div>
        

         <div className="social-media">
          <div className="icon-container">
            <img src={facebookIcon} alt="Facebook" />
          </div>
          <div className="icon-container">
            <img src={twitterIcon} alt="Twitter" />
          </div>
          <div className="icon-container">
            <img src={instagramIcon} alt="Instagram" />
          </div>
          <div className="icon-container">
            <img src={youtubeIcon} alt="YouTube" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
