import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addProject } from "../reducer/actions";
import { useParams } from "react-router-dom";

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
    <div>
      <div>
        <form onSubmit={submit}>
          <h2>Add Project</h2>
          <label>ProjectName :</label>
          <input
            name="project_name"
            type="text"
            value={project.project_name}
            onChange={handleChange}
          />
          <label>ProjectLeader :</label>
          <input
            name="project_leader"
            type="text"
            value={project.project_leader}
            onChange={handleChange}
          />
          <button>Add Project!</button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    editing: state.editing,
  };
};

export default connect(mapStateToProps)(AddProject);
