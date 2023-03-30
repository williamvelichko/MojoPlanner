import styled from "styled-components";
export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-family: Poppins;
  background-color: #244F58;
  
  @media (max-width: 420px) {
    //justify-content: space-evenly;
  }


} 
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  margin-left: 30px;
  .logo {
    text-decoration: none;
    color: #ffffff;
  }
  @media (max-width: 420px) {
    width: 40%;
    margin: 0;
    h1 {
      font-size: 1.4rem;
    }
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-evenly;
  button {
    padding-left: 15px;
    padding-right: 15px;
    background-color: #244f58;
    border: 1px solid #244f58;
  }
  .link1 {
    text-decoration: none;
    font-size: 1.4rem;
    color: #ffffff;

    background-image: linear-gradient(
      to right,
      #257dae,
      #257dae 50%,
      #ffffff 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
  }
  .link1:hover {
    background-position: 0;
  }

  .link2 {
    text-decoration: none;
    font-size: 1.4rem;
    color: #ffffff;

    background-image: linear-gradient(
      to right,
      #257dae,
      #257dae 50%,
      #ffffff 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
  }
  .link2:hover {
    background-position: 0;
  }

  @media (max-width: 420px) {
    margin-right: 10px;
    justify-content: space-between;
    width: 45%;
    .link1 {
      font-size: 0.9rem;
    }
    .link2 {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 370px) {
    margin-right: 10px;
    justify-content: space-between;
    width: 45%;
    .link1 {
      font-size: 0.8rem;
    }
    .link2 {
      font-size: 0.8rem;
    }
  }
`;
