import SearchIcon from "@material-ui/icons/Search";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import React, { useState } from "react";
import Journal from "./Journal";
import "./MyTrips.css";
import TripCardList from "./TripCardList";
import TripDetails from "./TripDetails";
import TripDetailsNav from "./TripDetailsNav";

function MyTrips() {
  const [isUpcoming, setIsUpcoming] = useState(true);
  const [showTripDetails, setShowTripDetails] = useState(true);
  const [showJournal, setShowJournal] = useState(false);

  const showTab = (showTripDetails, showJournal) => {
    setShowJournal(showJournal);
    setShowTripDetails(showTripDetails);
  };
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
            <div className="col-sm-3 trip__upcoming--active">
              <h6
                onClick={(e) => {
                  setIsUpcoming(true);
                }}>
                Upcoming
              </h6>
            </div>
            <div className="col-sm-3 trip__completed">
              <h6
                onClick={() => {
                  setIsUpcoming(false);
                }}>
                Completed
              </h6>
            </div>
            <div className="col-sm-6 trip__create">+ Create Trip</div>
          </div>
          <div className="row trip__cards">
            <div className="col">
              <TripCardList isUpcoming={isUpcoming} />
            </div>
          </div>
        </div>
        <div className="col-sm-8 myTrips__details">
          <div className="myTrips__details__tripName">
            <h4>Dubai Trip bon voyage</h4>
          </div>
          <div className="myTrips__details__container">
            <TripDetailsNav contentDetails={showTab} />
            {showTripDetails === true ? <TripDetails /> : null}
            {showJournal === true ? <Journal /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
