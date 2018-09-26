import React, { Component } from "react";
import { connect } from "react-redux";

import { postShift } from "../../store/Shift/actions.js";

//REFACTOR TO OWN STYLES
import { PostShiftContainer, FormItem, Form } from "../../styles/Calendar.js";

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
      <PostShiftContainer>
        {/* Pull out into Molecular components? */}
        <Form onSubmit={this.submitHandler}>
          <FormItem>
            {/* (Make me a calendar) */}
            <h3>Start Time</h3>
            <input
              value={this.state.start_datetime}
              onChange={this.inputChangeHandler}
              name="start_datetime"
              type="text"
            />
          </FormItem>
          <FormItem>
            {/* (Make me a calendar) */}
            <h3>End Time</h3>
            <input
              value={this.state.end_datetime}
              onChange={this.inputChangeHandler}
              name="end_datetime"
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
      </PostShiftContainer>
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
