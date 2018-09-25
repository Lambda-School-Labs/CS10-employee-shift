import React from "react";

import HoO from "./HoO.js";

import { TopNavContainer, TopNavHeader } from "../../styles/Calendar.js";

const CalendarTopNav = () => {
  return (
    <TopNavContainer>
      <TopNavHeader>
        {/* TODO: figure out dynamic date */}
        <button>&lt;</button>
        September 17 - 23, 2018
        <button>&gt;</button>
      </TopNavHeader>
      <HoO />
    </TopNavContainer>
  );
};

export default CalendarTopNav;
