import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const profile = this.props.profile;
      return (
        <EmployeeCardContainer key={profile.id}>
          <h2>{profile.user.first_name} {profile.user.last_name}</h2>
          <h2>{profile.user.email}</h2>
          <h2>{profile.phone_number}</h2>

          <CardInner>
            <h1 className="card-title">Avability</h1>

            <h2>{profile.workingDays}</h2>
            <h2>{profile.workingTime}</h2>
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
