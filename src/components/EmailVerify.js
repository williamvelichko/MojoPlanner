import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { verifyEmail } from "./reducer/actions";
import { Verified } from "./EssentialsCSS/EmailVerifyCSS";

function EmailVerify(props) {
  const { dispatch } = props;
  const params = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `https://mojoplanner.herokuapp.com/api/auth/${params.user_id}/verify/${params.token}`;
        const { data } = await axios.get(url);
        dispatch(verifyEmail(true));
      } catch (error) {
        dispatch(verifyEmail(true));
      }
    };
    verifyEmailUrl();
  }, [params]);

  return (
    <div>
      {props.verified ? (
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

const mapStateToProps = (state) => {
  return {
    verified: state.verified,
  };
};

export default connect(mapStateToProps)(EmailVerify);
