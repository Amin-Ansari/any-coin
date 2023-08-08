import React, { useContext } from "react";
import coinContex from "../../../Storage/coin-contex";
import "./SearchForm.css";

const SearchForm = (props) => {
  const ctx = useContext(coinContex);
  const updateTheBase = (e) => {
    ctx.setTheBase(e.target.value);
  };

  const updateSearch = (e) => {
    props.onSearchingToken(e.target.value);
  };

  return (
    <form className={`${props.className}`}>
      <select
        className="base-select"
        onChange={updateTheBase}
        value={ctx.priceBase}
      >
        <option value={"USD"}>🇺🇸 USD</option>
        <option value={"EUR"}>🇪🇺 EUR</option>
        <option value={"GBP"}>🇬🇧 GBP </option>
        <option value={"IRR"}>🇮🇷 IRR</option>
      </select>
      <input
        type="search"
        placeholder={`توکن را جستوجوکنید`}
        className="search-input"
        onChange={updateSearch}
        value={props.searchedName}
      ></input>
    </form>
  );
};

export default React.memo(SearchForm);
