import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

// Parent of HoO which will hold time picker modals for each day
class HoO extends Component {
  componentDidMount() {
    this.props.getHoursOfOperation();
    //this.props.postHoursOfOperation();
  }
  render() {
    return (
      <div>
        <p>One day I'll grow up to be a Modal!</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.user.errors) {
    errors = Object.keys(state.user.errors).map(field => {
      return { field, message: state.user.errors[field] };
    });
  }
  return {
    errors,
    isAuthenticated: state.user.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHoursOfOperation: () => {
      return dispatch(getHoursOfOperation());
    },
    postHoursOfOperation: () => {
      // fill with data
      return dispatch(postHoursOfOperation());
    },
    updateHoursOfOperation: () => {
      // fill with data
      return dispatch(updateHoursOfOperation());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoO);
