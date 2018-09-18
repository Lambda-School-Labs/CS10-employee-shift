import React from "react";
// TODO: styled components
const CalendarTopNav = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "14%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* TODO: how will these handle state? */}
        <button>Previous week</button>
        <button>Next week</button>
      </div>
      <p style={{ fontSize: "30px", fontWeight: "300" }}>
        {/* TODO: figure out dynamic date */}
        September 17 - 23, 2018
      </p>
      <p
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        {/* TODO: make modal HoO */}
        Edit Hours of Operation
      </p>
    </div>
  );
};

export default CalendarTopNav;