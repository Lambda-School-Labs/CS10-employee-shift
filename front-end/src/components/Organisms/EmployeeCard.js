import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";
import Availability from "../Molecules/Avialability";

class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const profile = this.props.profile;
      // const availabilities;
      return (
        <EmployeeCardContainer key={profile.id}>
          <h2>{profile.user.first_name} {profile.user.last_name}</h2>
          <h3>{profile.user.email}</h3>
          <h3>{profile.phone_number}</h3>
          <CardInner>
            <h2 className="card-title">Availability</h2>
            {this.props.allAvailabilities.map( availability => <Availability availability={availability} /> )}
          </CardInner>
          <CardInner>
            <h1 className="card-title">Requested Time Off</h1>
            <span>something</span>
          </CardInner>
        </EmployeeCardContainer>
      );
  };
};

export default EmployeeCard;
