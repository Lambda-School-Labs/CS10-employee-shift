import React, { Component } from "react";
import { connect } from "react-redux";

import { getHoursOfOperation } from "../../store/hourOfOperation/actions.js";

class HoO extends Component {
  componentDidMount() {
    this.props.getHoursOfOperation();
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
      return dispatch(getHoursOfOperation());
    },
    updateHoursOfOperation: () => {
      return dispatch(getHoursOfOperation());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoO);
