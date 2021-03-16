import AddIcon from "@material-ui/icons/Add";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React, { Fragment, useState } from "react";
import ChatWindow from "./ChatWindow";
import NewJournal from "./NewJournal";
import "./NewTripDetails.css";
import TripDetailsNav from "./TripDetailsNav";

function NewTripDetails({ props }) {
  console.log(props.location.state.locationList);
  const [showTripDetails, setShowTripDetails] = useState(true);
  const [showJournal, setShowJournal] = useState(false);
  const addLocationList = props.location.state.locationList;
  const showTab = (showTripDetails, showJournal) => {
    setShowJournal(showJournal);
    setShowTripDetails(showTripDetails);
  };

  return (
    <div className="newTripDetails">
      <h4>Untitled Trip</h4>
      <div className="newTripDetails__container">
        <TripDetailsNav contentDetails={showTab} />
        {showJournal === true ? <NewJournal /> : null}
        {showTripDetails === true ? (
          <Fragment>
            <ChatWindow showChatValue={false} />
            <div className="newTripDetails__dateInput">
              <CalendarTodayIcon />
              <input type="text" placeholder="Select Dates" />
            </div>
            <h5>Locations</h5>

            <div className="newTripDetails__locationList">
              <div>
                <LocationOnOutlinedIcon />
                <h6>{addLocationList[0].name}</h6>
                <DeleteOutlinedIcon />
              </div>
              <div className="tripDetails__vertical"></div>
              <div>
                <LocationOnOutlinedIcon />
                <h6>{addLocationList[1].name}</h6>
                <DeleteOutlinedIcon />
              </div>
              <div className="tripDetails__locationList__addLocations">
                <AddIcon fontSize="small" />
                <p>Add locations</p>
              </div>
            </div>

            <div className="newTripDetails__friends">
              <h5>Travel with friends</h5>
              <div className="newTripDetails_inviteFriends">
                <AddIcon fontSize="small" />
                <p>Invite Friends</p>
              </div>
            </div>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
}

export default NewTripDetails;
