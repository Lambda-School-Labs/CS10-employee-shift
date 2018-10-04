import React from "react";

import HoODay from "../Molecules/HoODay.js";

import { Header, Segment, Portal, Label, Divider } from "semantic-ui-react";

const NewEmployeeAvailability = props => {
  return (
    <Segment>
      <Header as="h2" textAlign={"center"}>
        Availability
      </Header>
      <Divider />
      <HoODay day="Monday" postHoO={props.addTime} start={1} end={2} />
      <HoODay day="Tuesday" postHoO={props.addTime} start={1} end={2} />
      <HoODay day="Wednesday" postHoO={props.addTime} start={1} end={2} />
      <HoODay day="Thursday" postHoO={props.addTime} start={1} end={2} />
      <HoODay day="Friday" postHoO={props.addTime} start={1} end={2} />
      <HoODay day="Saturday" postHoO={props.addTime} start={1} end={2} />
      <HoODay day="Sunday" postHoO={props.addTime} start={1} end={2} />
    </Segment>
  );
};

export default NewEmployeeAvailability;
