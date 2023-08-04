import React from "react";
import "./CoinPrice.css";

const CoinPrice = (props) => {
  return (
    <div className="price coin-section">
      <p>{props.price}</p>
    </div>
  );
};

export default CoinPrice;
