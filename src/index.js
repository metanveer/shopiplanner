import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CartContextProvider from "./contexts/ShoppingListContext";
import App from "./App";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById("root")
);
