import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Organisms/modal";
import { LandingNavBar,
  ScheduleButtonButton, 
  ScheduleButton, 
  FooterStyles, 
  BackgroundHolder, 
  WelcomeText, } from "../../styles/Landing.js";

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
        <WelcomeText>
            <p>Note to self:</p> <p>Under Construction</p>
            </WelcomeText>
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
