import React, { Component } from "react";

import { SettingsContainer, FormItem, Form } from "../../styles/Signin.js";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      old_password: "",
      new_password: "",
    };
  }

  inputChangeHandler = event => {
    console.log("state text", event.target);
    const { name, value } = event.target;
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
              name="email"
              type="text"
            />
          </FormItem>
          <FormItem>
            <label>Emails?</label>
            <input type="checkbox" name="msg" value="Email" />
            <FormItem>
              <label>Texts?</label>
              <input type="checkbox" name="msg" value="text" />
            </FormItem>
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

export default Settings;
