import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addProject } from "../reducer/actions";
import { useParams } from "react-router-dom";
import { updateProject } from "../reducer/actions";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

function EditProject(props) {
  const { projects, dispatch } = props;

  const { push } = useHistory();
  const params = useParams();

  const [project, setProject] = useState({
    project_id: "",
    project_name: "",
    project_leader: "",
  });

  useEffect(() => {
    axios.get(`https://mojoplanner.herokuapp.com/api/projects`).then((res) => {
      res.data.map((pr) => {
        if (pr.project_id == params.id) {
          setProject(pr);
        }
      });
    });
  }, []);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProject(project));

    setTimeout(() => {
      push(`/singleProject/${params.id}`);
    }, 500);
  };
  const cancel = (e) => {
    e.preventDefault();
    setTimeout(() => {
      push(`/singleProject/${params.id}`);
    }, 500);
  };
  return (
    <MainContainer>
      <h2>Edit Project</h2>
      <Form>
        <div className="category">
          <label>ProjectName :</label>
          <input
            name="project_name"
            type="text"
            value={project.project_name}
            onChange={handleChange}
          />
        </div>
        <div className="category">
          <label>ProjectLeader :</label>
          <input
            name="project_leader"
            type="text"
            value={project.project_leader}
            onChange={handleChange}
          />
        </div>
        <Button>
          <button className="save" onClick={submit}>
            <h4>
              Save <EditIcon />
            </h4>
          </button>
          <button className="cancel" onClick={cancel}>
            <h4>
              Cancel <CancelIcon />
            </h4>
          </button>
        </Button>
      </Form>
      {/* <p>{error}</p> */}
    </MainContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(EditProject);

const MainContainer = styled.div`
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #bfc7d2;
  padding: 20px;
  width: 90%;
  //height: 30vh;
  margin: auto;
  box-shadow: 30px 30px 2px black, 15px 15px 1px 2px rgba(0, 0, 0, 0);
  .category {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label {
      font-family: fira sans;
      font-size: 1.2rem;
    }

    input {
      font-family: fira sans;
      margin: 10px 0px 10px 0px;
      padding: 10px;
      border-radius: 7px;
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

const Button = styled.div`
  display: flex;
  flex-direction: row;
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
    width: 20%;
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
  .save {
    background-color: #0b343d;
  }
  .cancel {
    background-color: #e46363;
  }
  @media (max-width: 420px) {
    button {
      width: 40%;
      height: 6.5vh;
      h4 {
        font-size: 1rem;
      }
    }
  }
`;
