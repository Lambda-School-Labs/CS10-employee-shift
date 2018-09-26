import React, { Component } from "react";
import { connect } from "react-redux";

import { getShifts } from "../../store/Shift/actions.js";

import { OrganismContainer } from "../../styles/Dashboard.js";


class AssignedShift extends Component {
  state = {
    start_datetime: "2018-10-30T00:00:00",
    end_datetime: "2018-10-30T00:00:00"
  };

  componentDidMount() {
    this.props.getShifts();
  }

  render() {
    return (
      <OrganismContainer>
        <h1>Assigned Shifts</h1>
        { this.props.allShifts.map((allShifts, index) => 
            (allShifts.is_open === false) &&
              <div key={index}>
                <div>----</div>
                <div>Start : {allShifts.start_datetime} </div>
                <div>End : {allShifts.end_datetime} </div>
                <div>Notes : {allShifts.notes} </div>
              </div>
          )
        }
      </OrganismContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    allShifts: state.shift.allShifts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShifts: () => {
      return dispatch(getShifts());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignedShift);