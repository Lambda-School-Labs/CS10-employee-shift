import React from "react";

import {
  BackgroundHolder,
  FooterStyles,
  textBox
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";

const divStyle = {
    backgroundColor : '#767676'
};


const Landing_Details = () => {
  return (
    <div>
      <BackgroundHolder style={divStyle}>
          <div className="top-container">
            <div className="title">
                 <h1 className="font-title">Employee Scheduling Software for Your Industry</h1>
            </div>
          </div> 
          <div className="mid-container">
            <div className="textBox">
             <h2>Spend More Time Growing Your Business</h2>
            </div>
            <div className="textBox">
              <h2>Increase Employee Accountability</h2>
            </div>
            <div className="textBox">
              <h2>Handle Changes with Ease</h2>
            </div>
          </div> 
      </BackgroundHolder>
       <FooterStyles>
                <footer>
                <span>Copyright 2018</span>
                </footer>
         </FooterStyles>
    </div>
  )
};

export default Landing_Details;