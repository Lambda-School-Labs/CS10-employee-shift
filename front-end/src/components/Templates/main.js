import React, { Component } from "react";
import SideNav from "../Organisms/SideNav.js";
import TopNav from "../Organisms/TopNav.js";

import {
  MainContainer,
  ComponentContainer,
} from "../../styles/Template--main.js";

import { Button, Segment, Sidebar, Icon } from "semantic-ui-react";

class main extends Component {
  state = { visible: false };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    return (
      <MainContainer>
        <Sidebar.Pushable as={Segment}>
          <SideNav
            visible={this.state.visible}
            handleSidebarHide={this.handleSidebarHide}
          />
          <Sidebar.Pusher>
            <ComponentContainer>
              <Button
                style={{ position: "fixed", top: "1%", left: "1%" }}
                onClick={this.handleButtonClick}
              >
                <Icon name="sidebar" />
              </Button>
              <TopNav />
              <this.props.component />
            </ComponentContainer>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </MainContainer>
    );
  }
}

export default main;
