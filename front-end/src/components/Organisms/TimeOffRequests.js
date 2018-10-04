import React, { Component } from "react";
import { connect } from "react-redux";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";

import { postRequestOff } from "../../store/requestOff/action.js";

import TimePicker from "../Atoms/TimePicker.js";

import { Segment, Input, Button, Header, Portal } from "semantic-ui-react";
import { TimeOffRequestContainer, FormItem } from "../../styles/Dashboard.js";

class TimeOffRequest extends Component {
  state = {
    start_date: moment(),
    end_date: moment(),
    start_time: "00:00:00",
    end_time: "00:00:00",
    reason: "",
    open: false,
    clickX: 0,
    clickY: 0,
  };

  submitTimeChange(time, newTime) {
    // this.setState({...})
    console.log(time, newTime);
  }

  handleOpen = e => {
    this.setState({ open: true, clickX: e.pageX, clickY: e.pageY });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(
      "postRequestOff FIRE",
      this.state.start_date
        .clone()
        .utc()
        .format(),
      this.state.end_date
        .clone()
        .utc()
        .format(),
      this.state.reason
    );
    // this.props.postRequestOff(
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
        <Segment
          padded="very"
          style={{
            width: "80%",
            minHeight: "60vh",
            marginBottom: "30px",
          }}
        >
          <FormItem>
            <Input
              value={this.state.start_time}
              onChange={this.inputChangeHandler}
              name="start_time"
              icon="clock"
              iconPosition="left"
              type="text"
              onClick={this.handleOpen}
            />
            <Portal
              open={this.state.open}
              onClose={this.handleClose}
              closeOnDocumentClick={false}
            >
              <div
                style={{
                  position: "fixed",
                  top: `${this.state.clickY - 200}px`,
                  left: `${this.state.clickX - 358}px`,
                  zIndex: 1000,
                  minWidth: "120px",
                }}
              >
                <TimePicker
                  handleClose={this.handleClose}
                  submitTimeChange={this.submitTimeChange}
                />
              </div>
            </Portal>
          </FormItem>
          <div style={{ maxWidth: "150px", margin: "0 auto" }}>
            <DateRangePicker
              startDate={this.state.start_date} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.end_date} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({
                  start_date: startDate,
                  end_date: endDate,
                })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              numberOfMonths={1}
              minimumNights={0}
            />
          </div>
          <FormItem>
            <Input
              value={this.state.end_time}
              onChange={this.inputChangeHandler}
              name="end_time"
              icon="clock"
              iconPosition="left"
              type="text"
              onClick={this.handleOpen}
            />
            <Portal
              open={this.state.open}
              onClose={this.handleClose}
              closeOnDocumentClick={false}
            >
              <div
                style={{
                  position: "fixed",
                  top: `${this.state.clickY - 200}px`,
                  left: `${this.state.clickX - 358}px`,
                  zIndex: 1000,
                  minWidth: "120px",
                }}
              >
                <TimePicker
                  handleClose={this.handleClose}
                  submitTimeChange={this.submitTimeChange}
                />
              </div>
            </Portal>
          </FormItem>
          <FormItem>
            <Input
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
