import React, { useEffect, useState } from "react";
import coinContex from "./coin-contex";

const CoinContexProvider = (props) => {
  const [coinsState, setCoins] = useState({ tokens: "Fiiiive" });
  const { currency } = props;

  const test = coinsState;

  return (
    <coinContex.Provider value={coinsState}>
      {props.children}
    </coinContex.Provider>
  );
};

export default CoinContexProvider;
