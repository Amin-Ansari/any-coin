import React from "react";
import CurrencySymbol from "./CurrencySymbol";
import "./CoinPrice.css";

const CoinPrice = (props) => {
  return (
    <div className="price coin-section">
      <p>
        <CurrencySymbol />
        {props.price}
      </p>
    </div>
  );
};

export default CoinPrice;
