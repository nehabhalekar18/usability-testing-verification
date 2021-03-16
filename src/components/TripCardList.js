import React from "react";
import CompletedTripCards from "./CompletedTripCards";
import NewTripCard from "./NewTripCard";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import addFriends from "../assets/addFriends.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import "./TripCardList.css";

function TripCardList({
  newTripName,
  setNewTripName,
  isUpcoming,
  action,
  locationList,
  locations,
  setSelectedTrip,
}) {
  const tripCardsList =
    isUpcoming === true ? (
      locations.map((trip) => {
        return (
          <div
            className="card row tripCard"
            key={trip.id}
            onClick={() => setSelectedTrip(trip.id)}>
            <div className="col-sm-4 tripCard__cardImg">
              <img src={trip.img} alt="" />
            </div>
            <div className="col-sm-7 tripCard__details ">
              <p>{trip.tripName}</p>
              <p>{trip.tripDate}</p>
              <div className="tripCard__userImgs">
                <img className="tripCard__userImg" src={user1} alt="" />
                <img className="tripCard__userImg1" src={user3} alt="" />
                <img className="tripCard__userImg1" src={user2} alt="" />
                <img
                  className="tripCard__userImg1 tripCard__addFriends_icon dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  src={addFriends}
                  alt=""
                />
                <ul
                  className="tripCard__addFriends_options dropdown-menu"
                  aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/">
                      <EmailIcon />
                      &nbsp;&nbsp;&nbsp;&nbsp; Invite via E-mail
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <FileCopyIcon />
                      &nbsp;&nbsp;&nbsp;&nbsp; Copy link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-1 tripCard__options">
              <MoreVertIcon
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1">
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
      })
    ) : (
      <CompletedTripCards
        locations={locations}
        setSelectedTrip={setSelectedTrip}
      />
    );
  return (
    <div>
      <div>
        {isUpcoming === true && action === "createTrip" ? (
          <NewTripCard
            newTripName={newTripName}
            setNewTripName={setNewTripName}
            setSelectedTrip={setSelectedTrip}
            locationList={locationList}
          />
        ) : null}
        {tripCardsList}
      </div>
    </div>
  );
}

export default TripCardList;

// const tripCardsList = tripCardList.map((trip) => {
//   return isUpcoming === true ? (
//     <div className="card row tripCardList">
//       <div className="col-sm-4 card__imgDiv">
//         <img src={trip.img} className="card_img" />
//       </div>
//       <div className="col-sm-7 card__details ">
//         <p className="card__tripName">{trip.tripName}</p>
//         <p>{trip.tripDate}</p>
//         <div className="card__userImgs">
//           <img
//             className="userImg"
//             src={user1}
//             alt=""
//             data-tip="hello world"
//           />{" "}
//           <img className="userImg1" src={user3} alt="" />{" "}
//           <img className="userImg1" src={user2} alt="" />{" "}
//           <img className="userImg1" src={addFriends} alt="" />{" "}
//         </div>
//       </div>
//       <div className="col-sm-1 card__icon">
//         <MoreVertIcon />
//       </div>
//     </div>
//   ) : (
//     <CompletedTripCards />
//   );
// });
