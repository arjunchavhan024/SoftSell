import React from "react";
import "./css/Pricing.css";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 left-section">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="link">
            <a href="#">
              See pricing <span>→</span>
            </a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center right-section">
            <div className="col box-1">
              <h1 className="mt-3">₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col box-1">
              <h1 className="mt-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
