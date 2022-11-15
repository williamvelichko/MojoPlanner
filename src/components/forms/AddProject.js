import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addProject } from "../reducer/actions";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import jwtDecode from "jwt-decode";
function AddProject(props) {
  const { push } = useHistory();
  const params = useParams();
  const { dispatch, editing } = props;

  const jwt = jwtDecode(localStorage.getItem("token"));

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
      dispatch(addProject(project, jwt.subject));
      setTimeout(() => {
        push("/projectListings");
      }, 500);
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
            maxLength="60"
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
            maxLength="60"
          />
        </div>
        <Button>
          <button>
            <h4>
              Add Project <AddCircleOutlineIcon />
            </h4>
          </button>
          <p>{error}</p>
        </Button>
      </Form>
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
  p {
    color: red;
    font-weight: bold;
    font-family: fira sans;
  }
  @media (max-width: 420px) {
    button {
      width: 50%;
      h4 {
        width: 90%;
        font-size: 1rem;
      }
    }
  }
`;
