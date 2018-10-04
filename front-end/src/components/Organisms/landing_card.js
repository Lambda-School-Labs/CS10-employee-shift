import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  LandingNavBar,
  ScheduleButton,
  WelcomeSide,
  MainLogo,
  WelcomeH1,
  WelcomeLogo,
  WelcomeHolder,
  WelcomeText,
  Circle_div,
  Circle_img,
  NavButton
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import main_logo from "../../styles/logos/employee_scheduler2.png";
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
                <WelcomeHolder>
                    <WelcomeSide>
                        <MainLogo src={main_logo} />
                        <WelcomeH1>Welcome</WelcomeH1>
                        <WelcomeText>
                            <p>Build your Work Schedule in Minutes.</p>
                        </WelcomeText>
                        <ScheduleButton>
                            <Link to="/calendar">
                                <ScheduleButton className="btn">Schedule Now</ScheduleButton>
                            </Link>
                        </ScheduleButton>
                    </WelcomeSide>
                    <WelcomeLogo>
                        <LandingNavBar>
                            <NavButton>
                                <Link to="/signup">
                                    <NavButton className="btn">Sign up</NavButton>
                                </Link>
                            </NavButton>
                            <NavButton>
                                <Link to="/signin">
                                    <NavButton className="btn">Sign in</NavButton>
                                </Link>
                            </NavButton>
                        </LandingNavBar>
                        <Circle_div className="fade_1">
                            <Circle_img src={talkingLogo}/>
                        </Circle_div>
                        <Circle_div className="fade_2">
                            <Circle_img src={women}/>
                        </Circle_div>
                        <Circle_div className="fade_3">
                            <Circle_img src={chat_at_table}/>
                        </Circle_div>
                        <Circle_div className="fade_4">
                            <Circle_img src={coding_at_work}/>
                        </Circle_div>
                        <Circle_div className="fade_5">
                            <Circle_img src={working_at_comp}/>
                        </Circle_div>
                        <Circle_div className="fade_6">
                            <Circle_img src={working_solo}/>
                        </Circle_div>
                    </WelcomeLogo>
                </WelcomeHolder>
            </div>
        );
    }
}

export default Landing_Card;