import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./NewTripCard.css";

function NewTripCard({ locationList }) {
  const locationImg = locationList[1].img;
  return (
    <div className="card row newTripCard ">
      <div className="col-sm-4 newTripCard__cardImg">
        <img src={locationImg} alt="" />
      </div>
      <div className="col-sm-7 newTripCard__cardDetails ">
        <input
          type="text"
          placeholder="Enter trip name"
          className="newTripCard__nameInput"
        />
        <div className="newTripCard__dateInput">
          <CalendarTodayIcon />
          <input type="text" placeholder="Select Dates" />
        </div>
        <div className="newTripCard_inviteFriends">
          <AddCircleOutlineIcon />
          <p>Invite Friends</p>
        </div>
      </div>
      <div className="col-sm-1 newTripCard__cardOption dropdown">
        <MoreVertIcon
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
        />
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="/">
              <ShareIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Share
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              <EditIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; Edit
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              <DeleteIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewTripCard;
