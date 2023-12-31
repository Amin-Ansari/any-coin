import React, { useState } from "react";
import CoinNameAndImage from "./CoinNameAndImage";
import CoinChange from "./CoinChange";
import CoinPrice from "./CoinPrice";
import CoinMarket from "./CoinMarket";
import Loader from "../../UI/Loader";
import "./AllCoins.css";

const CoinsList = (props) => {
  const coins = props.tokenList;
  const coinArray = [];
  const increamentalCoins = [];
  const decreamentalCoins = [];
  const searchedName = props.searchedName;
  const searchedByName = [];

  for (let key in coins) {
    if (coins[key].id) {
      coinArray.push({
        id: coins[key].id,
        tokenName: coins[key]["name"],
        symbol: coins[key].symbol,
        price: coins[key]["current_price"],
        marketCap: coins[key]["market_cap"],
        changeRate: coins[key]["price_change_percentage_24h"],
        image: coins[key].image
      });
    }
  }

  for (let key in coins) {
    if (coins[key]["price_change_percentage_24h"] >= 0) {
      increamentalCoins.push({
        id: coins[key].id,
        tokenName: coins[key]["name"],
        symbol: coins[key].symbol,
        price: coins[key]["current_price"],
        marketCap: coins[key]["market_cap"],
        changeRate: coins[key]["price_change_percentage_24h"],
        image: coins[key].image
      });
    }
  }
  for (let key in coins) {
    if (coins[key]["price_change_percentage_24h"] < 0) {
      decreamentalCoins.push({
        id: coins[key].id,
        tokenName: coins[key]["name"],
        symbol: coins[key].symbol,
        price: coins[key]["current_price"],
        marketCap: coins[key]["market_cap"],
        changeRate: coins[key]["price_change_percentage_24h"],
        image: coins[key].image
      });
    }
  }

  for (let item of coinArray) {
    if (item.tokenName.toLowerCase().includes(searchedName.toLowerCase())) {
      searchedByName.push(item);
    }
  }

  return (
    <ul className="coins-list">
      {props.loadingState && !props.error ? <Loader /> : ""}
      {props.error && !searchedName && !props.loadingState ? (
        <p className="error-message">{props.error.toString()}</p>
      ) : (
        ""
      )}
      {props.allCoins && !searchedName && !props.loadingState
        ? coinArray.map((item) => (
            <li key={item.tokenName}>
              <CoinMarket cap={item.marketCap} />
              <CoinChange change={item.changeRate} />
              <CoinPrice price={item.price} />
              <CoinNameAndImage
                name={item.tokenName}
                image={item.image}
                symbol={item.symbold}
              />
            </li>
          ))
        : ""}
      {props.incrementalCoins && !searchedName && !props.loadingState
        ? increamentalCoins.map((item) => (
            <li key={item.tokenName}>
              <CoinMarket cap={item.marketCap} />
              <CoinChange change={item.changeRate} />
              <CoinPrice price={item.price} />
              <CoinNameAndImage
                name={item.tokenName}
                image={item.image}
                symbol={item.symbold}
              />
            </li>
          ))
        : ""}

      {props.decrementalCoins && !searchedName && !props.loadingState
        ? decreamentalCoins.map((item) => (
            <li key={item.tokenName}>
              <CoinMarket cap={item.marketCap} />
              <CoinChange change={item.changeRate} />
              <CoinPrice price={item.price} />
              <CoinNameAndImage
                name={item.tokenName}
                image={item.image}
                symbol={item.symbold}
              />
            </li>
          ))
        : ""}

      {searchedName
        ? searchedByName.map((item) => (
            <li key={item.tokenName}>
              <CoinMarket cap={item.marketCap} />
              <CoinChange change={item.changeRate} />
              <CoinPrice price={item.price} />
              <CoinNameAndImage
                name={item.tokenName}
                image={item.image}
                symbol={item.symbold}
              />
            </li>
          ))
        : ""}
    </ul>
  );
};

export default CoinsList;
