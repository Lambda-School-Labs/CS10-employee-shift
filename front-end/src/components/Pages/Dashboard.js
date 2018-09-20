import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      /* TODO: Pull out into Molecular components */
      /* TODO: Styled components */
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
              Reason: <input type="text" name="reason" placeholder="reason" />
              <br />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
