// DEPRECATED

import React from "react";

import TimePicker from "../Atoms/TimePicker.js";

import { HoOButton } from "../../styles/Admin.js";

import { Segment, Portal } from "semantic-ui-react";

// TODO: Chain portals so that after first time is picked second time must be picked

class HoODay extends React.Component {
  state = {
    open: false,
    clickX: 0,
    clickY: 0,
  };

  submitTimeChange(time, newTime) {
    this.props.postHoO(this.props.day, newTime);
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
        <HoOButton onClick={this.handleOpen}>
          <h4>{this.props.day}</h4>
          <h5>{this.props.start}</h5>
          <h5>-</h5>
          <h5>{this.props.end}</h5>
        </HoOButton>
        <Portal open={this.state.open} onClose={this.handleClose}>
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
      </div>
    );
  }
}

export default HoODay;
