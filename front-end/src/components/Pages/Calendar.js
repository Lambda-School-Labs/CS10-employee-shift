import React from "react";
import CalendarTopNav from "../Organisms/CalendarTopNav.js";
import Schedule from "../Organisms/Schedule.js";

import { CalendarContainer } from "../../styles/Calendar.js";

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarTopNav />
      <Schedule />
    </CalendarContainer>
  );
};

export default Calendar;
