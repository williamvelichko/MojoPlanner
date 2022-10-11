import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

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
              window.location.reload();
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
    <MainContainer>
      <Form onSubmit={submit}>
        <h2>Create Account</h2>
        <Fields>
          {/* <label>Email:</label> */}
          <input
            type="email"
            name="email"
            placeholder="Email:"
            value={userInfo.email}
            onChange={handleChange}
          />
          {/* <label>Password:</label> */}
          <input
            type="password"
            name="password"
            placeholder="Password:"
            value={userInfo.password}
            onChange={handleChange}
          />
        </Fields>
        <div>
          <button id="submit">Create Account!</button>
        </div>
        <Link to="/Login">
          <h3>Already have an account!</h3>
        </Link>
      </Form>
      <p>{error}</p>
    </MainContainer>
  );
}

export default SignUpForm;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-contents: center;
  width: 60%;
  margin: auto;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  input {
    width: 60%;
    margin: 15px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #244f58;
  }
  input::placeholder {
    color: white;
    font-size: 1.2rem;
  }
`;
