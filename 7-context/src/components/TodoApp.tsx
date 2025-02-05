import { useState } from "react";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todosState, setTodosState] = useState<ITodosContext>({
    todos: [new Todo("test")],
    add: () => {},
    remove: () => {},
    toggle: () => {},
  });

  todosState.add = (text: string) => {
    setTodosState({
      ...todosState,
      todos: [...todosState.todos, new Todo(text)],
    });
  };

  todosState.remove = (id: number) => {
    setTodosState({
      ...todosState,
      todos: todosState.todos.filter((t) => t.id !== id),
    });
  };

  todosState.toggle = (id: number) => {
    setTodosState({
      ...todosState,
      todos: todosState.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      }),
    });
  };

  return (
    <>
      <TodosContext.Provider value={todosState}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
};
