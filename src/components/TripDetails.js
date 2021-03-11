import AddIcon from "@material-ui/icons/Add";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React from "react";
import addFriends from "../assets/addFriends.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import ChatWindow from "./ChatWindow";
import "./TripDetails.css";

function TripDetails() {
  return (
    <div className="tripDetails">
      <ChatWindow />

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
        <div className="tripDetails__vertical"></div>
        <div>
          <LocationOnOutlinedIcon />
          <h6>Desert Safari</h6>
          <DeleteOutlinedIcon />
        </div>
        <div className="tripDetails__locationList__addLocations">
          <AddIcon fontSize="small" />
          <p>Add locations</p>
        </div>
      </div>

      <div className="tripDetails__friends">
        <h5>Travelling with</h5>
        <div className="card__userImgs">
          <img className="userImg" src={user1} alt="" data-tip="hello world" />{" "}
          <img className="userImg1" src={user3} alt="" />
          <img className="userImg1" src={user2} alt="" />
          <img className="userImg1" src={addFriends} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TripDetails;
