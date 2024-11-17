
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHouse, faAnglesRight } from '@fortawesome/free-solid-svg-icons'; 

const BreadCrumb = () => {
  return (
    <section aria-label="breadcrumb" className="breadcrumb-section">
      <div className="container space-y-3">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <span className="home-icon">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Homepage
          </Link>
          <span className="separator">
            <FontAwesomeIcon icon={faAnglesRight} className="fa-2xs" />
          </span>
          <span className="breadcrumb-current">Contact</span>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;

