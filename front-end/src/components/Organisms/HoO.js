import React, { Component } from "react";
import { connect } from "react-redux";

import HoODay from "../Molecules/HoODay.js";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

import { ButtonContainer, HoOButton } from "../../styles/Calendar.js";
import { Header, Segment, Portal } from "semantic-ui-react";

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
    // const date = "12:00:00";
    // const date2 = "18:00:00";
    // this.props.postHoursOfOperation("M", date, date2);
  };

  updateHoO = (day, time) => {
    console.log(day, time);
    // const date = "12:00:00";
    // const date2 = "18:00:00";
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
          <Segment
            style={{
              left: "80%",
              position: "fixed",
              top: "5%",
              zIndex: 1000,
              width: "20%",
              minWidth: "100px",
            }}
          >
            <button onClick={this.handleClose}>X</button>
            <Header>Hours of Operation</Header>
            <HoODay
              day="Monday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
            />
            <HoODay
              day="Tuesday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
            />
            <HoODay
              day="Wednesday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
            />
            <HoODay
              day="Thursday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
            />
            <HoODay
              day="Friday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
            />
            <HoODay
              day="Saturday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
            />
            <HoODay
              day="Sunday"
              postHoO={this.postHoO}
              updateHoO={this.updateHoO}
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
