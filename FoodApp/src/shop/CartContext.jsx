import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ITEM_ADD") {
    //...add
    const currIndex = state.items.findIndex(
      (item) => item.id === action.payLoad.item.id
    );
    const updatedCart = [...state.items];
    if (currIndex > -1) {
      //... already exists
      const updatedItem = {
        ...state.items[currIndex],
        quantity: state.items[currIndex].quantity + 1,
      };
      updatedCart[currIndex] = updatedItem;
      return {
        items: updatedCart,
      };
    } else {
      //... first entry
      const newEntry = {
        ...action.payLoad.item,
        quantity: 1,
      };
      updatedCart.push(newEntry);
    }

    return {
      items: updatedCart,
    };
  }
  if (action.type === "ITEM_REMOVE") {
    //...remove
    const currIndex = state.items.findIndex(
      (item) => item.id === action.payLoad.id
    );
    const updatedCart = [...state.items];
    if (updatedCart[currIndex].quantity < 2) {
      updatedCart.splice(currIndex, 1);
    } else {
      updatedCart[currIndex] = {
        ...updatedCart[currIndex],
        quantity: updatedCart[currIndex].quantity - 1,
      };
    }
    return {
      items: updatedCart,
    };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    cartDispatch({ type: "ITEM_ADD", payLoad: { item } });
  }
  function removeItem(id) {
    cartDispatch({ type: "ITEM_REMOVE", payLoad: { id } });
  }
  const cxtValue = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cxtValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
