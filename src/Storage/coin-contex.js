import React from "react";

const coinContex = React.createContext({
  tokens: {},
  isLoading: "",
  errorMessage: "",
  priceBase: "",
  setTheBase: () => {}
});

export default coinContex;
