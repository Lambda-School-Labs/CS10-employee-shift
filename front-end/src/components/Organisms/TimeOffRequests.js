import React, { Component } from "react";
import { connect } from "react-redux";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";

import { postRequestOff } from "../../store/requestOff/action.js";

import { Segment, Input, Button, Header } from "semantic-ui-react";
import { TimeOffRequestContainer, FormItem } from "../../styles/Dashboard.js";

class TimeOffRequest extends Component {
  state = {
    start_datetime: moment(),
    end_datetime: moment(),
    reason: "",
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(
      "postRequestOff FIRE",
      this.state.start_datetime
        .clone()
        .utc()
        .format(),
      this.state.end_datetime
        .clone()
        .utc()
        .format(),
      this.state.reason
    );
    // this.props.postRequestOff(
    //   this.state.start_datetime,
    //   this.state.end_datetime,
    //   this.state.reason
    // );
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <TimeOffRequestContainer>
        <Header>Request Time Off</Header>
        <Segment padded="very" style={{ width: "80%", minHeight: "500px" }}>
          <DateRangePicker
            startDate={this.state.start_datetime} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.end_datetime} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({
                start_datetime: startDate,
                end_datetime: endDate,
              })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={1}
            minimumNights={0}
          />
          <FormItem>Timepickers</FormItem>
          <FormItem>
            <Input
              fluid
              value={this.state.reason}
              onChange={this.inputChangeHandler}
              name="reason"
              icon="sticky note"
              iconPosition="left"
              type="text"
              placeholder="Reason"
            />
          </FormItem>
          <FormItem style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={this.submitHandler}>Submit</Button>
          </FormItem>
        </Segment>
      </TimeOffRequestContainer>
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
