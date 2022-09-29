import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { deleteProject, deleteTask } from "../reducer/actions";
import { useHistory } from "react-router";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
                <div>
                  <h4>
                    Title: <h5>{tsk.task_name}</h5>
                  </h4>

                  <h4>
                    Task: <h5>{tsk.task_information}</h5>
                  </h4>

                  <Link to={`/editTask/${pr.project_id}/${tsk.task_id}`}>
                    Edit Task!
                  </Link>
                  <button onClick={() => deleteTsk(tsk.task_id)}>
                    <p>Task Finished!</p>
                  </button>
                </div>
              );
            })}
            <div>
              <Link to={`/editProject/${pr.project_id}`}>Edit Project</Link>
            </div>
            <button onClick={deletePR}>Delete Project</button>
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
    color: #FFFFFF
    
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
