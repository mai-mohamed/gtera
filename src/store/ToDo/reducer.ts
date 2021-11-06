import * as types from "./types";

const INITIAL_STATE = {};

export default (
  state = INITIAL_STATE,
  action: { payload: any; type: "GET_TODO_RESPONSE" }
) => {
  switch (action.type) {
    case types.GET_TODO_RESPONSE:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
