import React from "react";

import {
  TopNav_Container,
  TopNav_Header,
  Button_Container,
} from "../../styles/Calendar.js";

const CalendarTopNav = () => {
  return (
    <TopNav_Container>
      <Button_Container>
        {/* TODO: how will these handle state? */}
        <button>&lt; Previous week</button>
        <button>Next week &gt;</button>
      </Button_Container>
      <TopNav_Header>
        {/* TODO: figure out dynamic date */}
        September 17 - 23, 2018
      </TopNav_Header>
      <p
        style={{
          display: "flex",
        }}
      >
        {/* TODO: make modal HoO */}
        Edit Hours of Operation
      </p>
    </TopNav_Container>
  );
};

export default CalendarTopNav;
