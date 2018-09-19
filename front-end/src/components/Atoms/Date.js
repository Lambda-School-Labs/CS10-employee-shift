import React from "react";

const Date = ({ name, date }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid black",
      }}
    >
      <p>{name}</p>
      <p>{date}</p>
    </div>
  );
};

export default Date;
