import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="not-found">
      <div class="error">
        <h1 className="uhoh">Uh Ohh!</h1>
        <p className="not-para">
          We couldn't find the page that you're looking for.
        </p>
        <div class="go-back">
          <Link to={"/"}>
            <button class="cta-back" href="#">
              Go Back
            </button>
          </Link>
        </div>
      </div>
      <img src="media/images/404.png" alt="home image" class="n-img" />
    </section>
  );
};

export default NotFound;
