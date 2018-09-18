import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Sidebar from "../Organisms/SideNav.js";

import { Container, FormItem, Form } from "../../styles/signin.js";


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
        <Container>
        <div classname="main-container">
          <div>
            <Form onSubmit={this.submitHandler}>
              <div className="card_body">
              <FormItem>
                <div>
                  <h3>Credit Card</h3>
                  <input
                    value={this.state.CC}
                    onChange={this.inputChangeHandler}
                    name="CC"
                    type="text"
                  />
                </div>
                </FormItem>
              </div>
              <div className="card_body">
                <FormItem>
                    <div>
                      <h3>Expires on</h3>
                      <input
                        value={this.state.EXP}
                        onChange={this.inputChangeHandler}
                        name="EXP"
                        type="text"
                      />
                    </div>
                  </FormItem>
              </div>
              <div className="card_body">
                <FormItem>
                    <div>
                      <h3>CCV</h3>
                      <input
                        value={this.state.CCV}
                        onChange={this.inputChangeHandler}
                        name="CCV"
                        type="text"
                      />
                    </div>
                  </FormItem>
              </div>
              <button className="billing_btn">Buy Now</button>
            </Form>
          </div>
        </div>
        </Container>
      </div>
    );
  }
}

export default Billing;
