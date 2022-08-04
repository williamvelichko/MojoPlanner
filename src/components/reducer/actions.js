import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT";

export const getProjects = () => (dispatch) => {
  axios.get("http://localhost:4000/api/projects/organized").then((res) => {
    dispatch({ type: GET_PROJECTS, payload: res.data });
  });
};

// export const getProjects = (project_id) => (dispatch) => {
//   axios.get(`http://localhost:4000/api/projects/${project_id}`).then((res) => {
//     dispatch({ type: GET_SINGLE_PROJECT, payload: res.data });
//   });
// };
