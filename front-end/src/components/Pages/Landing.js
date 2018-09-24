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

const Landing = () => {
  // TODO: Restyle all this
  return (
    <div className="container">
      <BackgroundHolder>
        <LandingNavBar>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </LandingNavBar>
        <WelcomeHolder>
        <WelcomeSide>
          <WelcomeH1>Welcome</WelcomeH1>
          <p>Click bla bla bla to learn more</p>
        </WelcomeSide>
        <WelcomeLogo></WelcomeLogo>
        </WelcomeHolder>
      </BackgroundHolder>
      <ScheduleButton>
        <Link to="/calendar">
          <ScheduleButtonButton>Schedule Now</ScheduleButtonButton>
        </Link>
      </ScheduleButton>
      <FooterStyles>
        <footer>
          <span>Copyright 2018</span>
        </footer>
      </FooterStyles>
    </div>
  );
};

export default Landing;
