import React, { useContext, useEffect } from "react";
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
  ContentGroupHor,
  ContentGroupHorIns,
  ContentGroupHorInsWrap,
  Input,
  Label,
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
  disc,
  isPurchased,
  unit,
}) => {
  const {
    setItemName,
    setItemQty,
    setItemPriceEst,
    setItemPriceAct,
    setItemUnit,
    setItemDisc,
    setItemIsPurchased,
    removeItem,
  } = useContext(ShoppingListContext);

  function buttonCheckedHandler() {
    if (!isPurchased) {
      setItemPriceAct(
        disc ? discountedPrice(priceEstimated, disc) : priceEstimated,
        id
      );
      setItemIsPurchased(true, id);
    }

    if (isPurchased) {
      setItemPriceAct(null, id);
      setItemIsPurchased(false, id);
    }
  }

  function handleDiscount(e) {
    setItemDisc(e.target.value, id);
  }

  useEffect(() => {
    setItemPriceAct(
      disc ? discountedPrice(priceEstimated, disc) : priceEstimated,
      id
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disc, priceEstimated]);

  function discountedPrice(price, disc) {
    const discountedPrice = price * 1 - (price * Number(disc) * 1) / 100;
    return discountedPrice;
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
              width="120px"
              type="text"
              placeholder="Item name"
              value={name}
              maxLength="17"
              onChange={(e) => setItemName(e.target.value, id)}
            />

            <Input
              width="120px"
              type="text"
              placeholder="Unit"
              value={unit}
              maxLength="12"
              onChange={(e) => setItemUnit(e.target.value, id)}
            />

            <Input
              width="120px"
              type="number"
              min={0}
              max={99999}
              placeholder="Est. price"
              value={priceEstimated}
              onChange={(e) => setItemPriceEst(e.target.value, id)}
            />
          </ContentGroup>
          <div>
            <ContentGroupHor>
              <SmallButton
                onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}
              >
                <AiOutlinePlus />
              </SmallButton>
              <InputWrapper
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Label>Qty</Label>
                <Input
                  width="30px"
                  type="number"
                  placeholder="Qty"
                  min={0}
                  max={99}
                  value={quantity}
                  onChange={(e) => setItemQty(e.target.value, id)}
                />
              </InputWrapper>
              <SmallButton
                onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}
              >
                <AiOutlineMinus />
              </SmallButton>
            </ContentGroupHor>

            {isPurchased && (
              <ContentGroupHorInsWrap>
                <ContentGroupHorIns>
                  <InputWrapper>
                    Disc
                    <Input
                      width="30px"
                      type="number"
                      placeholder="Disc"
                      min={0}
                      max={99}
                      value={disc}
                      onChange={handleDiscount}
                    />
                    %
                  </InputWrapper>
                </ContentGroupHorIns>
                <ContentGroupHorIns>
                  <SmallButton
                    onClick={() =>
                      setItemPriceAct((priceActual = priceActual * 1 + 1), id)
                    }
                  >
                    <AiOutlinePlus />
                  </SmallButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Label>Act. Tk.</Label>
                    <Input
                      width="50px"
                      name="actualPrice"
                      type="number"
                      min={0}
                      max={99999}
                      placeholder="Act. price"
                      value={priceActual}
                      onChange={(e) => setItemPriceAct(e.target.value, id)}
                    />
                  </div>
                  <SmallButton
                    onClick={() =>
                      setItemPriceAct((priceActual = priceActual * 1 - 1), id)
                    }
                  >
                    <AiOutlineMinus />
                  </SmallButton>
                </ContentGroupHorIns>
              </ContentGroupHorInsWrap>
            )}
          </div>
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
