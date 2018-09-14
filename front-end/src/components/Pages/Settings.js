import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import "../../styles/settings.css";

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
      <Card className="card">
        <form onSubmit={this.submitForm}>
          <CardBody className="card_body">
            <div>
              <label>Email</label>
              <input
                value={this.state.email}
                onChange={this.inputChangeHandler}
                name="email"
                type="text"
              />
            </div>
            <div>
              <label> Phone</label>
              <input
                value={this.state.phone}
                onChange={this.inputChangeHandler}
                name="email"
                type="text"
              />
            </div>

            <label>email</label>
            <input type="checkbox" name="msg" value="Email" />
            <label>text</label>
            <input type="checkbox" name="msg" value="text" />

            <div>
              <label>Old Password</label>
              <input
                value={this.state.old_password}
                onChange={this.inputChangeHandler}
                name="old_password"
                type="password"
              />
            </div>
            <div>
              <label>New Password</label>
              <input
                value={this.state.new_password}
                onChange={this.inputChangeHandler}
                name="new_password"
                type="password"
              />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </CardBody>
        </form>
      </Card>
    );
  }
}

export default Settings;