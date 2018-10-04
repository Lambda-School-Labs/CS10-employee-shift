import React, { Component } from "react";
import { connect } from "react-redux";

import { updateAvailabilities } from "../../store/Availability/actions.js";

import TimePicker from "../Atoms/TimePicker.js";

import { Container, Portal, Accordion } from "semantic-ui-react";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      start_time: this.props.start_time,
      end_time: this.props.end_time,
      open: 0,
      clickX: 0,
      clickY: 0,
    };
  }

  submitTimeChange = (time, newTime) => {
    this.props.postHoO(this.props.day, newTime);
  };

  handleOpen = (e, itemProps) => {
    const { index } = itemProps;
    const { open } = this.state;

    const newOpen = open === index ? 0 : index;
    this.setState({ open: newOpen, clickX: e.pageX, clickY: e.pageY });
  };

  handleClose = () => {
    this.setState({ open: 0 });
  };

  render() {
    this.submitTimeChange = this.submitTimeChange.bind(this);
    return (
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Accordion.Title index={1} onClick={this.handleOpen}>
          {this.state.start_time}
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
        <span> - </span>
        <Accordion.Title index={2} onClick={this.handleOpen}>
          {this.state.end_time}
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAvailabilities: () => {
      return dispatch(updateAvailabilities());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Availability);
