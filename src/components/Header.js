import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
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
    </div>
  );
}

export default Header;
