const saveListtoLS = (shoppingListItems) => {
  localStorage.setItem(
    "shoppingList",
    JSON.stringify(shoppingListItems.length > 0 ? shoppingListItems : [])
  );
};

export const getItemsCounts = (shoppingListItems) => {
  saveListtoLS(shoppingListItems);
  let itemsCount = shoppingListItems.reduce(
    (total, currItem) => total + currItem.quantity * 1,
    0
  );
  let allItemsPrice = shoppingListItems
    .reduce((total, currItem) => total + currItem.price * currItem.quantity, 0)
    .toFixed(2);
  return { itemsCount, allItemsPrice };
};

export const ShoppingListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_LIST":
      if (
        !state.shoppingListItems.find(
          (item) => item.name === action.payload.name
        )
      ) {
        state.shoppingListItems.push({
          ...action.payload,
        });

        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: "Item added to list successfully",
        };
      } else {
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: "Item added already! Pls edit the fields",
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        ...getItemsCounts(
          state.shoppingListItems.filter((item) => item.id !== action.payload)
        ),
        shoppingListItems: [
          ...state.shoppingListItems.filter(
            (item) => item.id !== action.payload
          ),
        ],
        message: "Item removed",
      };

    case "CHANGE_PRICE":
      const index = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.shoppingListItems[index].price = action.payload.updatedPrice;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Price updated successfully!",
      };
    case "CHANGE_QTY":
      const indexQty = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.shoppingListItems[indexQty].quantity = action.payload.changedQty;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Quantity changed",
      };

    case "CHANGE_NAME":
      const indexName = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.shoppingListItems[indexName].name = action.payload.changedName;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Name saved!",
      };

    case "CHANGE_UNIT":
      const indexUnit = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.shoppingListItems[indexUnit].unit = action.payload.changedUnit;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Unit saved!",
      };

    case "CLEAR":
      return {
        shoppingListItems: [],
        ...getItemsCounts([]),
        message: "List cleared!",
      };
    default:
      return state;
  }
};
