import React from "react";
import "./Banner.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import BannerImg from "../assets/banner-img.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={BannerImg} alt="" className="banner__img" />
      <div className="banner__search">
        <LocationOnOutlinedIcon />
        <input type="text" placeholder="Location" />
        <SearchOutlinedIcon className="banner__search__icon" />
      </div>
      <h5>Never Stop Exploring</h5>
    </div>
  );
}

export default Banner;
