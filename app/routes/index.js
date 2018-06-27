import React from "react";
import Page89 from "./Page89";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page89 },
  childRoutes: [
    {
      path: "/Projects",
      name: "/Projects",
      component: Page89
    },
    {
      path: "*",
      name: "notfound",
      component: Page89
    }
  ]
};
