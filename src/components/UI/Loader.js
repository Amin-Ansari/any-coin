import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p className="loading-p">Loading...</p>
    </div>
  );
};

export default Loader;
