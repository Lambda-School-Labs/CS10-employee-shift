import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

import HoODay from "../Molecules/HoODay.js";

import { ButtonContainer, HoOButton } from "../../styles/Admin.js";
import { Header, Segment, Portal, Label, Divider } from "semantic-ui-react";

// TODO: Make me more stylish
// TODO: Refactor to be a form that holds dates from child components and fires postHoO and updateHoO on submit

class HoO extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    if (this.props.allHoOs.length === 0) this.props.getHoursOfOperation();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  postHoO = (day, time) => {
    console.log(day, time);
    // this.props.postHoursOfOperation("M", date, date2);
  };

  updateHoO = (day, time) => {
    console.log(day, time);
    // this.props.updateHoursOfOperation(1, "W", date, date);
  };

  render() {
    return (
      <ButtonContainer>
        <HoOButton onClick={this.handleOpen}>Edit Hours of Operation</HoOButton>
        <Portal
          closeOnDocumentClick={false}
          open={this.state.open}
          onClose={this.handleClose}
        >
          {/* TODO: position this better segment */}
          <Segment
            style={{
              left: `${window.innerWidth - 310}px`,
              position: "absolute",
              top: `${window.innerHeight - 760}px`,
              zIndex: 1000,
              width: "300px",
            }}
          >
            <Label
              as="a"
              corner={"left"}
              color="red"
              onClick={this.handleClose}
              icon="close"
            />
            <Header as="h2" textAlign={"center"}>
              Hours of Operation
            </Header>
            <Divider />
            <HoODay
              day="Monday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[0]
                  ? moment(this.props.allHoOs[0].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[0]
                  ? moment(this.props.allHoOs[0].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
            <HoODay
              day="Tuesday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[1]
                  ? moment(this.props.allHoOs[1].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[1]
                  ? moment(this.props.allHoOs[1].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
            <HoODay
              day="Wednesday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[2]
                  ? moment(this.props.allHoOs[2].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[2]
                  ? moment(this.props.allHoOs[2].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
            <HoODay
              day="Thursday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[3]
                  ? moment(this.props.allHoOs[3].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[3]
                  ? moment(this.props.allHoOs[3].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
            <HoODay
              day="Friday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[4]
                  ? moment(this.props.allHoOs[4].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[4]
                  ? moment(this.props.allHoOs[4].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
            <HoODay
              day="Saturday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[5]
                  ? moment(this.props.allHoOs[5].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[5]
                  ? moment(this.props.allHoOs[5].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
            <HoODay
              day="Sunday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[6]
                  ? moment(this.props.allHoOs[6].open_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
              end={
                this.props.allHoOs[6]
                  ? moment(this.props.allHoOs[6].close_time, "H-m-s").format(
                      "h:mm A"
                    )
                  : null
              }
            />
          </Segment>
        </Portal>
      </ButtonContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    allHoOs: state.hourOfOperation.allHoOs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHoursOfOperation: () => {
      return dispatch(getHoursOfOperation());
    },
    // postHoursOfOperation: (day, open_time, close_time) => {
    //   return dispatch(postHoursOfOperation(day, open_time, close_time));
    // },
    updateHoursOfOperation: (id, day, open_time, close_time) => {
      return dispatch(updateHoursOfOperation(id, day, open_time, close_time));
    },
    // delete?
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoO);
