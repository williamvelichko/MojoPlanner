import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
function EmailVerify() {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `https://mojoplanner.herokuapp.com/api/auth/${params.user_id}/verify/${params.token}`;

        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params]);

  return (
    <div>
      {validUrl ? (
        <Verified>
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button>
              <p>Login</p>
            </button>
          </Link>
        </Verified>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
}

export default EmailVerify;

const Verified = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    font-family: fira sans;
    border: 1px solid transparant;
    border-radius: 15px;
    padding: 15px;
    background-color: white;
    color: black;
  }
  button {
    padding: 0px 50px 0px 50px;
    //border-radius: 15px;
    border: none;
    //background-color: #257dae;
    p {
      font-family: fira sans;
      font-size: 1.3rem;
      font-weight: 500;
      // color: white;
    }
    :hover {
      box-shadow: 0px 0px 3px 3px grey;
      transition-duration: 0.2s;
    }
  }
`;
