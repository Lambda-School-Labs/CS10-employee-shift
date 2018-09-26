import React from "react";

import HoO from "./HoO.js";

import { TopNavContainer, TopNavHeader } from "../../styles/Calendar.js";
import { Icon } from "semantic-ui-react";

// TODO: figure out dynamic date
// TODO: Make buttons functional after the above

const CalendarTopNav = () => {
  return (
    <TopNavContainer>
      <TopNavHeader>
        <Icon link onClick={() => "do something"} name="angle double left" />
        September 17 - 23, 2018
        <Icon link onClick={() => "do something"} name="angle double right" />
      </TopNavHeader>
      <HoO />
    </TopNavContainer>
  );
};

export default CalendarTopNav;
