import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Structure/Header/Header";
import CryptoSection from "./components/Structure/CryptoSection/CryptoSection";
import coinContex from "./Storage/coin-contex";

function App() {
  const ctx = useContext(coinContex);
  return (
    <React.Fragment>
      <Header></Header>
      <CryptoSection tokens={ctx} />
    </React.Fragment>
  );
}

export default React.memo(App);
