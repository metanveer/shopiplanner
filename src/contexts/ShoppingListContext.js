import React, { createContext, useReducer } from "react";
import { ShoppingListReducer, getItemsCounts } from "./ShoppingListReducer";

export const ShoppingListContext = createContext();

const state = localStorage.getItem("shoppingList")
  ? JSON.parse(localStorage.getItem("shoppingList"))
  : [];

const initialState = {
  shoppingListItems: state,
  ...getItemsCounts(state),
};

const ShoppingListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShoppingListReducer, initialState);

  const setItemPriceEst = (updatedPriceEst, id) => {
    dispatch({
      type: "CHANGE_PRICE_EST",
      payload: { updatedPriceEst, id },
    });
  };

  const setItemPriceAct = (updatedPriceAct, id) => {
    dispatch({
      type: "CHANGE_PRICE_ACT",
      payload: { updatedPriceAct, id },
    });
  };

  const setItemQty = (changedQty, id) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: { changedQty, id },
    });
  };

  const setItemName = (changedName, id) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: { changedName, id },
    });
  };

  const setItemUnit = (changedUnit, id) => {
    dispatch({
      type: "CHANGE_UNIT",
      payload: { changedUnit, id },
    });
  };
  const setItemDisc = (changedDisc, id) => {
    dispatch({
      type: "CHANGE_DISC",
      payload: { changedDisc, id },
    });
  };

  const setItemIsPurchased = (value, id) => {
    dispatch({
      type: "CHANGE_IS_PURCHASED",
      payload: { value, id },
    });
  };

  const addItemToList = (item) => {
    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearShoppingList = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const contextValues = {
    removeItem,
    addItemToList,
    setItemName,
    setItemPriceEst,
    setItemPriceAct,
    setItemQty,
    setItemDisc,
    setItemUnit,
    setItemIsPurchased,
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
