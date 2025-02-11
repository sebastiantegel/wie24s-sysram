import { FormEvent, useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { ActionType } from "../reducers/TodoReducer";

export const AddTodo = () => {
  const { dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Förändra state vid submit. Denna funktion körs
    // när en användare klickar på Spara eller trycker
    // enter i textrutan
    dispatch({
      type: ActionType.ADDED,
      payload: todoText,
    });

    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
