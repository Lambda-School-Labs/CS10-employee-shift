import React from "react";
import CalendarTopNav from "../Organisms/CalendarTopNav.js";
import Schedule from "../Organisms/Schedule.js";
import SideNav from "../Organisms/SideNav.js";
import TopNav from "../Organisms/TopNav.js";

const Calendar = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopNav />
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <SideNav />
        <div
          style={{
            width: "100%",
          }}
        >
          <CalendarTopNav />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
