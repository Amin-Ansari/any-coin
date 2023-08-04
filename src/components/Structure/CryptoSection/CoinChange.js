import React from "react";
import "./CoinChange.css";

const CoinChange = (props) => {
  return (
    <div className="change coin-section">
      <p>{props.change}</p>
    </div>
  );
};

export default CoinChange;
