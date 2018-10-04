import React from "react";

import { BackgroundHolder } from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

import Accountability from "../../styles/icons/benefits-accountability.png";
import Changes from "../../styles/icons/benefits-changes.png";
import Time from "../../styles/icons/benefits-time.png";

const divStyle = {
  // backgroundColor: '#b8b8b8'
  backgroundColor: "#e6e6e6",
};

const Landing_Details = () => {
  return (
    <div>
      <BackgroundHolder style={divStyle}>
        <div className="top-container">
          <h1 className="font-title">
          The Benefits of MyShifts
          </h1>
        </div>

        <div className="mid-container">
          <div className="textBox">
            <img className="ouricon" src={Time} alt="time" />
            <h2 className="vertical title-text">
              Spend More Time Growing Your Business
            </h2>
            <h6 className="vertical inner-text">
              Spend more time working to grow your business and less time
              fighting fires.
            </h6>
          </div>

          <div className="textBox">
            <img
              className="ouricon"
              src={Accountability}
              alt="accountability"
            />
            <h2 className="vertical title-text">
              Increase Employee Accountability
            </h2>
            <h6 className="vertical inner-text">
              Reduce employee no-shows and improve accountability across your
              team by 25%
            </h6>
          </div>

          <div className="textBox">
            <img className="ouricon" src={Changes} alt="changes" />
            <h2 className="vertical title-text">Handle Changes with Ease</h2>
            <h6 className="vertical inner-text">
              Stop rebuilding schedules by reviewing and approving employee
              requests in real-time.
            </h6>
          </div>
        </div>
      </BackgroundHolder>
    </div>
  );
};

export default Landing_Details;
