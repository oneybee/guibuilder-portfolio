/**
 *
 * Text
 *
 */
import React from "react";

const Text = props => {
  return <div {...props}>{props.children}</div>;
};

// class Text extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Text;
