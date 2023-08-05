import React, { useEffect, useState } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./CoinChange.css";

const CoinChange = (props) => {
  const [isPositive, updatePositive] = useState(true);

  useEffect(() => {
    if (props.change >= 0) {
      updatePositive(true);
    } else {
      updatePositive(false);
    }
  }, []);

  return (
    <div className="change coin-section">
      <p className={`${isPositive ? "green" : "red"}`}>
        {isPositive && props.change ? (
          <span className="change-icon">
            <FaArrowTrendUp />
          </span>
        ) : (
          ""
        )}
        {!isPositive && props.change ? (
          <span className="change-icon">
            <FaArrowTrendDown />
          </span>
        ) : (
          ""
        )}
        {props.change ? props.change.toFixed(2) + "%" : ""}
      </p>
    </div>
  );
};

export default CoinChange;
