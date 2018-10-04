import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";

import {
  getHoursOfOperation,
  postHoursOfOperation,
  updateHoursOfOperation,
} from "../../store/hourOfOperation/actions.js";

import HoODay from "../Molecules/HoODay.js";
import Availability from "../Molecules/Availability.js";
import PostAvailability from "../Molecules/PostAvailability.js";

import {
  AdminHoursContainer,
  Day,
  HorizontalContainer,
} from "../../styles/Admin.js";
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
          <Header textAlign="center">Hours of Operation</Header>
          <Divider />
          <Day>
            <h4>Monday</h4>
            <HorizontalContainer>
              <Availability day="Monday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Tuesday</h4>
            <HorizontalContainer>
              <Availability day="Tuesday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Wednesday</h4>
            <HorizontalContainer>
              <Availability day="Wednesday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Thursday</h4>
            <HorizontalContainer>
              <Availability day="Thursday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Friday</h4>
            <HorizontalContainer>
              <Availability day="Friday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Saturday</h4>
            <HorizontalContainer>
              <Availability day="Saturday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
          <Day>
            <h4>Sunday</h4>
            <HorizontalContainer>
              <Availability day="Sunday" start_time={1} end_time={2} />
              <PostAvailability day="Monday" />
            </HorizontalContainer>
          </Day>
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
