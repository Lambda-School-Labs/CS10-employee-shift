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
          Welcome,
          {this.props.first_name}
          {this.props.last_name}
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
  return {
    firstname: state.user.currentUser.first_name,
    lastname: state.user.currentUser.last_name,
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
