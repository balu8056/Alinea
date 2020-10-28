import React from "react";
import Logo from "../images/alilogo.png";
import "./BelowCarousel.css";

const BelowCarousel = () => {
  return (
    <div className="belowCarousel">
      <div className="container">
        <img src={Logo} className="logo" alt="logo" />
        <p className="desc">
          Alinea Invest makes responsible<br></br>investing fun, easy, and
          social with<br></br>learning features.
        </p>
      </div>
    </div>
  );
};

export default BelowCarousel;
