import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import cls from "./Report.module.css";

const Report = () => {
  const { shoppingListItems, allItemsPriceAct } = useContext(
    ShoppingListContext
  );
  const currentDateTime = Date().toString().substring(0, 25);
  return (
    <div className={cls.card}>
      <h4>Shopping Report</h4>
      <p>{currentDateTime} </p>
      <div className={cls.itemCard}>
        <ol>
          {shoppingListItems.map((item) =>
            item.isPurchased ? (
              <li>
                <strong>{item.name}</strong> : {item.quantity} {item.unit} at
                Tk. {item.priceActual}/{item.unit}. Total Tk.{" "}
                {item.priceActual * item.quantity}
              </li>
            ) : (
              <li>
                <strong>{item.name}</strong> : not found/purchased
              </li>
            )
          )}
        </ol>
      </div>
      <strong>Grand total cost: Tk. {allItemsPriceAct}</strong>
    </div>
  );
};

export default Report;
