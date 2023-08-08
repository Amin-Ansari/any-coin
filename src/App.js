import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Structure/Header/Header";
import CryptoSection from "./components/Structure/CryptoSection/CryptoSection";
import coinContex from "./Storage/coin-contex";

function App() {
  //These three states below will represent the filter status
  const [isAllSelect, updateIsAllSelect] = useState(true);
  const [isIncrementalSelect, updateIsincremental] = useState(false);
  const [isDecrementalSelect, updateIsDecremental] = useState(false);

  const allSetlected = () => {
    //Selects all
    updateIsAllSelect(true);
    updateIsincremental(false);
    updateIsDecremental(false);
  };
  const incrementalSetlected = () => {
    //Selects incrementals
    updateIsincremental(true);
    updateIsAllSelect(false);
    updateIsDecremental(false);
  };
  const decrementalSetlected = () => {
    //Selects decrementals
    updateIsDecremental(true);
    updateIsAllSelect(false);
    updateIsincremental(false);
  };

  const ctx = useContext(coinContex);
  return (
    <React.Fragment>
      <Header></Header>
      <CryptoSection
        tokens={ctx}
        onAllClicked={allSetlected}
        onIncrementalClicked={incrementalSetlected}
        onDecrementalClicked={decrementalSetlected}
        allState={isAllSelect}
        incrementalState={isIncrementalSelect}
        decrementalState={isDecrementalSelect}
      />
    </React.Fragment>
  );
}

export default React.memo(App);
