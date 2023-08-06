import React, { useContext } from "react";
import coinContex from "../../../Storage/coin-contex";
import CurrencySymbol from "./CurrencySymbol";

import "./CoinMarket.css";

const CoinMarket = (props) => {
  const ctx = useContext(coinContex);
  return (
    <div className="market-capacity coin-section d-none d-md-flex">
      <p>
        <CurrencySymbol />
        {ctx.priceBase !== "IRR"
          ? props.cap.toLocaleString()
          : (props.cap * ctx.rate).toLocaleString()}
      </p>
    </div>
  );
};

export default CoinMarket;
