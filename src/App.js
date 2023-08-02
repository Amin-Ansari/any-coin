import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Structure/Header/Header";

function App() {
  const [priceBase, setPriceBase] = useState("USD");

  const changeTheBase = (base) => {
    setPriceBase(base);
  };

  return (
    <React.Fragment>
      <Header onBaseChange={changeTheBase}></Header>
    </React.Fragment>
  );
}

export default App;
