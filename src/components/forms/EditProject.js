import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProject } from "../reducer/actions";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { MainContainer, Form, Button } from "./formsCSS/EditProjectCSS";

function EditProject(props) {
  const { dispatch } = props;

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
    </MainContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(EditProject);
