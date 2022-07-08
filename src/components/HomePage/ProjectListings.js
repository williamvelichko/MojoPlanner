import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProjectListings(props) {
  const { projects } = props;
  console.log(projects.project_id);

  const onSubmit = {};

  return (
    <div>
      <h1>Projects:</h1>
      {projects.map((pr) => {
        return (
          <div>
            <Link to={`/singleProject/${pr.project_id}`}>
              <h4>{pr.project_name}</h4>
              {pr.project_leader}
            </Link>
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
export default connect(mapStateToProps)(ProjectListings);
