import React, { Component } from "react";
import { connect } from "react-redux";

import Moment from "moment";
import { extendMoment } from "moment-range";

import { getShifts } from "../../store/Shift/actions.js";
import { getAllProfiles } from "../../store/Profile/actions.js";
import { getHoursOfOperation } from "../../store/hourOfOperation/actions.js";

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

const moment = extendMoment(Moment);

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
    this.props.getHoursOfOperation();
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
            profile={row > 2 ? this.props.allProfiles[row - 3].id : null}
          />
        );
      }
    }
    return output;
  };

  findGaps = () => {
    // This function takes the shifts in the current week and compares it against the HoO to find any gaps
    const currentDate = moment(this.state.date);
    const shiftsByDay = [[], [], [], [], [], [], []];

    // Sorts shifts by day of the week
    // TODO: refactor this out so it isn't run twice V
    this.props.allShifts.forEach((shift, index) => {
      const momentStart = moment(shift.start_datetime);
      const shiftInCurrentWeek = momentStart.isBetween(
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
        const weekday = momentStart.isoWeekday();
        shiftsByDay[weekday - 1].push(
          moment.range(momentStart, moment(shift.end_datetime))
        );
      }
    });

    const gapsByDay = [[], [], [], [], [], [], []];

    function getGapsFromRangesArray(start_time, end_time, ranges, index) {
      const HoO_start = currentDate
        .clone()
        .isoWeekday(index)
        .second(Number(`${start_time[6]}${start_time[7]}`))
        .minute(Number(`${start_time[3]}${start_time[4]}`))
        .hour(Number(`${start_time[0]}${start_time[1]}`));
      const HoO_end = currentDate
        .clone()
        .isoWeekday(index)
        .second(Number(`${end_time[6]}${end_time[7]}`))
        .minute(Number(`${end_time[3]}${end_time[4]}`))
        .hour(Number(`${end_time[0]}${end_time[1]}`));
      // const HoO_range = moment.range(HoO_start, HoO_end);

      // Join together shifts for the day
      const sortedRanges = ranges.slice().sort(function(a, b) {
        if (a.start.format() > b.start.format()) return 1;
        else return -1;
      });

      const joinedRanges = [sortedRanges.shift()];

      while (sortedRanges) {
        const head = sortedRanges.shift();
        if (head.overlaps(joinedRanges[joinedRanges.length - 1])) {
          const newTail = joinedRanges.pop();
          joinedRanges.push(newTail.add(head));
        }
      }

      // clip HoO ends or subtract

      // push to day of gapsByDay using index
      gapsByDay[index].push();
    }

    this.props.allHoOs.forEach((HoO, index) => {
      // if HoO.isOpen
      // getGapsFromRangesArray(HoO.open_time, HoO.close_time, shiftsByDay[index], index);
    });

    return gapsByDay;
  };

  render() {
    const currentDate = moment(this.state.date);
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
            // Shift counter for this week
            let shiftCount = 0;
            this.props.allShifts.forEach((shift, index) => {
              const shiftInCurrentWeek = moment(shift.start_datetime).isBetween(
                currentDate
                  .clone()
                  .day(1)
                  .set({ hour: 0, minute: 0, "second:": 0, millisecond: 0 }),
                currentDate
                  .clone()
                  .day(7)
                  .set({
                    hour: 23,
                    minute: 59,
                    "second:": 59,
                    millisecond: 999,
                  })
              );
              if (shiftInCurrentWeek && shift.profile === profile.id) {
                shiftCount++;
              }
            });

            return (
              <GridItemEmployee
                row={index + 3}
                key={profile.user.last_name + index}
              >
                <ProfileIcon hue={(index + 3) * 40}>{shiftCount}</ProfileIcon>
                <h5>
                  {profile.user.first_name} {profile.user.last_name}
                </h5>
              </GridItemEmployee>
            );
          })}

          {/* Refactor into molecules - Body */}
          {this.fillGrid(this.props.allProfiles.length)}

          {this.props.allShifts.map((shift, index) => {
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
                  start={shift.start_datetime}
                  end={shift.end_datetime}
                  notes={shift.notes}
                  profile={shift.profile}
                  id={shift.id}
                />
              );
            } else return null;
          })}

          {this.findGaps()}
        </GridContainer>
      </CalendarContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    allShifts: state.shift.allShifts,
    allProfiles: state.profile.allProfiles,
    allHoOs: state.hourOfOperation.allHoOs,
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
    getHoursOfOperation: () => {
      return dispatch(getHoursOfOperation());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
