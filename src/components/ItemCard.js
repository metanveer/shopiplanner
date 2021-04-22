import React, { useContext } from "react";
import {
  AiOutlineCheck,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
} from "react-icons/ai";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import {
  Card,
  Column,
  CompareTexts,
  Input,
  Row,
  Button,
} from "./ItemCard.elements";

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
        <Button checked={isPurchased} onClick={buttonCheckedHandler}>
          <AiOutlineCheck />
        </Button>

        <Button onClick={() => removeItem(id)}>
          <AiOutlineDelete />
        </Button>
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
          <Button onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}>
            <AiOutlinePlus />
          </Button>
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
          <Button onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}>
            <AiOutlineMinus />
          </Button>
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

export default ItemCard;
