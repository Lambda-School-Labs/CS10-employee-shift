import React from "react";

import {
  BackgroundHolder
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import bgPicture from "../../styles/background/background.png";



const LandingLearning = () => {
  return (
    <div>
      <div className="frame1TextContainer">
        <h2 className="frameHeading">Employee Scheduling Software for Your Industry</h2>
        <p className="frameText">When Exact was built to serve the employee 
          scheduling and communication needs of workplaces
            across a wide range of industries. 
            
            We make scheduling staff easy for coffee shops, restaurants, customer service departments, 
            retail shops, colleges, healthcare organizations, nonprofits, and many, many other types of workplaces. 
            If you have hourly employees, we can help make scheduling, communication, 
            and collaboration easier for you and your team.
        </p>
      </div>

      <div className="frameContainer">
        <img className="frame1" src={bgPicture} />
        <a href="#">
          <div className="frame2">
            <h2 className="frame2Heading">Employee Scheduling Software. Reinvented.</h2>
            <div className="cta-button">
              <p>START SCHEDULING</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
};

export default LandingLearning;