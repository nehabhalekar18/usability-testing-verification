import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React, { useState } from "react";
import "./DubaiLocations.css";

function DubaiLocations({ locationList, getSelected }) {
  const [locations, setLocationList] = useState(locationList);
  const [selectedLocations, setSelectedLocations] = useState("");

  const updateLocationState = (id) => {
    let newLocations = [...locations];
    let selectedLocationList = [...selectedLocations];
    newLocations.map((location, i) => {
      if (location.id === id) {
        newLocations[i].state = !newLocations[i].state;
        selectedLocationList[i] = location;
      }
      setLocationList(newLocations);
      setSelectedLocations(selectedLocationList);
      return 0;
    });
    getSelected(selectedLocations);
  };

  //replace locationList with locations
  const locationsList = locationList.map((location) => {
    return (
      <div className="col-sm-3 " key={location.id}>
        <div className="dubaiLocation__card">
          <div className="dubaiLocation__img">
            <img src={location.img} alt="" className="dubaiLocation__img" />
          </div>
          <div className="dubaiLocation__data">
            <div className="dubaiLocation__data__contents">
              <h6>{location.name}</h6>
              {location.state === true ? (
                <CheckCircleOutlineIcon
                  className="dubaiLocation__data__contents__icon"
                  onClick={() => {
                    updateLocationState(location.id);
                  }}
                />
              ) : (
                <AddCircleOutlineIcon
                  className="dubaiLocation__data__contents__icon"
                  onClick={() => {
                    updateLocationState(location.id);
                  }}
                />
              )}
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
