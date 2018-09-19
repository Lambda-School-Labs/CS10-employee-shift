import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingRef.css";
import Modal from "../Organisms/modal";

const Landing = () => {
  //TODO: Restyle all this
  return (
    <div className="container">
      <div className="background-holder">
        <div className="nav-bar">
          <Link to="/signup">
            <button
              style={{
                height: "50px",
                width: "100px",
                border: "none",
                fontSize: "24px",
              }}
            >
              Sign up
            </button>
          </Link>
          <Link to="/signin">
            <button
              style={{
                height: "50px",
                width: "100px",
                border: "none",
                fontSize: "24px",
              }}
            >
              Sign in
            </button>
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              height: "30px",
              width: "50px",
              backgroundColor: "red",
              position: "absolute",
              top: "35px",
            }}
          />
          <div
            style={{
              height: "200px",
              width: "200px",
              backgroundColor: "yellow",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <p>Note to self:</p> <p>Under Construction</p>
            <Modal />
          </div>
        </div>
      </div>
      <div className="schedule-button">
        <Link to="/calendar">
          <button
            className="button-button"
            style={{
              height: "110px",
              width: "340px",
              textDecoration: "underline",
            }}
          >
            Schedule Now
          </button>
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
