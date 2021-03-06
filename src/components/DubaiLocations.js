import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React, { useState } from "react";
import "./DubaiLocations.css";

function DubaiLocations({ locationList, login }) {
  const [locationSelected, setLocationSelected] = useState(false);
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
              {locationSelected === true ? (
                <div onClick={() => setLocationSelected(false)}>
                  <CheckCircleOutlineSharpIcon />
                </div>
              ) : (
                <div onClick={() => setLocationSelected(true)}>
                  <AddCircleOutlineIcon />
                </div>
              )}
            </div>
            <div className="dubaiLocation__description">
              <LocationOnOutlinedIcon />
              <p>{location.subData}</p>
            </div>
            <p className="truncate">{location.description}</p>
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
