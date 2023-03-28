import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MainContainer,
  Form,
  Fields,
  ButtonDiv,
  LinkDiv,
  ErrorMessage,
  Message,
} from "./formsCSS/SignUpFormCSS";

function SignUpForm() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (userInfo.email === "" || userInfo.password === "") {
      setError("ALL FIELDS ARE REQUIRED!");
    } else {
      axios
        .post("https://mojoplanner.herokuapp.com/api/auth/register", userInfo)
        .then((resp) => {
          setError("");
          setMessage(resp.data);
        })
        .catch((err) => {
          setMessage("");
          setError("Account Already Exists");
        });
    }
  };

  return (
    <MainContainer>
      <Form onSubmit={submit}>
        <div className="title">
          <h2>Create Account</h2>
        </div>
        <Fields>
          <input
            type="email"
            name="email"
            placeholder="Email:"
            value={userInfo.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password:"
            value={userInfo.password}
            onChange={handleChange}
          />
          {error !== "" && (
            <ErrorMessage>
              <p>{error}</p>
            </ErrorMessage>
          )}
        </Fields>

        <ButtonDiv>
          <button id="submit">
            <h3>Create Account!</h3>
          </button>
        </ButtonDiv>

        {message !== "" && (
          <Message>
            <p>{message}</p>
          </Message>
        )}

        <LinkDiv>
          <Link className="link" to="/Login">
            <h3>Already have an account!</h3>
          </Link>
        </LinkDiv>
      </Form>
    </MainContainer>
  );
}

export default SignUpForm;
