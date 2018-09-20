import React, { Component } from "react";
import { connect } from "react-redux";

import { postRequestOff } from "../../store/requestOff/action.js";

import { OrganismContainer } from "../../styles/Dashboard.js";
import { FormItem, Form } from "../../styles/Signin.js";
class TimeOffRequest extends Component {
  state = {
    date: "",
    reason: "",
  };

  submitHandler = e => {
    e.preventDefault();
    // TODO: Fill with correct data to send
    this.props.postRequestOff(this.state.date, this.state.reason);
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <OrganismContainer>
        <h1>Submit Time Off Request</h1>
        <Form onSubmit={this.submitHandler}>
          <FormItem>
            {/* Better date picker */}
            Date:{" "}
            <input
              value={this.state.date}
              onChange={this.inputChangeHandler}
              type="text"
              name="date"
              placeholder="date"
            />
          </FormItem>
          <FormItem>
            Reason:{" "}
            <input
              value={this.state.reason}
              onChange={this.inputChangeHandler}
              type="text"
              name="reason"
              placeholder="reason"
            />
          </FormItem>
          <FormItem>
            <input type="submit" value="submit" />
          </FormItem>
        </Form>
      </OrganismContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postRequestOff: (date, reason) => {
      return dispatch(postRequestOff(date, reason));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TimeOffRequest);
