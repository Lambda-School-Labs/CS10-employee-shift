import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

import { getShifts } from "../../store/Shift/actions.js";
import { getAllProfiles } from "../../store/Profile/actions.js";

import CalendarTopNav from "../Organisms/CalendarTopNav.js";
import ScheduleShift from "../Molecules/ScheduleShift.js";
import ScheduleShiftUpdate from "../Molecules/ScheduleShiftUpdate";

import {
  GridItemHeader,
  GridItemHeaderDay,
  GridItemHeaderDate,
  GridItemEmployee,
  GridItemOpenShift,
  GridContainer,
  GridItemOpenShiftHeader,
  ProfileIcon,
} from "../../styles/Calendar.js";
import { CalendarContainer } from "../../styles/Calendar.js";

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

  componentDidMount() {
    this.props.getAllProfiles();
    this.props.getShifts();
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
      for (let row = 2; row <= this.props.allProfiles.length + 2; row++) {
        output.push(
          <ScheduleShift
            key={`${row}-${column}`}
            handleClick={this.handleClick}
            row={row}
            date={moment(this.state.date)
              .day(column - 1)
              .format()}
            profile={row > 2 ? this.props.allProfiles[row - 3].id : null}
          />
        );
      }
    }
    return output;
  };

  render() {
    return (
      <CalendarContainer>
        <CalendarTopNav
          changeDate={this.handleChangeDate}
          displayDate={this.state.date}
        />
        <GridContainer rows={this.props.allProfiles.length + 2}>
          {/* Refactor into molecules - Column Header */}
          <GridItemHeader column="1" />
          {/* Refactor - Dynamic */}
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
          {/* Refactor into molecules - Row Header  */}
          <GridItemEmployee row="1" />
          <GridItemOpenShift row="2">
            <GridItemOpenShiftHeader>Open Shifts</GridItemOpenShiftHeader>
          </GridItemOpenShift>
          {this.props.allProfiles.map((profile, index) => {
            return (
              <GridItemEmployee
                row={index + 3}
                key={profile.user.last_name + index}
              >
                <ProfileIcon hue={(index + 3) * 40}>0</ProfileIcon>
                <h5>
                  {profile.user.first_name} {profile.user.last_name}
                </h5>
              </GridItemEmployee>
            );
          })}
          {/* Refactor into molecules - Body */}
          {this.fillGrid(this.props.allProfiles.length)}

          {this.props.allShifts.map((shift, index) => {
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
              const profileRow =
                this.props.allProfiles.indexOf(
                  this.props.allProfiles.filter(
                    profile => profile.id === shift.profile
                  )[0]
                ) + 3;
              return (
                <ScheduleShiftUpdate
                  hue={profileRow ? profileRow * 40 : 102}
                  key={shift.id}
                  row={profileRow}
                  // add span to second day if applicable
                  column={moment(shift.start_datetime).isoWeekday() + 1}
                  justify={
                    moment(shift.start_datetime).format("k") <= 9
                      ? "flex-start"
                      : moment(shift.start_datetime).format("k") >= 17
                        ? "flex-end"
                        : "center"
                  }
                  start={moment(shift.start_datetime).format("h:mm A")}
                  end={moment(shift.end_datetime).format("h:mm A")}
                  start24={moment(shift.start_datetime).format("H:mm")}
                  end24={moment(shift.end_datetime).format("H:mm")}
                  notes={shift.notes}
                  profile={shift.profile}
                  id={shift.id}
                />
              );
            } else return null;
          })}
        </GridContainer>
      </CalendarContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    allShifts: state.shift.allShifts,
    allProfiles: state.profile.allProfiles,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShifts: () => {
      return dispatch(getShifts());
    },
    getAllProfiles: () => {
      return dispatch(getAllProfiles());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
