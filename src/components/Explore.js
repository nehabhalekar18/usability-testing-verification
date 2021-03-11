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
        <button
          className="explore__loadMore__btn"
          type="button"
          onClick={loadMore}>
          Load More
        </button>
      ) : null}
    </div>
  );
}

export default Explore;
