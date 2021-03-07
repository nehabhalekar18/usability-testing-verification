import React from "react";
import "./MyTrips.css";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import SearchIcon from "@material-ui/icons/Search";
import TripCardList from "./TripCardList";
import tripCardList from "../constants/tripCardListData";
import TripDetails from "./TripDetails";

function MyTrips() {
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
              <h6 onClick={""}>Upcoming</h6>
            </div>
            <div className="col-sm-3 trip__completed">
              <h6 onClick={""}>Completed</h6>
            </div>
            <div className="col-sm-6 trip__create">+ Create Trip</div>
          </div>
          <div className="row trip__cards">
            <div className="col">
              <TripCardList tripdetails={tripCardList} />
            </div>
          </div>
        </div>
        <div className="col-sm-8 myTrips__details">
          <div className="myTrips__details__tripName">
            <h4>Dubai Trip bon voyage</h4>
          </div>

          <div className="myTrips__details__container">
            <div className="myTrips__details__container__nav">
              <button>Trip Details</button>
              <button>Journal</button>
            </div>
            <TripDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
