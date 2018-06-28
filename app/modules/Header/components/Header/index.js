/**
 *
 * Header
 *
 *
 */
import React from "react";

const Header = props => {
  return <div {...props}>{props.children}</div>;
};

// class Header extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Header;
