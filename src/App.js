import React from "react";
import Router from "./Router";

import "materialize-css/dist/css/materialize.css";
import "./css-slider.css";

// Custom CSS for application.
import "./App.css";
import BackSplash from "./components/BackSplash";
import MenuButton from "./components/MenuButton";
import MenuBar from "./components/MenuBar";
import Example from "./components/Example";

class App extends React.Component {
  render() {
    return (
      <div className="h-100">
        <BackSplash />
        <MenuBar />
        <div className="row h-100 mb-0">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
