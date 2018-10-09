import React, { Component } from "react";
import { 
    FooterStyles, 
    LandingFoot
    } from "../../styles/Landing.js";
import Twitter from "../Molecules/TwitterIcon.js";
import Facebook from "../Molecules/FacebookIcon.js";

//import "../../styles/LandingRef.css";


class LandingFooter extends Component {
    render(){
        return (
            <div>
            <FooterStyles>
                <LandingFoot>
                <span className="copyright">Copyright 2018</span>
                <div className="LandingLogo">
                    <a href="http://twitter.com">
                        <Twitter/>
                    </a> 
                </div> 
                <div className="LandingLogo">
                    <a href="http://facebook.com">
                        <Facebook/>
                    </a>
                </div> 
                </LandingFoot>
            </FooterStyles>
            </div>
        );
    }
}

export default LandingFooter;