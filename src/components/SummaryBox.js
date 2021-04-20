import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const SummaryBox = () => {
  const { shoppingListItems, allItemsPriceEst, allItemsPriceAct } = useContext(
    ShoppingListContext
  );

  const dangerStyle =
    Number(allItemsPriceAct) > Number(allItemsPriceEst)
      ? "summary__box summary__box--danger"
      : "summary__box";

  return (
    <div className="summary__box-wrapper">
      {allItemsPriceAct > 0 ? (
        <div className={dangerStyle}>
          <p className="summary__box-text">Act. cost (Tk)</p>

          <h1>{allItemsPriceAct}</h1>
        </div>
      ) : (
        <div className="summary__box">
          <p className="summary__box-text">Items</p>
          <h1>{shoppingListItems.length}</h1>
        </div>
      )}

      <div className="summary__box">
        <p className="summary__box-text">Est. cost (Tk)</p>
        <h1>{allItemsPriceEst}</h1>
      </div>
    </div>
  );
};

export default SummaryBox;
