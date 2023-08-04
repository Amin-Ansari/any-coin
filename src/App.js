import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Structure/Header/Header";
import CryptoSection from "./components/Structure/CryptoSection/CryptoSection";
import coinContex from "./Storage/coin-contex";

function App() {
  const [priceBase, setPriceBase] = useState("USD");

  const changeTheBase = (base) => {
    setPriceBase(base);
  };
  const ctx = useContext(coinContex);

  console.log(ctx);

  return (
    <React.Fragment>
      <Header onBaseChange={changeTheBase}></Header>
      <CryptoSection />
    </React.Fragment>
  );
}

export default App;
