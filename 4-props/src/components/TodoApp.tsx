import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { ShowTodos } from "./ShowTodos";
import { Todo } from "../models/Todo";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [sortOrder, setSortOrder] = useState(false);

  const addTodo = (text: string) => {
    setTodos([...todos, new Todo(Date.now(), text)]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  };

  const handleSort = () => {
    if (sortOrder) {
      setTodos([
        ...todos.sort((t1, t2) => {
          if (t1.text.toLowerCase() > t2.text.toLowerCase()) return 1;
          if (t1.text.toLowerCase() < t2.text.toLowerCase()) return -1;
          return 0;
        }),
      ]);
    } else {
      setTodos([
        ...todos.sort((t1, t2) => {
          if (t1.text.toLowerCase() > t2.text.toLowerCase()) return -1;
          if (t1.text.toLowerCase() < t2.text.toLowerCase()) return 1;
          return 0;
        }),
      ]);
    }

    setSortOrder(!sortOrder);
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <button onClick={handleSort}>Sortera</button>
      <ShowTodos
        theTodoList={todos.filter((t) => t.done)}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
      <ShowTodos
        theTodoList={todos.filter((t) => !t.done)}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
};
