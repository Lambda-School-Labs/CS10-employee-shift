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
  ProfileIcon,
} from "../../styles/Calendar.js";
import { CalendarContainer } from "../../styles/Calendar.js";
import { colors } from "../../styles/globals.js";
import { Label } from "semantic-ui-react";

// TODO: Make me more stylish
// TODO: Check HoO against shifts to make sure that the time is filled, if not render cell red
// TODO: Turn cell red if conflict with employee's time off
// TODO: Span shifts to multiple days
// TODO: Dynamic employees
// TODO: test CRUD

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
            date={moment(this.state.date)
              .day(column - 1)
              .format()}
          />
        );
      }
    }
    return output;
  };

  render() {
    // TODO: get employees from store to make this dynamic
    // this.props.profile.allProfiles.length
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
            <ProfileIcon hue={1 * 40}>
              {/* TODO: dynamically use user.id from user state in store */}0
              {/* TODO: make dynamic number of shifts */}
            </ProfileIcon>
            Vlad
          </GridItemEmployee>
          <GridItemEmployee row="4">
            <ProfileIcon hue={2 * 40}>0</ProfileIcon>
            Brandon
          </GridItemEmployee>
          <GridItemEmployee row="5">
            <ProfileIcon hue={3 * 40}>0</ProfileIcon>
            Kyle
          </GridItemEmployee>
          <GridItemEmployee row="6">
            <ProfileIcon hue={4 * 40}>0</ProfileIcon>
            Justin
          </GridItemEmployee>
          <GridItemEmployee row="7">
            <ProfileIcon hue={5 * 40}>0</ProfileIcon>
            Obo
          </GridItemEmployee>
          <GridItemEmployee row="8">
            <ProfileIcon hue={6 * 40}>0</ProfileIcon>
            Terrie
          </GridItemEmployee>
          <GridItemEmployee row="9">
            <ProfileIcon hue={7 * 40}>0</ProfileIcon>
            Brian Doyle
          </GridItemEmployee>
          <GridItemEmployee row="10">
            <ProfileIcon hue={8 * 40}>0</ProfileIcon>
            Boomer
          </GridItemEmployee>
          {/* Refactor into molecules - Body */}
          {this.fillGrid(employees)}
          {this.props.allShifts.map(shift => {
            const currentDate = moment(this.state.date);
            const shiftInCurrentWeek = moment(shift.start_datetime).isBetween(
              currentDate
                .clone()
                .day(1)
                .set({ hour: 0, minute: 0, "second:": 0, millisecond: 0 }),
              currentDate
                .clone()
                .day(7)
                .set({ hour: 23, minute: 59, "second:": 59, millisecond: 999 })
            );
            if (shiftInCurrentWeek) {
              return (
                <ScheduleShiftUpdate
                  hue={shift.profile ? shift.profile * 40 : 102}
                  text1={moment(shift.start_datetime).format("h:mm A")}
                  text2={moment(shift.end_datetime).format("h:mm A")}
                  key={shift.id}
                  row={shift.profile + 2}
                  // add span to second day if applicable
                  column={moment(shift.start_datetime).isoWeekday() + 1}
                  justify={
                    moment(shift.start_datetime).format("k") <= 9
                      ? "flex-start"
                      : moment(shift.start_datetime).format("k") >= 17
                        ? "flex-end"
                        : "center"
                  }
                  start={moment(shift.start_datetime).format("H:mm A")}
                  end={moment(shift.end_datetime).format("H:mm A")}
                  notes={shift.notes}
                  id={shift.id}
                />
              );
            }
          })}
        </GridContainer>
      </CalendarContainer>
    );
  }
}

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
