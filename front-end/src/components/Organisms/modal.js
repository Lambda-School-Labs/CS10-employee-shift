import React, { Component } from "react";
import { Modals, ModalInner } from "../../styles/modal";

function Open() {
  let model = document.getElementById("pop-up");
  model.style.display = "block";
}

function Close() {
  let model = document.getElementById("pop-up");
  model.style.display = "none";
}

class Modal extends Component {
  render() {
    return (
      <div className="modal-container">
        <button onClick={Open}>Popup</button>
        <Modals id="pop-up">
          <ModalInner>
            <span>Hours of Operation</span>
            <form action="">
              Monday: <input type="text" name="Monday" placeholder="9am-5pm" />
              <br />
              Tuesday:{" "}
              <input type="text" name="Tuesday" placeholder="9am-5pm" />
              <br />
              Wensday:{" "}
              <input type="text" name="Wensday" placeholder="9am-5pm" />
              <br />
              Thursday:{" "}
              <input type="text" name="Thursday" placeholder="9am-5pm" />
              <br />
              Friday: <input type="text" name="Friday" placeholder="9am-5pm" />
              <br />
              Saturday:{" "}
              <input type="text" name="Saturday" placeholder="9am-5pm" />
              <br />
              Sunday: <input type="text" name="Sunday" placeholder="9am-5pm" />
              <br />
              <input type="submit" value="submit" />
            </form>
            <button onClick={Close}>Close</button>
          </ModalInner>
        </Modals>
      </div>
    );
  }
}

export default Modal;
