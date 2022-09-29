import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { deleteProject, deleteTask } from "../reducer/actions";
import { useHistory } from "react-router";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
function SingleProject(props) {
  const [result, setResult] = useState([]);
  const { projects, dispatch } = props;
  const params = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/projects/${params.id}`).then((res) => {
      setResult(res.data);
    });
  }, []);

  const deletePR = (e) => {
    e.preventDefault();
    dispatch(deleteProject(params.id));
    push("/projectListings");
  };
  const deleteTsk = (taskID) => {
    dispatch(deleteTask(taskID));
    push(`/singleProject/${params.id}`);
  };

  return (
    <div>
      {result.map((pr) => {
        return (
          //<MainContainer>
          <MainContainer>
            <ProjectName>
              <div className="names">
                <h3>{pr.project_name}</h3>
                <h3>{pr.project_leader}</h3>
              </div>

              <div className="addTask">
                <Link className="button" to={`/addTask/${pr.project_id}`}>
                  <p>
                    Add Task <AddCircleOutlineIcon />
                  </p>
                </Link>
              </div>
            </ProjectName>
            {pr.project_tasks.map((tsk) => {
              return (
                <Information>
                  <div className="eachTask">
                    <div className="text">
                      <h5>Title:</h5>
                      <h4>{tsk.task_name}</h4>
                    </div>
                    <div className="text">
                      <h5>Task:</h5>
                      <h4 className="taskInfo">{tsk.task_information}</h4>
                    </div>
                  </div>
                  <div className="taskButtons">
                    <Link
                      className="editTask"
                      to={`/editTask/${pr.project_id}/${tsk.task_id}`}
                    >
                      <p>
                        Edit Task <EditIcon />
                      </p>
                    </Link>
                    <button
                      className="deleteTask"
                      onClick={() => deleteTsk(tsk.task_id)}
                    >
                      <p>
                        Task Finished <CheckCircleOutlineIcon />
                      </p>
                    </button>
                  </div>
                </Information>
              );
            })}
            <EndButtons>
              <Link
                className="editProject"
                to={`/editProject/${pr.project_id}`}
              >
                Edit Project
              </Link>

              <button className="deleteProject" onClick={deletePR}>
                Delete Project
              </button>
            </EndButtons>
          </MainContainer>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(SingleProject);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  height: 100vh;
`;

const ProjectName = styled.div`
display: flex;
flex-direction: row;
width: 100%
justify-content: space-between;
align-items: center;
.names {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  h3{
    font-weight: 40;
    font-family: fira sans;
    color: #FFFFFF;
    font-size: 1.4rem;
    
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
}
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d9d9d9;

  .eachTask {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 20px;
    .text {
      margin-left: 20px;
      display: flex;
      flex-direciton: row;
      justify-content: space-between;
      margin-bottom: 10px;
      h5,
      h4 {
        font-family: fira sans;
        color: #bkack;
        font-weight: 50;
        font-size: 1.1rem;
        margin: 0;
      }
      h4 {
        width: 90%;
        background-color: #ffffff;
        padding: 10px;
        border: 1px solid #e46363;
      }
      .taskInfo {
        height: 15vh;
      }
    }
  }

  .taskButtons {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    .editTask,
    .deleteTask {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-decoration: none;
      width: 70%;
      height: 7vh;
      border: 1px solid transparent;
      border-radius: 10px 10px 10px;
      p {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 60%;
        color: #ffffff;
        font-family: fira sans;
        font-size: 1.1rem;
      }
    }
    .editTask {
      background-color: #244f58;
    }
    .deleteTask {
      background-color: #e46363;
    }
  }
`;

const EndButtons = styled.div`
  width: 100%;
  //position: sticky;
  display: flex;
  //   flex-direction: row;
  //   justify-content: space-between:
`;
