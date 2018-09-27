import React from "react";
import { connect } from "react-redux";

import { postShift } from "../../store/Shift/actions.js";

import PostShiftTime from "./PostShiftTime.js";

import { Segment, Portal, Icon, Header } from "semantic-ui-react";
import { GridItemShift } from "../../styles/Calendar.js";

class ScheduleShift extends React.Component {
  state = {
    open: false,
    clickX: 0,
    clickY: 0,
    notes: "",
    start_datetime: "",
    end_datetime: "",
    profile: this.props.row - 1,
  };

  handleOpen = e => {
    // Grabs postition of click for opening portal
    let newX = this.state.clickX;
    let newY = this.state.clickY;
    if (!this.state.open) {
      newX = e.pageX;
      newY = e.pageY;
    }

    this.setState({ open: true, clickX: newX, clickY: newY });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("The current state is:", this.state);
    this.handleClose();
    // If start time and end time:
    // If profile === 1 post to open shifts

    // this.props.postShift(
    //   this.state.start_datetime,
    //   this.state.end_datetime,
    //   this.state.profile,
    //   this.state.is_open,
    //   this.state.notes
    // );
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <GridItemShift
        key={`${this.props.row}-${this.props.column}`}
        row={this.props.row}
        column={this.props.column}
        background={this.props.row > 2 ? "none" : "hsl(104, 62.5%, 95%)"}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          onClick={this.handleOpen}
        />
        <Portal
          open={this.state.open}
          onClose={this.handleClose}
          closeOnDocumentClick={false}
        >
          <Segment
            style={{
              position: "fixed",
              left: `${this.state.clickX - 140}px`,
              top: `${this.state.clickY}px`,
              zIndex: 1005,
              minWidth: "120px",
              margin: "0",
              padding: "0",
            }}
          >
            <Icon link onClick={this.handleClose} name="close" />
            <Header textAlign={"center"}>New Shift</Header>
            <PostShiftTime
              day={"Start Time"}
              data={"start_datetime"}
              inputChangeHandler={this.inputChangeHandler}
            />
            <PostShiftTime
              day={"End Time"}
              data={"end_datetime"}
              inputChangeHandler={this.inputChangeHandler}
            />
            <label>Notes</label>
            <input
              value={this.state.notes}
              onChange={this.inputChangeHandler}
              name="notes"
              type="text"
            />
            <button onClick={this.submitHandler}>Submit</button>
          </Segment>
        </Portal>
      </GridItemShift>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postShift: (start_datetime, end_datetime, profile, is_open, notes) => {
      return dispatch(
        postShift(start_datetime, end_datetime, profile, is_open, notes)
      );
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ScheduleShift);
