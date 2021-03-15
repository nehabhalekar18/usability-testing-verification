import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import ExploreLocation from "./components/ExploreLocation";
import Header from "./components/Header";
import Login from "./components/Login";
import MyTrips from "./components/MyTrips";
import Gallery from "./components/Gallery";
import Photo from "./components/Photo";

function App() {
  const [login] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Router>
        <Header signedIn={login} />
        <Switch>
          <Route path="/" exact component={Explore} />
          <Route path="/login" exact component={Login} />
          <Route path="/location" exact component={ExploreLocation} />
          <Route path="/trips" exact component={MyTrips} />
          {/* <Route path="/gallery" exact component={Gallery} /> */}
          <Route
            exact
            path="/gallery"
            render={(props) => (
              <Gallery {...props} setSelectedImage={setSelectedImage} />
            )}
          />
          <Route
            exact
            path="/gallery/photo"
            render={(props) => (
              <Photo {...props} selectedImage={selectedImage} />
            )}
          />
          {/* <Modal selectedImage={selectedImage} /> */}
        </Switch>
      </Router>

      {/* Create Trip */}
      {/* Storybook */}
      {/* Footer */}
    </div>
  );
}

export default App;
