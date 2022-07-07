import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function SignUpForm() {
  const { push } = useHistory();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <div className="container">
        <form>
          <div className="fields">
            <h1>Create Account</h1>
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <div>
            <h3>Already have an account!</h3>
            <Link to="/login">Login</Link>
            <button id="submit">Create Account!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
