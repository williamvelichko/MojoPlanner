import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addProject } from "../reducer/actions";
import { useParams } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import jwtDecode from "jwt-decode";
import { MainContainer, Form, Button } from "./formsCSS/AddProjectCSS";

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
