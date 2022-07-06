import React from "react";
import { connect } from "react-redux";

function ProjectListings(props) {
  const { projects } = props;
  console.log(projects);

  return (
    <div>
      <h1>projects</h1>
      {projects.map((pr) => {
        return (
          pr.project_leader,
          pr.project_name,
          pr.project_tasks.map((tsk) => {
            return tsk.task_name;
          })
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

export default connect(mapStateToProps)(ProjectListings);
