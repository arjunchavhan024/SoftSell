import React from "react";
import "./css/Team.css";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center people">People</h1>
        <div className="col-2"></div>
        <div className="col-4 left-section text-center">
          <img src="media/images/nithinKamath.jpg" alt="CEO" className="CEO" />
          <h5 className="mt-3">Nithan Kamath</h5>
          <p className="mt-2">Founder, CEO</p>
        </div>
        <div className="col-5 right-section">
          <p>
            Nithin bootstrapped and founded SoftSell in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            SoftSell has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link className="link">Homepage</Link> /{" "}
            <Link className="link">TradingQnA</Link> /{" "}
            <Link className="link">Twitter</Link>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mb-5 mt-5">
        <div className="col-4  team text-center">
          <img src="media/images/Nikhil.jpg" alt="Team-Member" />
          <h5 className="mt-3">Nikhil Kamath</h5>
          <p className="mt-2">Co-founder & CFO</p>
        </div>
        <div className="col-4 team text-center">
          <img src="media/images/Kailash.jpg" alt="Team-Member" />
          <h5 className="mt-3">Dr. Kailash Nadh</h5>
          <p className="mt-2">CTO</p>
        </div>
        <div className="col-4 team text-center">
          <img src="media/images/Venu.jpg" alt="Team-Member" />
          <h5 className="mt-3">Venu Madhav</h5>
          <p className="mt-2">COO</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
