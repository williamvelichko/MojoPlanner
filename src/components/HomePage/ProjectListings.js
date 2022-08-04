import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProjects } from "../reducer/actions";

function ProjectListings(props) {
  const { projects, dispatch } = props;
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  console.log(projects);

  const onSubmit = {};

  return (
    <ListingContainer>
      <div>
        <h2>Projects:</h2>
      </div>
      <div>
        <Link to="addproject">Add Project</Link>
      </div>
      {projects.map((pr) => {
        return (
          <ProjectContainer>
            <Link className="link" to={`/singleProject/${pr.project_id}`}>
              <ProjectSection>
                <h3>Project:</h3>
                <h4>{pr.project_name}</h4>
              </ProjectSection>
              <ProjectSection>
                <h3>Project-Leader:</h3>
                <h4>{pr.project_leader}</h4>
              </ProjectSection>
            </Link>
          </ProjectContainer>
        );
      })}
    </ListingContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectListings);

const ListingContainer = styled.div`
  font-family: Oxygen;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  .link {
    text-decoration: none;
    color: black;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid black;
  padding: 10px;
  :hover {
    background-color: grey;
  }
`;
const ProjectSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.3rem;
    padding: 15px;
    margin: 0;
    width: 50%;
  }
  h4 {
    font-size: 1.2rem;
    padding: 5px;
  }
`;
