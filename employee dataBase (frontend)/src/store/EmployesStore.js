import { configureStore, createSlice } from "@reduxjs/toolkit";
import { employess } from "../data/data.js";
const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employess: [...employess],
    selectedEmp: employess[0],
  },
  reducers: {
    onAdd(state, action) {
      const newEmp = {
        ...action.payload,
        id: Date.now(),
      };
      state.employess.push(newEmp);
    },
    onRemove(state, action) {
      state.employess = state.employess.filter(
        (emp) => emp.id != action.payload.id
      );
      state.selectedEmp = state.employess[0];
    },
    handleSelect(state, action) {
      state.selectedEmp = action.payload;
    },
  },
});

const employeStore = configureStore({
  reducer: employeeSlice.reducer,
});
export const employeActions = employeeSlice.actions;
export default employeStore;
