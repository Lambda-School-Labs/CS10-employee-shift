import React, { Component } from "react";
import SideNav from "../Organisms/SideNav.js";
import TopNav from "../Organisms/TopNav.js";

import {
  MainContainer,
  HorizontalContainer,
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
        <TopNav component={"hi"} />
        <HorizontalContainer>
          <Button
            style={{ position: "fixed", top: "0" }}
            onClick={this.handleButtonClick}
          >
            <Icon name="sidebar" />
          </Button>
          <Sidebar.Pushable as={Segment}>
            <SideNav
              visible={this.state.visible}
              handleSidebarHide={this.handleSidebarHide}
            />
            <Sidebar.Pusher>
              <ComponentContainer>
                <this.props.component />
              </ComponentContainer>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </HorizontalContainer>
      </MainContainer>
    );
  }
}

export default main;
