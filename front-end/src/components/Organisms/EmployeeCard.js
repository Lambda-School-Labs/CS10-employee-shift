import React, { Component } from "react";
import { Card, Image, Icon, Segment, Container } from "../../../node_modules/semantic-ui-react";

import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

import Availability from "../Molecules/Avialability";
import RequestedTimeOff from "../Molecules/RequestedTimeOff"


class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      const profile = this.props.profile;
      // const availabilities;
      return (
        <Segment.Group horizontal>
          <Segment>
            <Container>
                <Card color='blue'>
                  {/* <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/> */}
                  <Card.Content>
                    <Image rounded floated='right' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/>
                    <Card.Header>{profile.user.first_name} {profile.user.last_name}</Card.Header>
                    <Card.Description>
                      <Icon name='mail' />
                      {profile.user.email}
                    </Card.Description>
                    <Card.Description>
                      <Icon name='phone' />
                      {profile.phone_number}
                    </Card.Description>  
                  </Card.Content>
                </Card>
            </Container>
          </Segment>
          <Segment>
              <h3>Availability</h3>
              {this.props.allAvailabilities
                .filter( availability => availability.profile === profile.id )
                .map( availability =>
                <Availability key={availability.id} availability={availability} /> )}
          </Segment>
          <Segment>
              <h3>Requested Time Off</h3>
              {this.props.allRequestOffs
                .filter( requestOff => requestOff.profile === profile.id )
                .map( requestOff =>
                <RequestedTimeOff key={requestOff.id} requestOff={requestOff} /> )}
          </Segment>
        </Segment.Group>
      );
  };
};

export default EmployeeCard;
