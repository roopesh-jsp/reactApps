import { useReducer, useState } from "react";
import { createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
export const CartItems = createContext({
  items: [],
  addCart: () => {},
  theme: "light",
  setTheme: () => {},
});
function cartReducer(cart, action) {
  // if (action.type === "Add_cart") {
  //   const itemPresent = cart.items.find(
  //     (product) => product.id === action.payLoad.id
  //   );
  //   if (itemPresent) {
  //     const itemIndex = cart.items.indexOf(itemPresent);
  //     const reqItem = cart.items[itemIndex];
  //     const modifiedEntry = {
  //       ...reqItem,
  //       quantity: reqItem.quantity + 1,
  //     };
  //     cart.items[itemIndex] = modifiedEntry;
  //     return {
  //       ...cart,
  //       items: [...cart.items],
  //     };
  //   } else {
  //     const newItem = DUMMY_PRODUCTS.find(
  //       (product) => product.id === action.payLoad.id
  //     );
  //     const newEntry = {
  //       ...newItem,
  //       quantity: 1,
  //     };
  //     return {
  //       ...cart,
  //       items: [...cart.items, newEntry],
  //     };
  //   }
  // }
}

export default function CartContext({ children }) {
  // const [cartState, cartDispatch] = useReducer(cartReducer, {
  //   items: [],
  //   theme: "light",
  // });
  const [cart, setCart] = useState({
    items: [],
    theme: "light",
  });
  function handleToggleTheme() {
    setCart((prev) => {
      const bg = prev.theme === "light" ? "dark" : "light";
      return {
        ...prev,
        theme: bg,
      };
    });
  }
  function quantityInc(id) {
    setCart((prev) => {
      const reqItem = prev.items.find((item) => item.id === id);
      const reqIndex = prev.items.indexOf(reqItem);
      const updatedItem = {
        ...reqItem,
        quantity: reqItem.quantity + 1,
      };
      prev.items[reqIndex] = updatedItem;
      return {
        ...prev,
        items: [prev.items],
      };
    });
  }
  function handleAddCart(id) {
    const itemPresent = cart.items.find((product) => product.id === id);
    if (itemPresent) {
      const itemIndex = cart.items.indexOf(itemPresent);
      const reqItem = cart.items[itemIndex];
      const modifiedEntry = {
        ...reqItem,
        quantity: reqItem.quantity + 1,
      };

      setCart((prev) => {
        prev.items[itemIndex] = modifiedEntry;
        return {
          ...prev,
          items: [...prev.items],
        };
      });
    } else {
      const newItem = DUMMY_PRODUCTS.find((product) => product.id === id);
      const newEntry = {
        ...newItem,
        quantity: 1,
      };

      setCart((prev) => {
        return {
          ...prev,
          items: [...prev.items, newEntry],
        };
      });
    }
    // cartDispatch({
    //   type: "Add_cart",
    //   payLoad: {
    //     id: id,
    //   },
    // });
  }

  const contexValue = {
    items: cart.items,
    addCart: handleAddCart,
    theme: cart.theme,
    setTheme: handleToggleTheme,
    increment: quantityInc,
  };

  return (
    <CartItems.Provider value={contexValue}>{children}</CartItems.Provider>
  );
}
