import React, { Component } from "react";
import { connect } from "react-redux";

import { updateHoursOfOperation } from "../../store/hourOfOperation/actions.js";

import Availability from "../Molecules/Availability.js";
import PostAvailability from "../Molecules/PostAvailability.js";

import {
  AdminHoursContainer,
  Day,
  HorizontalContainer,
} from "../../styles/Admin.js";
import { Segment, Header, Divider } from "semantic-ui-react";

const AdminHours = props => {
  return (
    <AdminHoursContainer>
      <Segment padded="very">
        <Header textAlign="center">Hours of Operation</Header>
        <Divider />
        <Day>
          <h4>Monday</h4>
          <HorizontalContainer>
            {props.times[0].map((time, index) => {
              // DEV CONSOLE LOG: REMOVE ME
              // BUG: HoOs not updating correctly
              console.log(time);
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
            {props.times[1].map((time, index) => {
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
            {props.times[2].map((time, index) => {
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
            {props.times[3].map((time, index) => {
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
            {props.times[4].map((time, index) => {
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
            {props.times[5].map((time, index) => {
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
            {props.times[6].map((time, index) => {
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
};

const mapDispatchToProps = dispatch => {
  return {
    updateHoursOfOperation: (id, day, open_time, close_time) => {
      return dispatch(updateHoursOfOperation(id, day, open_time, close_time));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdminHours);
