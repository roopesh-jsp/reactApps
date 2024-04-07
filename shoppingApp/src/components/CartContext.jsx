import { useReducer } from "react";
import { createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
export const CartItems = createContext({
  items: [],
  addCart: () => {},
});
function cartReducer(cart, action) {
  if (action.type === "Add_cart") {
    const itemPresent = cart.items.find(
      (product) => product.id === action.payLoad.id
    );
    if (itemPresent) {
      const itemIndex = cart.items.indexOf(itemPresent);
      const reqItem = cart.items[itemIndex];
      const modifiedEntry = {
        ...reqItem,
        quantity: reqItem.quantity + 1,
      };

      cart.items[itemIndex] = modifiedEntry;
      return {
        ...cart,
        //   items: [...prev.items],
      };
    } else {
      const newItem = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payLoad.id
      );
      const newEntry = {
        ...newItem,
        quantity: 1,
      };

      return {
        ...cart,
        items: [...cart.items, newEntry],
      };
    }
  }
}

export default function CartContext({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  function handleAddCart(id) {
    cartDispatch({
      type: "Add_cart",
      payLoad: {
        id,
      },
    });
  }

  const contexValue = {
    items: cartState.items,
    addCart: handleAddCart,
  };
  return (
    <CartItems.Provider value={contexValue}>{children}</CartItems.Provider>
  );
}
