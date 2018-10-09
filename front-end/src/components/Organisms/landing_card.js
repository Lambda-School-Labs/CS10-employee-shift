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
  CircleDiv,
  Circles,
  CircleImg,
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
                        <WelcomeH1>Build your Work Schedule in Minutes.</WelcomeH1>
                        {/* <WelcomeText>
                            <p>Build your Work Schedule in Minutes.</p>
                        </WelcomeText> */}
                        <ScheduleButton>
                            <Link to="/signup">
                                <ScheduleButton className="btn">Schedule Now</ScheduleButton>
                            </Link>
                        </ScheduleButton>
                    </WelcomeSide>
                    <WelcomeLogo>
                        <LandingNavBar>
                            <NavButton>
                                <Link to="/signup">
                                    <NavButton className="signup_btn">Sign up</NavButton>
                                </Link>
                            </NavButton>
                            <NavButton>
                                <Link to="/signin">
                                    <NavButton className="signin_btn">Sign in</NavButton>
                                </Link>
                            </NavButton>
                        </LandingNavBar>
                        <CircleDiv className="fade_1">
                            <Circles>
                                <CircleImg src={talkingLogo}/>
                                <CircleImg src={women}/>
                                <CircleImg src={chat_at_table}/>
                                <CircleImg src={coding_at_work}/>
                                <CircleImg src={working_at_comp}/>
                                <CircleImg src={working_solo}/>
                            </Circles>
                        </CircleDiv>
                    </WelcomeLogo>
                </WelcomeHolder>
            </div>
        );
    }
}

export default Landing_Card;