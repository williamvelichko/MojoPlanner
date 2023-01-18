import {
  GET_PROJECTS,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  VERIFY_EMAIL,
  TASK_COMPLETE,
  TASK_COMPLETE_REDO,
} from "./actions";

const initialState = {
  projects: [],
  editing: false,
  verified: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_EMAIL:
      return {
        ...state,
        verified: action.payload,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload.sort((a, b) => {
          return a.project_id - b.project_id;
        }),
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case EDIT_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (res) => res.project_id !== action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        projects: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        projects: action.payload,
      };
    case TASK_COMPLETE:
      return {
        ...state,
        projects: action.payload,
      };
    case TASK_COMPLETE_REDO:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
