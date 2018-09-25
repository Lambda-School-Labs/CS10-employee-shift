import React from "react";
import { connect } from "react-redux";

import { NewEmployeeCard } from "../../styles/Employees";

const NewEmployee = () => {
  // TODO: What info to grab?
  return (
    <NewEmployeeCard>
      {/* TODO: Use styled components */}
      <form action="">
        First Name:{" "}
        <input type="text" name="firstName" placeholder="first name" />
        <br />
        Middle Name:{" "}
        <input type="text" name="middleName" placeholder="middle name" />
        <br />
        Last Name: <input type="text" name="lastName" placeholder="last name" />
        <br />
        Email: <input type="text" name="email" placeholder="email" />
        <br />
        Phone: <input type="text" name="Phone" placeholder="phone" />
        <br />
        Working Days:{" "}
        <input type="text" name="days" placeholder="working days" />
        <br />
        Working Time:{" "}
        <input type="text" name="time" placeholder="working time" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </NewEmployeeCard>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // what action to fire?
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewEmployee);
