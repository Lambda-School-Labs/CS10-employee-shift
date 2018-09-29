import React, { Component } from "react";


import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

import Availability from "../Molecules/Avialability";
import RequestedTimeOff from "../Molecules/RequestedTimeOff"


class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const profile = this.props.profile;
      // const availabilities;
      return (
        <EmployeeCardContainer>
          <h2>{profile.user.first_name} {profile.user.last_name}</h2>
          <h3>{profile.user.email}</h3>
          <h3>{profile.phone_number}</h3>
          <CardInner>
            <h2 className="card-title">Availability</h2>
            {this.props.allAvailabilities
              .filter( availability => availability.profile === profile.id )
              .map( availability =>
              <Availability key={availability.id} availability={availability} /> )}
          </CardInner>
          <CardInner>
            <h2 className="card-title">Requested Time Off</h2>
            {this.props.allRequestOffs
              .filter( requestOff => requestOff.profile === profile.id )
              .map( requestOff =>
              <RequestedTimeOff key={requestOff.id} requestOff={requestOff} /> )}
          </CardInner>
        </EmployeeCardContainer>
      );
  };
};

export default EmployeeCard;
