import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 2000;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  height: 6rem;
  padding: 0.5rem;
  margin: 0 0.4rem;
  color: ${(p) => p.theme.text};
  background-color: ${({ danger, theme }) =>
    danger ? `${theme.danger}` : `${theme.cardBg}`};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 1 30rem;
  font-size: 80%;
  transition: all 0.2s linear;
`;

const NotifyMsg = styled.div`
  background-color: ${(p) => p.theme.bg};
  font-style: italic;
  font-size: 14px;
  color: ${(p) => p.theme.text};
`;

export default Summary;
