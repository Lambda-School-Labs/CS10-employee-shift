import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signout } from "../../store/User/actions.js";

import { TopNavContainer, Breadcrumb } from "../../styles/Template--main.js";

const TopNav = props => {
  const clickSignout = () => {
    props.signout();
  };

  return (
    <TopNavContainer>
      <Breadcrumb>
        <Link to="/">Home</Link>
        <p> > {props.component}</p>
      </Breadcrumb>
      <Link to="/" onClick={clickSignout}>
        Sign Out
      </Link>
    </TopNavContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => {
      return dispatch(signout());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TopNav);
