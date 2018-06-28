import React from "react";
import Page470 from "./Page470";
import Page133 from "./Page133";
import Page160 from "./Page160";

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
  indexRoute: { component: Page470 },
  childRoutes: [
    {
      path: "/portfolio",
      name: "/portfolio",
      component: Page470
    },
    {
      path: "/get-in-touch",
      name: "/get-in-touch",
      component: Page133
    },
    {
      path: "/work",
      name: "/work",
      component: Page160
    },
    {
      path: "*",
      name: "notfound",
      component: Page470
    }
  ]
};
