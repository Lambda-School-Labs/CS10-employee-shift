import React, { Component } from "react";
import "../../styles/WelcomeRef.css";
import Sidebar from "../Parts/SideBar";

function EmpWelcome() {}

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
    );
  }
}

export default Welcome;
