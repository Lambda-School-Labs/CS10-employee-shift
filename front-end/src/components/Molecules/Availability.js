import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";
import { Container } from "../../../node_modules/semantic-ui-react";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const availability = this.props.availability;
      return (
        <Container>
          <h4>{availability.day} {availability.start_time} {availability.end_time}</h4>
        </Container>
      );
  };
};

export default Availability;
