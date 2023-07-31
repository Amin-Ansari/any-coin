import React from "react";
import ContainerFluid from "./components/UI/ContainerFluid";
import Container from "./components/UI/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <ContainerFluid>
        <Container>Hello World</Container>
      </ContainerFluid>
    </React.Fragment>
  );
}

export default App;
