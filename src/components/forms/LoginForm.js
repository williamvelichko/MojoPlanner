import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function LoginForm() {
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
            <h1>Login</h1>
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <div>
            <h3>Dont have an account!</h3>
            <Link to="/signup">Signup</Link>
            <button id="submit">Login!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
