import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addProject } from "../reducer/actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AddProject(props) {
  const { push } = useHistory();
  const params = useParams();
  const { dispatch, editing } = props;
  const [project, setProject] = useState({
    project_name: "",
    project_leader: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (project.project_name === "" || project.project_leader === "") {
      setError("ALL FIELDS ARE REQUIRED!");
    } else {
      dispatch(addProject(project));
      push("/projectListings");
    }
  };

  return (
    <MainContainer>
      <h2>Create new project</h2>
      <Form className="formContainer" onSubmit={submit}>
        <div className="category">
          <label>Project Title :</label>
          <input
            name="project_name"
            type="text"
            placeholder="Title"
            value={project.project_name}
            onChange={handleChange}
          />
        </div>
        <div className="category">
          <label>Project Leader :</label>

          <input
            name="project_leader"
            type="text"
            placeholder="Name"
            value={project.project_leader}
            onChange={handleChange}
          />
        </div>
        <Button>
          <button>
            <h4>
              Add Project <AddCircleOutlineIcon />
            </h4>{" "}
          </button>
        </Button>
      </Form>
      <p>{error}</p>
    </MainContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    editing: state.editing,
  };
};

export default connect(mapStateToProps)(AddProject);

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
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #bfc7d2;
  padding: 20px;
  width: 90%;
  height: 30vh;
  margin: auto;
  box-shadow: 30px 30px 2px black, 15px 15px 1px 2px rgba(0, 0, 0, 0);
  .category {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    display: flex;
    flex-direction: column;

    label {
      font-family: fira sans;
      font-size: 1.2rem;
    }

    input {
      padding: 10px;
      border-radius: 7px;
      :hover {
        border: 2px solid #257dae;
        box-shadow: 0px 0px 1px 1px #257dae;
        transition-duration: 0.2s;
      }
    }
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 100%;
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
`;
