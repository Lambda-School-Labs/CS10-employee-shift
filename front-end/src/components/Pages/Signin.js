import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { Container, FormItem, Form } from "../../styles/signin.js";

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
    if (this.props.isAuthenticated) {
      // TODO: employee redirect
      return <Redirect to="/calendar" />;
    }

    // TODO: Modern & stylish
    return (
      <Container>
        <Form onSubmit={this.submitHandler}>
          <FormItem>
            <h3>Username</h3>
            <input
              value={this.state.email}
              onChange={this.inputChangeHandler}
              name="email"
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
            <button type="submit">Sign in</button>
          </FormItem>
        </Form>
        <p>
          New user? <Link to="/signup">Register</Link>
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
    signin: (username, password) => {
      return dispatch(signin(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
