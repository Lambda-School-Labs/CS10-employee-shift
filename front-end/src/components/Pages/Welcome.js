import React, { Component } from "react";
import "../../styles/WelcomeRef.css";
import Sidebar from "../Parts/SideBar";


function EmpWelcome() {
  return (
    <div className="emp-container">
      <h1>Welcome Employee</h1>
      <div classname="emp-inner-container">
        <div>
          <h1>assigned</h1>
        </div>

        <div>
          <h1>Time off approved</h1>
        </div>

        <div>
          <h1>time off requested</h1>
          <form action="">
            Date: <input type="text" name="date" placeholder="date" /> <br />
            Reason: <input type="text" name="reason" placeholder="reason" /> <br />
            <input type="submit" value="submit"></input>
          </form>
        </div>
      </div>
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
          <EmpWelcome />
        </div>
      </div>

    )
  }
}

export default Welcome;