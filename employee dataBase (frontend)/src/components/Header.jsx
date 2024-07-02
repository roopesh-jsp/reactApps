import React from "react";
import NewEmp from "./NewEmp";

export default function Header() {
  return (
    <>
      <header>
        <h3>
          Employee database - information about all employes in the company
        </h3>
        <NewEmp />
      </header>
      <hr />
    </>
  );
}
