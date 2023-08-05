import React from "react";

const coinContex = React.createContext({
  tokens: {},
  isLoading: "",
  errorMessage: "",
  priceBase: "",
  rate: 1,
  setTheBase: () => {}
});

export default coinContex;
