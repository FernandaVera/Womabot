import React, { Fragment, Component } from "react";
import { GlobalContextProvider } from "./GlobalContextProvider";
import Login from "./LogIn";

class Provider extends Component {
render() {
  return (
    <Fragment>
      <GlobalContextProvider settings={{ username: "fer", password: "123" }}>
        <Login />
      </GlobalContextProvider>
    </Fragment>
  );
}
}
export default Provider;