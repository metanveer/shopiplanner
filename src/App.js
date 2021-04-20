import "./styles/app.css";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Summary from "./components/Summary";
import { useContext } from "react";
import { ShoppingListContext } from "./contexts/ShoppingListContext";
import { nanoid } from "nanoid";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const { shoppingListItems, addItemToList, clearShoppingList } = useContext(
    ShoppingListContext
  );

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

  function handleClearShoppingList() {
    alert("Sure?");
    clearShoppingList();
  }

  return (
    <div className="container">
      <Header />
      {itemsCount === 0 ? null : <Summary />}
      {itemsCount === 0 ? (
        <div style={{ fontStyle: "italic" }}>
          {" "}
          Create a list and get started!{" "}
        </div>
      ) : null}
      {shoppingListItems &&
        shoppingListItems.map((item) => <ItemCard key={item.id} {...item} />)}
      <div className="button-container ">
        <button className="btn" onClick={() => addItemToList(item)}>
          <AiOutlinePlus />
        </button>
        {itemsCount === 0 ? null : (
          <div className="button-container">
            <button
              className="btn btn-delete-all"
              onClick={handleClearShoppingList}
            >
              <MdDeleteForever />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
