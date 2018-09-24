import React from "react";
import { Link } from "react-router-dom";
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
} from "../../styles/Landing.js";

const Landing_Card = () => {
    return (
    <div className="container">
      <BackgroundHolder>
        
        <WelcomeHolder>
        <WelcomeSide>
          <WelcomeH1>Welcome</WelcomeH1>
          <p>Click bla bla bla to learn more</p>
          <ScheduleButton>
            <Link to="/calendar">
              <ScheduleButtonButton>Welcome</ScheduleButtonButton>
            </Link>
          </ScheduleButton>
        </WelcomeSide>
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

export default Landing_Card;