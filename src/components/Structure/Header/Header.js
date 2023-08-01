import React from "react";
import HeaderLogo from "./HeaderLogo";
import Container from "../../UI/Container";
import SearchForm from "./SearchForm";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="container-fluid header">
      <Container className="d-flex justify-content-between align-items-center h-100">
        <HeaderLogo />
        <SearchForm />
      </Container>
    </header>
  );
};

export default Header;
