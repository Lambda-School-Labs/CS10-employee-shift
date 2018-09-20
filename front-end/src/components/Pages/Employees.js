import React, { Component } from "react";

import EmployeeCard from "../Organisms/EmployeeCard.js";
import NewEmployee from "../Organisms/NewEmployee.js";

class Employees extends Component {
  render() {
    return (
      <div>
        <EmployeeCard />
        <NewEmployee />
      </div>
    );
  }
}

export default Employees;
