import React, { useContext } from "react";
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
    <div className={`item-card ${modifier}`}>
      <div className="item-card__col-one">
        <div className="icon-not-purchased">
          <button
            className={
              isPurchased
                ? `btn--item-card-col-one-checked`
                : "btn--item-card-col-one"
            }
            onClick={buttonCheckedHandler}
          >
            <AiOutlineCheck />
          </button>

          <button
            className="btn--item-card-col-one"
            onClick={() => removeItem(id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <div className="item-card__col-two">
        <div className="item-card__col-two-row-one">
          <input
            className="input input__name"
            type="text"
            placeholder="Item name"
            value={name}
            maxLength="15"
            onChange={(e) => setItemName(e.target.value, id)}
          />
          <input
            className="input input__price-estimation"
            type="number"
            min={0}
            max={99999}
            placeholder="Est. price"
            value={priceEstimated}
            onChange={(e) => setItemPriceEst(e.target.value, id)}
          />
          {isPurchased && (
            <input
              className="input input__price-purchased"
              type="number"
              min={0}
              max={99999}
              placeholder="Act. price"
              value={priceActual}
              onChange={(e) => setItemPriceAct(e.target.value, id)}
            />
          )}
        </div>
        <div className="item-card__col-two-row-two">
          <button
            className="btn--item-card"
            onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}
          >
            <AiOutlinePlus />
          </button>
          <input
            className="input input__qty"
            type="number"
            placeholder="Qty"
            min={0}
            max={99}
            value={quantity}
            onChange={(e) => setItemQty(e.target.value, id)}
          />
          <input
            className="input input__unit"
            type="text"
            placeholder="Unit"
            value={unit}
            maxLength="7"
            onChange={(e) => setItemUnit(e.target.value, id)}
          />
          <button
            className="btn--item-card"
            onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}
          >
            <AiOutlineMinus />
          </button>
        </div>
        <div className="item-card__col-two-row-three">
          <div className="item-card__col-two-row-three-coloumns">
            {quantity * priceEstimated
              ? `Est. Tk. ${quantity * priceEstimated}`
              : null}
          </div>
          <div className="item-card__col-two-row-three-coloumns">
            {quantity * priceActual
              ? `Act. Tk. ${quantity * priceActual}`
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
