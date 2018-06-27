/**
 *
 * Title
 *
 */
import React from "react";

const Title = props => {
  return <div {...props}>{props.children}</div>;
};

// class Title extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Title;
