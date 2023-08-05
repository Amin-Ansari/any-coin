import React, { useContext } from "react";
import CurrencySymbol from "./CurrencySymbol";
import coinContex from "../../../Storage/coin-contex";
import "./CoinPrice.css";

const CoinPrice = (props) => {
  const ctx = useContext(coinContex);

  return (
    <div className="price coin-section">
      <p>
        <CurrencySymbol />
        {ctx.priceBase !== "IRR" ? props.price : props.price * ctx.rate}
      </p>
    </div>
  );
};

export default CoinPrice;
