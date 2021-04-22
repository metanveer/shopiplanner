import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import { Wrapper, Column, Card, NotifyMsg } from "./Summary.elements";

const Summary = () => {
  const {
    shoppingListItems,
    allItemsPriceEst,
    allItemsPriceAct,
    message,
  } = useContext(ShoppingListContext);

  const dangerStyle = Number(allItemsPriceAct) > Number(allItemsPriceEst);

  return (
    <Wrapper>
      {!message ? null : (
        <Column>
          <NotifyMsg>{message}</NotifyMsg>
        </Column>
      )}

      <Column>
        {allItemsPriceAct > 0 ? (
          <Card danger={dangerStyle}>
            <p>Act. cost (Tk)</p>
            <h1>{allItemsPriceAct}</h1>
          </Card>
        ) : (
          <Card>
            <p>Items</p>
            <h1>{shoppingListItems.length}</h1>
          </Card>
        )}
        <Card>
          <p>Est. cost (Tk)</p>
          <h1>{allItemsPriceEst}</h1>
        </Card>
      </Column>
    </Wrapper>
  );
};

export default Summary;
