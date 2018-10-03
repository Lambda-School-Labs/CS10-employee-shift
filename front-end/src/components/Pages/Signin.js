import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { Segment, Input, Button, Form } from "semantic-ui-react";
import { Container, FormItem, Header } from "../../styles/signin.js";

import { signin } from "../../store/User/actions.js";

class Signin extends Component {
  state = {
    username: "",
    password: "",
    validated: false,
    errors: {}
  };

  handleValidation(){
      let errors = {};
      let formIsValid = true;

      //Username
      if(!this.state.username){
        formIsValid = false;
        errors["username"] = "Username is required";
      }

      if(this.state.username){
        if(!this.state.username.match(/^[a-zA-Z1-9]+$/)){
            formIsValid = false;
            errors["username"] = "Only letters and numbers";
        }        
      }

      if(!this.state.password){
        formIsValid = false;
        errors["password"] = "Password is required";
      }

      // //Email
      // if(!fields["email"]){
      //   formIsValid = false;
      //   errors["email"] = "Cannot be empty";
      // }

    //   if(typeof fields["email"] !== "undefined"){
    //     let lastAtPos = fields["email"].lastIndexOf('@');
    //     let lastDotPos = fields["email"].lastIndexOf('.');

    //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
    //         formIsValid = false;
    //         errors["email"] = "Email is not valid";
    //       }
    // }  

    this.setState({errors: errors});
    return formIsValid;
  }

  submitHandler = e => {
    e.preventDefault();
    if(this.handleValidation())
      this.props.signin(this.state.username, this.state.password);
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log("render login : ", this.props.errors);
    if (this.props.isAuthenticated && this.props.user.currentUser) {
      if (this.props.user.currentUser.user.groups[0].name === "manager")
        return <Redirect to="/calendar" />;
      else return <Redirect to="/dashboard" />;
    } else
      return (
        <Container>
          <Segment raised padded="very">
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Header>Welcome back!</Header>
              {this.props.errors && <span style={{color: "red"}}>{this.props.errors.error_description}</span>}
              <Form onSubmit={this.submitHandler}>
                <FormItem>
                  <h3>Username</h3>
                  <Input
                    fluid
                    value={this.state.username}
                    onChange={this.inputChangeHandler}
                    name="username"
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                  />
                  <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                </FormItem>
                <FormItem>
                  <h3>Password</h3>
                  <Input
                    fluid
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />
                  <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                </FormItem>
                <FormItem>
                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onClick={this.submitHandler}
                  >
                    Login
                  </Button>
                </FormItem>
              </Form>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                New user? <Link to="/signup">Register</Link>
              </p>
            </div>
          </Segment>
        </Container>
      );
  }
}

const mapStateToProps = state => {
  // console.log('erroirrrrrrrr',state.user.errors);
  // let errors = [];
  // if (state.user.errors) {
  //   console.log('erroirrrrrrrr',state.user.errors);
  //   errors = Object.keys(state.user.errors).map(field => {
  //     return { field, message: state.user.errors[field] };
  //   });
  // }
  return {
    errors: state.user.errors,
    isAuthenticated: state.user.isAuthenticated,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (username, password) => {
      return dispatch(signin(username, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
