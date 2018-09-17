import React, { Component } from "react";
import "../../styles/WelcomeRef.css";
import Employees from "./Employees";
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

class Welcome extends Component {
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

          <Employees />
          <NewEmp />
        </div>
      </div>

    )
  }
}

export default Welcome;