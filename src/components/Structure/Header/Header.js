import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import Container from "../../UI/Container";
import SearchForm from "./SearchForm";
import "./Header.css";
import MenuButton from "./MenuButton";

const Header = (props) => {
  const [buttonToggleState, setToggleState] = useState(false); //This state will control both offcanvas menu and offcanvas button

  const toggleTheButtonState = () => {
    setToggleState(() => !buttonToggleState); //This function will toggle the offcanvas button (Note: The logic of this function is outside of the executing components)
  };

  return (
    <header className="container-fluid header">
      <Container className="d-flex justify-content-between align-items-center h-100">
        <HeaderLogo />
        <SearchForm />
        <MenuButton
          toggleState={buttonToggleState}
          onButtonToggle={toggleTheButtonState}
        />
      </Container>
    </header>
  );
};

export default Header;
