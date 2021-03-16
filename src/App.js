import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import ExploreLocation from "./components/ExploreLocation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import MyTrips from "./components/MyTrips";
import Gallery from "./components/Gallery";
import Photo from "./components/Photo";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const props = useLocation();
  const [login, setLogin] = useState(false);
  const [pathName, setPathName] = useState();
  useEffect(() => {
    const login = props.state;
    setPathName(props.pathname);
    if (login !== undefined) setLogin(login.isLogin);
  }, [props]);
  return (
    <div className="App">
      <Router>
        <Header signedIn={login} pathName={pathName} />
        <Switch>
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route path="/" exact render={() => <Explore isLogin={false} />} />

          <Route
            path="/location"
            exact
            render={(props) => <ExploreLocation {...props} />}
          />
          <Route
            path="/trips"
            exact
            render={(props) => <MyTrips {...props} />}
          />

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
