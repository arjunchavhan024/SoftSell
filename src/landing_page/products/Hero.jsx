import React from "react";
import "./css/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center border-bottom">
          <h1 className="product-hero-head">SoftSell Products</h1>
          <h4 className="product-hero-subhead">
            Sleek, modern, and intuitive trading platforms
          </h4>
          <p className="product-hero-para">
            Check out our
            <Link className="product-hero-link"> investment offerings →</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
