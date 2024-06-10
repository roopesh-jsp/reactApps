import { createStore } from "redux";
const initialState = {
  counter: 0,
  showCounter: true,
};
function counterReducer(state = initialState, action) {
  if (action.type === "inc") {
    console.log("inc");
    return {
      showCounter: true,
      counter: state.counter + 1,
    };
  }
  if (action.type === "inc100") {
    return {
      showCounter: true,
      counter: state.counter + action.payload.value,
    };
  }
  if (action.type === "dec") {
    return {
      showCounter: true,
      counter: state.counter - 1,
    };
  }
  if (action.type === "toggle") {
    console.log("toggled");
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
}
const store = createStore(counterReducer);
export default store;
