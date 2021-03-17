import React, { useState } from "react";
import BannerImg from "../assets/banner-img-9.jpg";
import locationList from "../constants/locationsData";
import Banner from "./Banner";
import "./Explore.css";
import Location from "./Location";

function Explore({ isLogin }) {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  var items = locationList.slice(0, 8);
  const [locations, setLocations] = useState(items);
  const [state, setState] = useState({ locations, searchTerm: "" });
  const loadMore = () => {
    setLocations(locationList);
    setLoadMoreBtn(false);
  };

  const editSearchTerm = (e) => {
    setState({
      locations: locations,
      searchTerm: e.target.value,
    });
  };

  const dynamicSearch = () => {
    return locations.filter((location) =>
      location.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  return (
    <div className="explore">
      {/* Banner */}
      <Banner bannerImg={BannerImg} editSearchTerm={editSearchTerm} />
      {/* Location */}
      <Location locations={dynamicSearch()} isLogin={isLogin} />
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
