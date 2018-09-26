import React from "react";

import PostShift from "../Organisms/PostShift.js";

import { Segment, Portal } from "semantic-ui-react";
import { GridItemShift } from "../../styles/Calendar.js";

class ScheduleShift extends React.Component {
  state = {
    open: false,
  };

  handleOpen = e => {
    console.log("Click from ", e);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <GridItemShift
        key={`${this.props.row}-${this.props.column}`}
        onClick={this.handleOpen}
        row={this.props.row}
        column={this.props.column}
      >
        <Portal
          open={this.state.open}
          onClose={this.handleClose}
          closeOnPortalMouseLeave={true}
        >
          <Segment
            style={{
              left: `${this.props.column * 10}%`,
              position: "fixed",
              top: `${this.props.row * 10}%`,
              zIndex: 1000,
              minWidth: "120px",
              margin: "0",
              padding: "0",
            }}
          >
            <PostShift row={this.props.row} column={this.props.column} />
          </Segment>
        </Portal>
      </GridItemShift>
    );
  }
}

export default ScheduleShift;

{
  /* <HoOButton onClick={this.handleOpen}>{this.props.day}</HoOButton>
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
</Portal> */
}
