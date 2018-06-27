/**
 *
 * Head
 *
 */
import React from "react";

const Head = props => {
  return <div {...props}>{props.children}</div>;
};

// class Head extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Head;
