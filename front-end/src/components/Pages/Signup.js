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
    company: "",
    currentPage: 0,
    error: [false, false, false, false, false, false],
  };

  submitHandler = e => {
    // TODO: validate password
    e.preventDefault();
    const newError = [
      this.state.error[0],
      this.state.error[1],
      this.state.error[2],
      !this.state.username,
      !this.state.password,
      !this.state.re_password,
    ];
    this.setState({ error: newError });

    if (
      this.state.password === this.state.re_password &&
      !newError[3] &&
      !newError[4] &&
      !newError[5]
    )
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
    const newError = [
      !this.state.email,
      !this.state.firstName,
      !this.state.lastName,
      this.state.error[3],
      this.state.error[4],
      this.state.error[5],
    ];
    this.setState({ error: newError });
    if (!newError[0] && !newError[1] && !newError[2]) {
      if (this.state.currentPage === 0) this.setState({ currentPage: 1 });
      else this.setState({ currentPage: 0 });
    }
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
              <h3>First Name</h3>
              <Input
                fluid
                value={this.state.firstName}
                onChange={this.inputChangeHandler}
                name="firstName"
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                error={this.state.error[0]}
              />
            </FormItem>
            <FormItem>
              <h3>Last Name</h3>
              <Input
                fluid
                value={this.state.lastName}
                onChange={this.inputChangeHandler}
                name="lastName"
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                error={this.state.error[1]}
              />
            </FormItem>
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
                error={this.state.error[2]}
              />
            </FormItem>
            <FormItem>
              <h3>Company</h3>
              <Input
                fluid
                value={this.state.company}
                onChange={this.inputChangeHandler}
                name="company"
                icon="building"
                iconPosition="left"
                placeholder="Company Name"
                error={this.state.error[3]}
              />
            </FormItem>
            <FormItem>
              <Button
                color="blue"
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
                error={this.state.error[3]}
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
                error={this.state.error[4]}
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
                error={this.state.error[5]}
              />
            </FormItem>
            <Button
              color="blue"
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
    signup: (username, password, re_password, email, firstName, lastName, company) => {
      return dispatch(
        signup(username, password, re_password, email, firstName, lastName, company)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
