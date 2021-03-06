import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";
function Location(locations) {
  let list = locations.locations[0];
  const locationList = list.map((location) => {
    return (
      <div className="col-sm-3 " key={location.id}>
        <Link to="/location">
          <div className="location__card">
            <div className="location__img">
              <img src={location.img} alt="" className="location__img" />
            </div>
            <div className="location__data">
              <h4>{location.name}</h4>
              <div className="location__description">
                <LocationOnOutlinedIcon fontSize="small" />
                <p>{location.subData}</p>
              </div>
              <p className="truncate">{location.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="row location">{locationList}</div>;
}
export default Location;
