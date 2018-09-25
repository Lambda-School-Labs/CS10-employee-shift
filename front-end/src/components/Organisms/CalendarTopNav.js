import React from "react";

import HoO from "./HoO.js";

import {
  TopNavContainer,
  TopNavHeader,
  ButtonContainer,
} from "../../styles/Calendar.js";

const CalendarTopNav = () => {
  return (
    <TopNavContainer>
      <ButtonContainer>
        {/* TODO: how will these handle state? */}
        <button>&lt; Previous week</button>
        <button>Next week &gt;</button>
      </ButtonContainer>
      <TopNavHeader>
        {/* TODO: figure out dynamic date */}
        September 17 - 23, 2018
      </TopNavHeader>
      <HoO />
    </TopNavContainer>
  );
};

export default CalendarTopNav;
