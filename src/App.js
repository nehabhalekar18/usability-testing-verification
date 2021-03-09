import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import ExploreLocation from "./components/ExploreLocation";
import Header from "./components/Header";
import Login from "./components/Login";
import MyTrips from "./components/MyTrips";

function App() {
  const [login] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header signedIn={login} />
        <Switch>
          <Route path="/" exact component={Explore} />
          <Route path="/login" exact component={Login} />
          <Route path="/location" exact component={ExploreLocation} />
          {/* <Route path="/chat" exact component={ChatWindow} /> */}
          <Route path="/trips" exact component={MyTrips} />
        </Switch>
      </Router>

      {/* Create Trip */}
      {/* Storybook */}
      {/* Footer */}
    </div>
  );
}

export default App;
