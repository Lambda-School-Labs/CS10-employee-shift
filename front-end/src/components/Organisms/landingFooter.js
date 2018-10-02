import React, { Component } from "react";
import {
  FooterStyles
} from "../../styles/Landing.js";

import "../../styles/LandingRef.css";


class LandingFooter extends Component {
    render(){
        return (
            <div>
            <FooterStyles>
                <footer>
                    <span>Copyright 2018</span>
                </footer>
            </FooterStyles>
            </div>
        );
    }
}

export default LandingFooter;