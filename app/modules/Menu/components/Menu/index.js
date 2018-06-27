/**
 *
 * Menu
 *
 *
 */
import React from "react";

const Menu = props => {
  return <div {...props}>{props.children}</div>;
};

// class Menu extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Menu;
