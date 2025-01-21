import { Todo } from "../models/Todo";
import "./ShowTodos.css";

interface IShowTodosProps {
  theTodoList: Todo[];
  removeTodo: (i: number) => void;
  toggleTodo: (i: number) => void;
}

export const ShowTodos = (props: IShowTodosProps) => {
  console.log(props.theTodoList);

  return (
    <ul>
      {props.theTodoList.map((t) => {
        return (
          <li key={t.id}>
            <span className={t.done ? "done" : ""}>{t.text}</span>
            <button
              onClick={() => {
                props.removeTodo(t.id);
              }}
            >
              Ta bort
            </button>
            <button
              onClick={() => {
                props.toggleTodo(t.id);
              }}
            >
              {t.done ? "Oklar" : "Klar"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
