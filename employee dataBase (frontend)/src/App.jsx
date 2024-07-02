import React from "react";
import Header from "./components/Header";
import EmployessInfo from "./components/employes/EmployessInfo";
import { Provider } from "react-redux";
import employeStore from "./store/EmployesStore";

export default function App() {
  return (
    <div id="app">
      <Provider store={employeStore}>
        <Header />
        <EmployessInfo />
      </Provider>
    </div>
  );
}
