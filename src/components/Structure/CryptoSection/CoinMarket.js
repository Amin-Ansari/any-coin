import React from "react";
import "./CoinMarket.css";

const CoinMarket = (props) => {
  return (
    <div className="market-capacity coin-section">
      <p>{props.cap}</p>
    </div>
  );
};

export default CoinMarket;