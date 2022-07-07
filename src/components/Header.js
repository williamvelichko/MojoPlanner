import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Header() {
  return (
    <HeaderMain>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="authentication">
        <h3>
          <Link className="link" to="/Login">
            Login
          </Link>
          <Link className="link" to="/Signup">
            Create Account
          </Link>
        </h3>
      </div>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
`;
