import React, { Component } from "react";
import Sidebar from "../Parts/SideBar";

function NewEmp() {
  return (
    <div className="new-employee-card">
      <form action="">
        First Name: <input type="text" name="firstName" placeholder="first name" /><br />
        Middle Name: <input type="text" name="middleName" placeholder="middle name" /><br />
        Last Name: <input type="text" name="lastName" placeholder="last name" /><br />
        Email: <input type="text" name="email" placeholder="email" /><br />
        Phone: <input type="text" name="Phone" placeholder="phone" /><br />
        Working Days: <input type="text" name="days" placeholder="working days" /><br />
        Working Time: <input type="text" name="time" placeholder="working time" /><br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}

function Employee(props) {
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

class Employees extends Component {
  render() {
    return (
      <div className="container">
        <div className="top">
          <div className="navbar">
            <span>Dashboard </span>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <Sidebar />
          </div>

          <Employee />
          <NewEmp />
        </div>
      </div>

    )
  }
}

export default Employees;
