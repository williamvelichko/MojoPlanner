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
          <label>ProjectName :</label>
          <input
            name="project_name"
            type="text"
            placeholder="Project Name"
            value={project.project_name}
            onChange={handleChange}
          />
        </div>
        <div className="category">
          <label>ProjectLeader :</label>

          <input
            name="project_leader"
            type="text"
            placeholder="Project Leader"
            value={project.project_leader}
            onChange={handleChange}
          />
        </div>
        <Button>
          <h4>
            Add Project <AddCircleOutlineIcon />
          </h4>{" "}
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
  .category {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    display: flex;
    flex-direction: column;

    label {
      font-family: fira sans;
    }

    input {
      padding: 10px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  justify-content: space-evenly;
  padding: 0;
  height: 7vh;
  width: 20%;
`;
