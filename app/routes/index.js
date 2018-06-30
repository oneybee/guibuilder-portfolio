import React from "react";
import Page1198 from "./Page1198";
import Page727 from "./Page727";
import Page160 from "./Page160";
import Page133 from "./Page133";
import Page334 from "./Page334";

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
  indexRoute: { component: Page1198 },
  childRoutes: [
    {
      path: "/work/chrome-windows",
      name: "/work/chrome-windows",
      component: Page1198
    },
    {
      path: "/work/chrome-os-system-menu",
      name: "/work/chrome-os-system-menu",
      component: Page727
    },
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
      path: "*",
      name: "notfound",
      component: Page1198
    }
  ]
};
