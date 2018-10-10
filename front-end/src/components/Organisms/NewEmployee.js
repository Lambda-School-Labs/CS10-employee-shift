import React, { Component } from "react";
import { connect } from "react-redux";

import { postProfile } from "../../store/Profile/actions.js";

import {
  Accordion,
  Icon,
  Segment,
  Label,
  Card,
  Image,
  Input,
  Button,
} from "semantic-ui-react";

class NewEmployee extends Component {
  state = {
    username: "",
    password: "",
    re_password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    notes: "",
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    // TODO: Check number of employees on business, if more than 2 must be paying

    this.props.postProfile(this.state);
  };

  render() {
    // TODO: Check employee number & account flag : if more than 3 employees and no flag error
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
                    iconPosition="left"
                    placeholder="First name"
                    style={{ paddingBottom: "10px" }}
                  />
                  <Input
                    fluid
                    value={this.state.last_name}
                    onChange={this.inputChangeHandler}
                    name="last_name"
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
                    style={{ paddingBottom: "10px" }}
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
              <Card.Content>
                <Card.Description>
                  <Input
                    label={{ tag: true, content: "Note" }}
                    labelPosition="left"
                    value={this.state.notes}
                    onChange={this.inputChangeHandler}
                    name={"notes"}
                  />
                </Card.Description>
              </Card.Content>
            </Card>
            <Button
              style={{ marginTop: "10px" }}
              color="green"
              fluid
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postProfile: data => {
      return dispatch(postProfile(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewEmployee);
