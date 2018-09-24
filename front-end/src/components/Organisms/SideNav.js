import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import { SideNavigationContainer } from "../../styles/Template--main";

// TODO: Render based on permission level

const SideNav = props => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={props.handleSidebarHide}
      vertical
      visible={props.visible}
      width="thin"
    >
      <Menu.Item as={Link} to="/">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/calendar">
        <Icon name="calendar alternate outline" />
        Calendar
      </Menu.Item>
      <Menu.Item as={Link} to="/employees">
        <Icon name="users" />
        Employees
      </Menu.Item>
      <Menu.Item as={Link} to="/billing">
        <Icon name="money" />
        Billing
      </Menu.Item>
      <Menu.Item as={Link} to="/settings">
        <Icon name="settings" />
        Settings
      </Menu.Item>
    </Sidebar>
  );
};

export default SideNav;

/* // <Link to="/calendar">Calendar</Link>
        // <Link to="/employees">Employees</Link>
        // <Link to="#">Create Schedule</Link>
        // <Link to="/billing">Billing</Link>
        // <Link to="/settings">Settings</Link> */
