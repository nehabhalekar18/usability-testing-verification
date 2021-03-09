import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import completedTrips from "../constants/completedTrips";
import EditIcon from "@material-ui/icons/Edit";

import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

function CompletedTripCards() {
  const allTrips = completedTrips.map((trip) => {
    return (
      <div className="card row tripCardList">
        <div className="col-sm-4 card__imgDiv">
          <img src={trip.img} className="card_img" alt="" />
        </div>
        <div className="col-sm-7 card__details ">
          <p className="card__tripName">{trip.tripName}</p>
          <p>{trip.tripDate}</p>
          <div className="card__userImgs">
            <img
              className="userImg"
              src={user1}
              alt=""
              data-tip="hello world"
            />{" "}
            <img className="userImg1" src={user3} alt="" />{" "}
            <img className="userImg1" src={user2} alt="" />{" "}
          </div>
        </div>
        <div className="col-sm-1 card__icon dropdown">
          <MoreVertIcon
            class="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
          />{" "}
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="/">
                <ShareIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Share
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                <EditIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Edit
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                <DeleteIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{allTrips}</div>
    </div>
  );
}

export default CompletedTripCards;
