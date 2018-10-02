// This will be a component that tells stats such as:
// number of employees
// number of shifts
// total hours worked

import React from "react";

import HoO from "../Organisms/HoO.js";

import { AdminHoursContainer } from "../../styles/Admin.js";
import { Segment, Card, Icon, Image } from "semantic-ui-react";

const AdminStats = () => {
  return (
    <AdminHoursContainer>
      <Segment>
        hours <HoO />
      </Segment>
    </AdminHoursContainer>
  );
};

export default AdminStats;
