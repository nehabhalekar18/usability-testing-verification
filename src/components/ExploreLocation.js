import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerImg from "../assets/dubai-banner-img.jpg";
import dubaiLocations from "../constants/dubaiLocationsData";
import Banner from "./Banner";
import DubaiLocations from "./DubaiLocations";
import "./ExploreLocation.css";

function ExploreLocation(props) {
  const [login, setLogin] = useState(props.location.state.isLogin);
  var topSightsList = dubaiLocations.slice(0, 4);
  var beachList = dubaiLocations.slice(4, 8);
  return (
    <div className="exploreLocation">
      <Banner bannerImg={BannerImg} searchLocation="Dubai" />
      <div className="exploreLocation__category">
        <h5>Top Sights</h5>
        <div className="exploreLocation__category__buttons">
          <Link to={{ pathname: "/login", state: { isLogin: { login } } }}>
            <button
              className="exploreLocation__createTrip"
              onClick={() => setLogin(true)}>
              <AddIcon />
              Create Trip
            </button>
          </Link>
          {login === true ? (
            <button className="exploreLocation__addTrip">
              <AddIcon />
              Add to Trip
            </button>
          ) : null}
        </div>
      </div>

      <DubaiLocations locationList={topSightsList} />
      <h5>Beaches</h5>
      <DubaiLocations locationList={beachList} />
    </div>
  );
}

export default ExploreLocation;
