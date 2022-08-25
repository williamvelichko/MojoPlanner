import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";

export const getProjects = () => (dispatch) => {
  axios.get("http://localhost:4000/api/projects/organized").then((res) => {
    dispatch({ type: GET_PROJECTS, payload: res.data });
  });
};

export const addProject = (project) => (dispatch) => {
  axios
    .post("http://localhost:4000/api/projects/newProject", project)
    .then((res) => {
      dispatch({ type: ADD_PROJECT, payload: res.data });
    });
};

export const updateProject = (pr) => (dispatch) => {
  axios
    .put(
      `http://localhost:4000/api/projects/updateProject/${pr.project_id}`,
      pr
    )
    .then((res) => {
      dispatch({ type: EDIT_PROJECT, payload: res.data });
    });
};

// export const getProjects = (project_id) => (dispatch) => {
//   axios.get(`http://localhost:4000/api/projects/${project_id}`).then((res) => {
//     dispatch({ type: GET_SINGLE_PROJECT, payload: res.data });
//   });
// };
