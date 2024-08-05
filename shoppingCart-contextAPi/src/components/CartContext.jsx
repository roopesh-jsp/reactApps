import { useReducer, useState } from "react";
import { createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
export const CartItems = createContext({
  items: [],
  addCart: () => {},
  theme: "light",
  setTheme: () => {},
  removeCart: () => {},
});

export default function CartContext({ children }) {
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

  function handleAddCart(id) {
    const itemPresent = cart.items.find((product) => product.id === id);
    if (itemPresent) {
      const itemIndex = cart.items.indexOf(itemPresent);
      const reqItem = cart.items[itemIndex];
      const modifiedEntry = {
        ...reqItem,
        quantity: reqItem.quantity + 1,
        total: reqItem.price * (reqItem.quantity + 1),
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
        total: newItem.price,
      };
      setCart((prev) => {
        return {
          ...prev,
          items: [...prev.items, newEntry],
        };
      });
    }
  }

  function handleRemoveCart(id) {
    const existingItem = cart.items.find((el) => el.id === id);

    if (existingItem) {
      const existingIndex = cart.items.indexOf(existingItem);

      if (existingItem.quantity <= 1) {
        //remove from cart
        setCart((prev) => {
          prev.items.splice(existingIndex, 1);
          return {
            ...prev,
            items: [...prev.items],
          };
        });
      } else {
        //decrease the quantity
        console.log("dec");
        const modifiedEntry = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          total: existingItem.price * (existingItem.quantity - 1),
        };
        setCart((prev) => {
          prev.items[existingIndex] = modifiedEntry;
          return {
            ...prev,
            items: [...prev.items],
          };
        });
      }
    } else {
      return;
    }
  }
  const contexValue = {
    items: cart.items,
    addCart: handleAddCart,
    theme: cart.theme,
    setTheme: handleToggleTheme,
    removeCart: handleRemoveCart,
  };

  return (
    <CartItems.Provider value={contexValue}>{children}</CartItems.Provider>
  );
}
