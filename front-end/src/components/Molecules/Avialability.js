import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const availability = this.props.availability;
      return (
        <div key={availability.id}>
          <h3>{availability.day} {availability.start_time} {availability.end_time}</h3>
        </div>
      );
  };
};

export default Availability;
