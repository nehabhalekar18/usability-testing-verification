import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import completedTrips from "../constants/completedTrips";
import tripCardList from "../constants/tripCardListData";
import AddIcon from "@material-ui/icons/Add";
import "./MyTrips.css";
import TripCardList from "./TripCardList";
import TripDetails from "./TripDetails";

function MyTrips(props) {
  const [action] = useState(props.location.state.action);
  const [newTripName, setNewTripName] = useState("Untitled Trip");
  const [sortValue, setSortValue] = useState("latest");
  const [selectedTrip, setSelectedTrip] = useState(0);

  function setUpcoming() {
    setIsUpcoming(true);
    var upcoming = document.getElementById("upcomingId");
    var completed = document.getElementById("completedId");
    upcoming.classList.add("upcomingH--active");
    completed.classList.remove("upcomingH--active");
    if (action === "createTrip") {
      setSelectedTrip(0);
    } else {
      setSelectedTrip(1);
    }
  }

  function setCompleted() {
    setIsUpcoming(false);
    var upcoming = document.getElementById("upcomingId");
    var completed = document.getElementById("completedId");
    upcoming.classList.remove("upcomingH--active");
    completed.classList.add("upcomingH--active");
    setSelectedTrip(5);
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
          <div className="row">
            <div className="col-sm-9 search__bar">
              <input
                placeholder="Search Trip"
                type="text"
                onChange={editSearchTerm}
              />
              <SearchIcon />
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
              {sortValue === "latest" ? (
                <div
                  className="search__sort"
                  onClick={() => sortTrips("oldest")}>
                  <h6>Latest</h6>
                  <i className="bi bi-sort-down search__sortLatest"></i>
                </div>
              ) : (
                <div
                  className="search__sort"
                  onClick={() => sortTrips("latest")}>
                  <h6>Oldest</h6>
                  <i className="bi bi-sort-up-alt search__sortOldest"></i>
                </div>
              )}
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
              <button>
                <AddIcon /> Create Trip
              </button>
            </div>
          </div>
          <div className="row trip__cards">
            <div className="col">
              <TripCardList
                newTripName={newTripName}
                setNewTripName={setNewTripName}
                isUpcoming={isUpcoming}
                action={action}
                locationList={props.location.state.locationList}
                locations={dynamicSearch()}
                setSelectedTrip={setSelectedTrip}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-8 myTrips__details">
          <TripDetails
            props={props}
            isUpcoming={isUpcoming}
            newTripName={newTripName}
            locations={dynamicSearch()}
            selectedTrip={selectedTrip}
          />
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
