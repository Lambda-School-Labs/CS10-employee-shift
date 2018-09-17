import React from "react";
import Date from "../Atoms/Date.js";
import Shift from "../Atoms/Shift.js";
import Totals from "../Atoms/Totals.js";

const Day = ({ name, date }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid black",
      }}
    >
      <Date name={name} date={date} />
      {/* How to insert shifts? CSS grid? */}
      <Totals />
    </div>
  );
};

export default Day;
