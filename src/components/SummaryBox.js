import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const SummaryBox = () => {
  const { shoppingListItems, allItemsPrice } = useContext(ShoppingListContext);

  return (
    <div className="summary__box-wrapper">
      <div className="summary__box">
        <h4>Items</h4>
        <h1>{shoppingListItems.length}</h1>
      </div>
      <div className="summary__box">
        <h4>Cost</h4>
        <h1>Tk. {allItemsPrice}</h1>
      </div>
    </div>
  );
};

export default SummaryBox;
