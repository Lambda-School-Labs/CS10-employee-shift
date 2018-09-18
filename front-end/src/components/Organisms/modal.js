import React, { Component } from "react";
import "../../styles/modal.css";

function Open() {
    let model = Identify();
    model.style.display = "block";
}

function Close() {
    let model = Identify();
    model.style.display = "none";
}

function Identify() {
    let model = document.getElementsByClassName("modal");
    model = model[0];
    return model;
}

class Modal extends Component {

    render() {
        return (
            <div className="modal-container">
                <button onClick={Open}>Popup</button>
                <div className="modal">
                    <div className="modal-inner">
                        <span>Hours of Operation</span>
                        <form action="">
                        Monday: <input type="text" name="Monday" placeholder="9am-5pm" /><br />
                        Tuesday: <input type="text" name="Tuesday" placeholder="9am-5pm" /><br />
                        Wensday: <input type="text" name="Wensday" placeholder="9am-5pm" /><br />
                        Thursday: <input type="text" name="Thursday" placeholder="9am-5pm" /><br />
                        Friday: <input type="text" name="Friday" placeholder="9am-5pm" /><br />
                        Saturday: <input type="text" name="Saturday" placeholder="9am-5pm" /><br />
                        Sunday: <input type="text" name="Sunday" placeholder="9am-5pm" /><br />
                        <input type="submit" value="submit"></input>
                        </form>
                        <button onClick={Close}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;