import React, { Component } from "react";
import { connect } from "react-redux";
import AssignedShift from "../Organisms/AssignedShift.js";
import TimeOffApproved from "../Organisms/TimeOffApproved.js";
import TimeOffRequest from "../Organisms/TimeOffRequests.js";

import {
  DashboardContainer,
  HorizontalContainer,
  DashboardHeader,
} from "../../styles/Dashboard.js";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <DashboardHeader>
          <h1>Welcome,</h1>
          <span>{this.props.first_name} </span>
          <span>{this.props.last_name}</span>
        </DashboardHeader>
        <HorizontalContainer>
          <AssignedShift />
          <TimeOffApproved />
          <TimeOffRequest />
        </HorizontalContainer>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  const userProfile = state.user.currentUser;
  //TODO: check for empty profile - error
  return {
    first_name: userProfile.user.first_name,
    last_name: userProfile.user.last_name,
  };
};

export default connect(
  mapStateToProps
)(Dashboard);
