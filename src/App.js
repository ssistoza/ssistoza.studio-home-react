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
  state = {
    showMenu: false
  };

  /**
   * Toggle the menu button.
   *  - If menu button is true display menu.
   *  - If menu button is false hide menu.
   */
  toggleMenu = () => {
    let toggler = this.state.showMenu;
    toggler = !toggler;
    this.setState({ showMenu: toggler });
  };

  /**
   * 
   * <div className="h-100">
        <BackSplash />
        <MenuButton toggleMenu={this.toggleMenu} />
        <MenuBar showMenu={this.state.showMenu} />
        <div className="row h-100 mb-0">
          <Router />
        </div>
      </div>
   */
  render() {
    return <Example />;
  }
}

export default App;
