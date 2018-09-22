import React from "react";
import CalendarTopNav from "../Organisms/CalendarTopNav.js";
import Schedule from "../Organisms/Schedule.js";
import HoO from "../Organisms/HoO.js";

import { CalendarContainer } from "../../styles/Calendar.js";

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarTopNav />
      <Schedule />
      <HoO />
    </CalendarContainer>
  );
};

export default Calendar;
