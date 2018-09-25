import React from "react";

import HoOPicker from "../Atoms/HoOPicker.js";

import { HoOButton } from "../../styles/Calendar.js";

import { Segment, Portal } from "semantic-ui-react";

class HoODay extends React.Component {
  state = {
    open: false,
    // TODO: Chain portals so that after first time is picked second time must be picked
  };

  submitTimeChange(newTime) {
    this.props.postHoO(this.props.day, newTime);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    this.submitTimeChange = this.submitTimeChange.bind(this);

    return (
      <div>
        <HoOButton onClick={this.handleOpen}>{this.props.day}</HoOButton>
        <Portal open={this.state.open} onClose={this.handleClose}>
          <Segment
            style={{
              left: "52%",
              position: "fixed",
              top: "5%",
              zIndex: 1000,
              minWidth: "120px",
            }}
          >
            <HoOPicker
              handleClose={this.handleClose}
              submitTimeChange={this.submitTimeChange}
            />
          </Segment>
        </Portal>
      </div>
    );
  }
}

export default HoODay;
