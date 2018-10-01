import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Segment, Input, Button, Icon } from "semantic-ui-react";
import { Container, FormItem, Header } from "../../styles/signin.js";

import { signup } from "../../store/User/actions.js";

// TODO: Add in asking about HoO and stuff.
// TODO: Needs more styling

class Signup extends Component {
  state = {
    username: "",
    password: "",
    re_password: "",
    email: "",
    firstName: "",
    lastName: "",
    currentPage: 0,
  };

  submitHandler = e => {
    // TODO: validate password
    e.preventDefault();
    console.log(this.state);
    this.props.signup(
      this.state.username,
      this.state.password,
      this.state.re_password,
      this.state.email,
      this.state.firstName,
      this.state.lastName
    );
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  turnPageHandler = () => {
    if (this.state.currentPage === 0) this.setState({ currentPage: 1 });
    else this.setState({ currentPage: 0 });
  };

  render() {
    if (this.props.isAuthenticated) {
      // TODO: employee redirect
      return <Redirect to="/calendar" />;
    }

    return (
      <Container>
        {this.state.currentPage === 0 ? (
          <Segment raised padded="very">
            <Header>Hi, nice to meet you!</Header>
            <FormItem>
              <h3>Email</h3>
              <Input
                fluid
                value={this.state.email}
                onChange={this.inputChangeHandler}
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email"
              />
            </FormItem>
            <FormItem>
              <h3>First Name</h3>
              <Input
                fluid
                value={this.state.firstName}
                onChange={this.inputChangeHandler}
                name="firstName"
                icon="user circle"
                iconPosition="left"
                placeholder="First Name"
              />
            </FormItem>
            <FormItem>
              <h3>Last Name</h3>
              <Input
                fluid
                value={this.state.lastName}
                onChange={this.inputChangeHandler}
                name="lastName"
                icon="user circle"
                iconPosition="left"
                placeholder="Last Name"
              />
            </FormItem>
            <FormItem>
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.turnPageHandler}
              >
                Let's go!
              </Button>
            </FormItem>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </Segment>
        ) : (
          <Segment padded="very">
            <Icon link name="left arrow" onClick={this.turnPageHandler} />
            <Header>Almost there</Header>
            <FormItem>
              <h3>Username</h3>
              <Input
                fluid
                value={this.state.username}
                onChange={this.inputChangeHandler}
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
            </FormItem>
            <FormItem>
              <h3>Password</h3>
              <Input
                fluid
                value={this.state.password}
                onChange={this.inputChangeHandler}
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
            </FormItem>
            <FormItem>
              <h3>Confirm Password</h3>
              <Input
                fluid
                value={this.state.re_password}
                onChange={this.inputChangeHandler}
                name="re_password"
                icon="lock"
                iconPosition="left"
                placeholder="Re-type Password"
                type="password"
              />
            </FormItem>
            <Button
              color="teal"
              fluid
              size="large"
              onClick={this.submitHandler}
            >
              Register
            </Button>
          </Segment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.user.errors) {
    errors = Object.keys(state.user.errors).map(field => {
      return { field, message: state.user.errors[field] };
    });
  }
  return {
    errors,
    isAuthenticated: state.user.isAuthenticated,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, password, re_password, email, firstName, lastName) => {
      return dispatch(
        signup(username, password, re_password, email, firstName, lastName)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
