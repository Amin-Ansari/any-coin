import React from "react";
import { createPortal } from "react-dom"; //Instead of importing all of the 'react-dom' object, I only omported the 'createPortal' function
import SearchForm from "../Header/SearchForm";
import "./OffCanvas.css";

const OffCanvasMenu = (props) => {
  const closeOffCanvas = () => {
    props.onClosing(false);
  };

  return (
    <>
      <div
        className="backDrop d-block d-lg-none"
        onClick={closeOffCanvas}
      ></div>
      <div
        className={`offCanvasMenu d-block d-lg-none ${
          props.buttonState ? "translate-reset" : ""
        }`}
      >
        <SearchForm
          className={"d-block d-lg-none"}
          searchedName={props.searchedName}
          onSearchingToken={props.onSearchingToken}
        />
      </div>
    </>
  );
};

const OffCanvas = (props) => {
  const parentNode = document.getElementById("overlay");
  return createPortal(
    <OffCanvasMenu
      onClosing={props.onClosingOffCanvas}
      buttonState={props.toggleState}
      searchedName={props.searchedName}
      onSearchingToken={props.onSearchingToken}
    />,
    parentNode
  );
};

export default React.memo(OffCanvas);
