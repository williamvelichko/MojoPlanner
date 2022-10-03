import React from "react";
import { Route, Switch } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LandingPage from "./landingPage/LandingPage";
import Loading from "./Loading";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
