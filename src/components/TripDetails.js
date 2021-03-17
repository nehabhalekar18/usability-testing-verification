import React, { useState } from "react";
import TripDetailsNav from "./TripDetailsNav";
import AddIcon from "@material-ui/icons/Add";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import addFriends from "../assets/addFriends.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import ChatWindow from "./ChatWindow";
import NewTripDetails from "./NewTripDetails";
import Journal from "./Journal";
import "./TripDetails.css";
import { Fragment } from "react";

function TripDetails({
  props,
  isUpcoming,
  newTripName,
  locations,
  selectedTrip,
}) {
  const [action] = useState(props.location.state.action);
  const [showTripDetails, setShowTripDetails] = useState(true);
  const [showJournal, setShowJournal] = useState(false);
  const [journalContents, setJournalContents] = useState("");
  const showTab = (showTripDetails, showJournal) => {
    setShowJournal(showJournal);
    setShowTripDetails(showTripDetails);
  };
  return (
    <Fragment>
      {action === "createTrip" && isUpcoming === true && selectedTrip === 0 ? (
        <NewTripDetails props={props} newTripName={newTripName} />
      ) : (
        locations.map((data) => {
          return selectedTrip === data.id ? (
            <div className="tripDetails">
              <h4>{data.tripName}</h4>
              <div className="tripDetails__container">
                <TripDetailsNav
                  contentDetails={showTab}
                  journalContentsValue={setJournalContents}
                />
                {showJournal === true ? (
                  <Journal journalContents={journalContents} />
                ) : null}
                {showTripDetails === true ? (
                  <Fragment>
                    <ChatWindow showChatValue={true} />
                    <div className="tripDetails__dateInput">
                      <CalendarTodayIcon />
                      <input type="text" defaultValue="Mar 11 - 19" />
                    </div>
                    <h5>Locations</h5>

                    <div className="tripDetails__locationList">
                      <div>
                        <LocationOnOutlinedIcon />
                        <h6>Burj Khalifa</h6>
                        <DeleteOutlinedIcon />
                      </div>
                      <div className="tripDetails__vertical"></div>
                      <div>
                        <FiberManualRecordIcon className="tripDetails__locationList__joinPoint" />
                        <h6>Cove Beach</h6>
                        <DeleteOutlinedIcon />
                      </div>
                      <div className="tripDetails__vertical1"></div>
                      <div>
                        <LocationOnOutlinedIcon className="marker" />
                        <h6>Desert Safari</h6>
                        <DeleteOutlinedIcon />
                      </div>
                      {isUpcoming === true ? (
                        <div className="tripDetails__locationList__addLocations">
                          <AddIcon fontSize="small" />
                          <p>Add locations</p>
                        </div>
                      ) : null}
                    </div>

                    <div className="tripDetails__friends">
                      <h5>Travelling with</h5>
                      <div className="card__userImgs">
                        <img
                          className="userImg"
                          src={user1}
                          alt=""
                          data-tip="hello world"
                        />
                        <img className="userImg1" src={user3} alt="" />
                        <img className="userImg1" src={user2} alt="" />
                        {isUpcoming === true ? (
                          <img className="userImg1" src={addFriends} alt="" />
                        ) : null}
                      </div>
                    </div>
                  </Fragment>
                ) : null}
              </div>
            </div>
          ) : null;
        })
      )}
    </Fragment>
  );
}

export default TripDetails;
