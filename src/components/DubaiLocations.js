import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./DubaiLocations.css";

function DubaiLocations({ locationList }) {
  const locationsList = locationList.map((location) => {
    return (
      <div className="col-sm-3 " key={location.id}>
        <div className="dubaiLocation__card">
          <div className="dubaiLocation__img">
            <img src={location.img} alt="" className="dubaiLocation__img" />
          </div>
          <div className="dubaiLocation__data">
            <div className="dubaiLocation__data__contents">
              <h4>{location.name}</h4>
              <Link to="/login">
                <AddCircleOutlineIcon />
              </Link>
            </div>
            <div className="dubaiLocation__description">
              <LocationOnOutlinedIcon />
              <p>{location.subData}</p>
            </div>
            <p>{location.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="row dubaiLocation">{locationsList}</div>
    </div>
  );
}

export default DubaiLocations;
