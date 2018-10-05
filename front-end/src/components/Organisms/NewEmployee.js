import React, { Component } from "react";
import { connect } from "react-redux";

import NewEmployeeAvailability from "./NewEmployeeAvailability.js";
import { postProfile } from "../../store/Profile/actions.js";

import {
  Accordion,
  Icon,
  Segment,
  SegmentGroup,
  Label,
  Card,
  Image,
  Container,
  Grid,
  Input,
  Button,
  CardContent,
  TextArea
} from "semantic-ui-react";

import { NewEmployeeCard } from "../../styles/Employees";

class NewEmployee extends Component {
  state = {
    username: "",
    password: "",
    re_password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    console.log("Submit!");
    this.props.postProfile(this.state);
  };

  addTime = (time, time24) => {
    console.log(time, time24, "AddTime!");
  };

  render() {
    return (
      <Segment>
        <Accordion>
          <Accordion.Title
            active={this.props.active}
            index={this.props.index}
            onClick={this.props.click}
          >
            <Label color="green">
              <Icon name="dropdown" />
              Add new
              <Label.Detail>
                <Icon name="plus square outline" />
              </Label.Detail>
            </Label>
          </Accordion.Title>
          <Accordion.Content active={this.props.active}>
            <Grid columns={2} verticalAlign={"center"}>
              <Grid.Column floated={"left"}>
                <Card centered color="green">
                  <Card.Content>
                    <Image
                      floated="right"
                      size="tiny"
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    />
                    <Card.Header>
                      <Input
                        fluid
                        value={this.state.first_name}
                        onChange={this.inputChangeHandler}
                        name="first_name"
                        icon="person"
                        iconPosition="left"
                        placeholder="First name"
                      />
                      <Input
                        fluid
                        value={this.state.last_name}
                        onChange={this.inputChangeHandler}
                        name="last_name"
                        icon="person"
                        iconPosition="left"
                        placeholder="Last name"
                      />
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <Input
                        fluid
                        value={this.state.email}
                        onChange={this.inputChangeHandler}
                        name="email"
                        icon="mail"
                        iconPosition="left"
                        placeholder="E-mail address"
                      />
                    </Card.Description>
                    <Card.Description>
                      <Input
                        fluid
                        value={this.state.phone_number}
                        onChange={this.inputChangeHandler}
                        name="phone_number"
                        icon="phone"
                        iconPosition="left"
                        placeholder="Phone number"
                      />
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <NewEmployeeAvailability addTime={this.addTime} />
              </Grid.Column>
              <Grid.Row columns={1}>
                <Button
                  style={{ margin: "0 14%" }}
                  color="green"
                  fluid
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Grid.Row>
            </Grid>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postProfile: (data) => {
      return dispatch(postProfile(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewEmployee);
