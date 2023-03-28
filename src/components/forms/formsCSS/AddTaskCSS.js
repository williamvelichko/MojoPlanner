import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: fira sans;
    color: #ffffff;
    font-weight: 30;
    font-size: 1.8rem;
  }
  @media (max-width: 420px) {
    h2 {
      font-size: 1.6rem;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #bfc7d2;
  padding: 0px 20px 0px 20px;
  width: 90%;
  height: 50vh;
  margin: auto;
  box-shadow: 30px 30px 2px black, 15px 15px 1px 2px rgba(0, 0, 0, 0);
  .category1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20%;
    display: flex;
    flex-direction: column;

    label {
      font-family: fira sans;
      font-size: 1.2rem;
    }

    .input {
      font-family: fira sans;
      padding: 10px;
      border-radius: 7px;
      border: 2px solid black;
      :hover {
        border: 2px solid #257dae;
        box-shadow: 0px 0px 1px 1px #257dae;
        transition-duration: 0.2s;
      }
    }
  }
  .category2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    display: flex;
    flex-direction: column;

    label {
      font-family: fira sans;
      font-size: 1.2rem;
    }
    textarea {
      margin-top: 20px;
    }
    .input {
      font-family: fira sans;
      padding: 10px;
      border-radius: 7px;
      border: 2px solid black;
      :hover {
        border: 2px solid #257dae;
        box-shadow: 0px 0px 1px 1px #257dae;
        transition-duration: 0.2s;
      }
    }
  }
  @media (max-width: 420px) {
    width: 75%;
    padding: 10px;
    .category {
      label {
        font-size: 1rem;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  //height: 7vh;
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
    height: 7vh;
    background-color: #257dae;
    padding: 0;
    border-radius: 5px;
    border: 1px solid transparent;
    :hover {
      box-shadow: 0px 0px 3px 3px grey;
      transition-duration: 0.2s;
    }
    h4 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 60%;
      color: #ffffff;
      font-weight: 30;
      font-size: 1.2rem;
    }
  }

  p {
    color: red;
    font-weight: bold;
    font-family: fira sans;
  }
  @media (max-width: 420px) {
    button {
      width: 50%;
      h4 {
        width: 90%;
        font-size: 1rem;
      }
    }
  }
`;
