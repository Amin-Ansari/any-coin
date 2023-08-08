import React, { memo, useState } from "react";
import CoinCategory from "./CoinCategory";
import ItemLabels from "./ItemLabels";
import CoinsList from "./CoinsList";
import "./AllCoins.css";

const AllCoins = (props) => {
  return (
    <>
      <CoinCategory
        onAllSelect={props.allSelected}
        onIncrementalSelect={props.incrementalSelected}
        onDecrementalSelect={props.decrementalSelected}
        isAll={props.isAllSelected}
        isIncremental={props.isIncrementalSelected}
        decremental={props.isDecrementalSelected}
      />
      <div className="coins-container">
        <ItemLabels />
        <CoinsList
          tokenList={props.allTokens}
          loadingState={props.allTokens.isLoading}
          error={props.allTokens.errorMessage.toString()}
          allCoins={props.isAllSelected}
          incrementalCoins={props.isIncrementalSelected}
          decrementalCoins={props.isDecrementalSelected}
        />
      </div>
    </>
  );
};

export default memo(AllCoins);
