import React from "react";
import "./css/Stats.css";

const Stats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="left-section col-6 mb-5">
          <h2>Trust with confidence</h2>
          <div className="box">
            <h3>Customer-first always</h3>
            <p>
              That's why 1.5+ crore customers trust Zerodha <br /> with ₹4.5+
              lakh crores of equity investments and <br /> contribute to 15% of
              daily retail exchange volumes in India.
            </p>
          </div>
          <div className="box">
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying <br />
              push notifications. High quality apps that you use <br /> at your
              pace, the way you like.
            </p>
          </div>
          <div className="box">
            <h3>The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. <br /> Our investments in
              30+ fintech startups offer <br /> you tailored services specific
              to your needs.
            </p>
          </div>
          <div className="box">
            <h3>Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 right-section mb-5">
          <img src="media/images/ecosystem.png" alt="Ecosystem" />
          <div className="link text-center">
            <a href="#">
              Explore our products <span>→</span>
            </a>
            <a href="#">
              Try Kite demo<span>→</span>
            </a>
          </div>
        </div>
        <img
          className="press-image"
          src="media/images/pressLogos.png"
          alt="Press Image"
        />
      </div>
    </div>
  );
};

export default Stats;
