import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  MainContainer,
  Form,
  Fields,
  ButtonDiv,
  LinkDiv,
  ErrorMessage,
  Message,
} from "./formsCSS/LoginFormCSS";

function LoginForm(props) {
  const { push } = useHistory();

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
      setError("ALL FIELDS ARE REQUIRED");
    } else {
      axios
        .post("https://mojoplanner.herokuapp.com/api/auth/login", userInfo)
        .then((resp) => {
          if (resp.data.verified === false) {
            setError("");
            setMessage(`${resp.data.message}`);
          } else {
            localStorage.setItem("token", resp.data.token);
            push("/projectListings");
            window.location.reload();
          }
        })
        .catch((err) => {
          setMessage("");
          setError("Wrong Username or Password");
        });
    }
  };

  return (
    <MainContainer>
      <Form onSubmit={submit}>
        <div className="title">
          <h2>Login</h2>
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
            <h3>Login</h3>
          </button>
        </ButtonDiv>
        {message !== "" && (
          <Message>
            <p>{message}</p>
          </Message>
        )}

        <LinkDiv>
          <Link className="link" to="/Signup">
            <h3>Don't have an account?</h3>
          </Link>
        </LinkDiv>
      </Form>
    </MainContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    verified: state.verified,
  };
};

export default connect(mapStateToProps)(LoginForm);
