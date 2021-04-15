import React, { createContext, useReducer } from "react";
import { ShoppingListReducer, getItemsCounts } from "./ShoppingListReducer";

export const ShoppingListContext = createContext();

// const sampleItems = [
//   {
//     id: 1,
//     name: "Katla Fish",
//     price: 25,
//     unit: "KG",
//     quantity: 4,
//   },
//   {
//     id: 2,
//     name: "Koi Fish",
//     price: 100,
//     unit: "KG",
//     quantity: 2,
//   },
// ];

const state = localStorage.getItem("shoppingList")
  ? JSON.parse(localStorage.getItem("shoppingList"))
  : [];

const initialState = {
  shoppingListItems: state,
  ...getItemsCounts(state),
};

const ShoppingListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShoppingListReducer, initialState);

  const setItemPrice = (updatedPrice, id) => {
    dispatch({ type: "CHANGE_PRICE", payload: { updatedPrice, id } });
  };
  const setItemQty = (changedQty, id) => {
    dispatch({ type: "CHANGE_QTY", payload: { changedQty, id } });
  };
  const setItemName = (changedName, id) => {
    dispatch({ type: "CHANGE_NAME", payload: { changedName, id } });
  };
  const setItemUnit = (changedUnit, id) => {
    dispatch({ type: "CHANGE_UNIT", payload: { changedUnit, id } });
  };

  const addItemToList = (item) => {
    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearShoppingList = () => {
    dispatch({ type: "CLEAR" });
  };

  const contextValues = {
    removeItem,
    addItemToList,
    setItemName,
    setItemPrice,
    setItemQty,
    setItemUnit,
    clearShoppingList,
    ...state,
  };

  return (
    <ShoppingListContext.Provider value={contextValues}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
