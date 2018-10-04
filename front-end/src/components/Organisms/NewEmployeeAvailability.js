import React from "react";

import Availability from "../Molecules/Availability.js";
import PostAvailability from "../Molecules/PostAvailability.js";

import { Day, HorizontalContainer } from "../../styles/Admin.js";
import { Header, Segment, Portal, Label, Divider } from "semantic-ui-react";

const NewEmployeeAvailability = props => {
  return (
    <Segment>
      <Header as="h2" textAlign={"center"}>
        Availability
      </Header>
      <Divider />
      <Day>
        <h4>Monday</h4>
        <HorizontalContainer>
          <Availability day="Monday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Tuesday</h4>
        <HorizontalContainer>
          <Availability day="Tuesday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Wednesday</h4>
        <HorizontalContainer>
          <Availability day="Wednesday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Thursday</h4>
        <HorizontalContainer>
          <Availability day="Thursday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Friday</h4>
        <HorizontalContainer>
          <Availability day="Friday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Saturday</h4>
        <HorizontalContainer>
          <Availability day="Saturday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
      <Day>
        <h4>Sunday</h4>
        <HorizontalContainer>
          <Availability day="Sunday" start_time={1} end_time={2} />
          <PostAvailability day="Monday" />
        </HorizontalContainer>
      </Day>
    </Segment>
  );
};

export default NewEmployeeAvailability;
