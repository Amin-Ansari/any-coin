import React from "react";
import { createPortal } from "react-dom"; //Instead of importing all of the 'react-dom' object, I only omported the 'createPortal' function
import "./OffCanvas.css";

const OffCanvasMenu = (props) => {
  const closeOffCanvas = () => {
    props.closeFunction(false);
  };

  return (
    <>
      <div className="backDrop" onClick={closeOffCanvas}></div>
      <div
        className={`offCanvasMenu ${
          props.buttonState ? "translate-reset" : ""
        }`}
      ></div>
    </>
  );
};

const OffCanvas = (props) => {
  const parentNode = document.getElementById("overlay");
  return createPortal(
    <OffCanvasMenu
      closeFunction={props.onClosingOffCanvas}
      buttonState={props.toggleState}
    />,
    parentNode
  );
};

export default React.memo(OffCanvas);
