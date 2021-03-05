import React from "react";
import Banner from "./Banner";
import DubaiLocations from "./DubaiLocations";
import BannerImg from "../assets/dubai-banner-img.jpg";
import dubaiLocations from "../constants/dubaiLocationsData";
import "./ExploreLocation.css";

function ExploreLocation() {
  var topSightsList = dubaiLocations.slice(0, 4);
  var beachList = dubaiLocations.slice(4, 8);
  return (
    <div className="exploreLocation">
      <Banner bannerImg={BannerImg} searchLocation="Dubai" />
      <h5>Top Sights</h5>
      <DubaiLocations locationList={topSightsList} />
      <h5>Beaches</h5>
      <DubaiLocations locationList={beachList} />
    </div>
  );
}

export default ExploreLocation;
