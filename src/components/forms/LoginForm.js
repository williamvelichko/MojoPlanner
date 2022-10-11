import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const { push } = useHistory();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("clicking");
    if (userInfo.email === "" || userInfo.password === "") {
      setError("ALL FIELDS ARE REQUIRED");
    } else {
      axios
        .post("http://localhost:4000/api/auth/login", userInfo)
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          push("/projectListings");
          window.location.reload();
        })
        .catch((err) => {
          setError("Wrong Username or Password");
        });
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={submit}>
          <div className="fields">
            <h1>Login</h1>
            {/* <label>Email:</label> */}
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
            {/* <label>Password:</label> */}
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Dont have an account!</h3>
            <Link to="/Signup">Signup</Link>
            <button id="submit">Login</button>
          </div>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default LoginForm;
