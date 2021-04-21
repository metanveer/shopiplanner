import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import cls from "./Save.module.css";

const Save = () => {
  const { shoppingListItems, allItemsPriceAct } = useContext(
    ShoppingListContext
  );

  return (
    <div className={cls.container}>
      <div className={cls.card}>
        <h4>Shopping Report</h4>
        <p>Date: April 20, 2021</p>
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
    </div>
  );
};

export default Save;
