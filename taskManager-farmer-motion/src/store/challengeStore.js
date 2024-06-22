import { configureStore, createSlice } from "@reduxjs/toolkit";
import cookingImg from "../assets/cooking.png";
import workingOutImg from "../assets/working-out.png";
import romanticWalkImg from "../assets/romantic-walk.png";
const initialState = {
  challenges: [],
};
const challengeSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      action.payload.id = Date.now();
      action.payload.status = "active";
      state.challenges.push(action.payload);
    },
    onModify(state, action) {
      const reqIndex = state.challenges.findIndex(
        (el) => el.id === action.payload.challenge.id
      );

      state.challenges[reqIndex].status = action.payload.status;
    },
  },
});
const store = configureStore({
  reducer: challengeSlice.reducer,
});
export const challengeActions = challengeSlice.actions;
export default store;
