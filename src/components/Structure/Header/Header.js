import React from "react";
import HeaderLogo from "./HeaderLogo";
import Container from "../../UI/Container";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="container-fluid header">
      <Container className="d-flex justify-content-space-between align-items-center h-100 py-2">
        <HeaderLogo />
      </Container>
    </header>
  );
};

export default Header;
