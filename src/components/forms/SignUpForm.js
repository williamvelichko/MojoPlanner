import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function SignUpForm() {
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
    if (userInfo.email === "" || userInfo.password === "") {
      setError("ALL FIELDS ARE REQUIRED");
    } else {
      axios
        .post("http://localhost:4000/api/auth/register", userInfo)
        .then((resp) => {
          setUserInfo(resp.data);
          axios
            .post("http://localhost:4000/api/auth/login", userInfo)
            .then((resp) => {
              console.log(resp.data);
              localStorage.setItem("token", resp.data.token);
              push("/projectListings");
            })
            .catch((err) => console.log(err));
          push("/projectListings");
        })
        .catch((err) => {
          setError("Account Already Exists");
        });
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={submit}>
          <div className="fields">
            <h1>Create Account</h1>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Already have an account!</h3>
            <Link to="/Login">Login</Link>
            <button id="submit">Create Account!</button>
          </div>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default SignUpForm;
