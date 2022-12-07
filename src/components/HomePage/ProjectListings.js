import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProjects } from "../reducer/actions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import jwtDecode from "jwt-decode";
import Loading from "../Loading";

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

  const [emptyArray, SetEmptyArray] = useState(false);

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
  @media (max-width: 420px) {
    width: 95%;
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
@media (max-width: 420px){
  h2{
    font-size: 1.3rem;
  }
  .button{

    width: 40%;

    .link{
      height 5vh;
    p{
      font-size: 1rem;
    }
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
  //background-color: #d9d9d9;
  border-radius: 5px;
  margin-bottom: 30px;

  // :hover {
  //   background-color: grey;
  // }
`;

const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //align-items: center;
  width: 40%;
  background-color: #739eb0;
  h3 {
    margin-left: 10px;
    font-size: 1rem;
    color: #ffffff;
  }
  h4 {
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;
    margin: 0px 0px 20px 0px;
    display: flex;
    justify-content: center;
  }
  .part1 {
    width: 100%;
  }
  @media (max-width: 420px) {
    h4 {
      font-size: 1.1rem;
    }
  }
`;

const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  // align-items: center;
  width: 60%;
  background-color: #ffffff;
  h3 {
    font-size: 1rem;
    color: #739eb0;
    width: 70%;
    margin-left: 10px;
  }

  h4 {
    font-size: 1.5rem;
    color: #739eb0;
    font-weight: bold;
    width: 70%;
    margin: 0px 0px 20px 0px;
    //margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  .part1 {
    height: 40%;
    display: flex;
    flex-direction: row;

    .tskAmount {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      width: 30%;
      margin: 0;
      p {
        color: #739eb0;
        margin: 0;
      }
    }
  }
  .part2 {
    display: flex;
    flex-direction: row;

    .button {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;

      .link {
        width: 80%;
        padding: 5px;
        background-color: #739eb0;
        border-radius: 5px;
        border: 1px solid transparent;
        :hover {
          box-shadow: 0px 0px 3px 3px grey;
          transition-duration: 0.2s;
        }
        p {
          margin: 0;
          color: #ffffff;
        }
      }
    }
    @media (max-width: 420px) {
      .link {
        padding: 0;
        //margin: 0px 10px 0px 10px;
        p {
          font-size: 0.5rem;
          margin: 0;
        }
      }
    }
  }
  @media (max-width: 420px) {
    h4 {
      font-size: 1.1rem;
    }
  }
`;

const NoProjects = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    color: red;
    font-size: 1.4rem;
    font-family: fira sans;
    border: 2px solid red;
    padding: 15px;
  }
`;
