import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import ExploreLocation from "./components/ExploreLocation";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [login] = useState(true);
  return (
    <div className="App">
      <Router>
        <Header signedIn={login} />
        <Switch>
          <Route path="/" exact component={Explore} />
          <Route path="/login" exact component={() => <Login />} />
          <Route
            path="/location"
            exact
            component={() => <ExploreLocation signedIn={login} />}
          />
        </Switch>
      </Router>
      {/* Create Trip */}
      {/* My Trip */}
      {/* Storybook */}
      {/* Footer */}
    </div>
  );
}

export default App;
