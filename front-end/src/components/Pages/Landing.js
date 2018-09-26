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
import Landing_Detail from "../Organisms/landing_detail.js"




const Landing = () => {
  return (
    <div>
      <Landing_Card/>
      <Landing_Detail/>
    </div>
  )
};

export default Landing;
