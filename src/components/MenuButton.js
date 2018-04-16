import React from "react";

class MenuButton extends React.Component {
  render() {
    return (
      <a
        onClick={this.props.toggleMenu}
        className="menu-button btn-floating btn-large"
      >
        <i className="material-icons">menu</i>
      </a>
    );
  }
}

export default MenuButton;
