import React from "react";
import { Link } from "react-router-dom";
import { HeaderMain, Logo, NavBar } from "./EssentialsCSS/HeaderCSS";
function Header() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <HeaderMain>
      <Logo>
        <Link className="logo" to="/landingpage">
          <h1>MojoPlanner</h1>
        </Link>
      </Logo>
      {!isAuthenticated && (
        <NavBar>
          <h3>
            <Link className="link1" to="/Login">
              Login
            </Link>
          </h3>
          <h3>
            <Link className="link2" to="/Signup">
              Create Account
            </Link>
          </h3>
        </NavBar>
      )}
      {isAuthenticated && (
        <NavBar>
          <h3>
            <Link className="link1" to="/logout">
              Logout
            </Link>
          </h3>
          <Link className="link2" to="/projectListings">
            ProjectListings
          </Link>
        </NavBar>
      )}
    </HeaderMain>
  );
}

export default Header;
