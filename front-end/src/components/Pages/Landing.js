import React from "react";

import Landing_Card from "../Organisms/landing_card.js";
import Landing_Detail from "../Organisms/landing_detail.js";
import LandingLearning from "../Organisms/landingLearn.js";
import LandingFooter from "../Organisms/landingFooter.js";

const Landing = () => {
  return (
    <div>
      <Landing_Card/>
      <Landing_Detail/>
      <LandingLearning/>
      <LandingFooter/>
    </div>
  )
};

export default Landing;

