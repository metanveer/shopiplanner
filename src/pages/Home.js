import ItemCard from "../components/ItemCard";
import Summary from "../components/Summary";
import { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import { nanoid } from "nanoid";
import { AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { CenterButton, StyledLink, Button } from "../GlobalStyles";

function Home() {
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
  };

  const itemsCount = shoppingListItems.length;

  function handleClearShoppingList() {
    clearShoppingList();
  }

  return (
    <>
      {itemsCount === 0 ? null : <Summary />}
      {itemsCount === 0 ? (
        <div style={{ fontStyle: "italic" }}>
          Create a list and get started!
        </div>
      ) : null}
      {shoppingListItems &&
        shoppingListItems.map((item) => <ItemCard key={item.id} {...item} />)}

      <CenterButton>
        <Button onClick={() => addItemToList(item)}>
          <AiOutlinePlus />
        </Button>
        {itemsCount === 0 ? null : !shoppingListItems[0].name ? null : (
          <Button>
            <StyledLink to="/report">
              <AiOutlineShareAlt />
            </StyledLink>
          </Button>
        )}
        {itemsCount === 0 ? null : (
          <Button danger onClick={handleClearShoppingList}>
            <MdDeleteForever />
          </Button>
        )}
      </CenterButton>
    </>
  );
}

export default Home;
