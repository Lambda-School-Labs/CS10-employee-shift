import React from "react";

import TimePicker from "../Atoms/TimePicker.js";

import { PortalButton } from "../../styles/Calendar.js";
import { Segment, Portal } from "semantic-ui-react";

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
          {this.props.start ? <h5>{this.props.start}</h5> : null}
          {this.props.end ? <h5>{this.props.end}</h5> : null}
        </PortalButton>
        <Portal open={this.state.open} onClose={this.handleClose}>
          <Segment
            style={{
              position: "absolute",
              top: `${this.state.clickY - 230}px`,
              left: `${this.state.clickX - 354}px`,
              zIndex: 1000,
              minWidth: "120px",
            }}
          >
            <TimePicker
              currentTime={this.props.start ? this.props.start : this.props.end}
              handleClose={this.handleClose}
              submitTimeChange={this.submitTimeChange}
            />
          </Segment>
        </Portal>
      </div>
    );
  }
}

export default PostShiftTime;
