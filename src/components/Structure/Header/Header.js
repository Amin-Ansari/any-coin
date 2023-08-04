import React, { useContext, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import Container from "../../UI/Container";
import SearchForm from "./SearchForm";
import OffCanvas from "../Overlay/OffCanvas";
import MenuButton from "./MenuButton";
import "./Header.css";

const Header = (props) => {
  const [buttonToggleState, setToggleState] = useState(false); //This state will control both offcanvas menu and offcanvas button

  const toggleTheButtonState = (state) => {
    setToggleState(state); //This function will toggle the offcanvas button (Note: The logic of this function is outside of the executing components); Also it take the state value from the controlled component
  };

  return (
    <header className="container-fluid header">
      <Container className="d-flex justify-content-between align-items-center h-100">
        <HeaderLogo />
        <SearchForm
          updateTheBase={props.onBaseChange}
          className={"d-none d-lg-block"}
        />
        <MenuButton
          toggleState={buttonToggleState}
          onButtonToggle={toggleTheButtonState}
        />
        {buttonToggleState && (
          <OffCanvas
            onOffCanvasBaseChange={props.onBaseChange}
            toggleState={buttonToggleState}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
