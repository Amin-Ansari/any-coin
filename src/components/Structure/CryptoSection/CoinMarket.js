import React, { useContext } from "react";
import coinContex from "../../../Storage/coin-contex";
import CurrencySymbol from "./CurrencySymbol";

import "./CoinMarket.css";

const CoinMarket = (props) => {
  const ctx = useContext(coinContex);
  return (
    <div className="market-capacity coin-section">
      <p>
        <CurrencySymbol />
        {ctx.priceBase !== "IRR" ? props.cap : props.cap * ctx.rate}
      </p>
    </div>
  );
};

export default CoinMarket;
