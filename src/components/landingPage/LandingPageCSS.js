import styled from "styled-components";

export const LandingContainer = styled.div`
  margin: 0;
  width: 100%;
  diplay: flex;
  flex-direction: column;
  background-color: #244f58;
  img {
    width: 45%;
  }
`;
export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
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

export const Container2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  align-items: center;
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

export const VidContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .container_title {
    margin-top: 100px;
    border-top: 2px solid #ffffff;
    display: flex;
    justify-content: center;
    width: 100%;
    h3 {
      font-size: 2rem;
      font-family: Fira Sans;
      font-weight: 50;
      color: #ffffff;

      @media (max-width: 420px) {
        font-size: 1.5rem;
      }
    }
  }

  .container_subTitle {
    display: flex;
    justify-content: center;
    width: 100%;
    h4 {
      font-size: 2rem;
      font-family: Fira Sans;
      font-weight: 50;
      color: #ffffff;

      background: linear-gradient(
          to right,
          rgba(100, 200, 200, 1),
          rgba(100, 200, 200, 1)
        ),
        linear-gradient(
          to right,
          rgba(255, 0, 0, 1),
          rgba(255, 0, 180, 1),
          rgba(0, 100, 200, 1)
        );
      background-size: 100% 3px, 0 3px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;

      @media (max-width: 420px) {
        font-size: 1.6rem;
      }
    }
    h4:hover {
      background-size: 0 3px, 100% 3px;
    }
    .link {
      text-decoration: none;
    }
  }

  .video {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 50px;
    align-items: center;
    p {
      width: 70%;
      font-family: Fira Sans;
      color: #ffffff;

      @media (max-width: 420px) {
        width: 100%;
        font-size: 0.8rem;
      }
    }
    video {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      width: 70%;
      height: 90%;

      @media (max-width: 420px) {
        width: 100%;
      }
    }
  }
`;
