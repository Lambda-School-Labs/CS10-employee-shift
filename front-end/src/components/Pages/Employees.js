import React, { Component } from "react";

import EmployeeCard from "../Organisms/EmployeeCard.js";
import NewEmployee from "../Organisms/NewEmployee.js";

import { EmployeesContainer } from "../../styles/Employees.js";

class Employees extends Component {
  render() {
    return (
      <EmployeesContainer>
        <EmployeeCard />
        <NewEmployee />
      </EmployeesContainer>
    );
  }
}

export default Employees;
