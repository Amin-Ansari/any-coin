import React, { useEffect, useState } from "react";
import coinContex from "./coin-contex";

const CoinContexProvider = (props) => {
  const [coinsState, setCoins] = useState({ tokens: "gd" });
  const { currency } = props;

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);
  const test = coinsState;

  return (
    <coinContex.Provider value={coinsState}>
      {props.children}
    </coinContex.Provider>
  );
};

export default CoinContexProvider;
