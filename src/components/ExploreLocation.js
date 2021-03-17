import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerImg from "../assets/paris-banner-img.jpg";
import placesToVisit from "../constants/placesToVisitData";
import Banner from "./Banner";
import DubaiLocations from "./DubaiLocations";
import "./ExploreLocation.css";

function ExploreLocation(props) {
  const [login, setLogin] = useState(props.location.state.isLogin);
  const [selectedLocations, setSelectedLocations] = useState("");

  const [state, setState] = useState({
    placesToVisit,
    searchTerm: "",
  });

  /*  var topSightsList = placesToVisit.slice(0, 4);
  var beachList = placesToVisit.slice(4, 8); */

  const editSearchTerm = (e) => {
    setState({
      placesToVisit: placesToVisit,
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
        searchLocation=""
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
        locationList={dynamicSearch(placesToVisit.topsights)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
      <h5>Monuments</h5>
      <DubaiLocations
        locationList={dynamicSearch(placesToVisit.monuments)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
      <h5>Museums</h5>
      <DubaiLocations
        locationList={dynamicSearch(placesToVisit.museums)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
      <h5>Things to do</h5>
      <DubaiLocations
        locationList={dynamicSearch(placesToVisit.thingsToDo)}
        getSelected={(locations) =>
          setSelectedLocations([...selectedLocations, locations])
        }
      />
    </div>
  );
}

export default ExploreLocation;
