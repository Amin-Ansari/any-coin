import React, { useEffect, useState } from "react";
import coinContex from "./coin-contex";

const CoinContexProvider = (props) => {
  const [coinsState, setCoins] = useState({ tokens: "gd" });
  const { currency } = props;
  console.log(currency);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coinsRequest = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );

        if (coinsRequest.ok) {
          const response = await coinsRequest.json();
          setCoins(response);
        } else {
          throw new Error(coinsRequest.status + " " + coinsRequest.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCoins();
  }, []);

  return (
    <coinContex.Provider value={coinsState}>
      {props.children}
    </coinContex.Provider>
  );
};

export default CoinContexProvider;
