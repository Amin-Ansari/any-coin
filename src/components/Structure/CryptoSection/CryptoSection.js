import React from "react";
import Container from "../../UI/Container";
import AllCoins from "./AllCoins";
import "./CryptoSection.css";

const CryptoSection = (props) => {
  return (
    <Container className="uppder-margin crypto-section">
      <AllCoins />
    </Container>
  );
};

export default CryptoSection;
