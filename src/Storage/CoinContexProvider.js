import React, { useEffect, useState } from "react";
import coinContex from "./coin-contex";

const CoinContexProvider = (props) => {
  const [coinsState, setCoins] = useState({ tokens: {} });
  const [priceBase, setPriceBase] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rate, setRate] = useState(1);

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

    //The function below line will get the price of rial and changes the convert rate
    const getRialValue = async () => {
      const rialRequest = await fetch(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_GUUfxK65JOSzc1wizzj7is3wP7eT3VOfkrAPGIZG"
      );

      const response = await rialRequest.json();

      setRate(response.data.IRR.value);
    };
    getRialValue();

    fetchCoins();
  }, [priceBase]);

  const coinData = {
    ...coinsState,
    isLoading,
    errorMessage,
    priceBase,
    rate,
    setTheBase: changeTheBase
  };
  return (
    <coinContex.Provider value={coinData}>{props.children}</coinContex.Provider>
  );
};

export default CoinContexProvider;
