import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

import "../../styles/LandingRef.css";


class Twitter extends Component {
  state = {}


  render(){
    return(
      <Header as='h3'>
        <Icon.Group size='small'>
          <Icon name='twitter' />
          <Icon corner name='add' />
        </Icon.Group>
        Add on Twitter
      </Header>
    )
  }
  
}

export default Twitter;