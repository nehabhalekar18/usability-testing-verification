import React from "react";
import "./TripCardList.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import addFriends from "../assets/addFriends.png";
import tripCardList from "../constants/tripCardListData";
import CompletedTripCards from "./CompletedTripCards";
import EditIcon from "@material-ui/icons/Edit";

import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EmailIcon from "@material-ui/icons/Email";

function TripCardList({ isUpcoming }) {
  const tripCardsList =
    isUpcoming === true ? (
      tripCardList.map((trip) => {
        return (
          <div className="card row tripCardList">
            <div className="col-sm-4 card__imgDiv">
              <img src={trip.img} className="card_img" alt="" />
            </div>
            <div className="col-sm-7 card__details ">
              <p className="card__tripName">{trip.tripName}</p>
              <p>{trip.tripDate}</p>
              <div className="card__userImgs">
                <div>
                  <img className="userImg" src={user1} alt="" />
                </div>
                <div>
                  <img className="userImg1" src={user3} alt="" />
                </div>
                <div>
                  {" "}
                  <img className="userImg1" src={user2} alt="" />
                </div>
                <div class="dropdown">
                  <img
                    class="addUserImg dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    src={addFriends}
                    alt=""
                  />
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="/">
                        <EmailIcon />
                        &nbsp;&nbsp;&nbsp;&nbsp; Invite via E-mail
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        <FileCopyIcon />
                        &nbsp;&nbsp;&nbsp;&nbsp; Copy link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-1 card__icon dropdown">
              <MoreVertIcon
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              />{" "}
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
      })
    ) : (
      <CompletedTripCards />
    );
  return (
    <div>
      <div>{tripCardsList}</div>
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
