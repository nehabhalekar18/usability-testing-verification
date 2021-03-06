import React, { useState } from "react";
import Banner from "./Banner";
import Location from "./Location";
import "./Explore.css";
import locationList from "../constants/locationsData";

import BannerImg from "../assets/banner-img.jpg";

function Explore() {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  var items = locationList.location.slice(0, 8);
  const [locations, setLocations] = useState([items]);
  const loadMore = () => {
    setLocations([locationList.location]);
    setLoadMoreBtn(false);
  };
  return (
    <div className="explore">
      {/* Banner */}
      <Banner bannerImg={BannerImg} />
      {/* Location */}
      <Location locations={locations} />
      {loadMoreBtn ? (
        <div className="explore__loadMore__btn">
          <button type="button" className="btn btn-primary" onClick={loadMore}>
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Explore;
