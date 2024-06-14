import uiSlice from "./UI-slice";
import cartSlice from "./Cart-slice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});
export default store;
