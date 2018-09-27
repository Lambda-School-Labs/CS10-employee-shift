import React, { Component } from "react";
import { connect } from "react-redux";
import "react-dates/initialize";

import { postRequestOff } from "../../store/requestOff/action.js";

import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";

import { OrganismContainer } from "../../styles/Dashboard.js";
import { FormItem, Form } from "../../styles/signin.js";

class TimeOffRequest extends Component {
  state = {
    start_datetime: "",
    end_datetime: "",
    reason: "",
  };

  submitHandler = e => {
    // dummy dates, remove me
    let date = new Date();
    date = date.toISOString();

    e.preventDefault();
    // TODO: Fill with correct data to send
    this.props.postRequestOff(
      this.state.start_datetime,
      this.state.end_datetime,
      this.state.reason
    );
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
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
          <FormItem>
            {/* Better date picker */}
            Date Start:{" "}
            <input
              value={this.state.start_datetime}
              onChange={this.inputChangeHandler}
              type="text"
              name="start_datetime"
              placeholder="start date"
            />
          </FormItem>
          <FormItem>
            {/* Better date picker */}
            Date End:{" "}
            <input
              value={this.state.end_datetime}
              onChange={this.inputChangeHandler}
              type="text"
              name="end_datetime"
              placeholder="end date"
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
    postRequestOff: (start_datetime, end_datetime, reason) => {
      return dispatch(postRequestOff(start_datetime, end_datetime, reason));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TimeOffRequest);
