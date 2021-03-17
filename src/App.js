import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import ExploreLocation from "./components/ExploreLocation";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Login from "./components/Login";
import MyTrips from "./components/MyTrips";
import Photo from "./components/Photo";

function App() {
  const props = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [login, setLogin] = useState(false);
  const [pathName, setPathName] = useState();

  useEffect(() => {
    const login = props.state;
    setPathName(props.pathname);
    if (login !== undefined) setLogin(login.isLogin);
  }, [props]);

  return (
    <div className="App">
      <Header signedIn={login} path={pathName} props={props} />
      <Switch>
        <Route path="/" exact render={() => <Explore isLogin={false} />} />
        <Route
          path="/location"
          exact
          render={(props) => <ExploreLocation {...props} />}
        />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route path="/trips" exact render={(props) => <MyTrips {...props} />} />
        <Route
          path="/gallery"
          exact
          render={(props) => (
            <Gallery {...props} setSelectedImage={setSelectedImage} />
          )}
        />
        {selectedImage && (
          <Photo
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
