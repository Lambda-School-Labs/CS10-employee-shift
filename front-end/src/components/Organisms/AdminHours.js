import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

import HoODay from "../Molecules/HoODay.js";

import { AdminHoursContainer } from "../../styles/Admin.js";
import { Segment, Card, Icon, Image, Header, Divider } from "semantic-ui-react";

class AdminHours extends Component {
  state = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  addTime = () => {
    console.log("Add time!");
  };

  render() {
    return (
      <AdminHoursContainer>
        <Segment padded="very">
          <Header>Hours of Operation</Header>
          <Divider />
          <HoODay day="Monday" postHoO={this.addTime} start={1} end={2} />
          <HoODay day="Tuesday" postHoO={this.addTime} start={1} end={2} />
          <HoODay day="Wednesday" postHoO={this.addTime} start={1} end={2} />
          <HoODay day="Thursday" postHoO={this.addTime} start={1} end={2} />
          <HoODay day="Friday" postHoO={this.addTime} start={1} end={2} />
          <HoODay day="Saturday" postHoO={this.addTime} start={1} end={2} />
          <HoODay day="Sunday" postHoO={this.addTime} start={1} end={2} />
        </Segment>
      </AdminHoursContainer>
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
)(AdminHours);
