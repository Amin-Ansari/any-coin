import React from "react";

const Container = (props) => {
  const { children } = props;

  return <div className={`container ${props.className}`}>{children}</div>;
};

export default Container;
