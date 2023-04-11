import styled from "styled-components";

export const ListingContainer = styled.div`
  font-family: Oxygen;
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  .link {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 420px) {
    width: 95%;
  }
`;

export const Bar = styled.div`
display: flex;
flex-direction: row;
justify-content space-between;
align-content: center;
width: 100%;
margin-bottom: 30px;

h2{
font-family: fira sans;
font-weight: 20;
font-size: 2rem;
color: #FFFFFF

}

.button {
  display: flex;
  flex-direction; column;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  .link{
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
    text-decoration: none;
    border: 1px solid #257DAE;
    background-color: #257DAE;
 width: 100%;
 height: 6vh;

 border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  :hover {
    box-shadow: 0px 0px 3px 3px grey;
    transition-duration: 0.2s;
  }
 

p{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: #FFFFFF;
font-size: 1.2rem;
}
  }
}
@media (max-width: 420px){
  h2{
    font-size: 1.3rem;
  }
  .button{

    width: 40%;

    .link{
      height 5vh;
    p{
      font-size: 1rem;
    }
  }
  }
}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  background-color: #d9d9d9;
  margin-bottom: 20px;
  :hover {
    background-color: grey;
  }
`;
export const ProjectSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 30px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #739eb0;
  h3 {
    margin-left: 10px;
    font-size: 1rem;
    color: #ffffff;
  }
  h4 {
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;
    margin: 0px 0px 20px 0px;
    display: flex;
    justify-content: center;
  }
  .part1 {
    width: 100%;
  }
  @media (max-width: 420px) {
    width: 100%;
    flex-direction: row;
    h3 {
      margin: 0;
    }
    h4 {
      font-size: 1.1rem;
      margin: 0;
      border-bottom: 2px solid white;
    }

    .part1 {
      width: 20%;
      padding: 5px;
    }
    .part2 {
      width: 70%;
      padding: 5px;
    }
  }
`;

export const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  // align-items: center;
  width: 60%;
  background-color: #ffffff;
  h3 {
    font-size: 1rem;
    color: #739eb0;
    width: 70%;
    margin-left: 10px;
  }

  h4 {
    font-size: 1.5rem;
    color: #739eb0;
    font-weight: bold;
    width: 70%;
    margin: 0px 0px 20px 0px;
    display: flex;
    justify-content: center;
  }
  .part1 {
    height: 40%;
    display: flex;
    flex-direction: row;

    .tskAmount {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      width: 30%;
      margin: 0;
      p {
        color: #739eb0;
        margin: 0;
      }
    }
  }
  .part2 {
    display: flex;
    flex-direction: row;

    .button {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;

      .link {
        width: 80%;
        padding: 5px;
        background-color: #739eb0;
        border-radius: 5px;
        border: 1px solid transparent;
        :hover {
          box-shadow: 0px 0px 3px 3px grey;
          transition-duration: 0.2s;
        }
        p {
          margin: 0;
          color: #ffffff;
        }
      }
    }
    @media (max-width: 420px) {
      .link {
        padding: 0;
        p {
          font-size: 0.5rem;
          margin: 0;
        }
      }
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    .part1 {
      padding: 10px 10px 5px 10px;
    }
    .part2 {
      padding: 5px 10px 10px 10px;
    }
    h3 {
      margin: 0;
    }
    h4 {
      font-size: 1.1rem;
      margin: 0;
    }
  }
`;

export const NoProjects = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    color: red;
    font-size: 1.4rem;
    font-family: fira sans;
    border: 2px solid red;
    padding: 15px;
  }
`;
