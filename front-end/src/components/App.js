import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import { getUser } from "../store/User/actions.js";

import "../styles/App.css";

import {
  Billing,
  Calendar,
  Dashboard,
  Employees,
  Landing,
  Settings,
  Signin,
  Signup,
} from "./Pages";

import Calendar_test from "./Pages/test_pages/Calendar_test.js";
import SideNav from "./Pages/test_pages/SideNav.js";


class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  PrivateRoute = ({ component: ChildComponent, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (this.props.user.isLoading) {
            // TODO: better loading screen, seperate component
            return <em>Loading...</em>;
          } else if (!this.props.user.isAuthenticated) {
            return <Redirect to="/signin" />;
          } else {
            return <ChildComponent {...props} />;
          }
        }}
      />
    );
  };

  render() {
    const { PrivateRoute } = this;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute exact path="/billing" component={Billing} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/employees" component={Employees} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            {/*Dev routes */}
            <Route exact path="/dev_month" component={Calendar_test} />
            {/* <Route exact path="/dev_sidenav" component={SideNav} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      return dispatch(getUser());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
