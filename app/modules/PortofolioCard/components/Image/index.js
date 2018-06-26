/**
 *
 * Image
 *
 */
import React from "react";

const Image = props => {
  return <div {...props}>{props.children}</div>;
};

// class Image extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Image;
