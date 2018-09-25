import React from "react";

import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

const EmployeeCard = () => {
  const dummydata = [
    {
      name: "George",
      email: "george@thiscompany.com",
      phone: "920-333-2203",
      workingDays: "MWF",
      workingTime: "3-10pm",
    },
  ];
  return dummydata.map((employee, i) => {
    return (
      <EmployeeCardContainer key={i}>
        <h2>{employee.name}</h2>
        <h2>{employee.email}</h2>
        <h2>{employee.phone}</h2>

        <CardInner>
          <h1 className="card-title">Avability</h1>
          <h2>{employee.workingDays}</h2>
          <h2>{employee.workingTime}</h2>
        </CardInner>

        <CardInner>
          <h1 className="card-title">Requested Time Off</h1>
          <span>something</span>
        </CardInner>
      </EmployeeCardContainer>
    );
  });
};

export default EmployeeCard;
