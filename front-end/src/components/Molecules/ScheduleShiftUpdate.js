import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { updateShift, deleteShift } from "../../store/Shift/actions.js";

import PostShiftTime from "./PostShiftTime.js";

import {
  GridItemActiveShiftInner,
  GridItemActiveShift,
} from "../../styles/Calendar.js";
import {
  Segment,
  Portal,
  Label,
  Header,
  Button,
  Input,
  Divider,
} from "semantic-ui-react";

class ScheduleShiftUpdate extends React.Component {
  state = {
    open: false,
    clickX: 0,
    clickY: 0,
    notes: this.props.notes,
    start_time: this.props.start,
    end_time: this.props.end,
    start_time24: this.props.start24,
    end_time24: this.props.end24,
    profile: this.props.profile,
    id: this.props.id,
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

  handleDelete = () => {
    this.props.deleteShift(this.props.id);
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
        .second(0)
        .minute(start_minutes)
        .hour(start_hour)
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
        // prettier-ignore
        end_datetime = moment(start_datetime)
            .clone()
            .add((23 - start_hour) + Number(end_hour), "hours")
            .add((60 - start_minutes) + Number(end_minutes), "minutes")
            .utc()
            .format();
      } else {
        end_datetime = moment(this.props.date)
          .second(0)
          .minute(end_minutes)
          .hour(end_hour)
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
      // console.log(
      //   this.state.id,
      //   profile,
      //   start_datetime,
      //   end_datetime,
      //   is_open,
      //   notes
      // );
      this.props.updateShift(
        this.state.id,
        profile,
        start_datetime,
        end_datetime,
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
      <GridItemActiveShift
        row={this.props.row}
        column={this.props.column}
        color={this.props.color}
        justify={this.props.justify}
      >
        <GridItemActiveShiftInner
          onClick={this.handleOpen}
          hue={this.props.hue}
        >
          {this.props.start} - {this.props.end}
        </GridItemActiveShiftInner>
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
              minWidth: "300px",
            }}
          >
            <Label
              as="a"
              corner={"left"}
              color="red"
              onClick={this.handleClose}
              icon="close"
            />
            <Label
              as="a"
              color="red"
              ribbon={"right"}
              onClick={this.handleDelete}
            >
              Delete
            </Label>
            <Header as="h2" textAlign={"center"}>
              Update Shift
            </Header>
            <Divider />
            <PostShiftTime
              day={"Start Time"}
              start={this.state.start_time}
              data={"start"}
              inputChangeHandler={this.inputChangeHandler}
            />
            <PostShiftTime
              day={"End Time"}
              end={this.state.end_time}
              data={"end"}
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
          </Segment>
        </Portal>
      </GridItemActiveShift>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShift: (
      id,
      profile,
      start_datetime,
      end_datetime,
      is_open,
      notes
    ) => {
      return dispatch(
        updateShift(id, profile, start_datetime, end_datetime, is_open, notes)
      );
    },
    deleteShift: id => {
      return dispatch(deleteShift(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ScheduleShiftUpdate);
