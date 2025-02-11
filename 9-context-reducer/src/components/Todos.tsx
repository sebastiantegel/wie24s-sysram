import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoSingle } from "./TodoSingle";

export const Todos = () => {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <ul>
        {todos
          .filter((t) => !t.done)
          .map((t) => (
            <TodoSingle todo={t} />
          ))}
      </ul>
      <ul>
        {todos
          .filter((t) => t.done)
          .map((t) => (
            <TodoSingle todo={t} />
          ))}
      </ul>
    </>
  );
};
