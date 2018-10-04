import React, { Component } from "react";
import { connect } from "react-redux";

import { postAvailabilities } from "../../store/Availability/actions.js";

import TimePicker from "../Atoms/TimePicker.js";

import { Portal, Accordion, Icon } from "semantic-ui-react";

class PostAvailability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      start_time: "",
      end_time: "",
      open: 0,
      clickX: 0,
      clickY: 0,
      revealed: false,
    };
  }

  submitTimeChange = (time, newTime) => {
    console.log(time, newTime);
    // this.props.postHoO(this.props.day, newTime);
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

  render() {
    this.submitTimeChange = this.submitTimeChange.bind(this);
    return (
      <div
        style={{
          minWidth: "200px",
          minHeight: "20px",
          display: "flex",
        }}
      >
        <Icon name="plus" onClick={this.handleReveal} />
        {!this.state.revealed ? null : (
          <div
            style={{
              width: "50%",
              display: "flex",
              paddingLeft: "30%",
              justifyContent: "space-evenly",
            }}
          >
            <Accordion.Title index={1} onClick={this.handleOpen}>
              Start
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
              End
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
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostAvailability);
