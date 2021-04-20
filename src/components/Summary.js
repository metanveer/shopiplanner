import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const Summary = () => {
  const {
    shoppingListItems,
    allItemsPriceEst,
    allItemsPriceAct,
    message,
  } = useContext(ShoppingListContext);

  const dangerStyle =
    Number(allItemsPriceAct) > Number(allItemsPriceEst)
      ? "summary__card summary__card--danger"
      : "summary__card";

  return (
    <div className="summary--wrapper ">
      {!message ? null : (
        <div className="summary__col">
          <div className="summary__card--notify">{message}</div>
        </div>
      )}

      <div className="summary__col">
        {allItemsPriceAct > 0 ? (
          <div className={dangerStyle}>
            <p className="summary__card-text">Act. cost (Tk)</p>
            <h1>{allItemsPriceAct}</h1>
          </div>
        ) : (
          <div className="summary__card">
            <p className="summary__card-text">Items</p>
            <h1>{shoppingListItems.length}</h1>
          </div>
        )}
        <div className="summary__card">
          <p className="summary__card-text">Est. cost (Tk)</p>
          <h1>{allItemsPriceEst}</h1>
        </div>
      </div>
    </div>
  );
};

export default Summary;
