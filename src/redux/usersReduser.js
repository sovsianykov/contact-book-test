import {
  CREATE_USER,
  DELETE_USER,
  EDITING_ID,
  GET_USERS,
  UPDATE_USER,
} from "./types";

const initialState = {
  users: [{ id: -1 , name: "", lastname: "", age: "", pager: "" }],
  editing: { id: 0, name: "", lastname: "", age: "", pager: "" },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case EDITING_ID:
      return {
        ...state,
        editing: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user, i) => {
          return i + 1 === action.payload.id ? action.payload : user;
        }),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
}
export default usersReducer;
