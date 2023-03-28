import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../reducer/actions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import jwtDecode from "jwt-decode";
import Loading from "../Loading";
import {
  ListingContainer,
  Bar,
  Box,
  ProjectSection,
  Item1,
  Item2,
  NoProjects,
} from "./HomePageCSS/ProjectListingCSS";

function ProjectListings(props) {
  const { projects, dispatch } = props;
  const jwt = jwtDecode(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getProjects(jwt.subject));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <ListingContainer>
      <Bar>
        <h2>Projects:</h2>
        <div className="button">
          <Link className="link" to="addproject">
            <p>
              Add Project <AddCircleOutlineIcon />
            </p>
          </Link>
        </div>
      </Bar>
      <Box>
        {loading ? (
          <Loading loading={loading} />
        ) : projects.length === 0 ? (
          <NoProjects>
            <h3>No Current Projects</h3>
          </NoProjects>
        ) : (
          projects.map((pr) => {
            return (
              <ProjectSection key={pr.project_id}>
                <Item1>
                  <div className="part1">
                    <h3>Project:</h3>
                  </div>
                  <div className="part2">
                    <h4>{pr.project_name}</h4>
                  </div>
                </Item1>

                <Item2>
                  <div className="part1">
                    <h3>Project-Leader:</h3>
                    <div className="tskAmount">
                      <p>Tasks:</p>
                      <p>{pr.project_tasks.length}</p>
                    </div>
                  </div>
                  <div className="part2">
                    <h4>{pr.project_leader}</h4>
                    <div className="button">
                      <Link
                        className="link"
                        to={`/singleProject/${pr.project_id}`}
                      >
                        <p>View Project</p>
                      </Link>
                    </div>
                  </div>
                </Item2>
              </ProjectSection>
            );
          })
        )}
      </Box>
    </ListingContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectListings);
