import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react';
import { Route, Link } from "react-router-dom";

import "../../styles/LandingRef.css";


class Facebook extends Component {
  state = {};

  render(){
    return (
      <Header as='h1'>
        <Icon.Group size='small'>
          <Icon name='facebook' />
          <Icon corner name='add' />
        </Icon.Group>
      </Header>
    )
  }
}

export default Facebook;