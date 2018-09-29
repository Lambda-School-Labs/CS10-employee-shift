import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

class RequestedTimeOff extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const requestOff = this.props.requestOff;
      return (
        <div>
          <h3>{requestOff.start_datetime} {requestOff.end_datetime} {requestOff.status}</h3>
        </div>
      );
  };
};

export default RequestedTimeOff;
