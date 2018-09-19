import React, { Component } from "react";

import Month from "./Month.js"

class Calendar_test extends Component {

  render() {
    return(
      <div classname="container">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            Shift<b>EZ</b>
          </span>
        </div>
        </header>
        <main>
          <Month/>
        </main>
      </div>
    )
  }
}

export default Calendar_test;