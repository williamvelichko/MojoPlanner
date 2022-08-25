import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addProject } from "../reducer/actions";
import { useParams } from "react-router-dom";
import { updateProject } from "../reducer/actions";

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
    axios.get(`http://localhost:4000/api/projects`).then((res) => {
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
    push(`/singleProject/${params.id}`);
  };
  const cancel = (e) => {
    e.preventDefault();
    push(`/singleProject/${params.id}`);
  };
  return (
    <div>
      <div>
        <form>
          <h2>Project</h2>
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
          <button onClick={submit}>save</button>
          <button onClick={cancel}>cancel</button>
        </form>
        {/* <p>{error}</p> */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(EditProject);