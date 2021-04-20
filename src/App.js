import "./styles/app.css";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import SummaryBox from "./components/SummaryBox";
import { useContext } from "react";
import { ShoppingListContext } from "./contexts/ShoppingListContext";
import { nanoid } from "nanoid";

function App() {
  const {
    shoppingListItems,
    addItemToList,
    message,
    clearShoppingList,
  } = useContext(ShoppingListContext);

  const item = {
    id: nanoid(),
    name: "",
    priceEstimated: "",
    priceActual: "",
    quantity: "",
    unit: "",
    isPurchased: false,
    isCancelled: false,
  };

  const itemsCount = shoppingListItems.length;

  return (
    <div className="container">
      <Header />

      {itemsCount === 0 ? null : (
        <div className="button-container">
          <button
            className="btn btn-delete-all"
            onClick={(e) => clearShoppingList()}
          >
            Remove all
          </button>
        </div>
      )}
      {itemsCount === 0 ? null : <SummaryBox />}

      {shoppingListItems &&
        shoppingListItems.map((item) => <ItemCard key={item.id} {...item} />)}
      <div className="button-container ">
        {shoppingListItems.length === 0 ? null : (
          <p style={{ fontStyle: "italic" }}>{message}</p>
        )}

        <button className="btn" onClick={() => addItemToList(item)}>
          {itemsCount === 0 ? "+ Add items to buy" : "+ Add more"}
        </button>
      </div>
    </div>
  );
}

export default App;
