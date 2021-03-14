import SearchIcon from "@material-ui/icons/Search";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import React, { useState } from "react";
import "./MyTrips.css";
import NewTripDetails from "./NewTripDetails";
import TripCardList from "./TripCardList";
import TripDetails from "./TripDetails";

function MyTrips(props) {
  console.log(props.location.state.action);
  const [action] = useState(props.location.state.action);
  function setUpcoming() {
    setIsUpcoming(true);
    var upcoming = document.getElementById("upcomingId");
    var completed = document.getElementById("completedId");
    upcoming.classList.add("upcomingH--active");
    completed.classList.remove("upcomingH--active");
  }

  function setCompleted() {
    setIsUpcoming(false);
    var upcoming = document.getElementById("upcomingId");
    var completed = document.getElementById("completedId");
    upcoming.classList.remove("upcomingH--active");
    completed.classList.add("upcomingH--active");
  }

  const [isUpcoming, setIsUpcoming] = useState(true);

  return (
    <div className="myTrips">
      <div className="row mainContainer">
        <div className="col-sm-4 myTrips__leftSection">
          <div className="row search">
            <div className="col-sm-9 search__border">
              <input
                className="search__input"
                placeholder="Search Trip"
                type="text"
              />
              <SearchIcon className="searchIcon" />
            </div>
            <div className="col-sm-3 search__sort">
              Latest <SyncAltIcon className="sort__icon" />
            </div>
          </div>
          <div className="row trip__tabs">
            <div className="col-sm-3 trip__upcoming">
              <h6
                id="upcomingId"
                className="upcomingH--active"
                onClick={(e) => {
                  setUpcoming();
                }}>
                Upcoming
              </h6>
            </div>
            <div className="col-sm-3 trip__completed">
              <h6
                id="completedId"
                onClick={() => {
                  setCompleted();
                }}>
                Completed
              </h6>
            </div>
            <div className="col-sm-6 trip__create">
              <button> + Create Trip</button>
            </div>
          </div>
          <div className="row trip__cards">
            <div className="col">
              <TripCardList
                isUpcoming={isUpcoming}
                action={props.location.state.action}
                locationList={props.location.state.locationList}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-8 myTrips__details">
          {action === "createTrip" ? <NewTripDetails /> : <TripDetails />}
          {/* <div className="myTrips__details__tripName">
            <h4>Dubai Trip bon voyage</h4>
          </div>
          <div className="myTrips__details__container">
            <TripDetailsNav contentDetails={showTab} />
            {showTripDetails === true ? <TripDetails /> : null}
            {showJournal === true ? <Journal /> : null}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
