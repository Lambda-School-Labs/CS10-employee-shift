import React from "react";
import TimeKeeper from "react-timekeeper";

class TimePicker extends React.Component {
  state = {
    time: "2:50 pm",
    // TODO: get time from props
  };
  handleTimeChange(newTime) {
    this.setState({ time: newTime.formatted });
  }
  render() {
    this.handleTimeChange = this.handleTimeChange.bind(this);
    return (
      <TimeKeeper
        time={this.state.time}
        switchToMinuteOnHourSelect={true}
        onChange={this.handleTimeChange}
        config={{
          TIMEPICKER_BACKGROUND: "white",
          // TODO: Add global colors
          DONE_BUTTON_COLOR: "#64c9f1",
          DONE_BUTTON_BORDER_COLOR: "#ededed",
        }}
        onDoneClick={() => {
          this.props.submitTimeChange(this.state.time);
          this.props.handleClose();
        }}
      />
    );
  }
}

export default TimePicker;
