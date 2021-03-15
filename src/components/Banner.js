import React from "react";
import "./Banner.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Banner({ bannerImg, searchLocation, editSearchTerm }) {
  return (
    <div className="banner">
      <img src={bannerImg} alt="" className="banner__img" />
      <div className="banner__search">
        <LocationOnOutlinedIcon />
        <input
          type="text"
          placeholder="Location"
          defaultValue={searchLocation}
          onChange={editSearchTerm}
        />
        <SearchOutlinedIcon className="banner__search__icon" />
      </div>
      <div className="banner__content">
        <h5>Never Stop Exploring</h5>
      </div>
    </div>
  );
}

export default Banner;
