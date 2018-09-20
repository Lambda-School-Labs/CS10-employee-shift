import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { TopNav_Container, Breadcrumb } from "../../styles/Template--main.js";

const TopNav = props => {
  const clickSignout = e => {
    props.signout();
  };

  return (
    <TopNav_Container>
      <Breadcrumb>
        <Link to="/">Home</Link>
        <p> > {props.component}</p>
      </Breadcrumb>
      <Link to="/" onClick={clickSignout}>
        Sign Out
      </Link>
    </TopNav_Container>
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
