import React from "react";
import CurrencySymbol from "./CurrencySymbol";

import "./CoinMarket.css";

const CoinMarket = (props) => {
  return (
    <div className="market-capacity coin-section">
      <p>
        <CurrencySymbol />
        {props.cap}
      </p>
    </div>
  );
};

export default CoinMarket;
