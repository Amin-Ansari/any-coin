import React, { useEffect, useState } from "react";
import coinContex from "./coin-contex";

const CoinContexProvider = (props) => {
  const [coinsState, setCoins] = useState({ tokens: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { currency } = props;

  useEffect(() => {
    const fetchCoins = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const coinsRequest = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );

        if (coinsRequest.ok) {
          const response = await coinsRequest.json();
          setCoins(response);
          setIsLoading(false);
        } else {
          throw new Error(coinsRequest.status + " " + coinsRequest.statusText);
        }
      } catch (err) {
        setErrorMessage(err);
        setIsLoading(false);
      }
    };
    fetchCoins();
  }, []);

  const coinData = {
    ...coinsState,
    isLoading,
    errorMessage
  };
  return (
    <coinContex.Provider value={coinData}>{props.children}</coinContex.Provider>
  );
};

export default CoinContexProvider;
