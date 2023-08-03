import React from "react";
import CoinNameAndImage from "./CoinNameAndImage";
import CoinChange from "./CoinChange";
import CoinPrice from "./CoinPrice";
import CoinMarket from "./CoinMarket";
import "./AllCoins.css";

const CoinsList = (props) => {
  return (
    <ul className="coins-list">
      <li>
        <CoinMarket />
        <CoinChange />
        <CoinPrice />
        <CoinNameAndImage />
      </li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
      <li>One</li>
      <li>Two</li>
    </ul>
  );
};

export default CoinsList;
