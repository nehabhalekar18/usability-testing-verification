import React from "react";
import "./TripCardList.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import addFriends from "../assets/addFriends.png";
import tripCardList from "../constants/tripCardListData";
import CompletedTripCards from "./CompletedTripCards";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}>
      <List>
        <ListItem button onClick={() => handleListItemClick("share")}>
          <ShareIcon className="del" />
          <ListItemText primary="Share" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("edit")}>
          <EditIcon className="del" />
          <ListItemText primary="Edit" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("delete")}>
          <DeleteIcon className="del" />
          <ListItemText primary="Delete" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function TripCardList({ isUpcoming }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const tripCardsList =
    isUpcoming === true ? (
      tripCardList.map((trip) => {
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
            <div className="col-sm-1 card__icon" onClick={handleClickOpen}>
              <MoreVertIcon />{" "}
            </div>
            <SimpleDialog open={open} onClose={handleClose} />
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
