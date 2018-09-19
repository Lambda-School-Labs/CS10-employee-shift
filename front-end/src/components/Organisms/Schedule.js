import React, { Component } from "react";
import { connect } from "react-redux";

import { getShifts, updateShift } from "../../store/Shift/actions.js";

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

// How many shifts to hold? 1 week? all?
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
    // updateShift: () => {
    //   return dispatch(updateShift(id, startTime, endTime));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
