import { useState } from "react";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Login from "./components/Login";
import ExploreLocation from "./components/ExploreLocation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyTrips from "./components/MyTrips";
import StoryBook from "./components/StoryBook";

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
          <Route path="/trips" exact component={MyTrips} />
          <Route path="/storybook" exact component={StoryBook} />
        </Switch>
      </Router>

      {/* <Explore /> */}
      {/* <ExploreLocation /> */}
      {/* Sign In */}
      {/* <Login /> */}

      {/* Sign Up */}
      {/* Create Trip */}
      {/* My Trip */}
      {/* Storybook */}
      {/* Footer */}
    </div>
  );
}

export default App;
