import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Structure/Header/Header";
import CryptoSection from "./components/Structure/CryptoSection/CryptoSection";

function App() {
  const [priceBase, setPriceBase] = useState("USD");

  console.log(priceBase);

  const changeTheBase = (base) => {
    setPriceBase(base);
  };

  return (
    <React.Fragment>
      <Header onBaseChange={changeTheBase}></Header>
      <CryptoSection />
    </React.Fragment>
  );
}

export default App;
