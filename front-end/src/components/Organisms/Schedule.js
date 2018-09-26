import React, { Component } from "react";
import { connect } from "react-redux";

import { getShifts } from "../../store/Shift/actions.js";

import ScheduleShift from "../Molecules/ScheduleShift.js";

import {
  GridItemHeader,
  GridItemHeaderDay,
  GridItemHeaderDate,
  GridItemEmployee,
  GridItemShift,
  GridContainer,
} from "../../styles/Calendar.js";

class Schedule extends Component {
  // DEVELOPMENT TEST to get data REMOVE ME
  componentDidMount() {
    this.props.getShifts();
  }

  handleClick = (row, column) => {
    console.log("Click from ", row, column);
  };

  fillGrid = employees => {
    const output = [];
    for (let column = 2; column <= 7 + 1; column++) {
      for (let row = 2; row <= employees + 1; row++) {
        output.push(
          <ScheduleShift
            key={`${row}-${column}`}
            onClick={this.handleClick}
            row={row}
            column={column}
          />
        );
      }
    }
    return output;
  };

  render() {
    const employees = 8;
    return (
      <div style={{ width: "100%", display: "flex" }}>
        <GridContainer rows={employees + 1}>
          {/* Refactor into molecules - Column Header */}
          <GridItemHeader column="1" />
          <GridItemHeader column="2">
            <GridItemHeaderDay>Monday</GridItemHeaderDay>
            <GridItemHeaderDate>17</GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="3">
            <GridItemHeaderDay>Tuesday</GridItemHeaderDay>
            <GridItemHeaderDate>18</GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="4">
            <GridItemHeaderDay>Wednesday</GridItemHeaderDay>
            <GridItemHeaderDate>19</GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="5">
            <GridItemHeaderDay>Thursday</GridItemHeaderDay>
            <GridItemHeaderDate>20</GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="6">
            <GridItemHeaderDay>Friday</GridItemHeaderDay>
            <GridItemHeaderDate>21</GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="7">
            <GridItemHeaderDay>Saturday</GridItemHeaderDay>
            <GridItemHeaderDate>22</GridItemHeaderDate>
          </GridItemHeader>
          <GridItemHeader column="8">
            <GridItemHeaderDay>Sunday</GridItemHeaderDay>
            <GridItemHeaderDate>23</GridItemHeaderDate>
          </GridItemHeader>
          {/* Refactor into molecules - Row Header */}
          <GridItemEmployee row="1" />
          <GridItemEmployee row="2">Vlad</GridItemEmployee>
          <GridItemEmployee row="3">Brandon</GridItemEmployee>
          <GridItemEmployee row="4">Kyle</GridItemEmployee>
          <GridItemEmployee row="5">Justin</GridItemEmployee>
          <GridItemEmployee row="6">Obo</GridItemEmployee>
          <GridItemEmployee row="7">Terrie</GridItemEmployee>
          <GridItemEmployee row="8">Brian Doyle</GridItemEmployee>
          <GridItemEmployee row="9">Boomer</GridItemEmployee>
          {/* Refactor into molecules - Body */}
          {this.fillGrid(employees)}
        </GridContainer>
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

// <ScheduleDay name={"Monday"} date={"X/X/X"} />
// <ScheduleDay name={"Tuesday"} date={"X/X/X"} />
// <ScheduleDay name={"Wednesday"} date={"X/X/X"} />
// <ScheduleDay name={"Thursday"} date={"X/X/X"} />
// <ScheduleDay name={"Friday"} date={"X/X/X"} />
// <ScheduleDay name={"Saturday"} date={"X/X/X"} />
// <ScheduleDay name={"Sunday"} date={"X/X/X"} />

/* <table className="schedule" style={{ width: "100%" }}>
          <thead>
            <tr>
              <td colSpan="2">IMMA HEADER</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ width: "100px", verticalAlign: "top" }}>
                <div>
                  <div
                    style={{
                      overflow: "hidden",
                      borderBottom: "1px solid #e9e9e9",
                      height: "100px",
                    }}
                  >
                    <div
                      style={{
                        overflowX: "scroll",
                        overflowY: "hidden",
                        margin: `0px 0px -10px`,
                      }}
                    >
                      <table className="resource-table">
                        <thead>
                          <tr style={{ height: "10px" }}>
                            <th className="header3-text">RESOURCE</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div
                    ref={this.schedulerResourceRef}
                    onMouseOver={this.onSchedulerResourceMouseOver}
                    onMouseOut={this.onSchedulerResourceMouseOut}
                    onScroll={this.onSchedulerResourceScroll}
                  >
                    ResourceView
                  </div>
                </div>
              </td>

              <td>
                <div
                  className="scheduler-view"
                  style={{
                    width: "10px",
                    verticalAlign: "top",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderBottom: "1px solid #e9e9e9",
                      height: "10px",
                    }}
                  >
                    <div
                      style={{
                        overflowX: "scroll",
                        overflowY: "hidden",
                        margin: `0px 0px -10px`,
                      }}
                      ref={this.schedulerHeadRef}
                      onMouseOver={this.onSchedulerHeadMouseOver}
                      onMouseOut={this.onSchedulerHeadMouseOut}
                      onScroll={this.onSchedulerHeadScroll}
                    >
                      <div
                        style={{
                          paddingRight: `10px`,
                          width: "10px",
                        }}
                      >
                        <table className="scheduler-bg-table">
                          {/* <HeaderView {...this.props} /> */
/* </table>
                      </div>
                    </div>
                  </div>
                  <div
                    ref={this.schedulerContentRef}
                    onMouseOver={this.onSchedulerContentMouseOver}
                    onMouseOut={this.onSchedulerContentMouseOut}
                    onScroll={this.onSchedulerContentScroll}
                  >
                    <div style={{ width: "10px", height: "10px" }}>
                      <div className="scheduler-content">
                        <table className="scheduler-content-table">
                          <tbody>Events</tbody>
                        </table>
                      </div>
                      <div className="scheduler-bg">
                        <table
                          className="scheduler-bg-table"
                          style={{ width: "10px" }}
                        > */

/* <BodyView {...this.props} /> */

/* </table>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table> */
