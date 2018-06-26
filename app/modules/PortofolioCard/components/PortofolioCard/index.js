/**
 *
 * PortofolioCard
 *
 */

import React from "react";

const PortofolioCard = props => {
  return <div {...props}>{props.children}</div>;
};

// class PortofolioCard extends Component {
//   render() {
//     return <div {...this.props}>{this.props.children}</div>;
//   }
// }

export default PortofolioCard;
