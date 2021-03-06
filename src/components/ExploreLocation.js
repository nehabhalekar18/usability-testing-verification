import React from "react";
import Banner from "./Banner";
import DubaiLocations from "./DubaiLocations";
import BannerImg from "../assets/dubai-banner-img.jpg";
import dubaiLocations from "../constants/dubaiLocationsData";
import "./ExploreLocation.css";

function ExploreLocation({ signedIn }) {
  var topSightsList = dubaiLocations.slice(0, 4);
  var beachList = dubaiLocations.slice(4, 8);
  var adventureList = dubaiLocations.slice(8, 12);
  var diningBarList = dubaiLocations.slice(12, 16);
  return (
    <div className="exploreLocation">
      <Banner bannerImg={BannerImg} searchLocation="Dubai" />
      <h5>Top Sights</h5>
      {signedIn === true ? (
        <div className="exploreLocation__tripButtons">
          <button className="exploreLocation__newTrip">Create Trip</button>
          <button className="exploreLocation__existingTrip">
            Add to existing
          </button>
        </div>
      ) : null}
      <DubaiLocations locationList={topSightsList} login={signedIn} />
      <h5>Beaches</h5>
      <DubaiLocations locationList={beachList} />
      <h5>Adventure</h5>
      <DubaiLocations locationList={adventureList} />
      <h5>Dinining & Bar</h5>
      <DubaiLocations locationList={diningBarList} />
    </div>
  );
}

export default ExploreLocation;
