import React, { Fragment, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ChatWindow from "./ChatWindow";
import NewJournal from "./NewJournal";
import TripDetailsNav from "./TripDetailsNav";
import "./NewTripDetails.css";

function NewTripDetails() {
  const [showTripDetails, setShowTripDetails] = useState(true);
  const [showJournal, setShowJournal] = useState(false);

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

            <div className="newTripDetails__locationList__addLocations">
              <AddIcon fontSize="small" />
              <p>Add locations</p>
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
