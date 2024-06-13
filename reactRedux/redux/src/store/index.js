// import { createStore } from "redux";
// function counterReducer(state = { counter: 0, show: true }, action) {
//   if (action.type === "inc") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "dec") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "inc100") {
//     return {
//       ...state,
//       counter: state.counter + action.payload.value,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       show: !state.show,
//     };
//   }
//   return state;
// }
// const store = createStore(counterReducer);
// export default store;
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, show: true },
  reducers: {
    inc(x) {
      x.counter += 1;
    },
    dec(x) {
      x.counter -= 1;
    },
    inc100(x, y) {
      x.counter += y.payload;
    },
    toggle(x) {
      x.show = !x.show;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { authentified: false },
  reducers: {
    login(x) {
      x.authentified = !x.authentified;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
