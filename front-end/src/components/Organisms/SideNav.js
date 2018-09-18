import React from "react";
import { Link } from "react-router-dom";

import "../../styles/sidebar.css";

// TODO: Render based on authorization level

const SideNav = () => {
  return (
    <div className="sidebar-container">
      <Link to="/calendar">Calendar</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/schedules">Create Schedule</Link>
      <Link to="/billing">Billing</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default SideNav;
