import React from "react";
import "./TripCardList.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import addFriends from "../assets/addFriends.png";
function TripCardList({ tripdetails }) {
  const tripsdetails = tripdetails.map((trip) => {
    return (
      <div className="card row tripCardList">
        <div className="col-sm-4 card__imgDiv">
          <img src={trip.img} className="card_img" />
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
            <img className="userImg1" src={addFriends} alt="" />{" "}
          </div>
        </div>
        <div className="col-sm-1 card__icon">
          <MoreVertIcon />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{tripsdetails}</div>
    </div>
  );
}

export default TripCardList;
