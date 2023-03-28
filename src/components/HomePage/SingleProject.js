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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "../Loading";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  OverContainer,
  MainContainer,
  ProjectName,
  Information,
  Checkbox,
  EndButtons,
  NoTask,
} from "./HomePageCSS/SingleProjectCSS";

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
                  console.log(tsk);
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
