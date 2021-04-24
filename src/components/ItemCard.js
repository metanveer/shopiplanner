import React, { useContext } from "react";
import styled from "styled-components";

import {
  AiOutlineCheck,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
} from "react-icons/ai";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ItemCard = ({
  id,
  name,
  priceEstimated,
  priceActual,
  quantity,
  isPurchased,

  unit,
}) => {
  const {
    setItemName,
    setItemQty,
    setItemPriceEst,
    setItemPriceAct,
    setItemUnit,
    setItemIsPurchased,
    removeItem,
  } = useContext(ShoppingListContext);

  function buttonCheckedHandler() {
    if (!isPurchased) {
      setItemPriceAct(priceEstimated, id);
      setItemIsPurchased(true, id);
    }

    if (isPurchased) {
      setItemPriceAct(null, id);
      setItemIsPurchased(false, id);
    }
  }

  const modifier = priceActual > priceEstimated ? "danger" : null;

  return (
    <Card danger={modifier}>
      <Column fixed>
        <SmallButton checked={isPurchased} onClick={buttonCheckedHandler}>
          <AiOutlineCheck />
        </SmallButton>

        <SmallButton onClick={() => removeItem(id)}>
          <AiOutlineDelete />
        </SmallButton>
      </Column>
      <Column>
        <Row>
          <Input
            width="135px"
            type="text"
            placeholder="Item name"
            value={name}
            maxLength="17"
            onChange={(e) => setItemName(e.target.value, id)}
          />
          <Input
            width="60px"
            type="number"
            min={0}
            max={99999}
            placeholder="Est. price"
            value={priceEstimated}
            onChange={(e) => setItemPriceEst(e.target.value, id)}
          />
          {isPurchased && (
            <Input
              width="60px"
              type="number"
              min={0}
              max={99999}
              placeholder="Act. price"
              value={priceActual}
              onChange={(e) => setItemPriceAct(e.target.value, id)}
            />
          )}
        </Row>
        <Row>
          <SmallButton
            onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}
          >
            <AiOutlinePlus />
          </SmallButton>
          <Input
            width="60px"
            type="number"
            placeholder="Qty"
            min={0}
            max={99}
            value={quantity}
            onChange={(e) => setItemQty(e.target.value, id)}
          />
          <Input
            width="60px"
            type="text"
            placeholder="Unit"
            value={unit}
            maxLength="7"
            onChange={(e) => setItemUnit(e.target.value, id)}
          />
          <SmallButton
            onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}
          >
            <AiOutlineMinus />
          </SmallButton>
        </Row>
        <Row>
          <CompareTexts>
            {quantity * priceEstimated
              ? `Est. Tk. ${quantity * priceEstimated}`
              : null}
          </CompareTexts>

          {quantity * priceActual ? (
            <CompareTexts>{`Act. Tk. ${quantity * priceActual}`}</CompareTexts>
          ) : null}
        </Row>
      </Column>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex: 1 1 20rem;
  height: 9rem;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${(p) =>
    p.danger ? "rgb(225 134 17 / 76%)" : `${p.theme.cardBg}`};
  z-index: ${({ danger }) => (danger ? "999" : "0")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  flex: ${({ fixed }) => (fixed ? "0 0 1rem" : "1 1 1rem")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CompareTexts = styled.div`
  width: 10em;
  font-size: 0.95em;
  margin: 0 5px;
  overflow: hidden;
  color: ${(p) => p.theme.text};
  font-weight: 300;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 3px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 300;
  border-width: 1px;
  border-color: #cccccc;
  background-color: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  border-style: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : "50px")};

  &:focus {
    outline: none;
  }
`;

export const SmallButton = styled.button`
  color: ${(p) => p.theme.smBtnText};
  font-size: 20px;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${(p) =>
    p.checked ? `${p.theme.smBtnCheckedBg}` : `${p.theme.smBtnBg}`};
  outline: none;
  border: none;
  margin: 2px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ checked, theme }) =>
      checked ? `${theme.smBtnCheckedBg}` : `${theme.smBtnHoverBg}`};
  }
`;

export default ItemCard;
