import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUser } from "../../store/User/actions.js";

import { SettingsContainer, FormItem, Form } from "../../styles/Settings.js";

class Settings extends Component {
  state = {
    email: "",
    phone_number: "",
    text_enabled: false,
    email_enabled: false,
    old_password: "",
    password: "",
    re_password: ""
  };
  componentDidMount() {
    this.setState({
      email: this.props.email,
      phone_number: this.props.phone_number,
      email_enabled: this.props.email_enabled,
      text_enabled: this.props.text_enabled
    })
  }

  submitForm = event => {
    event.preventDefault();
    this.props.updateUser(
      this.state.email,
      this.state.phone_number,
      this.state.text_enabled,
      this.state.email_enabled,
      this.state.old_password,
      this.state.password,
      this.state.re_password
    );
  };

  inputChangeHandler = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SettingsContainer>
        <Form onSubmit={this.submitForm}>
          <FormItem>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={this.inputChangeHandler}
              name="email"
              type="text"
            />
          </FormItem>
          <FormItem>
            <label>Phone</label>
            <input
              value={this.state.phone_number}
              onChange={this.inputChangeHandler}
              name="phone"
              type="text"
            />
          </FormItem>
          <FormItem>
            <label>Emails?</label>
            <input
              checked={this.state.text_enabled}
              onChange={this.inputChangeHandler}
              type="checkbox"
              name="text_enabled"
            />
          </FormItem>
          <FormItem>
            <label>Texts?</label>
            <input
              checked={this.state.email_enabled}
              onChange={this.inputChangeHandler}
              type="checkbox"
              name="email_enabled"
            />
          </FormItem>
          <FormItem>
            <label>Old Password</label>
            <input
              value={this.state.old_password}
              onChange={this.inputChangeHandler}
              name="old_password"
              type="password"
            />
          </FormItem>
          <FormItem>
            <label>New Password</label>
            <input
              value={this.state.password}
              onChange={this.inputChangeHandler}
              name="password"
              type="password"
            />
          </FormItem>
          <FormItem>
            <label>Retype Password</label>
            <input
              value={this.state.re_password}
              onChange={this.inputChangeHandler}
              name="re_password"
              type="password"
            />
          </FormItem>
          <button type="submit">Save</button>
        </Form>
      </SettingsContainer>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.user.errors) {
    errors = Object.keys(state.user.errors).map(field => {
      return { field, message: state.user.errors[field] };
    });
  }

  const userProfile = state.user.currentUser;
  //TODO: check for empty profile - error
  return {
    errors,
    
    email: userProfile.user.email,
    phone_number: userProfile.phone_number,
    email_enabled: userProfile.email_enabled,
    text_enabled: userProfile.text_enabled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (
      email,
      phone,
      text_enabled,
      email_enabled,
      old_password,
      password,
      re_password
    ) => {
      return dispatch(
        updateUser(
          email,
          phone,
          text_enabled,
          email_enabled,
          old_password,
          password,
          re_password
        )
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
