import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <HeaderMain>
      <Logo>
        <Link className="logo" to="/landingpage">
          <h1>Logo</h1>
        </Link>
      </Logo>
      {!isAuthenticated && (
        <NavBar>
          <h3>
            {/* <Link className="link1" to="/Login">
            Login
          </Link> */}
            <button className="link1" onClick={() => loginWithRedirect()}>
              Login
            </button>
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
            <button
              className="link1"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
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

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-family: Poppins;
  //background-color: #c7d2fe;
  //background-image: url("https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} 
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  .logo {
    text-decoration: none;
    color: black;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-evenly;
  button {
    padding: 10px;
    background-color: #e2e8f0;
    border: 1px solid grey;
  }
  button:hover {
    background-color: #f1f5f9;
  }
  .link1 {
    text-decoration: none;
    font-size: 1rem;
    color: black;
  }
  .link2 {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
  }
`;
