import React, { Component } from "react";
import { connect } from "react-redux";

import { signin } from "../../store/User/actions.js";

import EmployeeCard from "../Organisms/EmployeeCard.js";
import NewEmployee from "../Organisms/NewEmployee.js";

import { EmployeesContainer } from "../../styles/Employees.js";

class Employees extends Component {
  render() {
    return (
      <EmployeesContainer>
        <EmployeeCard />
        <NewEmployee />
      </EmployeesContainer>
    );
  }
}

// TODO: Use correct actions and state

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (username, password) => {
      return dispatch(signin(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
