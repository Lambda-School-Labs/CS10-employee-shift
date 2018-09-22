import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUser } from "../../store/User/actions.js";

import { SettingsContainer, FormItem, Form } from "../../styles/Settings.js";

class Settings extends Component {
  state = {
    email: "",
    phone: "",
    text_enabled: true,
    email_enabled: true,
    old_password: "",
    new_password: "",
  };

  submitForm = event => {
    event.preventDefault();
    this.props.updateUser(
      this.state.email,
      this.state.phone,
      this.state.text_enabled,
      this.state.email_enabled,
      this.state.old_password,
      this.state.new_password
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
              value={this.state.phone}
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
              value={this.state.new_password}
              onChange={this.inputChangeHandler}
              name="new_password"
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
  return {
    errors,
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
      new_password
    ) => {
      return dispatch(
        updateUser(
          email,
          phone,
          text_enabled,
          email_enabled,
          old_password,
          new_password
        )
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
