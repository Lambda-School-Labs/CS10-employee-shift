import React from "react";

import TimePicker from "../Atoms/TimePicker.js";

import { PortalButton } from "../../styles/Calendar.js";
import { Portal } from "semantic-ui-react";

class PostShiftTime extends React.Component {
  state = {
    open: false,
    clickX: 0,
    clickY: 0,
  };

  submitTimeChange(time24, time) {
    const event = {
      target: {
        name: this.props.data,
        value: time,
        value24: time24,
      },
    };
    this.props.inputChangeHandler(event);
  }

  handleOpen = e => {
    this.setState({ open: true, clickX: e.pageX, clickY: e.pageY });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    this.submitTimeChange = this.submitTimeChange.bind(this);

    return (
      <div>
        <PortalButton onClick={this.handleOpen}>
          <h4>{this.props.day}</h4>
          {this.props.start ? (
            <span style={{ width: "60px" }}>{this.props.start}</span>
          ) : this.props.day === "Start Time" ? (
            <input
              placeholder="00:00"
              style={{ width: "60px", padding: "0", margin: "0" }}
            />
          ) : null}
          {this.props.end ? (
            <span style={{ width: "60px" }}>{this.props.end}</span>
          ) : this.props.day === "End Time" ? (
            <input
              placeholder="00:00"
              style={{ width: "60px", padding: "0", margin: "0" }}
            />
          ) : null}
        </PortalButton>
        <Portal open={this.state.open} onClose={this.handleClose}>
          <div
            style={{
              position: "absolute",
              top: `${
                this.state.clickY > window.innerHeight - 262
                  ? this.state.clickY - 362
                  : this.state.clickY - 100
              }px`,
              left: `${
                this.state.clickX > window.innerWidth - 242
                  ? this.state.clickX - 262
                  : this.state.clickX + 20
              }px`,
              zIndex: 5000,
              minWidth: "120px",
            }}
          >
            <TimePicker
              currentTime={this.props.start ? this.props.start : this.props.end}
              handleClose={this.handleClose}
              submitTimeChange={this.submitTimeChange}
            />
          </div>
        </Portal>
      </div>
    );
  }
}

export default PostShiftTime;
