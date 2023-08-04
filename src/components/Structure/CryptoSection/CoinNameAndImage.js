import React from "react";
import "./CoinNameAndImage.css";

const CoinNameAndImage = (props) => {
  return (
    <div className="name-and-image coin-section">
      <img src={props.image} className="coin-image d-inline-block " />
      <p className="coin-name">
        {props.name} <span>{props.symbol}</span>
      </p>
    </div>
  );
};

export default CoinNameAndImage;
