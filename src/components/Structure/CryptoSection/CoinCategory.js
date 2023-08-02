import React from "react";
import "./CoinCategory.css";

const CoinCategory = (props) => {
  return (
    <div className="coin-container">
      <button
        onClick={props.onAllSelect} //This event will select the parent button and diselect the others
        className={`coin-category-button ${
          props.isAll ? "active-category" : ""
        }`}
      >
        همه
      </button>
      <button
        onClick={props.onIncrementalSelect} //This event will select the parent button and diselect the others
        className={`coin-category-button ${
          props.isIncremental ? "active-category" : ""
        }`}
      >
        رشد افزایشی
      </button>
      <button
        onClick={props.onDecrementalSelect} //This event will select the parent button and diselect the others
        className={`coin-category-button ${
          props.decremental ? "active-category" : ""
        }`}
      >
        رشد کاهشی
      </button>
    </div>
  );
};

export default CoinCategory;
