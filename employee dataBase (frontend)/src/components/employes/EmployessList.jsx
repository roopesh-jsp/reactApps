import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { employeActions } from "../../store/EmployesStore";

export default function EmployessList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employess);

  return (
    <div className="empList">
      <h3>Employees</h3>
      <hr />
      {data.map((emp) => (
        <div key={emp.id} className="emp">
          <span onClick={() => dispatch(employeActions.handleSelect(emp))}>
            {emp.name}
          </span>
          <span>
            {" "}
            <ImCross
              onClick={() => dispatch(employeActions.onRemove({ id: emp.id }))}
            />
          </span>
        </div>
      ))}
    </div>
  );
}
