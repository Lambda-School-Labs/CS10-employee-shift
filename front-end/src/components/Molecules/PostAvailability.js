import React, { Component } from "react";
import { connect } from "react-redux";

import { postAvailabilities } from "../../store/Availability/actions.js";
import { postHoursOfOperation } from "../../store/hourOfOperation/actions.js";

import TimePicker from "../Atoms/TimePicker.js";

import { Portal, Accordion, Icon, Button } from "semantic-ui-react";

class PostAvailability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      start_time: "",
      end_time: "",
      start_time24: "",
      end_time24: "",
      open: 0,
      clickX: 0,
      clickY: 0,
      revealed: false,
    };
  }

  submitTimeChange = (time, newTime) => {
    if (this.state.open === 1) {
      this.setState({
        open: 2,
        start_time: newTime,
        start_time24: time,
        clickX: this.state.clickX + 100,
      });
    } else if (this.state.open === 2) {
      this.setState({
        end_time: newTime,
        end_time24: time,
      });
    }
  };

  handleOpen = (e, itemProps) => {
    const { index } = itemProps;
    const { open } = this.state;

    const newOpen = open === index ? 0 : index;
    this.setState({ open: newOpen, clickX: e.pageX, clickY: e.pageY });
  };

  handleReveal = () => {
    this.setState({ revealed: !this.state.revealed });
  };

  handleClose = () => {
    this.setState({ open: 0 });
  };

  handleSubmit = () => {
    this.handleClose();

    // handle error of end time less than start time

    if (this.props.type === "availability")
      this.props.postAvailabilities(
        this.state.day,
        this.state.start_time24,
        this.state.end_time24 + ":00"
      );
    else if (this.props.type === "hoursOfOperation")
      this.props.postHoursOfOperation(
        this.state.day,
        this.state.start_time24,
        this.state.end_time24 + ":00"
      );

    this.setState({
      day: this.props.day,
      start_time: "",
      end_time: "",
      open: 0,
      clickX: 0,
      clickY: 0,
      revealed: false,
    });
  };

  render() {
    this.submitTimeChange = this.submitTimeChange.bind(this);
    return (
      <div
        style={{
          minWidth: "130px",
          minHeight: "22px",
          display: "flex",
        }}
      >
        <Icon name="plus" onClick={this.handleReveal} />
        {!this.state.revealed ? null : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Accordion.Title index={1} onClick={this.handleOpen}>
              {this.state.start_time ? (
                this.state.start_time
              ) : (
                <input style={{ width: "40px" }} />
              )}
            </Accordion.Title>
            <Portal open={this.state.open === 1} onClose={this.handleClose}>
              <div
                style={{
                  position: "fixed",
                  top: `${this.state.clickY - 200}px`,
                  left: `${this.state.clickX}px`,
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
            <span
              style={{
                padding: "0 14px",
              }}
            >
              {" "}
              -{" "}
            </span>
            <Accordion.Title index={2} onClick={this.handleOpen}>
              {this.state.end_time ? (
                this.state.end_time
              ) : (
                <input style={{ width: "40px" }} />
              )}
            </Accordion.Title>
            <Portal open={this.state.open === 2} onClose={this.handleClose}>
              <div
                style={{
                  position: "fixed",
                  top: `${this.state.clickY - 200}px`,
                  left: `${this.state.clickX}px`,
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
            <Icon name="check" onClick={this.handleSubmit} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postAvailabilities: () => {
      return dispatch(postAvailabilities());
    },
    postHoursOfOperation: (day, open_time, close_time) => {
      return dispatch(postHoursOfOperation(day, open_time, close_time));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostAvailability);
