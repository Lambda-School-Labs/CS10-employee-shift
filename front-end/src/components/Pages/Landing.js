import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingRef.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="background-holder">
        <div className="nav-bar">
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </div>
        <span className="welcome-text">Welcome</span>
      </div>
      <div className="schedule-button">
        <Link to="/calendar">
          <button className="button-button">Schedule Now</button>
        </Link>
      </div>
      <div className="footer">
        <footer>
          <span>Copyright 2018</span>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
