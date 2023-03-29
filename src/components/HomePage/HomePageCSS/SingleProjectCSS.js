import styled from "styled-components";
export const OverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  width: 90%;
  margin: auto;
  // height: 85vh;
  margin-bottom: 100px;
`;

export const ProjectName = styled.div`
display: flex;
flex-direction: row;
width: 100%
justify-content: space-between;
align-items: center;
border-bottom: 3px solid #FFFFFF;
.names {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  .titles{
    display: flex;
    flex-direction: row;
    width: 40%;
align-items: center;
    h3{
      font-weight: 40;
      font-family: fira sans;
      color: #FFFFFF;
      font-size: 1.2rem;
      
    }
    h2{
      font-weight: 40;
      font-family: fira sans;
      color: #FFFFFF;
      font-size: 1.2rem;
      margin-left: 20px;
    }
  }
 

@media(max-width: 420px){
  width: 80%;
.titles{
  width: 50%;
  justify-content: none;
  
h3{
  font-size: 0.5rem;
}
h2{
  
  font-size: 0.7rem;
  margin-left: 6px;
}
}
}
}
.addTask{
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .button{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
     text-decoration: none;
     border: 1px solid #257DAE;
     background-color: #257DAE;
  width: 50%;
  height: 5vh;
 
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
    width: 80%;
     font-family: fira sans;
     color: #FFFFFF
     
   }
  }
  @media(max-width: 420px){
    width: 20%;
  .button{
    width: 100%;
    height: 4vh;
    p{
      width: 90%;
      font-size: 0.6rem;
    }
  }
  }
}
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.taskChecked ? "#adb5bd" : "#ffffff")};
  border-radius: 10px;
  justify-content: space-between;
  margin-top: 20px;
  .eachTask {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .text_title,
  .text_task {
    display: flex;
    flex-direction: row;
  }
  .text_title {
    width: 30%;
  }
  .text_task {
    width: 100%;
  }
  .taskButtons {
    display: flex;
    flex-direction: row;
    width: 20%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border-radius: 10px;
  }
  .deleteTask {
    background-color: ${(props) => (props.taskChecked ? "#adb5bd" : "#ffffff")};
    border: none;
  }
  .underline {
    display: flex;
    border-bottom: 2px solid black;
    padding: 0;
    margin: 20px 15px 20px 15px;
    width: 100%;
  }
  h4 {
    margin: 0;
    padding: 5px;
    font-family: fira sans;
    color: #black;
    font-weight: 50;
    margin: 0;
  }
  h5 {
    padding: 5px;
    margin-left: 5px;
    font-family: fira sans;
    color: #black;
    font-weight: 50;
  }

  .eachTask2 {
    display: flex;
    flex-direction: row;
    width: 100%;
    h4 {
      text-decoration: line-through;
    }
  }
  .task_info {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    .task_info {
      flex-direction: column;
    }

    .text_title {
      width: 100%;
      h5 {
        margin: 5px;
        font-size: 0.8rem;
      }
      h4 {
        font-size: 0.8rem;
      }
      padding: 0;
      .underline {
        margin: 5px;
      }
    }
    .text_task {
      h5 {
        font-size: 0.8rem;
      }
      h4 {
        font-size: 0.8rem;
      }
      width: 100%;
      .underline {
        margin: 10px 5px 10px 5px;
      }
    }

    .taskButtons {
      display: flex;
      width: 100%;
      .editTask {
        p {
          margin: 0;
        }
      }
    }
  }
`;

export const Checkbox = styled.div`
  display: flex;

  .rounded-checkbox {
    margin: auto;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid black;
    :hover {
      border: 2px solid black;
    }
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }
  .rounded-checkbox:checked {
    appearance: auto;
    clip-path: circle(50% at 50% 50%);
    background-color: black;
    .eachTask {
      background-color: black;
    }
  }
`;

export const EndButtons = styled.div`
  width: 100%;
  padding: 20px 0px 20px 0px;
  position: fixed;
  bottom: 0%;
  opacity: 1;
  background-color: #244f58;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  .editProject,
  .deleteProject {
    width: 20%;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 3px;
    :hover {
      box-shadow: 0px 0px 3px 3px grey;
      transition-duration: 0.2s;
    }
    p {
      margin: 0;
      color: #ffffff;
      font-family: fira sans;
      font-weight: bold;
      font-size: 1.3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 70%;
      margin: auto;
    }
  }
  .editProject {
    background-color: #0b343d;
    text-decoration: none;
  }
  .deleteProject {
    background-color: #e46363;
  }

  @media (max-width: 420px) {
    .editProject,
    .deleteProject {
      width: 30%;
      p {
        font-size: 0.7rem;
        width: 90%;
      }
    }
  }
  @media (max-width: 1100px) {
    .editProject,
    .deleteProject {
      width: 25%;
    }
  }
  @media (max-width: 820px) {
    .editProject,
    .deleteProject {
      width: 35%;
    }
  }
`;

export const NoTask = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  h3 {
    color: red;
    font-size: 1.4rem;
    font-family: fira sans;
    border: 2px solid red;
    padding: 15px;
  }
`;
