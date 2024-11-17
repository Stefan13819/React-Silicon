
import React from 'react';
import { Link } from 'react-router-dom'; 
import logoLight from '../assets/images/logosilicon.svg';
import logoDark from '../assets/images/logotype-dark.svg';
import hamburgare from '../assets/images/hamburgare.svg';
import userIcon from '../assets/images/user.svg';
import DarkMode from './DarkMode';

const Navigation = () => {
  const toggleMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mainMenu = document.querySelector('#main-menu');
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      menuBtn.setAttribute('aria-expanded', false);
      mainMenu.classList.add('hide');
    } else {
      menuBtn.setAttribute('aria-expanded', true);
      mainMenu.classList.remove('hide');
    }
  };

  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="container">
        <a href="/">
          <img className="show-light" src={logoLight} alt="Silicon logotype" />
          <img className="show-dark" src={logoDark} alt="Silicon dark logotype" />
        </a>


        <DarkMode />

        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-controls="main-menu"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <img src={hamburgare} alt="Menu" />
        </button>

        <ul id="main-menu" className="main-menu hide">
          <li><a href="#AppFeatures" className="nav-link">Features</a></li>
          <li><Link to="/contact" className="nav-link" id='contant-link'>Contact</Link></li>
          <li>
            <a href="#" className="btn btn-primary">
              <img className="user-icon" src={userIcon} alt="User Icon" />
              <span>Sign in / up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
