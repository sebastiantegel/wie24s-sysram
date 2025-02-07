import { Todo } from "../models/Todo";

export interface IAction {
  type: string; // ADDED, REMOVED, TOGGLED
  payload: string;
}

export const TodosReducer = (todos: Todo[], action: IAction): Todo[] => {
  if (action.type === "ADDED") {
    return [...todos, new Todo(action.payload)];
  }
  if (action.type === "REMOVED") {
    return todos.filter((t) => t.id !== +action.payload);
  }
  if (action.type === "TOGGLED") {
    return todos.map((t) => {
      if (t.id === +action.payload) {
        return { ...t, done: !t.done };
      }
      return t;
    });
  }

  return todos;
};
