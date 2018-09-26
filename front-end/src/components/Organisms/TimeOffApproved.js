import React, { Component } from "react";
import { connect } from "react-redux";

import { getRequestOffs } from "../../store/requestOff/action.js";

import { OrganismContainer } from "../../styles/Dashboard.js";


class TimeOffApproved extends Component {
  state = {
    start_datetime: "2018-10-30T00:00:00",
    end_datetime: "2018-10-30T00:00:00"
  };

  componentDidMount() {
    this.props.getRequestOffs();
  }

  render() {
    return (
      <OrganismContainer>
        <h1>TimeOffApproved</h1>
        { this.props.allRequestOffs.map((requestOff, index) => 
            (requestOff.status === "A") &&
              <div key={index}>
                <div>----</div>
                <div>Start : {requestOff.start_datetime} </div>
                <div>End : {requestOff.end_datetime} </div>
              </div>
          )
        }
      </OrganismContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    allRequestOffs: state.requestOff.allRequestOffs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRequestOffs: () => {
      return dispatch(getRequestOffs());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeOffApproved);