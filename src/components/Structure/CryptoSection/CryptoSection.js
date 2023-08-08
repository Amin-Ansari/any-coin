import React, { memo } from "react";
import Container from "../../UI/Container";
import AllCoins from "./AllCoins";
import "./CryptoSection.css";

const CryptoSection = (props) => {
  return (
    <Container className="uppder-margin crypto-section">
      <AllCoins
        allTokens={props.tokens}
        allSelected={props.onAllClicked}
        incrementalSelected={props.onIncrementalClicked}
        decrementalSelected={props.onDecrementalClicked}
        isAllSelected={props.allState}
        isDecrementalSelected={props.decrementalState}
        isIncrementalSelected={props.incrementalState}
      />
    </Container>
  );
};

export default memo(CryptoSection);
