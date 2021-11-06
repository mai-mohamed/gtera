import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToDoRequest } from "../../store/ToDo/actions";

const ToDo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todo }: { todo: any }) => todo.todos);
  useEffect(() => {
    dispatch(getToDoRequest());
  }, []);

  type IToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  return (
    <div>
      {todos?.length > 0 &&
        todos.map((todo: IToDo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
};

export default ToDo;
