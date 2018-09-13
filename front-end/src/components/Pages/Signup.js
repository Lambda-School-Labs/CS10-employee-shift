import React, { Component } from "react";
import { connect } from "react-redux";

import { signup } from "../../store/User/actions.js";

// NOTE: WIP

class Signup extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signup(this.state.email, this.state.password);
  };

  inputChangeHandler = event => {
    // render user input
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="card">
        <h1>Register a new user</h1>
        <form onSubmit={this.submitHandler}>
          <div className="card_body">
            <div>
              <h3>Username</h3>
              <input
                value={this.state.email}
                onChange={this.inputChangeHandler}
                name="email"
                type="text"
              />
            </div>
            <div>
              <h3>Password</h3>
              <input
                value={this.state.password}
                onChange={this.inputChangeHandler}
                name="password"
                type="password"
              />
            </div>
            <div>
              <button type="submit">Sign in</button>
            </div>
          </div>
        </form>
      </div>
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
    signup: (username, password) => {
      return dispatch(signup(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
