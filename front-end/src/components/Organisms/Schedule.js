import React, { Component } from "react";
import { connect } from "react-redux";

import { getShifts } from "../../store/Shift/actions.js";

import ScheduleDay from "../Molecules/ScheduleDay.js";

class Schedule extends Component {
  // DEVELOPMENT TEST to get data REMOVE ME
  componentDidMount() {
    this.props.getShifts();
  }

  render() {
    return (
      <div style={{ width: "100%", display: "flex" }}>
        {/*   
//       //   <table className="scheduler" style={{ width: "100%" }}>
//       //     <thead>
//       //       <tr>
//       //         <td colSpan="2">IMMA HEADER</td>
//       //       </tr>
//       //     </thead>
//       //     <tbody>
//       //       <tr>
//       //         <td style={{ width: "100px", verticalAlign: "top" }}>
//       //           <div className="resource-view">
//       //             <div
      //               style={{
      //                 overflow: "hidden",
      //                 borderBottom: "1px solid #e9e9e9",
      //                 height: "100px",
      //               }}
      //             >
      //               <div
      //                 style={{
      //                   overflowX: "scroll",
      //                   overflowY: "hidden",
      //                   margin: `0px 0px -10px`,
      //                 }}
      //               >
      //                 <table className="resource-table">
      //                   <thead>
      //                     <tr style={{ height: "10px" }}>
      //                       <th className="header3-text">RESOURCE</th>
      //                     </tr>
      //                   </thead>
      //                 </table>
      //               </div>
      //             </div>
      //             <div
      //             // style={resourceContentStyle}
      //             // ref={this.schedulerResourceRef}
      //             // onMouseOver={this.onSchedulerResourceMouseOver}
      //             // onMouseOut={this.onSchedulerResourceMouseOut}
      //             // onScroll={this.onSchedulerResourceScroll}
      //             >
      //               {/* ResourceView */}
        {/* //             </div>
      //           </div>
      //         </td>
      //         <td>
      //           <div
      //             className="scheduler-view"
      //             style={{
      //               width: "10px",
      //               verticalAlign: "top",
      //             }}
      //           >
      //             <div
      //               style={{
      //                 overflow: "hidden",
      //                 borderBottom: "1px solid #e9e9e9",
      //                 height: "10px",
      //               }}
      //             >
      //               <div
      //                 style={{
      //                   overflowX: "scroll",
      //                   overflowY: "hidden",
      //                   margin: `0px 0px -10px`,
      //                 }}
      //                 // ref={this.schedulerHeadRef}
      //                 // onMouseOver={this.onSchedulerHeadMouseOver}
      //                 // onMouseOut={this.onSchedulerHeadMouseOut}
      //                 // onScroll={this.onSchedulerHeadScroll}
      //               >
      //                 <div
      //                   style={{
      //                     paddingRight: `10px`,
      //                     width: "10px",
      //                   }}
      //                 >
      //                   <table className="scheduler-bg-table">
      //                     {/* <HeaderView {...this.props} /> */}
        {/* //                   </table> */}
        {/* //                 </div>
      //               </div>
      //             </div>
      //             <div
      //             // style={schedulerContentStyle}
      //             // ref={this.schedulerContentRef}
      //             // onMouseOver={this.onSchedulerContentMouseOver}
      //             // onMouseOut={this.onSchedulerContentMouseOut}
      //             // onScroll={this.onSchedulerContentScroll}
      //             >
      //               <div style={{ width: "10px", height: "10px" }}>
      //                 <div className="scheduler-content">
      //                   <table className="scheduler-content-table">
      //                     <tbody>Events</tbody>
      //                   </table>
      //                 </div>
      //                 <div className="scheduler-bg">
      //                   <table
      //                     className="scheduler-bg-table"
      //                     style={{ width: "10px" }}
      //                   >
      //                     {/* <BodyView {...this.props} /> */}
        {/* //                   </table> */}
        {/* //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </td>
      //       </tr>
      //     </tbody>
      //   </table> */}

        <ScheduleDay name={"Monday"} date={"X/X/X"} />
        <ScheduleDay name={"Tuesday"} date={"X/X/X"} />
        <ScheduleDay name={"Wednesday"} date={"X/X/X"} />
        <ScheduleDay name={"Thursday"} date={"X/X/X"} />
        <ScheduleDay name={"Friday"} date={"X/X/X"} />
        <ScheduleDay name={"Saturday"} date={"X/X/X"} />
        <ScheduleDay name={"Sunday"} date={"X/X/X"} />
      </div>
    );
  }
}

// Holds 3 weeks of shifts
const mapStateToProps = state => {
  return {
    allShifts: state.shift.allShifts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShifts: () => {
      return dispatch(getShifts());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
