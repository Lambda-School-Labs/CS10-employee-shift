import React, { Component } from "react";
import { FooterStyles } from "../../styles/Landing.js";
import { Route, Link } from "react-router-dom";
import Twitter from "../Molecules/TwitterIcon.js";
import Facebook from "../Molecules/FacebookIcon.js";

import "../../styles/LandingRef.css";


class LandingFooter extends Component {
    render(){
        return (
            <div>
            <FooterStyles>
                <footer className="landingFooter">
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
                </footer>
            </FooterStyles>
            </div>
        );
    }
}

export default LandingFooter;