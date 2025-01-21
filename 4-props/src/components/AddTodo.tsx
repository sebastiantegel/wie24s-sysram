import { FormEvent, useState } from "react";

interface IAddTodoProps {
  addTodo: (t: string) => void;
}

export const AddTodo = (props: IAddTodoProps) => {
  const [todoText, setTodoText] = useState("");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    props.addTodo(todoText);

    setTodoText("");
  };

  return (
    <form onSubmit={handleSave}>
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button>Spara</button>
    </form>
  );
};
