import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";
import { Container } from "../../../node_modules/semantic-ui-react";

class RequestedTimeOff extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const requestOff = this.props.requestOff;
      return (
        <Container>
          <h4>{requestOff.start_datetime}</h4>
          <h4>{requestOff.end_datetime}</h4>
          <h4>{requestOff.status}</h4>
        </Container>
      );
  };
};

export default RequestedTimeOff;
