import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Image, Transition } from 'semantic-ui-react';
import {
  LandingNavBar,
  ScheduleButtonButton,
  ScheduleButton,
  FooterStyles,
  BackgroundHolder,
  WelcomeSide,
  WelcomeH1,
  WelcomeLogo,
  WelcomeHolder,
  circle_img,
  Circle_div,
  Test
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import talkingLogo from "../../styles/logos/talking.png";

class Landing_Card extends Component {
    state = {visible: false}

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }


    render(){
        const { visible } = this.state
        return (
            <div className="container">
            <BackgroundHolder>
                <WelcomeHolder>
                <WelcomeSide>
                <WelcomeH1>Welcome</WelcomeH1>
                <p>Click bla bla bla to learn more</p>
                <ScheduleButton>
                    <Link to="/calendar">
                    <ScheduleButtonButton className="btn">Welcome</ScheduleButtonButton>
                    </Link>
                </ScheduleButton>
                </WelcomeSide>
                
                <Circle_div className = "circle_img1 fade">
                    {/* <Transition visible={visible} animation='scale' duration={500}>
                        <img className="visible" src={talkingLogo}/>
                    </Transition> */}
                    <circle_img>
                        <img src={talkingLogo}/>
                    </circle_img>
                </Circle_div>
                <WelcomeLogo>
                <LandingNavBar>
                <Link to="/signup">
                    <button>Sign up</button>
                </Link>
                <Link to="/signin">
                    <button>Sign in</button>
                </Link>
                </LandingNavBar>
                </WelcomeLogo>
                </WelcomeHolder>
            </BackgroundHolder>
            
            <FooterStyles>
                <footer>
                <span>Copyright 2018</span>
                </footer>
            </FooterStyles>
            </div>
        );
}
    
}

export default Landing_Card;