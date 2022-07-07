import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Header() {
  return (
    <HeaderMain>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <NavBar>
        <h3>
          <Link className="link" to="/Login">
            Login
          </Link>
          <Link className="link" to="/Signup">
            Create Account
          </Link>
        </h3>
      </NavBar>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content; space-between;
`;

const NavBar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
`;
