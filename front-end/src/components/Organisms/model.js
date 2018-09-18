import React, { Component } from "react";
import "../../styles/model.css";

function Open() {
    let model = Identify();
    model.style.display = "block";
}

function Close() {
    let model = Identify();
    model.style.display = "none";
}

function Identify() {
    let model = document.getElementsByClassName("model");
    model = model[0];
    return model;
}

class Model extends Component {
    
    render() {
        return (
            <div className="model-container">
                <button onClick={Open}>Popup</button>
                <div className="model">
                    <div className="model-inner">
                        <span>Inner content</span>
                        <p>some ws stuff here bla bla bla</p>
                        <button onClick={Close}>submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Model;