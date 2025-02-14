import { createContext } from "react";
import { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  add: (text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  add: () => {},
  remove: () => {},
  toggle: () => {},
});
