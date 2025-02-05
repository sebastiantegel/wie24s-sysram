import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const Todos = () => {
  const { todos, remove, toggle } = useContext(TodosContext);

  return (
    <>
      <h3>Todos</h3>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span className={t.done ? "done" : ""}>{t.text}</span>
              <Button onClick={() => remove(t.id)}>Ta bort</Button>
              <Button onClick={() => toggle(t.id)}>Ändra</Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
