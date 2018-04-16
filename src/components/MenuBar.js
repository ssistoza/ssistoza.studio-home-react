import React from "react";

class MenuBar extends React.Component {
  render() {
    let show = this.props.showMenu ? "open" : "";
    return (
      <div className={"menubar h-100 teal lighten-1 " + show}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </div>
    );
  }
}

export default MenuBar;
