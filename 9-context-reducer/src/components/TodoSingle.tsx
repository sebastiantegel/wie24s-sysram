import { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodosContext } from "../contexts/TodosContext";
import { ActionType } from "../reducers/TodoReducer";

type TodoSingleProps = {
  todo: Todo;
};

export const TodoSingle = ({ todo }: TodoSingleProps) => {
  const { dispatch } = useContext(TodosContext);

  const handleToggle = () => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: todo.id.toString(),
    });
  };

  const handleRemove = () => {
    dispatch({
      type: ActionType.REMOVED,
      payload: todo.id.toString(),
    });
  };

  return (
    <>
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={handleToggle}>Ändra</button>
        <button onClick={handleRemove}>Ta bort</button>
      </li>
    </>
  );
};
