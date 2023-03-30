import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #64dfdf;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: Fira Sans;
  margin-top: 50px;
  text-align: center;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 420px) {
    width: 90%;
    height: 190px;
    margin-bottom: 20px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  h5 {
    margin: 0;
    display: flex;
    align-items: center;
  }
  .contact_info {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (max-width: 420px) {
    width: 90%;
    height: 190px;
    margin-bottom: 20px;
  }
`;

export const Personal = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  .socials {
    display: flex;
    justify-content: space-evenly;

    a {
      text-decoration: none;
      color: black;
    }
  }
  @media (max-width: 420px) {
    width: 90%;
    height: 190px;
    margin-bottom: 20px;
  }
`;
