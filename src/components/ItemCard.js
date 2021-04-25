import React, { useContext } from "react";
import {
  AiOutlineCheck,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
} from "react-icons/ai";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import decimalWithCommas from "../utils/utils";
import {
  Card,
  RightContent,
  RightColumnOne,
  RightColumnTwo,
  ContentGroup,
  Input,
  SmallButton,
  CompareTexts,
  LeftButtonsContainer,
  InputWrapper,
} from "./ItemCard.elem";

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
    <Card danger={modifier} longHeight={quantity * priceEstimated}>
      <LeftButtonsContainer>
        <SmallButton checked={isPurchased} onClick={buttonCheckedHandler}>
          <AiOutlineCheck />
        </SmallButton>

        <SmallButton onClick={() => removeItem(id)}>
          <AiOutlineDelete />
        </SmallButton>
      </LeftButtonsContainer>
      <RightContent>
        <RightColumnOne>
          <ContentGroup>
            <Input
              width="135px"
              type="text"
              placeholder="Item name"
              value={name}
              maxLength="17"
              onChange={(e) => setItemName(e.target.value, id)}
            />
            <InputWrapper>
              Unit
              <Input
                width="60px"
                type="text"
                placeholder="Unit"
                value={unit}
                maxLength="12"
                onChange={(e) => setItemUnit(e.target.value, id)}
              />
            </InputWrapper>
            <InputWrapper>
              Tk.
              <Input
                width="50px"
                type="number"
                min={0}
                max={99999}
                placeholder="Est. price"
                value={priceEstimated}
                onChange={(e) => setItemPriceEst(e.target.value, id)}
              />{" "}
              per {unit ? unit : "unit"}
            </InputWrapper>
          </ContentGroup>
          <ContentGroup>
            <SmallButton
              onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}
            >
              <AiOutlinePlus />
            </SmallButton>
            <Input
              width="50px"
              type="number"
              placeholder="Qty"
              min={0}
              max={99}
              value={quantity}
              onChange={(e) => setItemQty(e.target.value, id)}
            />

            <SmallButton
              onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}
            >
              <AiOutlineMinus />
            </SmallButton>
          </ContentGroup>
          <ContentGroup>
            {isPurchased && (
              <>
                <SmallButton
                  onClick={() =>
                    setItemPriceAct((priceActual = priceActual * 1 + 1), id)
                  }
                >
                  <AiOutlinePlus />
                </SmallButton>

                <Input
                  width="50px"
                  type="number"
                  min={0}
                  max={99999}
                  placeholder="Act. price"
                  value={priceActual}
                  onChange={(e) => setItemPriceAct(e.target.value, id)}
                />
                <SmallButton
                  onClick={() =>
                    setItemPriceAct((priceActual = priceActual * 1 - 1), id)
                  }
                >
                  <AiOutlineMinus />
                </SmallButton>
              </>
            )}
          </ContentGroup>
        </RightColumnOne>
        <RightColumnTwo>
          <CompareTexts>
            {quantity * priceEstimated
              ? `Est. Tk. ${decimalWithCommas(quantity * priceEstimated)}`
              : null}
          </CompareTexts>

          {quantity * priceActual ? (
            <CompareTexts>{`Act. Tk. ${decimalWithCommas(
              quantity * priceActual
            )}`}</CompareTexts>
          ) : null}
        </RightColumnTwo>
      </RightContent>
    </Card>
  );
};

export default ItemCard;
