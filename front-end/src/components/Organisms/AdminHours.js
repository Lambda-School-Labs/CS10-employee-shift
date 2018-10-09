import React, { Component } from "react";
import { connect } from "react-redux";

import { updateHoursOfOperation } from "../../store/hourOfOperation/actions.js";

import Availability from "../Molecules/Availability.js";
import PostAvailability from "../Molecules/PostAvailability.js";

import {
  AdminHoursContainer,
  GridContainer,
  RowHeader,
  HorizontalContainer,
} from "../../styles/Admin.js";
import { Segment, Header, Divider } from "semantic-ui-react";

const AdminHours = props => {
  return (
    <AdminHoursContainer>
      <Segment padded="very">
        <Header textAlign="center">Hours of Operation</Header>
        <Divider />
        <GridContainer>
          <RowHeader row={1}>Monday</RowHeader>
          <HorizontalContainer row={1}>
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
          </HorizontalContainer>
          <PostAvailability row={2} type="hoursOfOperation" day="M" />

          <RowHeader row={3}>Tuesday</RowHeader>
          <HorizontalContainer row={3}>
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
          </HorizontalContainer>
          <PostAvailability row={4} type="hoursOfOperation" day="T" />

          <RowHeader row={5}>Wednesday</RowHeader>
          <HorizontalContainer row={5}>
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
          </HorizontalContainer>
          <PostAvailability row={6} type="hoursOfOperation" day="W" />

          <RowHeader row={7}>Thursday</RowHeader>
          <HorizontalContainer row={7}>
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
          </HorizontalContainer>
          <PostAvailability row={8} type="hoursOfOperation" day="R" />

          <RowHeader row={9}>Friday</RowHeader>
          <HorizontalContainer row={9}>
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
          </HorizontalContainer>
          <PostAvailability row={10} type="hoursOfOperation" day="F" />

          <RowHeader row={11}>Saturday</RowHeader>
          <HorizontalContainer row={11}>
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
          </HorizontalContainer>
          <PostAvailability row={12} type="hoursOfOperation" day="S" />

          <RowHeader row={13}>Sunday</RowHeader>
          <HorizontalContainer row={13}>
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
          </HorizontalContainer>
          <PostAvailability row={14} type="hoursOfOperation" day="U" />
        </GridContainer>
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
