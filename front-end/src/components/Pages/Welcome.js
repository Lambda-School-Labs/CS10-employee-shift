import React, { Component } from "react";
import "../../styles/WelcomeRef.css";

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

function NewEmp() {
  return (
    <div className="new-employee-card">
      <form action="">
        Name: <input type="text" name="name" placeholder="full name" /><br />
        Email: <input type="text" name="email" placeholder="email" /><br />
        Phone: <input type="text" name="Phone" placeholder="phone" /><br />
        Working Days: <input type="text" name="days" placeholder="working days" /><br />
        Working Time: <input type="text" name="time" placeholder="working time" /><br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}

class Employees extends Component {
  constructor() {
    super()
    this.state = [
      {
        name: "John Smith",
        email: "johnsmith@mail.com",
        phone: "1231231234",
        workingDays: "Monday, Friday",
        workingTime: "2am - 5pm",
      },
      {
        name: "Kyle K",
        email: "kylek@mail.com",
        phone: "3434343434",
        workingDays: "Wednesday",
        workingTime: "4pm - 12am",
      }
    ]
  }
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
            <ul>
              <li>something 1</li>
              <li>something 2</li>
            </ul>
          </div>
          <div className="right">
            <Employee data={this.state} />
            <NewEmp />
          </div>

        </div>
      </div>

    )
  }
}

export default Employees;