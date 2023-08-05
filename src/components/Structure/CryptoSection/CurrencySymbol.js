import React, { useContext } from "react";
import coinContex from "../../../Storage/coin-contex";
import "./CurrencySymbol.css";

const CurrencySymbol = () => {
  const ctx = useContext(coinContex);

  return (
    <>
      {ctx.priceBase == "USD" && <span>$</span>}
      {ctx.priceBase == "EUR" && <span>€</span>}
      {ctx.priceBase == "GBP" && <span>£</span>}
      {ctx.priceBase == "IRR" && <span>﷼</span>}
    </>
  );
};

export default CurrencySymbol;
