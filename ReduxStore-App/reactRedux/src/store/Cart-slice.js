import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      // {
      //   id: 4,
      //   title: "fourth item",
      //   quantity: 0,
      //   total: 0,
      //   price: 16,
      //   description: "This is a first product - amazing!",
      // },
    ],
    totalQunatity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.items.find((item) => item.id === newItem.id);
      if (!exsistingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        exsistingItem.quantity++;
        exsistingItem.total = exsistingItem.quantity * exsistingItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const exsistingItem = state.items.find((item) => item.id === id);
      if (exsistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id != id);
      } else {
        exsistingItem.quantity--;
        exsistingItem.total -= exsistingItem.price;
      }
    },
  },
});

export const carstActions = cartSlice.actions;
export default cartSlice;
