import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LandingPage from "./landingPage/LandingPage";
import Loading from "./Loading";
import jwtDecode from "jwt-decode";

function ProtectedRoute(props) {
  const verifyToken = () => {
    const token = localStorage.getItem("token");
    let decodedToken = jwtDecode(token, { complete: true });
    let dateNow = new Date();

    if (decodedToken.exp < dateNow.getTime()) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Route
      // {...rest}
      render={() => {
        if (localStorage.getItem("token") && verifyToken() === true) {
          return <Route {...props} />;
        } else {
          return <Redirect to="/Signup" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
