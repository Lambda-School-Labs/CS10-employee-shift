import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllProfiles } from "../../store/Profile/actions";
import { getAvailabilities } from "../../store/Availability/action";
import { getRequestOffs } from "../../store/requestOff/action"

import EmployeeCard from "../Organisms/EmployeeCard.js";
import NewEmployee from "../Organisms/NewEmployee.js";

import { EmployeesContainer } from "../../styles/Employees.js";

class Employees extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
    this.props.getAvailabilities();
    this.props.getRequestOffs();
  };

  render() {
    return (
      <EmployeesContainer>
        {/* <EmployeeCard allProfiles={this.props.allProfiles}/> */}
        {this.props.allProfiles.map( profile => 
          <EmployeeCard key={profile.id}
            profile={profile} 
            allAvailabilities={this.props.allAvailabilities}
            allRequestOffs={this.props.allRequestOffs} />
        )}
        <NewEmployee />
      </EmployeesContainer>
    );
  };
};

// TODO: Use correct actions and state

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    allProfiles: state.profile.allProfiles,
    allAvailabilities: state.availability.allAvailabilities,
    allRequestOffs: state.requestOff.allRequestOffs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProfiles: () => {
      return dispatch(getAllProfiles());
    },
    getAvailabilities: () => {
      return dispatch(getAvailabilities());
    },
    getRequestOffs: () => {
      return dispatch(getRequestOffs());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
