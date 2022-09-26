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
          <h1>MojoPlanner</h1>
        </Link>
      </Logo>
      {!isAuthenticated && (
        <NavBar>
          <h3>
            {/* <Link className="link1" to="/Login">
            Login
          </Link> */}
            <button className="link1" onClick={() => loginWithRedirect()}>
              <p>Login/Signup</p>
            </button>
          </h3>
          {/* <h3>
            <Link className="link2" to="/Signup">
              Create Account
            </Link>
          </h3> */}
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
  background-color: #244F58;
 

} 
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  margin-left: 30px;
  .logo {
    text-decoration: none;
    color: #ffffff;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-evenly;
  button {
    padding-left: 15px;
    padding-right: 15px;
    background-color: #244f58;
    border: 1px solid #244f58;
  }
  // button:hover {
  //   background-color: #f1f5f9;
  // }
  .link1 {
    text-decoration: none;
    font-size: 1.2rem;
    color: #ffffff;
  }
  .link2 {
    text-decoration: none;
    font-size: 1.5rem;
    color: #ffffff;
  }
`;
