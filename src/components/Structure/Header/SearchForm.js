import React from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const updateTheBase = (e) => {
    props.updateTheBase(e.target.value);
  };

  return (
    <form className="d-none d-lg-block">
      <select className="base-select" onChange={updateTheBase}>
        <option value={"USD"}>🇺🇸 USD</option>
        <option value={"ERU"}>🇪🇺 ERU</option>
        <option value={"GBP"}>🇬🇧 GBP </option>
        <option value={"IRR"}>🇮🇷 IRR</option>
      </select>
      <input
        type="search"
        placeholder={`توکن را جستوجوکنید`}
        className="search-input"
      ></input>
    </form>
  );
};

export default React.memo(SearchForm);
