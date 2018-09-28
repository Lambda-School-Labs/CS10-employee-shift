import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

import HoODay from "../Molecules/HoODay.js";

import { ButtonContainer, HoOButton } from "../../styles/Calendar.js";
import { Header, Segment, Portal, Icon } from "semantic-ui-react";

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
              left: "70%",
              position: "absolute",
              top: "5%",
              zIndex: 1000,
              minWidth: "100px",
            }}
          >
            <Icon link onClick={this.handleClose} name="close" />
            <Header textAlign={"center"}>Hours of Operation</Header>
            <HoODay
              day="Monday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[0] ? this.props.allHoOs[0].open_time : null
              }
              end={
                this.props.allHoOs[0] ? this.props.allHoOs[0].close_time : null
              }
            />
            <HoODay
              day="Tuesday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[1] ? this.props.allHoOs[1].open_time : null
              }
              end={
                this.props.allHoOs[1] ? this.props.allHoOs[1].close_time : null
              }
            />
            <HoODay
              day="Wednesday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[2] ? this.props.allHoOs[2].open_time : null
              }
              end={
                this.props.allHoOs[2] ? this.props.allHoOs[2].close_time : null
              }
            />
            <HoODay
              day="Thursday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[3] ? this.props.allHoOs[3].open_time : null
              }
              end={
                this.props.allHoOs[3] ? this.props.allHoOs[3].close_time : null
              }
            />
            <HoODay
              day="Friday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[4] ? this.props.allHoOs[4].open_time : null
              }
              end={
                this.props.allHoOs[4] ? this.props.allHoOs[4].close_time : null
              }
            />
            <HoODay
              day="Saturday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[5] ? this.props.allHoOs[5].open_time : null
              }
              end={
                this.props.allHoOs[5] ? this.props.allHoOs[5].close_time : null
              }
            />
            <HoODay
              day="Sunday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
              start={
                this.props.allHoOs[6] ? this.props.allHoOs[6].open_time : null
              }
              end={
                this.props.allHoOs[6] ? this.props.allHoOs[6].close_time : null
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
    postHoursOfOperation: (day, open_time, close_time) => {
      return dispatch(postHoursOfOperation(day, open_time, close_time));
    },
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
