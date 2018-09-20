import React, { Component } from "react";
import {
  NewEmployeeCard,
  EmployeeCard,
  CardInner,
} from "../../styles/Employee";

function NewEmp() {
  return (
    <NewEmployeeCard>
      <form action="">
        First Name:{" "}
        <input type="text" name="firstName" placeholder="first name" />
        <br />
        Middle Name:{" "}
        <input type="text" name="middleName" placeholder="middle name" />
        <br />
        Last Name: <input type="text" name="lastName" placeholder="last name" />
        <br />
        Email: <input type="text" name="email" placeholder="email" />
        <br />
        Phone: <input type="text" name="Phone" placeholder="phone" />
        <br />
        Working Days:{" "}
        <input type="text" name="days" placeholder="working days" />
        <br />
        Working Time:{" "}
        <input type="text" name="time" placeholder="working time" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </NewEmployeeCard>
  );
}

function Employee(props) {
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
      <EmployeeCard key={i}>
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
      </EmployeeCard>
    );
  });
}

class Employees extends Component {
  render() {
    return (
      <div className="container">
        <Employee />
        <NewEmp />
      </div>
    );
  }
}

export default Employees;
