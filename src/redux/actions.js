import {
  CREATE_USER,
  DELETE_USER,
  EDITING_ID,
  GET_USERS,
  UPDATE_USER,
} from "./types";

export function getUsers() {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/users").then((data) =>
      data.json()
    );
    dispatch({ type: GET_USERS, payload: response });
    console.log(response);
  };
}
export function addContact(contact) {
  console.log(contact);
  return { type: CREATE_USER, payload: contact };
}
export function delContact(id) {
  return { type: DELETE_USER, payload: id };
}

export function editingId(user) {
  console.log(user);
  return { type: EDITING_ID, payload: user };
}
export function editContact(user) {
  console.log(user);
  return { type: UPDATE_USER, payload: user };
}
