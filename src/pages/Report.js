import React, { useContext } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import { CenterButton, Button, StyledLink } from "../GlobalStyles";
import styles from "./Report.module.css";

const Report = () => {
  const { shoppingListItems, allItemsPriceAct } = useContext(
    ShoppingListContext
  );
  const currentDateTime = Date().toString().substring(0, 25);
  return (
    <>
      <div className={styles.card}>
        <p className={styles.heading}>Shopping Report</p>
        <p className={styles.dateTime}>{currentDateTime} </p>
        <div className={styles.itemCard}>
          <ol>
            {shoppingListItems.map((item) =>
              item.isPurchased ? (
                <li key={item.id}>
                  <strong>{item.name}</strong> : {item.quantity} {item.unit} at
                  Tk. {item.priceActual}/{item.unit}. Total Tk.{" "}
                  {item.priceActual * item.quantity}
                </li>
              ) : (
                <li key={item.id}>
                  <strong>{item.name}</strong> : not found/purchased
                </li>
              )
            )}
          </ol>
        </div>
        <strong>Grand total cost: Tk. {allItemsPriceAct}</strong>
      </div>
      <CenterButton>
        <Button>
          <StyledLink to="/">
            <AiOutlineRollback />
          </StyledLink>
        </Button>
      </CenterButton>
    </>
  );
};

export default Report;
