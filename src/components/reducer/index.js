import {
  GET_PROJECTS,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "./actions";

const initialState = {
  projects: [
    // {
    //   project_name: "Trip1",
    //   project_leader: "William",
    //   project_id: 1,
    //   project_tasks: [
    //     {
    //       task_name: "Food",
    //       info: "We need to figure the situation out who will be cooking",
    //     },
    //     {
    //       task_name: "Games",
    //       info: "find someone in charge to make games",
    //     },
    //   ],
    // },
  ],
  editing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
