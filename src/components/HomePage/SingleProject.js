import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function SingleProject(props) {
  const [result, setResult] = useState([]);
  const { projects } = props;
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/projects/${params.id}`).then((res) => {
      setResult(res.data);
    });
  }, []);
  return (
    <div>
      {result.map((pr) => {
        return (
          <div>
            <div>
              <h3>{pr.project_name}</h3>
              <h4>{pr.project_leader}</h4>
            </div>
            <Link to={`/editProject/${params.id}`}>Edit Project</Link>
            <div>
              <Link to="/addtask">Add Task</Link>
            </div>
            {pr.project_tasks.map((tsk) => {
              return (
                <div>
                  <h5>{tsk.task_name}</h5>
                  <h5>{tsk.info}</h5>
                  <Link to="/editTask">Edit Task!</Link>
                  <button>Task Finished!</button>
                </div>
              );
            })}
          </div>
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
