import React, { useContext, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import { CenterButton, Button, StyledLink } from "../GlobalStyles";
import styled from "styled-components";
import decimalWithCommas from "../utils/utils";

const Report = () => {
  const { shoppingListItems, allItemsPriceAct } = useContext(
    ShoppingListContext
  );

  const [isMedicine, setIsMedicine] = useState(false);
  const [isDetailed, setIsDetailed] = useState(false);

  const currentDateTime = Date().toString().substring(0, 25);
  return (
    <>
      <ReportCardOptions>
        Options:
        <label>
          <input
            name="isMedicine"
            type="checkbox"
            checked={isMedicine}
            onChange={() => setIsMedicine(!isMedicine)}
          />
          Medicine
        </label>
        <label>
          <input
            name="isDetailed"
            type="checkbox"
            checked={isDetailed}
            onChange={() => setIsDetailed(!isDetailed)}
          />
          Detailed
        </label>
      </ReportCardOptions>
      <ReportCard>
        <HeadingText>
          <Input type="text" placeholder="Title" width="300px" />
        </HeadingText>
        <DateTimeText>{currentDateTime} </DateTimeText>
        <ItemsListContainer>
          {!isDetailed && (
            <ol>
              {shoppingListItems.map((item) =>
                item.isPurchased ? (
                  <ItemsList key={item.id}>
                    <strong>{item.name}</strong> :{" "}
                    <div>
                      <span>
                        {item.quantity} {item.unit}{" "}
                      </span>
                      <span>
                        {isMedicine ? "  |  " : ` | Budget:  `}
                        <Text>
                          Tk. {decimalWithCommas(item.priceEstimated)}/
                          {item.unit}
                        </Text>
                      </span>
                      {/* <div>
                        {isMedicine ? "Discounted Price: " : ` Actual Cost:  `}
                        <Text>
                          Tk. {decimalWithCommas(item.priceActual)}/{item.unit}
                        </Text>
                      </div> */}

                      <span>
                        {isMedicine ? "  |   Total MRP" : ` | Total Budget:  `}
                        <Text>
                          {" "}
                          Tk.{" "}
                          {decimalWithCommas(
                            item.priceEstimated * item.quantity
                          )}{" "}
                        </Text>
                      </span>
                      <div>
                        {isMedicine ? "Discounted Total: " : `Total Actual:  `}
                        <Text>
                          Tk.
                          {decimalWithCommas(
                            item.priceActual * item.quantity
                          )}{" "}
                        </Text>
                      </div>
                      <div>{item.disc ? ` Disc (${item.disc}%)` : null}</div>
                    </div>
                  </ItemsList>
                ) : (
                  <ItemsList key={item.id}>
                    <strong>{item.name}</strong> : not found/purchased
                  </ItemsList>
                )
              )}
            </ol>
          )}
          {isDetailed && (
            <ol>
              {shoppingListItems.map((item) =>
                item.isPurchased ? (
                  <ItemsList key={item.id}>
                    <strong>{item.name}</strong> :{" "}
                    <div>
                      <div>
                        {item.quantity} {item.unit}{" "}
                      </div>
                      <div>
                        {isMedicine ? "MRP " : `Budget/Est.:  `}
                        <Text>
                          Tk. {decimalWithCommas(item.priceEstimated)}/
                          {item.unit}
                        </Text>
                      </div>
                      <div>
                        {isMedicine ? "Discounted Price: " : ` Actual Cost:  `}
                        <Text>
                          Tk. {decimalWithCommas(item.priceActual)}/{item.unit}
                        </Text>
                      </div>

                      <div>
                        {isMedicine ? "MRP Total: " : `Total Budgeted/Est.:  `}
                        <Text>
                          {" "}
                          Tk.{" "}
                          {decimalWithCommas(
                            item.priceEstimated * item.quantity
                          )}{" "}
                        </Text>
                      </div>
                      <div>
                        {isMedicine ? "Discounted Total: " : `Total Actual:  `}
                        <Text>
                          Tk.
                          {decimalWithCommas(
                            item.priceActual * item.quantity
                          )}{" "}
                        </Text>
                      </div>
                      <div>{item.disc ? ` Disc (${item.disc}%)` : null}</div>
                    </div>
                  </ItemsList>
                ) : (
                  <ItemsList key={item.id}>
                    <strong>{item.name}</strong> : not found/purchased
                  </ItemsList>
                )
              )}
            </ol>
          )}
        </ItemsListContainer>
        <strong>
          Grand total cost: Tk. {decimalWithCommas(allItemsPriceAct)}
        </strong>
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

const Input = styled.input`
  padding: 5px;
  margin: 3px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 400;
  background-color: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  /* border-radius: 5px; */
  border: hidden;
  border-bottom: 1px solid ${(p) => p.theme.inputBorder};
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : "50px")};
  transition: all 0.2s linear;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &:focus {
    outline: none;
  }

  @media print {
    color: black;
  }
`;

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
  @media print {
    color: black;
  }
`;
const ReportCardOptions = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex: 1 1 20rem;
  padding: 1.5rem;
  margin: 0.5rem;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.cardBg};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media print {
    display: none;
  }
`;
const ItemsListContainer = styled.div`
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.6rem;
`;
const DateTimeText = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  font-style: italic;
`;
const HeadingText = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 5px;
`;
const ItemsList = styled.li`
  text-align: left;
`;

const Text = styled.span`
  font-weight: 300;
`;

export default Report;
