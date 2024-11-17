import React from "react";


import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import brand4 from "../assets/images/brand-4.svg";
import brand5 from "../assets/images/brand-5.svg";
import brand6 from "../assets/images/brand-6.svg";

function OurLogos() {
  return (
    <section aria-label="our-customers" className="logos">
      <div className="container">
        <div className="logos-card">
          <img src={brand1} alt="logoipsum logotype 1" />
        </div>
        <div className="logos-card">
          <img src={brand2} alt="logoipsum logotype 2" />
        </div>
        <div className="logos-card">
          <img src={brand3} alt="logoipsum logotype 3" />
        </div>
        <div className="logos-card">
          <img src={brand4} alt="logoipsum logotype 4" />
        </div>
        <div className="logos-card">
          <img src={brand5} alt="logoipsum logotype 5" />
        </div>
        <div className="logos-card">
          <img src={brand6} alt="logoipsum logotype 6" />
        </div>
      </div>
    </section>
  );
}

export default OurLogos;
