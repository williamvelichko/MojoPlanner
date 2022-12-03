import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const VERIFY_EMAIL = "VERIFY_EMAIL";

export const verifyEmail = (type) => {
  return { type: VERIFY_EMAIL, payload: type };
};

export const getProjects = (user_id) => (dispatch) => {
  axios
    //.get(`https://mojoplanner.herokuapp.com/api/projects/user/${user_id}`)
    .get(`https://mojoplanner.herokuapp.com/api/projects/user/${user_id}`)
    .then((res) => {
      dispatch({ type: GET_PROJECTS, payload: res.data });
    });
};

export const addProject = (project, user_id) => (dispatch) => {
  axios
    .post(
      `https://mojoplanner.herokuapp.com/api/projects/newProject/${user_id}`,
      project
    )
    .then((res) => {
      dispatch({ type: ADD_PROJECT, payload: res.data });
    });
};

export const updateProject = (pr) => (dispatch) => {
  axios
    .put(
      `https://mojoplanner.herokuapp.com/api/projects/updateProject/${pr.project_id}`,
      pr
    )
    .then((res) => {
      dispatch({ type: EDIT_PROJECT, payload: res.data });
    });
};

export const deleteProject = (project_id) => (dispatch) => {
  axios
    .delete(`https://mojoplanner.herokuapp.com/api/projects/${project_id}`)
    .then((res) => {
      dispatch({ type: DELETE_PROJECT, payload: project_id });
    });
};

export const addTask = (task, project_id) => (dispatch) => {
  axios
    .post(
      `https://mojoplanner.herokuapp.com/api/projects/newTask/${project_id}`,
      task
    )
    .then((res) => {
      dispatch({ type: ADD_TASK, payload: res.data });
    });
};

export const editTask = (task) => (dispatch) => {
  axios
    .put(
      `https://mojoplanner.herokuapp.com/api/projects/task/${task.task_id}`,
      task
    )
    .then((res) => {
      dispatch({ type: EDIT_TASK, payload: res.data });
    });
};

export const deleteTask = (task_id) => (dispatch) => {
  axios
    .delete(
      `https://mojoplanner.herokuapp.com/api/projects/deleteTask/${task_id}`
    )
    .then((res) => {
      dispatch({ type: DELETE_TASK, payload: task_id });
    });
};

// export const getProjects = (project_id) => (dispatch) => {
//   axios.get(`http://localhost:4000/api/projects/${project_id}`).then((res) => {
//     dispatch({ type: GET_SINGLE_PROJECT, payload: res.data });
//   });
// };
