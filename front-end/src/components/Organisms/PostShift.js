import React, { Component } from "react";
import { connect } from "react-redux";

import { postShift } from "../../store/Shift/actions.js";

//REFACTOR TO OWN STYLES
import { BillingContainer, FormItem, Form } from "../../styles/Billing.js";

class PostShift extends Component {
  state = {
    start_datetime: "",
    end_datetime: "",
    profile: "",
    is_open: true,
    notes: "",
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.postShift(
      this.state.start_datetime,
      this.state.end_datetime,
      this.state.profile,
      this.state.is_open,
      this.state.notes
    );
  };

  inputChangeHandler = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <BillingContainer>
        {/* Pull out into Molecular components? */}
        <Form onSubmit={this.submitHandler}>
          <p> I'm want to be a modal when I grow up!</p>
          <FormItem>
            <h3>Start Time (Make me a calendar)</h3>
            <input
              value={this.state.start_datetime}
              onChange={this.inputChangeHandler}
              name="start_datetime"
              type="text"
            />
          </FormItem>
          <FormItem>
            <h3>End Time (Make me a calendar)</h3>
            <input
              value={this.state.end_datetime}
              onChange={this.inputChangeHandler}
              name="end_datetime"
              type="text"
            />
          </FormItem>

          <FormItem>
            <h3>Assigned Employee (Make me an employee dropdown)</h3>
            <input
              value={this.state.profile}
              onChange={this.inputChangeHandler}
              name="profile"
              type="text"
            />
          </FormItem>
          <FormItem>
            <h3>Available for pickup</h3>
            <input
              value={this.state.is_open}
              onChange={this.inputChangeHandler}
              name="is_open"
              type="checkbox"
            />
          </FormItem>
          <FormItem>
            <h3>Notes</h3>
            <input
              value={this.state.notes}
              onChange={this.inputChangeHandler}
              name="notes"
              type="text"
            />
          </FormItem>
          <button>Schedule!</button>
        </Form>
      </BillingContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postShift: (start_datetime, end_datetime, profile, is_open, notes) => {
      return dispatch(
        postShift(start_datetime, end_datetime, profile, is_open, notes)
      );
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostShift);
