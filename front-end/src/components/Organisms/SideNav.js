import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Icon, Menu, Sidebar } from "semantic-ui-react";

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
      <Menu.Item as={Link} to="/dashboard">
        <Icon name="dashboard" />
        Dashboard
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
