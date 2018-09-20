import React, { Component } from "react";
import { connect } from "react-redux"; 
import AssignedShift from "../Organisms/AssignedShift.js"; 
import TimeOffApproved from "../Organisms/TimeOffApproved.js";
import TimeOffRequest from "../Organisms/TimeOffRequests.js";

import { DashboardContainer } from "../../styles/signin.js";
import { HorizontalContainer } from "../../styles/Template--main.js";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <h1>Welcome Employee</h1>
        <HorizontalContainer>
            <AssignedShift/>
            <TimeOffApproved/>
            <TimeOffRequest/>
        </HorizontalContainer>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstname: state.user.currentUser.firstname,
    lastname: state.user.currentUser.lastname
  }
}

export default connect(mapStateToProps, null)(Dashboard);
