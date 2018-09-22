import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

// Parent of HoO which will hold time picker modals for each day
// WARNING: NEEDS FURTHER TESTING
// TODO: Seperate into further modal components
class HoO extends Component {
  componentDidMount() {
    this.props.getHoursOfOperation();
  }

  testFirePost = () => {
    const date = "12:00:00";
    const date2 = "18:00:00";
    this.props.postHoursOfOperation("M", date, date2);
  };

  testFireUpdate = () => {
    let date = new Date();
    date = date.toISOString();
    this.props.postHoursOfOperation(1, "M", date, date);
  };

  render() {
    return (
      <div>
        <p>One day I'll grow up to be a Modal!</p>
        <button onClick={this.testFirePost}>Test Post</button>
        <button onClick={this.testFireUpdate}>Test Update</button>
        <button onClick={this.testFireAction}>W</button>
        <button onClick={this.testFireAction}> Th</button>
        <button onClick={this.testFireAction}>F</button>
        <button onClick={this.testFireAction}>S</button>
        <button onClick={this.testFireAction}>Su</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allHoOs: state.hourOfOperation.allHoOs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHoursOfOperation: () => {
      return dispatch(getHoursOfOperation());
    },
    postHoursOfOperation: (day, open_time, close_time) => {
      return dispatch(postHoursOfOperation(day, open_time, close_time));
    },
    updateHoursOfOperation: (id, day, open_time, close_time) => {
      return dispatch(updateHoursOfOperation(id, day, open_time, close_time));
    },
    // delete?
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoO);
