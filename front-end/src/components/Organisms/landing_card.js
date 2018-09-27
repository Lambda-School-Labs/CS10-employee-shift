import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  LandingNavBar,
  ScheduleButtonButton,
  ScheduleButton,
  BackgroundHolder,
  WelcomeSide,
  WelcomeH1,
  WelcomeLogo,
  WelcomeHolder,
  WelcomeText,
  circle_img,
  Circle_div,
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import talkingLogo from "../../styles/logos/talking.png";
import women from "../../styles/logos/3_women.png";
import chat_at_table from "../../styles/logos/chat_at_table.png";
import coding_at_work from "../../styles/logos/coding_at_work.png";
import working_at_comp from "../../styles/logos/working_at_comp.png";
import working_solo from "../../styles/logos/working_solo.png";



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
                < WelcomeText>
                    <p>Build your Work Schedule in Minutes.</p>
                </WelcomeText>
                <ScheduleButton>
                    <Link to="/calendar">
                    <ScheduleButtonButton className="btn">Welcome</ScheduleButtonButton>
                    </Link>
                </ScheduleButton>
                </WelcomeSide>
                
                <Circle_div className="fade_1">
                    <circle_img>
                        <img src={talkingLogo}/>
                    </circle_img>
                </Circle_div>
                <Circle_div className="fade_2">
                    <circle_img>
                        <img src={women}/>
                    </circle_img>
                </Circle_div>
                <Circle_div className="fade_3">
                    <circle_img>
                        <img src={chat_at_table}/>
                    </circle_img>
                </Circle_div>
                <Circle_div className="fade_4">
                    <circle_img>
                        <img src={coding_at_work}/>
                    </circle_img>
                </Circle_div>
                <Circle_div className="fade_5">
                    <circle_img>
                        <img src={working_at_comp}/>
                    </circle_img>
                </Circle_div>
                <Circle_div className="fade_6">
                    <circle_img>
                        <img src={working_solo}/>
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
            </div>
        );
}
    
}

export default Landing_Card;