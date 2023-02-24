import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  deleteProject,
  deleteTask,
  taskComplete,
  taskCompleteRedo,
} from "../reducer/actions";
import { useHistory } from "react-router";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "../Loading";
import DeleteIcon from "@mui/icons-material/Delete";
function SingleProject(props) {
  const [result, setResult] = useState([]);
  const [noTasks, SetNoTasks] = useState(false);
  const { projects, dispatch, location } = props;
  const params = useParams();
  const { push } = useHistory();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://mojoplanner.herokuapp.com/api/projects/${params.id}`)
      .then((res) => {
        setResult(res.data);
      });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const deletePR = (e) => {
    e.preventDefault();
    dispatch(deleteProject(params.id));

    setTimeout(() => {
      push("/projectListings");
    }, 500);
  };
  const deleteTsk = (taskID) => {
    dispatch(deleteTask(taskID));

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  function finishedTask(id, task_finished) {
    console.log(id);
    console.log(task_finished);
    if (task_finished === false) {
      dispatch(taskComplete(id));
      setTimeout(() => {
        window.location.reload();
      }, 400);
    } else {
      dispatch(taskCompleteRedo(id));
      setTimeout(() => {
        window.location.reload();
      }, 400);
    }
  }

  return (
    <OverContainer>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        result.map((pr) => {
          return (
            <MainContainer key={pr.project_id}>
              <div>
                <ProjectName>
                  <div className="names">
                    <div className="titles">
                      <h3>Project-Name:</h3> <h2>{pr.project_name}</h2>
                    </div>
                    <div className="titles">
                      <h3>Project-Leader:</h3> <h2>{pr.project_leader}</h2>
                    </div>
                  </div>

                  <div className="addTask">
                    <Link className="button" to={`/addTask/${pr.project_id}`}>
                      <p>
                        Add Task{" "}
                        <AddCircleOutlineIcon sx={{ fontSize: "20px" }} />
                      </p>
                    </Link>
                  </div>
                </ProjectName>
                {pr.project_tasks.length === 0 && (
                  <NoTask>
                    <h3>No Current Tasks</h3>
                  </NoTask>
                )}
                {pr.project_tasks.map((tsk) => {
                  return (
                    <Information
                      key={tsk.task_id}
                      taskChecked={tsk.task_finished}
                    >
                      <div
                        className={
                          tsk.task_finished === false ? "eachTask" : "eachTask2"
                        }
                      >
                        <Checkbox>
                          <input
                            type="checkbox"
                            id="checkbox"
                            className="rounded-checkbox"
                            checked={tsk.task_finished}
                            onChange={() =>
                              finishedTask(tsk.task_id, tsk.task_finished)
                            }
                          />
                        </Checkbox>
                        <div className="task_info">
                          <div className="text_title">
                            <h5>Title:</h5>
                            <div className="underline">
                              <h4 className="task_name">{tsk.task_name}</h4>
                            </div>
                          </div>
                          <div className="text_task">
                            <h5>Task:</h5>
                            <div className="underline">
                              <h4 className="taskInfo">
                                {tsk.task_information}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="taskButtons">
                        <Link
                          className="editTask"
                          to={`/editTask/${pr.project_id}/${tsk.task_id}`}
                        >
                          <p>
                            <EditIcon
                              sx={{
                                fontSize: "30px",
                                "&:hover": {
                                  color: "black",
                                  transitionDuration: "0.3",
                                  fontSize: "33px",
                                },
                              }}
                            />
                          </p>
                        </Link>
                        <button
                          className="deleteTask"
                          onClick={() => deleteTsk(tsk.task_id)}
                        >
                          <p>
                            <DeleteIcon
                              sx={{
                                fontSize: "30px",
                                color: "red",
                                "&:hover": {
                                  color: "black",
                                  transitionDuration: "0.3",
                                  fontSize: "33px",
                                },
                              }}
                            />
                          </p>
                        </button>
                      </div>
                    </Information>
                  );
                })}
              </div>
            </MainContainer>
          );
        })
      )}

      <EndButtons>
        <Link className="editProject" to={`/editProject/${params.id}`}>
          <p>
            Edit Project <EditIcon sx={{ fontSize: "20px" }} />
          </p>
        </Link>

        <button className="deleteProject" onClick={deletePR}>
          <p>
            Delete Project <CheckCircleOutlineIcon sx={{ fontSize: "20px" }} />
          </p>
        </button>
      </EndButtons>
    </OverContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(SingleProject);

const OverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  width: 90%;
  margin: auto;
  // height: 85vh;
  margin-bottom: 100px;
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
      font-size: 1.5rem;
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

const Information = styled.div`
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
    //background-color: #ffffff;
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
      width: 100%;
    }
  }
`;

const Checkbox = styled.div`
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

const EndButtons = styled.div`
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

const NoTask = styled.div`
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
