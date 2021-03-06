import React, { useState } from "react";
import "./MyTrips.css";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import SearchIcon from "@material-ui/icons/Search";
import TripCardList from "./TripCardList";
import tripCardList from "../constants/tripCardListData";
import ChatWindow from "./ChatWindow";

function MyTrips() {
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

        <div className="col-sm-2"></div>
        <div className="col-sm-6 myTrips__rightSection">
          <div className="row trip__name">
            <h6>Dubai Trip bon voyage</h6>
          </div>
          <div className="row trip__detailComponent">
            Trip details component
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
