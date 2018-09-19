import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signout } from "../../store/User/actions.js";

const TopNav = props => {
  const clickSignout = e => {
    props.signout();
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 5%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <p> > {props.component}</p>
      </div>
      <Link to="/" onClick={clickSignout}>
        Sign Out
      </Link>
    </div>
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
