import React, { Component } from "react";
import {
  Card,
  Image,
  Icon,
  Segment,
  Grid,
} from "../../../node_modules/semantic-ui-react";

import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

import Availability from "../Molecules/Availability";
import RequestedTimeOff from "../Molecules/RequestedTimeOff";
import EmployeeAvailability from "./EmployeeAvailability";

class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const profile = this.props.profile;
    return (
      <Grid columns={3} divided>
        <Grid.Column verticalAlign="middle">
          <Card color="blue">
            <Card.Content>
              <Image
                floated="right"
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              />
              <Card.Header>
                {profile.user.first_name} {profile.user.last_name}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <Icon name="mail" />
                {profile.user.email}
              </Card.Description>
              <Card.Description>
                <Icon name="phone" />
                {profile.phone_number}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <h3>Availability</h3>
          {
            <EmployeeAvailability
              availability={this.props.allAvailabilities.filter(
                availability => availability.profile === profile.id
              )}
              profile={profile.id}
            />
          }
        </Grid.Column>
        <Grid.Column>
          <h3>Requested Time Off</h3>
          <Segment style={{ minHeight: "92%" }}>
            {// TODO: Also filter by dates
            this.props.allRequestOffs
              .filter(requestOff => requestOff.profile === profile.id)
              .map(requestOff => (
                <RequestedTimeOff
                  key={requestOff.id}
                  requestOff={requestOff}
                  profile={profile.id}
                  id={requestOff.id}
                  start_datetime={requestOff.start_datetime}
                  end_datetime={requestOff.end_datetime}
                  reason={requestOff.reason}
                />
              ))}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EmployeeCard;
