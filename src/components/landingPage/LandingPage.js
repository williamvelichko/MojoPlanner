import React from "react";
import styled from "styled-components";
import image from "../../images/webDevelopmentBackground.ed90dd85.png";
import { useAuth0 } from "@auth0/auth0-react";

function LandingPage() {
  const { user, getAccessTokenSilently } = useAuth0();
  const token = () => {
    getAccessTokenSilently();
  };
  console.log(token);

  return (
    <LandingContainer>
      <Container1>
        <img
          className="image1"
          src="https://blog.planview.com/wp-content/uploads/2020/02/Project-Planning-and-Delivery.jpg"
          alt="Image1"
        ></img>
        <div className="par1">
          <h2>Making planning easier and more desirable</h2>
        </div>
      </Container1>
      <Container2>
        <img
          className="image2"
          src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1317983109_471583_iaol1a.jpg"
          alt="manimage"
        ></img>
        <div className="par2">
          <h2>Organize and keep track</h2>
        </div>
      </Container2>
    </LandingContainer>
  );
}

export default LandingPage;

const LandingContainer = styled.div`
  margin: 0;
  width: 100%;
  diplay: flex;
  flex-direction: column;
  background-color: #244f58;
  img {
    width: 45%;
  }
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //justify-content: space-between;
  align-items: center;
  //position: relative;
  //z-index: 1;
  margin-top: 30px;

  .image1 {
    margin-left: 140px;
  }
  .par1 {
    width: 20%;
    margin-bottom: 130px;
    margin-left: 200px;
    h2 {
      font-size: 2rem;
      font-family: Fira Sans;
      font-weight: 50;
      color: #ffffff;
    }
  }
  @media (max-width: 420px) {
    flex-direction: column;
    margin: 0;
    .par1 {
      width: 40%;
      margin: 0;
      width: 80%;
      margin-top: 30px;
      text-align: center;
      h2 {
        font-size: 1.2rem;
      }
    }
    .image1 {
      margin: 0;
      margin-top: 30px;
      width: 80%;
    }
  }
`;

const Container2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  //justify-content: space-evenly;
  align-items: center;
  //z-index: 2;
  //top: -120px;
  .image2 {
    margin-right: 140px;
  }
  .par2 {
    width: 20%;
    margin-top: 130px;
    margin-right: 200px;

    h2 {
      font-size: 2rem;
      font-family: Fira Sans;
      font-weight: 50;
      color: #ffffff;
    }
  }
  @media (max-width: 420px) {
    flex-direction: column;
    margin: 0;
    .par2 {
      width: 40%;

      margin: 0;
      width: 80%;
      margin-top: 30px;
      text-align: center;
      h2 {
        font-size: 1.2rem;
      }
    }
    .image2 {
      margin: 0;
      margin-top: 30px;
      width: 80%;
    }
  }
`;
