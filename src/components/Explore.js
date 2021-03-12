import React, { useState } from "react";
import Banner from "./Banner";
import Location from "./Location";
import "./Explore.css";
import locationList from "../constants/locationsData";

import BannerImg from "../assets/banner-img.jpg";

function Explore({ isLogin }) {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  var items = locationList.slice(0, 8);
  const [locations, setLocations] = useState(items);
  const loadMore = () => {
    setLocations(locationList);
    setLoadMoreBtn(false);
  };
  return (
    <div className="explore">
      {/* Banner */}
      <Banner bannerImg={BannerImg} />
      {/* Location */}
      <Location locations={locations} isLogin={isLogin} />
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
