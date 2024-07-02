import React from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function EmployessDisplay() {
  const empData = useSelector((state) => state.selectedEmp);

  return (
    <div className="empDetail">
      <div className="image">
        {empData.image?.length > 0 ? (
          <img className="img" src={empData.image} alt="" />
        ) : (
          //   <p>hai</p>
          <FaUser className="icon" />
        )}
      </div>
      <h3 className="name">{empData.name}</h3>
      <p>{empData.email}</p>
      <p>{empData.salary}</p>
    </div>
  );
}
