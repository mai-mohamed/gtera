import axios from "axios";

export const getToDo = async () =>
  await axios.get(`https://jsonplaceholder.typicode.com/todos`);
