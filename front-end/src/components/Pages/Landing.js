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

import Landing_Card from "../Organisms/landing_card.js"



const Landing = () => {
  return (
    <div>
      <Landing_Card/>
    </div>
  )
};

export default Landing;
