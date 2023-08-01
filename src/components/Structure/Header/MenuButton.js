import React from "react";
import "./MenuButton.css";

const MenuButton = (props) => {
  const toggleTheButton = () => {
    props.onButtonToggle(!props.toggleState);
  };
  return (
    <button className="menu-button d-flex d-lg-none" onClick={toggleTheButton}>
      <span className={`bar ${props.toggleState ? "clicked" : ""}`}></span>
      <span className={`bar ${props.toggleState ? "clicked" : ""}`}></span>
      <span className={`bar ${props.toggleState ? "clicked" : ""}`}></span>
    </button>
  );
};

export default React.memo(MenuButton);
