import React, { Component } from "react";
import { connect } from "react-redux"; 
import AssignedShift from "../Organisms/AssignedShift.js"; 
import TimeOffApproved from "../Organisms/TimeOffApproved.js";
import TimeOffRequest from "../Organisms/TimeOffRequests.js";

import { DashboardContainer } from "../../styles/signin.js";
import { HorizontalContainer } from "../../styles/Template--main.js";




//import { postRequestOff } from '../../store/requestOff/action.js';

class Dashboard extends Component {
  render() {
    console.log(this.props)
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
    //firstname: state.user.currentUser.firstname,
    //lastname: state.user.currentUser.lastname
    //approvedTime
    isAuthenticated: state.user.isAuthenticated
  }
}

// const mapsDispatchtoProps = dispatch => {
//   return {
//     postRequestOff: (startTime, endTime) => {
//       return dispatch(postRequestOff(startTime, endTime))
//     }
//   }
// }

export default connect(mapStateToProps, null)(Dashboard);
//export default Dashboard;
