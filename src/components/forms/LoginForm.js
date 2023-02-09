import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

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

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-contents: center;
  background-color: #3e707a;
  width: 50%;
  margin: auto;
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  .title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    h2 {
      font-family: fira sans;
      color: white;
      font-weight: 20;
    }
  }
  @media (max-width: 420px) {
    width: 80%;
  }
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;
  input {
    width: 60%;
    margin: 15px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid white;
    background-color: #3e707a;
  }
  input::value {
    color: white;
  }
  input:hover {
    border: 1px solid white;
    border-radius: 5px;
  }

  input::placeholder {
    color: white;
    font-size: 1.2rem;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0px 30px 0px;
  button {
    width: 60%;
    padding: 3px;
    background-color: #244f58;
    border: 1px solid transparent;

    h3 {
      font-size: 1.1rem;
      color: white;
      font-weight: 20;
    }
  }
  button: hover {
    border: 1px solid white;
    transition-duration: 0.2s;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  margin-top: 15px;
  .link {
    text-decoration: none;
    width: 100%;
    //background-color: #257dae;
    background-color: #244f58;
    h3 {
      font-family: fira sans;
      color: white;
      font-weight: 20;
    }
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60%;

  p {
    padding: 0;
    font-family: fira sans;
    color: #90e0ef;
    font-size: 1rem;
    margin: 0;
  }
`;
const Message = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    background-color: #90e0ef;
    padding: 12px;
    font-family: fira sans;
    color: black;
    font-weight: 10;
    font-size: 1rem;
    margin: 0;
  }
  margin-bottom: 10px;
  @media (max-width: 420px) {
    width: 80%;
  }
`;
