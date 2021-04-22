import React from "react";
import ReactDOM from "react-dom";
import CartContextProvider from "./contexts/ShoppingListContext";
import App from "./App";
import GlobalStyle from "./GlobalStyles";

ReactDOM.render(
  <CartContextProvider>
    <GlobalStyle />
    <App />
  </CartContextProvider>,
  document.getElementById("root")
);
