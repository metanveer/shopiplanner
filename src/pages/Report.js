import React, { useContext } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import { CenterButton, Button, StyledLink } from "../GlobalStyles";
import styled from "styled-components";

const Report = () => {
  const { shoppingListItems, allItemsPriceAct } = useContext(
    ShoppingListContext
  );
  const currentDateTime = Date().toString().substring(0, 25);
  return (
    <>
      <ReportCard>
        <HeadingText>Shopping Report</HeadingText>
        <DateTimeText>{currentDateTime} </DateTimeText>
        <ItemsListContainer>
          <ol>
            {shoppingListItems.map((item) =>
              item.isPurchased ? (
                <ItemsList key={item.id}>
                  <strong>{item.name}</strong> : {item.quantity} {item.unit} at
                  Tk. {item.priceActual}/{item.unit}. Total Tk.{" "}
                  {item.priceActual * item.quantity}
                </ItemsList>
              ) : (
                <ItemsList key={item.id}>
                  <strong>{item.name}</strong> : not found/purchased
                </ItemsList>
              )
            )}
          </ol>
        </ItemsListContainer>
        <strong>Grand total cost: Tk. {allItemsPriceAct}</strong>
      </ReportCard>
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

const ReportCard = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex: 1 1 20rem;
  padding: 1.5rem 0;
  margin: 0.5rem;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.cardBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemsListContainer = styled.div`
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const DateTimeText = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  font-style: italic;
`;
const HeadingText = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 5px;
`;
const ItemsList = styled.li`
  text-align: left;
`;

export default Report;
