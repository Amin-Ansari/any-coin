import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Structure/Header/Header";
import CryptoSection from "./components/Structure/CryptoSection/CryptoSection";
import coinContex from "./Storage/coin-contex";
import Footer from "./components/CopyRight/Footer";

function App() {
  //These three states below will represent the filter status
  const [isAllSelect, updateIsAllSelect] = useState(true);
  const [isIncrementalSelect, updateIsincremental] = useState(false);
  const [isDecrementalSelect, updateIsDecremental] = useState(false);

  //The state which stores the name of the coin we have searched
  const [searchedToken, setSearchedToken] = useState("");

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

  //Update the name that we have search
  const updateSearchedName = (name) => {
    setSearchedToken(name);
  };

  const ctx = useContext(coinContex);
  return (
    <React.Fragment>
      <Header
        onSearch={updateSearchedName}
        searchedName={searchedToken}
      ></Header>
      <CryptoSection
        tokens={ctx}
        onAllClicked={allSetlected}
        onIncrementalClicked={incrementalSetlected}
        onDecrementalClicked={decrementalSetlected}
        allState={isAllSelect}
        incrementalState={isIncrementalSelect}
        decrementalState={isDecrementalSelect}
        searchedName={searchedToken}
      />
      <Footer />
    </React.Fragment>
  );
}

export default React.memo(App);
