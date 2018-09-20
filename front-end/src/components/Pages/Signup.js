import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Container, FormItem, Form } from "../../styles/Signin.js";

import { signup } from "../../store/User/actions.js";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    re_password: "",
    email: "",
    firstName: "",
    lastName: "",
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

  // TODO: Modern & stylish
  render() {
    if (this.props.isAuthenticated) {
      // TODO: employee redirect
      return <Redirect to="/calendar" />;
    }

    return (
      <Container>
        <Form onSubmit={this.submitHandler}>
          <FormItem>
            <h3>Username</h3>
            <input
              value={this.state.username}
              onChange={this.inputChangeHandler}
              name="username"
              type="text"
            />
          </FormItem>
          <FormItem>
            <h3>Password</h3>
            <input
              value={this.state.password}
              onChange={this.inputChangeHandler}
              name="password"
              type="password"
            />
          </FormItem>
          <FormItem>
            <h3>Confirm Password</h3>
            <input
              value={this.state.re_password}
              onChange={this.inputChangeHandler}
              name="re_password"
              type="password"
            />
          </FormItem>
          <FormItem>
            <h3>Email</h3>
            <input
              value={this.state.email}
              onChange={this.inputChangeHandler}
              name="email"
              type="text"
            />
          </FormItem>
          <FormItem>
            <h3>First Name</h3>
            <input
              value={this.state.firstName}
              onChange={this.inputChangeHandler}
              name="firstName"
              type="text"
            />
          </FormItem>
          <FormItem>
            <h3>Last Name</h3>
            <input
              value={this.state.lastName}
              onChange={this.inputChangeHandler}
              name="lastName"
              type="text"
            />
          </FormItem>
          <FormItem>
            <button type="submit">Register</button>
          </FormItem>
        </Form>
        <p>
          Already have an account? <Link to="/signin">Login</Link>
        </p>
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
