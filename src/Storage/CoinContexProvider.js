import React, { useEffect, useState } from "react";
import coinContex from "./coin-contex";

const CoinContexProvider = (props) => {
  const [coinsState, setCoins] = useState({ tokens: {} });
  const [priceBase, setPriceBase] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const changeTheBase = (base) => {
    setPriceBase(base);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const currency = priceBase !== "IRR" ? priceBase : "USD";
        const coinsRequest = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
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
  }, [priceBase]);

  const coinData = {
    ...coinsState,
    isLoading,
    errorMessage,
    priceBase,
    setTheBase: changeTheBase
  };
  return (
    <coinContex.Provider value={coinData}>{props.children}</coinContex.Provider>
  );
};

export default CoinContexProvider;
