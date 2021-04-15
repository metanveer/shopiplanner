import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const InputCard = ({ id, name, price, quantity, unit }) => {
  const {
    setItemName,
    setItemQty,
    setItemPrice,
    setItemUnit,
    removeItem,
  } = useContext(ShoppingListContext);

  return (
    <div className="item-card-wrapper">
      <div className="item-card">
        <button className="btn btn-delete" onClick={() => removeItem(id)}>
          &times;
        </button>
        <div className="item-card__input-group-wrapper">
          <input
            className="input input__name"
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setItemName(e.target.value, id)}
          />
          <div className="item-card__input-group-pqu">
            <input
              className="input input__price"
              type="number"
              min="1"
              placeholder="Price"
              value={price}
              onChange={(e) => setItemPrice(e.target.value, id)}
            />
            <input
              className="input input__qty"
              type="number"
              min="1"
              placeholder="Qty"
              value={quantity}
              onChange={(e) => setItemQty(e.target.value, id)}
            />
            <input
              className="input input__unit"
              min="1"
              placeholder="Unit"
              value={unit}
              onChange={(e) => setItemUnit(e.target.value, id)}
            />
          </div>
        </div>

        <p className="item-card__item-total-text">
          Tk. {quantity * price ? quantity * price : null}
        </p>
      </div>
    </div>
  );
};

export default InputCard;
