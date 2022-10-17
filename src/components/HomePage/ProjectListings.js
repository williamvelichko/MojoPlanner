import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProjects } from "../reducer/actions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import jwtDecode from "jwt-decode";

function ProjectListings(props) {
  const { projects, dispatch } = props;
  const jwt = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getProjects(jwt.subject));
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
        {projects.map((pr) => {
          return (
            // <ProjectContainer>
            <Link
              key={pr.project_id}
              className="link"
              to={`/singleProject/${pr.project_id}`}
            >
              <ProjectSection>
                <div className="items">
                  <h3>Project:</h3>
                  <h4>{pr.project_name}</h4>
                </div>

                <div className="items">
                  <h3>Project-Leader:</h3>
                  <h4>{pr.project_leader}</h4>
                </div>
              </ProjectSection>
            </Link>
            // </ProjectContainer>
          );
        })}
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

const ListingContainer = styled.div`
  font-family: Oxygen;
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  .link {
    text-decoration: none;
    color: black;
  }
`;

const Bar = styled.div`
display: flex;
flex-direction: row;
justify-content space-between;
align-content: center;
width: 100%;
margin-bottom: 30px;

h2{
font-family: fira sans;
font-weight: 20;
font-size: 2rem;
color: #FFFFFF

}

.button {
  display: flex;
  flex-direction; column;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  .link{
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
    text-decoration: none;
    border: 1px solid #257DAE;
    background-color: #257DAE;
 width: 100%;
 height: 6vh;

 border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  :hover {
    box-shadow: 0px 0px 3px 3px grey;
    transition-duration: 0.2s;
  }

p{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: #FFFFFF;
font-size: 1.2rem;
}
  }
}

`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  background-color: #d9d9d9;
  margin-bottom: 20px;
  :hover {
    background-color: grey;
  }
`;
const ProjectSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #d9d9d9;
  border-radius: 5px;
  margin-bottom: 30px;
  :hover {
    background-color: grey;
  }

  .items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
  }

  h3 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    font-size: 1rem;
    padding: 15px;
    margin: 0;
    width: 50%;
  }
  h4 {
    font-size: 1.3rem;
    padding: 5px;
    margin-right: 20px;
    font-weight: bold;
  }
`;
