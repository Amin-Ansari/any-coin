import React from "react";

const ContainerFluid = (props) => {
  const { children } = props;

  return <div className="container-fluid">{children}</div>;
};

export default ContainerFluid;
