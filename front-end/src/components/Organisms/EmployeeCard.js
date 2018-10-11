import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { updateProfile, deleteProfile } from "../../store/Profile/actions.js";

import {
  Card,
  Image,
  Icon,
  Segment,
  Grid,
} from "../../../node_modules/semantic-ui-react";

import { EmployeeCardContainer, CardInner } from "../../styles/Employees";

import RequestedTimeOff from "../Molecules/RequestedTimeOff";
import EmployeeAvailability from "./EmployeeAvailability";

class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUpdate = () => {
    console.log("update");
  };

  handleDelete = () => {
    console.log("delete");
  };

  render() {
    const profile = this.props.profile;
    return (
      // TODO: REDO grid for media queries

      <Grid columns={3} divided>
        <Grid.Column verticalAlign="middle">
          <Card centered color="blue">
            <Card.Content>
              <div
                style={{
                  width: "100%",
                  height: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Icon
                  onClick={this.handleUpdate}
                  link
                  name="pencil"
                  color="blue"
                  style={{ marginRight: "8px" }}
                />
                <Icon
                  onClick={this.handleDelete}
                  link
                  color="red"
                  name="trash alternate"
                />
              </div>
              <Image
                floated="left"
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              />
              <Card.Header textAlign="center" style={{ marginTop: "10px" }}>
                {profile.user.first_name}
                {"  "}
                {profile.user.last_name}
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
              .filter(
                requestOff =>
                  requestOff.profile === profile.id &&
                  moment() < requestOff.end_datetime
              )
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

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: data => {
      return dispatch(updateProfile(data));
    },
    deleteProfile: data => {
      return dispatch(deleteProfile(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EmployeeCard);
