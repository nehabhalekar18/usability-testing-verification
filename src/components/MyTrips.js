import React from "react";
import "./MyTrips.css";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import SearchIcon from "@material-ui/icons/Search";
function MyTrips() {
  return (
    <div className="myTrips">
      <div className="row mainContainer">
        <div className="col-sm-5 myTrips__leftSection">
          <div className="row search">
            <div className="col-sm-10 search__border">
              <input
                className="search__input"
                placeholder="Search Trip"
                type="text"
              />
              <SearchIcon className="searchIcon" />
            </div>
            <div className="col-sm-2 search__sort">
              Latest <SyncAltIcon className="sort__icon" />
            </div>
          </div>
          <div className="row trip__tabs">
            <div className="col-sm-2 trip__upcoming--active">
              <h6 onClick={""}>Upcoming</h6>
            </div>
            <div className="col-sm-2 trip__completed">
              <h6 onClick={""}>Completed</h6>
            </div>
            <div className="col-sm-8 trip__create">+ Create Trip</div>
          </div>
          <div className="row trip__cards">
            <div className="col">Cards</div>
          </div>
        </div>
        <div className="col-sm-7 myTrips__rightSection">
          <div className="row trip__name">
            <h6>Dubai Trip bon voyage</h6>
          </div>
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
