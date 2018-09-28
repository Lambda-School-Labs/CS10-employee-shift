import React from "react";

import {
  BackgroundHolder
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import bgPicture from "../../styles/background/background.png";



const LandingLearning = () => {
  return (
    <div>
      <BackgroundHolder>
          <div className="frameContainer">
           <img class="frame1" src={bgPicture}></img>
           <h3 class="frame1Text">When I Work was built to serve the employee 
               scheduling and communication needs of workplaces
                across a wide range of industries. 
                
                We make scheduling staff easy for coffee shops, restaurants, customer service departments, 
                retail shops, colleges, healthcare organizations, nonprofits, and many, many other types of workplaces. 
                If you have hourly employees, we can help make scheduling, communication, 
                and collaboration easier for you and your team.
            </h3>
          </div>
      </BackgroundHolder>
    </div>
  )
};

export default LandingLearning;