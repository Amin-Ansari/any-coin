import React from "react";
import logo from "../../../assets/img/logo.png";
import "./HeaderLogo.css";

const HeaderLogo = (props) => {
  return (
    <div className="logo-container d-flex justify-content-center h-100">
      <img alt="Website logo" src={logo} />
    </div>
  );
};

export default HeaderLogo;
