/**
 *
 * Button
 *
 */
import React from "react";

const Button = props => {
  return <div {...props}>{props.children}</div>;
};

// class Button extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Button;
