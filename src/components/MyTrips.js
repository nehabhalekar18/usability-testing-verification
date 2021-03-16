import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import completedTrips from "../constants/completedTrips";
import tripCardList from "../constants/tripCardListData";
import "./MyTrips.css";
import NewTripDetails from "./NewTripDetails";
import TripCardList from "./TripCardList";
import TripDetails from "./TripDetails";

function MyTrips(props) {
  const [action] = useState(props.location.state.action);
  const [sortValue, setSortValue] = useState("latest");

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

  //Dynamic search
  const [upcomingState, setUpcomingState] = useState({
    tripCardList,
    searchTerm: "",
  });
  const [CompletedState, setCompletedState] = useState({
    completedTrips,
    searchTerm: "",
  });

  const editSearchTerm = (e) => {
    if (isUpcoming) {
      setUpcomingState({
        tripCardList: tripCardList,
        searchTerm: e.target.value,
      });
    } else {
      setCompletedState({
        completedTrips: completedTrips,
        searchTerm: e.target.value,
      });
    }
  };

  const dynamicSearch = () => {
    if (isUpcoming) {
      return upcomingState.tripCardList.filter((location) =>
        location.tripName
          .toLowerCase()
          .includes(upcomingState.searchTerm.toLowerCase())
      );
    } else {
      return CompletedState.completedTrips.filter((location) =>
        location.tripName
          .toLowerCase()
          .includes(CompletedState.searchTerm.toLowerCase())
      );
    }
  };

  const sortTrips = (sortBy) => {
    if (sortBy === "oldest") {
      tripCardList.sort(
        (d1, d2) =>
          new Date(d1.startDate).getTime() - new Date(d2.startDate).getTime()
      );
      completedTrips.sort(
        (d1, d2) =>
          new Date(d1.startDate).getTime() - new Date(d2.startDate).getTime()
      );
      setUpcomingState({ tripCardList: tripCardList, searchTerm: "" });
      setCompletedState({ completedTrips: completedTrips, searchTerm: "" });
    } else {
      tripCardList.sort(
        (d1, d2) =>
          new Date(d2.startDate).getTime() - new Date(d1.startDate).getTime()
      );
      completedTrips.sort(
        (d1, d2) =>
          new Date(d2.startDate).getTime() - new Date(d1.startDate).getTime()
      );
      setUpcomingState({ tripCardList: tripCardList, searchTerm: "" });
      setCompletedState({ completedTrips: completedTrips, searchTerm: "" });
    }
    setSortValue(sortBy);
  };
  return (
    <div className="myTrips">
      <div className="row mainContainer">
        <div className="col-sm-4 myTrips__leftSection">
          <div className="search">
            <div className="search__bar">
              <input
                placeholder="Search Trip"
                type="text"
                onChange={editSearchTerm}
              />
              <SearchIcon />
            </div>
            {sortValue === "latest" ? (
              <div
                className="search__sort"
                /*  onClick={() => setSortValue("oldest")} */ onClick={() =>
                  sortTrips("oldest")
                }>
                <h6>Latest</h6>
                <i className="bi bi-sort-down search__sortLatest"></i>
              </div>
            ) : (
              <div
                className="search__sort"
                /* onClick={() => setSortValue("latest")}  */ onClick={() =>
                  sortTrips("latest")
                }>
                <h6>Oldest</h6>
                <i className="bi bi-sort-up-alt search__sortOldest"></i>
              </div>
            )}
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
                locations={dynamicSearch()}
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
