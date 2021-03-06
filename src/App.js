import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Login from "./components/Login";
import ExploreLocation from "./components/ExploreLocation";
import ChatWindow from "./components/ChatWindow";
import MyTrips from "./components/MyTrips";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header signedIn={login} />
        <Switch>
          <Route path="/" exact component={Explore} />
          <Route path="/login" exact component={Login} />
          <Route path="/location" exact component={ExploreLocation} />
          <Route path="/chat" exact component={ChatWindow} />
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
