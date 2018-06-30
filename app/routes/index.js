import React from "react";
import Page160 from "./Page160";
import Page133 from "./Page133";
import Page334 from "./Page334";
import Page335 from "./Page335";
import Page336 from "./Page336";
import Page670 from "./Page670";

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
  indexRoute: { component: Page160 },
  childRoutes: [
    {
      path: "/work",
      name: "/work",
      component: Page160
    },
    {
      path: "/get-in-touch",
      name: "/get-in-touch",
      component: Page133
    },
    {
      path: "/home",
      name: "/home",
      component: Page334
    },
    {
      path: "/chrome-os-system-menu",
      name: "/chrome-os-system-menu",
      component: Page335
    },
    {
      path: "/chrome-windows",
      name: "/chrome-windows",
      component: Page336
    },
    {
      path: "/chrome-macos",
      name: "/chrome-macos",
      component: Page670
    },
    {
      path: "*",
      name: "notfound",
      component: Page160
    }
  ]
};
