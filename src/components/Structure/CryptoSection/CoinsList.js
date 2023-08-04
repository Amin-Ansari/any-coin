import React from "react";
import CoinNameAndImage from "./CoinNameAndImage";
import CoinChange from "./CoinChange";
import CoinPrice from "./CoinPrice";
import CoinMarket from "./CoinMarket";
import "./AllCoins.css";

const CoinsList = (props) => {
  const coins = props.tokenList;
  const coinArray = [];

  for (let key in coins) {
    coinArray.push({
      id: coins[key].id,
      tokenName: coins[key]["name"],
      symbol: coins[key].symbol,
      price: coins[key]["current_price"],
      marketCap: coins[key]["market_cap"],
      changeRate: coins[key]["ath_change_percentage"],
      image: coins[key].image
    });
  }

  return (
    <ul className="coins-list">
      {console.log(coinArray)}
      {coinArray.map((item) => {
        return (
          <li key={item.symbol}>
            <CoinMarket cap={item.marketCap} />
            <CoinChange change={item.changeRate} />
            <CoinPrice price={item.price} />
            <CoinNameAndImage
              name={item.tokenName}
              image={item.image}
              symbol={item.symbold}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CoinsList;
