import { FormEvent, useReducer, useState } from "react";
import { TodosReducer } from "../reducers/TodosReducer";

export const TodoApp = () => {
  //   const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const [userInput, setUserInput] = useState("");

  //   const remove = (id: number) => {
  //     setTodos(todos.filter((t) => t.id !== id));
  //   };

  //   const toggle = (id: number) => {
  //     setTodos(
  //       todos.map((t) => {
  //         if (t.id === id) {
  //           return { ...t, done: !t.done };
  //         }
  //         return t;
  //       })
  //     );
  //   };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "ADDED",
      payload: userInput,
    });

    setUserInput("");
  };

  const handleRemove = (id: number) => {
    dispatch({
      type: "REMOVED",
      payload: id.toString(),
    });
  };

  const handleToggle = (id: number) => {
    dispatch({
      type: "TOGGLED",
      payload: id.toString(),
    });
  };

  return (
    <>
      <h2>Todos</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
      </form>

      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span className={t.done ? "done" : ""}>{t.text}</span>
              <button onClick={() => handleToggle(t.id)}>Ändra</button>
              <button onClick={() => handleRemove(t.id)}>Ta bort</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
