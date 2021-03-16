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
  const [selectedLocations, setSelectedLocations] = useState("");

  const [state, setState] = useState({
    dubaiLocations,
    searchTerm: "",
  });

  /*  var topSightsList = dubaiLocations.slice(0, 4);
  var beachList = dubaiLocations.slice(4, 8); */

  const editSearchTerm = (e) => {
    setState({
      dubaiLocations: dubaiLocations,
      searchTerm: e.target.value,
    });
  };

  const dynamicSearch = (data) => {
    return data.filter((location) =>
      location.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  return (
    <div className="exploreLocation">
      <Banner
        bannerImg={BannerImg}
        searchLocation="Dubai"
        editSearchTerm={editSearchTerm}
      />
      <div className="exploreLocation__category">
        <h5>Top Sights</h5>
        <div className="exploreLocation__category__buttons">
          <Link
            to={{
              pathname: "/login",
              state: {
                isLogin: login,
                action: "createTrip",
                locationList: selectedLocations,
              },
            }}>
            <button
              className="exploreLocation__createTrip"
              onClick={() => setLogin(true)}>
              <AddIcon />
              Create Trip
            </button>
          </Link>
          <Link
            to={{
              pathname: "/login",
              state: {
                isLogin: login,
                action: "addTrip",
                locationList: selectedLocations,
              },
            }}>
            <button
              className="exploreLocation__addTrip"
              onClick={() => setLogin(true)}>
              <AddIcon />
              Add to Trip
            </button>
          </Link>
          {/* {login === true ? (
            <button className="exploreLocation__addTrip">
              <AddIcon />
              Add to Trip
            </button>
          ) : null} */}
        </div>
      </div>

      <DubaiLocations
        locationList={dynamicSearch(dubaiLocations.topsights)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
      <h5>Beaches</h5>
      <DubaiLocations
        locationList={dynamicSearch(dubaiLocations.beaches)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
      <h5>Adventures</h5>
      <DubaiLocations
        locationList={dynamicSearch(dubaiLocations.adventure)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
      <h5>dining and Bar</h5>
      <DubaiLocations
        locationList={dynamicSearch(dubaiLocations.bar)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
    </div>
  );
}

export default ExploreLocation;
