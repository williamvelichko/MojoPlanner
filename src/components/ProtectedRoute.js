import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LandingPage from "./landingPage/LandingPage";
import Loading from "./Loading";

// const ProtectedRoute = ({ component, ...args }) => (
//   <Route
//     component={withAuthenticationRequired(component, {
//       onRedirecting: () => <Loading />,
//     })}
//     {...args}
//   />
// );

function ProtectedRoute(props) {
  // const { component: Component, rest } = props;

  return (
    <Route
      // {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Route {...props} />;
        } else {
          return <Redirect to="/Signup" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
