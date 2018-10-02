import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { Segment, Input, Button, Form } from "semantic-ui-react";
import { Container, FormItem, Header } from "../../styles/signin.js";

import { signin } from "../../store/User/actions.js";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signin(this.state.email, this.state.password);
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.props.isAuthenticated && this.props.user.currentUser) {
      if (this.props.user.currentUser.user.groups[0].name === "manager")
        return <Redirect to="/calendar" />;
      else return <Redirect to="/dashboard" />;
    } else
      return (
        <Container>
          <Segment raised padded="very">
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Header>Welcome back!</Header>
              <Form onSubmit={this.submitHandler}>
                <FormItem>
                  <h3>Username</h3>
                  <Input
                    fluid
                    value={this.state.email}
                    onChange={this.inputChangeHandler}
                    name="email"
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
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
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onClick={this.submitHandler}
                  >
                    Login
                  </Button>
                </FormItem>
              </Form>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                New user? <Link to="/signup">Register</Link>
              </p>
            </div>
          </Segment>
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
    signin: (username, password) => {
      return dispatch(signin(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
