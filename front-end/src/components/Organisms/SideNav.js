import React from "react";
import { Link } from "react-router-dom";

import { SideNavigationContainer } from "../../styles/Template--main";

// TODO: Render based on permission level

const SideNav = () => {
  return (
    <SideNavigationContainer>
      <Link to="/calendar">Calendar</Link>
      <Link to="/employees">Employees</Link>
      <Link to="#">Create Schedule</Link>
      <Link to="/billing">Billing</Link>
      <Link to="/settings">Settings</Link>
    </SideNavigationContainer>
  );
};

export default SideNav;
