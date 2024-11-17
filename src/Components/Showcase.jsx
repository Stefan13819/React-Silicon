import React from 'react';
import appGroup from '../assets/images/appgroup.svg';
import appStoreDark from '../assets/images/appstore-dark.svg';
import googlePlayLight from '../assets/images/googleplay-light.svg';
import googlePlayDark from '../assets/images/googleplay-dark.svg';
import phoneImage from '../assets/images/image1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
      <div className="container space-y-3">
        <h1 className="d4">Manage All Your Money In One App</h1>
        <div className="content space-y-3">
          <p className="text-lg">
            We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
          </p>

          <div className="market-btns">
            <a href="#" className="store-btn">
              <span className="sr-only">Download on the App Store</span>
              <img className="show-light" src={appGroup} alt="App Store" />
              <img className="show-dark" src={appStoreDark} alt="App Store Dark" />
            </a>
            <a href="#" className="store-btn">
              <span className="sr-only">Get it on Google Play</span>
              <img className="show-light" src={googlePlayLight} alt="Google Play" />
              <img className="show-dark" src={googlePlayDark} alt="Google Play Dark" />
            </a>
          </div>

          <div className="more">
            <a href="#features" className="btn btn-round btn-white">
            <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <span>Discover more</span>
          </div>
        </div>

        <div className="phone-img-container">
          <img src={phoneImage} alt="Two iPhones" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
