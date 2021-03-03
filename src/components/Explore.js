import React, { useState } from "react";
import Banner from "./Banner";
import Location from "./Location";
import "./Explore.css";
import locationList from "../constants/Data";

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
      <Banner />
      {/* Location */}
      <Location locations={locations} />
      <div className="row justify-content-center">
        {loadMoreBtn ? (
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={loadMore}>
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Explore;
