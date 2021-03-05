import Explore from "./components/Explore";
import Header from "./components/Header";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header signedIn={true} />
      {/* Explore */}
      <Explore />
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
