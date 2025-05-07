import React from "react";
import "./css/Education.css";

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 left-section">
          <img src="/media/images/education.svg" alt="" />
        </div>
        <div className="col-6 right-section">
          <h2>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <div className="link">
            <a href="#">
              Varsity<span>→</span>
            </a>
          </div>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <div className="link">
            <a href="#">
              TradingQ&A<span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
