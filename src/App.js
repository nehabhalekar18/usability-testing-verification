import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import ExploreLocation from "./components/ExploreLocation";
import Header from "./components/Header";
import Login from "./components/Login";
import MyTrips from "./components/MyTrips";
import "./App.css";

function App() {
  const [login] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header signedIn={login} />
        <Switch>
          <Route path="/" exact render={() => <Explore isLogin={false} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route
            path="/location"
            render={(props) => <ExploreLocation {...props} />}
          />
          <Route path="/trips" exact component={MyTrips} />
          {/* <Route path="/" exact component={Explore} /> */}
          {/* <Route path="/location" exact component={ExploreLocation} /> */}
        </Switch>
      </Router>

      {/* Create Trip */}
      {/* Storybook */}
      {/* Footer */}
    </div>
  );
}

export default App;
