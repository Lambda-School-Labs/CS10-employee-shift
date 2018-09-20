import React from "react";
import SideNav from "../Organisms/SideNav.js";
import TopNav from "../Organisms/TopNav.js";

import {
  MainContainer,
  HorizontalContainer,
  ComponentContainer,
} from "../../styles/Template--main.js";

import {
  Billing,
  Calendar,
  Dashboard,
  Employees,
  Landing,
  Settings,
  Signin,
  Signup,
} from "../Pages";

const components = {
  Billing: Billing,
  Calendar: Calendar,
  Dashboard: Dashboard,
  Employees: Employees,
  Landing: Landing,
  Settings: Settings,
  Signin: Signin,
  Signup: Signup,
};

const main = props => {
  const SpecificComponent = components[props.component.name];
  return (
    <MainContainer>
      <TopNav component={props.component.name} />
      <HorizontalContainer>
        <SideNav />
        <ComponentContainer>
          <SpecificComponent />
        </ComponentContainer>
      </HorizontalContainer>
    </MainContainer>
  );
};

export default main;
