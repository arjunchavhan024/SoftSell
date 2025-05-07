import React from "react";
import "./css/LeftSection.css";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 product-image">
          <img src={imageURL} alt="Image" />
        </div>
        <div className="col-2"></div>
        <div className="col-4">
          <h1 className="product-name">{productName}</h1>
          <p className="product-description">{productDescription}</p>
          <div className="try-demo mb-3">
            <a href={tryDemo}>Try demo →</a>
            <a href={learnMore}>Learn more →</a>
          </div>
          <div className="app-stores">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Store" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
