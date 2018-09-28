import React from "react";

import {
  BackgroundHolder,
  FooterStyles,
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import bgPicture from "../../styles/background/background.png";



const LandingLearning = () => {
  return (
    <div>
      <BackgroundHolder>
          <div>
           <img class="frame1" src={bgPicture}></img>
          </div>
      </BackgroundHolder>
    </div>
  )
};

export default LandingLearning;