import React from "react";
import "./css/Hero.css";
const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero img"
          className="mb-5 hero-img"
        />
        <h1 className="mt-5 mb-3 fs-1 Heading">Invest in everything</h1>
        <p className="fs-4 SubHeading">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="mt-4 button">Sell My Licenses </button>
      </div>
    </div>
  );
};

export default Hero;
