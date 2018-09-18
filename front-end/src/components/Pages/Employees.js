import React, { Component } from "react";

function Employees(props) {
  console.log(props.data)
  return (
    props.data.map((employee, i) => {
      return (
        <div key={i} className="employee-card">
          <h2>{employee.name}</h2>
          <h2>{employee.email}</h2>
          <h2>{employee.phone}</h2>
  
          <div className="card-inner">
            <h1 className="card-title">Avability</h1>
            <h2>{employee.workingDays}</h2>
            <h2>{employee.workingTime}</h2>
          </div>
  
          <div className="card-inner">
            <h1 className="card-title">Requested Time Off</h1>
            <span>something</span>
          </div>
        </div>
      )
    })
  )
}

// class Employees extends Component {
//   render() {
//     return <div />;
//   }
// }

export default Employees;
