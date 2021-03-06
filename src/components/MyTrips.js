import React from "react";
import "./MyTrips.css";
function MyTrips() {
  return (
    <div className="myTrips">
      <div className="row mainContainer">
        <div className="col-sm-5 myTrips__leftSection">
          <div className="row search">search</div>
          <div className="row trip__tabs">upcoming latest create</div>
          <div className="row trip__cards">cards component</div>
        </div>
        <div className="col-sm-7 myTrips__rightSection">
          <div className="row trip__name">Trip name</div>
          <div className="row trip__detailComponent">
            Trip details component
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
