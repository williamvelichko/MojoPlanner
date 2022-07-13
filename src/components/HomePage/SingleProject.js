import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProject(props) {
  const { projects } = props;
  const params = useParams();

  const result = projects.filter((pr) => (pr.project_id = params));

  return (
    <div>
      {result.map((pr) => {
        return (
          <div>
            <h3>{pr.project_name}</h3>
            <h4>{pr.project_leader}</h4>
            {pr.project_tasks.map((tsk) => {
              return (
                <div>
                  <h5>{tsk.task_name}</h5>
                  <h5>{tsk.info}</h5>
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
