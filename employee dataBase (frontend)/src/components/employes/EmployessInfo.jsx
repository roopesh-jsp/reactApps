import React from "react";
import EmployessList from "./EmployessList";
import EmployessDisplay from "./EmployessDisplay";

export default function EmployessInfo() {
  return (
    <div className="container">
      <EmployessList />
      <EmployessDisplay />
    </div>
  );
}
