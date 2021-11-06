import * as types from "./types";

type IToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];
export const getToDoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};

export const getToDoResponse = (payload: IToDo) => ({
  type: types.GET_TODO_RESPONSE,
  payload,
});
