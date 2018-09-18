import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Sidebar from "../Organisms/SideNav.js";

import "../../styles/sidebar.css";
import "../../styles/billing.css";

class Billing extends Component {
  state = {
    CC: "",
    EXP: "",
    CCV: "",
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(event.target.value);
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div classname="main-container">
          <div>
            <form onSubmit={this.submitHandler}>
              <div className="card_body">
                <div>
                  <h3>Credit Card</h3>
                  <input
                    value={this.state.CC}
                    onChange={this.inputChangeHandler}
                    name="CC"
                    type="text"
                  />
                </div>
              </div>
              <div className="card_body">
                <div>
                  <h3>Expires on</h3>
                  <input
                    value={this.state.EXP}
                    onChange={this.inputChangeHandler}
                    name="EXP"
                    type="text"
                  />
                </div>
              </div>
              <div className="card_body">
                <div>
                  <h3>CCV</h3>
                  <input
                    value={this.state.CCV}
                    onChange={this.inputChangeHandler}
                    name="CCV"
                    type="text"
                  />
                </div>
              </div>
              <button className="billing_btn">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
