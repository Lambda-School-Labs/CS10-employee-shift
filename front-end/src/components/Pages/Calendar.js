import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

import { getShifts } from "../../store/Shift/actions.js";

import CalendarTopNav from "../Organisms/CalendarTopNav.js";
import ScheduleShift from "../Molecules/ScheduleShift.js";
import ScheduleShiftUpdate from "../Molecules/ScheduleShiftUpdate";

import {
  GridItemHeader,
  GridItemHeaderDay,
  GridItemHeaderDate,
  GridItemEmployee,
  GridItemOpenShift,
  GridItemActiveShift,
  GridContainer,
  GridItemOpenShiftHeader,
  GridItemActiveShiftInner,
} from "../../styles/Calendar.js";
import { CalendarContainer } from "../../styles/Calendar.js";
import { colors } from "../../styles/globals.js";
import { Label } from "semantic-ui-react";

// TODO: Make me more stylish
// TODO: Make own "label" so colors show up correctly

class Calendar extends Component {
  state = {
    date: moment().format(),
  };

  componentWillMount() {
    this.props.getShifts();
    const currentDate = moment().format();
  }

  handleChangeDate = direction => {
    const newDate = moment(this.state.date);
    if (direction) newDate.add(7, "day");
    else newDate.subtract(7, "day");
    this.setState({ date: newDate.format() });
  };

  fillGrid = employees => {
    // This function takes the number of employees and fills the body of the table
    // There are 7 columns (First column is the row headers)
    // Rows = employees + 2 (one for column headers, one for open shifts)
    const output = [];
    for (let column = 2; column <= 7 + 1; column++) {
      for (let row = 2; row <= employees + 2; row++) {
        output.push(
          <ScheduleShift
            key={`${row}-${column}`}
            handleClick={this.handleClick}
            row={row}
            column={column}
          />
        );
      }
    }
    return output;
  };

  render() {
    // TODO: get employees from store to make this dynamic
    const employees = 8;
    return (
      <CalendarContainer>
        <CalendarTopNav
          changeDate={this.handleChangeDate}
          displayDate={this.state.date}
        />
        <GridContainer rows={employees + 2}>
          {/* Refactor into molecules - Column Header */}
          <GridItemHeader column="1" />
          <GridItemHeader column="2">
            <GridItemHeaderDay>Monday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(1)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="3">
            <GridItemHeaderDay>Tuesday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(2)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="4">
            <GridItemHeaderDay>Wednesday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(3)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="5">
            <GridItemHeaderDay>Thursday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(4)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="6">
            <GridItemHeaderDay>Friday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(5)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="7">
            <GridItemHeaderDay>Saturday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(6)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="8">
            <GridItemHeaderDay>Sunday</GridItemHeaderDay>
            <GridItemHeaderDate>
              {
                moment(this.state.date)
                  .day(7)
                  .toObject().date
              }
            </GridItemHeaderDate>
          </GridItemHeader>
          {/* Refactor into molecules - Row Header 
        TODO: Make this dynamically from the number of employees */}
          <GridItemEmployee row="1" />
          <GridItemOpenShift row="2">
            <GridItemOpenShiftHeader>Open Shifts</GridItemOpenShiftHeader>
          </GridItemOpenShift>
          <GridItemEmployee row="3">
            <Label horizontal circular color={colors[1]} key={colors[0]}>
              0
            </Label>
            Vlad
          </GridItemEmployee>
          <GridItemEmployee row="4">
            <Label horizontal circular color={colors[2]} key={colors[1]}>
              0
            </Label>
            Brandon
          </GridItemEmployee>
          <GridItemEmployee row="5">
            <Label horizontal circular color={colors[3]} key={colors[2]}>
              0
            </Label>
            Kyle
          </GridItemEmployee>
          <GridItemEmployee row="6">
            <Label horizontal circular color={colors[4]} key={colors[3]}>
              0
            </Label>
            Justin
          </GridItemEmployee>
          <GridItemEmployee row="7">
            <Label horizontal circular color={colors[5]} key={colors[4]}>
              0
            </Label>
            Obo
          </GridItemEmployee>
          <GridItemEmployee row="8">
            <Label horizontal circular color={colors[6]} key={colors[5]}>
              0
            </Label>
            Terrie
          </GridItemEmployee>
          <GridItemEmployee row="9">
            <Label horizontal circular color={colors[7]} key={colors[6]}>
              0
            </Label>
            Brian Doyle
          </GridItemEmployee>
          <GridItemEmployee row="10">
            <Label horizontal circular color={colors[8]} key={colors[7]}>
              0
            </Label>
            Boomer
          </GridItemEmployee>
          {/* Refactor into molecules - Body */}
          {this.fillGrid(employees)}
          {this.props.allShifts.map(shift => {
            const currentDate = moment(this.state.date);
            console.log(
              moment(shift.start_datetime).isBetween(
                currentDate.clone().day(1),
                currentDate.clone().day(1)
              )
            );
            if (true) {
              return (
                <ScheduleShiftUpdate
                  hue={shift.profile > 0 ? shift.profile * 20 : 104}
                  text1={moment(shift.start_datetime).format("h A")}
                  text2={moment(shift.end_datetime).format("h A")}
                  key={shift.id}
                  row={shift.profile + 2}
                  // add span to second day if applicable
                  column={moment(shift.start_datetime).isoWeekday + 1}
                  color={shift.profile ? colors[shift.profile] : colors[0]}
                  justify={
                    moment(shift.start_datetime).format("k") <= 9
                      ? "flex-start"
                      : moment(shift.start_datetime).format("k") >= 5
                        ? "flex-end"
                        : "center"
                  }
                  start={moment(shift.start_datetime).format("H:mm A")}
                  end={moment(shift.end_datetime).format("H:mm A")}
                />
              );
            }
          })}
        </GridContainer>
      </CalendarContainer>
    );
  }
}

// Holds 3 weeks of shifts
const mapStateToProps = state => {
  return {
    allShifts: state.shift.allShifts,
    // all users
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
)(Calendar);
