import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Form = styled.form`
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

export const Fields = styled.div`
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

export const ButtonDiv = styled.div`
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

export const LinkDiv = styled.div`
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

export const ErrorMessage = styled.div`
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

export const Message = styled.p`
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
