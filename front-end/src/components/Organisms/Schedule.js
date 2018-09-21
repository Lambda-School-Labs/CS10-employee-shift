import React, { Component } from "react";
import { connect } from "react-redux";

import { getShifts } from "../../store/Shift/actions.js";

import ScheduleDay from "../Molecules/ScheduleDay.js";

class Schedule extends Component {
  // DEVELOPMENT TEST to get data REMOVE ME
  componentDidMount() {
    this.props.getShifts();
  }

  render() {
    return (
      <div style={{ width: "100%", display: "flex" }}>
        <ScheduleDay name={"Monday"} date={"X/X/X"} />
        <ScheduleDay name={"Tuesday"} date={"X/X/X"} />
        <ScheduleDay name={"Wednesday"} date={"X/X/X"} />
        <ScheduleDay name={"Thursday"} date={"X/X/X"} />
        <ScheduleDay name={"Friday"} date={"X/X/X"} />
        <ScheduleDay name={"Saturday"} date={"X/X/X"} />
        <ScheduleDay name={"Sunday"} date={"X/X/X"} />
      </div>
    );
  }
}

// Holds 3 weeks of shifts
const mapStateToProps = state => {
  return {
    allShifts: state.shift.allShifts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShifts: () => {
      return dispatch(getShifts());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
