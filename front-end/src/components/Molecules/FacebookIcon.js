import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import "../../styles/LandingRef.css";


const Facebook = () => (
  <Header as='h3'>
    <Icon.Group size='small'>
      <Icon name='facebook' />
      <Icon corner name='add' />
    </Icon.Group>
    Add on Facebook
  </Header>
)

export default Facebook;