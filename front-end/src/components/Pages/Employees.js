import React, { Component } from "react";
import { connect } from "react-redux";

import { signin } from "../../store/User/actions.js";
import { getAllProfiles } from "../../store/Profile/actions.js";
import { getAvailabilities } from "../../store/Availability/action.js";

import EmployeeCard from "../Organisms/EmployeeCard.js";
import NewEmployee from "../Organisms/NewEmployee.js";

import { EmployeesContainer } from "../../styles/Employees.js";

class Employees extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
    this.props.getAvailabilities()
  };

  render() {
    return (
      <EmployeesContainer>
        {/* <EmployeeCard allProfiles={this.props.allProfiles}/> */}
        {this.props.allProfiles.map( profile => <EmployeeCard profile={profile} allAvailabilities={this.props.allAvailabilities} /> )}
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
    allAvailabilities: state.availability.allAvailabilities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (username, password) => {
      return dispatch(signin(username, password));
    },
    getAllProfiles: () => {
      return dispatch(getAllProfiles());
    },
    getAvailabilities: () => {
      return dispatch(getAvailabilities());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
