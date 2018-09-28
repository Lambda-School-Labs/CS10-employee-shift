import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { postShift } from "../../store/Shift/actions.js";

import PostShiftTime from "./PostShiftTime.js";

import {
  Segment,
  Portal,
  Label,
  Header,
  Form,
  Input,
  Button,
  Divider,
} from "semantic-ui-react";
import { GridItemShift } from "../../styles/Calendar.js";

class ScheduleShift extends React.Component {
  state = {
    open: false,
    clickX: 0,
    clickY: 0,
    notes: "",
    start_time: "",
    end_time: "",
    start_time24: "",
    end_time24: "",
    profile: this.props.profile,
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

    if (this.state.start_time24 && this.state.end_time24) {
      let start_hour;
      let start_minutes;
      if (this.state.start_time24.length === 4) {
        start_hour = "0" + this.state.start_time24[0];
        start_minutes = this.state.start_time24.slice(2, 4);
      } else {
        start_hour = this.state.start_time24.slice(0, 2);
        start_minutes = this.state.start_time24.slice(3, 5);
      }
      const start_datetime = moment(this.props.date)
        .hour(start_hour)
        .minute(start_minutes)
        .second(0)
        .utc()
        .format();

      let end_hour;
      let end_minutes;
      let end_datetime;
      if (this.state.end_time24.length === 4) {
        end_hour = "0" + this.state.end_time24[0];
        end_minutes = this.state.end_time24.slice(2, 4);
      } else {
        end_hour = this.state.end_time24.slice(0, 2);
        end_minutes = this.state.end_time24.slice(3, 5);
      }
      if (end_hour < start_hour) {
        end_datetime = moment(start_datetime)
          .clone()
          .add(24 - start_hour + end_hour, "h")
          .add(end_minutes, "m")
          .utc()
          .format();
      } else {
        end_datetime = moment(this.props.date)
          .hour(end_hour)
          .minute(end_minutes)
          .utc()
          .format();
      }

      let profile;
      let is_open;
      if (this.state.profile === 0) {
        profile = null;
        is_open = true;
      } else {
        profile = this.state.profile;
        is_open = false;
      }

      const notes = this.state.notes ? this.state.notes : "";

      this.props.postShift(
        start_datetime,
        end_datetime,
        profile,
        is_open,
        notes
      );
    }

    this.handleClose();
  };

  inputChangeHandler = event => {
    const { name, value, value24 } = event.target;
    if (value24) {
      const name24 = name + "_time24";
      const name12 = name + "_time";
      this.setState({ [name24]: value24, [name12]: value });
    } else this.setState({ [name]: value });
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
              left: `${
                this.state.clickX > window.innerWidth - 142
                  ? this.state.clickX - 262
                  : this.state.clickX + 20
              }px`,
              top: `${
                this.state.clickY > window.innerHeight - 242
                  ? this.state.clickY - 362
                  : this.state.clickY - 100
              }px`,
              zIndex: 1005,
              minWidth: "120px",
            }}
          >
            <Label
              as="a"
              corner={"left"}
              color="red"
              onClick={this.handleClose}
              icon="close"
            />
            <Form>
              <Header as="h2" textAlign={"center"}>
                New Shift
              </Header>
              <Divider />
              <PostShiftTime
                day={"Start Time"}
                data={"start"}
                start={this.state.start_time}
                inputChangeHandler={this.inputChangeHandler}
              />
              <PostShiftTime
                day={"End Time"}
                data={"end"}
                end={this.state.end_time}
                inputChangeHandler={this.inputChangeHandler}
              />
              <Input
                label={{ tag: true, content: "Note" }}
                labelPosition="left"
                style={{ width: "70%", padding: "8% 8%" }}
                value={this.state.notes}
                onChange={this.inputChangeHandler}
                name={"notes"}
              />
              <Button
                fluid
                size="large"
                color="teal"
                onClick={this.submitHandler}
              >
                Submit
              </Button>
            </Form>
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
