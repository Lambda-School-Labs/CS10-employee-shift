import React from "react";

import Landing_Card from "../Organisms/landing_card.js"
import Landing_Detail from "../Organisms/landing_detail.js"
import Landing_Learning from '../Organisms/landingLearn'

const Landing = () => {
  return (
    <div>
      <Landing_Card />
      <Landing_Detail />
      <Landing_Learning />
      {/*<LandingFooter/>*/}
    </div>
  )
};

export default Landing;
