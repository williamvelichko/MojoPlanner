import { GET_PROJECTS, ADD_PROJECT } from "./actions";

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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;