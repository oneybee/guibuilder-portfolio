/**
 *
 * Date
 *
 */
import React from "react";

const Date = props => {
  return <div {...props}>{props.children}</div>;
};

// class Date extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default Date;
