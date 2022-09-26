import React from "react";
import styled from "styled-components";
import image from "../../images/webDevelopmentBackground.ed90dd85.png";
function LandingPage() {
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
  position: relative;
  z-index: 1;
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
`;

const Container2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  //justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  top: -120px;
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
`;
