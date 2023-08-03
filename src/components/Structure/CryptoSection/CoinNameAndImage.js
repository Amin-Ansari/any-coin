import React from "react";
import "./CoinNameAndImage.css";

const CoinNameAndImage = (props) => {
  return (
    <div className="name-and-image coin-section">
      <img
        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        className="coin-image d-inline-block "
      />
      <p className="coin-name">
        Bitcoin <span>BTC</span>
      </p>
    </div>
  );
};

export default CoinNameAndImage;
