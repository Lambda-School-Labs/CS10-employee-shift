import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Icon, Segment, SegmentGroup, Image, Label } from 'semantic-ui-react'


import { getAllProfiles } from "../../store/Profile/actions";
import { getAvailabilities } from "../../store/Availability/action";
import { getRequestOffs } from "../../store/requestOff/action"

import EmployeeCard from "../Organisms/EmployeeCard.js";
import NewEmployee from "../Organisms/NewEmployee.js";

import { EmployeesContainer } from "../../styles/Employees.js";



class Employees extends Component {
  state = { 
    activeIndex: 0
  }


  handleTitleClick = (e, itemProps) => {
    const { index } = itemProps;
    const { activeIndex } = this.state;

    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    this.props.getAllProfiles();
    this.props.getAvailabilities();
    this.props.getRequestOffs();
  };

  render() {
    return (
        <EmployeesContainer>
          <SegmentGroup>
            {this.props.allProfiles.map( (profile, index) => 
              <Segment key={index}>
                <Accordion>
                  <Accordion.Title active={ this.state.activeIndex === index} index={index} onClick={this.handleTitleClick}>
                    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' avatar /> */}
                    <Label color='blue'>
                      <Icon name='dropdown' />
                      {profile.user.first_name} {profile.user.last_name}
                      <Label.Detail>{profile.user.username}</Label.Detail>
                    </Label>
                  </Accordion.Title>
                  <Accordion.Content active={this.state.activeIndex === index} children={
                      <EmployeeCard
                        profile={profile} 
                        allAvailabilities={this.props.allAvailabilities}
                        allRequestOffs={this.props.allRequestOffs} />
                    }>
                  </Accordion.Content>
                </Accordion>
              </Segment>    
            )}
          </SegmentGroup>
          {/* <NewEmployee /> */}
        </EmployeesContainer>
    );
  };
};

// TODO: Use correct actions and state

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    allProfiles: state.profile.allProfiles,
    allAvailabilities: state.availability.allAvailabilities,
    allRequestOffs: state.requestOff.allRequestOffs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProfiles: () => {
      return dispatch(getAllProfiles());
    },
    getAvailabilities: () => {
      return dispatch(getAvailabilities());
    },
    getRequestOffs: () => {
      return dispatch(getRequestOffs());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
