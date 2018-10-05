import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

import HoODay from "../Molecules/HoODay.js";
import Availability from "../Molecules/Availability.js";
import PostAvailability from "../Molecules/PostAvailability.js";

import {
  AdminHoursContainer,
  Day,
  HorizontalContainer,
} from "../../styles/Admin.js";
import { Segment, Card, Icon, Image, Header, Divider } from "semantic-ui-react";

class AdminHours extends Component {
  state = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  componentDidMount() {
    //if Hoo
    this.props.getHoursOfOperation();
  }

  addTime = () => {
    console.log("Add time!");
  };

  fillTimes = () => {
    //if Hoo

    const hoosByDay = [[], [], [], [], [], [], []];

    const dayLookupTable = {
      M: 1,
      T: 2,
      W: 3,
      R: 4,
      F: 5,
      S: 6,
      U: 7,
    };

    const sorted = this.props.allHoOs.slice().sort(function(a, b) {
      if (a.open_time > b.open_time) return 1;
      else return -1;
    });

    sorted.forEach((hoo, index) => {
      hoosByDay[dayLookupTable[hoo.day] - 1].push(hoo);
    });

    return hoosByDay;
  };

  render() {
    const times = this.fillTimes();

    return (
      <AdminHoursContainer>
        <Segment padded="very">
          <Header textAlign="center">Hours of Operation</Header>
          <Divider />
          <Day>
            <h4>Monday</h4>
            <HorizontalContainer>
              {times[0].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="M" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Tuesday</h4>
            <HorizontalContainer>
              {times[1].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="T" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Wednesday</h4>
            <HorizontalContainer>
              {times[2].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="W" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Thursday</h4>
            <HorizontalContainer>
              {times[3].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="R" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Friday</h4>
            <HorizontalContainer>
              {times[4].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="F" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Saturday</h4>
            <HorizontalContainer>
              {times[5].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="S" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Sunday</h4>
            <HorizontalContainer>
              {times[6].map((time, index) => {
                return (
                  <Availability
                    type="hoursOfOperation"
                    id={time.id}
                    day={time.day}
                    start_time={time.open_time}
                    end_time={time.close_time}
                    key={time.day + index}
                  />
                );
              })}
              <PostAvailability type="hoursOfOperation" day="U" />
            </HorizontalContainer>
          </Day>
        </Segment>
      </AdminHoursContainer>
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
    updateHoursOfOperation: (id, day, open_time, close_time) => {
      return dispatch(updateHoursOfOperation(id, day, open_time, close_time));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHours);
