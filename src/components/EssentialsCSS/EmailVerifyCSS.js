import styled from "styled-components";
export const Verified = styled.div`
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
