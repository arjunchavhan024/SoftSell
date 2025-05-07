import React from "react";
import "./css/RightSection.css";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="product-name-RS">{productName}</h1>
          <p className="product-description-RS">{productDescription}</p>
          <div className="try-demo-RS mb-3">
            <a href={learnMore}>Learn more →</a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 product-image-RS">
          <img src={imageURL} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
