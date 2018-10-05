import React from "react";

import Availability from "../Molecules/Availability.js";
import PostAvailability from "../Molecules/PostAvailability.js";

import {
  AdminHoursContainer,
  Day,
  HorizontalContainer,
} from "../../styles/Admin.js";
import { Segment, Header, Divider } from "semantic-ui-react";

const EmployeeAvailability = props => {
  const fillTimes = () => {
    const availabilityByDay = [[], [], [], [], [], [], []];

    const dayLookupTable = {
      M: 1,
      T: 2,
      W: 3,
      R: 4,
      F: 5,
      S: 6,
      U: 7,
    };

    const sorted = props.availability.slice().sort(function(a, b) {
      if (a.open_time > b.open_time) return 1;
      else return -1;
    });

    sorted.forEach((availability, index) => {
      availabilityByDay[dayLookupTable[availability.day] - 1].push(
        availability
      );
    });
    return availabilityByDay;
  };

  const times = fillTimes();

  return (
    <Segment>
      <Day>
        <h4>Monday</h4>
        <HorizontalContainer>
          {times[0].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="M"
          />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Tuesday</h4>
        <HorizontalContainer>
          {times[1].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="T"
          />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Wednesday</h4>
        <HorizontalContainer>
          {times[2].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="W"
          />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Thursday</h4>
        <HorizontalContainer>
          {times[3].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="R"
          />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Friday</h4>
        <HorizontalContainer>
          {times[4].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="F"
          />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Saturday</h4>
        <HorizontalContainer>
          {times[5].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="S"
          />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Sunday</h4>
        <HorizontalContainer>
          {times[6].map((time, index) => {
            return (
              <Availability
                type="availability"
                id={time.id}
                profile={time.profile}
                day={time.day}
                start_time={time.start_time}
                end_time={time.end_time}
                key={time.day + index}
              />
            );
          })}
          <PostAvailability
            profile={props.profile}
            type="availability"
            day="U"
          />
        </HorizontalContainer>
      </Day>
    </Segment>
  );
};

export default EmployeeAvailability;
